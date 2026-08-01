// ══════════════════════════════════════════════
// TRANSLATIONS
// ══════════════════════════════════════════════
const LANGS = {
  ar: {
    dir: 'rtl',
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    cats: ['مواد غذائية', 'السوق', 'قهوة', 'النقل', 'أخرى'],
    expLabel: ['مواد غذائية', 'السوق', 'قهوة', 'Gasoil', 'أخرى'],
    pin_enter: 'أدخل رمز PIN', pin_create: 'إنشاء رمز PIN (4 أرقام)', pin_confirm: 'أكد رمز PIN',
    pin_wrong: '❌ رمز PIN غلط', pin_mismatch: '❌ الأرقام ما تطابقوش', pin_note: 'هاد الرمز يحمي تطبيقك', pin_forgot: 'نسيت PIN؟', pin_locked: 'محاولات كثيرة. انتظر 30 ثانية.', pin_forgot_confirm: 'حذف رمز PIN فقط؟ بياناتك لن تُحذف.',
    saved: 'محفوظ تلقائياً', new_btn: '✦ شهر جديد', tab1: 'لوحة الميزانية', tab2: 'دفتر الملاحظات', tab3: 'مقارنة شهرية',
    pick: 'اختار الشهر', nm: 'شهر جديد', nm_sub: 'كيفاش تبغي تبدا؟',
    nm1: 'كوبياو المخطط فقط', nm1s: 'تبقى أرقام مخطط له وتبدا من صفر',
    nm2: 'شهر فارغ', nm2s: 'صفحة بيضاء', nm3: 'كوبياو كل شي', nm3s: 'نفس الشهر الماضي', nm_btn: 'إنشاء ✓',
    bk: 'الحفظ والحماية', exp_h: '📤 تصدير', exp_btn: 'تحميل ملف الحفظ', exp_s: 'كل بياناتك في ملف JSON',
    imp_h: '📥 استيراد', imp_btn: 'تحميل ملف حفظ سابق', imp_s: 'ملف JSON لاسترجاع البيانات',
    drv_h: '☁️ Google Drive', s1: 'كليك على تحميل ملف الحفظ', s2: 'فتح Google Drive في تليفونك',
    s3: '＋ ← رفع ← اختار الملف', s4: 'خلاص! بياناتك في السحاب ☁️',
    pin_h: '🔐 إعدادات PIN', pin_lbl: 'قفل بـ PIN', pin_s: 'حماية التطبيق عند الفتح',
    pin_ch: 'تغيير رمز PIN', pin_chs: 'إنشاء رمز جديد', last_save: 'آخر حفظ', lang_title: 'اختار اللغة',
    k_income: 'الدخل ديالي', k_bills: 'الفواتير', k_expenses: 'المصاريف', k_savings: 'التوفير', k_debts: 'الديون', k_remaining: 'الفلوس لي بقاو', k_emergency: 'صندوق الطوارئ', emergency_target_prompt: 'أدخل قيمة هدف صندوق الطوارئ الجديد:',
    hero_lbl: 'الفلوس لي بقاو دابا', hero_ok: '💚 الوضع كاين', hero_zero: '🟡 بالضبط', hero_neg: '🔴 تجاوزت الميزانية',
    ch1: 'فين كتمشي الفلوس', ch2: 'لي مخطط له / لي تصرف',
    col_item: 'البيان', col_act: 'تصرفت', col_pln: 'مخطط', col_goal: 'الهدف', col_src: 'المصدر', col_ent: 'الجهة',
    add_bills: '＋ إضافة فاتورة', add_exp: '＋ إضافة مصروف', add_sav: '＋ إضافة هدف', add_dbt: '＋ إضافة دين', add_inc: '＋ إضافة مصدر دخل',
    notes_title: 'دفتر الملاحظات', notes_info: 'كل ما تضيفه هنا يتجمع تلقائياً مع المصاريف في لوحة الميزانية',
    notes_sub: 'سجل المصاريف', notes_edit: 'قابل للتعديل', notes_chart: 'توزيع المصاريف', notes_sum: 'ملخص',
    nt_date: 'التاريخ', nt_note: 'الملاحظات', nt_subcat: 'الخيارات', nt_cat: 'الفئة', nt_amount: 'المبلغ', nt_cur: 'العملة', add_note: '＋ إضافة ملاحظة', nt_remark: '💬 ملاحظة (اختياري)', nt_remark_ph: 'مثال: ماركة، محل، سبب...', tab_weekly: '📊 إحصائيات', week_chart: 'مصاريف الأسبوع الحالي', add_note_fab: 'تسجيل مصروف', pdf_btn: 'تصدير PDF', excel_btn: 'تصدير Excel',
    monthly_title: 'مقارنة شهرية', monthly_chart: 'تطور الدخل والمصاريف', monthly_total: 'المجموع', monthly_remain: 'الباقي',
    footer: 'دبّر فلوسك بذكاء — تدبير 💚',
    import_confirm: 'هاد العملية غادي تبدل البيانات الحالية. واش متأكد؟',
    toast_add: 'تمت الإضافة ✓', toast_save: '✅ تم تحميل ملف الحفظ', toast_import: '✅ تم استيراد البيانات',
    toast_pin_on: '🔐 PIN مفعّل', toast_pin_off: '🔓 PIN مؤقف', toast_pin_created: 'تم إنشاء رمز PIN ✓', from_of: 'من أصل',
    sync_off: 'غير متصل', sync_ok: 'متزامن ☁️', sync_ing: 'جاري...', sync_now: 'مزامنة الآن', history_h: '<ctrl42> النسخ المحلية', history_btn: 'إنشاء نسخة الآن', history_sub: 'الاحتفاظ بآخر 5 نسخ على هذا الجهاز', history_empty: 'لا توجد نسخة بعد', history_restore: 'استرجاع', history_confirm: 'استرجاع هذه النسخة؟ سيتم حفظ الوضع الحالي أولاً.', history_saved: 'تم إنشاء نسخة محلية ✓', month_closed: 'هذا الشهر مغلق', month_close: 'إغلاق الشهر', month_reopen: 'إعادة فتح الشهر', carry_balance: 'ترحيل رصيد الشهر', month_exists: 'الشهر التالي يحتوي على بيانات. هل تريد استبدالها؟', vs_previous: 'مقارنة بالشهر السابق', expense_search: 'بحث...', sort_newest: 'الأحدث أولاً', sort_oldest: 'الأقدم أولاً', sort_highest: 'المبلغ: الأكبر', sort_lowest: 'المبلغ: الأصغر', duplicate_expense: 'تكرار المصروف', details: 'التفاصيل', deadline: 'تاريخ الهدف', interest_rate: 'نسبة الفائدة (%)', monthly_payment: 'القسط الشهر', remaining_amount: 'المتبقي', progress: 'التقدم', cancel: 'إلغاء', save: 'حفظ', avg_daily: 'معدل المصروف اليومي', daily_budget: 'الميزانية اليومية المتبقية', month_projection: 'توقع نهاية الشهر', savings_rate: 'نسبة التوفير', top_category: 'أكبر فئة', days_elapsed: 'أيام محسوبة', days_remaining: 'أيام متبقية', display_currency: 'وحدة عرض فقط — لا يتم تحويل المبالغ', toast_signout: '👋 تم تسجيل الخروج', toast_loaded: 'تم تحميل بياناتك من السحاب', signin: 'تسجيل الدخول', signout: 'خروج', custom_cat: '✏️ فئة جديدة...', reset_h: '🔄 إعادة تعيين', reset_btn: 'إضافة البيانات الافتراضية الناقصة', reset_sub: 'يضيف فقط ما ينقص — لا يمسح بياناتك', toast_reset: '✅ تمت إضافة البيانات الافتراضية', cal_total: 'الإجمالي:', cal_leg1: 'عادي', cal_leg2: 'متوسط', cal_leg3: 'مرتفع', cal_source: '📋 المصدر: سجل المصاريف', exp_auto_note: 'المبالغ من دفتر الملاحظات — المخطط قابل للتعديل', drv_today: 'اليوم', drv_week: 'الأسبوع', drv_month: 'الشهر', drv_avg: 'معدل/رحلة', drv_trips: 'رحلة', drv_add_title: 'تسجيل يوم جديد', drv_lbl_date: 'التاريخ', drv_lbl_trips: 'عدد الرحلات', drv_lbl_total: 'المجموع', drv_submit: 'تسجيل اليوم', drv_heatmap: 'أفضل أيام الأسبوع', drv_list: 'سجل الرحلات', drive_fill: 'أكمل كل الحقول',
    fuel_title: '⛽ استهلاك الوقود', fuel_add_title: 'إضافة تعبئة جديدة', fuel_lbl_date: 'التاريخ', fuel_lbl_prevkm: 'الكيلومتراج السابق', fuel_lbl_currkm: 'الكيلومتراج الحالي', fuel_lbl_litres: 'عدد اللترات', fuel_lbl_price: 'ثمن اللتر', fuel_lbl_total: 'المبلغ الإجمالي', fuel_submit: 'تسجيل التعبئة', fuel_list: 'سجل التعبئات', fuel_fill: 'تحقق من الحقول (الكيلومتراج الحالي يجب أن يكون أكبر)', fuel_max: '⚠️ الحد الأقصى 3 تعبئات في الشهر', fuel_empty: '⛽ لا توجد تعبئة مسجلة هذا الشهر',
    fuel_ocr_title: '📷 استيراد من صورة', fuel_ocr_pump: 'صورة المضخة', fuel_ocr_dash: 'صورة عداد الكيلومترات', fuel_ocr_btn: 'تحليل الصور', fuel_ocr_loading: 'جاري التحليل...', fuel_ocr_ok: '✓ تم استخراج البيانات، تحقق منها قبل التسجيل', fuel_ocr_fail: '❌ تعذر استخراج البيانات، أدخلها يدوياً', fuel_ocr_loadfail: '❌ تعذر تحميل أداة التحليل، تحقق من الاتصال',
    fuel_stat_km: 'المسافة', fuel_stat_cost: 'التكلفة', fuel_stat_conso: 'الاستهلاك/100كم', fuel_stat_pricekm: 'الثمن/كم', stats_title: 'تحليل المصاريف', stats_subtitle: 'اكتشف التسربات والعادات المكلفة وفرص التوفير.', stats_month: 'الشهر المحلل', stats_leaks: '🚨 تسربات محتملة', stats_products: '🧾 المنتجات الأكثر كلفة', stats_actions: '💡 إجراءات مقترحة', stats_category: 'توزيع المصاريف حسب الفئة', stats_entries: 'عملية', stats_discretionary: 'الكماليات', stats_no_data: 'لا توجد بيانات لهذا الشهر', stats_reduce: 'قلّص أكبر مصروف كمالي بنسبة 25٪', stats_repeat: 'راجع المشتريات المتكررة يومياً', stats_budget: 'حدد سقفاً شهرياً لكل فئة', form_choose: 'اختر المشتريات', form_clear: 'مسح الكل ✕', filter_month: 'الشهر:', filter_day: 'اليوم:', filter_total: 'الإجمالي:', month_total: 'إجمالي الشهر', drive_sync: '⚡ يتزامن مع الدخل', offline: '📡 أنت غير متصل بالإنترنت — البيانات محفوظة محلياً', person: 'المستفيد', all_people: 'كل العائلة', family_stats: '👨‍👩‍👦‍👦 استهلاك العائلة', bud_h: 'إعداد ميزانية الفئات', bud_s: 'تحديد حد أقصى لكل قسم', lnd_logo_name: 'Tadbir Pro', lnd_logo_sub: 'دبّر ميزانيتك بذكاء', lnd_nav_btn: '🔑 تسجيل الدخول بـ Google', lnd_badge: '✦ مجاني 100% • مزامنة سحابية', lnd_h1_1: 'دبّر فلوسك بذكاء', lnd_h1_2: 'وفبلاصة وحدة', lnd_sub: 'تطبيق ذكي لتتبع ميزانيتك الشهرية — سجّل مصاريفك، تابع توفيرك، وخلّص من ديونك بشكل منظم', lnd_start_btn: '🚀 ابدأ مجاناً مع Google', lnd_install: '📲 تثبيت التطبيق', lnd_no_card: 'لا حاجة لبطاقة بنكية • مجاني للأبد', lnd_demo_title: 'معاينة التطبيق', lnd_demo_inc: '💵 الدخل', lnd_demo_exp: '🛒 المصاريف', lnd_demo_rem: '✅ الباقي', lnd_demo_ch1: 'فين كتمشي الفلوس', lnd_demo_ch2: 'المخطط / الفعلي', lnd_demo_l1: 'البيان', lnd_demo_l2: 'تصرفت', lnd_demo_l3: 'مخطط', lnd_demo_food: 'مواد غذائية', lnd_demo_market: 'السوق', lnd_feat_h2_1: 'كل شيء تحتاجه', lnd_feat_h2_2: 'في مكان واحد', lnd_feat_p: 'تطبيق مصمم خصيصاً لتنظيم ميزانيتك بسهولة وبدون تعقيد', lnd_f1_t: 'لوحة الميزانية', lnd_f1_d: 'تتبع الدخل والفواتير والمصاريف والتوفير والديون في لوحة واحدة واضحة مع رسوم بيانية ذكية', lnd_f2_t: 'مزامنة تلقائية', lnd_f2_d: 'بياناتك محفوظة في السحاب وتتزامن بين الهاتف والكمبيوتر في الوقت الفعلي — لا تفقد أي شيء', lnd_f3_t: 'دفتر الملاحظات', lnd_f3_d: 'سجّل أي مصروف يومي بفئته ويتجمع تلقائياً مع المصاريف الشهرية بدون إدخال يدوي مكرر', lnd_f4_t: 'مقارنة شهرية', lnd_f4_d: 'تابع تطور ميزانيتك عبر 12 شهر مع رسم بياني يبين الفرق بين المخطط والفعلي', lnd_f5_t: 'لغتان مكتملتان', lnd_f5_d: 'العربية • Français — تغيير اللغة يغيّر اتجاه الصفحة والمكونات تلقائياً', lnd_f6_t: 'حماية وأمان', lnd_f6_d: 'تسجيل دخول آمن بـ Google + رمز PIN لحماية التطبيق على جهازك — بياناتك لك وحدك', lnd_f7_t: 'بوت تليجرام تلقائي', lnd_f7_d: 'ملخصات يومية تلقائية تصلك على تليجرام في الوقت والتوقيت الذي تحدده (المغرب، فرنسا...)', lnd_f8_t: 'واتساب إكسبريس', lnd_f8_d: 'الصق نص محادثة الواتساب ويستخرج التطبيق المنتجات والأسعار تلقائياً في الميزانية', lnd_stat_1: 'مجاني', lnd_stat_2: 'لغتان', lnd_stat_3: 'سحاب آمن', lnd_stat_4: 'كل الأجهزة', lnd_step_h2: 'كيف يشتغل؟', lnd_step_p: '3 خطوات بسيطة تنظم فيها ميزانيتك', lnd_s1_t: 'سجّل دخولك بـ Google', lnd_s1_d: 'اضغط على "ابدأ مجاناً" وسجّل بحساب Google ديالك — لا تسجيل، لا كلمة مرور', lnd_s2_t: 'أدخل ميزانيتك', lnd_s2_d: 'عندك بيانات افتراضية جاهزة — فقط أدخل الأرقام الحقيقية ديالك في الخانات المناسبة', lnd_s3_t: 'تابع وتحكم في فلوسك', lnd_s3_d: 'البيانات تتزامن تلقائياً — افتح التطبيق من الهاتف أو الكمبيوتر وتلقى كل شيء في مكانه', lnd_final_h2: 'جاهز تنظم فلوسك؟ 💚', lnd_final_p: 'ابدأ دابا — مجاني 100% ولا تحتاج لأي إعداد معقد', lnd_final_note: 'لا حاجة لبطاقة بنكية', lnd_footer_c: 'دبّر فلوسك بذكاء 💚 — جميع الحقوق محفوظة'
  },
  fr: {
    dir: 'ltr',
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    cats: ['Alimentation', 'Marché', 'Loisirs', 'Transport', 'Autre'],
    expLabel: ['Alimentation', 'Marché', 'Loisirs', 'Gasoil', 'Autre'],
    pin_enter: 'Entrez votre code PIN', pin_create: 'Créer un code PIN (4 chiffres)', pin_confirm: 'Confirmez le PIN',
    pin_wrong: '❌ Code PIN incorrect', pin_mismatch: '❌ Les codes ne correspondent pas', pin_note: 'Ce code protège votre application', pin_forgot: 'PIN oublié ?', pin_locked: 'Trop de tentatives. Attendez 30 secondes.', pin_forgot_confirm: 'Supprimer uniquement le PIN ? Vos données seront conservées.',
    saved: 'Sauvegardé automatiquement', new_btn: '✦ Nouveau mois', tab1: 'Tableau de bord', tab2: 'Carnet de notes', tab3: 'Comparaison mensuelle',
    pick: 'Choisir le mois', nm: 'Nouveau mois', nm_sub: 'Comment démarrer ?',
    nm1: 'Copier le budget prévu', nm1s: 'Garder les montants prévus, repartir de zéro',
    nm2: 'Mois vide', nm2s: 'Page blanche', nm3: 'Tout copier', nm3s: 'Identique au mois précédent', nm_btn: 'Créer ✓',
    bk: 'Sauvegarde et sécurité', exp_h: '📤 Exporter', exp_btn: 'Télécharger la sauvegarde', exp_s: 'Toutes vos données en JSON',
    imp_h: '📥 Importer', imp_btn: 'Charger une sauvegarde', imp_s: 'Fichier JSON pour restaurer vos données',
    drv_h: '☁️ Google Drive', s1: 'Cliquez sur Télécharger la sauvegarde', s2: 'Ouvrez Google Drive sur votre téléphone',
    s3: '＋ → Importer → Sélectionner le fichier', s4: 'Terminé ! Vos données sont dans le cloud ☁️',
    pin_h: '🔐 Paramètres PIN', pin_lbl: 'Verrouillage PIN', pin_s: "Protection à l'ouverture",
    pin_ch: 'Changer le code PIN', pin_chs: 'Créer un nouveau code', last_save: 'Dernière sauvegarde', lang_title: 'Choisir la langue',
    k_income: 'Revenus', k_bills: 'Factures', k_expenses: 'Dépenses', k_savings: 'Épargne', k_debts: 'Dettes', k_remaining: 'Solde restant', k_emergency: "Fonds d'urgence", emergency_target_prompt: "Saisissez le montant cible du fonds d'urgence:",
    hero_lbl: 'Solde disponible', hero_ok: '💚 Bonne situation', hero_zero: '🟡 Équilibré', hero_neg: '🔴 Budget dépassé',
    ch1: 'Répartition des dépenses', ch2: 'Prévu vs Réalisé',
    col_item: 'Désignation', col_act: 'Réalisé', col_pln: 'Prévu', col_goal: 'Objectif', col_src: 'Source', col_ent: 'Créancier',
    add_bills: '＋ Ajouter une facture', add_exp: '＋ Ajouter une dépense', add_sav: '＋ Ajouter un objectif', add_dbt: '＋ Ajouter une dette', add_inc: '＋ Ajouter un revenu',
    notes_title: 'Carnet de notes', notes_info: 'Tout ce que vous ajoutez ici est automatiquement comptabilisé dans vos dépenses',
    notes_sub: 'Journal des dépenses', notes_edit: 'Modifiable', notes_chart: 'Répartition', notes_sum: 'Résumé',
    nt_date: 'Date', nt_note: 'Note', nt_subcat: 'Options', nt_cat: 'Catégorie', nt_amount: 'Montant', nt_cur: 'Devise', add_note: '＋ Ajouter une note', nt_remark: '💬 Remarque (optionnel)', nt_remark_ph: 'Ex: marque, magasin, raison...', tab_weekly: '📊 Statistiques', week_chart: 'Dépenses semaine', add_note_fab: 'Ajouter', pdf_btn: 'Exporter PDF', excel_btn: 'Exporter Excel',
    monthly_title: 'Comparaison mensuelle', monthly_chart: 'Évolution revenus/dépenses', monthly_total: 'Total', monthly_remain: 'Solde',
    footer: 'Gérez votre budget intelligemment — Tadbir 💚',
    import_confirm: 'Cette opération remplacera vos données. Confirmer ?',
    toast_add: 'Ajouté ✓', toast_save: '✅ Fichier téléchargé', toast_import: '✅ Données importées',
    toast_pin_on: '🔐 PIN activé', toast_pin_off: '🔓 PIN désactivé', toast_pin_created: 'Code PIN créé ✓', from_of: 'sur',
    sync_off: 'Hors ligne', sync_ok: 'Synchronisé ☁️', sync_ing: 'Synchro...', sync_now: 'Synchroniser maintenant', history_h: '🕘 Sauvegardes locales', history_btn: 'Créer une sauvegarde', history_sub: 'Conserve les 5 dernières versions sur cet appareil', history_empty: 'Aucune sauvegarde locale', history_restore: 'Restaurer', history_confirm: "Restaurer cette version ? L'état actuel sera sauvegardé d'abord.", history_saved: 'Sauvegarde locale créée ✓', month_closed: 'Ce mois est clôturé', month_close: 'Clôturer le mois', month_reopen: 'Rouvrir le mois', carry_balance: 'Reporter le solde du mois', month_exists: 'Le mois suivant contient déjà des données. Les remplacer ?', vs_previous: 'Par rapport au mois précédent', expense_search: 'Rechercher...', sort_newest: 'Plus récentes', sort_oldest: 'Plus anciennes', sort_highest: 'Montant décroissant', sort_lowest: 'Montant croissant', duplicate_expense: 'Dupliquer la dépense', details: 'Détails', deadline: 'Échéance', interest_rate: "Taux d'intérêt (%)", monthly_payment: 'Mensualité', remaining_amount: 'Montant restant', progress: 'Progression', cancel: 'Annuler', save: 'Enregistrer', avg_daily: 'Dépense moyenne quotidienne', daily_budget: 'Budget journalier restant', month_projection: 'Projection de fin de mois', savings_rate: "Taux d'épargne", top_category: 'Catégorie principale', days_elapsed: 'jours pris en compte', days_remaining: 'jours restants', display_currency: 'Unité d’affichage uniquement — aucun montant ne sera converti', toast_signout: '👋 Déconnecté', toast_loaded: 'Données chargées depuis le cloud', signin: 'Connexion', signout: 'Déconnexion',
    custom_cat: '✏️ Nouvelle catégorie...',
    reset_h: '🔄 Réinitialisation', reset_btn: 'Ajouter les données par défaut manquantes', reset_sub: 'Ajoute seulement ce qui manque — ne supprime rien', toast_reset: '✅ Données par défaut ajoutées',
    cal_total: 'Total :', cal_leg1: 'Normal', cal_leg2: 'Modéré', cal_leg3: 'Élevé', cal_source: '📋 Source : Carnet de notes', exp_auto_note: 'Montants issus du carnet — le prévu est modifiable',
    drv_today: "Aujourd'hui", drv_week: 'Semaine', drv_month: 'Mois', drv_avg: 'Moy./trajet', drv_trips: 'trajet', drv_add_title: 'Ajouter une journée', drv_lbl_date: 'Date', drv_lbl_trips: 'Nombre de trajets', drv_lbl_total: 'Montant total', drv_submit: 'Enregistrer la journée', drv_heatmap: 'Dépenses par jour de la semaine', drv_list: 'Historique des trajets', drive_fill: 'Veuillez remplir tous les champs',
    fuel_title: '⛽ Consommation carburant', fuel_add_title: 'Ajouter un plein', fuel_lbl_date: 'Date', fuel_lbl_prevkm: 'Kilométrage précédent', fuel_lbl_currkm: 'Kilométrage actuel', fuel_lbl_litres: 'Litres', fuel_lbl_price: 'Prix du litre', fuel_lbl_total: 'Montant total', fuel_submit: 'Enregistrer le plein', fuel_list: 'Historique des pleins', fuel_fill: 'Vérifiez les champs (le km actuel doit être supérieur)', fuel_max: '⚠️ Maximum 3 pleins par mois atteint', fuel_empty: '⛽ Aucun plein enregistré ce mois',
    fuel_ocr_title: '📷 Importer depuis une photo', fuel_ocr_pump: 'Photo de la pompe', fuel_ocr_dash: 'Photo du compteur', fuel_ocr_btn: 'Analyser les photos', fuel_ocr_loading: 'Analyse en cours...', fuel_ocr_ok: '✓ Données extraites, vérifiez avant de valider', fuel_ocr_fail: '❌ Extraction impossible, saisissez manuellement', fuel_ocr_loadfail: '❌ Impossible de charger l’outil d’analyse, vérifiez la connexion',
    fuel_stat_km: 'Distance', fuel_stat_cost: 'Coût', fuel_stat_conso: 'Conso/100km', fuel_stat_pricekm: 'Prix/km',
    stats_title: 'Analyse des dépenses', stats_subtitle: 'Repérez les fuites, les habitudes coûteuses et les économies possibles.', stats_month: 'Mois analysé', stats_leaks: '🚨 Fuites probables', stats_products: '🧾 Produits les plus coûteux', stats_actions: '💡 Actions recommandées', stats_category: 'Répartition par catégorie', stats_entries: 'opérations', stats_discretionary: 'Loisirs et extras', stats_no_data: 'Aucune donnée pour ce mois', stats_reduce: 'Réduire de 25 % le premier poste non essentiel', stats_repeat: 'Vérifier les achats répétés presque chaque jour', stats_budget: 'Fixer un plafond mensuel par catégorie', form_choose: 'Sélectionnez les achats', form_clear: 'Tout effacer ✕', filter_month: 'Mois :', filter_day: 'Jour :', filter_total: 'Total :', month_total: 'Total du mois', drive_sync: '⚡ Synchronisé avec les revenus', offline: '📡 Vous êtes hors ligne — les données restent enregistrées sur cet appareil', person: 'Bénéficiaire', all_people: 'Toute la famille', family_stats: '👨‍👩‍👦‍👦 Consommation familiale', bud_h: 'Configurer le budget', bud_s: 'Définir un plafond par catégorie', lnd_logo_name: 'Tadbir', lnd_logo_sub: 'Gérez votre budget intelligemment', lnd_nav_btn: '🔑 Connexion Google', lnd_badge: '✦ 100% Gratuit • Synchro Cloud', lnd_h1_1: 'Gérez votre argent', lnd_h1_2: 'en un seul endroit', lnd_sub: 'Application intelligente pour suivre votre budget mensuel — notez vos dépenses, suivez vos économies et remboursez vos dettes', lnd_start_btn: '🚀 Commencer avec Google', lnd_install: "📲 Installer l'app", lnd_no_card: 'Aucune carte bancaire requise • Gratuit à vie', lnd_demo_title: "Aperçu de l'app", lnd_demo_inc: '💵 Revenus', lnd_demo_exp: '🛒 Dépenses', lnd_demo_rem: '✅ Reste', lnd_demo_ch1: 'Répartition', lnd_demo_ch2: 'Prévu / Réalisé', lnd_demo_l1: 'Désignation', lnd_demo_l2: 'Réalisé', lnd_demo_l3: 'Prévu', lnd_demo_food: 'Alimentation', lnd_demo_market: 'Marché', lnd_feat_h2_1: 'Tout ce dont vous avez besoin', lnd_feat_h2_2: 'au même endroit', lnd_feat_p: 'Conçue spécialement pour organiser votre budget facilement et sans complexité', lnd_f1_t: 'Tableau de bord', lnd_f1_d: 'Suivez revenus, factures, dépenses, épargne et dettes sur un tableau clair avec graphiques', lnd_f2_t: 'Synchro automatique', lnd_f2_d: 'Vos données sont dans le cloud et synchronisées en temps réel entre appareils', lnd_f3_t: 'Carnet de notes', lnd_f3_d: 'Notez vos dépenses quotidiennes et elles se cumulent automatiquement sans saisie', lnd_f4_t: 'Comparaison', lnd_f4_d: "Suivez l'évolution sur 12 mois avec un graphique prévu vs réalisé", lnd_f5_t: 'Bilingue', lnd_f5_d: "Arabe • Français — le changement de langue adapte automatiquement l'interface (RTL/LTR)", lnd_f6_t: 'Sécurité', lnd_f6_d: 'Connexion Google + code PIN local pour protéger vos données privées', lnd_f7_t: 'Bot Telegram Automatique', lnd_f7_d: 'Bilans quotidiens automatiques reçus sur Telegram à l’heure et au fuseau horaire de votre choix.', lnd_f8_t: 'WhatsApp Express', lnd_f8_d: 'Collez le texte d’une discussion WhatsApp pour extraire et ajouter automatiquement vos courses.', lnd_stat_1: 'Gratuit', lnd_stat_2: 'Langues', lnd_stat_3: 'Cloud Sécurisé', lnd_stat_4: 'Multi-appareils', lnd_step_h2: 'Comment ça marche ?', lnd_step_p: '3 étapes simples pour organiser votre budget', lnd_s1_t: 'Connectez-vous via Google', lnd_s1_d: "Cliquez sur Commencer et utilisez Google — pas de mot de passe", lnd_s2_t: 'Entrez votre budget', lnd_s2_d: 'Des données démo sont prêtes — remplacez-les par vos montants réels', lnd_s3_t: 'Suivez et contrôlez', lnd_s3_d: "Tout se synchronise automatiquement. Ouvrez depuis n'importe où", lnd_final_h2: 'Prêt à organiser votre argent ? 💚', lnd_final_p: 'Commencez maintenant — 100% gratuit, aucune configuration', lnd_final_note: 'Pas de carte bancaire requise', lnd_footer_c: 'Gérez intelligemment 💚 — Tous droits réservés'
  }
};

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
const SK = 'sf_v35', PIN_KEY = 'sf_pin', PINON_KEY = 'sf_pin_on';
const COLORS = { bills: '#818cf8', expenses: '#f87171', savings: '#38bdf8', debts: '#fbbf24', income: '#10b981', remaining: '#2dd4bf', emergency: '#c084fc' };
const CAT_COLORS = ['#7EC8B0', '#B5A8D4', '#E8A598', '#D4A853', '#9AA0B0'];
const now = new Date();
let curYear = now.getFullYear(), curMonth = now.getMonth(), currency = 'درهم', pickerYear = now.getFullYear(), nmOpt = 'copy';
let _appReady = false;      // prevent multiple initializations
let _authReady = false;     // true only after cloud load completes
let _saveQueue = false;     // pending save after cloud load
let allData = {}, lang = 'ar', pinBuffer = '', pinMode = 'verify', pinTemp = '', pinEnabled = false;

const mkey = (y, m) => `${y}-${String(m + 1).padStart(2, '0')}`;
const ck = () => mkey(curYear, curMonth);
const fmt = n => Number(n || 0).toLocaleString('ar-MA');
const T = () => LANGS[lang];
const FAMILY_MEMBERS = [
  { id: 'self', ar: 'أنا', fr: 'Moi' },
  { id: 'noufissa', ar: 'نوفيسة', fr: 'Noufissa' },
  { id: 'iyad', ar: 'إياد', fr: 'Iyad' },
  { id: 'owayss', ar: 'أويس', fr: 'Owayss' },
  { id: 'family', ar: 'العائلة/مشترك', fr: 'Famille / commun' }
];
function personLabel(id) { const p = FAMILY_MEMBERS.find(function (x) { return x.id === id; }); return p ? (p[lang] || p.fr) : T().all_people; }
function populatePersonSelects() {
  [['nf-person', false], ['nf-person-filter', true], ['stats-person-filter', true]].forEach(function (cfg) {
    const el = $(cfg[0]); if (!el) return; const old = el.value; el.innerHTML = '';
    if (cfg[1]) { const all = document.createElement('option'); all.value = ''; all.textContent = T().all_people; el.appendChild(all); }
    FAMILY_MEMBERS.forEach(function (p) { const o = document.createElement('option'); o.value = p.id; o.textContent = personLabel(p.id); el.appendChild(o); });
    el.value = Array.from(el.options).some(function (o) { return o.value === old; }) ? old : (cfg[1] ? '' : 'self');
  });
}
const $ = id => document.getElementById(id);
const set = (id, v) => { const e = $(id); if (e) e.textContent = v; };

