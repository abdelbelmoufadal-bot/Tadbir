// Tadbir storage, backups, imports and Firebase synchronization

// DATA — KEY FIX: saveData reads DOM first
// ══════════════════════════════════════════════
function monthHasRealData(mk) {
  const d = allData[mk];
  if (!d) return false;
  // Month has real data if ANY section has rows (even 1 row)
  // This prevents overwriting user-deleted or user-customized data
  const secs = ['bills', 'expenses', 'savings', 'debts', 'income'];
  const hasAny = secs.some(s => d[s] && d[s].length > 0);
  if (!hasAny) return false;
  // Also check: if it has the minimum required sections
  if (!d.bills || !d.expenses || !d.savings || !d.debts || !d.income) return false;
  return true;
}

function loadData() {
  // ── MIGRATION SÉCURISÉE : ne jamais effacer les données existantes ──
  // On tente d'abord de récupérer les données depuis TOUTES les clés connues
  const CURRENT_VER = '4.5.0';
  const ALL_KNOWN_KEYS = ['sf_v35', 'sf_v33', 'sf_v32', 'sf_v31', 'sf_v30', 'sf_data', 'tadbir_data'];

  // Récupère les données depuis n'importe quelle clé existante
  let recovered = null;
  for (const k of ALL_KNOWN_KEYS) {
    try {
      const raw = localStorage.getItem(k);
      if (raw) { const parsed = JSON.parse(raw); if (parsed && parsed.allData && Object.keys(parsed.allData).length > 0) { recovered = parsed; break; } }
    } catch (e) { }
  }

  // Essaie aussi la clé de secours sf_backup
  if (!recovered) {
    try {
      const bak = localStorage.getItem('sf_backup');
      if (bak) { const p = JSON.parse(bak); if (p && p.allData && Object.keys(p.allData).length > 0) recovered = p; }
    } catch (e) { }
  }

  // Essaie aussi la clé principale SK
  if (!recovered) {
    try {
      const s = localStorage.getItem(SK);
      if (s) { const p = JSON.parse(s); if (p && p.allData) recovered = p; }
    } catch (e) { }
  }

  if (recovered) {
    allData = recovered.allData || {};
    currency = recovered.currency || 'درهم';
    curYear = recovered.curYear || new Date().getFullYear();
    curMonth = recovered.curMonth !== undefined ? recovered.curMonth : new Date().getMonth();
    if (recovered.lang) lang = recovered.lang;
    // Re-sauvegarde sur la clé courante pour consolidation
    try { localStorage.setItem(SK, JSON.stringify({ allData, currency, curYear, curMonth, lang })); } catch (e) { }
  }

  // Met à jour la version sans effacer
  localStorage.setItem('sf_version', CURRENT_VER);
  // Migration: si expCatPln absent, créer depuis zéro
  Object.keys(allData).forEach(function (mk2) {
    if (!allData[mk2].expCatPln) allData[mk2].expCatPln = {};
  });

  // Applique les défauts uniquement si le mois courant est vraiment vide
  const mk = ck();
  if (!monthHasRealData(mk)) {
    allData[mk] = defMonth();
  }
  if (!allData[mk].notes) allData[mk].notes = [];
}

function resetDefaults() {
  // Merge default data into current month WITHOUT overwriting existing data
  const mk = ck();
  if (!allData[mk]) allData[mk] = { bills: [], expenses: [], savings: [], debts: [], income: [], notes: [] };
  const d = allData[mk];
  const def = defMonth();

  // For each section: add items from defaults that don't already exist (by label)
  ['bills', 'expenses', 'savings', 'debts', 'income'].forEach(sec => {
    if (!d[sec]) d[sec] = [];
    const existingLabels = new Set(d[sec].map(r => (r.label || '').trim().toLowerCase()));
    def[sec].forEach(defRow => {
      const lbl = (defRow.label || '').trim().toLowerCase();
      if (!existingLabels.has(lbl)) {
        // Add missing default row (act=0, keep default pln)
        d[sec].push({ label: defRow.label, act: 0, pln: defRow.pln });
        existingLabels.add(lbl);
      }
    });
  });

  allData[mk] = d;
  renderAll();
  persistData();
  closeModal('backupModal');
  showToast(T().toast_reset || '✅ Done');
}

