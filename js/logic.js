// ══════════════════════════════════════════════
// BUDGET CALCULATION LOGIC (PURE FUNCTIONS)
// ══════════════════════════════════════════════

/**
 * Calculates the sum of actual and planned amounts for a specific section.
 */
function calcSumFromData(monthData, section) {
  const secData = monthData[section] || [];
  return secData.reduce((s, r) => ({ 
    act: s.act + Number(r.act || 0), 
    pln: s.pln + Number(r.pln || 0) 
  }), { act: 0, pln: 0 });
}

/**
 * Calculates the total actual expenses from notes, and planned expenses from expCatPln.
 */
function calcExpensesWithNotes(monthData, monthNotes) {
  let act = 0;
  (monthNotes || []).forEach(n => { act += Number(n.amount || 0); });
  
  const plnMap = monthData.expCatPln || {};
  let pln = 0;
  Object.values(plnMap).forEach(v => { pln += Number(v || 0); });
  
  return { act, pln };
}

/**
 * Calculates the complete budget totals for a given month.
 */
function calculateBudget(monthData, monthNotes) {
  if (!monthData) return { inc: {act:0, pln:0}, bill: {act:0, pln:0}, exp: {act:0, pln:0}, sav: {act:0, pln:0}, dbt: {act:0, pln:0}, rem: 0 };
  
  const inc = calcSumFromData(monthData, 'income');
  const bill = calcSumFromData(monthData, 'bills');
  const exp = calcExpensesWithNotes(monthData, monthNotes);
  const sav = calcSumFromData(monthData, 'savings');
  const dbt = calcSumFromData(monthData, 'debts');
  const rem = inc.act - bill.act - exp.act - sav.act - dbt.act;
  
  return { inc, bill, exp, sav, dbt, rem };
}

/**
 * Calculates advanced metrics based on budget values and current dates.
 */
function calcAdvancedMetrics(values, shownYear, shownMonth) {
  const today = new Date();
  const daysInMonth = new Date(shownYear, shownMonth + 1, 0).getDate();
  
  const shownIndex = shownYear * 12 + shownMonth;
  const currentIndex = today.getFullYear() * 12 + today.getMonth();
  
  const elapsed = shownIndex < currentIndex ? daysInMonth : shownIndex > currentIndex ? 1 : Math.max(1, today.getDate());
  const remainingDays = shownIndex < currentIndex ? 0 : shownIndex > currentIndex ? daysInMonth : Math.max(1, daysInMonth - today.getDate() + 1);
  
  const outflow = values.bill.act + values.exp.act + values.dbt.act;
  const dailyAverage = outflow / elapsed;
  const dailyBudget = remainingDays > 0 ? Math.max(0, values.rem) / remainingDays : 0;
  const projection = shownIndex === currentIndex ? dailyAverage * daysInMonth : outflow;
  const savingsRate = values.inc.act > 0 ? Math.round(values.sav.act / values.inc.act * 100) : 0;
  
  return {
    elapsed, 
    remainingDays, 
    outflow, 
    dailyAverage, 
    dailyBudget, 
    projection, 
    savingsRate
  };
}

/**
 * Checks if a specific month is closed.
 */
function checkIsMonthClosed(allData, monthKey) {
  return !!(allData[monthKey] && allData[monthKey]._closed);
}

/**
 * Calculates the final balance of a specific month (Total Income - Total Outcomes).
 */
function calcMonthBalanceByKey(allData, monthKey) {
  const d = allData[monthKey]; 
  if (!d) return 0;
  
  const sum = section => (d[section] || []).reduce((total, row) => total + Number(row.act || 0), 0);
  
  let notes = 0;
  Object.keys(allData).forEach(key => {
    ((allData[key] || {}).notes || []).forEach(note => {
      if (note.date && note.date.startsWith(monthKey)) notes += Number(note.amount || 0);
    });
  });
  
  return sum('income') - sum('bills') - notes - sum('savings') - sum('debts');
}
