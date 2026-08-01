// Tadbir Telegram integration

// TELEGRAM MODULE (Option B - Résumé Journalier & Consommations)
// ══════════════════════════════════════════════

function getTelegramConfig() {
  const cloudCfg = (typeof allData === 'object' && allData && allData._telegram) ? allData._telegram : {};
  return {
    token: (localStorage.getItem('sf_tg_token') || cloudCfg.token || '').trim(),
    chatId: (localStorage.getItem('sf_tg_chat_id') || cloudCfg.chatId || '').trim(),
    autoSend: (localStorage.getItem('sf_tg_auto_send') !== null)
      ? (localStorage.getItem('sf_tg_auto_send') === 'true')
      : (cloudCfg.autoSend === true),
    autoTime: localStorage.getItem('sf_tg_auto_time') || cloudCfg.autoTime || '21:00',
    timezone: localStorage.getItem('sf_tg_timezone') || cloudCfg.timezone || 'UTC+1',
    lastSentDate: localStorage.getItem('sf_tg_last_sent_date') || cloudCfg.lastSentDate || ''
  };
}

function handleTelegramHeaderClick() {
  openTelegramModal();
}

function openTelegramModal() {
  const cfg = getTelegramConfig();
  const tokenEl = $('tg-bot-token');
  const chatIdEl = $('tg-chat-id');
  const chkEl = $('tg-auto-send-chk');
  const timeEl = $('tg-auto-time');
  const tzEl = $('tg-timezone');

  if (tokenEl) tokenEl.value = cfg.token;
  if (chatIdEl) chatIdEl.value = cfg.chatId;
  if (chkEl) chkEl.checked = cfg.autoSend;
  if (timeEl) timeEl.value = cfg.autoTime;
  if (tzEl) tzEl.value = cfg.timezone;

  updateTelegramAutoStatusUI();
  openModal('telegramModal');
}

function toggleTelegramAutoSend(val) {
  localStorage.setItem('sf_tg_auto_send', val ? 'true' : 'false');
  if (typeof allData === 'object' && allData !== null) {
    if (!allData._telegram) allData._telegram = {};
    allData._telegram.autoSend = val;
    if (typeof persistData === 'function') persistData();
  }
  updateTelegramAutoStatusUI();
  showToast(val ? (lang === 'fr' ? '⏰ Envoi automatique activé' : '⏰ تم تفعيل الإرسال التلقائي') : (lang === 'fr' ? '⏸️ Envoi automatique désactivé' : '⏸️ تم إيقاف الإرسال التلقائي'));
}

function saveTelegramAutoTime(val) {
  if (val) {
    localStorage.setItem('sf_tg_auto_time', val);
    if (typeof allData === 'object' && allData !== null) {
      if (!allData._telegram) allData._telegram = {};
      allData._telegram.autoTime = val;
      if (typeof persistData === 'function') persistData();
    }
    updateTelegramAutoStatusUI();
    showToast((lang === 'fr' ? '⏰ Heure d’envoi réglée sur ' : '⏰ وقت الإرسال: ') + val);
  }
}

function saveTelegramTimezone(val) {
  if (val) {
    localStorage.setItem('sf_tg_timezone', val);
    if (typeof allData === 'object' && allData !== null) {
      if (!allData._telegram) allData._telegram = {};
      allData._telegram.timezone = val;
      if (typeof persistData === 'function') persistData();
    }
    updateTelegramAutoStatusUI();
    showToast((lang === 'fr' ? '🌍 Fuseau horaire réglé sur ' : '🌍 المنطقة الزمنية: ') + val);
  }
}