function persistData() {
  // Sauvegarde localStorage — TOUJOURS, sur la cle courante ET une cle de secours
  try {
    const payload = JSON.stringify({ allData, currency, curYear, curMonth, lang });
    localStorage.setItem(SK, payload);
    localStorage.setItem('sf_backup', payload);
    localStorage.setItem('sf_last_save', new Date().toLocaleString());
  } catch (e) { }
  // Sauvegarde Firestore uniquement quand l'auth est prete
  if (!_isLoadingFromCloud && _authReady && typeof _fbUid !== 'undefined' && _fbUid && typeof fbScheduleSave === 'function') {
    fbScheduleSave();
  }
}

// Read DOM → allData for current month
function syncDOMtoData() {
  // NO-OP: allData is updated directly via onInput on each keystroke
  // This prevents DOM reads from overwriting cloud-loaded data
}

function saveData() {
  if (_isLoadingFromCloud) return; // don't overwrite during cloud load
  syncDOMtoData();
  persistData();
}

// ══════════════════════════════════════════════

// BACKUP
// ══════════════════════════════════════════════
const SNAPSHOT_KEY = 'sf_snapshots';
const MAX_LOCAL_SNAPSHOTS = 5;

function getLocalSnapshots() {
  try {
    const value = JSON.parse(localStorage.getItem(SNAPSHOT_KEY) || '[]');
    return Array.isArray(value) ? value.filter(s => s && s.id && s.payload && s.payload.allData) : [];
  } catch (e) {
    return [];
  }
}

function getSnapshotPayload() {
  if (allData && Object.keys(allData).length) {
    return JSON.parse(JSON.stringify({ allData, currency, curYear, curMonth, lang }));
  }
  for (const key of [SK, 'sf_backup']) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || 'null');
      if (value && value.allData && Object.keys(value.allData).length) return value;
    } catch (e) { }
  }
  return null;
}

function saveSnapshotPayload(payload, reason) {
  if (!payload || !payload.allData || !Object.keys(payload.allData).length) return false;
  const snapshots = getLocalSnapshots();
  snapshots.unshift({
    id: String(Date.now()) + '-' + Math.random().toString(36).slice(2, 7),
    createdAt: new Date().toISOString(),
    reason: reason || 'manual',
    payload: JSON.parse(JSON.stringify(payload))
  });
  while (snapshots.length > MAX_LOCAL_SNAPSHOTS) snapshots.pop();
  while (snapshots.length) {
    try {
      localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snapshots));
      renderSnapshotList();
      return true;
    } catch (e) {
      snapshots.pop();
    }
  }
  return false;
}

function createLocalSnapshot(reason) {
  return saveSnapshotPayload(getSnapshotPayload(), reason);
}

function createManualSnapshot() {
  if (createLocalSnapshot('manual')) showToast(T().history_saved || 'Sauvegarde locale créée ✓');
  else showToast('❌ ' + (T().history_empty || 'Aucune donnée'));
}

function snapshotReasonLabel(reason) {
  const fr = { manual: 'Manuelle', before_import: 'Avant import', before_restore: 'Avant restauration', before_new_month: 'Avant nouveau mois', before_cloud_load: 'Avant chargement cloud', before_close_month: 'Avant clôture du mois', before_reopen_month: 'Avant réouverture du mois' };
  const ar = { manual: 'يدوية', before_import: 'قبل الاستيراد', before_restore: 'قبل الاسترجاع', before_new_month: 'قبل شهر جديد', before_cloud_load: 'قبل تحميل السحابة', before_close_month: 'قبل إغلاق الشهر', before_reopen_month: 'قبل إعادة فتح الشهر' };
  return (T().dir === 'rtl' ? ar : fr)[reason] || reason || '—';
}

function renderSnapshotList() {
  const list = $('snapshot-list'); if (!list) return;
  list.textContent = '';
  const snapshots = getLocalSnapshots();
  if (!snapshots.length) {
    const empty = document.createElement('div');
    empty.className = 'snapshot-empty';
    empty.textContent = T().history_empty || 'Aucune sauvegarde locale';
    list.appendChild(empty);
    return;
  }
  snapshots.forEach(snapshot => {
    const row = document.createElement('div'); row.className = 'snapshot-row';
    const meta = document.createElement('div'); meta.className = 'snapshot-meta';
    const date = document.createElement('div'); date.className = 'snapshot-date';
    date.textContent = new Date(snapshot.createdAt).toLocaleString();
    const reason = document.createElement('div'); reason.className = 'snapshot-reason';
    reason.textContent = snapshotReasonLabel(snapshot.reason);
    const restore = document.createElement('button'); restore.className = 'snapshot-restore';
    restore.textContent = T().history_restore || 'Restaurer';
    restore.onclick = () => restoreLocalSnapshot(snapshot.id);
    meta.append(date, reason); row.append(meta, restore); list.appendChild(row);
  });
}

