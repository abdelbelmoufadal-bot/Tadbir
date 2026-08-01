// Tadbir local OCR helpers for fuel photos

// ── OCR (Tesseract.js) — analyse des photos pompe / tableau de bord ──
let _tesseractLoadPromise = null;
function loadTesseract() {
  if (window.Tesseract) return Promise.resolve(window.Tesseract);
  if (_tesseractLoadPromise) return _tesseractLoadPromise;
  _tesseractLoadPromise = new Promise(function (resolve, reject) {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.0.4/dist/tesseract.min.js';
    s.onload = function () { resolve(window.Tesseract); };
    s.onerror = function () { _tesseractLoadPromise = null; reject(new Error('tesseract-load-failed')); };
    document.head.appendChild(s);
  });
  return _tesseractLoadPromise;
}

const OCR_CROPS = {
  pump: [
    { x: 0.00, y: 0.08, w: 0.78, h: 0.30 },
    { x: 0.39, y: 0.12, w: 0.36, h: 0.22 }
  ],
  dash: [
    { x: 0.00, y: 0.30, w: 0.70, h: 0.30 },
    { x: 0.40, y: 0.34, w: 0.28, h: 0.20 }
  ]
};

function loadOCRImage(file) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = function () { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('image-load-failed')); };
    img.src = url;
  });
}

function createOCRCanvas(img, crop, threshold) {
  const sx = Math.max(0, Math.round(img.naturalWidth * crop.x));
  const sy = Math.max(0, Math.round(img.naturalHeight * crop.y));
  const sw = Math.max(1, Math.min(img.naturalWidth - sx, Math.round(img.naturalWidth * crop.w)));
  const sh = Math.max(1, Math.min(img.naturalHeight - sy, Math.round(img.naturalHeight * crop.h)));
  const scale = 3;
  const canvas = document.createElement('canvas');
  canvas.width = sw * scale;
  canvas.height = sh * scale;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < pixels.data.length; i += 4) {
    const grey = 0.299 * pixels.data[i] + 0.587 * pixels.data[i + 1] + 0.114 * pixels.data[i + 2];
    const enhanced = threshold ? (grey >= threshold ? 255 : 0) : Math.max(0, Math.min(255, (grey - 105) * 2.25 + 128));
    pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = enhanced;
  }
  ctx.putImageData(pixels, 0, 0);
  return canvas;
}

async function recognizeOCRSource(Tesseract, source) {
  const result = await Tesseract.recognize(source, 'eng', {
    tessedit_char_whitelist: '0123456789.,',
    preserve_interword_spaces: '1'
  });
  return (result && result.data && result.data.text) || '';
}

async function ocrImageFile(file, kind) {
  const Tesseract = await loadTesseract();
  const img = await loadOCRImage(file);
  const crops = OCR_CROPS[kind] || [{ x: 0, y: 0, w: 1, h: 1 }];
  const texts = [];
  for (let i = 0; i < crops.length; i++) {
    // La vue large conserve le contexte; la vue serrée noir/blanc cible les chiffres LCD.
    texts.push(await recognizeOCRSource(Tesseract, createOCRCanvas(img, crops[i], i === crops.length - 1 ? 150 : null)));
  }
  return texts.join('\n');
}

function extractNumbersFromText(text) {
  const matches = text.match(/\d{1,6}[.,]\d{1,2}|\d{2,6}/g) || [];
  return matches.map(function (m) { return parseFloat(m.replace(',', '.')); }).filter(function (n) { return !isNaN(n) && n > 0; });
}

