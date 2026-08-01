// Tadbir vehicle workspace and profitability

let _currentCarSubTab = 'indrive';

function switchCarSubTab(subTabId, btnEl) {
  _currentCarSubTab = subTabId;
  const sections = ['indrive', 'fuel', 'maint', 'summary'];
  sections.forEach(function (s) {
    const secEl = document.getElementById('car-sec-' + s);
    const btn = document.getElementById('car-subtab-' + s);
    if (secEl) secEl.style.display = (s === subTabId) ? 'block' : 'none';
    if (btn) btn.classList.toggle('active', s === subTabId);
  });
  renderCarTab();
}

function renderCarSummaryTab() {
  const driveEntries = getDriveData();
  const fuelEntries = getFuelData();
  const carExpenses = getCarExpensesData();

  const totalDriveRev = driveEntries.reduce(function (s, e) { return s + Number(e.total || 0); }, 0);
  const totalFuelCost = fuelEntries.reduce(function (s, e) { return s + Number(e.totalAmount || 0); }, 0);
  const totalCarMaint = carExpenses.reduce(function (s, e) { return s + Number(e.amount || 0); }, 0);

  const totalCarCharges = totalFuelCost + totalCarMaint;
  const netProfit = totalDriveRev - totalCarCharges;
  const marginPct = totalDriveRev > 0 ? Math.round((netProfit / totalDriveRev) * 100) : 0;
  const totalKm = fuelEntries.reduce(function (sum, entry) { return sum + Math.max(0, Number(entry.currKm || 0) - Number(entry.prevKm || 0)); }, 0);
  const costPerKm = totalKm > 0 ? totalCarCharges / totalKm : 0;
  const revenuePerKm = totalKm > 0 ? totalDriveRev / totalKm : 0;

  var el;
  el = document.getElementById('car-sum-revenue'); if (el) el.textContent = fmt(totalDriveRev);
  el = document.getElementById('car-sum-fuel'); if (el) el.textContent = fmt(totalFuelCost);
  el = document.getElementById('car-sum-maint'); if (el) el.textContent = fmt(totalCarMaint);
  el = document.getElementById('car-sum-total-exp'); if (el) el.textContent = fmt(totalCarCharges);
  el = document.getElementById('car-sum-cost-km'); if (el) el.textContent = costPerKm.toFixed(2);
  el = document.getElementById('car-sum-revenue-km'); if (el) el.textContent = revenuePerKm.toFixed(2);

  const netEl = document.getElementById('car-val-net-profit');
  if (netEl) {
    netEl.textContent = fmt(netProfit) + ' ' + currency;
    netEl.style.color = netProfit >= 0 ? '#7EC8B0' : '#FCA5A5';
  }

  const marginEl = document.getElementById('car-val-margin-pct');
  if (marginEl) {
    marginEl.textContent = 'Marge Nette: ' + marginPct + '%';
  }

  const textEl = document.getElementById('car-analysis-text');
  if (textEl) {
    if (totalDriveRev === 0) {
      textEl.textContent = 'Enregistrez vos trajets InDrive pour voir votre bénéfice net après déduction du carburant et des frais d\'entretien.';
    } else {
      textEl.textContent = 'Recettes InDrive (' + fmt(totalDriveRev) + ') - [Carburant (' + fmt(totalFuelCost) + ') + Entretiens (' + fmt(totalCarMaint) + ')] = Profit Net: ' + fmt(netProfit) + ' ' + currency + '.';
    }
  }
}

function renderCarTab() {
  const panel = document.getElementById('tab-drive');
  if (!panel || !panel.classList.contains('active')) return;
  syncCarCostsToBudget();
  renderDriveTab();
  renderFuelTab();
  renderCarMaintenanceTab();
  renderCarSummaryTab();
  renderExpensesCats(); recalc();
}