function restoreLocalSnapshot(id) {
  const snapshot = getLocalSnapshots().find(s => s.id === id);
  if (!snapshot) return;
  if (!confirm(T().history_confirm || "Restaurer cette version ?")) return;
  createLocalSnapshot('before_restore');
  const p = JSON.parse(JSON.stringify(snapshot.payload));
  allData = p.allData; currency = p.currency || currency;
  curYear = Number.isInteger(p.curYear) ? p.curYear : curYear;
  curMonth = Number.isInteger(p.curMonth) ? p.curMonth : curMonth;
  if (p.lang && LANGS[p.lang]) lang = p.lang;
  persistData();
  $('currencySelect').value = currency;
  setLang(lang); renderAll(); buildMonthlyTable(); syncCur();
  closeModal('backupModal');
  showToast(T().toast_import || '✅ Données restaurées');
}

function exportJSON() {
  saveData();
  const d = { allData, currency, curYear, curMonth, lang, exportedAt: new Date().toISOString(), version: '4.5.0', owner: 'BELMOUFADAL Abderrahim' };
  const b = new Blob([JSON.stringify(d, null, 2)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(b);
  a.download = `tadbir-${T().months[curMonth]}-${curYear}.json`; a.click();
  showToast(T().toast_save);
}

function validateSafeImportTree(value, depth = 0, state = { count: 0 }) {
  if (depth > 12 || ++state.count > 50000) throw new Error('structure trop complexe');
  if (value === null || typeof value === 'boolean') return;
  if (typeof value === 'number') {
    if (!Number.isFinite(value) || Math.abs(value) > 1e12) throw new Error('montant invalide');
    return;
  }
  if (typeof value === 'string') {
    if (value.length > 500 || /[<>]/.test(value)) throw new Error('texte non autorisé');
    return;
  }
  if (Array.isArray(value)) {
    if (value.length > 10000) throw new Error('trop de lignes');
    value.forEach(v => validateSafeImportTree(v, depth + 1, state));
    return;
  }
  if (typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    Object.keys(value).forEach(key => {
      if (['__proto__', 'prototype', 'constructor'].includes(key)) throw new Error('clé non autorisée');
      validateSafeImportTree(value[key], depth + 1, state);
    });
    return;
  }
  throw new Error('type de donnée invalide');
}

function validateImportData(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('format invalide');
  validateSafeImportTree(raw);
  if (!raw.allData || typeof raw.allData !== 'object' || Array.isArray(raw.allData)) throw new Error('données absentes');
  const monthKeys = Object.keys(raw.allData);
  if (!monthKeys.length || monthKeys.length > 240) throw new Error('nombre de mois invalide');
  monthKeys.forEach(key => {
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(key)) throw new Error('mois invalide');
    const month = raw.allData[key];
    if (!month || typeof month !== 'object' || Array.isArray(month)) throw new Error('contenu mensuel invalide');
    ['bills', 'expenses', 'savings', 'debts', 'income'].forEach(section => {
      if (!Array.isArray(month[section]) || month[section].length > 1000) throw new Error('section ' + section + ' invalide');
      month[section].forEach(row => {
        if (!row || typeof row !== 'object' || typeof row.label !== 'string') throw new Error('ligne ' + section + ' invalide');
        if (!Number.isFinite(Number(row.act || 0)) || !Number.isFinite(Number(row.pln || 0))) throw new Error('montant invalide');
      });
    });
    if (month.notes !== undefined && !Array.isArray(month.notes)) throw new Error('notes invalides');
    (month.notes || []).forEach(note => {
      if (!note || typeof note !== 'object' || !Number.isFinite(Number(note.amount || 0))) throw new Error('note invalide');
      if (note.date && !/^\d{4}-\d{2}-\d{2}$/.test(note.date)) throw new Error('date invalide');
    });
  });
  const clean = JSON.parse(JSON.stringify(raw));
  Object.values(clean.allData).forEach(month => { if (!Array.isArray(month.notes)) month.notes = []; });
  clean.currency = typeof clean.currency === 'string' && clean.currency.length <= 20 ? clean.currency : currency;
  clean.curYear = Number.isInteger(clean.curYear) && clean.curYear >= 1900 && clean.curYear <= 2200 ? clean.curYear : curYear;
  clean.curMonth = Number.isInteger(clean.curMonth) && clean.curMonth >= 0 && clean.curMonth <= 11 ? clean.curMonth : curMonth;
  clean.lang = clean.lang && LANGS[clean.lang] ? clean.lang : lang;
  return clean;
}

function importJSON(input) {
  const f = input.files[0]; if (!f) return;
  if (f.size > 5 * 1024 * 1024) {
    alert('❌ ' + (T().dir === 'rtl' ? 'الملف كبير جداً' : 'Fichier trop volumineux (5 Mo maximum)'));
    input.value = ''; return;
  }
  const r = new FileReader();
  r.onload = e => {
    try {
      const d = validateImportData(JSON.parse(e.target.result));
      if (confirm(T().import_confirm)) {
        createLocalSnapshot('before_import');
        allData = d.allData; currency = d.currency || currency; curYear = d.curYear || curYear;
        curMonth = d.curMonth !== undefined ? d.curMonth : curMonth; if (d.lang) { lang = d.lang; }
        persistData(); $('currencySelect').value = currency; setLang(lang); renderAll(); buildMonthlyTable(); syncCur();
        closeModal('backupModal'); showToast(T().toast_import);
      }
    } catch (e) {
      console.error('Import validation error:', e);
      alert('❌ ' + (T().dir === 'rtl' ? 'ملف غير صالح' : 'Fichier invalide') + ': ' + e.message);
    }
  };
  r.readAsText(f); input.value = '';
}

// ══════════════════════════════════════════════

// FIREBASE SYNC
// ══════════════════════════════════════════════
let _fbUid = null;
let _unsubscribe = null;
let _isSyncing = false;
let _saveTimer = null;
let _saveRetryCount = 0;
const FB_SAVE_DELAY = 800;
const FB_RETRY_DELAYS = [2000, 5000, 15000];

function setSyncStatus(status) {
  // status: 'off' | 'ok' | 'sync' | 'error'
  const dot = $('sync-dot'), txt = $('sync-txt');
  if (!dot) return;
  dot.className = 'sync-dot ' + status;
  const errorLabels = { fr: 'Erreur de synchronisation', en: 'Sync error', es: 'Error de sincronización', ar: 'خطأ في المزامنة', dar: 'خطأ فالمزامنة' };
  const labels = { off: T().sync_off || 'غير متصل', ok: T().sync_ok || 'متزامن ☁️', sync: T().sync_ing || 'جاري المزامنة...', error: errorLabels[lang] || errorLabels.ar };
  if (txt) txt.textContent = labels[status] || '';
}

async function fbSignIn() {
  try {
    if (!window._fbSignIn) { showToast('⏳ جاري التحميل...'); return; }
    showToast('⏳ ...');
    await window._fbSignIn();
  } catch (e) {
    if (e.code !== 'auth/popup-closed-by-user') showToast('❌ ' + e.message);
  }
}

async function fbSignOut() {
  if (_unsubscribe) { _unsubscribe(); _unsubscribe = null; }
  if (_saveTimer) { clearTimeout(_saveTimer); _saveTimer = null; }
  _saveQueue = false; _saveRetryCount = 0;
  // Sauvegarde locale avant deconnexion
  try { if (Object.keys(allData).length > 0) { const payload = JSON.stringify({ allData, currency, curYear, curMonth, lang }); localStorage.setItem(SK, payload); localStorage.setItem('sf_backup', payload); } } catch (e) { }
  _fbUid = null; _appReady = false; allData = {};
  try { await window._fbSignOut(); } catch (e) { }
  // Hide app
  ['.header', '.nav-tabs', '.footer'].forEach(s => {
    const el = document.querySelector(s); if (el) el.style.display = 'none';
  });
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.style.display = 'none'; p.classList.remove('active');
  });
  // Reset auth UI
  const si = $('auth-signed-in'); if (si) si.style.display = 'none';
  const so = $('auth-signed-out'); if (so) so.style.display = '';
  // Show landing
  $('landing-page').style.display = 'block';
  $('pin-screen').classList.add('hidden');
  setSyncStatus('off');
  showToast(T().toast_signout || '👋');
}