// ══════════════════════════════════════════════
// DEFAULT DATA
// ══════════════════════════════════════════════

// ══════════════════════════════════════════════
// HIERARCHICAL CATEGORIES FOR NOTES
// ══════════════════════════════════════════════
const MAIN_CATS = {
  ar: [
    { id: 'fixed', icon: '🏠', label: 'الضروريات الثابتة', subs: ['إيجار', 'كهرباء/ماء', 'غاز/بوطة', 'انترنت', 'تأمين', 'مسحوق غسيل', 'جافيل/مبيض', 'سائل الأواني', 'منظف أرضيات', 'معطر جو', 'ورق حمام', 'ورق مطبخ', 'أكياس زبل', 'ألومينيوم'] },
    { id: 'daily', icon: '🛒', label: 'المعيشة اليومية', subs: ['مواد غذائية', 'السوق', 'خضر وفواكه', 'لحوم وأسماك', 'خبز وفطور', 'حليب وألبان', 'بقالة/إبيسري', 'مطعم', 'عصير طري', 'بيض', 'زيت وتوابل', 'أرز وكسكس', 'معكرونة', 'طون/مصبرات', 'قطاني', 'مطيشة', 'دنجال', 'ثوم'] },
    { id: 'cafe_smoke', icon: '☕', label: 'الترفيه/الكمالية', subs: ['قهوة كحلة', 'كابوتشينو', 'نسكافي', 'أتاي', 'كرواصة', 'مسمن', 'بغرير', 'فطور كومبلي', 'عصير طري', 'سيجارة', 'علبة تبغ', 'ولاعة', 'شيشة', 'تفكيكة', 'سندويش', 'زعزع', 'دانون', 'شيبس / رقائق بطاطس'] },
    { id: 'transport', icon: '🚗', label: 'التنقل', subs: ['Gasoil', 'نقل عام', 'صيانة سيارة', 'غسل السيارة'] },
    { id: 'health', icon: '🏥', label: 'الصحة', subs: ['دواء', 'طبيب/عيادة', 'صيدلية', 'دوليبران/مسكن', 'فيتامينات', 'سيروم/قطن', 'ضمادات/بلاصط', 'حفاضات/كوش', 'حليب رضع', 'لانجيت', 'سيريلاك', 'شامبو', 'صابون', 'معجون أسنان', 'مضاد عرق', 'جيل حلاقة', 'شفرات', 'كوتون تيج'] },
    { id: 'clothes', icon: '👕', label: 'الملابس والمظهر', subs: ['ملابس', 'حلاقة/عناية'] },
    { id: 'learning', icon: '📚', label: 'التطوير الشخصي', subs: ['تعليم/دورات', 'كتب'] },
    { id: 'fun', icon: '🎭', label: 'الترفيه والاجتماعي', subs: ['ترفيه', 'هدايا', 'سفر'] },
    { id: 'invest', icon: '💰', label: 'الاستثمار والطوارئ', subs: ['توفير', 'طوارئ', 'سداد ديون'] }
  ],
  fr: [
    { id: 'fixed', icon: '🏠', label: 'Charges fixes', subs: ['Loyer', 'Électricité/Eau', 'Gaz/Bonbonne', 'Internet', 'Assurance', 'Lessive/Tide', 'Javel', 'Liquide vaisselle', 'Désinfectant', 'Désodorisant', 'Papier toilette', 'Essuie-tout', 'Sacs poubelle', 'Aluminium'] },
    { id: 'daily', icon: '🛒', label: 'Vie quotidienne', subs: ['Alimentation', 'Marché', 'Légumes/Fruits', 'Viandes/Poissons', 'Pain/Viennoiseries', 'Lait/Produits laitiers', 'Oeufs', 'Riz/Couscous', 'Pâtes', 'Thon/Conserves', 'Légumineuses', 'Restaurant', 'Jus frais', 'Huile/Épices', 'Tomates', 'Aubergine', 'Ail'] },
    { id: 'cafe_smoke', icon: '☕', label: 'Loisirs/Extras', subs: ['Café noir', 'Cappuccino', 'Nescafé', 'Thé', 'Croissant', 'Msemen', 'Beghrir', 'Petit-déj complet', 'Jus frais', 'Cigarettes', 'Paquet tabac', 'Briquet', 'Chicha', 'Tabac à pipe', 'Sandwich', 'Zaazoua', 'Danone', 'Chips'] },
    { id: 'transport', icon: '🚗', label: 'Transport', subs: ['Gasoil', 'Transport public', 'Entretien voiture', 'Lavage voiture'] },
    { id: 'health', icon: '🏥', label: 'Santé', subs: ['Médicaments', 'Médecin', 'Pharmacie', 'Doliprane', 'Vitamines', 'Sérum/Coton', 'Pansements', 'Couches', 'Lait bébé', 'Lingettes', 'Céréales bébé', 'Shampoing', 'Savon', 'Dentifrice', 'Déodorant', 'Gel rasage', 'Lames rasoir', 'Coton-tige'] },
    { id: 'clothes', icon: '👕', label: 'Vêtements et apparence', subs: ['Vêtements', 'Coiffeur/Soins'] },
    { id: 'learning', icon: '📚', label: 'Développement personnel', subs: ['Formation/Cours', 'Livres'] },
    { id: 'fun', icon: '🎭', label: 'Loisirs et social', subs: ['Loisirs', 'Cadeaux', 'Voyage'] },
    { id: 'invest', icon: '💰', label: 'Épargne et urgences', subs: ['Épargne', 'Urgences', 'Remboursement dettes'] }
  ]
};

function getMainCats() { return MAIN_CATS[lang] || MAIN_CATS.ar; }
function getSubCats(mainId) {
  const mc = getMainCats().find(c => c.id === mainId);
  return mc ? mc.subs : [];
}
function getMainLabel(mainId) {
  const mc = getMainCats().find(c => c.id === mainId);
  return mc ? mc.icon + ' ' + mc.label : '';
}

// Default labels per language
const DEF_LABELS = {
  ar: {
    bills: ['الضو', 'الماء', 'Wi-fi', 'التليفون', 'الإيجار', 'التأمين', 'نتفليكس', 'الغاز'],
    expenses: ['مواد غذائية', 'السوق', 'ترفيه/كمالية', 'Gasoil', 'الترفيه', 'ملابس', 'صيدلية', 'مطعم', 'الحلاقة', 'متنوع'],
    savings: ['المشروع', 'السفر', 'طوارئ', 'تعليم'],
    debts: ['Credit Dacia', 'البنك', 'كريدي شخصي'],
    income: ['الراتب', 'عمل ثاني', 'إيجار مستلم']
  },
  fr: {
    bills: ['Électricité', 'Eau', 'Wi-fi', 'Téléphone', 'Loyer', 'Assurance', 'Netflix', 'Gaz'],
    expenses: ['Alimentation', 'Marché', 'Loisirs', 'Gasoil', 'Loisirs', 'Vêtements', 'Pharmacie', 'Restaurant', 'Coiffeur', 'Divers'],
    savings: ['Projet', 'Voyage', 'Urgences', 'Éducation'],
    debts: ['Crédit voiture', 'Banque', 'Crédit perso'],
    income: ['Salaire', '2ème emploi', 'Loyer reçu']
  }
};

function trLbl(lbl) {
  if (!lbl) return '';
  const keys = Object.keys(DEF_LABELS.ar);
  for (let k of keys) {
    let idxAr = DEF_LABELS.ar[k].indexOf(lbl);
    if (idxAr !== -1 && lang === 'fr') return DEF_LABELS.fr[k][idxAr];
    let idxFr = DEF_LABELS.fr[k].indexOf(lbl);
    if (idxFr !== -1 && lang === 'ar') return DEF_LABELS.ar[k][idxFr];
  }
  return lbl;
}

function defMonth() {
  const lbl = DEF_LABELS[lang] || DEF_LABELS.ar;
  const pln = {
    bills: [500, 300, 400, 200, 3000, 300, 50, 150],
    expenses: [1500, 500, 100, 600, 200, 300, 150, 200, 50, 200],
    savings: [500, 300, 500, 200],
    debts: [2180, 0, 0],
    income: [7680, 0, 0]
  };
  return {
    bills: lbl.bills.map((l, i) => ({ label: l, act: 0, pln: pln.bills[i] || 0 })),
    expenses: lbl.expenses.map((l, i) => ({ label: l, act: 0, pln: pln.expenses[i] || 0 })),
    savings: lbl.savings.map((l, i) => ({ label: l, act: 0, pln: pln.savings[i] || 0 })),
    debts: lbl.debts.map((l, i) => ({ label: l, act: 0, pln: pln.debts[i] || 0 })),
    income: lbl.income.map((l, i) => ({ label: l, act: 0, pln: pln.income[i] || 0 })),
    notes: [],
    expCatPln: {},
    fuelEntries: [],
    carExpenses: []
  };
}

// ══════════════════════════════════════════════
// LANGUAGE
// ══════════════════════════════════════════════
function setLang(l) {
  lang = l; localStorage.setItem('sf_lang', l);
  const t = T(), isRTL = t.dir === 'rtl';
  $('html-root').setAttribute('dir', t.dir);
  $('html-root').setAttribute('lang', isRTL ? 'ar' : l);
  const lblMap = { ar: 'عربي', fr: 'FR' };
  document.querySelectorAll('.plb').forEach(b => b.classList.toggle('active', b.textContent.trim() === lblMap[l]));
  ['ar', 'fr'].forEach(k => $('lo-' + k)?.classList.toggle('active', k === l));
  set('pin-sub', pinMode === 'setup1' ? t.pin_create : pinMode === 'setup2' ? t.pin_confirm : t.pin_enter);
  set('pin-note', ''); set('pin-forgot', t.pin_forgot);
  set('t-saved', t.saved); set('t-new-btn', t.new_btn);
  set('t-tab1', t.tab1); set('t-tab2', t.tab2); set('t-tab3', t.tab3);
  set('t-pick', t.pick); set('t-nm', t.nm); set('t-nm-sub', t.nm_sub);
  set('t-nm1', t.nm1); set('t-nm1s', t.nm1s); set('t-nm2', t.nm2); set('t-nm2s', t.nm2s);
  set('t-nm3', t.nm3); set('t-nm3s', t.nm3s); set('t-nm-btn', t.nm_btn);
  set('t-bk', t.bk); set('t-exp-h', t.exp_h); set('t-exp-btn', t.exp_btn); set('t-exp-s', t.exp_s);
  set('t-imp-h', t.imp_h); set('t-imp-btn', t.imp_btn); set('t-imp-s', t.imp_s);
  set('t-drv-h', t.drv_h); set('t-s1', t.s1); set('t-s2', t.s2); set('t-s3', t.s3); set('t-s4', t.s4);
  set('t-pin-h', t.pin_h); set('t-pin-lbl', t.pin_lbl); set('t-pin-s', t.pin_s);
  set('t-pin-ch', t.pin_ch); set('t-pin-chs', t.pin_chs); set('t-lang-title', t.lang_title);
  set('kl-income', t.k_income); set('kl-bills', t.k_bills); set('kl-expenses', t.k_expenses);
  set('kl-savings', t.k_savings); set('kl-debts', t.k_debts); set('kl-remaining', t.k_remaining);
  set('kl-emergency', t.k_emergency || "صندوق الطوارئ");
  set('t-hero-lbl', t.hero_lbl); set('t-ch1', t.ch1);
  set('t-ch2', t.ch2 || (l === 'fr' ? 'Prévu / Réalisé' : 'لي مخطط له / لي تصرف'));
  set('t-ch2-sub', l === 'fr' ? 'Comparaison du budget prévu avec les dépenses réelles' : 'مقارنة التخطيط الشهري مع المصاريف الفعلية');
  set('bcl-act-lbl', t.col_act || (l === 'fr' ? 'Réalisé' : 'تصرفت'));
  set('bcl-pln-lbl', t.col_pln || (l === 'fr' ? 'Prévu' : 'مخطط'));
  set('t-wa-pill', l === 'fr' ? 'Saisie Rapide' : 'إدخال سريع');
  set('t-wa-title', 'WhatsApp Express');
  set('t-wa-sub', l === 'fr' ? 'Saisie rapide des courses depuis WhatsApp' : 'إدخال سريع للمشتريات من الواتساب');
  set('t-wa-instructions', l === 'fr' ? 'Collez le texte de la discussion WhatsApp (ex: Olwyz mtixa hlib lkhyar lkhal snkrwa jvil)' : 'الصق نص المحادثة من الواتساب (مثال: Olwyz mtixa hlib lkhyar lkhal snkrwa jvil)');
  const waInput = $('wa-raw-input');
  if (waInput) waInput.placeholder = l === 'fr' ? 'Ex: Olwyz mtixa hlib lkhyar lkhal snkrwa jvil...' : 'مثال: Olwyz mtixa hlib lkhyar lkhal snkrwa jvil...';
  set('t-wa-analyze-btn', l === 'fr' ? '🔍 Analyser et extraire les produits' : '🔍 تحليل واستخراج المنتجات');
  set('t-wa-total-lbl', l === 'fr' ? 'Total des courses :' : 'إجمالي المشتريات:');
  set('t-wa-save-btn', l === 'fr' ? '🚀 Tout enregistrer dans le budget' : '🚀 حفظ الكل في الميزانية');
  const fabEl1 = $('fab-btn'); if (fabEl1) fabEl1.innerHTML = '＋ <span class="fab-text">' + (t.add_note_fab || (l === 'fr' ? 'Ajouter' : 'تسجيل مصروف')) + '</span>';
  const fabWaEl1 = $('fab-wa-btn'); if (fabWaEl1) fabWaEl1.innerHTML = '💬 <span class="fab-text">WhatsApp</span>';
  const fabTgEl1 = $('fab-tg-btn'); if (fabTgEl1) fabTgEl1.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;"><path d="M9.78 18.65l.28-4.2 7.63-6.88c.34-.31-.07-.48-.52-.18l-9.43 5.95-4.07-1.27c-.89-.28-.91-.88.19-1.31l15.93-6.14c.74-.27 1.39.18 1.15 1.3l-2.71 12.78c-.2.93-.75 1.15-1.53.72l-4.14-3.05-2 1.93c-.22.22-.41.41-.83.41z" fill="#ffffff"/></svg> <span class="fab-text">Telegram</span>';
  set('tl-bills', t.k_bills); set('tl-expenses', t.k_expenses); set('tl-savings', t.k_savings);
  set('tl-debts', t.k_debts); set('tl-income', t.k_income);
  set('tc-b1', t.col_item); set('tc-b2', t.col_act); set('tc-b3', t.col_pln);
  set('tc-e1', t.col_item); set('tc-e2', t.col_act); set('tc-e3', t.col_pln);
  set('tc-s1', t.col_goal); set('tc-s2', t.col_act); set('tc-s3', t.col_pln);
  set('tc-d1', t.col_ent); set('tc-d2', t.col_act); set('tc-d3', t.col_pln);
  set('tc-i1', t.col_src); set('tc-i2', t.col_act); set('tc-i3', t.col_pln);
  set('add-bills-btn', t.add_bills); set('add-exp-btn', t.add_exp);
  set('add-sav-btn', t.add_sav); set('add-dbt-btn', t.add_dbt); set('add-inc-btn', t.add_inc);
  set('t-notes-title', t.notes_title); set('t-notes-info', t.notes_info);
  set('t-notes-sub', t.notes_sub); set('t-notes-edit', t.notes_edit);
  set('t-notes-chart', t.notes_chart); set('t-notes-sum', t.notes_sum);
  set('nt-date', t.nt_date); set('nt-note', t.nt_note);
  set('nt-maincat', t.nt_cat || 'الفئة'); set('nt-subcat', t.nt_subcat || 'الخيارات');
  set('nt-amount', t.nt_amount); set('nt-cur', t.nt_cur); set('add-note-btn', t.add_note);
  set('t-tab6', t.tab_weekly || '📊 إحصائيات');
  set('t-week-chart', t.week_chart || 'مصاريف الأسبوع');
  set('stats-title', t.stats_title); set('stats-subtitle', t.stats_subtitle); set('stats-month-label', t.stats_month);
  set('stats-leak-title', t.stats_leaks); set('stats-products-title', t.stats_products); set('stats-actions-title', t.stats_actions); set('stats-category-title', t.stats_category);
  set('stats-person-label', t.person); set('stats-family-title', t.family_stats); set('nf-lbl-person', t.person);
  set('nf-lbl-date', t.nt_date); set('nf-lbl-amount', t.nt_amount); set('nf-add-lbl', t.save);
  set('nf-chips-lbl', t.form_choose); set('nf-chips-clear-btn', t.form_clear); set('nf-month-lbl2', t.filter_month); set('nf-day-lbl', t.filter_day);
  set('nf-filter-lbl', t.filter_total); set('nf-footer-lbl', t.month_total); set('drv-sync-badge', t.drive_sync); set('offline-banner', t.offline);
  populatePersonSelects();
  set('t-excel-btn', t.excel_btn || 'تصدير Excel');
  set('t-pdf-btn', t.pdf_btn || 'تصدير PDF');
  const expNote = document.getElementById('exp-auto-note');
  if (expNote) expNote.textContent = '📝 ' + (T().exp_auto_note || 'المبالغ من دفتر الملاحظات — المخطط قابل للتعديل');

  ['t-bud-h', 't-bud-s',
    't-lnd-logo-name', 't-lnd-logo-sub', 't-lnd-nav-btn', 't-lnd-badge', 't-lnd-h1-1', 't-lnd-h1-2',
    't-lnd-sub', 't-lnd-start-btn', 't-lnd-install', 't-lnd-no-card', 't-lnd-demo-title', 't-lnd-demo-inc',
    't-lnd-demo-exp', 't-lnd-demo-rem', 't-lnd-demo-ch1', 't-lnd-demo-ch2', 't-lnd-demo-l1', 't-lnd-demo-l2',
    't-lnd-demo-l3', 't-lnd-demo-food', 't-lnd-demo-market', 't-lnd-feat-h2-1', 't-lnd-feat-h2-2', 't-lnd-feat-p',
    't-lnd-f1-t', 't-lnd-f1-d', 't-lnd-f2-t', 't-lnd-f2-d', 't-lnd-f3-t', 't-lnd-f3-d', 't-lnd-f4-t', 't-lnd-f4-d',
    't-lnd-f5-t', 't-lnd-f5-d', 't-lnd-f6-t', 't-lnd-f6-d', 't-lnd-f7-t', 't-lnd-f7-d', 't-lnd-f8-t', 't-lnd-f8-d', 't-lnd-stat-1', 't-lnd-stat-2', 't-lnd-stat-3', 't-lnd-stat-4',
    't-lnd-step-h2', 't-lnd-step-p', 't-lnd-s1-t', 't-lnd-s1-d', 't-lnd-s2-t', 't-lnd-s2-d', 't-lnd-s3-t', 't-lnd-s3-d',
    't-lnd-final-h2', 't-lnd-final-p', 't-lnd-final-note', 't-lnd-footer-c'].forEach(k => {
      let key = k.replace('t-', '').replace(/-/g, '_');
      set(k, t[key]);
    });
  set('t-lnd-final-btn', t.lnd_start_btn);
  set('t-pin-title', t.lnd_logo_name);
  set('t-carry-balance', t.carry_balance);

  // Calendar legend & labels
  set('cal-total-lbl', T().cal_total || 'الإجمالي:');
  set('cal-leg1', T().cal_leg1 || 'عادي');
  set('cal-leg2', T().cal_leg2 || 'متوسط');
  set('cal-leg3', T().cal_leg3 || 'مرتفع');
  set('cal-source', T().cal_source || '📋 المصدر: سجل المصاريف');
  // Car / In Drive labels
  const _t = T();
  set('t-tab5', _t.t_tab_car || 'Voiture');
  set('mm-t-tab5', _t.t_tab_car || 'Voiture');
  set('car-main-title', _t.car_main_title || '🚗 Gestion Voiture & InDrive');
  set('lbl-subtab-indrive', _t.car_subtab_indrive || 'InDrive');
  set('lbl-subtab-fuel', _t.car_subtab_fuel || 'Carburant');
  set('lbl-subtab-maint', _t.car_subtab_maint || 'Entretien & Frais');
  set('lbl-subtab-summary', _t.car_subtab_summary || 'Bilan Net');

  set('drv-today-lbl', _t.drv_today || 'اليوم');
  set('drv-week-lbl', _t.drv_week || 'الأسبوع');
  set('drv-month-lbl2', _t.drv_month || 'الشهر');
  set('drv-avg-lbl', _t.drv_avg || 'معدل/رحلة');
  set('drv-trips-lbl', _t.drv_trips || 'رحلة');
  set('drv-add-title', _t.drv_add_title || 'تسجيل يوم جديد');
  set('drv-lbl-date', _t.drv_lbl_date || 'التاريخ');
  set('drv-lbl-trips', _t.drv_lbl_trips || 'عدد الرحلات');
  set('drv-lbl-total', _t.drv_lbl_total || 'المجموع');
  set('drv-submit-lbl', _t.drv_submit || 'تسجيل اليوم');
  set('drv-week-chart-title', _t.drv_heatmap || 'أفضل أيام الأسبوع');
  set('drv-list-title', _t.drv_list || 'سجل الرحلات');
  // Fuel labels
  set('fuel-title-lbl', _t.fuel_title || '⛽ استهلاك الوقود');
  set('fuel-add-title', _t.fuel_add_title || 'إضافة تعبئة جديدة');
  set('fuel-lbl-date', _t.fuel_lbl_date || 'التاريخ');
  set('fuel-lbl-prevkm', _t.fuel_lbl_prevkm || 'الكيلومتراج السابق');
  set('fuel-lbl-currkm', _t.fuel_lbl_currkm || 'الكيلومتراج الحالي');
  set('fuel-lbl-litres', _t.fuel_lbl_litres || 'Litres');
  set('fuel-lbl-price', _t.fuel_lbl_price || 'ثمن اللتر');
  set('fuel-lbl-total', _t.fuel_lbl_total || 'المبلغ الإجمالي');
  set('fuel-submit-lbl', _t.fuel_submit || 'تسجيل التعبئة');
  set('fuel-list-title', _t.fuel_list || 'سجل التعبئات');
  set('fuel-ocr-title', _t.fuel_ocr_title || '📷 استيراد من صورة');
  set('fuel-ocr-pump-lbl', _t.fuel_ocr_pump || 'صورة المضخة');
  set('fuel-ocr-dash-lbl', _t.fuel_ocr_dash || 'صورة عداد الكيلومترات');
  set('fuel-ocr-btn', _t.fuel_ocr_btn || 'تحليل الصور');
  set('fuel-stat-km-lbl', _t.fuel_stat_km || 'المسافة');
  set('fuel-stat-cost-lbl', _t.fuel_stat_cost || 'التكلفة');
  set('fuel-stat-conso-lbl', _t.fuel_stat_conso || 'الاستهلاك/100كم');
  set('fuel-stat-pricekm-lbl', _t.fuel_stat_pricekm || 'الثمن/كم');
  set('nf-lbl-remark', t.nt_remark || '💬 ملاحظة (اختياري)');
  const remEl = document.getElementById('nf-remark'); if (remEl) remEl.placeholder = t.nt_remark_ph || 'مثال: ماركة، محل...';
  const fabEl = document.getElementById('fab-btn'); if (fabEl) fabEl.innerHTML = '＋ <span class="fab-text">' + (t.add_note_fab || 'تسجيل مصروف') + '</span>';
  set('add-note-mobile-lbl', t.add_note || '＋ إضافة');
  set('t-monthly-title', t.monthly_title); set('t-monthly-chart', t.monthly_chart);
  set('t-footer', t.footer);
  if (t.signin) {
    set('t-signin', t.signin); set('t-signout', t.signout); set('t-sync-now', t.sync_now || 'Synchroniser maintenant');
    set('t-ud-backup', t.bk || 'الحفظ والحماية');
    set('t-ud-lang', t.lang_title || 'اللغة');
  }
  set('t-history-h', t.history_h || '🕘 Sauvegardes locales');
  set('t-history-btn', t.history_btn || 'Créer une sauvegarde');
  set('t-history-sub', t.history_sub || 'Conserve les 5 dernières versions');
  set('t-carry-balance', t.carry_balance || 'Reporter le solde du mois');
  const search = $('nf-search'); if (search) search.placeholder = t.expense_search || 'Rechercher...';
  const sort = $('nf-sort');
  if (sort && sort.options.length === 4) {
    sort.options[0].textContent = t.sort_newest || 'Plus récentes';
    sort.options[1].textContent = t.sort_oldest || 'Plus anciennes';
    sort.options[2].textContent = t.sort_highest || 'Montant décroissant';
    sort.options[3].textContent = t.sort_lowest || 'Montant croissant';
  }
  set('am-daily-label', t.avg_daily || 'Dépense moyenne quotidienne');
  set('am-budget-label', t.daily_budget || 'Budget journalier restant');
  set('am-projection-label', t.month_projection || 'Projection de fin de mois');
  set('am-savings-label', t.savings_rate || "Taux d'épargne");
  set('am-top-label', t.top_category || 'Catégorie principale');
  const currencySelect = $('currencySelect'); if (currencySelect) currencySelect.title = t.display_currency || 'Unité d’affichage uniquement';
  renderSnapshotList();
  setSyncStatus(_fbUid ? 'ok' : 'off');
  if (t.reset_h) { set('t-reset-h', t.reset_h); set('t-reset-btn', t.reset_btn); set('t-reset-sub', t.reset_sub); }
  document.querySelectorAll('.mini-table input[type=text]').forEach(i => i.style.textAlign = isRTL ? 'right' : 'left');

  // Auto-switch currency display
  if (l === 'fr' && currency === 'درهم') currency = 'DH';
  if (l === 'ar' && currency === 'DH') currency = 'درهم';
  const curSel = document.getElementById('currencySelect');
  if (curSel) curSel.value = currency;

  // Update document title
  document.title = (t.lnd_logo_name || 'تدبير') + ' Pro - ' + (t.lnd_logo_sub || 'إدارة الميزانية والمصاريف الشخصية');

  updateMonthLabel();
  buildMonthlyHead();
  if (typeof renderCalendar === 'function') renderCalendar();
  renderNotes();
  recalc();
}

// ══════════════════════════════════════════════
// PIN
// ══════════════════════════════════════════════
let pinFailedAttempts = 0;
let pinLockedUntil = 0;

async function hashPIN(pin) {
  if (!window.crypto || !window.crypto.subtle) throw new Error('Secure crypto unavailable');
  const bytes = new TextEncoder().encode('tadbir-pin-v1:' + pin);
  const digest = await window.crypto.subtle.digest('SHA-256', bytes);
  return 'sha256:' + Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function verifyStoredPIN(pin) {
  const stored = localStorage.getItem(PIN_KEY) || '';
  if (stored.startsWith('sha256:')) return stored === await hashPIN(pin);
  if (stored === pin) {
    // Migration transparente des anciens PIN enregistrés en clair.
    localStorage.setItem(PIN_KEY, await hashPIN(pin));
    return true;
  }
  return false;
}

function initPIN() {
  const saved = localStorage.getItem(PIN_KEY);
  pinEnabled = localStorage.getItem(PINON_KEY) === '1';
  lang = localStorage.getItem('sf_lang') || 'ar';
  setLang(lang);
  if (!saved) { pinMode = 'setup1'; set('pin-sub', T().pin_create); set('pin-note', T().pin_note); }
  else if (pinEnabled) { pinMode = 'verify'; $('pin-forgot').style.display = 'block'; set('pin-sub', T().pin_enter); }
  else { unlockApp(); }
}
function pinPress(d) {
  if (Date.now() < pinLockedUntil) {
    set('pin-error', T().pin_locked || 'Trop de tentatives. Attendez 30 secondes.');
    return;
  }
  if (pinBuffer.length >= 4) return;
  pinBuffer += d; updateDots();
  if (pinBuffer.length === 4) setTimeout(handlePin, 200);
}
function pinDel() { pinBuffer = pinBuffer.slice(0, -1); updateDots(); set('pin-error', ''); }
function updateDots(err = false) { for (let i = 0; i < 4; i++) { const d = $('d' + i); d.classList.toggle('filled', i < pinBuffer.length && !err); d.classList.toggle('error', i < pinBuffer.length && err); } }
async function handlePin() {
  const t = T();
  if (Date.now() < pinLockedUntil) {
    pinBuffer = ''; updateDots(); set('pin-error', t.pin_locked || 'Trop de tentatives.');
    return;
  }
  if (pinMode === 'setup1') { pinTemp = pinBuffer; pinBuffer = ''; updateDots(); set('pin-sub', t.pin_confirm); set('pin-note', ''); pinMode = 'setup2'; }
  else if (pinMode === 'setup2') {
    if (pinBuffer === pinTemp) {
      try {
        localStorage.setItem(PIN_KEY, await hashPIN(pinBuffer));
        localStorage.setItem(PINON_KEY, '1'); pinEnabled = true; pinFailedAttempts = 0;
        $('pin-screen').classList.add('hidden'); $('pin-toggle').classList.add('on'); showToast(t.toast_pin_created);
      } catch (e) {
        pinBuffer = ''; pinTemp = ''; pinMode = 'setup1'; updateDots();
        set('pin-error', '❌ Secure PIN unavailable');
      }
    }
    else { updateDots(true); set('pin-error', t.pin_mismatch); pinBuffer = ''; setTimeout(() => { updateDots(); set('pin-error', ''); pinMode = 'setup1'; pinTemp = ''; set('pin-sub', t.pin_create); }, 1400); }
  } else {
    let valid = false;
    try { valid = await verifyStoredPIN(pinBuffer); } catch (e) { }
    if (valid) { pinFailedAttempts = 0; pinLockedUntil = 0; unlockApp(); }
    else {
      pinFailedAttempts++;
      if (pinFailedAttempts >= 5) {
        pinFailedAttempts = 0; pinLockedUntil = Date.now() + 30000;
        set('pin-error', t.pin_locked || 'Trop de tentatives. Attendez 30 secondes.');
      } else set('pin-error', t.pin_wrong);
      updateDots(true); pinBuffer = '';
      setTimeout(() => { updateDots(); if (Date.now() >= pinLockedUntil) set('pin-error', ''); }, 1200);
    }
  }
}
function unlockApp() {
  $('pin-screen').classList.add('hidden');
  $('landing-page').style.display = 'none';
  // If we came from Google auth flow
  if (window._pendingUser) {
    showAppAfterAuth(window._pendingUser);
    return;
  }
  // Show app elements + clear ALL inline display:none
  const h = document.querySelector('.header');
  const n = document.querySelector('.nav-tabs');
  const f = document.querySelector('.footer');
  if (h) h.style.display = '';
  if (n) n.style.display = '';
  if (f) f.style.display = '';
  // Clear display:none from all tab panels
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.style.display = '';
    p.classList.remove('active');
  });
  const d = $('tab-dashboard');
  if (d) d.classList.add('active');
  loadData();
  $('currencySelect').value = currency;
  setLang(lang);
  renderAll();
  buildMonthlyTable();
  syncCur();
}
function pinForgot() {
  if (!confirm(T().pin_forgot_confirm || 'Supprimer uniquement le PIN ?')) return;
  localStorage.removeItem(PIN_KEY);
  localStorage.removeItem(PINON_KEY);
  pinEnabled = false; pinFailedAttempts = 0; pinLockedUntil = 0;
  pinBuffer = ''; pinTemp = ''; pinMode = 'setup1';
  $('pin-screen').classList.add('hidden');
  unlockApp();
  showToast(T().toast_pin_off);
}
function togglePIN() {
  pinEnabled = !pinEnabled;
  localStorage.setItem(PINON_KEY, pinEnabled ? '1' : '0');
  if (!pinEnabled) {
    // Remove PIN completely
    localStorage.removeItem(PIN_KEY);
    $('pin-toggle').classList.remove('on');
    showToast(T().toast_pin_off);
  } else {
    // Ask user to set a new PIN
    $('pin-toggle').classList.add('on');
    closeModal('backupModal');
    pinBuffer = ''; pinTemp = ''; pinMode = 'setup1';
    updateDots();
    set('pin-sub', T().pin_create);
    set('pin-note', T().pin_note || '');
    $('pin-forgot').style.display = 'none';
    set('pin-error', '');
    $('pin-screen').classList.remove('hidden');
    showToast(T().toast_pin_on);
  }
}
function startChangePIN() { closeModal('backupModal'); pinBuffer = ''; pinTemp = ''; pinMode = 'setup1'; updateDots(); set('pin-sub', T().pin_create); set('pin-note', T().pin_note); $('pin-forgot').style.display = 'none'; set('pin-error', ''); $('pin-screen').classList.remove('hidden'); }
function updateBackupUI() {
  $('pin-toggle').classList.toggle('on', pinEnabled);
  const t = localStorage.getItem('sf_last_save');
  set('last-backup-info', t ? T().last_save + ': ' + t : '');
  renderSnapshotList();
}

