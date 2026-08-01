// Tadbir vehicle fuel tracking

// FUEL / CARBURANT (dans l'onglet In Drive)
// ══════════════════════════════════════════════
function roundDown(value) {
  return Math.floor(Number(value) || 0);
}

let fuelEditingIndex = null;
let fuelEditingMonthKey = null;
let fuelInitialMode = false;

function getAllFuelRefs() {
  const refs = [];
  Object.keys(allData).filter(function (key) { return /^\d{4}-\d{2}$/.test(key); }).forEach(function (monthKey) {
    getFuelData(monthKey).forEach(function (entry, index) { refs.push({ monthKey, index, entry }); });
  });
  return refs.sort(function (a, b) {
    if (!!a.entry.isInitial !== !!b.entry.isInitial) return a.entry.isInitial ? -1 : 1;
    return String(a.entry.date || '').localeCompare(String(b.entry.date || '')) || a.monthKey.localeCompare(b.monthKey) || a.index - b.index;
  });
}

function hasFuelInitialEver() {
  return Object.keys(allData).some(function (key) {
    const month = allData[key] || {};
    return month._fuelInitialEver || (month.fuelEntries || []).some(function (entry) { return entry.isInitial; });
  });
}

function relinkAllFuelEntries() {
  let previousKm = 0;
  getAllFuelRefs().forEach(function (ref) {
    if (ref.entry.isInitial) {
      ref.entry.prevKm = 0;
      ref.entry.currKm = 0;
      previousKm = 0;
      return;
    }
    ref.entry.prevKm = previousKm;
    previousKm = roundDown(ref.entry.currKm);
  });
}

function fuelTimelineIsValid() {
  return getAllFuelRefs().every(function (ref) { return ref.entry.isInitial || roundDown(ref.entry.currKm) > roundDown(ref.entry.prevKm); });
}

function startInitialFuelEntry() {
  if (hasFuelInitialEver()) return;
  fuelEditingIndex = null;
  fuelEditingMonthKey = null;
  fuelInitialMode = true;
  document.getElementById('fuel-prev-km').value = 0;
  document.getElementById('fuel-curr-km').value = 0;
  document.getElementById('fuel-prev-km').readOnly = true;
  document.getElementById('fuel-curr-km').readOnly = true;
  document.getElementById('fuel-add-title').textContent = '🚘 Plein initial — point de départ à 0 km';
  document.getElementById('fuel-submit-lbl').textContent = 'Enregistrer le plein initial';
  document.getElementById('fuel-submit-btn').disabled = false;
  document.getElementById('fuel-cancel-edit-btn').style.display = 'block';
}