function fbScheduleSave(delay = FB_SAVE_DELAY) {
  if (!_fbUid || !window._fbDb || !_authReady || _isLoadingFromCloud) return;
  if (_saveTimer) clearTimeout(_saveTimer);
  setSyncStatus('sync');
  _saveTimer = setTimeout(() => {
    _saveTimer = null;
    fbSaveToCloud();
  }, delay);
}

async function fbManualSync() {
  closeUserDropdown();
  if (!_fbUid || !window._fbDb) {
    setSyncStatus('off');
    return false;
  }
  if (_saveTimer) { clearTimeout(_saveTimer); _saveTimer = null; }
  _saveRetryCount = 0;
  return fbSaveToCloud();
}

async function fbSaveToCloud() {
  if (!_fbUid || !window._fbDb) return false;
  if (_isSyncing) { _saveQueue = true; return false; }
  _isSyncing = true; setSyncStatus('sync');
  try {
    const ref = window._fbDoc(window._fbDb, 'users', _fbUid);
    await window._fbSetDoc(ref, {
      allData: JSON.parse(JSON.stringify(allData)),
      currency, curYear, curMonth, lang,
      updatedAt: new Date().toISOString()
    });
    localStorage.setItem('sf_last_cloud_sync', new Date().toISOString());
    _saveRetryCount = 0;
    setSyncStatus('ok');
    return true;
  } catch (e) {
    console.error('Firestore save error:', e);
    setSyncStatus('error');
    if (_saveRetryCount < FB_RETRY_DELAYS.length) {
      const delay = FB_RETRY_DELAYS[_saveRetryCount++];
      fbScheduleSave(delay);
    }
    return false;
  } finally {
    _isSyncing = false;
    if (_saveQueue) {
      _saveQueue = false;
      fbScheduleSave(250);
    }
  }
}