// ══════════════════════════════════════════════
// RENDER — THE CORE FIX
// Each section rebuilds from allData with class="data-row"
// addRow saves DOM→data FIRST, then pushes new item, then re-renders
// ══════════════════════════════════════════════
function renderSection(sec) {
  const data = (allData[ck()] || {})[sec] || [];
  const tb = $(sec + '-body');
  if (!tb) return;
  tb.innerHTML = '';
  const isRTL = T().dir === 'rtl';
  const closed = isMonthClosed();
  data.forEach((item, idx) => {
    const tr = document.createElement('tr');
    const _over = (item.act || 0) > (item.pln || 0) && (item.pln || 0) > 0;
    const _under = (item.act || 0) <= (item.pln || 0) && (item.pln || 0) > 0 && (item.act || 0) > 0;
    const _progress = (item.pln || 0) > 0 ? Math.min(100, Math.round(Number(item.act || 0) / Number(item.pln || 1) * 100)) : 0;
    const _detail = ['savings', 'debts'].includes(sec)
      ? `<button class="row-detail-btn" onclick="openRowDetails('${sec}',${idx})" title="${T().details || 'Détails'}">⚙️</button><span class="goal-progress">${_progress}%${item.meta && item.meta.dueDate ? ' • ' + item.meta.dueDate : ''}</span>`
      : '';
    tr.className = 'data-row' + (_over ? ' row-over' : _under ? ' row-ok' : '');
    const lv = trLbl(item.label || '').replace(/"/g, '&quot;');
    tr.innerHTML = `
      <td class="lc"><input type="text" value="${lv}" placeholder="..." style="text-align:${isRTL ? 'right' : 'left'}" ${closed ? 'disabled' : ''} oninput="onInput('${sec}',${idx},'label',this.value)"></td>
      <td class="ac"><input type="number" value="${item.act || 0}" min="0" placeholder="0" title="${T().col_act || 'الفعلي'}" ${closed ? 'disabled' : ''} oninput="onInput('${sec}',${idx},'act',this.value)"></td>
      <td class="pc"><input type="number" value="${item.pln || 0}" min="0" placeholder="0" title="${T().col_pln || 'المخطط'}" ${closed ? 'disabled' : ''} oninput="onInput('${sec}',${idx},'pln',this.value)">
        <button onclick="deleteRow('${sec}',${idx})" style="display:${closed ? 'none' : 'inline'};background:none;border:none;color:#ddd;cursor:pointer;font-size:11px;vertical-align:middle;margin-right:2px;">✕</button>
        ${_detail}
      </td>`;
    tb.appendChild(tr);
  });
  // Also render notes contribution rows in expenses
  if (sec === 'expenses') { renderExpensesCats(); }
}

function onInput(sec, idx, field, val) {
  if (!ensureMonthEditable()) return;
  const mk = ck();
  if (!allData[mk] || !allData[mk][sec] || !allData[mk][sec][idx]) return;
  allData[mk][sec][idx][field] = (field === 'label') ? val : (Number(val) || 0);
  persistData();
  recalc();
  // Met à jour la classe over/ok sur la ligne sans re-render tout le tableau
  const tbody = document.getElementById(sec + '-body');
  if (tbody) {
    const rows = tbody.querySelectorAll('tr.data-row');
    if (rows[idx]) {
      const item = allData[mk][sec][idx];
      const _over = (item.act || 0) > (item.pln || 0) && (item.pln || 0) > 0;
      const _under = (item.act || 0) <= (item.pln || 0) && (item.pln || 0) > 0 && (item.act || 0) > 0;
      rows[idx].className = 'data-row' + (_over ? ' row-over' : _under ? ' row-ok' : '');
      const progress = rows[idx].querySelector('.goal-progress');
      if (progress) {
        const pct = Number(item.pln || 0) > 0 ? Math.min(100, Math.round(Number(item.act || 0) / Number(item.pln || 1) * 100)) : 0;
        progress.textContent = pct + '%' + (item.meta && item.meta.dueDate ? ' • ' + item.meta.dueDate : '');
      }
    }
  }
}

function deleteRow(sec, idx) {
  if (!ensureMonthEditable()) return;
  const mk = ck();
  if (!allData[mk] || !allData[mk][sec]) return;
  allData[mk][sec].splice(idx, 1);
  renderSection(sec);
  recalc();
  persistData();
}

// ══════════════════════════════════════════════
// NOTES → EXPENSES SYNC (per category)
// catIdx: 0=مواد غذائية, 1=السوق, 2=قهوة/تدخين, 3=النقل→Gasoil, 4=أخرى
// expLabel matches expenses table labels
// ══════════════════════════════════════════════
// Get ALL notes from ALL allData months
function getAllNotes() {
  var all = [];
  Object.keys(allData).forEach(function (mk2) {
    ((allData[mk2] || {}).notes || []).forEach(function (n) {
      all.push(n);
    });
  });
  return all;
}

// Get notes for CURRENT display month only (by note.date field)
function getCurrentMonthNotes() {
  var ym = curYear + '-' + String(curMonth + 1).padStart(2, '0');
  return getAllNotes().filter(function (n) {
    return n.date && n.date.startsWith(ym);
  });
}

function getNotesTotalsByExpLabel() {
  // Use getCurrentMonthNotes to get notes matching displayed month
  var notes = getCurrentMonthNotes();
  var totals = {};
  notes.forEach(function (n) {
    migrateNote(n);
    var sub = n.subCat || getNoteCat(n);
    var expLbl = catToExpLabel(sub);
    totals[expLbl] = (totals[expLbl] || 0) + Number(n.amount || 0);
  });
  return totals;
}

// ══════════════════════════════════════════════════════════════
// EXPENSES AUTO — affiche les 9 catégories avec totaux des notes
// ══════════════════════════════════════════════════════════════
function renderExpensesCats() {
  const tb = document.getElementById('expenses-body');
  if (!tb) return;
  tb.innerHTML = '';

  const mk = ck();
  const notes = getCurrentMonthNotes();
  const cats = getMainCats();

  // Totaux par catégorie depuis les notes
  const catTotals = {};
  notes.forEach(function (n) {
    const id = n.mainCat || 'daily';
    catTotals[id] = (catTotals[id] || 0) + Number(n.amount || 0);
  });

  // Budget pln stocké dans allData[mk].expCatPln  (nouveau champ)
  if (!allData[mk]) allData[mk] = defMonth();
  if (!allData[mk].expCatPln) allData[mk].expCatPln = {};
  const plnMap = allData[mk].expCatPln;

  let grandAct = 0, grandPln = 0;

  cats.forEach(function (cat) {
    const act = catTotals[cat.id] || 0;
    const pln = plnMap[cat.id] || 0;
    grandAct += act; grandPln += pln;

    const tr = document.createElement('tr');
    const overClass = act > pln && pln > 0 ? ' cat-over' : act > 0 && pln > 0 && act <= pln ? ' cat-ok' : '';
    tr.className = 'cat-row' + overClass;

    const tdL = document.createElement('td');
    tdL.className = 'lc';
    tdL.innerHTML = '<span style="font-size:14px;">' + cat.icon + '</span><span>' + cat.label + '</span>';

    const tdA = document.createElement('td');
    tdA.className = 'ac' + (act === 0 ? ' zero' : '');
    tdA.textContent = act > 0 ? fmt(act) : '—';
    tdA.title = act > 0 ? (fmt(act) + ' ' + currency + ' من دفتر الملاحظات') : 'لا يوجد إدخال هذا الشهر';

    const tdP = document.createElement('td');
    tdP.className = 'pc';
    const inp = document.createElement('input');
    inp.type = 'number'; inp.min = '0'; inp.value = pln || ''; inp.placeholder = '0';
    inp.disabled = isMonthClosed();
    inp.title = 'المخطط لـ ' + cat.label;
    inp.dataset.catId = cat.id;
    inp.oninput = function () {
      if (!ensureMonthEditable()) return;
      const mk2 = ck();
      if (!allData[mk2].expCatPln) allData[mk2].expCatPln = {};
      allData[mk2].expCatPln[cat.id] = Number(this.value) || 0;
      persistData();
      // Refresh class on row
      const newAct = catTotals[cat.id] || 0;
      const newPln = Number(this.value) || 0;
      const newOver = newAct > newPln && newPln > 0;
      const newOk = newAct > 0 && newPln > 0 && newAct <= newPln;
      tr.className = 'cat-row' + (newOver ? ' cat-over' : newOk ? ' cat-ok' : '');
      recalc();
    };
    tdP.appendChild(inp);

    tr.appendChild(tdL); tr.appendChild(tdA); tr.appendChild(tdP);
    tb.appendChild(tr);
  });
}

function renderAll() {
  ['bills', 'savings', 'debts', 'income'].forEach(renderSection);
  renderExpensesCats();
  updateMonthLabel();
  recalc();
  renderCalendar();
  
  // Synchronize local month filters for sub-modules
  if (typeof initNotesMonthFilter === 'function') initNotesMonthFilter();
  const statsSel = document.getElementById('stats-month-filter');
  if (statsSel) statsSel.value = ck();

  // Refresh currently active tab
  var notesTab = document.getElementById('tab-notes');
  if (notesTab && notesTab.classList.contains('active')) renderNotesTab();
  var weeklyTab = document.getElementById('tab-weekly');
  if (weeklyTab && weeklyTab.classList.contains('active')) renderWeeklyTab();
}

// ══════════════════════════════════════════════
// ADD ROW — saves DOM first, then appends
// ══════════════════════════════════════════════
function addRow(sec) {
  if (!ensureMonthEditable()) return;
  const mk = ck();
  if (!allData[mk]) allData[mk] = defMonth();
  // Save current DOM state first (preserve existing rows)
  syncDOMtoData();
  // Push new empty row
  allData[mk][sec].push({ label: '', act: 0, pln: 0 });
  // Re-render
  renderSection(sec);
  recalc();
  persistData();
  // Focus new row label input
  const rows = document.querySelectorAll(`#${sec}-body tr.data-row`);
  if (rows.length > 0) {
    const last = rows[rows.length - 1];
    const inp = last.querySelector('input[type=text]');
    if (inp) setTimeout(() => inp.focus(), 50);
  }
  showToast(T().toast_add);
}

let _rowDetailSection = null;
let _rowDetailIndex = null;

function openRowDetails(section, index) {
  if (!['savings', 'debts'].includes(section)) return;
  const row = ((allData[ck()] || {})[section] || [])[index]; if (!row) return;
  _rowDetailSection = section; _rowDetailIndex = index;
  const meta = row.meta || {};
  const isDebt = section === 'debts', t = T();
  set('row-detail-title', (t.details || 'Détails') + ' — ' + (row.label || ''));
  set('row-detail-date-label', t.deadline || 'Échéance');
  set('row-detail-interest-label', t.interest_rate || "Taux d'intérêt (%)");
  set('row-detail-monthly-label', t.monthly_payment || 'Mensualité');
  set('row-detail-cancel', t.cancel || 'Annuler');
  set('row-detail-save', '💾 ' + (t.save || 'Enregistrer'));
  $('row-detail-date').value = meta.dueDate || '';
  $('row-detail-interest').value = meta.interest || '';
  $('row-detail-monthly').value = meta.monthlyPayment || '';
  $('row-detail-interest-wrap').style.display = isDebt ? '' : 'none';
  $('row-detail-monthly-wrap').style.display = isDebt ? '' : 'none';
  const remaining = Math.max(0, Number(row.pln || 0) - Number(row.act || 0));
  const progress = Number(row.pln || 0) > 0 ? Math.min(100, Math.round(Number(row.act || 0) / Number(row.pln || 1) * 100)) : 0;
  set('row-detail-summary', `${t.remaining_amount || 'Montant restant'}: ${fmt(remaining)} ${currency} • ${t.progress || 'Progression'}: ${progress}%`);
  openModal('rowDetailModal');
}

function saveRowDetails() {
  if (!ensureMonthEditable()) return;
  const rows = ((allData[ck()] || {})[_rowDetailSection] || []);
  const row = rows[_rowDetailIndex]; if (!row) return;
  const interest = Math.max(0, Math.min(100, Number($('row-detail-interest').value) || 0));
  const monthlyPayment = Math.max(0, Number($('row-detail-monthly').value) || 0);
  row.meta = {
    dueDate: $('row-detail-date').value || '',
    interest: _rowDetailSection === 'debts' ? interest : 0,
    monthlyPayment: _rowDetailSection === 'debts' ? monthlyPayment : 0
  };
  persistData(); renderSection(_rowDetailSection); closeModal('rowDetailModal');
  showToast(T().saved || '✓');
}

// ══════════════════════════════════════════════
// RECALC
// ══════════════════════════════════════════════
function sumFromData(sec) {
  const data = (allData[ck()] || {})[sec] || [];
  return data.reduce((s, r) => ({ act: s.act + Number(r.act || 0), pln: s.pln + Number(r.pln || 0) }), { act: 0, pln: 0 });
}

// Sum expenses — act from notes by category, pln from expCatPln
function sumExpensesWithNotes() {
  const mk = ck();
  const notes = getCurrentMonthNotes();
  let act = 0;
  notes.forEach(function (n) { act += Number(n.amount || 0); });
  const plnMap = (allData[mk] || {}).expCatPln || {};
  let pln = 0;
  Object.values(plnMap).forEach(function (v) { pln += Number(v || 0); });
  return { act, pln };
}

function recalc() {
  const t = T();
  const inc = sumFromData('income');
  const bill = sumFromData('bills');
  const exp = sumExpensesWithNotes();
  const sav = sumFromData('savings');
  const dbt = sumFromData('debts');
  const rem = inc.act - bill.act - exp.act - sav.act - dbt.act;
  const base = inc.act || 1;
  const pct = v => Math.max(0, Math.min(100, Math.round(Math.abs(v) / base * 100)));

  set('v-income', fmt(inc.act)); set('v-bills', fmt(bill.act)); set('v-expenses', fmt(exp.act));
  set('v-savings', fmt(sav.act)); set('v-debts', fmt(dbt.act)); set('v-remaining', fmt(rem));
  [{ k: 'bills', v: bill.act }, { k: 'expenses', v: exp.act }, { k: 'savings', v: sav.act }, { k: 'debts', v: dbt.act }, { k: 'remaining', v: rem }].forEach(x => {
    const b = $('bar-' + x.k); if (b) b.style.width = pct(x.v) + '%';
    set('p-' + x.k, pct(x.v) + '%');
  });
  set('p-income', '100%');

  // Emergency Fund Card Update
  const emAct = getEmergencyFundTotal();
  const emTarget = getEmergencyFundTarget();
  const emPct = emTarget > 0 ? Math.min(100, Math.round(emAct / emTarget * 100)) : 0;
  set('v-emergency', fmt(emAct));
  const emBar = $('bar-emergency');
  if (emBar) emBar.style.width = emPct + '%';
  set('p-emergency', `${emPct}% (${t.from_of || 'من أصل'} ${fmt(emTarget)} ${currency})`);

  // Active Warnings check
  if (typeof checkBudgetAlerts === 'function') checkBudgetAlerts();

  set('th-income', fmt(inc.act)); set('th-bills', fmt(bill.act)); set('th-expenses', fmt(exp.act));
  set('th-savings', fmt(sav.act)); set('th-debts', fmt(dbt.act));
  set('hero-val', fmt(rem));
  set('t-hero-main-title', t.hero_title || (lang === 'fr' ? '💓 Aperçu global' : '💓 الوضع الإجمالي'));
  set('hero-cur-lbl', t.rem_lbl || (lang === 'fr' ? 'Solde disponible' : 'درهم متبقية'));
  set('t-rh-vs', t.vs_previous_short || (lang === 'fr' ? 'Par rapport au mois précédent :' : 'مقارنة بالشهر السابق:'));
  set('t-rh-daily', t.daily_avg_short || (lang === 'fr' ? 'Moyenne quotidienne :' : 'معدل الصرف اليومي:'));
  set('t-rh-tip-title', t.tip_title || (lang === 'fr' ? '💡 Conseil :' : '💡 نصيحة:'));
  const hs = $('hero-status');
  if (hs) {
    hs.textContent = rem > 0 ? (t.hero_ok || 'الوضع كاين 💚') : rem === 0 ? (t.hero_zero || 'متوازن ⚖️') : (t.hero_neg || 'تجاوز الميزانية 🚨');
    hs.className = 'rh-badge ' + (rem > 0 ? '' : rem === 0 ? 'zero' : 'neg');
  }
  const hsub = $('hero-sub');
  if (hsub) {
    hsub.innerHTML = `${t.from_of || 'من أصل'} <strong>${fmt(inc.act)} ${currency}</strong> ${t.inc_sub || 'مدخول'}`;
  }
  updateAdvancedMetrics({ inc, bill, exp, sav, dbt, rem });
  if (chartDonut) {
    chartDonut.data.datasets[0].data = [bill.act, exp.act, sav.act, dbt.act];
    chartDonut.update('none');
    const dl = $('donutLegend');
    if (dl) {
      const cols = ['#6366f1', '#f97316', '#06b6d4', '#f43f5e'];
      const lbls = [t.k_bills || 'الفواتير', t.k_expenses || 'المصاريف', t.k_savings || 'التوفير', t.k_debts || 'الديون'];
      const vals = [bill.act, exp.act, sav.act, dbt.act];
      let html = '';
      for (let i = 0; i < 4; i++) {
        html += `<div class="dcl-item">
          <div class="dcl-val">${fmt(vals[i])} ${currency}</div>
          <div class="dcl-label-group">
            <span>${lbls[i]}</span>
            <span class="dcl-dot" style="background:${cols[i]}"></span>
          </div>
        </div>`;
      }
      dl.innerHTML = html;
    }
  }
  if (chartBar) {
    chartBar.data.labels = [t.k_bills || 'الفواتير', t.k_expenses || 'المصاريف', t.k_savings || 'التوفير', t.k_debts || 'الديون'];
    chartBar.data.datasets[0].data = [bill.pln, exp.pln, sav.pln, dbt.pln];
    chartBar.data.datasets[1].data = [bill.act, exp.act, sav.act, dbt.act];
    chartBar.update('none');
  }
  if (chartHero) { chartHero.data.datasets[0].data = [rem > 0 ? rem : 0, bill.act + exp.act + sav.act + dbt.act]; chartHero.update('none'); }
  // Refresh weekly tab if visible
  const wPanel = document.getElementById('tab-weekly');
  if (wPanel && wPanel.classList.contains('active')) renderWeeklyTab();
  if (typeof checkDailyReminder === 'function') checkDailyReminder();
  // Refresh expenses cats display (act comes from notes)
  if (typeof renderExpensesCats === 'function') renderExpensesCats();
}

// ══════════════════════════════════════════════
// MONTH NAV
// ══════════════════════════════════════════════
function isMonthClosed(mk = ck()) {
  return !!(allData[mk] && allData[mk]._closed);
}

function updateAdvancedMetrics(values) {
  const t = T(), today = new Date();
  const daysInMonth = new Date(curYear, curMonth + 1, 0).getDate();
  const shownIndex = curYear * 12 + curMonth, currentIndex = today.getFullYear() * 12 + today.getMonth();
  const elapsed = shownIndex < currentIndex ? daysInMonth : shownIndex > currentIndex ? 1 : Math.max(1, today.getDate());
  const remainingDays = shownIndex < currentIndex ? 0 : shownIndex > currentIndex ? daysInMonth : Math.max(1, daysInMonth - today.getDate() + 1);
  const outflow = values.bill.act + values.exp.act + values.dbt.act;
  const dailyAverage = outflow / elapsed;
  const dailyBudget = remainingDays > 0 ? Math.max(0, values.rem) / remainingDays : 0;
  const projection = shownIndex === currentIndex ? dailyAverage * daysInMonth : outflow;
  const savingsRate = values.inc.act > 0 ? Math.round(values.sav.act / values.inc.act * 100) : 0;

  const heroDaily = $('hero-daily-val');
  if (heroDaily) heroDaily.textContent = `${fmt(Math.round(dailyAverage))} ${currency}/${t.per_day || 'يوم'}`;

  const heroTip = $('hero-tip-txt');
  if (heroTip) {
    if (values.rem > 0) {
      heroTip.textContent = t.tip_save_first || 'حافظ على التوفير أول الشهر!';
    } else {
      heroTip.textContent = t.tip_cut_extras || 'قلّص المصاريف الكمالية لتوازن الميزانية!';
    }
  }

  set('am-daily', fmt(Math.round(dailyAverage)) + ' ' + currency);
  set('am-daily-sub', elapsed + ' ' + (t.days_elapsed || 'jours pris en compte'));
  set('am-budget', fmt(Math.round(dailyBudget)) + ' ' + currency);
  set('am-budget-sub', remainingDays + ' ' + (t.days_remaining || 'jours restants'));
  set('am-projection', fmt(Math.round(projection)) + ' ' + currency);
  set('am-projection-sub', projection > values.inc.act && values.inc.act > 0 ? '⚠️ ' + (t.hero_neg || 'Budget dépassé') : '✓');
  set('am-savings', savingsRate + '%');
  set('am-savings-sub', fmt(values.sav.act) + ' ' + currency);
  const totals = {};
  getCurrentMonthNotes().forEach(note => { totals[note.mainCat || 'daily'] = (totals[note.mainCat || 'daily'] || 0) + Number(note.amount || 0); });
  const topId = Object.keys(totals).sort((a, b) => totals[b] - totals[a])[0];
  const topCat = topId ? getMainCats().find(cat => cat.id === topId) : null;
  set('am-top', topCat ? (topCat.icon + ' ' + topCat.label) : '—');
  set('am-top-sub', topId ? fmt(totals[topId]) + ' ' + currency : '');
}

function ensureMonthEditable(mk = ck()) {
  if (!isMonthClosed(mk)) return true;
  showToast('🔒 ' + (T().month_closed || 'Ce mois est clôturé'));
  return false;
}

function getMonthBalanceByKey(mk) {
  const d = allData[mk]; if (!d) return 0;
  const sum = section => (d[section] || []).reduce((total, row) => total + Number(row.act || 0), 0);
  let notes = 0;
  Object.keys(allData).forEach(key => {
    ((allData[key] || {}).notes || []).forEach(note => {
      if (note.date && note.date.startsWith(mk)) notes += Number(note.amount || 0);
    });
  });
  return sum('income') - sum('bills') - notes - sum('savings') - sum('debts');
}

function previousMonthKey() {
  let month = curMonth - 1, year = curYear;
  if (month < 0) { month = 11; year--; }
  return mkey(year, month);
}

function toggleMonthClosed() {
  const mk = ck(); if (!allData[mk]) allData[mk] = defMonth();
  createLocalSnapshot(allData[mk]._closed ? 'before_reopen_month' : 'before_close_month');
  allData[mk]._closed = !allData[mk]._closed;
  persistData(); renderAll();
  showToast(allData[mk]._closed ? '🔒 ' + (T().month_closed || 'Mois clôturé') : '🔓 ' + (T().month_reopen || 'Mois rouvert'));
}

function updateMonthLabel() {
  const t = T(), lbl = `${t.months[curMonth]} ${curYear}`;
  set('monthLabel', lbl); set('notes-month-lbl', lbl); set('monthly-yr-lbl', `${curYear}`);
  const lock = $('month-lock-btn');
  if (lock) {
    lock.textContent = isMonthClosed() ? '🔒' : '🔓';
    lock.title = isMonthClosed() ? (t.month_reopen || 'Rouvrir le mois') : (t.month_close || 'Clôturer le mois');
  }
  const previousKey = previousMonthKey();
  const diffEl = $('hero-diff');
  if (diffEl) {
    if (allData[previousKey]) {
      const diff = getMonthBalanceByKey(ck()) - getMonthBalanceByKey(previousKey);
      diffEl.textContent = `${diff >= 0 ? '↗ +' : '↘ '}${fmt(diff)} ${currency}`;
      diffEl.className = 'rh-metric-val ' + (diff >= 0 ? 'green' : 'red');
    } else {
      diffEl.textContent = '—';
      diffEl.className = 'rh-metric-val';
    }
  }
}
function navigateMonth(dir) {
  // Persist current state before switching (no DOM read needed)
  if (!_isLoadingFromCloud && _authReady) persistData();
  curMonth += dir;
  if (curMonth > 11) { curMonth = 0; curYear++; }
  if (curMonth < 0) { curMonth = 11; curYear--; }
  const mk = ck();
  if (!monthHasRealData(mk)) { allData[mk] = defMonth(); }
  if (!allData[mk].notes) allData[mk].notes = [];
  updateMonthLabel(); renderAll(); buildMonthlyTable();
  showToast(T().months[curMonth] + ' ' + curYear);
}
function renderPicker() {
  pickerYear = curYear; set('pickerYear', pickerYear);
  const g = $('monthsGrid'); g.innerHTML = '';
  T().months.forEach((m, i) => {
    const mk = mkey(pickerYear, i);
    const hd = allData[mk] && allData[mk].income && allData[mk].income.some(r => r.act > 0 || r.pln > 0);
    const b = document.createElement('button');
    b.className = `month-btn${pickerYear === curYear && i === curMonth ? ' active' : ''}${hd ? ' has-data' : ''}`;
    b.textContent = m;
    b.onclick = () => {
      saveData(); curYear = pickerYear; curMonth = i;
      const mk2 = ck();
      if (!monthHasRealData(mk2)) { allData[mk2] = defMonth(); }
      if (!allData[mk2].notes) allData[mk2].notes = [];
      closeModal('monthModal'); updateMonthLabel(); renderAll(); buildMonthlyTable();
      showToast(m + ' ' + pickerYear);
    };
    g.appendChild(b);
  });
}
function chgPY(d) { pickerYear += d; set('pickerYear', pickerYear); renderPicker(); }

// ══════════════════════════════════════════════
// NEW MONTH
// ══════════════════════════════════════════════
function selNM(o) { nmOpt = o;['copy', 'blank', 'same'].forEach(x => $('nm-' + x).classList.toggle('selected', x === o)); }
function confirmNewMonth() {
  saveData();
  createLocalSnapshot('before_new_month');
  let nm = curMonth + 1, ny = curYear;
  if (nm > 11) { nm = 0; ny++; }
  const nk = mkey(ny, nm), prev = allData[ck()];
  if (monthHasRealData(nk) && !confirm(T().month_exists || 'Le mois suivant contient déjà des données. Les remplacer ?')) return;
  const carryBalance = $('nm-carry') && $('nm-carry').checked ? getMonthBalanceByKey(ck()) : 0;
  if (nmOpt === 'blank' || !prev) { allData[nk] = defMonth(); }
  else if (nmOpt === 'copy') {
    const c = JSON.parse(JSON.stringify(prev));
    ['bills', 'expenses', 'savings', 'debts', 'income'].forEach(s => { c[s] = (c[s] || []).map(x => ({ label: x.label, act: 0, pln: x.pln })); });
    c.notes = []; allData[nk] = c;
  } else { allData[nk] = JSON.parse(JSON.stringify(prev)); allData[nk].notes = []; }
  allData[nk]._closed = false;
  if (carryBalance > 0) allData[nk].income.push({ label: T().dir === 'rtl' ? 'رصيد مرحل' : 'Solde reporté', act: carryBalance, pln: 0 });
  if (carryBalance < 0) allData[nk].debts.push({ label: T().dir === 'rtl' ? 'عجز مرحل' : 'Déficit reporté', act: Math.abs(carryBalance), pln: 0 });
  curMonth = nm; curYear = ny;
  closeModal('newMonthModal'); updateMonthLabel(); renderAll(); buildMonthlyTable();
  showToast('✦ ' + T().months[nm] + ' ' + ny + ' 🎉');
}

// ══════════════════════════════════════════════
// NOTES
// ══════════════════════════════════════════════
// ══════════════════════════════════════════════
// NOTES CATEGORY HELPERS
// ══════════════════════════════════════════════

// Migrate old note to new {mainCat, subCat} structure
function migrateNote(n) {
  if (n.mainCat) return n; // already new format
  // Try to find subCat in hierarchy
  const cats = getMainCats();
  const oldCat = n.cat || (n.catIdx !== undefined ? LANGS[lang].cats[n.catIdx] || '' : '');
  for (const mc of cats) {
    if (mc.subs.includes(oldCat)) {
      n.mainCat = mc.id; n.subCat = oldCat; return n;
    }
  }
  // Default mapping from old cats
  const defaultMap = {
    // 🛒 المعيشة اليومية
    'مواد غذائية': 'daily', 'السوق': 'daily', 'خضر وفواكه': 'daily', 'الخضرة والفاكهة': 'daily',
    'لحوم وأسماك': 'daily', 'لحم وحوت': 'daily', 'خبز وفطور': 'daily', 'الخبز والفطور': 'daily',
    'حليب وألبان': 'daily', 'الحليب والبان': 'daily', 'بيض': 'daily', 'البيضة': 'daily',
    'بقالة/إبيسري': 'daily', 'أرز وكسكس': 'daily', 'الروز/الكسكس': 'daily',
    'معكرونة': 'daily', 'المقرونية': 'daily', 'طون/مصبرات': 'daily', 'الطون/المصبرات': 'daily',
    'قطاني': 'daily', 'القطاني': 'daily', 'مطعم': 'daily', 'ريستو': 'daily',
    'عصير طري': 'daily', 'زيت وتوابل': 'daily', 'الزيت والتوابل': 'daily',
    'غذاء': 'daily', 'تسوق': 'daily', 'Food': 'daily', 'Market': 'daily',
    'Groceries': 'daily', 'Légumes/Fruits': 'daily', 'Verduras/Frutas': 'daily',
    'Alimentation': 'daily', 'Marché': 'daily', 'Alimentación': 'daily', 'Mercado': 'daily',
    'Vegetables/Fruits': 'daily', 'Meat/Fish': 'daily', 'Bread/Pastries': 'daily',
    'Milk/Dairy': 'daily', 'Eggs': 'daily', 'Rice/Couscous': 'daily', 'Pasta': 'daily',
    'Tuna/Canned': 'daily', 'Legumes': 'daily', 'Fresh juice': 'daily',
    // 🏠 منزل / نظافة
    'مسحوق غسيل': 'fixed', 'تيد/مسحوق غسيل': 'fixed', 'جافيل/مبيض': 'fixed', 'جافيل': 'fixed',
    'سائل الأواني': 'fixed', 'سائل الطاسة': 'fixed', 'منظف أرضيات': 'fixed', 'سانيكروا': 'fixed',
    'معطر جو': 'fixed', 'معطر الجو': 'fixed', 'ورق حمام': 'fixed', 'بابيي توالات': 'fixed',
    'ورق مطبخ': 'fixed', 'بابيي كوزين': 'fixed', 'أكياس زبل': 'fixed', 'ميكات د الزبل': 'fixed',
    'ألومينيوم': 'fixed', 'بوطة/غاز': 'fixed', 'البوطة/غاز': 'fixed', 'غاز/بوطة': 'fixed',
    'Lessive/Tide': 'fixed', 'Javel': 'fixed', 'Liquide vaisselle': 'fixed', 'Désinfectant': 'fixed',
    'Papier toilette': 'fixed', 'Essuie-tout': 'fixed', 'Sacs poubelle': 'fixed',
    // 🏥 صحة وعناية
    'دواء': 'health', 'طبيب/عيادة': 'health', 'صيدلية': 'health', 'دوليبران/مسكن': 'health',
    'دوليبران': 'health', 'فيتامينات': 'health', 'سيروم/قطن': 'health', 'ضمادات/بلاصط': 'health',
    'بلاصط': 'health', 'حفاضات/كوش': 'health', 'كوش/حفاضات': 'health', 'حليب رضع': 'health',
    'لانجيت': 'health', 'سيريلاك': 'health', 'شامبو': 'health', 'شامبوان': 'health',
    'صابون': 'health', 'معجون أسنان': 'health', 'سينيال': 'health', 'مضاد عرق': 'health',
    'ديدوران': 'health', 'جيل حلاقة': 'health', 'شفرات': 'health', 'شفرات حلاقة': 'health',
    'كوتون تيج': 'health', 'Doliprane': 'health', 'Vitamines': 'health', 'Diapers': 'health',
    'Baby milk': 'health', 'Baby wipes': 'health', 'Shampoo': 'health', 'Soap': 'health',
    'Toothpaste': 'health', 'Deodorant': 'health', 'Dentifrice': 'health', 'Shampoing': 'health',
    // ☕ قهوة وتدخين وفطور
    'قهوة': 'cafe_smoke', 'قهوة كحلة': 'cafe_smoke', 'كابوتشينو': 'cafe_smoke',
    'نسكافي': 'cafe_smoke', 'أتاي': 'cafe_smoke', 'شاي': 'cafe_smoke',
    'كرواصة': 'cafe_smoke', 'مسمن': 'cafe_smoke', 'بغرير': 'cafe_smoke',
    'فطور كومبلي': 'cafe_smoke', 'سيجارة': 'cafe_smoke', 'علبة تبغ': 'cafe_smoke',
    'ولاعة': 'cafe_smoke', 'شيشة': 'cafe_smoke', 'تفكيكة': 'cafe_smoke', 'تبغ': 'cafe_smoke',
    'Croissant': 'cafe_smoke', 'Cappuccino': 'cafe_smoke', 'Café noir': 'cafe_smoke',
    'Cigarettes': 'cafe_smoke', 'Tobacco': 'cafe_smoke', 'Hookah': 'cafe_smoke',
    'Lighter': 'cafe_smoke', 'Briquet': 'cafe_smoke',
    // 🚗 نقل
    'Gasoil': 'transport', 'النقل': 'transport', 'نقل عام': 'transport',
    'Transport': 'transport', 'Transport public': 'transport',
  };
  const mappedId = defaultMap[oldCat] || 'daily';
  const mc = cats.find(c => c.id === mappedId);
  n.mainCat = mappedId;
  n.subCat = oldCat || mc?.subs[0] || '';
  return n;
}

function getNoteMainLabel(n) {
  return getMainLabel(n.mainCat || 'daily');
}
function getNoteSubLabel(n) {
  return n.subCat || '';
}

// expLabel for expense matching: use subCat
function catToExpLabel(catStr) {
  // Transport → Gasoil special case
  if (catStr === 'النقل' || catStr === 'Transport' || catStr === 'Transporte' || catStr === 'نقل عام' || catStr === 'Gasoil') return 'Gasoil';
  return catStr;
}
function getNoteCat(n) {
  if (n.subCat) return n.subCat;
  if (n.cat && typeof n.cat === 'string' && n.cat.trim()) return n.cat.trim();
  const ci = n.catIdx !== undefined ? n.catIdx : 4;
  return (LANGS[lang]?.cats || [])[ci] || 'أخرى';
}

function renderNotes() {
  const t = T(), notes = (allData[ck()] || {}).notes || [];
  const tb = $('notes-body'); if (!tb) return; tb.innerHTML = '';
  document.querySelectorAll('.note-card').forEach(c => c.remove());
  const notesContainer = $('notes-cards-container');
  const mainCats = getMainCats();

  notes.forEach((n, i) => {
    // Migrate old format
    migrateNote(n);
    const mainId = n.mainCat || 'daily';
    const subVal = n.subCat || '';
    const subs = getSubCats(mainId);

    // Build main cat select
    const mainOpts = mainCats.map(mc => `<option value="${mc.id}"${mc.id === mainId ? ' selected' : ''}>${mc.icon} ${mc.label}</option>`).join('');
    // Build sub cat select
    const subOpts = subs.map(s => `<option value="${s}"${s === subVal ? ' selected' : ''}>${s}</option>`).join('');

    // ── DESKTOP TABLE ROW ──
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="date" value="${n.date || ''}" style="width:108px;" onchange="noteField(${i},'date',this.value)"></td>
      <td><input type="text" value="${(n.note || '').replace(/"/g, '&quot;')}" placeholder="..." style="width:100px;" onchange="noteField(${i},'note',this.value)"></td>
      <td style="min-width:120px;">
        <select class="cat-select" style="width:100%;margin-bottom:3px;" onchange="noteMainCat(${i},this.value)">${mainOpts}</select>
      </td>
      <td style="min-width:100px;">
        <select class="cat-select" style="width:100%;" onchange="noteSubCat(${i},this.value)">${subOpts}</select>
      </td>
      <td><input type="number" value="${n.amount || 0}" style="width:65px;" onchange="noteField(${i},'amount',Number(this.value))"></td>
      <td style="color:var(--light);font-size:10px;">${currency}</td>
      <td><button onclick="delNote(${i})" style="background:none;border:none;color:#ccc;cursor:pointer;font-size:12px;">✕</button></td>`;
    tb.appendChild(tr);

    // ── MOBILE CARD ──
    if (notesContainer) {
      const card = document.createElement('div');
      card.className = 'note-card';
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
          <div>
            <div style="font-size:9px;color:var(--light);margin-bottom:2px;">${t.nt_date || 'التاريخ'}</div>
            <input type="date" value="${n.date || ''}" onchange="noteField(${i},'date',this.value)">
          </div>
          <button class="note-card-del" onclick="delNote(${i})">✕</button>
        </div>
        <div class="note-card-row">
          <span class="note-card-label">${t.nt_note || 'الملاحظة'}</span>
          <input type="text" value="${(n.note || '').replace(/"/g, '&quot;')}" placeholder="..." onchange="noteField(${i},'note',this.value)">
        </div>
        <div class="note-card-row">
          <span class="note-card-label">الفئة</span>
          <select onchange="noteMainCat(${i},this.value)" style="flex:1;">${mainOpts}</select>
        </div>
        <div class="note-card-row">
          <span class="note-card-label">${t.nt_subcat || 'الخيارات'}</span>
          <select onchange="noteSubCat(${i},this.value)" style="flex:1;">${subOpts}</select>
        </div>
        <div class="note-card-row" style="margin-bottom:0;margin-top:4px;">
          <span class="note-card-label">${t.nt_amount || 'المبلغ'}</span>
          <div style="display:flex;align-items:center;gap:8px;flex:1;">
            <input type="number" value="${n.amount || 0}" style="font-size:16px;font-weight:700;" onchange="noteField(${i},'amount',Number(this.value))">
            <span style="color:var(--light);font-size:12px;">${currency}</span>
          </div>
        </div>`;
      notesContainer.insertBefore(card, notesContainer.querySelector('.add-note-mobile'));
    }
  });
  updateNotesSummary();
  updateNotesChart();
  renderExpensesCats();
  recalc();
}

