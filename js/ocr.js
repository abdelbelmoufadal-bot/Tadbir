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

async function ocrImageFile(file) {
  const Tesseract = await loadTesseract();
  const result = await Tesseract.recognize(file, 'eng');
  return (result && result.data && result.data.text) || '';
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
  nums.sort(function (a, b) { return b - a; });
  return nums[0];
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
      const pumpText = await ocrImageFile(pumpFile);
      const parsed = parsePumpNumbers(pumpText);
      if (parsed) {
        if (parsed.price != null) document.getElementById('fuel-price').value = parsed.price;
        if (parsed.total != null) document.getElementById('fuel-total').value = roundDown(parsed.total);
        if (parsed.consistent) messages.push('Pompe cohérente' + (parsed.litres ? ' · ' + parsed.litres.toFixed(2) + ' L' : ''));
        else messages.push('⚠️ Vérifiez le prix et le montant détectés');
      }
    }
    if (dashFile) {
      const dashText = await ocrImageFile(dashFile);
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