let _isLoadingFromCloud = false;
async function fbLoadFromCloud(uid) {
  if (!window._fbDb) return;
  _isLoadingFromCloud = true;
  try {
    const ref = window._fbDoc(window._fbDb, 'users', uid);
    const snap = await window._fbGetDoc(ref);
    if (snap.exists()) {
      createLocalSnapshot('before_cloud_load');
      const d = snap.data();
      if (d.allData) allData = d.allData;
      if (d.currency) currency = d.currency;
      if (d.curYear) curYear = d.curYear;
      if (d.curMonth !== undefined) curMonth = d.curMonth;
      if (d.lang) { lang = d.lang; }
      const mk = ck();
      if (!monthHasRealData(mk)) allData[mk] = defMonth();
      if (!allData[mk].notes) allData[mk].notes = [];
      // Save to localStorage immediately after cloud load — double cle pour securite
      try {
        const payload = JSON.stringify({ allData, currency, curYear, curMonth, lang });
        localStorage.setItem(SK, payload);
        localStorage.setItem('sf_backup', payload);
      } catch (e) { }
      // Sync curYear/curMonth to most recent month with notes
      // This handles case where Firebase has old curYear but new notes
      var newestNoteYM = null;
      Object.keys(allData).forEach(function (mk2) {
        ((allData[mk2] || {}).notes || []).forEach(function (n) {
          if (n.date && n.date.length >= 7) {
            var nym = n.date.slice(0, 7);
            if (!newestNoteYM || nym > newestNoteYM) newestNoteYM = nym;
          }
        });
      });
      if (newestNoteYM) {
        var np = newestNoteYM.split('-');
        var ny = parseInt(np[0]);
        var nm = parseInt(np[1]) - 1;
        // Only update if newer than current
        if (ny > curYear || (ny === curYear && nm > curMonth)) {
          curYear = ny; curMonth = nm;
        }
      }
      $('currencySelect').value = currency;
      setLang(lang);
      renderAll();
      buildMonthlyTable();
      syncCur();
      setSyncStatus('ok');
      _isLoadingFromCloud = false;
      _authReady = true;
      // If any save was queued during load, execute now
      if (_saveQueue) { _saveQueue = false; fbScheduleSave(250); }
      showToast('☁️ ' + (T().toast_loaded || 'تم تحميل بياناتك من السحاب'));
    } else {
      _isLoadingFromCloud = false;
      _authReady = true;
      // Premier compte : créer un mois valide avant le premier envoi cloud.
      if (!Object.keys(allData).length) {
        allData[ck()] = defMonth();
        renderAll();
        buildMonthlyTable();
        syncCur();
      }
      // No cloud data yet — upload initialized data
      await fbSaveToCloud();
    }
  } catch (e) {
    console.error('Firestore load error:', e);
    _isLoadingFromCloud = false;
    _authReady = false;
    setSyncStatus('error');
  }
}