function noteField(i, f, v) {
  if (!ensureMonthEditable()) return;
  const mk = ck(); if (!allData[mk] || !allData[mk].notes || !allData[mk].notes[i]) return;
  allData[mk].notes[i][f] = v;
  if (f === 'note') {
    const text = (v || '').toLowerCase().trim();
    let matchedMain = null, matchedSub = null;
    const rules = [
      { keywords: ['سجائر', 'تبغ', 'smoke', 'cigarettes', 'cig', 'marboro', 'winston', 'casa', 'marquise', 'دخان'], main: 'cafe_smoke', sub: 'Cigarettes' },
      { keywords: ['طبيب', 'عيادة', 'سبيطار', 'clinique', 'médecin', 'doctor', 'médico'], main: 'health', sub: 'Médecin' },
      { keywords: ['دواء', 'أدوية', 'صيدلية', 'pharmacie', 'pharmacy', 'doliprane', 'fever', 'aspirin', 'سيرو'], main: 'health', sub: 'Pharmacie' },
      { keywords: ['مازوط', 'كازوال', 'مازوت', 'gasoil', 'essence', 'fuel', 'petrol', 'carburant'], main: 'transport', sub: 'Gasoil' },
      { keywords: ['قهوة', 'مقهى', 'كافي', 'café', 'coffee', 'nescafé', 'زعزع', 'zaazoua', 'سناك'], main: 'cafe_smoke', sub: 'Café noir' },
      { keywords: ['مطعم', 'ريستو', 'عشاء', 'غذاء', 'restaurant', 'resto', 'dinner', 'lunch'], main: 'daily', sub: 'Restaurant' }
    ];
    for (const rule of rules) {
      if (rule.keywords.some(kw => text.includes(kw))) {
        matchedMain = rule.main;
        const mainCatInfo = getMainCats().find(c => c.id === rule.main);
        if (mainCatInfo) {
          const translatedSub = mainCatInfo.subs.find(s => s.toLowerCase().includes(rule.sub.toLowerCase()) || rule.sub.toLowerCase().includes(s.toLowerCase()));
          matchedSub = translatedSub || mainCatInfo.subs[0];
        }
        break;
      }
    }
    if (matchedMain && matchedSub) {
      allData[mk].notes[i].mainCat = matchedMain;
      allData[mk].notes[i].subCat = matchedSub;
      renderNotes();
    }
  }
  persistData();
  if (f === 'amount' || f === 'note') { updateNotesSummary(); updateNotesChart(); renderExpensesCats(); recalc(); }
}
function noteMainCat(i, mainId) {
  if (!ensureMonthEditable()) return;
  const mk = ck(); if (!allData[mk] || !allData[mk].notes || !allData[mk].notes[i]) return;
  const subs = getSubCats(mainId);
  allData[mk].notes[i].mainCat = mainId;
  allData[mk].notes[i].subCat = subs[0] || '';
  persistData();
  renderNotes();
}
function noteSubCat(i, sub) {
  if (!ensureMonthEditable()) return;
  const mk = ck(); if (!allData[mk] || !allData[mk].notes || !allData[mk].notes[i]) return;
  allData[mk].notes[i].subCat = sub;
  persistData();
  updateNotesSummary(); updateNotesChart(); renderExpensesCats(); recalc();
}


function delNote(i) {
  if (!ensureMonthEditable()) return;
  const mk = ck(); if (!allData[mk] || !allData[mk].notes) return;
  allData[mk].notes.splice(i, 1);
  persistData();
  renderNotes();
}
function addNote() {
  if (!ensureMonthEditable()) return;
  // Save note to allData key matching current display year/month
  const mk = curYear + '-' + String(curMonth + 1).padStart(2, '0');
  if (!allData[mk]) allData[mk] = defMonth();
  if (!allData[mk].notes) allData[mk].notes = [];
  const mc = getMainCats()[0];
  allData[mk].notes.push({
    date: new Date().toISOString().slice(0, 10),
    note: '',
    mainCat: mc.id,
    subCat: mc.subs[0] || '',
    amount: 0
  });
  renderNotes(); persistData(); showToast(T().toast_add);
  // Focus last card on mobile, last row on desktop
  setTimeout(() => {
    const cards = document.querySelectorAll('.note-card');
    if (cards.length > 0 && window.innerWidth <= 700) {
      const inp = cards[cards.length - 1].querySelector('input[type=text]'); if (inp) inp.focus();
    } else {
      const rows = $('notes-body').querySelectorAll('tr');
      if (rows.length > 0) { const inp = rows[rows.length - 1].querySelector('input[type=text]'); if (inp) inp.focus(); }
    }
  }, 50);
}

