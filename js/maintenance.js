// Tadbir vehicle expenses and maintenance tracking

function getCarExpensesData() {
  return (allData[ck()] || {}).carExpenses || [];
}

function getAllCarExpenses() {
  const result = [];
  Object.keys(allData).filter(function (key) { return /^\d{4}-\d{2}$/.test(key); }).sort().forEach(function (monthKey) {
    ((allData[monthKey] || {}).carExpenses || []).forEach(function (entry) {
      result.push(Object.assign({ _monthKey: monthKey }, entry));
    });
  });
  return result;
}

function syncCarCostsToBudget(monthKey = ck()) {
  if (!allData[monthKey]) allData[monthKey] = defMonth();
  const month = allData[monthKey];
  if (!month.notes) month.notes = [];
  const notes = month.notes.filter(function (note) { return note.source !== 'car-auto'; });
  (month.fuelEntries || []).forEach(function (entry) {
    notes.push({ date: entry.date, mainCat: 'transport', subCat: 'Gasoil', note: 'Gasoil', cat: 'Gasoil', chips: [], amount: roundDown(entry.totalAmount), person: 'self', remark: 'Plein voiture', source: 'car-auto', carRef: 'fuel:' + entry.date + ':' + entry.currKm });
  });
  (month.carExpenses || []).forEach(function (entry) {
    const subCat = entry.type === 'lavage' ? 'Lavage voiture' : 'Entretien voiture';
    notes.push({ date: entry.date, mainCat: 'transport', subCat: subCat, note: entry.label || subCat, cat: subCat, chips: [], amount: Number(entry.amount) || 0, person: 'self', remark: entry.label || '', source: 'car-auto', carRef: 'expense:' + entry.id });
  });
  month.notes = notes;
}

function addCarExpense() {
  if (!ensureMonthEditable()) return;
  const date = document.getElementById('car-exp-date').value || new Date().toISOString().slice(0, 10);
  const type = document.getElementById('car-exp-type').value || 'autre';
  const label = (document.getElementById('car-exp-label').value || '').trim();
  const amount = roundDown(document.getElementById('car-exp-amount').value);
  const km = roundDown(document.getElementById('car-exp-km').value);
  const nextKm = roundDown(document.getElementById('car-exp-next-km').value);
  const nextDate = document.getElementById('car-exp-next-date').value || '';
  const isFixed = (document.getElementById('car-exp-fixed').value === 'fixed');

  if (amount <= 0 || !label) {
    showToast('❌ ' + (T().car_exp_fill || 'Veuillez remplir le libellé et le montant'));
    return;
  }

  const mk = ck();
  if (!allData[mk]) allData[mk] = defMonth();
  if (!allData[mk].carExpenses) allData[mk].carExpenses = [];

  allData[mk].carExpenses.push({
    id: Date.now(),
    date: date,
    type: type,
    label: label,
    amount: amount,
    km: km,
    nextKm: nextKm,
    nextDate: nextDate,
    isFixed: isFixed
  });

  document.getElementById('car-exp-label').value = '';
  document.getElementById('car-exp-amount').value = '';
  document.getElementById('car-exp-km').value = '';
  document.getElementById('car-exp-next-km').value = '';
  document.getElementById('car-exp-next-date').value = '';

  syncCarCostsToBudget(mk); persistData();
  renderExpensesCats(); recalc();
  renderCarTab();
  showToast(T().toast_add || '✓ Frais enregistré');
}

function deleteCarExpense(idx) {
  if (!ensureMonthEditable()) return;
  const mk = ck();
  if (!allData[mk] || !allData[mk].carExpenses) return;
  allData[mk].carExpenses.splice(idx, 1);
  syncCarCostsToBudget(mk); persistData();
  renderExpensesCats(); recalc();
  renderCarTab();
}