// persistData is already defined above — patch it to also cloud-save
// We do this by wrapping at call sites via a flag check inside the original

// Show app after Google auth (and optional PIN)
function showAppAfterAuth(user) {
  if (!user && window._pendingUser) user = window._pendingUser;
  if (!user) return;
  if (_appReady) return; // prevent multiple calls
  _appReady = true;
  window._pendingUser = null;

  // Initialize local data immediately before waiting for cloud sync
  loadData();
  const cs = $('currencySelect'); if (cs) cs.value = currency;
  setLang(lang);
  renderAll();

  // ── Toggle auth UI ──
  const so = $('auth-signed-out'); if (so) so.style.display = 'none';
  const si = $('auth-signed-in'); if (si) si.style.display = 'flex';
  // Set avatar and user info
  const av = $('auth-avatar');
  if (av && user.photoURL) av.src = user.photoURL;
  else if (av) av.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.displayName || 'U') + '&background=7EC8B0&color=fff';
  const udAv = $('ud-avatar');
  if (udAv && user.photoURL) udAv.src = user.photoURL;
  const udNm = $('ud-name'); if (udNm) udNm.textContent = user.displayName || '';
  const udEm = $('ud-email'); if (udEm) udEm.textContent = user.email || '';

  // ── Show app ──
  $('landing-page').style.display = 'none';
  $('pin-screen').classList.add('hidden');
  const hdr = document.querySelector('.header');
  const nav = document.querySelector('.nav-tabs');
  const ftr = document.querySelector('.footer');
  if (hdr) hdr.style.display = '';
  if (nav) nav.style.display = '';
  if (ftr) ftr.style.display = '';
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.style.display = ''; p.classList.remove('active');
  });
  const dash = $('tab-dashboard');
  if (dash) dash.classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const firstTab = document.querySelector('.nav-tab');
  if (firstTab) firstTab.classList.add('active');

  setSyncStatus('sync');
  updateFabVisibility();
  fbLoadFromCloud(user.uid);
  showToast('👋 ' + (user.displayName || user.email));
}

// Auth state change handler
window.onFbAuthChange = function (user) {
  if (user) {
    // USER SIGNED IN
    _fbUid = user.uid;
    // Update auth avatar/name
    const av = $('auth-avatar');
    if (av && user.photoURL) av.src = user.photoURL;
    const udAv = $('ud-avatar');
    if (udAv && user.photoURL) udAv.src = user.photoURL;
    const udNm = $('ud-name');
    if (udNm) udNm.textContent = user.displayName || '';
    const udEm = $('ud-email');
    if (udEm) udEm.textContent = user.email || '';
    // Check PIN
    pinEnabled = localStorage.getItem(PINON_KEY) === '1';
    const savedPin = localStorage.getItem(PIN_KEY);
    if (false /* PIN system disabled by user request */) {
      lang = localStorage.getItem('sf_lang') || lang;
      setLang(lang);
      pinMode = 'verify'; pinBuffer = ''; updateDots();
      set('pin-sub', T().pin_enter);
      $('pin-forgot').style.display = 'block';
      $('pin-screen').classList.remove('hidden');
      window._pendingUser = user;
    } else if (!_appReady) {
      showAppAfterAuth(user);
    }
  } else {
    // USER SIGNED OUT — show landing WITHOUT reload
    const fabDock = document.getElementById('fab-dock'); if (fabDock) fabDock.style.display = 'none';
    // On sauvegarde d'abord avant de vider la memoire
    try { if (Object.keys(allData).length > 0) { const payload = JSON.stringify({ allData, currency, curYear, curMonth, lang }); localStorage.setItem(SK, payload); localStorage.setItem('sf_backup', payload); } } catch (e) { }
    _fbUid = null; allData = {}; _appReady = false;
    // Hide app, show landing
    ['.header', '.nav-tabs', '.footer'].forEach(s => {
      const el = document.querySelector(s); if (el) el.style.display = 'none';
    });
    document.querySelectorAll('.tab-panel').forEach(p => {
      p.style.display = 'none'; p.classList.remove('active');
    });
    $('landing-page').style.display = 'block';
    $('pin-screen').classList.add('hidden');
    $('auth-signed-in').style.display = 'none';
    $('auth-signed-out').style.display = '';
    setSyncStatus('off');
  }
};

// ══════════════════════════════════════════════