function updateNotesSummary() {
  const t = T(), notes = getCurrentMonthNotes();
  const total = notes.reduce((s, n) => s + Number(n.amount || 0), 0);
  const byExpLbl = {};
  notes.forEach(n => {
    migrateNote(n);
    // Group by main category label for summary
    const mc = getMainCats().find(c => c.id === n.mainCat);
    const lbl = mc ? (mc.icon + ' ' + mc.label) : (n.subCat || getNoteCat(n));
    byExpLbl[lbl] = (byExpLbl[lbl] || 0) + Number(n.amount || 0);
  });
  const el = $('notes-summary'); if (!el) return;
  el.innerHTML = `
    <div style="margin-bottom:11px;">
      <div style="font-size:12px;color:var(--light);margin-bottom:2px;">${t.notes_sum}</div>
      <div style="font-size:22px;font-weight:800;font-family:'DM Mono',monospace;">${fmt(total)} <span style="font-size:10px;color:var(--light);">${currency}</span></div>
    </div>
    ${Object.entries(byExpLbl).map(([k, v], i) => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid var(--border);">
      <span class="cat-pill cp${Math.min(i, 4)}">${k}</span>
      <span style="font-family:'DM Mono',monospace;font-size:13px;font-weight:600;">${fmt(v)} ${currency}</span>
    </div>`).join('')}
    <div style="margin-top:9px;padding-top:7px;border-top:2px solid var(--mint);display:flex;justify-content:space-between;">
      <span style="font-size:11px;font-weight:700;color:var(--mid);">Total</span>
      <span style="font-family:'DM Mono',monospace;font-size:12px;font-weight:800;color:var(--dark);">${fmt(total)} ${currency}</span>
    </div>`;
}
function updateNotesChart() {
  const notes = getCurrentMonthNotes();
  const byLbl = {};
  notes.forEach(n => {
    migrateNote(n);
    const mc = getMainCats().find(c => c.id === n.mainCat);
    const lbl = mc ? (mc.icon + ' ' + mc.label) : (n.subCat || getNoteCat(n));
    byLbl[lbl] = (byLbl[lbl] || 0) + Number(n.amount || 0);
  });
  if (chartNotes) {
    const keys = Object.keys(byLbl), vals = Object.values(byLbl);
    if (keys.length > 0) { chartNotes.data.labels = keys; chartNotes.data.datasets[0].data = vals; chartNotes.data.datasets[0].backgroundColor = keys.map((_, i) => CAT_COLORS[i % 5]); chartNotes.update(); }
  }
}

// ══════════════════════════════════════════════
// MONTHLY TABLE
// ══════════════════════════════════════════════
function getMV(key, mi) {
  const d = allData[mkey(curYear, mi)]; if (!d || !d[key]) return 0;
  let v = d[key].reduce((s, x) => s + Number(x.act || 0), 0);
  if (key === 'expenses') {
    // Sum notes from ALL allData where note.date matches this month
    const gmvYM = mkey(curYear, mi);
    Object.keys(allData).forEach(function (mk3) {
      ((allData[mk3] || {}).notes || []).forEach(function (n) {
        if (n.date && n.date.startsWith(gmvYM)) v += Number(n.amount || 0);
      });
    });
  }
  return v;
}
function buildMonthlyHead() {
  const t = T();
  $('monthly-head').innerHTML = `<tr><th></th>${t.months.map(m => `<th>${m.slice(0, 3)}</th>`).join('')}<th>${t.monthly_total}</th></tr>`;
}
function buildMonthlyTable() {
  buildMonthlyHead();
  const t = T(), tb = $('monthly-body'); if (!tb) return; tb.innerHTML = '';
  const rows = [{ key: 'income', lbl: t.k_income, cls: 'ri' }, { key: 'bills', lbl: t.k_bills, cls: 'rb' },
  { key: 'expenses', lbl: t.k_expenses, cls: 're' }, { key: 'savings', lbl: t.k_savings, cls: 'rs' }, { key: 'debts', lbl: t.k_debts, cls: 'rd' }];
  rows.forEach(rd => {
    const tr = document.createElement('tr'); tr.className = rd.cls;
    let h = `<td class="rl">${rd.lbl}</td>`; let tot = 0;
    for (let mi = 0; mi < 12; mi++) { const v = getMV(rd.key, mi); tot += v; h += `<td style="${mi === curMonth ? 'background:var(--mint-ll);font-weight:700;' : ''}">${v ? fmt(v) : '—'}</td>`; }
    h += `<td style="font-weight:700;">${tot ? fmt(tot) : '—'}</td>`; tr.innerHTML = h; tb.appendChild(tr);
  });
  const rt = document.createElement('tr'); rt.className = 'rr';
  let rh = `<td class="rl">${t.monthly_remain}</td>`; let rs = 0;
  for (let mi = 0; mi < 12; mi++) {
    const inc = getMV('income', mi), rem = inc - getMV('bills', mi) - getMV('expenses', mi) - getMV('savings', mi) - getMV('debts', mi);
    rs += rem; rh += `<td style="${mi === curMonth ? 'background:var(--mint-ll);' : ''}font-weight:700;color:${rem < 0 ? '#E8A598' : 'var(--mint)'};">${inc ? fmt(rem) : '—'}</td>`;
  }
  rh += `<td style="font-weight:700;color:var(--mint);">${rs ? fmt(rs) : '—'}</td>`; rt.innerHTML = rh; tb.appendChild(rt);
  syncMonthlyLine();
}
function syncMonthlyLine() {
  if (!chartLine) return;
  chartLine.data.labels = T().months;
  chartLine.data.datasets[0].data = Array.from({ length: 12 }, (_, mi) => getMV('income', mi));
  chartLine.data.datasets[1].data = Array.from({ length: 12 }, (_, mi) => getMV('bills', mi) + getMV('expenses', mi) + getMV('savings', mi) + getMV('debts', mi));
  chartLine.update('none');
}

// ══════════════════════════════════════════════
// CHARTS
// ══════════════════════════════════════════════
let chartDonut, chartBar, chartHero, chartNotes, chartLine;
function initCharts() {
  Chart.defaults.font.family = 'Tajawal';
  // ── helper: get computed CSS var ──
  function cv(v) { return getComputedStyle(document.documentElement).getPropertyValue(v).trim() || '#888'; }
  function isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
  function gridColor() { return isDark() ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)'; }
  function tickColor() { return isDark() ? '#7d8ba5' : '#5A6070'; }
  function legendColor() { return isDark() ? '#a8b3c8' : '#5A6070'; }

  // ── Hero donut (remaining ratio) ──
  chartHero = new Chart($('heroDonut'), {
    type: 'doughnut',
    data: {
      labels: ['', ''], datasets: [{
        data: [1, 0],
        backgroundColor: ['#2dd4bf', 'rgba(255,255,255,.08)'],
        borderWidth: 0, borderRadius: 4
      }]
    },
    options: {
      cutout: '78%',
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      responsive: true, maintainAspectRatio: true
    }
  });

  // ── Donut: where does money go ──
  // Colors match screenshot: bills=indigo, expenses=orange, savings=cyan, debts=pink-red
  const donutColors = ['#6366f1', '#f97316', '#06b6d4', '#f43f5e'];
  chartDonut = new Chart($('donutChart'), {
    type: 'doughnut',
    data: {
      labels: ['', '', '', ''],
      datasets: [{
        data: [0, 0, 0, 0],
        backgroundColor: donutColors,
        borderWidth: 3,
        borderColor: isDark() ? '#151c2c' : '#ffffff',
        hoverOffset: 14,
        hoverBorderWidth: 0
      }]
    },
    options: {
      cutout: '62%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (ctx) {
              return ' ' + ctx.label + ': ' + ctx.parsed.toLocaleString() + ' ' + ($('currencySelect') ? $('currencySelect').value : '');
            }
          }
        }
      },
      responsive: true, maintainAspectRatio: true
    }
  });

  // ── Bar chart: planned vs actual (matches Image 2 mockup) ──
  // Dataset 0: Planned = indigo/blue #6164ff | Dataset 1: Actual = pink/red #ff3b69
  const defaultBarLabels = lang === 'fr'
    ? ['Factures', 'Dépenses', 'Épargne', 'Dettes']
    : ['الفواتير', 'المصاريف', 'التوفير', 'الديون'];

  chartBar = new Chart($('barChart'), {
    type: 'bar',
    data: {
      labels: defaultBarLabels,
      datasets: [
        {
          label: lang === 'fr' ? 'Prévu' : 'مخطط', data: [0, 0, 0, 0],
          backgroundColor: '#6164ff',
          borderRadius: 6, borderSkipped: false,
          borderWidth: 0, maxBarThickness: 18, categoryPercentage: 0.6, barPercentage: 0.85
        },
        {
          label: lang === 'fr' ? 'Réalisé' : 'تصرفت', data: [0, 0, 0, 0],
          backgroundColor: '#ff3b69',
          borderRadius: 6, borderSkipped: false,
          borderWidth: 0, maxBarThickness: 18, categoryPercentage: 0.6, barPercentage: 0.85
        }
      ]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { font: { size: 12, weight: '700', family: 'Tajawal' }, color: tickColor() }
        },
        y: {
          grid: { color: gridColor(), drawBorder: false },
          border: { display: false },
          ticks: { font: { size: 10, family: 'DM Mono' }, color: tickColor() }
        }
      },
      responsive: true, maintainAspectRatio: true
    }
  });

  // ── Notes donut ──
  chartNotes = new Chart($('notesDonut'), {
    type: 'doughnut',
    data: {
      labels: [''], datasets: [{
        data: [1],
        backgroundColor: CAT_COLORS,
        borderWidth: 3,
        borderColor: isDark() ? '#151c2c' : '#ffffff',
        hoverOffset: 10
      }]
    },
    options: {
      cutout: '55%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 10 }, color: legendColor(), padding: 8, usePointStyle: true }
        }
      },
      responsive: true, maintainAspectRatio: true
    }
  });

  // ── Monthly line chart ──
  chartLine = new Chart($('monthlyLine'), {
    type: 'line',
    data: {
      labels: T().months, datasets: [
        {
          label: 'Income', data: Array(12).fill(0),
          borderColor: COLORS.income, backgroundColor: 'rgba(16,185,129,.1)',
          fill: true, tension: .4, pointRadius: 4, pointBackgroundColor: COLORS.income,
          pointBorderColor: 'transparent', borderWidth: 2
        },
        {
          label: 'Expenses', data: Array(12).fill(0),
          borderColor: COLORS.expenses, backgroundColor: 'rgba(248,113,113,.1)',
          fill: true, tension: .4, pointRadius: 4, pointBackgroundColor: COLORS.expenses,
          pointBorderColor: 'transparent', borderWidth: 2
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 10 }, color: legendColor(), usePointStyle: true }
        }
      },
      scales: {
        x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 10 }, color: tickColor() } },
        y: {
          grid: { color: gridColor(), drawBorder: false },
          border: { display: false },
          ticks: { font: { size: 10 }, color: tickColor() }
        }
      },
      responsive: true, maintainAspectRatio: false
    }
  });
}

// ══════════════════════════════════════════════
// UI
// ══════════════════════════════════════════════
function showTab(name, el) {
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.remove('active');
    p.style.display = '';
  });
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const panel = $('tab-' + name);
  if (panel) { panel.classList.add('active'); panel.style.display = ''; }
  if (el) el.classList.add('active');
  if (name === 'monthly') buildMonthlyTable();
  if (name === 'notes') {
    if (typeof initNotesMonthFilter === 'function') initNotesMonthFilter();
    renderNotesTab();
  }
  if (name === 'weekly') {
    const statsSel = document.getElementById('stats-month-filter');
    if (statsSel) statsSel.value = ck();
    renderWeeklyTab();
  }
  if (name === 'drive') {
    const dateInput = document.getElementById('drive-date');
    if (dateInput && !dateInput.value) dateInput.value = new Date().toISOString().slice(0, 10);
    renderCarTab();
  }
  updateFabVisibility();
}
function changeCurrency(val) { currency = val; syncCur(); persistData(); recalc(); showToast(T().display_currency || 'Unité d’affichage uniquement'); }
function syncCur() { ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'].forEach(id => { const e = $(id); if (e) e.textContent = currency; }); const h = $('hero-cur'); if (h) h.textContent = currency; }
function openModal(id) { $(id).classList.add('open'); }
function closeModal(id) { $(id).classList.remove('open'); }
function showToast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }

let _installPrompt = null;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  _installPrompt = event;
  const button = $('install-app-btn'); if (button) button.style.display = 'inline-flex';
});

window.addEventListener('appinstalled', () => {
  _installPrompt = null;
  const button = $('install-app-btn'); if (button) button.style.display = 'none';
  showToast('✅ Tadbir installé');
});

async function installTadbir() {
  if (!_installPrompt) return;
  await _installPrompt.prompt();
  await _installPrompt.userChoice;
  _installPrompt = null;
  const button = $('install-app-btn'); if (button) button.style.display = 'none';
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./service-worker.js');
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            showToast('✨ Nouvelle version disponible — rechargez la page');
          }
        });
      });
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  });
}
registerServiceWorker();

// ══════════════════════════════════════════════
// USER DROPDOWN
// ══════════════════════════════════════════════
function toggleUserDropdown() {
  const dd = $('user-dropdown');
  dd.classList.toggle('open');
  // Close on outside click
  if (dd.classList.contains('open')) {
    setTimeout(() => {
      document.addEventListener('click', closeDropdownOutside, { once: true });
    }, 10);
  }
}
function closeDropdownOutside(e) {
  const dd = $('user-dropdown');
  if (dd && !dd.contains(e.target) && e.target.id !== 'auth-avatar') {
    dd.classList.remove('open');
  }
}
function closeUserDropdown() { $('user-dropdown').classList.remove('open'); }

function initLandingCharts() {
  // Donut chart
  const dc = document.getElementById('lnd-donut');
  const bc = document.getElementById('lnd-bar');
  if (!dc || !bc) return;
  new Chart(dc, {
    type: 'doughnut',
    data: {
      labels: ['الفواتير', 'المصاريف', 'التوفير', 'الديون'],
      datasets: [{
        data: [1259, 2200, 1000, 1260],
        backgroundColor: ['#E8A598', '#B5A8D4', '#8DB4CF', '#D4A853'],
        borderWidth: 2, borderColor: 'rgba(255,255,255,.08)', hoverOffset: 6
      }]
    },
    options: { cutout: '58%', plugins: { legend: { position: 'bottom', labels: { color: 'rgba(255,255,255,.4)', font: { size: 10, family: 'Tajawal' }, padding: 8, usePointStyle: true } } }, responsive: true, maintainAspectRatio: true }
  });
  new Chart(bc, {
    type: 'bar',
    data: {
      labels: ['الفواتير', 'المصاريف', 'التوفير', 'الديون'],
      datasets: [
        { label: 'تصرفت', data: [1259, 2200, 1000, 1260], backgroundColor: ['#E8A598', '#B5A8D4', '#8DB4CF', '#D4A853'], borderRadius: 5, borderSkipped: false },
        { label: 'مخطط', data: [1500, 2500, 1500, 1500], backgroundColor: 'rgba(255,255,255,.07)', borderRadius: 5, borderSkipped: false }
      ]
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { position: 'bottom', labels: { color: 'rgba(255,255,255,.4)', font: { size: 10, family: 'Tajawal' }, padding: 8, usePointStyle: true } } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,.04)' }, ticks: { color: 'rgba(255,255,255,.3)', font: { size: 9 } } },
        y: { grid: { display: false }, ticks: { color: 'rgba(255,255,255,.4)', font: { size: 10, family: 'Tajawal' } } }
      },
      responsive: true, maintainAspectRatio: true
    }
  });
}


// ══════════════════════════════════════════════
// MONTHLY CALENDAR (in dashboard)
// ══════════════════════════════════════════════
function renderCalendar() {
  var thead = document.getElementById('cal-thead');
  var tbody = document.getElementById('cal-tbody');
  if (!thead || !tbody) return;
  var t = T();

  // Full day names for header (RTL: أحد first = rightmost)
  var DN_AR = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
  var DN_FR = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  var DN_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var DN_ES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  var dayNames = lang === 'fr' ? DN_FR : lang === 'en' ? DN_EN : lang === 'es' ? DN_ES : DN_AR;

  // Header row
  thead.innerHTML = '';
  var htr = document.createElement('tr');
  dayNames.forEach(function (d) {
    var th = document.createElement('th'); th.textContent = d; htr.appendChild(th);
  });
  thead.appendChild(htr);

  // Collect notes - match by displayed month/year
  // Use the displayed year from calendar (curYear) and displayed month (curMonth)
  var calMonthStr = String(curMonth + 1).padStart(2, '0');
  var dayTotals = {};
  Object.keys(allData).forEach(function (mk2) {
    ((allData[mk2] || {}).notes || []).forEach(function (n) {
      if (!n.date || !Number(n.amount || 0)) return;
      var parts = n.date.split('-');
      if (!parts[1]) return;
      // Match by month AND year in the note's date field
      var noteYear = parseInt(parts[0]);
      var noteMonth = parts[1];
      if (noteMonth === calMonthStr && noteYear === curYear) {
        dayTotals[n.date] = (dayTotals[n.date] || 0) + Number(n.amount);
      }
    });
  });

  // Month total
  var monthTotal = Object.values(dayTotals).reduce(function (s, v) { return s + v; }, 0);
  var elTot = document.getElementById('cal-total-val');
  if (elTot) elTot.textContent = fmt(monthTotal);
  var elCur = document.getElementById('cal-cur');
  if (elCur) elCur.textContent = currency;

  // Color scale
  var vals = Object.values(dayTotals).filter(function (v) { return v > 0; });
  var maxVal = Math.max.apply(null, vals.concat([1]));

  // Build grid
  tbody.innerHTML = '';
  // Use local date for day-of-week to avoid timezone shift
  var firstDt = new Date(curYear, curMonth, 1);
  var firstDow = firstDt.getDay(); // 0=Sun
  var lastDate = new Date(curYear, curMonth + 1, 0).getDate();
  var _td = new Date();
  var todayKey = _td.getFullYear() + '-' + String(_td.getMonth() + 1).padStart(2, '0') + '-' + String(_td.getDate()).padStart(2, '0');

  var tr = document.createElement('tr');
  var col = 0;

  // Empty cells before day 1
  for (var e = 0; e < firstDow; e++) {
    var td = document.createElement('td'); td.className = 'empty';
    tr.appendChild(td); col++;
  }

  for (var d = 1; d <= lastDate; d++) {
    // Build date string directly to avoid timezone issues
    var dk = curYear + '-' + String(curMonth + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    var val = dayTotals[dk] || 0;
    var isToday = dk === todayKey;
    var pct = val / maxVal;

    var color = '';
    if (val > 0) {
      color = pct < 0.33 ? '#22c55e' : pct < 0.66 ? '#f59e0b' : '#ef4444';
    }

    var td2 = document.createElement('td');
    if (isToday) td2.className = 'today-cell';

    // Day number
    var numDiv = document.createElement('div');
    numDiv.className = 'cal-day-num';
    numDiv.textContent = d;
    td2.appendChild(numDiv);

    // Amount + bar (only if has data > 0)
    if (val > 0 && val !== undefined) {
      var amtDiv = document.createElement('div');
      amtDiv.className = 'cal-day-amount';
      amtDiv.style.color = color;
      amtDiv.textContent = fmt(val);
      td2.appendChild(amtDiv);

      var bar = document.createElement('div');
      bar.className = 'cal-day-bar';
      bar.style.background = color;
      td2.appendChild(bar);
    }

    td2.title = t.months[curMonth] + ' ' + d + (val > 0 ? ' — ' + fmt(val) + ' ' + currency : '');
    tr.appendChild(td2);
    col++;

    if (col % 7 === 0) {
      tbody.appendChild(tr);
      tr = document.createElement('tr');
    }
  }

  // Fill remaining cells
  while (col % 7 !== 0) {
    var tdx = document.createElement('td'); tdx.className = 'empty';
    tr.appendChild(tdx); col++;
  }
  if (tr.children.length > 0) tbody.appendChild(tr);

  // Title
  var titleEl = document.getElementById('cal-title-lbl');
  if (titleEl) {
    var prefix = lang === 'fr' ? 'Résumé ' : lang === 'en' ? 'Summary ' : lang === 'es' ? 'Resumen ' : 'ملخص مصاريف ';
    titleEl.textContent = prefix + t.months[curMonth] + ' ' + curYear;
  }
}

// ══════════════════════════════════════════════
// IN DRIVE TAB
// ══════════════════════════════════════════════
function getDriveData() {
  return (allData[ck()] || {}).driveEntries || [];
}

function addDriveEntry() {
  if (!ensureMonthEditable()) return;
  const date = document.getElementById('drive-date').value;
  const trips = Number(document.getElementById('drive-trips').value) || 0;
  const total = Number(document.getElementById('drive-total').value) || 0;
  if (!date || trips <= 0 || total <= 0) { showToast('❌ ' + (T().drive_fill || 'أكمل كل الحقول')); return; }
  const mk = ck();
  if (!allData[mk]) allData[mk] = defMonth();
  if (!allData[mk].driveEntries) allData[mk].driveEntries = [];
  allData[mk].driveEntries.push({ date, trips, total, avg: Math.round(total / trips) });
  // Sync to income "عمل ثاني"
  syncDriveToIncome();
  persistData();
  document.getElementById('drive-trips').value = '';
  document.getElementById('drive-total').value = '';
  renderDriveTab();
  showToast(T().toast_add || '✓');
}

function syncDriveToIncome() {
  const mk = ck();
  const entries = getDriveData();
  const monthTotal = entries.reduce(function (s, e) { return s + Number(e.total || 0); }, 0);
  // Find "عمل ثاني" or second income row
  const income = allData[mk].income || [];
  let found = false;
  income.forEach(function (row) {
    if (row.label === 'عمل ثاني' || row.label === '2ème emploi' || row.label === '2nd job' || row.label === '2º trabajo' || row.label === 'خدمة ثانية') {
      row.act = monthTotal; found = true;
    }
  });
  if (!found && income.length > 1) { income[1].act = monthTotal; }
  renderSection('income');
  recalc();
}

function deleteDriveEntry(idx) {
  if (!ensureMonthEditable()) return;
  const mk = ck();
  if (!allData[mk] || !allData[mk].driveEntries) return;
  allData[mk].driveEntries.splice(idx, 1);
  syncDriveToIncome();
  persistData();
  renderDriveTab();
}

function renderDriveTab() {
  const panel = document.getElementById('tab-drive');
  if (!panel || !panel.classList.contains('active')) return;
  const t = T();
  const entries = getDriveData();

  // Today
  const todayKey = new Date().toISOString().slice(0, 10);
  const todayEntries = entries.filter(function (e) { return e.date === todayKey; });
  const todayTotal = todayEntries.reduce(function (s, e) { return s + e.total; }, 0);
  const todayTrips = todayEntries.reduce(function (s, e) { return s + e.trips; }, 0);

  // Week
  const now = new Date();
  const ws = new Date(now); ws.setDate(now.getDate() - now.getDay());
  const weekTotal = entries.filter(function (e) {
    const d = new Date(e.date); return d >= ws && d <= now;
  }).reduce(function (s, e) { return s + e.total; }, 0);

  // Month total
  const monthTotal = entries.reduce(function (s, e) { return s + e.total; }, 0);
  const monthTrips = entries.reduce(function (s, e) { return s + e.trips; }, 0);
  const avgPerTrip = monthTrips > 0 ? Math.round(monthTotal / monthTrips) : 0;

  // Update stats
  var el;
  el = document.getElementById('drv-today'); if (el) el.textContent = fmt(todayTotal);
  el = document.getElementById('drv-week'); if (el) el.textContent = fmt(weekTotal);
  el = document.getElementById('drv-month'); if (el) el.textContent = fmt(monthTotal);
  el = document.getElementById('drv-avg'); if (el) el.textContent = fmt(avgPerTrip);
  el = document.getElementById('drv-trips'); if (el) el.textContent = monthTrips;

  // Set today's date in input
  const dateInput = document.getElementById('drive-date');
  if (dateInput && !dateInput.value) dateInput.value = todayKey;

  // Week bar chart
  renderDriveWeekBars(entries, ws, now);

  // Entries list
  renderDriveList(entries);
}

function renderDriveWeekBars(entries, ws, now) {
  const bars = document.getElementById('drive-week-bars');
  if (!bars) return;
  bars.innerHTML = '';
  const dayNames = lang === 'fr' ? ['D', 'L', 'M', 'M', 'J', 'V', 'S'] :
    lang === 'en' ? ['S', 'M', 'T', 'W', 'T', 'F', 'S'] :
      lang === 'es' ? ['D', 'L', 'M', 'X', 'J', 'V', 'S'] :
        ['أح', 'اث', 'ثل', 'أر', 'خم', 'جم', 'سب'];
  const vals = Array.from({ length: 7 }, function (_, i) {
    const wd = new Date(ws); wd.setDate(ws.getDate() + i);
    const dk = wd.toISOString().slice(0, 10);
    return entries.filter(function (e) { return e.date === dk; }).reduce(function (s, e) { return s + e.total; }, 0);
  });
  const maxVal = Math.max.apply(null, vals.concat([1]));
  const todayDow = new Date().getDay();
  vals.forEach(function (val, i) {
    const isToday = i === todayDow;
    const pct = Math.max(4, Math.round((val / maxVal) * 100));
    const item = document.createElement('div');
    item.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;';
    const track = document.createElement('div');
    track.style.cssText = 'width:100%;height:80px;display:flex;align-items:flex-end;background:var(--bg);border-radius:8px;overflow:hidden;';
    const fill = document.createElement('div');
    fill.style.cssText = 'width:100%;height:' + pct + '%;background:' + (isToday ? 'var(--mint)' : 'var(--lav)') + ';border-radius:8px;min-height:4px;transition:height .5s;';
    track.appendChild(fill);
    const lbl = document.createElement('div');
    lbl.style.cssText = 'font-size:9px;color:' + (isToday ? 'var(--mint)' : 'var(--light)') + ';font-weight:' + (isToday ? '800' : '600') + ';text-align:center;';
    lbl.textContent = dayNames[i];
    const valLbl = document.createElement('div');
    valLbl.style.cssText = 'font-size:8px;color:var(--mid);font-family:"DM Mono",monospace;';
    valLbl.textContent = val > 0 ? fmt(val) : '';
    item.appendChild(track); item.appendChild(valLbl); item.appendChild(lbl);
    bars.appendChild(item);
  });
}

function renderDriveList(entries) {
  const list = document.getElementById('drive-entries-list');
  if (!list) return;
  list.innerHTML = '';
  if (!entries.length) {
    const _emptyMsg = lang === 'fr' ? '🚗 Aucun trajet enregistré ce mois' : lang === 'en' ? '🚗 No trips recorded this month' : lang === 'es' ? '🚗 Sin viajes registrados este mes' : '🚗 لا توجد رحلات مسجلة هذا الشهر';
    list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--light);font-size:12px;">' + _emptyMsg + '</div>';
    return;
  }
  // Sort by date descending
  const sorted = entries.slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
  sorted.forEach(function (e, i) {
    const realIdx = entries.indexOf(e);
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border);';
    const icon = document.createElement('div');
    icon.style.cssText = 'width:36px;height:36px;border-radius:10px;background:var(--mint-ll);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;';
    icon.textContent = '🚗';
    const info = document.createElement('div');
    info.style.cssText = 'flex:1;';
    info.innerHTML = '<div style="font-size:14px;font-weight:600;color:var(--dark);">' + e.date + '</div>'
      + '<div style="font-size:12px;color:var(--light);">' + (T().drv_trips || 'رحلة') + ': ' + e.trips + ' • ' + (T().drv_avg || 'معدل') + ': ' + fmt(e.avg) + ' ' + currency + '</div>';
    const amt = document.createElement('div');
    amt.style.cssText = 'font-family:"DM Mono",monospace;font-size:15px;font-weight:800;color:var(--mint);flex-shrink:0;';
    amt.textContent = fmt(e.total);
    const del = document.createElement('button');
    del.style.cssText = 'background:none;border:none;color:#ddd;cursor:pointer;font-size:14px;flex-shrink:0;';
    del.textContent = '✕';
    del.onclick = (function (idx) { return function () { deleteDriveEntry(idx); }; })(realIdx);
    row.appendChild(icon); row.appendChild(info); row.appendChild(amt); row.appendChild(del);
    list.appendChild(row);
  });
}

// ══════════════════════════════════════════════
// NOTES TAB — NEW UI
// ══════════════════════════════════════════════

let _noteActiveCat = null; // active main cat id
let _noteFilterMonth = null; // 'YYYY-MM' or null = current month

// Icon bg colors per cat id
const CAT_BG = {
  fixed: '#EAF7F3', daily: '#EAF3DE', transport: '#FBF3E6',
  health: '#FCEBEB', clothes: '#F0EDF9', learning: '#E6F1FB',
  fun: '#FFF3E0', invest: '#F3EBF7', cafe_smoke: '#FFF8EC'
};
const CAT_COLOR = {
  fixed: '#0F6E56', daily: '#3B6D11', transport: '#854F0B',
  health: '#A32D2D', clothes: '#533AB7', learning: '#185FA5',
  fun: '#854F0B', invest: '#6b3fa0', cafe_smoke: '#7A4F1D'
};

function initNotesPills() {
  var wrap = document.getElementById('notes-pills-wrap');
  if (!wrap) return;
  wrap.innerHTML = '';
  var cats = getMainCats();
  // "الكل" pill
  var allPill = document.createElement('span');
  allPill.className = 'notes-pill' + (_noteActiveCat === null ? ' active' : '');
  allPill.textContent = '🔍 ' + (lang === 'fr' ? 'Tout' : lang === 'en' ? 'All' : lang === 'es' ? 'Todo' : 'الكل');
  allPill.onclick = function () { _noteActiveCat = null; initNotesPills(); updateNoteSubSelect(); renderNotesList(); initNoteChips('daily'); };
  wrap.appendChild(allPill);
  cats.forEach(function (mc) {
    var pill = document.createElement('span');
    pill.className = 'notes-pill' + (_noteActiveCat === mc.id ? ' active' : '');
    pill.textContent = mc.icon + ' ' + mc.label;
    pill.onclick = function () { _noteActiveCat = mc.id; initNotesPills(); updateNoteSubSelect(); renderNotesList(); initNoteChips(mc.id); };
    wrap.appendChild(pill);
  });
}

function updateNoteSubSelect() {
  // select est caché — on rafraîchit uniquement les chips
  var chipCat = _noteActiveCat || 'daily';
  if (typeof initNoteChips === 'function') initNoteChips(chipCat);
}

function initNotesMonthFilter() {
  var sel = document.getElementById('nf-month-filter');
  if (!sel) return;
  sel.innerHTML = '';
  // Scan ALL notes from ALL allData to find unique months
  var months = new Set();
  // Add current display month
  var displayYM = curYear + '-' + String(curMonth + 1).padStart(2, '0');
  months.add(displayYM);
  // Scan all notes by their actual date
  Object.keys(allData).forEach(function (k) {
    ((allData[k] || {}).notes || []).forEach(function (n) {
      if (n.date && n.date.length >= 7) months.add(n.date.slice(0, 7));
    });
  });
  var t = T();
  // Sort descending (most recent first)
  var sorted = Array.from(months).sort().reverse();
  // Find the most recent month that has actual notes
  var latestWithNotes = null;
  sorted.forEach(function (ym) {
    if (latestWithNotes) return;
    var hasNotes = false;
    Object.keys(allData).forEach(function (k) {
      ((allData[k] || {}).notes || []).forEach(function (n) {
        if (n.date && n.date.startsWith(ym) && Number(n.amount || 0) > 0) hasNotes = true;
      });
    });
    if (hasNotes) latestWithNotes = ym;
  });
  // Default: current active display month from header
  var defaultYM = displayYM;
  sorted.forEach(function (ym) {
    var parts = ym.split('-');
    var mIdx = parseInt(parts[1]) - 1;
    var opt = document.createElement('option');
    opt.value = ym;
    opt.textContent = t.months[mIdx] + ' ' + parts[0];
    if (ym === defaultYM) opt.selected = true;
    sel.appendChild(opt);
  });
  _noteFilterMonth = defaultYM;
}


// ══════════════════════════════════════════════════════════════════
// MULTI-SELECT CHIPS — sélection multiple → auto-remark
// ══════════════════════════════════════════════════════════════════
var _selectedChips = [];

const NOTE_CHIPS = {
  'daily': [
    '🥚 بيض', '🥛 حليب', '🍞 خبز', '🧈 زبدة', '🧀 فرماج',
    '🫒 زيت زيتون', '🛢️ زيت مائدة', '🌾 دقيق', '🍚 أرز',
    '🍝 معكرونة', '🫙 كسكس', '🫘 قطاني', '🍗 دجاج', '🥩 لحم بقر/غنم',
    '🐟 سمك طري', '🥫 طون/سردين', '🍅 طماطم/مطيشة', '🥔 بطاطس',
    '🧅 بصل', '🥦 خضر متنوعة', '🍎 فواكه', '🍋 ليمون', '🍌 بنان',
    '🍉 دلاح', '🍇 عنب', '🌻 زريعة عباد الشمس', '🫒 زيتون', '🧃 عصير', '🥤 مشروب غازي', '🥨 مقرمشات', '🥗 سلطة', '🥟 بسطيلة', '🫙 مصبرات', '🧂 توابل/ملح', '🍯 عسل/مربى', '🍬 حلويات/بولو'
  ],
  'fixed': [
    '🧺 مسحوق غسيل/تيد', '💧 جافيل/مبيض', '🫧 سائل أواني',
    '🧹 منظف أرضيات/سانيكروا', '🌸 معطر جو', '🧻 ورق حمام',
    '🍃 ورق مطبخ', '🗑️ أكياس زبل', '🥄 ألومينيوم/سلوفان', '🍶 خل',
    '🔥 بوطة غاز صغيرة', '🔥 بوطة غاز كبيرة', '🧽 إسفنجة/ليف',
    '🫙 سائل جافيل كبير', '🪣 مطهر أرضيات'
  ],
  'health': [
    '💊 دواء روتيني', '💊 دوليبران/مسكن', '💉 فيتامينات',
    '🩹 بلاصط/ضمادات', '🧴 سيروم/قطن', '🩺 طبيب/عيادة',
    '👶 كوش/حفاضات', '🍼 حليب رضع', '🧻 لانجيت',
    '🥣 سيريلاك', '🧴 شامبو', '🧼 صابون استحمام',
    '🪥 معجون أسنان/سينيال', '🩸 فوط صحية/Always', '💈 مضاد عرق/ديدوران',
    '🪒 جيل حلاقة', '🪒 شفرات حلاقة', '🩺 كوتون تيج'
  ],
  'cafe_smoke': [
    '☕ قهوة كحلة', '☕ كابوتشينو', '🫖 نسكافي', '🍵 أتاي',
    '🥐 كرواصة', '🫓 مسمن', '🧇 بغرير', '🍳 فطور كومبلي',
    '🥤 عصير طري', '🚬 سيجارة', '📦 علبة تبغ',
    '🔥 ولاعة', '💨 شيشة/تفكيكة', '🎮 ترفيه', '🎬 سينما', '🛍️ تسوق كمالي',
    '💆 عناية/سبا', '🎁 هدية', '🍰 حلويات/مقهى',
    '🥪 سندويش', '🥛 زعزع', '🍦 دانون'
  ],
  'transport': [
    '⛽ Gasoil', '🚌 نقل عام/طاكسي', '🔧 صيانة سيارة',
    '🛞 إطارات', '🔋 بطارية سيارة', '🛣️ طريق أوتوروت',
    '🚿 غسل السيارة'
  ],
  'clothes': [
    '👕 ملابس رجال', '👗 ملابس نساء', '👶 ملابس أطفال',
    '👟 حذاء', '🧢 طاقية/إكسسوار', '💇 حلاقة رجال', '💆 عناية جمال'
  ],
  'fun': [
    '🎬 سينما/ترفيه', '🎮 ألعاب', '🎁 هدية', '✈️ سفر',
    '🍕 خرجة مطعم', '🧁 حلويات', '📱 تطبيقات/اشتراك'
  ],
  'learning': [
    '📚 كتاب', '💻 دورة أونلاين', '📝 أدوات مكتبية',
    '🎓 تعليم/مدرسة', '📰 جريدة/مجلة'
  ],
  'invest': [
    '💰 توفير شهري', '🏦 سداد دين', '⚠️ طوارئ',
    '📈 استثمار', '🏠 صيانة منزل'
  ]
};

const NOTE_CHIPS_FR = {
  'بيض': 'Œufs', 'حليب': 'Lait', 'خبز': 'Pain', 'زبدة': 'Beurre', 'فرماج': 'Fromage', 'زيت زيتون': "Huile d'olive", 'زيت مائدة': 'Huile de table', 'دقيق': 'Farine', 'أرز': 'Riz', 'معكرونة': 'Pâtes', 'كسكس': 'Couscous', 'قطاني': 'Légumineuses', 'دجاج': 'Poulet', 'لحم بقر/غنم': 'Viande bœuf/agneau', 'سمك طري': 'Poisson frais', 'طون/سردين': 'Thon/Sardines', 'طماطم/مطيشة': 'Tomates', 'بطاطس': 'Pommes de terre', 'بصل': 'Oignons', 'خضر متنوعة': 'Légumes variés', 'فواكه': 'Fruits', 'ليمون': 'Citron', 'بنان': 'Bananes', 'دلاح': 'Pastèque', 'عنب': 'Raisins', 'زريعة عباد الشمس': 'Graines de tournesol', 'زيتون': 'Olives', 'عصير': 'Jus', 'مشروب غازي': 'Soda/Limonade', 'مقرمشات': 'Snacks salés', 'سلطة': 'Salade', 'بسطيلة': 'Pastilla', 'مصبرات': 'Conserves', 'توابل/ملح': 'Épices/Sel', 'عسل/مربى': 'Miel/Confiture', 'حلويات/بولو': 'Bonbons/Polo',
  'مسحوق غسيل/تيد': 'Lessive', 'جافيل/مبيض': 'Javel', 'سائل أواني': 'Liquide vaisselle', 'منظف أرضيات/سانيكروا': 'Nettoyant sol', 'معطر جو': "Désodorisant", 'ورق حمام': 'Papier toilette', 'ورق مطبخ': 'Essuie-tout', 'أكياس زبل': 'Sacs poubelle', 'ألومينيوم/سلوفان': 'Aluminium/Film', 'خل': 'Vinaigre', 'بوطة غاز صغيرة': 'Petite bonbonne de gaz', 'بوطة غاز كبيرة': 'Grande bonbonne de gaz', 'إسفنجة/ليف': 'Éponge', 'سائل جافيل كبير': 'Grand bidon de javel', 'مطهر أرضيات': 'Désinfectant sol',
  'دواء روتيني': 'Médicament', 'دوليبران/مسكن': 'Doliprane/Antalgique', 'فيتامينات': 'Vitamines', 'بلاصط/ضمادات': 'Pansements', 'سيروم/قطن': 'Sérum/Coton', 'طبيب/عيادة': 'Médecin/Clinique', 'كوش/حفاضات': 'Couches', 'حليب رضع': 'Lait infantile', 'لانجيت': 'Lingettes', 'سيريلاك': 'Céréales bébé', 'شامبو': 'Shampoing', 'صابون استحمام': 'Savon', 'معجون أسنان/سينيال': 'Dentifrice', 'فوط صحية/Always': 'Serviettes hygiéniques', 'مضاد عرق/ديدوران': 'Déodorant', 'جيل حلاقة': 'Gel à raser', 'شفرات حلاقة': 'Lames de rasoir', 'كوتون تيج': 'Cotons-tiges',
  'قهوة كحلة': 'Café noir', 'كابوتشينو': 'Cappuccino', 'نسكافي': 'Nescafé', 'أتاي': 'Thé', 'كرواصة': 'Croissant', 'مسمن': 'Msemen', 'بغرير': 'Beghrir', 'فطور كومبلي': 'Petit-déjeuner complet', 'عصير طري': 'Jus frais', 'سيجارة': 'Cigarette', 'علبة تبغ': 'Paquet de tabac', 'ولاعة': 'Briquet', 'شيشة/تفكيكة': 'Chicha/Tabac', 'ترفيه': 'Loisirs', 'سينما': 'Cinéma', 'تسوق كمالي': 'Achat non essentiel', 'عناية/سبا': 'Soins/Spa', 'هدية': 'Cadeau', 'حلويات/مقهى': 'Pâtisserie/Café', 'سندويش': 'Sandwich', 'زعزع': 'Zaazaa', 'دانون': 'Yaourt'
};

function localizeChip(item) {
  if (lang !== 'fr') return item;
  const match = item.match(/^(\S+)\s+(.*)$/);
  if (!match) return item;
  return match[1] + ' ' + (NOTE_CHIPS_FR[match[2]] || match[2]);
}

function initNoteChips(catId) {
  _selectedChips = [];
  var grid = document.getElementById('nf-chips-grid');
  var section = document.getElementById('nf-chips-section');
  var lbl = document.getElementById('nf-chips-lbl');
  if (!grid) return;
  grid.innerHTML = '';
  var mc = getMainCats().find(function (m) { return m.id === catId; });
  if (lbl && mc) lbl.textContent = mc.icon + ' ' + mc.label;
  else if (lbl) lbl.textContent = 'اختر المشتريات';
  var items = NOTE_CHIPS[catId] || NOTE_CHIPS['daily'];
  items.forEach(function (item) {
    var chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'nf-chip';
    chip.textContent = localizeChip(item);
    chip.dataset.val = item;
    chip.onclick = function () { toggleNoteChip(chip, item); };
    grid.appendChild(chip);
  });
  updateChipsPreview();
  if (section) section.style.display = items.length ? '' : 'none';
}

function toggleNoteChip(chip, val) {
  var idx = _selectedChips.indexOf(val);
  if (idx >= 0) { _selectedChips.splice(idx, 1); chip.classList.remove('nfc-sel'); }
  else { _selectedChips.push(val); chip.classList.add('nfc-sel'); }
  updateChipsPreview();
}

function clearNoteChips() {
  _selectedChips = [];
  document.querySelectorAll('.nf-chip.nfc-sel').forEach(function (c) { c.classList.remove('nfc-sel'); });
  updateChipsPreview();
}

function updateChipsPreview() {
  var preview = document.getElementById('nf-chips-preview');
  var addBtn = document.getElementById('nf-add-main-btn');
  if (!preview) return;
  if (_selectedChips.length === 0) {
    preview.innerHTML = '<span style="font-size:10px;color:var(--light);">— ' + (lang === 'fr' ? 'Sélectionnez vos achats' : 'اضغط على ما اشتريته') + ' —</span>';
  } else {
    var tags = _selectedChips.map(function (s) {
      return '<span class="nfc-tag">' + localizeChip(s) + '</span>';
    }).join('');
    preview.innerHTML = '<span style="font-size:10px;color:var(--mint);margin-left:4px;font-weight:700;">✓ ' + (lang === 'fr' ? 'Sélection :' : 'الخيار:') + '</span>' + tags;
  }
}

function getChipsAutoRemark() {
  if (_selectedChips.length === 0) return '';
  return _selectedChips.map(function (s) { return s.replace(/^[^ ]+ /, ''); }).join(' + ');
}

function addNoteNew() {
  if (!ensureMonthEditable()) return;
  var dateEl = document.getElementById('nf-date');
  var amountEl = document.getElementById('nf-amount');
  var personEl = document.getElementById('nf-person');
  if (!dateEl || !amountEl) return;
  var date = dateEl.value;
  var amount = Number(amountEl.value) || 0;
  // Chips = subCat (the only choice)
  var chipsSelected = _selectedChips.slice();
  var mainCat = _noteActiveCat || 'daily';
  var subCat = chipsSelected.length > 0
    ? chipsSelected.map(function (s) { return s.replace(/^[^ ]+ /, ''); }).join(' + ')
    : (getMainCats().find(function (m) { return m.id === mainCat; }) || { label: mainCat }).label;
  var remark = '';
  if (!date || amount <= 0) { showToast('❌ ' + (T().drive_fill || 'أكمل الحقول')); return; }
  var dp = date.split('-');
  var mk = dp[0] + '-' + dp[1];
  if (!allData[mk]) allData[mk] = defMonth();
  if (!allData[mk].notes) allData[mk].notes = [];
  allData[mk].notes.push({
    date: date,
    mainCat: mainCat,
    subCat: subCat,
    note: subCat,
    cat: subCat,
    chips: chipsSelected,
    amount: amount,
    person: (personEl && personEl.value) || 'self',
    remark: remark
  });
  amountEl.value = '';
  clearNoteChips();
  persistData();
  renderNotesTab();
  renderExpensesCats();
  recalc();
  setTimeout(populateDayFilter, 100);
  showToast(T().toast_add || '✓');
}

function deleteNoteNew(idx) {
  if (!ensureMonthEditable()) return;
  var mk = ck();
  if (!allData[mk] || !allData[mk].notes) return;
  allData[mk].notes.splice(idx, 1);
  persistData();
  renderNotesTab();
  renderExpensesCats();
  recalc();
}

function duplicateExpense(mk, idx) {
  if (!ensureMonthEditable(mk)) return;
  const notes = (allData[mk] || {}).notes || [];
  if (!notes[idx]) return;
  const copy = JSON.parse(JSON.stringify(notes[idx]));
  copy.date = new Date().toISOString().slice(0, 10);
  notes.push(copy);
  persistData(); renderNotesTab(); renderExpensesCats(); recalc();
  showToast(T().toast_add || '✓');
}


// ══════════════════════════════════════════════════════════════════
// فلتر الأيام — يتحدث عند تغيير الشهر
// ══════════════════════════════════════════════════════════════════
function onMonthFilterChange() {
  populateDayFilter();
  renderNotesList();
}

function populateDayFilter() {
  var monthSel = document.getElementById('nf-month-filter');
  var daySel = document.getElementById('nf-day-filter');
  if (!monthSel || !daySel) return;
  var mk = monthSel.value;
  // Collect all unique days that have entries in this month
  var days = new Set();
  Object.keys(allData).forEach(function (k) {
    ((allData[k] || {}).notes || []).forEach(function (n) {
      if (n.date && n.date.startsWith(mk)) days.add(n.date);
    });
  });
  // Build day options sorted desc
  var dayArr = Array.from(days).sort().reverse();
  var prevDay = daySel.value;
  daySel.innerHTML = '<option value="">— ' + (_dayFilterLabels[lang] || 'كل الأيام') + ' —</option>';
  dayArr.forEach(function (d) {
    var opt = document.createElement('option');
    opt.value = d;
    // Format: يوم + رقم
    var parts = d.split('-');
    var dayNum = parseInt(parts[2]);
    var dayNames = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
    var dayNamesFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    var dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dt = new Date(d);
    var dow = dt.getDay();
    var dayName = lang === 'fr' ? dayNamesFr[dow] : lang === 'en' ? dayNamesEn[dow] : dayNames[dow];
    opt.textContent = dayName + ' ' + dayNum;
    if (d === prevDay) opt.selected = true;
    daySel.appendChild(opt);
  });
  // Show/hide clear button
  var clearBtn = document.getElementById('nf-day-clear');
  if (clearBtn) clearBtn.style.display = daySel.value ? 'inline-block' : 'none';
}

const _dayFilterLabels = { ar: 'كل الأيام', dar: 'كل الأيام', fr: 'Tous', en: 'All days', es: 'Todos' };

function clearDayFilter() {
  var daySel = document.getElementById('nf-day-filter');
  if (daySel) daySel.value = '';
  var clearBtn = document.getElementById('nf-day-clear');
  if (clearBtn) clearBtn.style.display = 'none';
  renderNotesList();
}

function renderNotesList() {
  var listEl = document.getElementById('notes-entries-list');
  var footerVal = document.getElementById('nf-footer-val');
  var footerCur = document.getElementById('nf-footer-cur');
  var filterTotal = document.getElementById('nf-filter-total');
  var filterCur = document.getElementById('nf-filter-cur');
  if (!listEl) return;

  // Get selected filter month + day
  var fSel = document.getElementById('nf-month-filter');
  _noteFilterMonth = fSel ? fSel.value : ck();
  var daySel = document.getElementById('nf-day-filter');
  var filterDay = daySel ? daySel.value : '';
  var personFilter = document.getElementById('nf-person-filter');
  var filterPerson = personFilter ? personFilter.value : '';
  // Show/hide clear day btn
  var clearDayBtn = document.getElementById('nf-day-clear');
  if (clearDayBtn) clearDayBtn.style.display = filterDay ? 'inline-block' : 'none';

  // Collect notes — filter by month then optionally by exact day
  var allNotes = [];
  Object.keys(allData).forEach(function (mk2) {
    ((allData[mk2] || {}).notes || []).forEach(function (n, i) {
      if (!n.date) return;
      var monthMatch = _noteFilterMonth && n.date.startsWith(_noteFilterMonth);
      var dayMatch = !filterDay || (n.date === filterDay);
      var personMatch = !filterPerson || ((n.person || 'family') === filterPerson);
      if (monthMatch && dayMatch && personMatch) {
        allNotes.push({ n: n, mk: mk2, i: i });
      }
    });
  });

  // Filter by active cat
  var filtered = allNotes;
  if (_noteActiveCat) {
    filtered = allNotes.filter(function (obj) {
      return (obj.n.mainCat === _noteActiveCat) || (obj.n.catIdx !== undefined && getMainCats()[obj.n.catIdx || 0] && getMainCats()[obj.n.catIdx || 0].id === _noteActiveCat);
    });
  }

  // Free-text search across category, choices and remarks.
  var searchEl = document.getElementById('nf-search');
  var query = (searchEl ? searchEl.value : '').trim().toLocaleLowerCase();
  if (query) {
    filtered = filtered.filter(function (obj) {
      var n = obj.n;
      var mc = getMainCats().find(function (c) { return c.id === n.mainCat; });
      var haystack = [n.note, n.subCat, n.cat, n.remark, mc && mc.label].concat(n.chips || []).filter(Boolean).join(' ').toLocaleLowerCase();
      return haystack.includes(query);
    });
  }

  // User-selected sort.
  var sortEl = document.getElementById('nf-sort');
  var sortMode = sortEl ? sortEl.value : 'date_desc';
  filtered.sort(function (a, b) {
    if (sortMode === 'date_asc') return (a.n.date || '').localeCompare(b.n.date || '');
    if (sortMode === 'amount_desc') return Number(b.n.amount || 0) - Number(a.n.amount || 0);
    if (sortMode === 'amount_asc') return Number(a.n.amount || 0) - Number(b.n.amount || 0);
    return (b.n.date || '').localeCompare(a.n.date || '');
  });

  var total = filtered.reduce(function (s, obj) { return s + Number(obj.n.amount || 0); }, 0);
  if (filterTotal) filterTotal.textContent = fmt(total);
  if (filterCur) filterCur.textContent = currency;
  if (footerCur) footerCur.textContent = currency;
  if (footerVal) {
    var span = footerVal.querySelector('span') || footerVal;
    footerVal.childNodes[0].textContent = fmt(total) + ' ';
    if (footerCur) footerVal.appendChild(footerCur);
  }

  listEl.innerHTML = '';
  if (!filtered.length) {
    var empty = document.createElement('div');
    empty.style.cssText = 'padding:24px;text-align:center;color:var(--light);font-size:12px;';
    empty.innerHTML = '<div style="font-size:28px;margin-bottom:8px;">📭</div><div>' + (lang === 'fr' ? 'Aucune dépense' : lang === 'en' ? 'No expenses' : lang === 'es' ? 'Sin gastos' : 'لا توجد مصاريف') + '</div>';
    listEl.appendChild(empty);
    return;
  }

  filtered.forEach(function (obj) {
    var n = obj.n;
    var mc = getMainCats().find(function (c) { return c.id === n.mainCat; }) || getMainCats()[n.catIdx || 0] || getMainCats()[0];
    var row = document.createElement('div');
    row.className = 'note-entry-row';

    var icon = document.createElement('div');
    icon.className = 'ne-icon';
    icon.style.background = CAT_BG[mc.id] || '#EAF7F3';
    icon.textContent = mc.icon || '💰';

    var info = document.createElement('div');
    info.className = 'ne-info';
    var title = document.createElement('div');
    title.className = 'ne-title';
    var titleTxt = (n.chips && n.chips.length > 0) ? mc.label : (n.subCat || n.note || n.cat || mc.label);
    title.textContent = titleTxt;
    var sub = document.createElement('div');
    sub.className = 'ne-sub';
    sub.textContent = mc.label + ' • ' + n.date + ' • 👤 ' + personLabel(n.person || 'family');
    info.appendChild(title); info.appendChild(sub);
    // Afficher les chips (choix) sous forme de mini-tags
    if (n.chips && n.chips.length > 0) {
      var chipsRow = document.createElement('div');
      chipsRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:3px;margin-top:4px;';
      n.chips.forEach(function (ch) {
        var t = document.createElement('span');
        var lbl = ch.replace(/^[^ ]+ /, '');
        var ico = ch.split(' ')[0];
        t.style.cssText = 'display:inline-flex;align-items:center;gap:2px;background:#EAF7F3;color:#085041;border-radius:8px;padding:1px 6px;font-size:10px;font-weight:600;';
        t.textContent = ico + ' ' + lbl;
        chipsRow.appendChild(t);
      });
      info.appendChild(chipsRow);
    } else if (n.subCat && n.subCat !== n.note) {
      // Legacy: show subCat as single tag
      var legTag = document.createElement('span');
      legTag.style.cssText = 'display:inline-block;background:#EAF7F3;color:#085041;border-radius:8px;padding:1px 6px;font-size:10px;font-weight:600;margin-top:3px;';
      legTag.textContent = n.subCat;
      info.appendChild(legTag);
    }
    if (n.remark) {
      var rem = document.createElement('div');
      rem.className = 'ne-remark';
      rem.title = n.remark;
      rem.textContent = n.remark;
      info.appendChild(rem);
    }

    var amt = document.createElement('div');
    amt.className = 'ne-amount';
    amt.style.color = CAT_COLOR[mc.id] || 'var(--dark)';
    amt.textContent = fmt(n.amount);

    var del = document.createElement('button');
    del.className = 'ne-del';
    del.textContent = '✕';
    // Find real index in allData[mk].notes
    var realMk = obj.mk;
    var realIdx = obj.i;
    del.onclick = (function (mk2, idx2) {
      return function () {
        if (!ensureMonthEditable(mk2)) return;
        if (!allData[mk2] || !allData[mk2].notes) return;
        allData[mk2].notes.splice(idx2, 1);
        persistData(); renderNotesTab(); renderExpensesCats(); recalc();
      };
    })(realMk, realIdx);

    var editBtn = document.createElement('button');
    editBtn.className = 'ne-edit'; editBtn.title = 'تعديل'; editBtn.textContent = '✏️';
    editBtn.onclick = (function (mk2, idx2) { return function (e) { e.stopPropagation(); openEditNoteModal(mk2, idx2); }; })(realMk, realIdx);
    var duplicateBtn = document.createElement('button');
    duplicateBtn.className = 'ne-edit'; duplicateBtn.title = T().duplicate_expense || 'Dupliquer'; duplicateBtn.textContent = '⧉';
    duplicateBtn.onclick = (function (mk2, idx2) { return function (e) { e.stopPropagation(); duplicateExpense(mk2, idx2); }; })(realMk, realIdx);
    row.appendChild(icon); row.appendChild(info); row.appendChild(amt); row.appendChild(duplicateBtn); row.appendChild(editBtn); row.appendChild(del);
    listEl.appendChild(row);
  });

  // Update bar chart
  renderNotesCatBars(filtered);
  // Update footer
  if (footerVal) {
    footerVal.innerHTML = fmt(total) + ' <span style="font-size:11px;font-weight:400;color:var(--light);">' + currency + '</span>';
  }
}

function renderNotesCatBars(filtered) {
  var barsEl = document.getElementById('notes-cat-bars');
  if (!barsEl) return;
  barsEl.innerHTML = '';
  var bycat = {};
  filtered.forEach(function (obj) {
    var mc = getMainCats().find(function (c) { return c.id === obj.n.mainCat; }) || getMainCats()[0];
    var lbl = mc.icon + ' ' + mc.label;
    bycat[lbl] = (bycat[lbl] || { total: 0, color: CAT_COLOR[mc.id] || 'var(--mint)', id: mc.id });
    bycat[lbl].total += Number(obj.n.amount || 0);
  });
  var maxVal = Math.max.apply(null, Object.values(bycat).map(function (v) { return v.total; }).concat([1]));
  Object.entries(bycat).sort(function (a, b) { return b[1].total - a[1].total; }).forEach(function (entry) {
    var lbl = entry[0]; var v = entry[1];
    var pct = Math.round(v.total / maxVal * 100);
    var row = document.createElement('div');
    row.className = 'bar-r';
    row.innerHTML = '<span class="bar-lbl" style="font-size:12px;color:var(--mid);width:80px;text-align:right;flex-shrink:0;">' + lbl + '</span>'
      + '<div class="bar-track" style="flex:1;height:7px;background:var(--border);border-radius:4px;overflow:hidden;">'
      + '<div class="bar-fill" style="width:' + pct + '%;background:' + v.color + ';height:100%;border-radius:4px;transition:width .5s;"></div></div>'
      + '<span class="bar-val" style="font-size:12px;color:var(--mid);width:40px;text-align:left;font-family:DM Mono,monospace;">' + fmt(v.total) + '</span>';
    barsEl.appendChild(row);
  });
  // Also update donut chart
  updateNotesChart2(bycat);
}

function updateNotesChart2(bycat) {
  if (!chartNotes) return;
  var keys = Object.keys(bycat);
  var vals = keys.map(function (k) { return bycat[k].total; });
  var colors = Object.values(bycat).map(function (v) { return v.color; });
  if (!keys.length) return;
  chartNotes.data.labels = keys;
  chartNotes.data.datasets[0].data = vals;
  chartNotes.data.datasets[0].backgroundColor = colors;
  chartNotes.update('none');
}

function renderNotesTab() {
  // Init pills if needed
  initNotesPills();
  // Init month filter
  initNotesMonthFilter();
  // Set today date in input
  var dateEl = document.getElementById('nf-date');
  if (dateEl && !dateEl.value) {
    var _nd = new Date();
    dateEl.value = _nd.getFullYear() + '-' + String(_nd.getMonth() + 1).padStart(2, '0') + '-' + String(_nd.getDate()).padStart(2, '0');
  }
  // Init sub select + chips
  updateNoteSubSelect();
  // Populate day filter
  setTimeout(populateDayFilter, 50);
  // Render list
  renderNotesList();
}


// ══════════════════════════════════════════════════════════════════
// AMÉLIORATION 1 — MODIFIER UN Mصروف (Edit Note)
// ══════════════════════════════════════════════════════════════════
let _editNoteMk = null, _editNoteIdx = null;

function openEditNoteModal(mk, idx) {
  _editNoteMk = mk; _editNoteIdx = idx;
  const n = allData[mk].notes[idx];
  const t = T();
  // Labels
  const el = document.getElementById('el-date'); if (el) el.textContent = t.nt_date || 'التاريخ';
  const elc = document.getElementById('el-cat'); if (elc) elc.textContent = t.nt_cat || 'الفئة';
  const els = document.getElementById('el-sub'); if (els) els.textContent = t.nt_subcat || 'الخيار';
  const ela = document.getElementById('el-amount'); if (ela) ela.textContent = t.nt_amount || 'المبلغ';
  const elp = document.getElementById('el-person'); if (elp) elp.textContent = t.person;
  const elr = document.getElementById('el-remark'); if (elr) elr.textContent = t.nt_remark || 'الملاحظة';
  // Values
  const dateEl = document.getElementById('edit-note-date');
  if (dateEl) dateEl.value = n.date || '';
  const amtEl = document.getElementById('edit-note-amount');
  if (amtEl) amtEl.value = n.amount || 0;
  const remEl = document.getElementById('edit-note-remark');
  if (remEl) remEl.value = n.remark || '';
  const personEl = document.getElementById('edit-note-person');
  if (personEl) { personEl.innerHTML = ''; FAMILY_MEMBERS.forEach(function (p) { const o = document.createElement('option'); o.value = p.id; o.textContent = personLabel(p.id); personEl.appendChild(o); }); personEl.value = n.person || 'family'; }
  // Category select
  const catSel = document.getElementById('edit-note-cat');
  if (catSel) {
    catSel.innerHTML = '';
    getMainCats().forEach(function (mc) {
      const opt = document.createElement('option');
      opt.value = mc.id; opt.textContent = mc.icon + ' ' + mc.label;
      if (mc.id === n.mainCat) opt.selected = true;
      catSel.appendChild(opt);
    });
    editNoteUpdateSubs(n.subCat);
  }
  document.getElementById('editNoteModal').classList.add('open');
}

function editNoteUpdateSubs(selectedSub) {
  const catSel = document.getElementById('edit-note-cat');
  const subSel = document.getElementById('edit-note-sub');
  if (!catSel || !subSel) return;
  const mc = getMainCats().find(function (x) { return x.id === catSel.value; });
  subSel.innerHTML = '';
  if (mc) {
    mc.subs.forEach(function (s) {
      const opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      if (s === selectedSub) opt.selected = true;
      subSel.appendChild(opt);
    });
    // La valeur réelle du produit (ex: venant de WhatsApp Express) peut ne pas
    // figurer dans la liste figée mc.subs. Dans ce cas on l'ajoute dynamiquement
    // en tête de liste et on la sélectionne, pour ne jamais écraser silencieusement
    // le vrai nom du produit lors de l'enregistrement.
    if (selectedSub && !mc.subs.includes(selectedSub)) {
      const opt = document.createElement('option');
      opt.value = selectedSub; opt.textContent = selectedSub;
      opt.selected = true;
      subSel.insertBefore(opt, subSel.firstChild);
    }
  }
}

function closeEditNoteModal() {
  document.getElementById('editNoteModal').classList.remove('open');
  _editNoteMk = null; _editNoteIdx = null;
}

function saveEditNote() {
  if (!ensureMonthEditable(_editNoteMk || ck())) return;
  if (_editNoteMk === null || _editNoteIdx === null) return;
  const n = allData[_editNoteMk].notes[_editNoteIdx];
  const newDate = document.getElementById('edit-note-date').value;
  const newAmt = Number(document.getElementById('edit-note-amount').value) || 0;
  const newCat = document.getElementById('edit-note-cat').value;
  const newSub = document.getElementById('edit-note-sub').value;
  const newRem = document.getElementById('edit-note-remark').value.trim();
  const newPerson = document.getElementById('edit-note-person').value || 'family';
  if (!newDate || newAmt <= 0) { showToast('❌ تحقق من القيم'); return; }
  // If date changed → move to new month key
  const newMk = newDate.slice(0, 7);
  const existingChips = (n.chips && n.chips.length) ? n.chips : [newSub];
  if (newMk !== _editNoteMk) {
    allData[_editNoteMk].notes.splice(_editNoteIdx, 1);
    if (!allData[newMk]) allData[newMk] = defMonth();
    if (!allData[newMk].notes) allData[newMk].notes = [];
    allData[newMk].notes.push({ date: newDate, mainCat: newCat, subCat: newSub, note: newSub, cat: newSub, chips: existingChips, amount: newAmt, remark: newRem, person: newPerson });
  } else {
    n.date = newDate; n.amount = newAmt; n.mainCat = newCat; n.subCat = newSub; n.note = newSub; n.cat = newSub; n.remark = newRem; n.person = newPerson; n.chips = existingChips;
  }
  closeEditNoteModal();
  persistData(); renderNotesTab(); renderExpensesCats(); recalc();
  showToast('✅ ' + (T().toast_add || 'تم الحفظ'));
}

// ══════════════════════════════════════════════════════════════════
// AMÉLIORATION 2 — FAB (QUICK ADD FLOATING BUTTON)
// ══════════════════════════════════════════════════════════════════
function fabQuickAdd() {
  // Switch to notes tab and focus amount field
  const notesTab = document.querySelector('.nav-tab:nth-child(2)');
  if (notesTab) showTab('notes', notesTab);
  setTimeout(function () {
    const amt = document.getElementById('nf-amount');
    if (amt) { amt.focus(); amt.select(); }
  }, 100);
}

function updateFabVisibility() {
  const dock = document.getElementById('fab-dock');
  if (!dock) return;
  const landing = document.getElementById('landing-page');
  const isLandingVisible = landing && landing.style.display !== 'none';
  dock.style.display = isLandingVisible ? 'none' : 'flex';
}

// ══════════════════════════════════════════════════════════════════
// AMÉLIORATION 3 — BUDGET LIMITS PAR CATÉGORIE
// ══════════════════════════════════════════════════════════════════
const BUDGET_KEY = 'sf_budgets';

function getBudgetLimits() {
  try { return JSON.parse(localStorage.getItem(BUDGET_KEY) || '{}'); } catch (e) { return {}; }
}

function saveBudgetLimits() {
  if (!ensureMonthEditable()) return;
  const limits = {};
  document.querySelectorAll('.bl-input').forEach(function (inp) {
    const cat = inp.dataset.cat;
    const val = Number(inp.value) || 0;
    if (cat && val > 0) limits[cat] = val;
  });
  localStorage.setItem(BUDGET_KEY, JSON.stringify(limits));
  closeModal('budgetModal');
  showToast('✅ تم حفظ الميزانية');
  recalc();
  renderWeeklyTab();
}

function openBudgetModal() {
  const limits = getBudgetLimits();
  const list = document.getElementById('budget-limits-list');
  if (!list) return;
  list.innerHTML = '';
  getMainCats().forEach(function (mc) {
    const row = document.createElement('div');
    row.className = 'budget-limit-row';
    const lim = limits[mc.id] || 0;
    row.innerHTML = '<div class="bl-cat"><span style="font-size:16px;">' + mc.icon + '</span><span>' + mc.label + '</span></div>'
      + '<div style="display:flex;align-items:center;gap:6px;"><span style="font-size:9px;color:var(--light);">' + currency + '</span><input class="bl-input" type="number" min="0" data-cat="' + mc.id + '" value="' + (lim || '') + '" placeholder="—"></div>';
    list.appendChild(row);
  });
  openModal('budgetModal');
}

function getCatSpentThisMonth(catId) {
  var mk = ck();
  var total = 0;
  ((allData[mk] || {}).notes || []).forEach(function (n) {
    if (n.mainCat === catId) total += Number(n.amount || 0);
  });
  return total;
}

function renderBudgetWarnings() {
  const limits = getBudgetLimits();
  // Inject warning badges into pills
  document.querySelectorAll('.notes-pill').forEach(function (pill) {
    pill.querySelectorAll('.budget-warn-badge').forEach(function (b) { b.remove(); });
  });
  getMainCats().forEach(function (mc) {
    const lim = limits[mc.id];
    if (!lim) return;
    const spent = getCatSpentThisMonth(mc.id);
    const pct = spent / lim;
    const badge = document.createElement('span');
    badge.className = 'budget-warn-badge ' + (pct >= 1 ? 'over' : pct >= 0.8 ? 'warn' : 'ok');
    badge.textContent = pct >= 1 ? 'تجاوز!' : Math.round(pct * 100) + '%';
    // Find matching pill
    document.querySelectorAll('.notes-pill').forEach(function (p) {
      if (p.textContent.includes(mc.icon)) { p.appendChild(badge); }
    });
  });
}

// ══════════════════════════════════════════════════════════════════
// AMÉLIORATION 4 — STATISTIQUES HEBDOMADAIRES
// ══════════════════════════════════════════════════════════════════
function populateStatsMonthFilter() {
  const sel = document.getElementById('stats-month-filter'); if (!sel) return ck();
  const previous = sel.value;
  const keys = new Set([ck()]);
  Object.keys(allData).forEach(function (k) { if (/^\d{4}-\d{2}$/.test(k)) keys.add(k); });
  sel.innerHTML = '';
  Array.from(keys).sort().reverse().forEach(function (k) {
    const p = k.split('-'), opt = document.createElement('option');
    opt.value = k; opt.textContent = (T().months[Number(p[1]) - 1] || p[1]) + ' ' + p[0]; sel.appendChild(opt);
  });
  sel.value = keys.has(previous) ? previous : ck();
  return sel.value;
}

function normalizedProductName(note) {
  let value = ((note.chips && note.chips.length) ? note.chips.join(' + ') : (note.subCat || note.note || '')).trim();
  value = value.replace(/^[^ ]+ /, '');
  const aliases = [
    [/\b(garo|gارو|كارو)\b|علبة تبغ/i, 'علبة تبغ'], [/\b(cafe|café)\b|قهوة/i, 'قهوة كحلة'],
    [/\b(ftor|petit.?d[eé]j)\b|فطور/i, 'فطور كومبلي'], [/\b(khobz|pain)\b|خبز/i, 'خبز'],
    [/\b(danon|yaourt)\b|دانون/i, 'دانون'], [/\b(hlib|lait)\b|حليب/i, 'حليب'],
    [/\b(savon vaisselle|liquide vaisselle)\b|سائل أواني/i, 'سائل أواني'],
    [/\b(oulways|always)\b|فوط صحية/i, 'فوط صحية/Always'],
    [/\b(monada|limonade|soda)\b|مشروب غازي/i, 'مشروب غازي'],
    [/\b(polo|bonbons?)\b|حلويات/i, 'حلويات/بولو'], [/\b(zbib|raisins?)\b|عنب/i, 'عنب'],
    [/\b(noravit|vitamines?)\b|فيتامينات/i, 'فيتامينات']
  ];
  aliases.some(function (rule) { if (rule[0].test(value)) { value = rule[1]; return true; } return false; });
  return value || T().stats_no_data;
}

function renderWeeklyTab() {
  const panel = document.getElementById('tab-weekly');
  if (!panel || !panel.classList.contains('active')) return;

  const mk = populateStatsMonthFilter();
  const notes = [];
  Object.keys(allData).forEach(function (k) {
    ((allData[k] || {}).notes || []).forEach(function (n) { notes.push(n); });
  });
  const allMonthNotes = ((allData[mk] || {}).notes) || [];
  const statsPersonEl = document.getElementById('stats-person-filter');
  const statsPerson = statsPersonEl ? statsPersonEl.value : '';
  const monthNotes = statsPerson ? allMonthNotes.filter(function (n) { return (n.person || 'family') === statsPerson; }) : allMonthNotes;

  // Current week bounds
  const parts = mk.split('-');
  const now = (mk === ck() ? new Date() : new Date(Number(parts[0]), Number(parts[1]), 0));
  const dow = now.getDay();
  const weekStart = new Date(now); weekStart.setDate(now.getDate() - dow); weekStart.setHours(0, 0, 0, 0);
  const weekEnd = new Date(weekStart); weekEnd.setDate(weekStart.getDate() + 6); weekEnd.setHours(23, 59, 59, 999);

  function inWeek(d) { const dt = new Date(d); return dt >= weekStart && dt <= weekEnd; }
  function todayKey() { return now.toISOString().slice(0, 10); }

  const weekNotes = monthNotes.filter(function (n) { return n.date && inWeek(n.date); });
  const todayNotes = monthNotes.filter(function (n) { return n.date === todayKey(); });
  const weekTotal = weekNotes.reduce(function (s, n) { return s + Number(n.amount || 0); }, 0);
  const todayTotal = todayNotes.reduce(function (s, n) { return s + Number(n.amount || 0); }, 0);
  const monthTotal = monthNotes.reduce(function (s, n) { return s + Number(n.amount || 0); }, 0);
  const daysInMonth = new Date(Number(parts[0]), Number(parts[1]), 0).getDate();
  const activeDays = new Set(monthNotes.map(function (n) { return n.date; })).size;
  const daysPassed = Math.max(1, activeDays);
  const dailyAvg = Math.round(monthTotal / daysPassed);
  const weekAvg = Math.round(weekTotal / Math.max(1, weekNotes.length ? 7 : 1));

  // Stats grid
  const grid = document.getElementById('weekly-stats-grid');
  if (grid) {
    const _wdn = lang === 'fr' ? ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'] : lang === 'en' ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] : lang === 'es' ? ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'] : ['أح', 'اث', 'ثل', 'أر', 'خم', 'جم', 'سب'];
    const discretionary = monthNotes.filter(function (n) { return ['cafe_smoke', 'fun'].includes(n.mainCat); }).reduce(function (s, n) { return s + Number(n.amount || 0); }, 0);
    const _wlbls = lang === 'fr' ? ['Dépenses saisies', 'Jours suivis', 'Moy. par jour', 'Loisirs / extras'] : ['المصاريف المسجلة', 'أيام مسجلة', 'متوسط يومي', 'الكماليات'];
    grid.innerHTML = [
      { val: fmt(monthTotal), lbl: _wlbls[0] },
      { val: activeDays, lbl: _wlbls[1] },
      { val: fmt(dailyAvg), lbl: _wlbls[2] },
      { val: fmt(discretionary), lbl: _wlbls[3] }
    ].map(function (s) {
      return '<div class="weekly-stat"><div class="weekly-stat-val">' + s.val + '</div><div class="weekly-stat-lbl">' + s.lbl + '</div><div style="font-size:9px;color:var(--light);">' + currency + '</div></div>';
    }).join('');
  }

  const productTotals = {}, productCounts = {};
  monthNotes.forEach(function (n) {
    const product = normalizedProductName(n);
    productTotals[product] = (productTotals[product] || 0) + Number(n.amount || 0);
    productCounts[product] = (productCounts[product] || 0) + 1;
  });
  const ranked = Object.keys(productTotals).sort(function (a, b) { return productTotals[b] - productTotals[a]; });
  const productsEl = document.getElementById('stats-products');
  if (productsEl) productsEl.innerHTML = ranked.slice(0, 5).map(function (p) {
    return '<div class="stats-row"><span>' + (lang === 'fr' ? (NOTE_CHIPS_FR[p] || p) : p) + ' · ' + productCounts[p] + ' ' + T().stats_entries + '</span><strong>' + fmt(productTotals[p]) + ' ' + currency + '</strong></div>';
  }).join('') || '<div class="stats-empty">' + T().stats_no_data + '</div>';
  const leaks = ranked.filter(function (p) {
    return monthNotes.some(function (n) { return normalizedProductName(n) === p && ['cafe_smoke', 'fun'].includes(n.mainCat); }) || productCounts[p] >= 6;
  }).slice(0, 4);
  const leaksEl = document.getElementById('stats-leaks');
  if (leaksEl) leaksEl.innerHTML = leaks.map(function (p) {
    return '<div class="stats-row"><span>' + (lang === 'fr' ? (NOTE_CHIPS_FR[p] || p) : p) + ' · ' + productCounts[p] + '×</span><strong>' + fmt(productTotals[p]) + ' ' + currency + '</strong></div>';
  }).join('') || '<div class="stats-empty">' + T().stats_no_data + '</div>';
  const actionsEl = document.getElementById('stats-actions');
  if (actionsEl) {
    const saving = leaks.length ? Math.round(productTotals[leaks[0]] * .25) : 0;
    actionsEl.innerHTML = '<div class="stats-action">1. ' + T().stats_reduce + (saving ? ' — ≈ ' + fmt(saving) + ' ' + currency : '') + '</div>'
      + '<div class="stats-action">2. ' + T().stats_repeat + '</div><div class="stats-action">3. ' + T().stats_budget + '</div>';
  }
  const familyTotals = {};
  allMonthNotes.forEach(function (n) { const id = n.person || 'family'; familyTotals[id] = (familyTotals[id] || 0) + Number(n.amount || 0); });
  const familyEl = document.getElementById('stats-family');
  if (familyEl) familyEl.innerHTML = FAMILY_MEMBERS.filter(function (p) { return familyTotals[p.id] > 0; }).sort(function (a, b) { return familyTotals[b.id] - familyTotals[a.id]; }).map(function (p) {
    const pct = monthTotal ? Math.round(familyTotals[p.id] / allMonthNotes.reduce(function (s, n) { return s + Number(n.amount || 0); }, 0) * 100) : 0;
    return '<div class="stats-row"><span>👤 ' + personLabel(p.id) + ' · ' + pct + '%</span><strong>' + fmt(familyTotals[p.id]) + ' ' + currency + '</strong></div>';
  }).join('') || '<div class="stats-empty">' + T().stats_no_data + '</div>';

  // Weekly bar chart (7 days)
  const bars = document.getElementById('weekly-bars-chart');
  if (bars) {
    bars.innerHTML = '';
    const dayNames7 = lang === 'fr' ? ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'] : lang === 'en' ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] : lang === 'es' ? ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'] : ['أح', 'اث', 'ثل', 'أر', 'خم', 'جم', 'سب'];
    const dayTotals = Array.from({ length: 7 }, function (_, i) {
      const d = new Date(weekStart); d.setDate(weekStart.getDate() + i);
      const dk = d.toISOString().slice(0, 10);
      return monthNotes.filter(function (n) { return n.date === dk; }).reduce(function (s, n) { return s + Number(n.amount || 0); }, 0);
    });
    const maxVal = Math.max.apply(null, dayTotals.concat([1]));
    dayTotals.forEach(function (val, i) {
      const isToday = (i === dow);
      const pct = Math.max(4, Math.round((val / maxVal) * 100));
      const item = document.createElement('div');
      item.className = 'wbar-item' + (isToday ? ' today' : '');
      const color = isToday ? 'var(--mint)' : 'var(--lav)';
      item.innerHTML = '<div class="wbar-val">' + (val > 0 ? fmt(val) : '') + '</div>'
        + '<div class="wbar-fill" style="height:' + pct + '%;background:' + color + ';"></div>'
        + '<div class="wbar-lbl">' + dayNames7[i] + '</div>';
      bars.appendChild(item);
    });
  }

  // Category breakdown bars
  const catBars = document.getElementById('weekly-cat-bars');
  if (catBars) {
    catBars.innerHTML = '';
    const limits = getBudgetLimits();
    const byCat = {};
    monthNotes.forEach(function (n) {
      const mc = getMainCats().find(function (x) { return x.id === n.mainCat; }) || getMainCats()[0];
      byCat[mc.id] = (byCat[mc.id] || { total: 0, icon: mc.icon, label: mc.label, color: CAT_COLOR[mc.id] || 'var(--mint)', id: mc.id });
      byCat[mc.id].total += Number(n.amount || 0);
    });
    const maxCat = Math.max.apply(null, Object.values(byCat).map(function (v) { return v.total; }).concat([1]));
    Object.values(byCat).sort(function (a, b) { return b.total - a.total; }).forEach(function (v) {
      const pct = Math.round(v.total / maxCat * 100);
      const lim = limits[v.id];
      const limPct = lim ? Math.min(100, Math.round(v.total / lim * 100)) : null;
      const warnCls = lim ? (limPct >= 100 ? 'over' : limPct >= 80 ? 'warn' : 'ok') : null;
      const warnTxt = lim ? (lang === 'fr' ? (limPct >= 100 ? '⚠️ Plafond dépassé' : limPct >= 80 ? '⚠️ Proche du plafond' : '✅ Dans le budget') : (limPct >= 100 ? '⚠️ تجاوز الحد' : limPct >= 80 ? '⚠️ قريب من الحد' : '✅ ضمن الميزانية')) : '';
      const row = document.createElement('div');
      row.style.cssText = 'margin-bottom:10px;';
      row.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">'
        + '<span style="font-size:13px;font-weight:600;">' + v.icon + ' ' + v.label + '</span>'
        + '<div style="display:flex;align-items:center;gap:8px;">'
        + (warnCls ? '<span class="budget-warn-badge ' + warnCls + '">' + warnTxt + '</span>' : '')
        + '<span style="font-size:13px;font-family:DM Mono,monospace;font-weight:700;">' + fmt(v.total) + ' ' + currency + '</span>'
        + (lim ? '<span style="font-size:9px;color:var(--light);">/ ' + fmt(lim) + '</span>' : '')
        + '</div></div>'
        + '<div style="height:7px;background:var(--border);border-radius:4px;overflow:hidden;">'
        + '<div style="width:' + pct + '%;background:' + v.color + ';height:100%;border-radius:4px;transition:width .5s;"></div></div>';
      catBars.appendChild(row);
    });
    if (!Object.keys(byCat).length) {
      catBars.innerHTML = '<div style="padding:20px;text-align:center;color:var(--light);font-size:12px;">' + (lang === 'fr' ? 'Aucune donnée ce mois' : lang === 'en' ? 'No data this month' : lang === 'es' ? 'Sin datos este mes' : 'لا توجد بيانات هذا الشهر') + '</div>';
    }
  }
}

// ══════════════════════════════════════════════════════════════════
// AMÉLIORATION 5 — PDF EXPORT
// ══════════════════════════════════════════════════════════════════
function exportPDF() {
  const mk = ck();
  const t = T();
  const monthNotes = ((allData[mk] || {}).notes) || [];
  const monthData = allData[mk] || {};

  // Group notes by date
  const byDate = {};
  monthNotes.forEach(function (n) {
    if (!byDate[n.date]) byDate[n.date] = [];
    byDate[n.date].push(n);
  });

  // Compute totals
  const totalInc = (monthData.income || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  const totalBills = (monthData.bills || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  const totalExp = (monthData.expenses || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  const totalNotes = monthNotes.reduce(function (s, n) { return s + Number(n.amount || 0); }, 0);
  const totalSav = (monthData.savings || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  const totalDbt = (monthData.debts || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  const monthLabel = (t.months || [])[curMonth] || ('شهر ' + (curMonth + 1));

  let rows = '';
  Object.keys(byDate).sort().reverse().forEach(function (date) {
    byDate[date].forEach(function (n) {
      const mc = getMainCats().find(function (x) { return x.id === n.mainCat; }) || { icon: '💰', label: n.mainCat || '' };
      var pdfSub = (n.chips && n.chips.length > 0) ? n.chips.map(function (s) { return s.replace(/^[^ ]+ /, ''); }).join(' + ') : (n.subCat || n.note || '');
      rows += '<tr><td>' + date + '</td><td>' + mc.icon + ' ' + mc.label + '</td><td>' + pdfSub + '</td><td>' + (n.remark || '—') + '</td><td style="text-align:left;font-weight:700;">' + fmt(n.amount) + ' ' + currency + '</td></tr>';
    });
  });

  const html = '<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"><title>تقرير ' + monthLabel + ' ' + curYear + '</title>'
    + '</head><body>'
    + '<div class="header"><div><div class="sub">تقرير شهري — تدبير Tadbir</div><h1>' + monthLabel + ' ' + curYear + '</h1></div>'
    + '<div style="text-align:left;"><div style="font-size:28px;font-weight:800;color:#7EC8B0;">' + fmt(totalNotes) + ' ' + currency + '</div><div class="sub">إجمالي المصاريف المسجلة</div></div></div>'
    + '<div class="kpis">'
    + '<div class="kpi"><div class="kpi-lbl">💵 الدخل</div><div class="kpi-val" style="color:#A8C5A0;">' + fmt(totalInc) + ' ' + currency + '</div></div>'
    + '<div class="kpi"><div class="kpi-lbl">🧾 الفواتير</div><div class="kpi-val" style="color:#E8A598;">' + fmt(totalBills) + ' ' + currency + '</div></div>'
    + '<div class="kpi"><div class="kpi-lbl">🛒 المصاريف</div><div class="kpi-val" style="color:#B5A8D4;">' + fmt(totalExp + totalNotes) + ' ' + currency + '</div></div>'
    + '<div class="kpi"><div class="kpi-lbl">🏦 التوفير</div><div class="kpi-val" style="color:#8DB4CF;">' + fmt(totalSav) + ' ' + currency + '</div></div>'
    + '<div class="kpi"><div class="kpi-lbl">💳 الديون</div><div class="kpi-val" style="color:#D4A853;">' + fmt(totalDbt) + ' ' + currency + '</div></div>'
    + '<div class="kpi"><div class="kpi-lbl">✅ الباقي</div><div class="kpi-val" style="color:#7EC8B0;">' + fmt(totalInc - totalBills - totalExp - totalNotes - totalSav - totalDbt) + ' ' + currency + '</div></div>'
    + '</div>'
    + '<table><thead><tr><th>التاريخ</th><th>الفئة</th><th>التفصيل</th><th>ملاحظة</th><th>المبلغ</th></tr></thead><tbody>'
    + rows
    + '<tr class="total-row"><td colspan="4">إجمالي سجل المصاريف</td><td style="text-align:left;">' + fmt(totalNotes) + ' ' + currency + '</td></tr>'
    + '</tbody></table>'
    + '<div class="footer">Créé par BELMOUFADAL Abderrahim — Tadbir v4.4.4 — ' + new Date().toLocaleDateString() + '</div>'
    + '</body></html>';

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'تدبير-' + monthLabel + '-' + curYear + '.html';
  a.click();
  URL.revokeObjectURL(url);
  closeModal('backupModal');
  showToast('📄 جاهز للطباعة');
}

// ══════════════════════════════════════════════════════════════════
// AMÉLIORATION 6 — OFFLINE DETECTION
// ══════════════════════════════════════════════════════════════════
function initOfflineDetection() {
  function updateOnlineStatus() {
    const banner = document.getElementById('offline-banner');
    if (banner) banner.classList.toggle('show', !navigator.onLine);
  }
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

// ══════════════════════════════════════════════════════════════════
// AMÉLIORATION 7 — DAILY REMINDER (badge sur onglet)
// ══════════════════════════════════════════════════════════════════
function checkDailyReminder() {
  const mk = ck();
  const today = new Date().toISOString().slice(0, 10);
  const notes = ((allData[mk] || {}).notes) || [];
  const hasTodayEntry = notes.some(function (n) { return n.date === today; });
  // Update page title
  if (!hasTodayEntry && _fbUid) {
    document.title = '💰 تدبير — لم تسجل مصاريف اليوم';
  } else {
    document.title = 'تدبير';
  }
}


// ══════════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════════
// EXPORT EXCEL — XLSX natif multi-sheets (SheetJS)
// Génère un vrai .xlsx identique au format exporté manuellement
// ══════════════════════════════════════════════════════════════════

function exportExcel() {
  try { _buildXLSX(); }
  catch (e) { console.error(e); showToast('❌ خطأ: ' + e.message); }
}

// ── helpers styles ──
function _hStyle(bg, bold, align, fgColor) {
  return {
    fill: { patternType: 'solid', fgColor: { rgb: bg || '1D6F42' } },
    font: { bold: !!bold, color: { rgb: fgColor || 'FFFFFF' }, name: 'Tajawal', sz: 11 },
    alignment: { horizontal: align || 'right', vertical: 'center', wrapText: true },
    border: { bottom: { style: 'thin', color: { rgb: 'CCCCCC' } } }
  };
}
function _cStyle(bg, bold, align, numFmt) {
  var s = {
    fill: { patternType: 'solid', fgColor: { rgb: bg || 'FFFFFF' } },
    font: { bold: !!bold, name: 'Tajawal', sz: 10 },
    alignment: { horizontal: align || 'right', vertical: 'center' },
    border: { bottom: { style: 'hair', color: { rgb: 'EEEEEE' } }, right: { style: 'hair', color: { rgb: 'EEEEEE' } } }
  };
  if (numFmt) s.numFmt = numFmt;
  return s;
}
function _titleStyle() {
  return {
    fill: { patternType: 'solid', fgColor: { rgb: '0D1B2A' } },
    font: { bold: true, name: 'Tajawal', sz: 14, color: { rgb: '4ECDC4' } },
    alignment: { horizontal: 'center', vertical: 'center' }
  };
}
function _subTitleStyle() {
  return {
    fill: { patternType: 'solid', fgColor: { rgb: '1A2E3A' } },
    font: { bold: true, name: 'Tajawal', sz: 11, color: { rgb: 'AAAAAA' } },
    alignment: { horizontal: 'center', vertical: 'center' }
  };
}
function _totalStyle() {
  return {
    fill: { patternType: 'solid', fgColor: { rgb: 'E8F5E9' } },
    font: { bold: true, name: 'Tajawal', sz: 10, color: { rgb: '1D6F42' } },
    alignment: { horizontal: 'right', vertical: 'center' },
    border: { top: { style: 'medium', color: { rgb: '1D6F42' } }, bottom: { style: 'medium', color: { rgb: '1D6F42' } } }
  };
}

function _makeCell(v, style) {
  var t = 's';
  if (typeof v === 'number') t = 'n';
  return { v: v, t: t, s: style };
}

function _setRange(ws, r, c, cell) {
  if (!ws['!ref']) { ws['!ref'] = 'A1:A1'; }
  var enc = XLSX.utils.encode_cell({ r: r, c: c });
  ws[enc] = cell;
  // Update range
  var range = XLSX.utils.decode_range(ws['!ref']);
  if (r < range.s.r) range.s.r = r;
  if (c < range.s.c) range.s.c = c;
  if (r > range.e.r) range.e.r = r;
  if (c > range.e.c) range.e.c = c;
  ws['!ref'] = XLSX.utils.encode_range(range);
}

function _merge(ws, r1, c1, r2, c2) {
  if (!ws['!merges']) ws['!merges'] = [];
  ws['!merges'].push({ s: { r: r1, c: c1 }, e: { r: r2, c: c2 } });
}

function _buildXLSX() {
  var mk = ck();
  var t = T();
  var monthLabel = (t.months || [])[curMonth] || ('M' + (curMonth + 1));
  var md = allData[mk] || {};
  var monthNotes = (md.notes) || [];

  var totalNotes = monthNotes.reduce(function (s, n) { return s + Number(n.amount || 0); }, 0);
  var totalInc = (md.income || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  var totalBills = (md.bills || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  var totalExp = (md.expenses || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  var totalSav = (md.savings || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  var totalDbt = (md.debts || []).reduce(function (s, r) { return s + Number(r.act || 0); }, 0);
  var remBalance = totalInc - totalBills - totalNotes - totalSav - totalDbt;

  function dispChips(n) {
    return (n.chips && n.chips.length > 0)
      ? n.chips.map(function (s) { return s.replace(/^[^ ]+ /, ''); }).join(' + ')
      : (n.subCat || n.note || '');
  }

  var byCat = {};
  monthNotes.forEach(function (n) {
    var mc = getMainCats().find(function (x) { return x.id === n.mainCat; }) || { label: n.mainCat || 'أخرى' };
    byCat[mc.label] = (byCat[mc.label] || 0) + Number(n.amount || 0);
  });

  var wb = XLSX.utils.book_new();
  var baseTitle = 'تدبير | Tadbir — تقرير ' + monthLabel + ' ' + curYear;
  var credit = 'Créé par BELMOUFADAL Abderrahim — Tadbir v4.4.4';

  // ══════════════════════════════
  // SHEET 1 — الملخص الشهري
  // ══════════════════════════════
  (function () {
    var ws = {};
    var r = 0;

    // Title row
    _setRange(ws, r, 0, _makeCell(baseTitle, _titleStyle()));
    _setRange(ws, r, 1, _makeCell('', _titleStyle()));
    _setRange(ws, r, 2, _makeCell('', _titleStyle()));
    _setRange(ws, r, 3, _makeCell('', _titleStyle()));
    _merge(ws, r, 0, r, 3);
    r++;

    _setRange(ws, r, 0, _makeCell(credit, _subTitleStyle()));
    _setRange(ws, r, 1, _makeCell('', _subTitleStyle()));
    _setRange(ws, r, 2, _makeCell('', _subTitleStyle()));
    _setRange(ws, r, 3, _makeCell('', _subTitleStyle()));
    _merge(ws, r, 0, r, 3);
    r++;

    // Section header
    _setRange(ws, r, 0, _makeCell('📊 الملخص الشهري — ' + monthLabel + ' ' + curYear, _hStyle('1D6F42', true, 'center')));
    _setRange(ws, r, 1, _makeCell('', _hStyle('1D6F42', true, 'center')));
    _setRange(ws, r, 2, _makeCell('', _hStyle('1D6F42', true, 'center')));
    _setRange(ws, r, 3, _makeCell('', _hStyle('1D6F42', true, 'center')));
    _merge(ws, r, 0, r, 3);
    r++;

    // Column headers
    ['البند', 'المبلغ', 'العملة', ''].forEach(function (h, c) {
      _setRange(ws, r, c, _makeCell(h, _hStyle('2E7D32', true, 'right', 'FFFFFF')));
    });
    r++;

    var summary = [
      ['💵 الدخل الإجمالي', totalInc, currency],
      ['🧾 الفواتير الثابتة', totalBills, currency],
      ['🛒 سجل المصاريف', totalNotes, currency],
      ['🏦 التوفير', totalSav, currency],
      ['💳 الديون', totalDbt, currency],
      ['✅ الرصيد المتبقي', remBalance, currency],
    ];
    var altBg = ['F9FBF9', 'FFFFFF'];
    summary.forEach(function (row, i) {
      var bg = altBg[i % 2];
      var isBal = (i === summary.length - 1);
      _setRange(ws, r, 0, _makeCell(row[0], isBal ? _totalStyle() : _cStyle(bg, false, 'right')));
      _setRange(ws, r, 1, _makeCell(row[1], isBal ? _totalStyle() : _cStyle(bg, false, 'right', '#,##0')));
      _setRange(ws, r, 2, _makeCell(row[2], isBal ? _totalStyle() : _cStyle(bg, false, 'right')));
      _setRange(ws, r, 3, _makeCell('', isBal ? _totalStyle() : _cStyle(bg)));
      r++;
    });

    r++; // blank
    // Category breakdown header
    _setRange(ws, r, 0, _makeCell('📂 توزيع المصاريف حسب الفئة', _hStyle('1D6F42', true, 'center')));
    _setRange(ws, r, 1, _makeCell('', _hStyle('1D6F42', true, 'center')));
    _setRange(ws, r, 2, _makeCell('', _hStyle('1D6F42', true, 'center')));
    _setRange(ws, r, 3, _makeCell('', _hStyle('1D6F42', true, 'center')));
    _merge(ws, r, 0, r, 3);
    r++;

    ['الفئة', 'المبلغ (' + currency + ')', '% من الإجمالي', 'الملاحظة'].forEach(function (h, c) {
      _setRange(ws, r, c, _makeCell(h, _hStyle('2E7D32', true, 'right', 'FFFFFF')));
    });
    r++;

    var sortedCat = Object.entries(byCat).sort(function (a, b) { return b[1] - a[1]; });
    var grandTotal = sortedCat.reduce(function (s, e) { return s + e[1]; }, 0) || 1;
    sortedCat.forEach(function (e, i) {
      var bg = altBg[i % 2];
      _setRange(ws, r, 0, _makeCell(e[0], _cStyle(bg, false, 'right')));
      _setRange(ws, r, 1, _makeCell(e[1], _cStyle(bg, false, 'right', '#,##0')));
      _setRange(ws, r, 2, _makeCell(Math.round(e[1] / grandTotal * 1000) / 1000, _cStyle(bg, false, 'right', '0.0%')));
      _setRange(ws, r, 3, _makeCell('', _cStyle(bg)));
      r++;
    });
    // total row
    _setRange(ws, r, 0, _makeCell('📌 الإجمالي', _totalStyle()));
    _setRange(ws, r, 1, _makeCell(grandTotal, _totalStyle()));
    _setRange(ws, r, 2, _makeCell(1, Object.assign({}, _totalStyle(), { numFmt: '0%' })));
    _setRange(ws, r, 3, _makeCell(currency, _totalStyle()));
    r++;

    ws['!cols'] = [{ wch: 28 }, { wch: 14 }, { wch: 14 }, { wch: 14 }];
    ws['!rows'] = [{ hpt: 24 }, { hpt: 18 }, { hpt: 22 }];
    ws['!rtl'] = true;
    XLSX.utils.book_append_sheet(wb, ws, 'الملخص الشهري');
  })();

  // ══════════════════════════════
  // SHEET 2 — دفتر المصاريف
  // ══════════════════════════════
  (function () {
    var ws = {};
    var r = 0;

    _setRange(ws, r, 0, _makeCell('📒 دفتر المصاريف — ' + monthLabel + ' ' + curYear, _titleStyle()));
    ['', '', '', ''].forEach(function (_, c) { if (c > 0) _setRange(ws, r, c, _makeCell('', _titleStyle())); });
    _merge(ws, r, 0, r, 4);
    r++;

    ['التاريخ', 'الفئة', 'المشتريات', 'المبلغ', 'العملة'].forEach(function (h, c) {
      _setRange(ws, r, c, _makeCell(h, _hStyle('1D6F42', true, 'right')));
    });
    r++;

    var sorted = monthNotes.slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
    var alt = ['F9FBF9', 'FFFFFF'];
    sorted.forEach(function (n, i) {
      var mc = getMainCats().find(function (x) { return x.id === n.mainCat; }) || { label: n.mainCat || '' };
      var bg = alt[i % 2];
      _setRange(ws, r, 0, _makeCell(n.date || '', _cStyle(bg, false, 'center')));
      _setRange(ws, r, 1, _makeCell(mc.label, _cStyle(bg)));
      _setRange(ws, r, 2, _makeCell(dispChips(n), _cStyle(bg)));
      _setRange(ws, r, 3, _makeCell(Number(n.amount || 0), _cStyle(bg, false, 'right', '#,##0')));
      _setRange(ws, r, 4, _makeCell(currency, _cStyle(bg, false, 'center')));
      r++;
    });
    // Total
    _setRange(ws, r, 0, _makeCell('', _totalStyle()));
    _setRange(ws, r, 1, _makeCell('', _totalStyle()));
    _setRange(ws, r, 2, _makeCell('📌 الإجمالي', _totalStyle()));
    _setRange(ws, r, 3, _makeCell(totalNotes, _totalStyle()));
    _setRange(ws, r, 4, _makeCell(currency, _totalStyle()));

    ws['!cols'] = [{ wch: 14 }, { wch: 22 }, { wch: 30 }, { wch: 12 }, { wch: 10 }];
    ws['!rtl'] = true;
    XLSX.utils.book_append_sheet(wb, ws, 'دفتر المصاريف');
  })();

  // ══════════════════════════════
  // SHEET 3 — الفواتير الثابتة
  // ══════════════════════════════
  (function () {
    var ws = {};
    var r = 0;

    _setRange(ws, r, 0, _makeCell('🧾 الفواتير الثابتة — ' + monthLabel + ' ' + curYear, _titleStyle()));
    ['', '', '', ''].forEach(function (_, c) { if (c > 0) _setRange(ws, r, c, _makeCell('', _titleStyle())); });
    _merge(ws, r, 0, r, 4);
    r++;

    ['الوصف', 'المخطط', 'الفعلي', 'نسبة %', 'الفرق'].forEach(function (h, c) {
      _setRange(ws, r, c, _makeCell(h, _hStyle('1D6F42', true, 'right')));
    });
    r++;

    var alt = ['F9FBF9', 'FFFFFF'];
    var tPln = 0, tAct = 0;
    (md.bills || []).forEach(function (bill, i) {
      var pln = Number(bill.pln || 0), act = Number(bill.act || 0);
      tPln += pln; tAct += act;
      var bg = alt[i % 2];
      var ratio = pln > 0 ? act / pln : 0;
      var diff = act - pln;
      var overStyle = Object.assign({}, _cStyle(bg, false, 'right', '#,##0'),
        act > pln && pln > 0 ? { font: { bold: false, name: 'Tajawal', sz: 10, color: { rgb: 'C0392B' } } } : {});
      _setRange(ws, r, 0, _makeCell(bill.label || '', _cStyle(bg)));
      _setRange(ws, r, 1, _makeCell(pln, _cStyle(bg, false, 'right', '#,##0')));
      _setRange(ws, r, 2, _makeCell(act, overStyle));
      _setRange(ws, r, 3, _makeCell(ratio, _cStyle(bg, false, 'right', '0.0%')));
      _setRange(ws, r, 4, _makeCell(diff, _cStyle(bg, false, 'right', '#,##0;[Red]-#,##0')));
      r++;
    });
    _setRange(ws, r, 0, _makeCell('📌 الإجمالي', _totalStyle()));
    _setRange(ws, r, 1, _makeCell(tPln, _totalStyle()));
    _setRange(ws, r, 2, _makeCell(tAct, _totalStyle()));
    _setRange(ws, r, 3, _makeCell(tPln > 0 ? tAct / tPln : 0, Object.assign({}, _totalStyle(), { numFmt: '0.0%' })));
    _setRange(ws, r, 4, _makeCell(tAct - tPln, _totalStyle()));

    ws['!cols'] = [{ wch: 26 }, { wch: 12 }, { wch: 12 }, { wch: 10 }, { wch: 10 }];
    ws['!rtl'] = true;
    XLSX.utils.book_append_sheet(wb, ws, 'الفواتير الثابتة');
  })();

  // ══════════════════════════════
  // SHEET 4 — التوفير والديون
  // ══════════════════════════════
  (function () {
    var ws = {};
    var r = 0;

    _setRange(ws, r, 0, _makeCell('💰 التوفير والديون — ' + monthLabel + ' ' + curYear, _titleStyle()));
    ['', '', ''].forEach(function (_, c) { if (c > 0) _setRange(ws, r, c, _makeCell('', _titleStyle())); });
    _merge(ws, r, 0, r, 3);
    r++;

    ['النوع', 'الوصف', 'الهدف', 'الفعلي'].forEach(function (h, c) {
      _setRange(ws, r, c, _makeCell(h, _hStyle('1D6F42', true, 'right')));
    });
    r++;

    var alt = ['F0FAF0', 'FFFFFF'];
    var altD = ['FFF8F0', 'FFFFFF'];
    (md.savings || []).forEach(function (s, i) {
      var bg = alt[i % 2];
      _setRange(ws, r, 0, _makeCell('💰 توفير', _cStyle(bg, false, 'right')));
      _setRange(ws, r, 1, _makeCell(s.label || '', _cStyle(bg)));
      _setRange(ws, r, 2, _makeCell(Number(s.pln || 0), _cStyle(bg, false, 'right', '#,##0')));
      _setRange(ws, r, 3, _makeCell(Number(s.act || 0), _cStyle(bg, false, 'right', '#,##0')));
      r++;
    });
    (md.debts || []).forEach(function (d, i) {
      var bg = altD[i % 2];
      _setRange(ws, r, 0, _makeCell('💳 دين', _cStyle(bg, false, 'right')));
      _setRange(ws, r, 1, _makeCell(d.label || '', _cStyle(bg)));
      _setRange(ws, r, 2, _makeCell(Number(d.pln || 0), _cStyle(bg, false, 'right', '#,##0')));
      _setRange(ws, r, 3, _makeCell(Number(d.act || 0), _cStyle(bg, false, 'right', '#,##0')));
      r++;
    });
    _setRange(ws, r, 0, _makeCell('📌 الإجمالي', _totalStyle()));
    _setRange(ws, r, 1, _makeCell('', _totalStyle()));
    _setRange(ws, r, 2, _makeCell(totalSav + totalDbt, _totalStyle()));
    _setRange(ws, r, 3, _makeCell((md.savings || []).reduce(function (s, x) { return s + Number(x.act || 0); }, 0) + (md.debts || []).reduce(function (s, x) { return s + Number(x.act || 0); }, 0), _totalStyle()));

    ws['!cols'] = [{ wch: 14 }, { wch: 26 }, { wch: 14 }, { wch: 14 }];
    ws['!rtl'] = true;
    XLSX.utils.book_append_sheet(wb, ws, 'التوفير والديون');
  })();

  // ══════════════════════════════
  // SHEET 5 — الترفيه والكمالية (conditionnel)
  // ══════════════════════════════
  (function () {
    var smokeNotes = monthNotes.filter(function (n) { return n.mainCat === 'cafe_smoke'; });
    if (!smokeNotes.length) return;

    var ws = {};
    var r = 0;

    _setRange(ws, r, 0, _makeCell('☕ الترفيه والكمالية — ' + monthLabel + ' ' + curYear, _titleStyle()));
    ['', ''].forEach(function (_, c) { if (c > 0) _setRange(ws, r, c, _makeCell('', _titleStyle())); });
    _merge(ws, r, 0, r, 2);
    r++;

    ['التاريخ', 'المشتريات', 'المبلغ'].forEach(function (h, c) {
      _setRange(ws, r, c, _makeCell(h, _hStyle('7B4A2D', true, 'right')));
    });
    r++;

    var alt = ['FFF8F0', 'FFFFFF'];
    var sorted = smokeNotes.slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
    var smokeTotal = 0;
    sorted.forEach(function (n, i) {
      smokeTotal += Number(n.amount || 0);
      var bg = alt[i % 2];
      _setRange(ws, r, 0, _makeCell(n.date || '', _cStyle(bg, false, 'center')));
      _setRange(ws, r, 1, _makeCell(dispChips(n), _cStyle(bg)));
      _setRange(ws, r, 2, _makeCell(Number(n.amount || 0), _cStyle(bg, false, 'right', '#,##0')));
      r++;
    });
    _setRange(ws, r, 0, _makeCell('', _totalStyle()));
    _setRange(ws, r, 1, _makeCell('📌 الإجمالي', _totalStyle()));
    _setRange(ws, r, 2, _makeCell(smokeTotal, _totalStyle()));

    ws['!cols'] = [{ wch: 14 }, { wch: 30 }, { wch: 12 }];
    ws['!rtl'] = true;
    XLSX.utils.book_append_sheet(wb, ws, 'الترفيه والكمالية');
  })();

  // ── Download ──
  var fname = 'تدبير-' + monthLabel + '-' + curYear + '.xlsx';
  XLSX.writeFile(wb, fname, { bookType: 'xlsx', type: 'binary', cellStyles: true });

  if (typeof closeModal === 'function') closeModal('backupModal');
  showToast('📊 تم تصدير Excel — ' + fname);
}

// ══════════════════════════════════════════════════════════════════
// THEME SWITCHER
// ══════════════════════════════════════════════════════════════════
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('sf_theme', newTheme);
  updateChartThemes(newTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('sf_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  // Give charts a moment to initialize
  setTimeout(() => updateChartThemes(savedTheme), 100);
}

function updateChartThemes(theme) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#ECEDF2' : '#2D3142';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)';

  Chart.defaults.color = textColor;

  [chartDonut, chartBar, chartHero, chartNotes, chartLine].forEach(c => {
    if (c) {
      if (c.options.scales) {
        Object.keys(c.options.scales).forEach(s => {
          if (c.options.scales[s].grid) c.options.scales[s].grid.color = gridColor;
          if (c.options.scales[s].ticks) c.options.scales[s].ticks.color = textColor;
        });
      }
      if (c.options.plugins && c.options.plugins.legend && c.options.plugins.legend.labels) {
        c.options.plugins.legend.labels.color = textColor;
      }
      c.update('none');
    }
  });
}

// ══════════════════════════════════════════════════════════════════
// EMERGENCY FUND LOGIC
// ══════════════════════════════════════════════════════════════════
function getEmergencyFundTotal() {
  let total = 0;
  Object.keys(allData).forEach(function (mk) {
    const savings = allData[mk].savings || [];
    savings.forEach(function (s) {
      const lbl = (s.label || '').trim().toLowerCase();
      if (lbl === 'طوارئ' || lbl === 'الطوارئ' || lbl === 'urgences' || lbl === 'emergency' || lbl === 'emergencias') {
        total += Number(s.act || 0);
      }
    });
  });
  return total;
}

function getEmergencyFundTarget() {
  return Number(localStorage.getItem('sf_emergency_target')) || 15000;
}

function promptEmergencyTarget() {
  const t = T();
  const current = getEmergencyFundTarget();
  const msg = t.emergency_target_prompt || "أدخل قيمة هدف صندوق الطوارئ الجديد:";
  const val = prompt(msg, current);
  if (val !== null) {
    const target = Number(val) || 0;
    if (target > 0) {
      localStorage.setItem('sf_emergency_target', target);
      recalc();
      showToast(t.saved || "محفوظ");
    }
  }
}

// ══════════════════════════════════════════════════════════════════
// BUDGET ALERT BANNER LOGIC
// ══════════════════════════════════════════════════════════════════
function checkBudgetAlerts() {
  const banner = document.getElementById('budget-alerts-banner');
  if (!banner) return;
  banner.innerHTML = '';

  const limits = getBudgetLimits();
  const t = T();

  getMainCats().forEach(function (mc) {
    const lim = limits[mc.id];
    if (!lim) return;
    const spent = getCatSpentThisMonth(mc.id);
    const ratio = spent / lim;

    if (ratio >= 0.8) {
      const isOver = ratio >= 1.0;
      const pct = Math.round(ratio * 100);
      const alertDiv = document.createElement('div');
      alertDiv.className = 'alert-item' + (isOver ? '' : ' warn');

      let msg = '';
      if (lang === 'fr') {
        msg = isOver
          ? `🔴 <strong>Dépassement de budget !</strong> Vous avez dépensé ${fmt(spent)} ${currency} sur ${fmt(lim)} ${currency} dans la catégorie ${mc.icon} ${mc.label} (${pct}%).`
          : `⚠️ <strong>Attention !</strong> Vous approchez de la limite du budget pour ${mc.icon} ${mc.label} (${pct}% consommé).`;
      } else if (lang === 'en') {
        msg = isOver
          ? `🔴 <strong>Budget exceeded!</strong> You spent ${fmt(spent)} ${currency} out of ${fmt(lim)} ${currency} in ${mc.icon} ${mc.label} (${pct}%).`
          : `⚠️ <strong>Warning!</strong> Close to budget limit for ${mc.icon} ${mc.label} (${pct}% spent).`;
      } else if (lang === 'es') {
        msg = isOver
          ? `🔴 <strong>¡Presupuesto superado!</strong> Gastó ${fmt(spent)} ${currency} de ${fmt(lim)} ${currency} en ${mc.icon} ${mc.label} (${pct}%).`
          : `⚠️ <strong>¡Atención!</strong> Cerca del límite de presupuesto para ${mc.icon} ${mc.label} (${pct}% gastado).`;
      } else {
        // Arabic / Darija
        msg = isOver
          ? `🔴 <strong>تجاوز الميزانية!</strong> صرفت ${fmt(spent)} ${currency} من أصل ${fmt(lim)} ${currency} في فئة ${mc.icon} ${mc.label} (${pct}%).`
          : `⚠️ <strong>انتبه!</strong> اقتربت من السقف المحدد لفئة ${mc.icon} ${mc.label} (${pct}% مستهلكة).`;
      }

      alertDiv.innerHTML = msg;
      banner.appendChild(alertDiv);
    }
  });
}

// ══════════════════════════════════════════════
// WHATSAPP EXPRESS SMART GROCERY PARSER
// ══════════════════════════════════════════════
const DARIJA_DICTIONARY = [
  // 🛒 المعيشة اليومية / السوق (خضر وفواكه ولحوم)
  { keywords: ['mtixa', 'maticha', 'matixa', 'مطيشة', 'tomate', 'tomates'], nameAr: 'مطيشة', nameFr: 'Tomates', icon: '🍅', catId: 'daily' },
  { keywords: ['lkhyar', 'khyar', 'خيار', 'concombre'], nameAr: 'خيار', nameFr: 'Concombre', icon: '🥒', catId: 'daily' },
  { keywords: ['batata', 'btata', 'btat', 'بطاطس', 'بطاطا', 'pomme de terre'], nameAr: 'بطاطس', nameFr: 'Pommes de terre', icon: '🥔', catId: 'daily' },
  { keywords: ['btata hlwa', 'بطاطا حلوة', 'patate douce'], nameAr: 'بطاطا حلوة', nameFr: 'Patate douce', icon: '🍠', catId: 'daily' },
  { keywords: ['bssl', 'bssla', 'بصل', 'بصلة', 'oignon'], nameAr: 'بصل', nameFr: 'Oignons', icon: '🧅', catId: 'daily' },
  { keywords: ['khizou', 'khizo', 'ja3da', 'جاعدة', 'خيزو', 'جزر', 'carotte', 'carottes'], nameAr: 'جزر / جاعدة', nameFr: 'Carottes', icon: '🥕', catId: 'daily' },
  { keywords: ['kar3a', 'kar3a khdra', 'قرعة خضرة', 'courgette'], nameAr: 'قرعة خضراء', nameFr: 'Courgettes', icon: '🥒', catId: 'daily' },
  { keywords: ['dngal', 'danjan', 'دنجال', 'باذنجان', 'aubergine'], nameAr: 'دنجال', nameFr: 'Aubergine', icon: '🍆', catId: 'daily' },
  { keywords: ['flfla', 'flla', 'فلفلة', 'فلفل', 'poivron'], nameAr: 'فلفلة', nameFr: 'Poivrons', icon: '🫑', catId: 'daily' },
  { keywords: ['thoum', 'thouma', 'ثومة', 'ثوم', 'ail'], nameAr: 'ثوم', nameFr: 'Ail', icon: '🧄', catId: 'daily' },
  { keywords: ['rbia', 'rbi3', 'ربيع', 'قصبر', 'معدنوس', 'persil'], nameAr: 'ربيع', nameFr: 'Persil / Coriandre', icon: '🌿', catId: 'daily' },
  { keywords: ['lkhass', 'خس', 'laitue'], nameAr: 'خس', nameFr: 'Laitue', icon: '🥬', catId: 'daily' },
  { keywords: ['lmon', 'limon', 'ليمون', 'حامض', 'citron'], nameAr: 'حامض', nameFr: 'Citron', icon: '🍋', catId: 'daily' },
  { keywords: ['tffah', 'tfah', 'تفاح', 'pomme'], nameAr: 'تفاح', nameFr: 'Pommes', icon: '🍎', catId: 'daily' },
  { keywords: ['banan', 'بنان', 'موز', 'banane'], nameAr: 'بنان', nameFr: 'Bananes', icon: '🍌', catId: 'daily' },
  { keywords: ['lingas', 'ijass', 'اجاص', 'إجاص', 'poire'], nameAr: 'إجاص', nameFr: 'Poires', icon: '🍐', catId: 'daily' },
  { keywords: ['khokh', 'خوخ', 'pêche'], nameAr: 'خوخ', nameFr: 'Pêches', icon: '🍑', catId: 'daily' },
  { keywords: ['3ineb', '3nb', 'عنب', 'raisin', 'raisins'], nameAr: 'عنب', nameFr: 'Raisins', icon: '🍇', catId: 'daily' },
  { keywords: ['betikh', 'btikh', 'بطيخ', 'melon'], nameAr: 'بطيخ', nameFr: 'Melon', icon: '🍈', catId: 'daily' },
  { keywords: ['delah', 'dilah', 'dalah', 'dlah', 'دلاح', 'pasteque', 'pastéque'], nameAr: 'دلاح', nameFr: 'Pastèque', icon: '🍉', catId: 'daily' },
  { keywords: ['khodra', 'khodro', 'خضرة', 'خضار', 'légumes'], nameAr: 'خضر متنوعة', nameFr: 'Légumes', icon: '🥦', catId: 'daily' },
  { keywords: ['sardin', 'sardine', 'سردين', 'hout', 'lhout', 'hot', 'lhot', 'حوت', 'poisson'], nameAr: 'حوت / أسماك', nameFr: 'Poisson / Sardines', icon: '🐟', catId: 'daily' },
  { keywords: ['xton', 'thon', 'طون', '1kg xton'], nameAr: 'سمك الطون', nameFr: 'Thon frais', icon: '🐟', catId: 'daily' },
  { keywords: ['zbib', 'زبيب', 'raisin sec'], nameAr: 'زبيب', nameFr: 'Raisins secs', icon: '🍇', catId: 'daily' },
  { keywords: ['zayton', 'zitoun', 'زيتون', 'olives'], nameAr: 'زيتون', nameFr: 'Olives', icon: '🫒', catId: 'daily' },
  { keywords: ['zeri3a', 'زريعة'], nameAr: 'زريعة / مكسرات', nameFr: 'Graines', icon: '🌻', catId: 'daily' },

  // 🛒 المعيشة اليومية / المواد الغذائية والبقالة
  { keywords: ['hlib', 'lhlib', 'حليب', 'lait'], nameAr: 'حليب', nameFr: 'Lait', icon: '🥛', catId: 'daily' },
  { keywords: ['bytat', 'byd', 'biad', 'بيض', 'oeufs'], nameAr: 'بيض', nameFr: 'Œufs', icon: '🥚', catId: 'daily' },
  { keywords: ['khobz', 'lkhobz', 'خبز', 'pain'], nameAr: 'خبز', nameFr: 'Pain', icon: '🍞', catId: 'daily' },
  { keywords: ['tost', 'lkhobz tost', 'توست', 'pain de mie'], nameAr: 'خبز التوست', nameFr: 'Pain de mie', icon: '🍞', catId: 'daily' },
  { keywords: ['madelin', 'madlin', 'مادلين', 'madelaine'], nameAr: 'مادلين', nameFr: 'Madeleines', icon: '🧁', catId: 'daily' },
  { keywords: ['ptipan', 'petit pain', 'كرواصة'], nameAr: 'بتيبان / مخبوزات', nameFr: 'Petit pain', icon: '🥐', catId: 'daily' },
  { keywords: ['harxa', 'حريشة', 'حرشة'], nameAr: 'حرشة', nameFr: 'Harcha', icon: '🫓', catId: 'daily' },
  { keywords: ['khal', 'fkhal', 'خل', 'vinaigre'], nameAr: 'خل', nameFr: 'Vinaigre', icon: '🏺', catId: 'daily' },
  { keywords: ['zayt', 'zit', 'زيت', 'huile'], nameAr: 'زيت', nameFr: 'Huile', icon: '🫗', catId: 'daily' },
  { keywords: ['atay', 'ataye', 'أتاي', 'شاي', 'thé'], nameAr: 'أتاي', nameFr: 'Thé', icon: '🫖', catId: 'daily' },
  { keywords: ['skkar', 'skar', 'سكر', 'sucre'], nameAr: 'سكر', nameFr: 'Sucre', icon: '🧊', catId: 'daily' },
  { keywords: ['formaj', 'frmaj', 'فرماج', 'جبن', 'fromage'], nameAr: 'فرماج', nameFr: 'Fromage', icon: '🧀', catId: 'daily' },
  { keywords: ['mortadila', 'كاشير', 'مورتاديلا'], nameAr: 'مورتاديلا / كاشير', nameFr: 'Mortadelle', icon: '🥓', catId: 'daily' },
  { keywords: ['danp', 'danoop', 'دانب'], nameAr: 'دانون عصير / دانب', nameFr: 'Danoop', icon: '🧃', catId: 'daily' },
  { keywords: ['dadon', 'danone', 'danon', 'دانون', 'yaourt'], nameAr: 'دانون', nameFr: 'Danone / Yaourt', icon: '🍦', catId: 'daily' },
  { keywords: ['zobda', 'zbda', 'زبدة', 'beurre'], nameAr: 'زبدة', nameFr: 'Beurre', icon: '🧈', catId: 'daily' },
  { keywords: ['indomi', 'اندومي', 'إندومي', 'nouilles'], nameAr: 'إندومي', nameFr: 'Nouilles Indomie', icon: '🍜', catId: 'daily' },
  { keywords: ['4des', '3des', 'عدس', 'lentilles'], nameAr: 'عدس', nameFr: 'Lentilles', icon: '🍲', catId: 'daily' },
  { keywords: ['lobiya', 'لوبيا', 'haricots'], nameAr: 'لوبيا', nameFr: 'Haricots blancs', icon: '🍲', catId: 'daily' },
  { keywords: ['flan', 'فلان'], nameAr: 'فلان', nameFr: 'Flan', icon: '🍮', catId: 'daily' },
  { keywords: ['xklat dyl lkhobz', 'شوكلاتة', 'nutella'], nameAr: 'شكلاط الدهن', nameFr: 'Chocolat à tartiner', icon: '🍫', catId: 'daily' },
  { keywords: ['ibzar', 'ابزار', 'إبزار', 'poivre'], nameAr: 'إبزار / فلفل أسود', nameFr: 'Poivre noir', icon: '🧂', catId: 'daily' },
  { keywords: ['khrkom', 'خرقوم', 'curcuma'], nameAr: 'خرقوم', nameFr: 'Curcuma', icon: '🧂', catId: 'daily' },
  { keywords: ['sknjbir', 'سكنجبير', 'gingembre'], nameAr: 'سكنجبير', nameFr: 'Gingembre', icon: '🧂', catId: 'daily' },
  { keywords: ['khmira', 'خميرة', 'levure'], nameAr: 'خميرة الخبز', nameFr: 'Levure', icon: '🍞', catId: 'daily' },
  { keywords: ['thin', 't7in', 'طحين', 'دقيق', 'farine'], nameAr: 'طحين / دقيق', nameFr: 'Farine', icon: '🌾', catId: 'daily' },
  { keywords: ['xiba', 'شيبة'], nameAr: 'شيبة', nameFr: 'Absinthe', icon: '🌿', catId: 'daily' },
  { keywords: ['rozz', 'roz', 'رز', 'أرز', 'riz'], nameAr: 'أرز', nameFr: 'Riz', icon: '🍚', catId: 'daily' },
  { keywords: ['m9ronya', 'm9ronia', 'مقرونية', 'مكرونة', 'pâtes'], nameAr: 'مقرونية', nameFr: 'Pâtes', icon: '🍝', catId: 'daily' },
  { keywords: ['djaj', 'dajaj', 'دجاج', 'poulet'], nameAr: 'دجاج', nameFr: 'Poulet', icon: '🍗', catId: 'daily' },
  { keywords: ['lhm', 'lhmi', 'لحم', 'viande'], nameAr: 'لحم', nameFr: 'Viande', icon: '🥩', catId: 'daily' },
  { keywords: ['kfta', 'kefta', 'كفتة', 'viande hachée'], nameAr: 'كفتة', nameFr: 'Kefta', icon: '🧆', catId: 'daily' },
  { keywords: ['lma', 'elma', 'ماء', 'eau'], nameAr: 'ماء معدني', nameFr: 'Eau minérale', icon: '💧', catId: 'daily' },

  // ☕ المطعم والمقهى والحلويات والتبغ (cafe_smoke)
  { keywords: ['garo', 'garro', 'garet', 'سجائر', 'تبغ', 'paquet garo'], nameAr: 'علبة تبغ', nameFr: 'Paquet de cigarettes', icon: '🚬', catId: 'cafe_smoke' },
  { keywords: ['hajra', 'hajra dakhan', 'حجرة الدخان', 'ولاعة', 'briquet'], nameAr: 'حجر الدخان / ولاعة', nameFr: 'Briquet / Accessoires', icon: '🔥', catId: 'cafe_smoke' },
  { keywords: ['ftor', 'ftoor', 'فطور', 'petit dejeuner'], nameAr: 'فطور', nameFr: 'Petit-déjeuner', icon: '🍳', catId: 'cafe_smoke' },
  { keywords: ['ghda', 'غداء', 'dejeuner'], nameAr: 'وجبة غداء', nameFr: 'Déjeuner', icon: '🍲', catId: 'cafe_smoke' },
  { keywords: ['sandwix', 'sandwich', 'سندويش'], nameAr: 'سندويش', nameFr: 'Sandwich', icon: '🥪', catId: 'cafe_smoke' },
  { keywords: ['steek', 'steak', 'stikat', 'ستيك'], nameAr: 'ستيك', nameFr: 'Steak', icon: '🥩', catId: 'cafe_smoke' },
  { keywords: ['tacos', 'طاكوس'], nameAr: 'طاكوس', nameFr: 'Tacos', icon: '🌮', catId: 'cafe_smoke' },
  { keywords: ['xawarma', 'شوارما'], nameAr: 'شوارما', nameFr: 'Chawarma', icon: '🥙', catId: 'cafe_smoke' },
  { keywords: ['pitza', 'pitsa', 'pizza', 'بيتزا'], nameAr: 'بيتزا', nameFr: 'Pizza', icon: '🍕', catId: 'cafe_smoke' },
  { keywords: ['calinti', 'kalinti', 'كالينتي'], nameAr: 'كالينتي', nameFr: 'Caliente', icon: '🥧', catId: 'cafe_smoke' },
  { keywords: ['za3za3', 'za3za', 'زعزاع'], nameAr: 'زعزاع', nameFr: 'Jus Zaâzaâ', icon: '🥤', catId: 'cafe_smoke' },
  { keywords: ['polo', 'بولو', 'مثلجات', 'glace'], nameAr: 'بولو / مثلجات', nameFr: 'Glace / Polo', icon: '🍦', catId: 'cafe_smoke' },
  { keywords: ['monada', 'مونادا', 'مشروب غازي', 'soda'], nameAr: 'مونادا', nameFr: 'Soda / Boisson', icon: '🥤', catId: 'cafe_smoke' },
  { keywords: ['halwa', 'حلوى', 'حلويات', 'tarta', 'gateau'], nameAr: 'حلوى / طورطة', nameFr: 'Pâtisserie / Tarte', icon: '🍰', catId: 'cafe_smoke' },
  { keywords: ['malah', 'موالح', 'مملحات'], nameAr: 'مملحات / موالح', nameFr: 'Salés / Biscuits', icon: '🥨', catId: 'cafe_smoke' },
  { keywords: ['3asir', 'عصير', 'jus'], nameAr: 'عصير', nameFr: 'Jus', icon: '🧃', catId: 'cafe_smoke' },
  { keywords: ['qhwa', 'qohwa', 'cafe', 'niscafe', 'قهوة'], nameAr: 'قهوة / نسكافي', nameFr: 'Café / Nescafé', icon: '☕', catId: 'cafe_smoke' },
  { keywords: ['9ax9xa', 'frota', 'قشقشة', 'تسلية', 'kikas', 'kikes', 'kiks', 'kikess', 'btswis', 'ptiswis', 'كيكس', 'بسكويت'], nameAr: 'قشقشة / بسكويت', nameFr: 'Snacks / Biscuits', icon: '🍿', catId: 'cafe_smoke' },
  { keywords: ['chips', 'cheps', 'txips', 'xips', 'شيبس', 'تشيبس', 'شيبص'], nameAr: 'شيبس / رقائق بطاطس', nameFr: 'Chips', icon: '🥔', catId: 'cafe_smoke' },

  // 🏠 الضروريات الثابتة ومستلزمات النظافة (fixed)
  { keywords: ['sabon', 'sbon d 9xo3', 'sbon ydin', 'صابون', 'savon'], nameAr: 'صابون أواني', nameFr: 'Liquide vaisselle', icon: '🫧', catId: 'fixed' },
  { keywords: ['sbon hjra', 'صابون حجر'], nameAr: 'صابون حجرة', nameFr: 'Savon de Marseille', icon: '🧼', catId: 'fixed' },
  { keywords: ['papier', 'kaghit twlit', 'papier toilette', 'بابيي', 'ورق حمام'], nameAr: 'ورق صحي', nameFr: 'Papier toilette', icon: '🧻', catId: 'fixed' },
  { keywords: ['khghit dyl ydin', 'papiye kwozine', 'essuie-tout'], nameAr: 'ورق تنشيف / مطبخ', nameFr: 'Essuie-tout', icon: '🧻', catId: 'fixed' },
  { keywords: ['jvil', 'javil', 'javel', 'جافيل'], nameAr: 'جافيل', nameFr: 'Eau de Javel', icon: '🧴', catId: 'fixed' },
  { keywords: ['sanecroi', 'snkrwa', 'sanicross', 'sanikerwa', 'sanikroua', 'sanikroa', 'sanikrwa', 'saniكروا', 'ساني كروا'], nameAr: 'سانيكروا', nameFr: 'Désinfectant sol', icon: '🧹', catId: 'fixed' },
  { keywords: ['hlfa dslk', 'إسفنجة'], nameAr: 'حلفة السلك / إسفنجة', nameFr: 'Éponge / Paille de fer', icon: '🧽', catId: 'fixed' },
  { keywords: ['mika d zbal', 'mikat d zbal', 'sacs poubelle'], nameAr: 'أكياس النفايات', nameFr: 'Sacs poubelle', icon: '🗑️', catId: 'fixed' },
  { keywords: ['bota', 'بوطة', 'غاز'], nameAr: 'بوطة غاز', nameFr: 'Bonbonne de gaz', icon: '🔥', catId: 'fixed' },
  { keywords: ['lma d sbagha', 'dissolvant'], nameAr: 'ماء الصباغة', nameFr: 'Dissolvant', icon: '💅', catId: 'fixed' },
  { keywords: ['sokhra', 'sokhra dar', 'سخرة', 'سخرة الدار'], nameAr: 'سخرة الدار', nameFr: 'Sokhra / Courses maison', icon: '🛍️', catId: 'fixed' },
  { keywords: ['ommo', 'tid', 'omo', 'تيد', 'أومو', 'lessive'], nameAr: 'أومو / مسحوق الغسيل', nameFr: 'Lessive', icon: '🧺', catId: 'fixed' },

  // 🏥 الصحة والعناية الشخصية (health)
  { keywords: ['likox', 'les couche', 'couche', 'couches', 'molfix', 'حفاضات', 'كوش'], nameAr: 'حفاضات الأطفال', nameFr: 'Couches bébé', icon: '👶', catId: 'health' },
  { keywords: ['lilingit', 'lilnjit', 'lingette', 'lingettes', 'لانجيت'], nameAr: 'مناديل مبللة', nameFr: 'Lingettes', icon: '🧻', catId: 'health' },
  { keywords: ['janson', 'johnson', 'جونسون'], nameAr: 'منتجات جونسون', nameFr: 'Soins Johnson', icon: '🧴', catId: 'health' },
  { keywords: ['porbo', 'poudre johnson', 'بودرة'], nameAr: 'بودرة جونسون', nameFr: 'Talc bébé', icon: '🧴', catId: 'health' },
  { keywords: ['oulways', 'olwyaz', 'always', 'فوط صحية'], nameAr: 'فوط صحية', nameFr: 'Serviettes hygiéniques', icon: '🌸', catId: 'health' },
  { keywords: ['champo', 'champoing', 'shampooing', 'شامبوان'], nameAr: 'شامبو', nameFr: 'Shampoing', icon: '🧴', catId: 'health' },
  { keywords: ['noravit', 'نورافيت'], nameAr: 'نورافيت / مكمل', nameFr: 'Complément Noravit', icon: '💊', catId: 'health' },
  { keywords: ['pastiya', 'pastili', 'dwa', 'siro', '9wilbat', 'دواء', 'أقراص'], nameAr: 'دواء / أقراص / سيرو', nameFr: 'Médicaments / Sirop', icon: '💊', catId: 'health' }
];

let _waExtractedItems = [];

function openWaExpressModal() {
  openModal('waExpressModal');
  const s1 = $('wa-step-1'), s2 = $('wa-step-2');
  if (s1) s1.style.display = 'block';
  if (s2) s2.style.display = 'none';
  const ta = $('wa-raw-input');
  if (ta) ta.value = '';
}

function resetWaStep() {
  const s1 = $('wa-step-1'), s2 = $('wa-step-2');
  if (s1) s1.style.display = 'block';
  if (s2) s2.style.display = 'none';
}

// Parser optimisé : gère les discussions WhatsApp collées telles quelles
// (horodatages mobile/desktop [31/07 19:10], numéros de téléphone, expéditeurs AB:, virgules).
function processWaInput() {
  const rawText = ($('wa-raw-input')?.value || '').trim();
  if (!rawText) {
    showToast(lang === 'fr' ? 'Veuillez coller le texte de la discussion' : 'الرجاء إدخال النص من الواتساب');
    return;
  }

  let lines = rawText.split('\n');
  _waExtractedItems = [];

  lines.forEach(line => {
    let cleanLine = line.trim();
    if (!cleanLine) return;

    // Ignore les messages système WhatsApp (chiffrement, médias, liens)
    if (cleanLine.includes('chiffrés') || cleanLine.includes('http') || cleanLine.includes('<Médias omis>') || cleanLine.includes('<Media omitted>')) return;

    // 1. Supprime les horodatages entre crochets: [31/07 19:10], [19:10, 31/07/2024], [31/07, 20:40], etc.
    cleanLine = cleanLine.replace(/\[[^\]]*\]/g, ' ').trim();

    // 2. Supprime l'horodatage style desktop/Android au début de la ligne ("15/08/2024, 12:00 - ...", "31/07, 19:10 - ...")
    cleanLine = cleanLine.replace(/^[\d/\-:,.\s]+(AM|PM|am|pm)?\s*-\s*/i, ' ').trim();

    // 3. Supprime les préfixes d'expéditeur ("AB: ...", "+212 600-000000: ...", "Nom:")
    // Si la ligne contient ":" et que le mot avant n'est PAS un produit du dictionnaire
    if (cleanLine.includes(':')) {
      const colonIndex = cleanLine.indexOf(':');
      const prefix = cleanLine.slice(0, colonIndex).trim().toLowerCase();
      // Vérifie si le préfixe est un mot-clé produit du dictionnaire
      const isDictItem = DARIJA_DICTIONARY.some(entry =>
        entry.keywords.some(kw => kw === prefix || prefix.includes(kw))
      );
      if (!isDictItem) {
        cleanLine = cleanLine.slice(colonIndex + 1).trim();
      }
    }

    if (!cleanLine) return;

    // Passe 1 : normalisation des séparateurs en espace
    const normalized = cleanLine
      .replace(/[,;]+/g, ' ')       // virgules et points-virgules → espace
      .replace(/\s*\.\s*/g, ' ');   // points (avec espaces optionnels)  → espace

    // Passe 2 : tokenisation séquentielle
    const tokens = normalized.split(/\s+/).filter(Boolean);

    let pendingName = null;  // nom de produit en attente d'un éventuel prix
    let pendingRaw = null;

    const flushItem = (name, raw, price) => {
      if (!name) return;
      let nameLow = name.toLowerCase().replace(/dh$/i, '').trim();
      // Nettoie la ponctuation autour du nom
      nameLow = nameLow.replace(/^[:\-[\](),;.]+|[:\-[\](),;.]+$/g, '').trim();

      if (!nameLow || nameLow.length < 2) return;

      // Ignore les artefacts de dates/heures (ex: "31/07", "19:10", "2024/08", "pm", "am")
      if (/^\d+[/:]\d+/.test(nameLow) || /^(am|pm)$/i.test(nameLow)) return;

      // Matching dictionnaire : priorité au PREMIER mot qui correspond
      const words = nameLow.split(/\s+/).filter(w => w && w !== 'o' && w !== 'و');
      let match = null;
      for (const word of words) {
        match = DARIJA_DICTIONARY.find(entry =>
          entry.keywords.some(kw => kw === word || word.includes(kw) || kw.includes(word))
        );
        if (match) break;
      }
      if (!match) {
        // Repli : recherche par sous-chaîne sur la phrase entière
        match = DARIJA_DICTIONARY.find(entry =>
          entry.keywords.some(kw => nameLow.includes(kw) || kw.includes(nameLow))
        );
      }

      if (match) {
        _waExtractedItems.push({
          raw: raw || name,
          name: lang === 'fr' ? match.nameFr : match.nameAr,
          icon: match.icon,
          catId: match.catId,
          price: price || ''
        });
      } else if (nameLow.length > 1) {
        _waExtractedItems.push({
          raw: raw || name,
          name: nameLow,
          icon: '🛒',
          catId: 'daily',
          price: price || ''
        });
      }
    };

    for (const token of tokens) {
      // Token numérique : chiffre seul, éventuellement décimal (ex: 12, 8.5, 8,5)
      const isNumeric = /^\d+([.,]\d+)?$/.test(token);

      if (isNumeric) {
        if (pendingName) {
          // Ce chiffre est le prix du produit en attente → flush + reset
          flushItem(pendingName, pendingRaw, token.replace(',', '.'));
          pendingName = null;
          pendingRaw = null;
        }
      } else {
        if (pendingName) {
          flushItem(pendingName, pendingRaw, '');
        }
        pendingName = token;
        pendingRaw = token;
      }
    }
    // Flush le dernier produit s'il n'est pas suivi d'un prix
    if (pendingName) {
      flushItem(pendingName, pendingRaw, '');
    }
  });

  if (_waExtractedItems.length === 0) {
    showToast(lang === 'fr' ? 'Aucun produit détecté' : 'لم يتم العثور على أي منتج');
    return;
  }

  renderWaItemsList();
  const s1 = $('wa-step-1'), s2 = $('wa-step-2');
  if (s1) s1.style.display = 'none';
  if (s2) s2.style.display = 'block';
}

function renderWaItemsList() {
  const container = $('wa-items-list');
  if (!container) return;
  container.innerHTML = '';

  const countLbl = $('wa-items-count-lbl');
  if (countLbl) {
    countLbl.textContent = `${_waExtractedItems.length} ${lang === 'fr' ? 'articles détectés' : 'منتجات مستخرجة'}`;
  }

  _waExtractedItems.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'wa-item-row';
    row.innerHTML = `
      <div class="wa-item-left">
        <span class="wa-item-icon">${item.icon}</span>
        <div class="wa-item-info">
          <span class="wa-item-name">${item.name}</span>
          <span class="wa-item-cat">${item.catId}</span>
        </div>
      </div>
      <div class="wa-item-right">
        <input type="number" class="wa-item-price-input" placeholder="0" min="0" value="${item.price}" oninput="updateWaItemPrice(${idx},this.value)">
        <button class="wa-item-del-btn" onclick="removeWaItem(${idx})" title="Supprimer">✕</button>
      </div>
    `;
    container.appendChild(row);
  });

  updateWaLiveTotal();
}

function updateWaItemPrice(idx, val) {
  if (_waExtractedItems[idx]) {
    _waExtractedItems[idx].price = val;
  }
  updateWaLiveTotal();
}

function removeWaItem(idx) {
  _waExtractedItems.splice(idx, 1);
  renderWaItemsList();
}

function updateWaLiveTotal() {
  let total = 0;
  _waExtractedItems.forEach(item => {
    total += Number(item.price || 0);
  });
  const totalEl = $('wa-live-total');
  if (totalEl) totalEl.textContent = `${fmt(total)} ${currency}`;
}

function saveWaItemsToBudget() {
  const validItems = _waExtractedItems.filter(item => Number(item.price || 0) > 0);
  if (validItems.length === 0) {
    showToast(lang === 'fr' ? 'Veuillez saisir au moins un prix' : 'الرجاء إدخال ثمن منتج واحد على الأقل');
    return;
  }

  const selectedMonthKey = ck();
  const now = new Date();
  const nowYM = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
  let dateStr = now.toISOString().slice(0, 10);
  if (selectedMonthKey !== nowYM) {
    dateStr = `${selectedMonthKey}-01`;
  }
  const mk = dateStr.slice(0, 7);

  if (!allData[mk]) allData[mk] = defMonth();
  if (!allData[mk].notes) allData[mk].notes = [];

  let addedCount = 0;
  let addedSum = 0;

  validItems.forEach(item => {
    const amount = Number(item.price || 0);
    const chipText = `${item.icon} ${item.name}`;
    allData[mk].notes.push({
      date: dateStr,
      mainCat: item.catId,
      subCat: item.name,
      note: item.name,
      cat: item.name,
      chips: [chipText],
      amount: amount,
      person: 'family',
      remark: 'WhatsApp Express'
    });
    addedCount++;
    addedSum += amount;
  });

  persistData();
  renderNotesTab();
  renderExpensesCats();
  recalc();
  if (typeof populateDayFilter === 'function') setTimeout(populateDayFilter, 100);
  if (typeof renderWeeklyTab === 'function') renderWeeklyTab();
  closeModal('waExpressModal');
  resetWaStep();
  showToast(`✅ ${addedCount} ${lang === 'fr' ? 'dépenses enregistrées' : 'مصاريف تضافات'} (+${fmt(addedSum)} ${currency})`);
}

// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  // ALWAYS show landing page on startup — no PIN screen here
  $('landing-page').style.display = 'block';
  $('pin-screen').classList.add('hidden'); // never show PIN on startup
  // Hide entire app
  ['.header', '.nav-tabs', '.footer'].forEach(s => {
    const el = document.querySelector(s); if (el) el.style.display = 'none';
  });
  document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'none');
  // Clear any signout flag
  sessionStorage.removeItem('show_landing');
  initCharts();
  setTimeout(initLandingCharts, 200);

  // Dynamic Scroll Auto-Hide for Mobile (Header & FAB Dock)
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 600) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('.header');
    const fabDock = document.getElementById('fab-dock');
    const bottomNav = document.getElementById('main-nav-inline');

    if (scrollTop > lastScrollTop && scrollTop > 50) {
      if (header) header.style.transform = 'translateY(-100%)';
      if (fabDock) fabDock.style.transform = 'translate(-50%, 150px)';
    } else {
      if (header) header.style.transform = 'translateY(0)';
      if (fabDock) fabDock.style.transform = 'translate(-50%, 0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, { passive: true });
});

// ══════════════════════════════════════════════════════════════════
// MOBILE MENU DRAWER CONTROLLER
// ══════════════════════════════════════════════════════════════════
function toggleMobileMenu() {
  const drawer = $('mobile-menu-drawer');
  if (drawer) {
    drawer.classList.toggle('active');
    if (drawer.classList.contains('active')) {
      syncMobileMenuUI();
    }
  }
}

function closeMobileMenu() {
  const drawer = $('mobile-menu-drawer');
  if (drawer) drawer.classList.remove('active');
}

function syncMobileMenuUI() {
  const mainMonthLabel = $('monthLabel');
  const mobMonthLabel = $('mobileMonthLabel');
  if (mainMonthLabel && mobMonthLabel) {
    mobMonthLabel.textContent = mainMonthLabel.textContent;
  }

  const signedOutMain = $('auth-signed-out');
  const signedInMain = $('auth-signed-in');
  const mobSignedOut = $('mm-signed-out');
  const mobSignedIn = $('mm-signed-in');

  if (signedInMain && signedInMain.style.display !== 'none') {
    if (mobSignedOut) mobSignedOut.style.display = 'none';
    if (mobSignedIn) mobSignedIn.style.display = 'block';

    const avatarMain = $('auth-avatar');
    const mobAvatar = $('mm-user-avatar');
    if (avatarMain && mobAvatar) mobAvatar.src = avatarMain.src;

    const nameMain = $('ud-name');
    const mobName = $('mm-user-name');
    if (nameMain && mobName) mobName.textContent = nameMain.textContent;

  } else {
    if (mobSignedOut) mobSignedOut.style.display = 'block';
    if (mobSignedIn) mobSignedIn.style.display = 'none';
  }
}

function switchTabMobile(tabName, el) {
  if (typeof showTab === 'function') {
    showTab(tabName, el);
  }
  document.querySelectorAll('.mm-nav-item').forEach(item => item.classList.remove('active'));
  const targetMobItem = $('mm-tab-' + tabName);
  if (targetMobItem) targetMobItem.classList.add('active');
}