// Heuristique : prix/litre généralement entre 6 et 30 MAD, le montant total est
// généralement le plus grand des nombres restants, les litres le plus petit.
function parsePumpNumbers(text) {
  const nums = extractNumbersFromText(text);
  if (!nums.length) return null;
  let best = null;
  nums.forEach(function (price) {
    if (price < 6 || price > 30) return;
    nums.forEach(function (litres) {
      if (litres < 5 || litres > 100 || litres === price) return;
      nums.forEach(function (total) {
        if (total < 50 || total <= litres || total === price) return;
        const expected = price * litres;
        const error = Math.abs(total - expected) / Math.max(total, 1);
        if (error <= 0.08 && (!best || error < best.error)) best = { price, litres, total, error };
      });
    });
  });
  if (best) return { price: best.price, litres: best.litres, total: best.total, confidence: 1 - best.error, consistent: true };
  let price;
  const priceIdx = nums.findIndex(function (n) { return n >= 6 && n <= 30; });
  const rest = nums.slice();
  if (priceIdx !== -1) { price = rest.splice(priceIdx, 1)[0]; }
  if (!rest.length) return price !== undefined ? { price: price, total: null } : null;
  rest.sort(function (a, b) { return b - a; });
  const total = rest[0];
  if (price === undefined) price = rest[rest.length - 1];
  return { price: price, total: total, litres: null, confidence: 0.35, consistent: false };
}

// Heuristique : le kilométrage est généralement le plus grand nombre détecté sur le tableau de bord
function parseDashNumber(text) {
  const nums = extractNumbersFromText(text);
  if (!nums.length) return null;
  const plausibleOdometers = nums.filter(function (n) { return n >= 500 && n <= 999999; });
  const candidates = plausibleOdometers.length ? plausibleOdometers : nums.filter(function (n) { return n <= 999999; });
  candidates.sort(function (a, b) { return b - a; });
  return candidates[0] || null;
}

async function processFuelImagesOCR() {
  const pumpFile = (document.getElementById('fuel-ocr-pump-input') || {}).files && document.getElementById('fuel-ocr-pump-input').files[0];
  const dashFile = (document.getElementById('fuel-ocr-dash-input') || {}).files && document.getElementById('fuel-ocr-dash-input').files[0];
  const statusEl = document.getElementById('fuel-ocr-status');
  if (!pumpFile && !dashFile) {
    showToast('❌ ' + (T().fuel_fill || 'Ajoutez au moins une photo'));
    return;
  }
  const btn = document.getElementById('fuel-ocr-btn-el');
  if (btn) btn.disabled = true;
  if (statusEl) statusEl.textContent = T().fuel_ocr_loading || 'Analyse en cours...';
  try {
    const messages = [];
    if (pumpFile) {
      const pumpText = await ocrImageFile(pumpFile, 'pump');
      const parsed = parsePumpNumbers(pumpText);
      if (parsed) {
        if (parsed.price != null) document.getElementById('fuel-price').value = parsed.price;
        if (parsed.total != null) document.getElementById('fuel-total').value = roundDown(parsed.total);
        if (parsed.consistent) messages.push('Pompe: ' + parsed.total.toFixed(2) + ' MAD · ' + parsed.litres.toFixed(2) + ' L · ' + parsed.price.toFixed(2) + ' MAD/L');
        else messages.push('⚠️ Vérifiez le prix et le montant détectés');
      }
    }
    if (dashFile) {
      const dashText = await ocrImageFile(dashFile, 'dash');
      const km = parseDashNumber(dashText);
      if (km != null) {
        const roundedKm = roundDown(km);
        document.getElementById('fuel-curr-km').value = roundedKm;
        const previousKm = roundDown(document.getElementById('fuel-prev-km').value);
        messages.push(roundedKm > previousKm ? 'Compteur détecté: ' + roundedKm + ' km' : '⚠️ Le compteur détecté est inférieur au précédent');
      }
    }
    if (statusEl) statusEl.textContent = (T().fuel_ocr_ok || '✓') + (messages.length ? ' — ' + messages.join(' · ') : '');
    showToast(T().fuel_ocr_ok || '✓');
  } catch (e) {
    if (statusEl) statusEl.textContent = T().fuel_ocr_loadfail || '❌';
    showToast('❌ ' + (T().fuel_ocr_loadfail || 'Erreur OCR'));
  } finally {
    if (btn) btn.disabled = false;
  }
}

// ══════════════════════════════════════════════