function renderCarMaintenanceTab() {
  const expenses = getCarExpensesData();
  const allExpenses = getAllCarExpenses();
  let totalMaint = 0, fixedCount = 0, varCount = 0, fixedTotal = 0, varTotal = 0;
  expenses.forEach(function (e) {
    totalMaint += e.amount;
    if (e.isFixed) { fixedCount++; fixedTotal += e.amount; }
    else { varCount++; varTotal += e.amount; }
  });

  var el;
  el = document.getElementById('car-maint-total'); if (el) el.textContent = fmt(totalMaint);
  el = document.getElementById('car-maint-fixed'); if (el) el.textContent = fmt(fixedTotal);
  el = document.getElementById('car-maint-variable'); if (el) el.textContent = fmt(varTotal);
  el = document.getElementById('car-maint-count'); if (el) el.textContent = expenses.length;

  // Reminders / Alerts
  const currentKm = getAutoPreviousKm();
  const lastOilEntry = allExpenses.slice().reverse().find(function (e) { return e.type === 'vidange' && e.km > 0; });
  const lastTiresEntry = allExpenses.slice().reverse().find(function (e) { return e.type === 'pneu' && e.km > 0; });

  const oilNextEl = document.getElementById('car-next-oil');
  if (oilNextEl) {
    if (lastOilEntry) {
      const nextKm = lastOilEntry.nextKm > lastOilEntry.km ? lastOilEntry.nextKm : lastOilEntry.km + 10000;
      const remain = nextKm - currentKm;
      const dateInfo = lastOilEntry.nextDate ? ' · ' + lastOilEntry.nextDate : '';
      oilNextEl.textContent = nextKm + ' km (' + (remain > 0 ? 'dans ' + remain + ' km' : '⚠️ Dépassé') + ')' + dateInfo;
    } else {
      oilNextEl.textContent = 'Non enregistrée (Tous les 10 000 km)';
    }
  }

  const tiresNextEl = document.getElementById('car-next-tires');
  if (tiresNextEl) {
    if (lastTiresEntry) {
      const nextKm = lastTiresEntry.nextKm > lastTiresEntry.km ? lastTiresEntry.nextKm : lastTiresEntry.km + 40000;
      const remain = nextKm - currentKm;
      const dateInfo = lastTiresEntry.nextDate ? ' · ' + lastTiresEntry.nextDate : '';
      tiresNextEl.textContent = nextKm + ' km (' + (remain > 0 ? 'dans ' + remain + ' km' : '⚠️ À vérifier') + ')' + dateInfo;
    } else {
      tiresNextEl.textContent = 'Non enregistré (Tous les 40 000 km)';
    }
  }

  // List of expenses
  const list = document.getElementById('car-expenses-list');
  if (!list) return;
  list.innerHTML = '';
  if (!expenses.length) {
    list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--light);font-size:12px;">🛠️ Aucun frais enregistré ce mois</div>';
    return;
  }
  const typeIcons = { vidange: '🛢️', pneu: '🛞', reparation: '🛠️', assurance: '📄', vignette: '🏷️', lavage: '🧼', autre: '📦' };
  expenses.slice().reverse().forEach(function (e, i) {
    const origIdx = expenses.length - 1 - i;
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border);';
    const icon = document.createElement('div');
    icon.style.cssText = 'width:36px;height:36px;border-radius:10px;background:rgba(252,165,165,.15);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;';
    icon.textContent = typeIcons[e.type] || '🛠️';
    const info = document.createElement('div');
    info.style.cssText = 'flex:1;';
    const kmTxt = e.km ? ' • ' + e.km + ' km' : '';
    const fixTxt = e.isFixed ? '📌 Charge fixe' : '⚡ Charge variable';
    const nextParts = [];
    if (e.nextKm) nextParts.push('prochain: ' + e.nextKm + ' km');
    if (e.nextDate) nextParts.push('date: ' + e.nextDate);
    const overdueByKm = e.nextKm && currentKm >= e.nextKm;
    const overdueByDate = e.nextDate && new Date(e.nextDate + 'T00:00:00') < new Date(new Date().toDateString());
    const nextTxt = nextParts.length ? ' • ' + nextParts.join(' / ') + (overdueByKm || overdueByDate ? ' ⚠️ En retard' : '') : '';
    const title = document.createElement('div');
    title.style.cssText = 'font-size:14px;font-weight:600;color:var(--dark);';
    title.textContent = e.label;
    const meta = document.createElement('div');
    meta.style.cssText = 'font-size:12px;color:var(--light);';
    meta.textContent = e.date + kmTxt + ' • ' + fixTxt + nextTxt;
    info.appendChild(title); info.appendChild(meta);
    const amt = document.createElement('div');
    amt.style.cssText = 'font-family:"DM Mono",monospace;font-size:15px;font-weight:800;color:#FCA5A5;flex-shrink:0;';
    amt.textContent = fmt(e.amount);
    const del = document.createElement('button');
    del.style.cssText = 'background:none;border:none;color:#ddd;cursor:pointer;font-size:14px;flex-shrink:0;';
    del.textContent = '✕';
    del.onclick = function () { deleteCarExpense(origIdx); };
    row.appendChild(icon); row.appendChild(info); row.appendChild(amt); row.appendChild(del);
    list.appendChild(row);
  });
}