function editFuelEntry(index) {
  if (!ensureMonthEditable()) return;
  const entry = getFuelData()[index];
  if (!entry) return;
  fuelEditingIndex = index;
  fuelEditingMonthKey = ck();
  fuelInitialMode = !!entry.isInitial;
  document.getElementById('fuel-date').value = entry.date || '';
  document.getElementById('fuel-prev-km').value = entry.prevKm;
  document.getElementById('fuel-curr-km').value = entry.currKm;
  document.getElementById('fuel-litres').value = Number(entry.litres) > 0 ? entry.litres : (entry.pricePerLitre > 0 ? (entry.totalAmount / entry.pricePerLitre).toFixed(2) : '');
  document.getElementById('fuel-price').value = entry.pricePerLitre || '';
  document.getElementById('fuel-total').value = entry.totalAmount || '';
  document.getElementById('fuel-prev-km').readOnly = true;
  document.getElementById('fuel-curr-km').readOnly = fuelInitialMode;
  document.getElementById('fuel-add-title').textContent = fuelInitialMode ? '🚘 Modifier le plein initial' : '✏️ Modifier le plein';
  document.getElementById('fuel-submit-lbl').textContent = 'Enregistrer les modifications';
  document.getElementById('fuel-submit-btn').disabled = false;
  document.getElementById('fuel-cancel-edit-btn').style.display = 'block';
  updateFuelDraftCheck();
  document.getElementById('fuel-add-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function cancelFuelEdit() {
  fuelEditingIndex = null;
  fuelEditingMonthKey = null;
  fuelInitialMode = false;
  ['fuel-curr-km', 'fuel-litres', 'fuel-price', 'fuel-total'].forEach(function (id) { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('fuel-curr-km').readOnly = false;
  document.getElementById('fuel-add-title').textContent = T().fuel_add_title || 'Ajouter un plein';
  document.getElementById('fuel-submit-lbl').textContent = T().fuel_submit || 'Enregistrer le plein';
  document.getElementById('fuel-cancel-edit-btn').style.display = 'none';
  renderFuelTab();
}

function getFuelData(monthKey = ck()) {
  return (allData[monthKey] || {}).fuelEntries || [];
}

// Corrige les anciennes saisies enregistrées dans le mois affiché plutôt que
// dans le mois indiqué par leur date.
function migrateFuelEntriesToDateMonths() {
  const touched = new Set();
  Object.keys(allData).filter(function (key) { return /^\d{4}-\d{2}$/.test(key); }).forEach(function (sourceKey) {
    const entries = getFuelData(sourceKey);
    for (let i = entries.length - 1; i >= 0; i--) {
      const targetKey = String(entries[i].date || '').slice(0, 7);
      if (!/^\d{4}-\d{2}$/.test(targetKey) || targetKey === sourceKey) continue;
      if (!allData[targetKey]) allData[targetKey] = defMonth();
      if (!allData[targetKey].fuelEntries) allData[targetKey].fuelEntries = [];
      allData[targetKey].fuelEntries.push(entries[i]);
      entries.splice(i, 1);
      touched.add(sourceKey); touched.add(targetKey);
    }
  });
  if (touched.size) {
    relinkAllFuelEntries();
    touched.forEach(function (monthKey) { syncCarCostsToBudget(monthKey); });
    persistData();
  }
  return touched.size > 0;
}

function getLatestFuelBefore(monthKey = ck()) {
  const keys = Object.keys(allData).filter(function (key) {
    return /^\d{4}-\d{2}$/.test(key) && key < monthKey && getFuelData(key).length > 0;
  }).sort().reverse();
  if (!keys.length) return null;
  const entries = getFuelData(keys[0]).slice().sort(function (a, b) { return String(a.date || '').localeCompare(String(b.date || '')); });
  return entries[entries.length - 1] || null;
}

// Récupère le dernier kilométrage disponible, même si plusieurs mois sont vides.
function getAutoPreviousKm(monthKey = ck()) {
  const current = getFuelData(monthKey);
  if (current.length > 0) return roundDown(current[current.length - 1].currKm);
  const previous = getLatestFuelBefore(monthKey);
  return previous ? roundDown(previous.currKm) : 0;
}

function relinkFuelEntriesAfterDelete(monthKey, startIndex) {
  const entries = getFuelData(monthKey);
  if (!entries.length || startIndex >= entries.length) return;
  let previousKm;
  if (startIndex > 0) previousKm = roundDown(entries[startIndex - 1].currKm);
  else {
    const previous = getLatestFuelBefore(monthKey);
    previousKm = previous ? roundDown(previous.currKm) : roundDown(entries[0].prevKm);
  }
  for (let i = startIndex; i < entries.length; i++) {
    entries[i].prevKm = previousKm;
    previousKm = roundDown(entries[i].currKm);
  }
}

function updateFuelDraftCheck() {
  const litresEl = document.getElementById('fuel-litres');
  const priceEl = document.getElementById('fuel-price');
  const totalEl = document.getElementById('fuel-total');
  const hint = document.getElementById('fuel-manual-hint');
  if (!litresEl || !priceEl || !totalEl || !hint) return;
  const litres = Number(litresEl.value) || 0;
  const price = Number(priceEl.value) || 0;
  const total = Number(totalEl.value) || 0;
  [litresEl, priceEl, totalEl].forEach(function (el) { el.style.borderColor = ''; });
  if (!litres || !price || !total) {
    hint.textContent = '✏️ Corrigez les valeurs détectées ou complétez les champs manquants.';
    hint.style.color = 'var(--light)';
    return;
  }
  const error = Math.abs(total - litres * price) / Math.max(total, 1);
  const valid = error <= 0.08;
  hint.textContent = valid ? '✓ Valeurs cohérentes — vous pouvez enregistrer.' : '⚠️ Vérifiez : litres × prix doit être proche du montant.';
  hint.style.color = valid ? 'var(--mint)' : '#f2a65a';
  if (!valid) [litresEl, priceEl, totalEl].forEach(function (el) { el.style.borderColor = '#f2a65a'; });
}

function addFuelEntry() {
  if (!ensureMonthEditable()) return;
  const date = document.getElementById('fuel-date').value;
  const mk = String(date || '').slice(0, 7);
  if (!/^\d{4}-\d{2}$/.test(mk)) {
    showToast('❌ Date invalide');
    return;
  }
  if (typeof isMonthClosed === 'function' && isMonthClosed(mk)) {
    showToast('🔒 Le mois correspondant à cette date est clôturé');
    return;
  }
  if (!allData[mk]) allData[mk] = defMonth();
  if (!allData[mk].fuelEntries) allData[mk].fuelEntries = [];
  const targetCount = allData[mk].fuelEntries.filter(function (entry) { return !entry.isInitial; }).length;
  const editingSameMonth = fuelEditingIndex != null && fuelEditingMonthKey === mk;
  if (!fuelInitialMode && targetCount - (editingSameMonth ? 1 : 0) >= 3) {
    showToast(T().fuel_max || '⚠️ Maximum 3 pleins par mois atteint');
    return;
  }
  const prevKm = fuelInitialMode ? 0 : roundDown(document.getElementById('fuel-prev-km').value);
  const currKm = fuelInitialMode ? 0 : roundDown(document.getElementById('fuel-curr-km').value);
  let litres = Number(document.getElementById('fuel-litres').value) || 0;
  let pricePerLitre = Number(document.getElementById('fuel-price').value) || 0;
  let totalAmount = Number(document.getElementById('fuel-total').value) || 0;
  if (!totalAmount && litres > 0 && pricePerLitre > 0) totalAmount = litres * pricePerLitre;
  if (!pricePerLitre && litres > 0 && totalAmount > 0) pricePerLitre = totalAmount / litres;
  if (!litres && pricePerLitre > 0 && totalAmount > 0) litres = totalAmount / pricePerLitre;
  if (!date || (!fuelInitialMode && currKm <= prevKm) || totalAmount <= 0 || pricePerLitre <= 0 || litres <= 0) {
    showToast('❌ ' + (T().fuel_fill || 'Vérifiez les champs'));
    return;
  }
  const entry = { date, prevKm, currKm, pricePerLitre, totalAmount: roundDown(totalAmount), litres: Math.round(litres * 100) / 100, isInitial: fuelInitialMode };
  const backup = JSON.parse(JSON.stringify(allData));
  const sourceMk = fuelEditingMonthKey;
  if (fuelEditingIndex != null && sourceMk && allData[sourceMk] && allData[sourceMk].fuelEntries) {
    if (sourceMk === mk) allData[mk].fuelEntries[fuelEditingIndex] = entry;
    else {
      allData[sourceMk].fuelEntries.splice(fuelEditingIndex, 1);
      allData[mk].fuelEntries.push(entry);
    }
  } else allData[mk].fuelEntries.push(entry);
  if (fuelInitialMode) allData[mk]._fuelInitialEver = true;
  relinkAllFuelEntries();
  if (!fuelTimelineIsValid()) {
    allData = backup;
    showToast('❌ Kilométrage incompatible avec le plein suivant');
    return;
  }
  if (sourceMk && sourceMk !== mk) syncCarCostsToBudget(sourceMk);
  syncCarCostsToBudget(mk); persistData();
  document.getElementById('fuel-curr-km').value = '';
  document.getElementById('fuel-price').value = '';
  document.getElementById('fuel-litres').value = '';
  document.getElementById('fuel-total').value = '';
  const pumpInput = document.getElementById('fuel-ocr-pump-input'); if (pumpInput) pumpInput.value = '';
  const dashInput = document.getElementById('fuel-ocr-dash-input'); if (dashInput) dashInput.value = '';
  const statusEl = document.getElementById('fuel-ocr-status'); if (statusEl) statusEl.textContent = '';
  const wasEditing = fuelEditingIndex != null;
  fuelEditingIndex = null; fuelEditingMonthKey = null; fuelInitialMode = false;
  document.getElementById('fuel-curr-km').readOnly = false;
  document.getElementById('fuel-add-title').textContent = T().fuel_add_title || 'Ajouter un plein';
  document.getElementById('fuel-submit-lbl').textContent = T().fuel_submit || 'Enregistrer le plein';
  document.getElementById('fuel-cancel-edit-btn').style.display = 'none';
  renderFuelTab();
  showToast(wasEditing ? '✓ Modification enregistrée' : (T().toast_add || '✓'));
}

function deleteFuelEntry(idx) {
  if (!ensureMonthEditable()) return;
  const mk = ck();
  if (!allData[mk] || !allData[mk].fuelEntries) return;
  allData[mk].fuelEntries.splice(idx, 1);
  relinkAllFuelEntries();
  syncCarCostsToBudget(mk); persistData();
  renderFuelTab();
}

function renderFuelTab() {
  const panel = document.getElementById('tab-drive');
  if (!panel || !panel.classList.contains('active')) return;
  const t = T();
  migrateFuelEntriesToDateMonths();
  const entries = getFuelData();

  const initialBtn = document.getElementById('fuel-initial-btn');
  if (initialBtn) initialBtn.style.display = hasFuelInitialEver() ? 'none' : 'block';

  // Auto-remplir le kilométrage précédent
  const prevKmInput = document.getElementById('fuel-prev-km');
  if (prevKmInput) {
    const autoPreviousKm = getAutoPreviousKm();
    prevKmInput.value = autoPreviousKm || prevKmInput.value || '';
    prevKmInput.readOnly = entries.length > 0;
    prevKmInput.style.opacity = entries.length > 0 ? '.6' : '1';
  }

  // Date du jour par défaut
  const dateInput = document.getElementById('fuel-date');
  if (dateInput && !dateInput.value) dateInput.value = new Date().toISOString().slice(0, 10);

  // Désactiver l'ajout si 3 pleins déjà enregistrés ce mois
  const addBtn = document.getElementById('fuel-submit-btn');
  if (addBtn) addBtn.disabled = false;

  // Statistiques du mois
  let totalKm = 0, totalCost = 0, totalLitres = 0;
  entries.forEach(function (e) {
    const distance = e.currKm - e.prevKm;
    const litres = Number(e.litres) > 0 ? Number(e.litres) : (e.pricePerLitre > 0 ? e.totalAmount / e.pricePerLitre : 0);
    totalKm += distance; totalCost += e.totalAmount; if (!e.isInitial) totalLitres += litres;
  });
  const avgConso = totalKm > 0 ? (totalLitres / totalKm) * 100 : 0;
  const avgPriceKm = totalKm > 0 ? totalCost / totalKm : 0;
  var el;
  el = document.getElementById('fuel-stat-km'); if (el) el.textContent = fmt(totalKm);
  el = document.getElementById('fuel-stat-cost'); if (el) el.textContent = fmt(totalCost);
  el = document.getElementById('fuel-stat-conso'); if (el) el.textContent = avgConso.toFixed(1);
  el = document.getElementById('fuel-stat-pricekm'); if (el) el.textContent = avgPriceKm.toFixed(2);

  // Liste des pleins
  const list = document.getElementById('fuel-entries-list');
  if (!list) return;
  list.innerHTML = '';
  if (!entries.length) {
    list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--light);font-size:12px;">' + (t.fuel_empty || '⛽') + '</div>';
    return;
  }
  const sorted = entries.map(function (e, i) { return Object.assign({}, e, { _idx: i }); })
    .sort(function (a, b) { return b.date.localeCompare(a.date); });
  sorted.forEach(function (e) {
    const distance = e.currKm - e.prevKm;
    const litres = Number(e.litres) > 0 ? Number(e.litres) : (e.pricePerLitre > 0 ? e.totalAmount / e.pricePerLitre : 0);
    const conso = !e.isInitial && distance > 0 ? (litres / distance) * 100 : 0;
    const priceKm = distance > 0 ? e.totalAmount / distance : 0;
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border);';
    const icon = document.createElement('div');
    icon.style.cssText = 'width:36px;height:36px;border-radius:10px;background:var(--mint-ll);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;';
    icon.textContent = '⛽';
    const info = document.createElement('div');
    info.style.cssText = 'flex:1;';
    info.innerHTML = '<div style="font-size:14px;font-weight:600;color:var(--dark);">' + (e.isInitial ? '🚘 Point de départ • ' : '') + e.date + ' • ' + e.prevKm + ' → ' + e.currKm + ' km</div>'
      + '<div style="font-size:12px;color:var(--light);">' + (e.isInitial ? litres.toFixed(2) + ' L • aucune consommation calculée' : distance + ' km • ' + conso.toFixed(1) + 'L/100km • ' + priceKm.toFixed(2) + ' ' + currency + '/km') + '</div>';
    const amt = document.createElement('div');
    amt.style.cssText = 'font-family:"DM Mono",monospace;font-size:15px;font-weight:800;color:var(--mint);flex-shrink:0;';
    amt.textContent = fmt(e.totalAmount);
    const del = document.createElement('button');
    del.style.cssText = 'background:none;border:none;color:#ddd;cursor:pointer;font-size:14px;flex-shrink:0;';
    del.textContent = '✕';
    del.onclick = (function (idx) { return function () { deleteFuelEntry(idx); }; })(e._idx);
    const edit = document.createElement('button');
    edit.style.cssText = 'background:none;border:none;color:var(--blue);cursor:pointer;font-size:16px;flex-shrink:0;';
    edit.textContent = '✏️';
    edit.title = 'Modifier';
    edit.onclick = (function (idx) { return function () { editFuelEntry(idx); }; })(e._idx);
    row.appendChild(icon); row.appendChild(info); row.appendChild(amt); row.appendChild(edit); row.appendChild(del);
    list.appendChild(row);
  });
}

// ══════════════════════════════════════════════