function getCurrentTimeInTimezone(tzOption) {
  const now = new Date();
  if (!tzOption || tzOption === 'auto') {
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    return { timeStr: `${hours}:${mins}`, dateStr: now.toISOString().slice(0, 10) };
  }

  const match = tzOption.match(/UTC([+-]\d+)/i);
  let targetOffsetHours = 1; // UTC+1 Maroc par défaut
  if (match) {
    targetOffsetHours = parseInt(match[1], 10);
  }

  const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
  const targetDate = new Date(utcMs + (3600000 * targetOffsetHours));

  const hours = String(targetDate.getHours()).padStart(2, '0');
  const mins = String(targetDate.getMinutes()).padStart(2, '0');
  const dateStr = targetDate.toISOString().slice(0, 10);

  return { timeStr: `${hours}:${mins}`, dateStr: dateStr };
}

function updateTelegramAutoStatusUI() {
  const statusEl = $('tg-auto-status');
  if (!statusEl) return;
  const cfg = getTelegramConfig();
  if (cfg.autoSend) {
    statusEl.innerHTML = `<span style="color:#10b981;font-weight:700;">🟢 ${lang === 'fr' ? 'Envoi automatique actif chaque jour à' : 'الإرسال التلقائي مفعل يوميا الساعة'} ${cfg.autoTime}</span>`;
  } else {
    statusEl.innerHTML = `<span style="color:var(--mid);">⏸️ ${lang === 'fr' ? 'Envoi automatique désactivé' : 'الإرسال التلقائي غير مفعل'}</span>`;
  }
}

function saveTelegramConfig() {
  const token = ($('tg-bot-token')?.value || '').trim();
  const chatId = ($('tg-chat-id')?.value || '').trim();

  if (!token || !chatId) {
    showToast(lang === 'fr' ? 'Veuillez remplir le Token et le Chat ID' : 'الرجاء إدخال Token و Chat ID');
    return;
  }

  localStorage.setItem('sf_tg_token', token);
  localStorage.setItem('sf_tg_chat_id', chatId);

  if (typeof allData === 'object' && allData !== null) {
    if (!allData._telegram) allData._telegram = {};
    allData._telegram.token = token;
    allData._telegram.chatId = chatId;
    if (typeof persistData === 'function') persistData();
  }

  closeModal('telegramModal');
  showToast(lang === 'fr' ? '✅ Paramètres Telegram enregistrés & synchronisés' : '✅ تم حفظ وحفظ إعدادات تليجرام');
}

async function sendTelegramMessage(text) {
  const cfg = getTelegramConfig();
  if (!cfg.token || !cfg.chatId) {
    openTelegramModal();
    showToast(lang === 'fr' ? '⚠️ Veuillez d’abord configurer Telegram' : '⚠️ الرجاء ضبط إعدادات تليجرام أولاً');
    return false;
  }

  const url = `https://api.telegram.org/bot${cfg.token}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: cfg.chatId,
        text: text,
        parse_mode: 'HTML'
      })
    });
    const json = await res.json();
    if (json.ok) {
      return true;
    } else {
      console.error('Telegram API error:', json);
      showToast('❌ Erreur Telegram: ' + (json.description || 'Échec d’envoi'));
      return false;
    }
  } catch (err) {
    console.error('Telegram fetch error:', err);
    showToast('❌ Erreur réseau lors de l’envoi à Telegram');
    return false;
  }
}

async function testTelegramConnection() {
  const token = ($('tg-bot-token')?.value || '').trim();
  const chatId = ($('tg-chat-id')?.value || '').trim();
  if (!token || !chatId) {
    showToast('⚠️ Renseignez le Token et le Chat ID');
    return;
  }
  localStorage.setItem('sf_tg_token', token);
  localStorage.setItem('sf_tg_chat_id', chatId);

  showToast('⏳ Envoi du message de test...');
  const success = await sendTelegramMessage(
    '<b>🤖 Tadbir Pro - Test Telegram</b>\n\n' +
    '✅ La connexion avec votre Bot Telegram fonctionne parfaitement !'
  );
  if (success) {
    showToast('✅ Message de test envoyé !');
  }
}

async function sendDailyTelegramSummary(isAuto = false) {
  const cfg = getTelegramConfig();
  if (!cfg.token || !cfg.chatId) {
    openTelegramModal();
    return;
  }

  const todayStr = new Date().toISOString().slice(0, 10);
  const mk = ck();
  const monthNotes = ((allData[mk] || {}).notes) || [];

  // Notes du jour
  const todayNotes = monthNotes.filter(n => n.date === todayStr);

  let todaySum = 0;
  let itemsLines = '';

  if (todayNotes.length > 0) {
    todayNotes.forEach(n => {
      const amt = Number(n.amount || 0);
      todaySum += amt;
      const mc = getMainCats().find(c => c.id === n.mainCat) || { icon: '🍿', label: '' };
      const sub = (n.chips && n.chips.length > 0)
        ? n.chips.map(s => s.replace(/^[^ ]+ /, '')).join(' + ')
        : (n.subCat || n.note || '');
      itemsLines += `• ${mc.icon} <b>${sub || mc.label}</b> : ${fmt(amt)} ${currency}\n`;
    });
  } else {
    itemsLines = '<i>Aucune dépense enregistrée aujourd’hui.</i>\n';
  }

  // Calcul du total du mois et du solde
  const monthNotesTotal = monthNotes.reduce((s, n) => s + Number(n.amount || 0), 0);
  const inc = (allData[mk]?.income || []).reduce((s, r) => s + Number(r.act || 0), 0);
  const bills = (allData[mk]?.bills || []).reduce((s, r) => s + Number(r.act || 0), 0);
  const sav = (allData[mk]?.savings || []).reduce((s, r) => s + Number(r.act || 0), 0);
  const dbt = (allData[mk]?.debts || []).reduce((s, r) => s + Number(r.act || 0), 0);
  const rem = inc - bills - monthNotesTotal - sav - dbt;

  const dateFormatted = new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'ar-MA', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const titlePrefix = isAuto ? '🤖 [Envoi Automatique] ' : '';

  const msg =
    `<b>📊 ${titlePrefix}Résumé des Consommations — Tadbir</b>\n` +
    `📅 <i>${dateFormatted}</i>\n` +
    `-----------------------------------------\n\n` +
    `🛒 <b>Dépenses du jour :</b>\n` +
    itemsLines +
    `-----------------------------------------\n` +
    `💰 <b>Total aujourd'hui : ${fmt(todaySum)} ${currency}</b>\n` +
    `📈 Total mois : ${fmt(monthNotesTotal)} ${currency}\n` +
    `💚 Solde restant : ${fmt(rem)} ${currency}\n` +
    `-----------------------------------------\n` +
    `<i>Géré avec Tadbir Pro 💚</i>`;

  showToast('⏳ Envoi du résumé Telegram...');
  const sent = await sendTelegramMessage(msg);
  if (sent) {
    showToast(isAuto
      ? (lang === 'fr' ? '🤖 Résumé automatique quotidien envoyé sur Telegram !' : '🤖 تم إرسال الملخص اليومي التلقائي على تليجرام')
      : (lang === 'fr' ? '✅ Résumé envoyé sur Telegram !' : '✅ تم إرسال الملخص على تليجرام')
    );
  }
}

function checkTelegramAutoSend() {
  const cfg = getTelegramConfig();
  if (!cfg.autoSend || !cfg.chatId || !cfg.token) return;

  const tzInfo = getCurrentTimeInTimezone(cfg.timezone);
  const todayStr = tzInfo.dateStr;

  if (cfg.lastSentDate === todayStr) return;

  if (tzInfo.timeStr >= cfg.autoTime) {
    localStorage.setItem('sf_tg_last_sent_date', todayStr);
    if (typeof allData === 'object' && allData !== null) {
      if (!allData._telegram) allData._telegram = {};
      allData._telegram.lastSentDate = todayStr;
      if (typeof persistData === 'function') persistData();
    }
    sendDailyTelegramSummary(true);
  }
}

// Vérifie l'envoi automatique chaque minute
setInterval(checkTelegramAutoSend, 60000);
