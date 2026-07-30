// ══════════════════════════════════════════════
// TRANSLATIONS
// ══════════════════════════════════════════════
const LANGS={
  ar:{dir:'rtl',
    months:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
    cats:['مواد غذائية','السوق','قهوة','النقل','أخرى'],
    expLabel:['مواد غذائية','السوق','قهوة','Gasoil','أخرى'],
    pin_enter:'أدخل رمز PIN',pin_create:'إنشاء رمز PIN (4 أرقام)',pin_confirm:'أكد رمز PIN',
    pin_wrong:'❌ رمز PIN غلط',pin_mismatch:'❌ الأرقام ما تطابقوش',pin_note:'هاد الرمز يحمي تطبيقك',pin_forgot:'نسيت PIN؟',pin_locked:'محاولات كثيرة. انتظر 30 ثانية.',pin_forgot_confirm:'حذف رمز PIN فقط؟ بياناتك لن تُحذف.',
    saved:'محفوظ تلقائياً',new_btn:'✦ شهر جديد',tab1:'لوحة الميزانية',tab2:'دفتر الملاحظات',tab3:'مقارنة شهرية',
    pick:'اختار الشهر',nm:'شهر جديد',nm_sub:'كيفاش تبغي تبدا؟',
    nm1:'كوبياو المخطط فقط',nm1s:'تبقى أرقام مخطط له وتبدا من صفر',
    nm2:'شهر فارغ',nm2s:'صفحة بيضاء',nm3:'كوبياو كل شي',nm3s:'نفس الشهر الماضي',nm_btn:'إنشاء ✓',
    bk:'الحفظ والحماية',exp_h:'📤 تصدير',exp_btn:'تحميل ملف الحفظ',exp_s:'كل بياناتك في ملف JSON',
    imp_h:'📥 استيراد',imp_btn:'تحميل ملف حفظ سابق',imp_s:'ملف JSON لاسترجاع البيانات',
    drv_h:'☁️ Google Drive',s1:'كليك على تحميل ملف الحفظ',s2:'فتح Google Drive في تليفونك',
    s3:'＋ ← رفع ← اختار الملف',s4:'خلاص! بياناتك في السحاب ☁️',
    pin_h:'🔐 إعدادات PIN',pin_lbl:'قفل بـ PIN',pin_s:'حماية التطبيق عند الفتح',
    pin_ch:'تغيير رمز PIN',pin_chs:'إنشاء رمز جديد',last_save:'آخر حفظ',lang_title:'اختار اللغة',
    k_income:'الدخل ديالي',k_bills:'الفواتير',k_expenses:'المصاريف',k_savings:'التوفير',k_debts:'الديون',k_remaining:'الفلوس لي بقاو',k_emergency:'صندوق الطوارئ',emergency_target_prompt:'أدخل قيمة هدف صندوق الطوارئ الجديد:',
    hero_lbl:'الفلوس لي بقاو دابا',hero_ok:'💚 الوضع كاين',hero_zero:'🟡 بالضبط',hero_neg:'🔴 تجاوزت الميزانية',
    ch1:'فين كتمشي الفلوس',ch2:'لي مخطط له / لي تصرف',
    col_item:'البيان',col_act:'تصرفت',col_pln:'مخطط',col_goal:'الهدف',col_src:'المصدر',col_ent:'الجهة',
    add_bills:'＋ إضافة فاتورة',add_exp:'＋ إضافة مصروف',add_sav:'＋ إضافة هدف',add_dbt:'＋ إضافة دين',add_inc:'＋ إضافة مصدر دخل',
    notes_title:'دفتر الملاحظات',notes_info:'كل ما تضيفه هنا يتجمع تلقائياً مع المصاريف في لوحة الميزانية',
    notes_sub:'سجل المصاريف',notes_edit:'قابل للتعديل',notes_chart:'توزيع المصاريف',notes_sum:'ملخص',
    nt_date:'التاريخ',nt_note:'الملاحظات',nt_subcat:'الخيارات',nt_cat:'الفئة',nt_amount:'المبلغ',nt_cur:'العملة',add_note:'＋ إضافة ملاحظة',nt_remark:'💬 ملاحظة (اختياري)',nt_remark_ph:'مثال: ماركة، محل، سبب...',tab_weekly:'📊 إحصائيات',week_chart:'مصاريف الأسبوع الحالي',add_note_fab:'تسجيل مصروف',pdf_btn:'تصدير PDF',excel_btn:'تصدير Excel',
    monthly_title:'مقارنة شهرية',monthly_chart:'تطور الدخل والمصاريف',monthly_total:'المجموع',monthly_remain:'الباقي',
    footer:'دبّر فلوسك بذكاء — تدبير 💚',
    import_confirm:'هاد العملية غادي تبدل البيانات الحالية. واش متأكد؟',
    toast_add:'تمت الإضافة ✓',toast_save:'✅ تم تحميل ملف الحفظ',toast_import:'✅ تم استيراد البيانات',
    toast_pin_on:'🔐 PIN مفعّل',toast_pin_off:'🔓 PIN مؤقف',toast_pin_created:'تم إنشاء رمز PIN ✓',from_of:'من أصل',
    sync_off:'غير متصل',sync_ok:'متزامن ☁️',sync_ing:'جاري...',sync_now:'مزامنة الآن',history_h:'🕘 النسخ المحلية',history_btn:'إنشاء نسخة الآن',history_sub:'الاحتفاظ بآخر 5 نسخ على هذا الجهاز',history_empty:'لا توجد نسخة بعد',history_restore:'استرجاع',history_confirm:'استرجاع هذه النسخة؟ سيتم حفظ الوضع الحالي أولاً.',history_saved:'تم إنشاء نسخة محلية ✓',month_closed:'هذا الشهر مغلق',month_close:'إغلاق الشهر',month_reopen:'إعادة فتح الشهر',carry_balance:'ترحيل رصيد الشهر',month_exists:'الشهر التالي يحتوي على بيانات. هل تريد استبدالها؟',vs_previous:'مقارنة بالشهر السابق',expense_search:'بحث...',sort_newest:'الأحدث أولاً',sort_oldest:'الأقدم أولاً',sort_highest:'المبلغ: الأكبر',sort_lowest:'المبلغ: الأصغر',duplicate_expense:'تكرار المصروف',details:'التفاصيل',deadline:'تاريخ الهدف',interest_rate:'نسبة الفائدة (%)',monthly_payment:'القسط الشهر',remaining_amount:'المتبقي',progress:'التقدم',cancel:'إلغاء',save:'حفظ',avg_daily:'معدل المصروف اليومي',daily_budget:'الميزانية اليومية المتبقية',month_projection:'توقع نهاية الشهر',savings_rate:'نسبة التوفير',top_category:'أكبر فئة',days_elapsed:'أيام محسوبة',days_remaining:'أيام متبقية',display_currency:'وحدة عرض فقط — لا يتم تحويل المبالغ',toast_signout:'👋 تم تسجيل الخروج',toast_loaded:'تم تحميل بياناتك من السحاب',signin:'تسجيل الدخول',signout:'خروج',custom_cat:'✏️ فئة جديدة...',reset_h:'🔄 إعادة تعيين',reset_btn:'إضافة البيانات الافتراضية الناقصة',reset_sub:'يضيف فقط ما ينقص — لا يمسح بياناتك',toast_reset:'✅ تمت إضافة البيانات الافتراضية',cal_total:'الإجمالي:',cal_leg1:'عادي',cal_leg2:'متوسط',cal_leg3:'مرتفع',cal_source:'📋 المصدر: سجل المصاريف',exp_auto_note:'المبالغ من دفتر الملاحظات — المخطط قابل للتعديل',drv_today:'اليوم',drv_week:'الأسبوع',drv_month:'الشهر',drv_avg:'معدل/رحلة',drv_trips:'رحلة',drv_add_title:'تسجيل يوم جديد',drv_lbl_date:'التاريخ',drv_lbl_trips:'عدد الرحلات',drv_lbl_total:'المجموع',drv_submit:'تسجيل اليوم',drv_heatmap:'أفضل أيام الأسبوع',drv_list:'سجل الرحلات',drive_fill:'أكمل كل الحقول',stats_title:'تحليل المصاريف',stats_subtitle:'اكتشف التسربات والعادات المكلفة وفرص التوفير.',stats_month:'الشهر المحلل',stats_leaks:'🚨 تسربات محتملة',stats_products:'🧾 المنتجات الأكثر كلفة',stats_actions:'💡 إجراءات مقترحة',stats_category:'توزيع المصاريف حسب الفئة',stats_entries:'عملية',stats_discretionary:'الكماليات',stats_no_data:'لا توجد بيانات لهذا الشهر',stats_reduce:'قلّص أكبر مصروف كمالي بنسبة 25٪',stats_repeat:'راجع المشتريات المتكررة يومياً',stats_budget:'حدد سقفاً شهرياً لكل فئة',form_choose:'اختر المشتريات',form_clear:'مسح الكل ✕',filter_month:'الشهر:',filter_day:'اليوم:',filter_total:'الإجمالي:',month_total:'إجمالي الشهر',drive_sync:'⚡ يتزامن مع الدخل',offline:'📡 أنت غير متصل بالإنترنت — البيانات محفوظة محلياً',person:'المستفيد',all_people:'كل العائلة',family_stats:'👨‍👩‍👦‍👦 استهلاك العائلة',bud_h:'إعداد ميزانية الفئات',bud_s:'تحديد حد أقصى لكل قسم',lnd_logo_name:'Tadbir Pro',lnd_logo_sub:'دبّر ميزانيتك بذكاء',lnd_nav_btn:'🔑 تسجيل الدخول بـ Google',lnd_badge:'✦ مجاني 100% • مزامنة سحابية',lnd_h1_1:'دبّر فلوسك بذكاء',lnd_h1_2:'وفبلاصة وحدة',lnd_sub:'تطبيق ذكي لتتبع ميزانيتك الشهرية — سجّل مصاريفك، تابع توفيرك، وخلّص من ديونك بشكل منظم',lnd_start_btn:'🚀 ابدأ مجاناً مع Google',lnd_install:'📲 تثبيت التطبيق',lnd_no_card:'لا حاجة لبطاقة بنكية • مجاني للأبد',lnd_demo_title:'معاينة التطبيق',lnd_demo_inc:'💵 الدخل',lnd_demo_exp:'🛒 المصاريف',lnd_demo_rem:'✅ الباقي',lnd_demo_ch1:'فين كتمشي الفلوس',lnd_demo_ch2:'المخطط / الفعلي',lnd_demo_l1:'البيان',lnd_demo_l2:'تصرفت',lnd_demo_l3:'مخطط',lnd_demo_food:'مواد غذائية',lnd_demo_market:'السوق',lnd_feat_h2_1:'كل شيء تحتاجه',lnd_feat_h2_2:'في مكان واحد',lnd_feat_p:'تطبيق مصمم خصيصاً لتنظيم ميزانيتك بسهولة وبدون تعقيد',lnd_f1_t:'لوحة الميزانية',lnd_f1_d:'تتبع الدخل والفواتير والمصاريف والتوفير والديون في لوحة واحدة واضحة مع رسوم بيانية ذكية',lnd_f2_t:'مزامنة تلقائية',lnd_f2_d:'بياناتك محفوظة في السحاب وتتزامن بين الهاتف والكمبيوتر في الوقت الفعلي — لا تفقد أي شيء',lnd_f3_t:'دفتر الملاحظات',lnd_f3_d:'سجّل أي مصروف يومي بفئته ويتجمع تلقائياً مع المصاريف الشهرية بدون إدخال يدوي مكرر',lnd_f4_t:'مقارنة شهرية',lnd_f4_d:'تابع تطور ميزانيتك عبر 12 شهر مع رسم بياني يبين الفرق بين المخطط والفعلي',lnd_f5_t:'لغتان مكتملتان',lnd_f5_d:'العربية • Français — تغيير اللغة يغيّر اتجاه الصفحة والمكونات تلقائياً',lnd_f6_t:'حماية وأمان',lnd_f6_d:'تسجيل دخول آمن بـ Google + رمز PIN لحماية التطبيق على جهازك — بياناتك لك وحدك',lnd_stat_1:'مجاني',lnd_stat_2:'لغتان',lnd_stat_3:'سحاب آمن',lnd_stat_4:'كل الأجهزة',lnd_step_h2:'كيف يشتغل؟',lnd_step_p:'3 خطوات بسيطة تنظم فيها ميزانيتك',lnd_s1_t:'سجّل دخولك بـ Google',lnd_s1_d:'اضغط على "ابدأ مجاناً" وسجّل بحساب Google ديالك — لا تسجيل، لا كلمة مرور',lnd_s2_t:'أدخل ميزانيتك',lnd_s2_d:'عندك بيانات افتراضية جاهزة — فقط أدخل الأرقام الحقيقية ديالك في الخانات المناسبة',lnd_s3_t:'تابع وتحكم في فلوسك',lnd_s3_d:'البيانات تتزامن تلقائياً — افتح التطبيق من الهاتف أو الكمبيوتر وتلقى كل شيء في مكانه',lnd_final_h2:'جاهز تنظم فلوسك؟ 💚',lnd_final_p:'ابدأ دابا — مجاني 100% ولا تحتاج لأي إعداد معقد',lnd_final_note:'لا حاجة لبطاقة بنكية',lnd_footer_c:'دبّر فلوسك بذكاء 💚 — جميع الحقوق محفوظة'
  },
  fr:{dir:'ltr',
    months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    cats:['Alimentation','Marché','Loisirs','Transport','Autre'],
    expLabel:['Alimentation','Marché','Loisirs','Gasoil','Autre'],
    pin_enter:'Entrez votre code PIN',pin_create:'Créer un code PIN (4 chiffres)',pin_confirm:'Confirmez le PIN',
    pin_wrong:'❌ Code PIN incorrect',pin_mismatch:'❌ Les codes ne correspondent pas',pin_note:'Ce code protège votre application',pin_forgot:'PIN oublié ?',pin_locked:'Trop de tentatives. Attendez 30 secondes.',pin_forgot_confirm:'Supprimer uniquement le PIN ? Vos données seront conservées.',
    saved:'Sauvegardé automatiquement',new_btn:'✦ Nouveau mois',tab1:'Tableau de bord',tab2:'Carnet de notes',tab3:'Comparaison mensuelle',
    pick:'Choisir le mois',nm:'Nouveau mois',nm_sub:'Comment démarrer ?',
    nm1:'Copier le budget prévu',nm1s:'Garder les montants prévus, repartir de zéro',
    nm2:'Mois vide',nm2s:'Page blanche',nm3:'Tout copier',nm3s:'Identique au mois précédent',nm_btn:'Créer ✓',
    bk:'Sauvegarde et sécurité',exp_h:'📤 Exporter',exp_btn:'Télécharger la sauvegarde',exp_s:'Toutes vos données en JSON',
    imp_h:'📥 Importer',imp_btn:'Charger une sauvegarde',imp_s:'Fichier JSON pour restaurer vos données',
    drv_h:'☁️ Google Drive',s1:'Cliquez sur Télécharger la sauvegarde',s2:'Ouvrez Google Drive sur votre téléphone',
    s3:'＋ → Importer → Sélectionner le fichier',s4:'Terminé ! Vos données sont dans le cloud ☁️',
    pin_h:'🔐 Paramètres PIN',pin_lbl:'Verrouillage PIN',pin_s:"Protection à l'ouverture",
    pin_ch:'Changer le code PIN',pin_chs:'Créer un nouveau code',last_save:'Dernière sauvegarde',lang_title:'Choisir la langue',
    k_income:'Revenus',k_bills:'Factures',k_expenses:'Dépenses',k_savings:'Épargne',k_debts:'Dettes',k_remaining:'Solde restant',k_emergency:"Fonds d'urgence",emergency_target_prompt:"Saisissez le montant cible du fonds d'urgence:",
    hero_lbl:'Solde disponible',hero_ok:'💚 Bonne situation',hero_zero:'🟡 Équilibré',hero_neg:'🔴 Budget dépassé',
    ch1:'Répartition des dépenses',ch2:'Prévu vs Réalisé',
    col_item:'Désignation',col_act:'Réalisé',col_pln:'Prévu',col_goal:'Objectif',col_src:'Source',col_ent:'Créancier',
    add_bills:'＋ Ajouter une facture',add_exp:'＋ Ajouter une dépense',add_sav:'＋ Ajouter un objectif',add_dbt:'＋ Ajouter une dette',add_inc:'＋ Ajouter un revenu',
    notes_title:'Carnet de notes',notes_info:'Tout ce que vous ajoutez ici est automatiquement comptabilisé dans vos dépenses',
    notes_sub:'Journal des dépenses',notes_edit:'Modifiable',notes_chart:'Répartition',notes_sum:'Résumé',
    nt_date:'Date',nt_note:'Note',nt_subcat:'Options',nt_cat:'Catégorie',nt_amount:'Montant',nt_cur:'Devise',add_note:'＋ Ajouter une note',nt_remark:'💬 Remarque (optionnel)',nt_remark_ph:'Ex: marque, magasin, raison...',tab_weekly:'📊 Statistiques',week_chart:'Dépenses semaine',add_note_fab:'Ajouter',pdf_btn:'Exporter PDF',excel_btn:'Exporter Excel',
    monthly_title:'Comparaison mensuelle',monthly_chart:'Évolution revenus/dépenses',monthly_total:'Total',monthly_remain:'Solde',
    footer:'Gérez votre budget intelligemment — Tadbir 💚',
    import_confirm:'Cette opération remplacera vos données. Confirmer ?',
    toast_add:'Ajouté ✓',toast_save:'✅ Fichier téléchargé',toast_import:'✅ Données importées',
    toast_pin_on:'🔐 PIN activé',toast_pin_off:'🔓 PIN désactivé',toast_pin_created:'Code PIN créé ✓',from_of:'sur',
    sync_off:'Hors ligne',sync_ok:'Synchronisé ☁️',sync_ing:'Synchro...',sync_now:'Synchroniser maintenant',history_h:'🕘 Sauvegardes locales',history_btn:'Créer une sauvegarde',history_sub:'Conserve les 5 dernières versions sur cet appareil',history_empty:'Aucune sauvegarde locale',history_restore:'Restaurer',history_confirm:"Restaurer cette version ? L'état actuel sera sauvegardé d'abord.",history_saved:'Sauvegarde locale créée ✓',month_closed:'Ce mois est clôturé',month_close:'Clôturer le mois',month_reopen:'Rouvrir le mois',carry_balance:'Reporter le solde du mois',month_exists:'Le mois suivant contient déjà des données. Les remplacer ?',vs_previous:'Par rapport au mois précédent',expense_search:'Rechercher...',sort_newest:'Plus récentes',sort_oldest:'Plus anciennes',sort_highest:'Montant décroissant',sort_lowest:'Montant croissant',duplicate_expense:'Dupliquer la dépense',details:'Détails',deadline:'Échéance',interest_rate:"Taux d'intérêt (%)",monthly_payment:'Mensualité',remaining_amount:'Montant restant',progress:'Progression',cancel:'Annuler',save:'Enregistrer',avg_daily:'Dépense moyenne quotidienne',daily_budget:'Budget journalier restant',month_projection:'Projection de fin de mois',savings_rate:"Taux d'épargne",top_category:'Catégorie principale',days_elapsed:'jours pris en compte',days_remaining:'jours restants',display_currency:'Unité d’affichage uniquement — aucun montant ne sera converti',toast_signout:'👋 Déconnecté',toast_loaded:'Données chargées depuis le cloud',signin:'Connexion',signout:'Déconnexion',
    custom_cat:'✏️ Nouvelle catégorie...',
    reset_h:'🔄 Réinitialisation',reset_btn:'Ajouter les données par défaut manquantes',reset_sub:'Ajoute seulement ce qui manque — ne supprime rien',toast_reset:'✅ Données par défaut ajoutées',
    cal_total:'Total :',cal_leg1:'Normal',cal_leg2:'Modéré',cal_leg3:'Élevé',cal_source:'📋 Source : Carnet de notes',exp_auto_note:'Montants issus du carnet — le prévu est modifiable',
    drv_today:"Aujourd'hui",drv_week:'Semaine',drv_month:'Mois',drv_avg:'Moy./trajet',drv_trips:'trajet',drv_add_title:'Ajouter une journée',drv_lbl_date:'Date',drv_lbl_trips:'Nombre de trajets',drv_lbl_total:'Montant total',drv_submit:'Enregistrer la journée',drv_heatmap:'Dépenses par jour de la semaine',drv_list:'Historique des trajets',drive_fill:'Veuillez remplir tous les champs',
    stats_title:'Analyse des dépenses',stats_subtitle:'Repérez les fuites, les habitudes coûteuses et les économies possibles.',stats_month:'Mois analysé',stats_leaks:'🚨 Fuites probables',stats_products:'🧾 Produits les plus coûteux',stats_actions:'💡 Actions recommandées',stats_category:'Répartition par catégorie',stats_entries:'opérations',stats_discretionary:'Loisirs et extras',stats_no_data:'Aucune donnée pour ce mois',stats_reduce:'Réduire de 25 % le premier poste non essentiel',stats_repeat:'Vérifier les achats répétés presque chaque jour',stats_budget:'Fixer un plafond mensuel par catégorie',form_choose:'Sélectionnez les achats',form_clear:'Tout effacer ✕',filter_month:'Mois :',filter_day:'Jour :',filter_total:'Total :',month_total:'Total du mois',drive_sync:'⚡ Synchronisé avec les revenus',offline:'📡 Vous êtes hors ligne — les données restent enregistrées sur cet appareil',person:'Bénéficiaire',all_people:'Toute la famille',family_stats:'👨‍👩‍👦‍👦 Consommation familiale',bud_h:'Configurer le budget',bud_s:'Définir un plafond par catégorie',lnd_logo_name:'Tadbir',lnd_logo_sub:'Gérez votre budget intelligemment',lnd_nav_btn:'🔑 Connexion Google',lnd_badge:'✦ 100% Gratuit • Synchro Cloud',lnd_h1_1:'Gérez votre argent',lnd_h1_2:'en un seul endroit',lnd_sub:'Application intelligente pour suivre votre budget mensuel — notez vos dépenses, suivez vos économies et remboursez vos dettes',lnd_start_btn:'🚀 Commencer avec Google',lnd_install:"📲 Installer l'app",lnd_no_card:'Aucune carte bancaire requise • Gratuit à vie',lnd_demo_title:"Aperçu de l'app",lnd_demo_inc:'💵 Revenus',lnd_demo_exp:'🛒 Dépenses',lnd_demo_rem:'✅ Reste',lnd_demo_ch1:'Répartition',lnd_demo_ch2:'Prévu / Réalisé',lnd_demo_l1:'Désignation',lnd_demo_l2:'Réalisé',lnd_demo_l3:'Prévu',lnd_demo_food:'Alimentation',lnd_demo_market:'Marché',lnd_feat_h2_1:'Tout ce dont vous avez besoin',lnd_feat_h2_2:'au même endroit',lnd_feat_p:'Conçue spécialement pour organiser votre budget facilement et sans complexité',lnd_f1_t:'Tableau de bord',lnd_f1_d:'Suivez revenus, factures, dépenses, épargne et dettes sur un tableau clair avec graphiques',lnd_f2_t:'Synchro automatique',lnd_f2_d:'Vos données sont dans le cloud et synchronisées en temps réel entre appareils',lnd_f3_t:'Carnet de notes',lnd_f3_d:'Notez vos dépenses quotidiennes et elles se cumulent automatiquement sans saisie',lnd_f4_t:'Comparaison',lnd_f4_d:"Suivez l'évolution sur 12 mois avec un graphique prévu vs réalisé",lnd_f5_t:'Bilingue',lnd_f5_d:"Arabe • Français — le changement de langue adapte automatiquement l'interface (RTL/LTR)",lnd_f6_t:'Sécurité',lnd_f6_d:'Connexion Google + code PIN local pour protéger vos données privées',lnd_stat_1:'Gratuit',lnd_stat_2:'Langues',lnd_stat_3:'Cloud Sécurisé',lnd_stat_4:'Multi-appareils',lnd_step_h2:'Comment ça marche ?',lnd_step_p:'3 étapes simples pour organiser votre budget',lnd_s1_t:'Connectez-vous via Google',lnd_s1_d:"Cliquez sur Commencer et utilisez Google — pas de mot de passe",lnd_s2_t:'Entrez votre budget',lnd_s2_d:'Des données démo sont prêtes — remplacez-les par vos montants réels',lnd_s3_t:'Suivez et contrôlez',lnd_s3_d:"Tout se synchronise automatiquement. Ouvrez depuis n'importe où",lnd_final_h2:'Prêt à organiser votre argent ? 💚',lnd_final_p:'Commencez maintenant — 100% gratuit, aucune configuration',lnd_final_note:'Pas de carte bancaire requise',lnd_footer_c:'Gérez intelligemment 💚 — Tous droits réservés'
  }
};

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
const SK='sf_v35', PIN_KEY='sf_pin', PINON_KEY='sf_pin_on';
const COLORS={bills:'#818cf8',expenses:'#f87171',savings:'#38bdf8',debts:'#fbbf24',income:'#10b981',remaining:'#2dd4bf',emergency:'#c084fc'};
const CAT_COLORS=['#7EC8B0','#B5A8D4','#E8A598','#D4A853','#9AA0B0'];
const now=new Date();
let curYear=now.getFullYear(), curMonth=now.getMonth(), currency='درهم', pickerYear=now.getFullYear(), nmOpt='copy';
let _appReady=false;      // prevent multiple initializations
let _authReady=false;     // true only after cloud load completes
let _saveQueue=false;     // pending save after cloud load
let allData={}, lang='ar', pinBuffer='', pinMode='verify', pinTemp='', pinEnabled=false;

const mkey=(y,m)=>`${y}-${String(m+1).padStart(2,'0')}`;
const ck=()=>mkey(curYear,curMonth);
const fmt=n=>Number(n||0).toLocaleString('ar-MA');
const T=()=>LANGS[lang];
const FAMILY_MEMBERS=[
  {id:'self',ar:'أنا',fr:'Moi'},
  {id:'noufissa',ar:'نوفيسة',fr:'Noufissa'},
  {id:'iyad',ar:'إياد',fr:'Iyad'},
  {id:'owayss',ar:'أويس',fr:'Owayss'},
  {id:'family',ar:'العائلة/مشترك',fr:'Famille / commun'}
];
function personLabel(id){const p=FAMILY_MEMBERS.find(function(x){return x.id===id;});return p?(p[lang]||p.fr):T().all_people;}
function populatePersonSelects(){
  [['nf-person',false],['nf-person-filter',true],['stats-person-filter',true]].forEach(function(cfg){
    const el=$(cfg[0]);if(!el)return;const old=el.value;el.innerHTML='';
    if(cfg[1]){const all=document.createElement('option');all.value='';all.textContent=T().all_people;el.appendChild(all);}
    FAMILY_MEMBERS.forEach(function(p){const o=document.createElement('option');o.value=p.id;o.textContent=personLabel(p.id);el.appendChild(o);});
    el.value=Array.from(el.options).some(function(o){return o.value===old;})?old:(cfg[1]?'':'self');
  });
}
const $ =id=>document.getElementById(id);
const set=(id,v)=>{const e=$(id);if(e)e.textContent=v;};

// ══════════════════════════════════════════════
// HIERARCHICAL CATEGORIES FOR NOTES
// ══════════════════════════════════════════════
const MAIN_CATS = {
  ar: [
    {id:'fixed',   icon:'🏠', label:'الضروريات الثابتة',   subs:['إيجار','كهرباء/ماء','غاز/بوطة','انترنت','تأمين','مسحوق غسيل','جافيل/مبيض','سائل الأواني','منظف أرضيات','معطر جو','ورق حمام','ورق مطبخ','أكياس زبل','ألومينيوم','حجر السخان/بطاريات']},
    {id:'daily',   icon:'🛒', label:'المعيشة اليومية',      subs:['مواد غذائية','السوق','خضر وفواكه','لحوم وأسماك','خبز وفطور','حليب وألبان','بقالة/إبيسري','مطعم','عصير طري','بيض','زيت وتوابل','أرز وكسكس','معكرونة','طون/مصبرات','قطاني']},
    {id:'cafe_smoke',icon:'☕', label:'الترفيه/الكمالية',      subs:['قهوة كحلة','كابوتشينو','نسكافي','أتاي','كرواصة','مسمن','بغرير','فطور كومبلي','عصير طري','سيجارة','علبة تبغ','ولاعة','شيشة','تفكيكة','سندويش','زعزع','دانون']},
    {id:'transport',icon:'🚗',label:'التنقل',               subs:['Gasoil','نقل عام','صيانة سيارة','غسل السيارة']},
    {id:'health',  icon:'🏥', label:'الصحة',                subs:['دواء','طبيب/عيادة','صيدلية','دوليبران/مسكن','فيتامينات','سيروم/قطن','ضمادات/بلاصط','حفاضات/كوش','حليب رضع','لانجيت','سيريلاك','شامبو','صابون','معجون أسنان','مضاد عرق','جيل حلاقة','شفرات','كوتون تيج']},
    {id:'clothes', icon:'👕', label:'الملابس والمظهر',      subs:['ملابس','حلاقة/عناية']},
    {id:'learning',icon:'📚', label:'التطوير الشخصي',       subs:['تعليم/دورات','كتب']},
    {id:'fun',     icon:'🎭', label:'الترفيه والاجتماعي',   subs:['ترفيه','هدايا','سفر']},
    {id:'invest',  icon:'💰', label:'الاستثمار والطوارئ',   subs:['توفير','طوارئ','سداد ديون']}
  ],
  fr: [
    {id:'fixed',   icon:'🏠', label:'Charges fixes',        subs:['Loyer','Électricité/Eau','Gaz/Bonbonne','Internet','Assurance','Lessive/Tide','Javel','Liquide vaisselle','Désinfectant','Désodorisant','Papier toilette','Essuie-tout','Sacs poubelle','Aluminium','Piles chauffe-eau']},
    {id:'daily',   icon:'🛒', label:'Vie quotidienne',      subs:['Alimentation','Marché','Légumes/Fruits','Viandes/Poissons','Pain/Viennoiseries','Lait/Produits laitiers','Oeufs','Riz/Couscous','Pâtes','Thon/Conserves','Légumineuses','Restaurant','Jus frais','Huile/Épices']},
    {id:'cafe_smoke',icon:'☕', label:'Loisirs/Extras',           subs:['Café noir','Cappuccino','Nescafé','Thé','Croissant','Msemen','Beghrir','Petit-déj complet','Jus frais','Cigarettes','Paquet tabac','Briquet','Chicha','Tabac à pipe','Sandwich','Zaazoua','Danone']},
    {id:'transport',icon:'🚗',label:'Transport',             subs:['Gasoil','Transport public','Entretien voiture','Lavage voiture']},
    {id:'health',  icon:'🏥', label:'Santé',                subs:['Médicaments','Médecin','Pharmacie','Doliprane','Vitamines','Sérum/Coton','Pansements','Couches','Lait bébé','Lingettes','Céréales bébé','Shampoing','Savon','Dentifrice','Déodorant','Gel rasage','Lames rasoir','Coton-tige']},
    {id:'clothes', icon:'👕', label:'Vêtements et apparence',subs:['Vêtements','Coiffeur/Soins']},
    {id:'learning',icon:'📚', label:'Développement personnel',subs:['Formation/Cours','Livres']},
    {id:'fun',     icon:'🎭', label:'Loisirs et social',    subs:['Loisirs','Cadeaux','Voyage']},
    {id:'invest',  icon:'💰', label:'Épargne et urgences',  subs:['Épargne','Urgences','Remboursement dettes']}
  ]
};

function getMainCats(){return MAIN_CATS[lang]||MAIN_CATS.ar;}
function getSubCats(mainId){
  const mc=getMainCats().find(c=>c.id===mainId);
  return mc?mc.subs:[];
}
function getMainLabel(mainId){
  const mc=getMainCats().find(c=>c.id===mainId);
  return mc?mc.icon+' '+mc.label:'';
}

// Default labels per language
const DEF_LABELS={
  ar:{
    bills:['الضو','الماء','Wi-fi','التليفون','الإيجار','التأمين','نتفليكس','الغاز'],
    expenses:['مواد غذائية','السوق','ترفيه/كمالية','Gasoil','الترفيه','ملابس','صيدلية','مطعم','الحلاقة','متنوع'],
    savings:['المشروع','السفر','طوارئ','تعليم'],
    debts:['Credit Dacia','البنك','كريدي شخصي'],
    income:['الراتب','عمل ثاني','إيجار مستلم']
  },
  fr:{
    bills:['Électricité','Eau','Wi-fi','Téléphone','Loyer','Assurance','Netflix','Gaz'],
    expenses:['Alimentation','Marché','Loisirs','Gasoil','Loisirs','Vêtements','Pharmacie','Restaurant','Coiffeur','Divers'],
    savings:['Projet','Voyage','Urgences','Éducation'],
    debts:['Crédit voiture','Banque','Crédit perso'],
    income:['Salaire','2ème emploi','Loyer reçu']
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

function defMonth(){
  const lbl=DEF_LABELS[lang]||DEF_LABELS.ar;
  const pln={
    bills:[500,300,400,200,3000,300,50,150],
    expenses:[1500,500,100,600,200,300,150,200,50,200],
    savings:[500,300,500,200],
    debts:[2180,0,0],
    income:[7680,0,0]
  };
  return{
    bills:   lbl.bills.map((l,i)=>({label:l,act:0,pln:pln.bills[i]||0})),
    expenses:lbl.expenses.map((l,i)=>({label:l,act:0,pln:pln.expenses[i]||0})),
    savings: lbl.savings.map((l,i)=>({label:l,act:0,pln:pln.savings[i]||0})),
    debts:   lbl.debts.map((l,i)=>({label:l,act:0,pln:pln.debts[i]||0})),
    income:  lbl.income.map((l,i)=>({label:l,act:0,pln:pln.income[i]||0})),
    notes:[],
    expCatPln:{}
  };
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
  { keywords: ['khodra', 'khodro', 'خضرة', 'خضار', 'légumes'], nameAr: 'خضر متنوعة', nameFr: 'Légumes', icon: '🥦', catId: 'daily' },
  { keywords: ['sardin', 'sardine', 'سردين', 'حوت', 'poisson'], nameAr: 'سردين / أسماك', nameFr: 'Sardines / Poisson', icon: '🐟', catId: 'daily' },
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
  { keywords: ['monada', 'مونادا', 'مشروب غازي'], nameAr: 'مونادا', nameFr: 'Soda / Boisson', icon: '🥤', catId: 'cafe_smoke' },
  { keywords: ['halwa', 'حلوى', 'حلويات', 'tarta', 'gateau'], nameAr: 'حلوى / طورطة', nameFr: 'Pâtisserie / Tarte', icon: '🍰', catId: 'cafe_smoke' },
  { keywords: ['malah', 'موالح', 'مملحات'], nameAr: 'مملحات / موالح', nameFr: 'Salés / Biscuits', icon: '🥨', catId: 'cafe_smoke' },
  { keywords: ['3asir', 'عصير', 'jus'], nameAr: 'عصير', nameFr: 'Jus', icon: '🧃', catId: 'cafe_smoke' },
  { keywords: ['qhwa', 'qohwa', 'cafe', 'niscafe', 'قهوة'], nameAr: 'قهوة / نسكافي', nameFr: 'Café / Nescafé', icon: '☕', catId: 'cafe_smoke' },
  { keywords: ['9ax9xa', 'frota', 'قشقشة', 'تسلية', 'kikas', 'btswis', 'ptiswis', 'كيكس', 'بسكويت'], nameAr: 'قشقشة / بسكويت', nameFr: 'Snacks / Biscuits', icon: '🍿', catId: 'cafe_smoke' },

  // 🏠 الضروريات الثابتة ومستلزمات النظافة (fixed)
  { keywords: ['sabon', 'sbon d 9xo3', 'sbon ydin', 'صابون', 'savon'], nameAr: 'صابون أواني', nameFr: 'Liquide vaisselle', icon: '🫧', catId: 'fixed' },
  { keywords: ['sbon hjra', 'صابون حجر'], nameAr: 'صابون حجرة', nameFr: 'Savon de Marseille', icon: '🧼', catId: 'fixed' },
  { keywords: ['papier', 'kaghit twlit', 'papier toilette', 'بابيي', 'ورق حمام'], nameAr: 'ورق صحي', nameFr: 'Papier toilette', icon: '🧻', catId: 'fixed' },
  { keywords: ['khghit dyl ydin', 'papiye kwozine', 'essuie-tout'], nameAr: 'ورق تنشيف / مطبخ', nameFr: 'Essuie-tout', icon: '🧻', catId: 'fixed' },
  { keywords: ['jvil', 'javil', 'javel', 'جافيل'], nameAr: 'جافيل', nameFr: 'Eau de Javel', icon: '🧴', catId: 'fixed' },
  { keywords: ['sanecroi', 'snkrwa', 'sanicross', 'ساني كروا'], nameAr: 'سانيكروا', nameFr: 'Désinfectant sol', icon: '🧹', catId: 'fixed' },
  { keywords: ['hlfa dslk', 'إسفنجة'], nameAr: 'حلفة السلك / إسفنجة', nameFr: 'Éponge / Paille de fer', icon: '🧽', catId: 'fixed' },
  { keywords: ['mika d zbal', 'mikat d zbal', 'sacs poubelle'], nameAr: 'أكياس النفايات', nameFr: 'Sacs poubelle', icon: '🗑️', catId: 'fixed' },
  { keywords: ['bota', 'بوطة', 'غاز'], nameAr: 'بوطة غاز', nameFr: 'Bonbonne de gaz', icon: '🔥', catId: 'fixed' },
  { keywords: ['lma d sbagha', 'dissolvant'], nameAr: 'ماء الصباغة', nameFr: 'Dissolvant', icon: '💅', catId: 'fixed' },
  { keywords: ['sokhra', 'sokhra dar', 'سخرة', 'سخرة الدار'], nameAr: 'سخرة الدار', nameFr: 'Sokhra / Courses maison', icon: '🛍️', catId: 'fixed' },
  { keywords: ['ommo', 'tid', 'omo', 'تيد', 'أومو', 'lessive'], nameAr: 'أومو / مسحوق الغسيل', nameFr: 'Lessive', icon: '🧺', catId: 'fixed' },
  { keywords: ['tlhjar', 'tlhjar dyl skhan', 'حجر السخان', 'بطاريات', 'piles chauffe eau'], nameAr: 'حجر السخان / بطاريات', nameFr: 'Piles chauffe-eau', icon: '🔋', catId: 'fixed' },

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
// ══════════════════════════════════════════════
// PIN SYSTEM
// ══════════════════════════════════════════════
let pinFailedAttempts=0;
let pinLockedUntil=0;

async function hashPIN(pin){
  if(!window.crypto||!window.crypto.subtle)throw new Error('Secure crypto unavailable');
  const bytes=new TextEncoder().encode('tadbir-pin-v1:'+pin);
  const digest=await window.crypto.subtle.digest('SHA-256',bytes);
  return 'sha256:'+Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

async function verifyStoredPIN(pin){
  const stored=localStorage.getItem(PIN_KEY)||'';
  if(stored.startsWith('sha256:'))return stored===await hashPIN(pin);
  if(stored===pin){
    localStorage.setItem(PIN_KEY,await hashPIN(pin));
    return true;
  }
  return false;
}

function initPIN(){
  const saved=localStorage.getItem(PIN_KEY);
  pinEnabled=localStorage.getItem(PINON_KEY)==='1';
  lang=localStorage.getItem('sf_lang')||'ar';
  setLang(lang);
  if(!saved){pinMode='setup1';set('pin-sub',T().pin_create);set('pin-note',T().pin_note);}
  else if(pinEnabled){pinMode='verify';$('pin-forgot').style.display='block';set('pin-sub',T().pin_enter);}
  else{unlockApp();}
}

function pinPress(d){
  if(Date.now()<pinLockedUntil){
    set('pin-error',T().pin_locked||'Trop de tentatives. Attendez 30 secondes.');
    return;
  }
  if(pinBuffer.length>=4)return;
  pinBuffer+=d;updateDots();
  if(pinBuffer.length===4)setTimeout(handlePin,200);
}

function pinDel(){pinBuffer=pinBuffer.slice(0,-1);updateDots();set('pin-error','');}

function updateDots(err=false){
  for(let i=0;i<4;i++){
    const d=$('d'+i);
    d.classList.toggle('filled',i<pinBuffer.length&&!err);
    d.classList.toggle('error',i<pinBuffer.length&&err);
  }
}

async function handlePin(){
  const t=T();
  if(Date.now()<pinLockedUntil){
    pinBuffer='';updateDots();set('pin-error',t.pin_locked||'Trop de tentatives.');
    return;
  }
  if(pinMode==='setup1'){pinTemp=pinBuffer;pinBuffer='';updateDots();set('pin-sub',t.pin_confirm);set('pin-note','');pinMode='setup2';}
  else if(pinMode==='setup2'){
    if(pinBuffer===pinTemp){
      try{
        localStorage.setItem(PIN_KEY,await hashPIN(pinBuffer));
        localStorage.setItem(PINON_KEY,'1');pinEnabled=true;pinFailedAttempts=0;
        $('pin-screen').classList.add('hidden');$('pin-toggle').classList.add('on');showToast(t.toast_pin_created);
      }catch(e){
        pinBuffer='';pinTemp='';pinMode='setup1';updateDots();
        set('pin-error','❌ Secure PIN unavailable');
      }
    }
    else{updateDots(true);set('pin-error',t.pin_mismatch);pinBuffer='';setTimeout(()=>{updateDots();set('pin-error','');pinMode='setup1';pinTemp='';set('pin-sub',t.pin_create);},1400);}
  }else{
    let valid=false;
    try{valid=await verifyStoredPIN(pinBuffer);}catch(e){}
    if(valid){pinFailedAttempts=0;pinLockedUntil=0;unlockApp();}
    else{
      pinFailedAttempts++;
      if(pinFailedAttempts>=5){
        pinFailedAttempts=0;pinLockedUntil=Date.now()+30000;
        set('pin-error',t.pin_locked||'Trop de tentatives. Attendez 30 secondes.');
      }else set('pin-error',t.pin_wrong);
      updateDots(true);pinBuffer='';
      setTimeout(()=>{updateDots();if(Date.now()>=pinLockedUntil)set('pin-error','');},1200);
    }
  }
}

function unlockApp(){
  $('pin-screen').classList.add('hidden');
  $('landing-page').style.display='none';
  if(window._pendingUser){
    showAppAfterAuth(window._pendingUser);
    return;
  }
  const h=document.querySelector('.header');
  const n=document.querySelector('.nav-tabs');
  const f=document.querySelector('.footer');
  if(h)h.style.display='';
  if(n)n.style.display='';
  if(f)f.style.display='';
  document.querySelectorAll('.tab-panel').forEach(p=>{
    p.style.display='';
    p.classList.remove('active');
  });
  const d=$('tab-dashboard');
  if(d)d.classList.add('active');
  loadData();
  $('currencySelect').value=currency;
  setLang(lang);
  renderAll();
  buildMonthlyTable();
  syncCur();
}

function pinForgot(){
  if(!confirm(T().pin_forgot_confirm||'Supprimer uniquement le PIN ?'))return;
  localStorage.removeItem(PIN_KEY);
  localStorage.removeItem(PINON_KEY);
  pinEnabled=false;pinFailedAttempts=0;pinLockedUntil=0;
  pinBuffer='';pinTemp='';pinMode='setup1';
  $('pin-screen').classList.add('hidden');
  unlockApp();
  showToast(T().toast_pin_off);
}

function togglePIN(){
  pinEnabled=!pinEnabled;
  localStorage.setItem(PINON_KEY,pinEnabled?'1':'0');
  if(!pinEnabled){
    localStorage.removeItem(PIN_KEY);
    $('pin-toggle').classList.remove('on');
    showToast(T().toast_pin_off);
  } else {
    $('pin-toggle').classList.add('on');
    closeModal('backupModal');
    pinBuffer='';pinTemp='';pinMode='setup1';
    updateDots();
    set('pin-sub',T().pin_create);
    set('pin-note',T().pin_note||'');
    $('pin-forgot').style.display='none';
    set('pin-error','');
    $('pin-screen').classList.remove('hidden');
    showToast(T().toast_pin_on);
  }
}

function startChangePIN(){closeModal('backupModal');pinBuffer='';pinTemp='';pinMode='setup1';updateDots();set('pin-sub',T().pin_create);set('pin-note',T().pin_note);$('pin-forgot').style.display='none';set('pin-error','');$('pin-screen').classList.remove('hidden');}

function updateBackupUI(){
  $('pin-toggle').classList.toggle('on',pinEnabled);
  const t=localStorage.getItem('sf_last_save');
  set('last-backup-info',t?T().last_save+': '+t:'');
  renderSnapshotList();
}

// ══════════════════════════════════════════════
// DATA PERSISTENCE & LOADING
// ══════════════════════════════════════════════
function monthHasRealData(mk){
  const d=allData[mk];
  if(!d)return false;
  const secs=['bills','expenses','savings','debts','income'];
  const hasAny=secs.some(s=>d[s]&&d[s].length>0);
  if(!hasAny)return false;
  if(!d.bills||!d.expenses||!d.savings||!d.debts||!d.income)return false;
  return true;
}

function loadData(){
  const CURRENT_VER='4.2.0';
  const ALL_KNOWN_KEYS=['sf_v35','sf_v33','sf_v32','sf_v31','sf_v30','sf_data','tadbir_data'];

  let recovered=null;
  for(const k of ALL_KNOWN_KEYS){
    try{
      const raw=localStorage.getItem(k);
      if(raw){const parsed=JSON.parse(raw);if(parsed&&parsed.allData&&Object.keys(parsed.allData).length>0){recovered=parsed;break;}}
    }catch(e){}
  }

  if(!recovered){
    try{
      const bak=localStorage.getItem('sf_backup');
      if(bak){const p=JSON.parse(bak);if(p&&p.allData&&Object.keys(p.allData).length>0)recovered=p;}
    }catch(e){}
  }

  if(!recovered){
    try{
      const s=localStorage.getItem(SK);
      if(s){const p=JSON.parse(s);if(p&&p.allData)recovered=p;}
    }catch(e){}
  }

  if(recovered){
    allData=recovered.allData||{};
    currency=recovered.currency||'درهم';
    curYear=recovered.curYear||new Date().getFullYear();
    curMonth=recovered.curMonth!==undefined?recovered.curMonth:new Date().getMonth();
    if(recovered.lang)lang=recovered.lang;
    try{localStorage.setItem(SK,JSON.stringify({allData,currency,curYear,curMonth,lang}));}catch(e){}
  }

  localStorage.setItem('sf_version',CURRENT_VER);
  Object.keys(allData).forEach(function(mk2){
    if(!allData[mk2].expCatPln)allData[mk2].expCatPln={};
  });

  const mk=ck();
  if(!monthHasRealData(mk)){
    allData[mk]=defMonth();
  }
  if(!allData[mk].notes)allData[mk].notes=[];
}

function resetDefaults(){
  const mk=ck();
  if(!allData[mk])allData[mk]={bills:[],expenses:[],savings:[],debts:[],income:[],notes:[]};
  const d=allData[mk];
  const def=defMonth();

  ['bills','expenses','savings','debts','income'].forEach(sec=>{
    if(!d[sec])d[sec]=[];
    const existingLabels=new Set(d[sec].map(r=>(r.label||'').trim().toLowerCase()));
    def[sec].forEach(defRow=>{
      const lbl=(defRow.label||'').trim().toLowerCase();
      if(!existingLabels.has(lbl)){
        d[sec].push({label:defRow.label, act:0, pln:defRow.pln});
        existingLabels.add(lbl);
      }
    });
  });

  allData[mk]=d;
  renderAll();
  persistData();
  closeModal('backupModal');
  showToast(T().toast_reset||'✅ Done');
}

function persistData(){
  try{
    const payload=JSON.stringify({allData,currency,curYear,curMonth,lang});
    localStorage.setItem(SK,payload);
    localStorage.setItem('sf_backup',payload);
    localStorage.setItem('sf_last_save',new Date().toLocaleString());
  }catch(e){}
  if(!_isLoadingFromCloud && _authReady && typeof _fbUid !== 'undefined' && _fbUid && typeof fbScheduleSave === 'function'){
    fbScheduleSave();
  }
}

function syncDOMtoData(){}

function saveData(){
  if(_isLoadingFromCloud)return;
  syncDOMtoData();
  persistData();
}

// ══════════════════════════════════════════════
// RENDER ENGINE (SECTIONS & RECALC)
// ══════════════════════════════════════════════
function renderSection(sec){
  const data=(allData[ck()]||{})[sec]||[];
  const tb=$(sec+'-body');
  if(!tb)return;
  tb.innerHTML='';
  const isRTL=T().dir==='rtl';
  const closed=isMonthClosed();
  data.forEach((item,idx)=>{
    const tr=document.createElement('tr');
    const _over=(item.act||0)>(item.pln||0)&&(item.pln||0)>0;
    const _under=(item.act||0)<=(item.pln||0)&&(item.pln||0)>0&&(item.act||0)>0;
    const _progress=(item.pln||0)>0?Math.min(100,Math.round(Number(item.act||0)/Number(item.pln||1)*100)):0;
    const _detail=['savings','debts'].includes(sec)
      ?`<button class="row-detail-btn" onclick="openRowDetails('${sec}',${idx})" title="${T().details||'Détails'}">⚙️</button><span class="goal-progress">${_progress}%${item.meta&&item.meta.dueDate?' • '+item.meta.dueDate:''}</span>`
      :'';
    tr.className='data-row'+(_over?' row-over':_under?' row-ok':'');
    const lv=trLbl(item.label||'').replace(/"/g,'&quot;');
    tr.innerHTML=`
      <td class="lc"><input type="text" value="${lv}" placeholder="..." style="text-align:${isRTL?'right':'left'}" ${closed?'disabled':''} oninput="onInput('${sec}',${idx},'label',this.value)"></td>
      <td class="ac"><input type="number" value="${item.act||0}" min="0" placeholder="0" title="${T().col_act||'الفعلي'}" ${closed?'disabled':''} oninput="onInput('${sec}',${idx},'act',this.value)"></td>
      <td class="pc"><input type="number" value="${item.pln||0}" min="0" placeholder="0" title="${T().col_pln||'المخطط'}" ${closed?'disabled':''} oninput="onInput('${sec}',${idx},'pln',this.value)">
        <button onclick="deleteRow('${sec}',${idx})" style="display:${closed?'none':'inline'};background:none;border:none;color:#ddd;cursor:pointer;font-size:11px;vertical-align:middle;margin-right:2px;">✕</button>
        ${_detail}
      </td>`;
    tb.appendChild(tr);
  });
  if(sec==='expenses'){renderExpensesCats();}
}

function onInput(sec,idx,field,val){
  if(!ensureMonthEditable())return;
  const mk=ck();
  if(!allData[mk]||!allData[mk][sec]||!allData[mk][sec][idx])return;
  allData[mk][sec][idx][field]=(field==='label')?val:(Number(val)||0);
  persistData();
  recalc();
  const tbody=document.getElementById(sec+'-body');
  if(tbody){
    const rows=tbody.querySelectorAll('tr.data-row');
    if(rows[idx]){
      const item=allData[mk][sec][idx];
      const _over=(item.act||0)>(item.pln||0)&&(item.pln||0)>0;
      const _under=(item.act||0)<=(item.pln||0)&&(item.pln||0)>0&&(item.act||0)>0;
      rows[idx].className='data-row'+(_over?' row-over':_under?' row-ok':'');
      const progress=rows[idx].querySelector('.goal-progress');
      if(progress){
        const pct=Number(item.pln||0)>0?Math.min(100,Math.round(Number(item.act||0)/Number(item.pln||1)*100)):0;
        progress.textContent=pct+'%'+(item.meta&&item.meta.dueDate?' • '+item.meta.dueDate:'');
      }
    }
  }
}

function deleteRow(sec,idx){
  if(!ensureMonthEditable())return;
  const mk=ck();
  if(!allData[mk]||!allData[mk][sec])return;
  allData[mk][sec].splice(idx,1);
  renderSection(sec);
  recalc();
  persistData();
}

function getAllNotes(){
  var all=[];
  Object.keys(allData).forEach(function(mk2){
    ((allData[mk2]||{}).notes||[]).forEach(function(n){
      all.push(n);
    });
  });
  return all;
}

function getCurrentMonthNotes(){
  var ym=curYear+'-'+String(curMonth+1).padStart(2,'0');
  return getAllNotes().filter(function(n){
    return n.date&&n.date.startsWith(ym);
  });
}

function renderExpensesCats(){
  const tb=document.getElementById('expenses-body');
  if(!tb)return;
  tb.innerHTML='';

  const mk=ck();
  const notes=getCurrentMonthNotes();
  const cats=getMainCats();

  const catTotals={};
  notes.forEach(function(n){
    const id=n.mainCat||'daily';
    catTotals[id]=(catTotals[id]||0)+Number(n.amount||0);
  });

  if(!allData[mk])allData[mk]=defMonth();
  if(!allData[mk].expCatPln)allData[mk].expCatPln={};
  const plnMap=allData[mk].expCatPln;

  let grandAct=0, grandPln=0;

  cats.forEach(function(cat){
    const act=catTotals[cat.id]||0;
    const pln=plnMap[cat.id]||0;
    grandAct+=act; grandPln+=pln;

    const tr=document.createElement('tr');
    const overClass=act>pln&&pln>0?' cat-over':act>0&&pln>0&&act<=pln?' cat-ok':'';
    tr.className='cat-row'+overClass;

    const tdL=document.createElement('td');
    tdL.className='lc';
    tdL.innerHTML='<span style="font-size:14px;">'+cat.icon+'</span><span>'+cat.label+'</span>';

    const tdA=document.createElement('td');
    tdA.className='ac'+(act===0?' zero':'');
    tdA.textContent=act>0?fmt(act):'—';
    tdA.title=act>0?(fmt(act)+' '+currency+' من دفتر الملاحظات'):'لا يوجد إدخال هذا الشهر';

    const tdP=document.createElement('td');
    tdP.className='pc';
    const inp=document.createElement('input');
    inp.type='number'; inp.min='0'; inp.value=pln||''; inp.placeholder='0';
    inp.disabled=isMonthClosed();
    inp.title='المخطط لـ '+cat.label;
    inp.dataset.catId=cat.id;
    inp.oninput=function(){
      if(!ensureMonthEditable())return;
      const mk2=ck();
      if(!allData[mk2].expCatPln)allData[mk2].expCatPln={};
      allData[mk2].expCatPln[cat.id]=Number(this.value)||0;
      persistData();
      const newAct=catTotals[cat.id]||0;
      const newPln=Number(this.value)||0;
      const newOver=newAct>newPln&&newPln>0;
      const newOk=newAct>0&&newPln>0&&newAct<=newPln;
      tr.className='cat-row'+(newOver?' cat-over':newOk?' cat-ok':'');
      recalc();
    };
    tdP.appendChild(inp);

    tr.appendChild(tdL); tr.appendChild(tdA); tr.appendChild(tdP);
    tb.appendChild(tr);
  });
}

function renderAll(){
  ['bills','savings','debts','income'].forEach(renderSection);
  renderExpensesCats();
  updateMonthLabel();
  recalc();
  renderCalendar();
  var notesTab=document.getElementById('tab-notes');
  if(notesTab&&notesTab.classList.contains('active'))renderNotesTab();
}

function addRow(sec){
  if(!ensureMonthEditable())return;
  const mk=ck();
  if(!allData[mk])allData[mk]=defMonth();
  syncDOMtoData();
  allData[mk][sec].push({label:'',act:0,pln:0});
  renderSection(sec);
  recalc();
  persistData();
  const rows=document.querySelectorAll(`#${sec}-body tr.data-row`);
  if(rows.length>0){
    const last=rows[rows.length-1];
    const inp=last.querySelector('input[type=text]');
    if(inp)setTimeout(()=>inp.focus(),50);
  }
  showToast(T().toast_add);
}
// ══════════════════════════════════════════════
// RECALCULATION & ADVANCED METRICS
// ══════════════════════════════════════════════
function sumFromData(sec){
  const data=(allData[ck()]||{})[sec]||[];
  return data.reduce((s,r)=>({act:s.act+Number(r.act||0),pln:s.pln+Number(r.pln||0)}),{act:0,pln:0});
}

function sumExpensesWithNotes(){
  const mk=ck();
  const notes=getCurrentMonthNotes();
  let act=0;
  notes.forEach(function(n){ act+=Number(n.amount||0); });
  const plnMap=(allData[mk]||{}).expCatPln||{};
  let pln=0;
  Object.values(plnMap).forEach(function(v){ pln+=Number(v||0); });
  return{act,pln};
}

function recalc(){
  const t=T();
  const inc=sumFromData('income');
  const bill=sumFromData('bills');
  const exp=sumExpensesWithNotes();
  const sav=sumFromData('savings');
  const dbt=sumFromData('debts');
  const rem=inc.act-bill.act-exp.act-sav.act-dbt.act;
  const base=inc.act||1;
  const pct=v=>Math.max(0,Math.min(100,Math.round(Math.abs(v)/base*100)));

  set('v-income',fmt(inc.act));set('v-bills',fmt(bill.act));set('v-expenses',fmt(exp.act));
  set('v-savings',fmt(sav.act));set('v-debts',fmt(dbt.act));set('v-remaining',fmt(rem));
  [{k:'bills',v:bill.act},{k:'expenses',v:exp.act},{k:'savings',v:sav.act},{k:'debts',v:dbt.act},{k:'remaining',v:rem}].forEach(x=>{
    const b=$('bar-'+x.k);if(b)b.style.width=pct(x.v)+'%';
    set('p-'+x.k,pct(x.v)+'%');
  });
  set('p-income','100%');

  const emAct = getEmergencyFundTotal();
  const emTarget = getEmergencyFundTarget();
  const emPct = emTarget > 0 ? Math.min(100, Math.round(emAct / emTarget * 100)) : 0;
  set('v-emergency', fmt(emAct));
  const emBar = $('bar-emergency');
  if (emBar) emBar.style.width = emPct + '%';
  set('p-emergency', `${emPct}% (${t.from_of || 'من أصل'} ${fmt(emTarget)} ${currency})`);

  if (typeof checkBudgetAlerts === 'function') checkBudgetAlerts();

  set('th-income',fmt(inc.act));set('th-bills',fmt(bill.act));set('th-expenses',fmt(exp.act));
  set('th-savings',fmt(sav.act));set('th-debts',fmt(dbt.act));
  set('hero-val',fmt(rem));
  set('t-hero-main-title', t.hero_title || (lang==='fr'?'💓 Aperçu global':'💓 الوضع الإجمالي'));
  set('hero-cur-lbl', t.rem_lbl || (lang==='fr'?'Solde disponible':'درهم متبقية'));
  set('t-rh-vs', t.vs_previous_short || (lang==='fr'?'Par rapport au mois précédent :':'مقارنة بالشهر السابق:'));
  set('t-rh-daily', t.daily_avg_short || (lang==='fr'?'Moyenne quotidienne :':'معدل الصرف اليومي:'));
  set('t-rh-tip-title', t.tip_title || (lang==='fr'?'💡 Conseil :':'💡 نصيحة:'));
  const hs=$('hero-status');
  if(hs){
    hs.textContent=rem>0?(t.hero_ok||'الوضع كاين 💚'):rem===0?(t.hero_zero||'متوازن ⚖️'):(t.hero_neg||'تجاوز الميزانية 🚨');
    hs.className='rh-badge '+(rem>0?'':rem===0?'zero':'neg');
  }
  const hsub=$('hero-sub');
  if(hsub){
    hsub.innerHTML=`${t.from_of||'من أصل'} <strong>${fmt(inc.act)} ${currency}</strong> ${t.inc_sub||'مدخول'}`;
  }
  updateAdvancedMetrics({inc,bill,exp,sav,dbt,rem});
  if(chartDonut){
    chartDonut.data.datasets[0].data=[bill.act,exp.act,sav.act,dbt.act];
    chartDonut.update('none');
    const dl=$('donutLegend');
    if(dl){
      const cols=['#6366f1','#f97316','#06b6d4','#f43f5e'];
      const lbls=[t.k_bills||'الفواتير',t.k_expenses||'المصاريف',t.k_savings||'التوفير',t.k_debts||'الديون'];
      const vals=[bill.act,exp.act,sav.act,dbt.act];
      let html='';
      for(let i=0; i<4; i++){
        html+=`<div class="dcl-item">
          <div class="dcl-val">${fmt(vals[i])} ${currency}</div>
          <div class="dcl-label-group">
            <span>${lbls[i]}</span>
            <span class="dcl-dot" style="background:${cols[i]}"></span>
          </div>
        </div>`;
      }
      dl.innerHTML=html;
    }
  }
  if(chartBar){
    chartBar.data.labels = [t.k_bills||'الفواتير', t.k_expenses||'المصاريف', t.k_savings||'التوفير', t.k_debts||'الديون'];
    chartBar.data.datasets[0].data = [bill.pln, exp.pln, sav.pln, dbt.pln];
    chartBar.data.datasets[1].data = [bill.act, exp.act, sav.act, dbt.act];
    chartBar.update('none');
  }
  if(chartHero){chartHero.data.datasets[0].data=[rem>0?rem:0,bill.act+exp.act+sav.act+dbt.act];chartHero.update('none');}
  const wPanel=document.getElementById('tab-weekly');
  if(wPanel&&wPanel.classList.contains('active'))renderWeeklyTab();
  if(typeof checkDailyReminder==='function')checkDailyReminder();
  if(typeof renderExpensesCats==='function')renderExpensesCats();
}

// ══════════════════════════════════════════════
// MONTH NAVIGATION & MODALS
// ══════════════════════════════════════════════
function isMonthClosed(mk=ck()){
  return !!(allData[mk]&&allData[mk]._closed);
}

function updateAdvancedMetrics(values){
  const t=T(),today=new Date();
  const daysInMonth=new Date(curYear,curMonth+1,0).getDate();
  const shownIndex=curYear*12+curMonth,currentIndex=today.getFullYear()*12+today.getMonth();
  const elapsed=shownIndex<currentIndex?daysInMonth:shownIndex>currentIndex?1:Math.max(1,today.getDate());
  const remainingDays=shownIndex<currentIndex?0:shownIndex>currentIndex?daysInMonth:Math.max(1,daysInMonth-today.getDate()+1);
  const outflow=values.bill.act+values.exp.act+values.dbt.act;
  const dailyAverage=outflow/elapsed;
  const dailyBudget=remainingDays>0?Math.max(0,values.rem)/remainingDays:0;
  const projection=shownIndex===currentIndex?dailyAverage*daysInMonth:outflow;
  const savingsRate=values.inc.act>0?Math.round(values.sav.act/values.inc.act*100):0;

  const heroDaily=$('hero-daily-val');
  if(heroDaily) heroDaily.textContent=`${fmt(Math.round(dailyAverage))} ${currency}/${t.per_day||'يوم'}`;

  const heroTip=$('hero-tip-txt');
  if(heroTip){
    if(values.rem>0){
      heroTip.textContent=t.tip_save_first||'حافظ على التوفير أول الشهر!';
    } else {
      heroTip.textContent=t.tip_cut_extras||'قلّص المصاريف الكمالية لتوازن الميزانية!';
    }
  }

  set('am-daily',fmt(Math.round(dailyAverage))+' '+currency);
  set('am-daily-sub',elapsed+' '+(t.days_elapsed||'jours pris en compte'));
  set('am-budget',fmt(Math.round(dailyBudget))+' '+currency);
  set('am-budget-sub',remainingDays+' '+(t.days_remaining||'jours restants'));
  set('am-projection',fmt(Math.round(projection))+' '+currency);
  set('am-projection-sub',projection>values.inc.act&&values.inc.act>0?'⚠️ '+(t.hero_neg||'Budget dépassé'):'✓');
  set('am-savings',savingsRate+'%');
  set('am-savings-sub',fmt(values.sav.act)+' '+currency);
  const totals={};
  getCurrentMonthNotes().forEach(note=>{totals[note.mainCat||'daily']=(totals[note.mainCat||'daily']||0)+Number(note.amount||0);});
  const topId=Object.keys(totals).sort((a,b)=>totals[b]-totals[a])[0];
  const topCat=topId?getMainCats().find(cat=>cat.id===topId):null;
  set('am-top',topCat?(topCat.icon+' '+topCat.label):'—');
  set('am-top-sub',topId?fmt(totals[topId])+' '+currency:'');
}

function ensureMonthEditable(mk=ck()){
  if(!isMonthClosed(mk))return true;
  showToast('🔒 '+(T().month_closed||'Ce mois est clôturé'));
  return false;
}

function getMonthBalanceByKey(mk){
  const d=allData[mk];if(!d)return 0;
  const sum=section=>(d[section]||[]).reduce((total,row)=>total+Number(row.act||0),0);
  let notes=0;
  Object.keys(allData).forEach(key=>{
    ((allData[key]||{}).notes||[]).forEach(note=>{
      if(note.date&&note.date.startsWith(mk))notes+=Number(note.amount||0);
    });
  });
  return sum('income')-sum('bills')-notes-sum('savings')-sum('debts');
}

function previousMonthKey(){
  let month=curMonth-1,year=curYear;
  if(month<0){month=11;year--;}
  return mkey(year,month);
}

function toggleMonthClosed(){
  const mk=ck();if(!allData[mk])allData[mk]=defMonth();
  createLocalSnapshot(allData[mk]._closed?'before_reopen_month':'before_close_month');
  allData[mk]._closed=!allData[mk]._closed;
  persistData();renderAll();
  showToast(allData[mk]._closed?'🔒 '+(T().month_closed||'Mois clôturé'):'🔓 '+(T().month_reopen||'Mois rouvert'));
}

function updateMonthLabel(){
  const t=T(),lbl=`${t.months[curMonth]} ${curYear}`;
  set('monthLabel',lbl);set('notes-month-lbl',lbl);set('monthly-yr-lbl',`${curYear}`);
  const lock=$('month-lock-btn');
  if(lock){
    lock.textContent=isMonthClosed()?'🔒':'🔓';
    lock.title=isMonthClosed()?(t.month_reopen||'Rouvrir le mois'):(t.month_close||'Clôturer le mois');
  }
  const previousKey=previousMonthKey();
  const diffEl=$('hero-diff');
  if(diffEl){
    if(allData[previousKey]){
      const diff=getMonthBalanceByKey(ck())-getMonthBalanceByKey(previousKey);
      diffEl.textContent=`${diff>=0?'↗ +':'↘ '}${fmt(diff)} ${currency}`;
      diffEl.className='rh-metric-val '+(diff>=0?'green':'red');
    }else{
      diffEl.textContent='—';
      diffEl.className='rh-metric-val';
    }
  }
}

function navigateMonth(dir){
  if(!_isLoadingFromCloud && _authReady)persistData();
  curMonth+=dir;
  if(curMonth>11){curMonth=0;curYear++;}
  if(curMonth<0){curMonth=11;curYear--;}
  const mk=ck();
  if(!monthHasRealData(mk)){allData[mk]=defMonth();}
  if(!allData[mk].notes)allData[mk].notes=[];
  updateMonthLabel();renderAll();buildMonthlyTable();
  showToast(T().months[curMonth]+' '+curYear);
}

function renderPicker(){
  pickerYear=curYear;set('pickerYear',pickerYear);
  const g=$('monthsGrid');g.innerHTML='';
  T().months.forEach((m,i)=>{
    const mk=mkey(pickerYear,i);
    const hd=allData[mk]&&allData[mk].income&&allData[mk].income.some(r=>r.act>0||r.pln>0);
    const b=document.createElement('button');
    b.className=`month-btn${pickerYear===curYear&&i===curMonth?' active':''}${hd?' has-data':''}`;
    b.textContent=m;
    b.onclick=()=>{
      saveData();curYear=pickerYear;curMonth=i;
      const mk2=ck();
      if(!monthHasRealData(mk2)){allData[mk2]=defMonth();}
      if(!allData[mk2].notes)allData[mk2].notes=[];
      closeModal('monthModal');updateMonthLabel();renderAll();buildMonthlyTable();
      showToast(m+' '+pickerYear);
    };
    g.appendChild(b);
  });
}
function chgPY(d){pickerYear+=d;set('pickerYear',pickerYear);renderPicker();}

function selNM(o){nmOpt=o;['copy','blank','same'].forEach(x=>$('nm-'+x).classList.toggle('selected',x===o));}
function confirmNewMonth(){
  saveData();
  createLocalSnapshot('before_new_month');
  let nm=curMonth+1,ny=curYear;
  if(nm>11){nm=0;ny++;}
  const nk=mkey(ny,nm),prev=allData[ck()];
  if(monthHasRealData(nk)&&!confirm(T().month_exists||'Le mois suivant contient déjà des données. Les remplacer ?'))return;
  const carryBalance=$('nm-carry')&&$('nm-carry').checked?getMonthBalanceByKey(ck()):0;
  if(nmOpt==='blank'||!prev){allData[nk]=defMonth();}
  else if(nmOpt==='copy'){
    const c=JSON.parse(JSON.stringify(prev));
    ['bills','expenses','savings','debts','income'].forEach(s=>{c[s]=(c[s]||[]).map(x=>({label:x.label,act:0,pln:x.pln}));});
    c.notes=[];allData[nk]=c;
  }else{allData[nk]=JSON.parse(JSON.stringify(prev));allData[nk].notes=[];}
  allData[nk]._closed=false;
  if(carryBalance>0)allData[nk].income.push({label:T().dir==='rtl'?'رصيد مرحل':'Solde reporté',act:carryBalance,pln:0});
  if(carryBalance<0)allData[nk].debts.push({label:T().dir==='rtl'?'عجز مرحل':'Déficit reporté',act:Math.abs(carryBalance),pln:0});
  curMonth=nm;curYear=ny;
  closeModal('newMonthModal');updateMonthLabel();renderAll();buildMonthlyTable();
  showToast('✦ '+T().months[nm]+' '+ny+' 🎉');
}

// ══════════════════════════════════════════════
// NOTES & WHATSAPP EXPRESS PARSER
// ══════════════════════════════════════════════
function migrateNote(n){
  if(n.mainCat)return n;
  const cats=getMainCats();
  const oldCat=n.cat||(n.catIdx!==undefined?LANGS[lang].cats[n.catIdx]||'':'');
  for(const mc of cats){
    if(mc.subs.includes(oldCat)){
      n.mainCat=mc.id; n.subCat=oldCat; return n;
    }
  }
  const defaultMap={
    'مواد غذائية':'daily','السوق':'daily','خضر وفواكه':'daily','الخضرة والفاكهة':'daily',
    'لحوم وأسماك':'daily','لحم وحوت':'daily','خبز وفطور':'daily','الخبز والفطور':'daily',
    'حليب وألبان':'daily','الحليب والبان':'daily','بيض':'daily','البيضة':'daily',
    'بقالة/إبيسري':'daily','أرز وكسكس':'daily','الروز/الكسكس':'daily',
    'معكرونة':'daily','المقرونية':'daily','طون/مصبرات':'daily','الطون/مصبرات':'daily',
    'قطاني':'daily','القطاني':'daily','مطعم':'daily','ريستو':'daily',
    'عصير طري':'daily','زيت وتوابل':'daily','الزيت والتوابل':'daily',
    'مسحوق غسيل':'fixed','تيد/مسحوق غسيل':'fixed','جافيل/مبيض':'fixed','جافيل':'fixed',
    'سائل الأواني':'fixed','سائل الطاسة':'fixed','منظف أرضيات':'fixed','سانيكروا':'fixed',
    'معطر جو':'fixed','معطر الجو':'fixed','ورق حمام':'fixed','بابيي توالات':'fixed',
    'دواء':'health','طبيب/عيادة':'health','صيدلية':'health','دوليبران/مسكن':'health',
    'قهوة':'cafe_smoke','قهوة كحلة':'cafe_smoke','كابوتشينو':'cafe_smoke',
    'نسكافي':'cafe_smoke','أتاي':'cafe_smoke','شاي':'cafe_smoke',
    'كرواصة':'cafe_smoke','مسمن':'cafe_smoke','بغرير':'cafe_smoke',
    'Gasoil':'transport','النقل':'transport','نقل عام':'transport'
  };
  const mappedId=defaultMap[oldCat]||'daily';
  const mc=cats.find(c=>c.id===mappedId);
  n.mainCat=mappedId;
  n.subCat=oldCat||mc?.subs[0]||'';
  return n;
}

function getNoteMainLabel(n){return getMainLabel(n.mainCat||'daily');}
function getNoteSubLabel(n){return n.subCat||'';}
function catToExpLabel(catStr){
  if(catStr==='النقل'||catStr==='Transport'||catStr==='Transporte'||catStr==='نقل عام'||catStr==='Gasoil')return 'Gasoil';
  return catStr;
}
function getNoteCat(n){
  if(n.subCat)return n.subCat;
  if(n.cat&&typeof n.cat==='string'&&n.cat.trim())return n.cat.trim();
  const ci=n.catIdx!==undefined?n.catIdx:4;
  return (LANGS[lang]?.cats||[])[ci]||'أخرى';
}

function renderNotes(){
  const t=T(), notes=(allData[ck()]||{}).notes||[];
  const tb=$('notes-body');if(!tb)return;tb.innerHTML='';
  document.querySelectorAll('.note-card').forEach(c=>c.remove());
  const notesContainer=$('notes-cards-container');
  const mainCats=getMainCats();

  notes.forEach((n,i)=>{
    migrateNote(n);
    const mainId=n.mainCat||'daily';
    const subVal=n.subCat||'';
    const subs=getSubCats(mainId);
    const mainOpts=mainCats.map(mc=>`<option value="${mc.id}"${mc.id===mainId?' selected':''}>${mc.icon} ${mc.label}</option>`).join('');
    const subOpts=subs.map(s=>`<option value="${s}"${s===subVal?' selected':''}>${s}</option>`).join('');

    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td><input type="date" value="${n.date||''}" style="width:108px;" onchange="noteField(${i},'date',this.value)"></td>
      <td><input type="text" value="${(n.note||'').replace(/"/g,'&quot;')}" placeholder="..." style="width:100px;" onchange="noteField(${i},'note',this.value)"></td>
      <td style="min-width:120px;"><select class="cat-select" style="width:100%;margin-bottom:3px;" onchange="noteMainCat(${i},this.value)">${mainOpts}</select></td>
      <td style="min-width:100px;"><select class="cat-select" style="width:100%;" onchange="noteSubCat(${i},this.value)">${subOpts}</select></td>
      <td><input type="number" value="${n.amount||0}" style="width:65px;" onchange="noteField(${i},'amount',Number(this.value))"></td>
      <td style="color:var(--light);font-size:10px;">${currency}</td>
      <td><button onclick="delNote(${i})" style="background:none;border:none;color:#ccc;cursor:pointer;font-size:12px;">✕</button></td>`;
    tb.appendChild(tr);
  });
  updateNotesSummary();
  updateNotesChart();
  renderExpensesCats();
  recalc();
}

function noteField(i,f,v){
  if(!ensureMonthEditable())return;
  const mk=ck();if(!allData[mk]||!allData[mk].notes||!allData[mk].notes[i])return;
  allData[mk].notes[i][f]=v;
  persistData();
  if(f==='amount'||f==='note'){updateNotesSummary();updateNotesChart();renderExpensesCats();recalc();}
}
function noteMainCat(i,mainId){
  if(!ensureMonthEditable())return;
  const mk=ck();if(!allData[mk]||!allData[mk].notes||!allData[mk].notes[i])return;
  const subs=getSubCats(mainId);
  allData[mk].notes[i].mainCat=mainId;
  allData[mk].notes[i].subCat=subs[0]||'';
  persistData();
  renderNotes();
}
function noteSubCat(i,sub){
  if(!ensureMonthEditable())return;
  const mk=ck();if(!allData[mk]||!allData[mk].notes||!allData[mk].notes[i])return;
  allData[mk].notes[i].subCat=sub;
  persistData();
  updateNotesSummary();updateNotesChart();renderExpensesCats();recalc();
}
function delNote(i){
  if(!ensureMonthEditable())return;
  const mk=ck();if(!allData[mk]||!allData[mk].notes)return;
  allData[mk].notes.splice(i,1);
  persistData();renderNotes();
}
function addNote(){
  if(!ensureMonthEditable())return;
  const mk=curYear+'-'+String(curMonth+1).padStart(2,'0');
  if(!allData[mk])allData[mk]=defMonth();
  if(!allData[mk].notes)allData[mk].notes=[];
  const mc=getMainCats()[0];
  allData[mk].notes.push({date:new Date().toISOString().slice(0,10),note:'',mainCat:mc.id,subCat:mc.subs[0]||'',amount:0});
  renderNotes();persistData();showToast(T().toast_add);
}
// ══════════════════════════════════════════════
// MONTHLY TABLE & CHARTS INITIALIZATION
// ══════════════════════════════════════════════
function getMV(key,mi){
  const d=allData[mkey(curYear,mi)];if(!d||!d[key])return 0;
  let v=d[key].reduce((s,x)=>s+Number(x.act||0),0);
  if(key==='expenses'){
    const gmvYM=mkey(curYear,mi);
    Object.keys(allData).forEach(function(mk3){
      ((allData[mk3]||{}).notes||[]).forEach(function(n){
        if(n.date&&n.date.startsWith(gmvYM))v+=Number(n.amount||0);
      });
    });
  }
  return v;
}

function buildMonthlyHead(){
  const t=T();
  $('monthly-head').innerHTML=`<tr><th></th>${t.months.map(m=>`<th>${m.slice(0,3)}</th>`).join('')}<th>${t.monthly_total}</th></tr>`;
}

function buildMonthlyTable(){
  buildMonthlyHead();
  const t=T(),tb=$('monthly-body');if(!tb)return;tb.innerHTML='';
  const rows=[{key:'income',lbl:t.k_income,cls:'ri'},{key:'bills',lbl:t.k_bills,cls:'rb'},
              {key:'expenses',lbl:t.k_expenses,cls:'re'},{key:'savings',lbl:t.k_savings,cls:'rs'},{key:'debts',lbl:t.k_debts,cls:'rd'}];
  rows.forEach(rd=>{
    const tr=document.createElement('tr');tr.className=rd.cls;
    let h=`<td class="rl">${rd.lbl}</td>`;let tot=0;
    for(let mi=0;mi<12;mi++){const v=getMV(rd.key,mi);tot+=v;h+=`<td style="${mi===curMonth?'background:var(--mint-ll);font-weight:700;':''}">${v?fmt(v):'—'}</td>`;}
    h+=`<td style="font-weight:700;">${tot?fmt(tot):'—'}</td>`;tr.innerHTML=h;tb.appendChild(tr);
  });
  const rt=document.createElement('tr');rt.className='rr';
  let rh=`<td class="rl">${t.monthly_remain}</td>`;let rs=0;
  for(let mi=0;mi<12;mi++){
    const inc=getMV('income',mi),rem=inc-getMV('bills',mi)-getMV('expenses',mi)-getMV('savings',mi)-getMV('debts',mi);
    rs+=rem;rh+=`<td style="${mi===curMonth?'background:var(--mint-ll);':''}font-weight:700;color:${rem<0?'#E8A598':'var(--mint)'};">${inc?fmt(rem):'—'}</td>`;
  }
  rh+=`<td style="font-weight:700;color:var(--mint);">${rs?fmt(rs):'—'}</td>`;rt.innerHTML=rh;tb.appendChild(rt);
  syncMonthlyLine();
}

function syncMonthlyLine(){
  if(!chartLine)return;
  chartLine.data.labels=T().months;
  chartLine.data.datasets[0].data=Array.from({length:12},(_,mi)=>getMV('income',mi));
  chartLine.data.datasets[1].data=Array.from({length:12},(_,mi)=>getMV('bills',mi)+getMV('expenses',mi)+getMV('savings',mi)+getMV('debts',mi));
  chartLine.update('none');
}

// ══════════════════════════════════════════════
// BACKUP, SNAPSHOTS & EXPORT (PDF & EXCEL)
// ══════════════════════════════════════════════
const SNAPSHOT_KEY='sf_snapshots';
const MAX_LOCAL_SNAPSHOTS=5;

function getLocalSnapshots(){
  try{
    const value=JSON.parse(localStorage.getItem(SNAPSHOT_KEY)||'[]');
    return Array.isArray(value)?value.filter(s=>s&&s.id&&s.payload&&s.payload.allData):[];
  }catch(e){return[];}
}

function getSnapshotPayload(){
  if(allData&&Object.keys(allData).length){
    return JSON.parse(JSON.stringify({allData,currency,curYear,curMonth,lang}));
  }
  for(const key of [SK,'sf_backup']){
    try{
      const value=JSON.parse(localStorage.getItem(key)||'null');
      if(value&&value.allData&&Object.keys(value.allData).length)return value;
    }catch(e){}
  }
  return null;
}

function saveSnapshotPayload(payload,reason){
  if(!payload||!payload.allData||!Object.keys(payload.allData).length)return false;
  const snapshots=getLocalSnapshots();
  snapshots.unshift({
    id:String(Date.now())+'-'+Math.random().toString(36).slice(2,7),
    createdAt:new Date().toISOString(),
    reason:reason||'manual',
    payload:JSON.parse(JSON.stringify(payload))
  });
  while(snapshots.length>MAX_LOCAL_SNAPSHOTS)snapshots.pop();
  while(snapshots.length){
    try{
      localStorage.setItem(SNAPSHOT_KEY,JSON.stringify(snapshots));
      renderSnapshotList();
      return true;
    }catch(e){snapshots.pop();}
  }
  return false;
}

function createLocalSnapshot(reason){return saveSnapshotPayload(getSnapshotPayload(),reason);}
function createManualSnapshot(){
  if(createLocalSnapshot('manual'))showToast(T().history_saved||'Sauvegarde locale créée ✓');
  else showToast('❌ '+(T().history_empty||'Aucune donnée'));
}

function renderSnapshotList(){
  const list=$('snapshot-list');if(!list)return;
  list.textContent='';
  const snapshots=getLocalSnapshots();
  if(!snapshots.length){
    const empty=document.createElement('div');
    empty.className='snapshot-empty';
    empty.textContent=T().history_empty||'Aucune sauvegarde locale';
    list.appendChild(empty);
    return;
  }
  snapshots.forEach(snapshot=>{
    const row=document.createElement('div');row.className='snapshot-row';
    const meta=document.createElement('div');meta.className='snapshot-meta';
    const date=document.createElement('div');date.className='snapshot-date';
    date.textContent=new Date(snapshot.createdAt).toLocaleString();
    const reason=document.createElement('div');reason.className='snapshot-reason';
    reason.textContent=snapshot.reason||'—';
    const restore=document.createElement('button');restore.className='snapshot-restore';
    restore.textContent=T().history_restore||'Restaurer';
    restore.onclick=()=>restoreLocalSnapshot(snapshot.id);
    meta.append(date,reason);row.append(meta,restore);list.appendChild(row);
  });
}

function restoreLocalSnapshot(id){
  const snapshot=getLocalSnapshots().find(s=>s.id===id);
  if(!snapshot)return;
  if(!confirm(T().history_confirm||"Restaurer cette version ?"))return;
  createLocalSnapshot('before_restore');
  const p=JSON.parse(JSON.stringify(snapshot.payload));
  allData=p.allData;currency=p.currency||currency;
  curYear=Number.isInteger(p.curYear)?p.curYear:curYear;
  curMonth=Number.isInteger(p.curMonth)?p.curMonth:curMonth;
  if(p.lang&&LANGS[p.lang])lang=p.lang;
  persistData();
  $('currencySelect').value=currency;
  setLang(lang);renderAll();buildMonthlyTable();syncCur();
  closeModal('backupModal');
  showToast(T().toast_import||'✅ Données restaurées');
}

function exportJSON(){
  saveData();
  const d={allData,currency,curYear,curMonth,lang,exportedAt:new Date().toISOString(),version:'4.2.0'};
  const b=new Blob([JSON.stringify(d,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);
  a.download=`tadbir-${T().months[curMonth]}-${curYear}.json`;a.click();
  showToast(T().toast_save);
}

function exportPDF(){
  const mk=ck();
  const t=T();
  const monthNotes=((allData[mk]||{}).notes)||[];
  const monthData=allData[mk]||{};
  const byDate={};
  monthNotes.forEach(function(n){
    if(!byDate[n.date])byDate[n.date]=[];
    byDate[n.date].push(n);
  });

  const totalInc=(monthData.income||[]).reduce(function(s,r){return s+Number(r.act||0);},0);
  const totalBills=(monthData.bills||[]).reduce(function(s,r){return s+Number(r.act||0);},0);
  const totalExp=(monthData.expenses||[]).reduce(function(s,r){return s+Number(r.act||0);},0);
  const totalNotes=monthNotes.reduce(function(s,n){return s+Number(n.amount||0);},0);
  const totalSav=(monthData.savings||[]).reduce(function(s,r){return s+Number(r.act||0);},0);
  const totalDbt=(monthData.debts||[]).reduce(function(s,r){return s+Number(r.act||0);},0);
  const monthLabel=(t.months||[])[curMonth]||('شهر '+(curMonth+1));

  let rows='';
  Object.keys(byDate).sort().reverse().forEach(function(date){
    byDate[date].forEach(function(n){
      const mc=getMainCats().find(function(x){return x.id===n.mainCat;})||{icon:'💰',label:n.mainCat||''};
      var pdfSub=(n.chips&&n.chips.length>0)?n.chips.map(function(s){return s.replace(/^[^ ]+ /,'');}).join(' + '):(n.subCat||n.note||'');
      rows+='<tr><td>'+date+'</td><td>'+mc.icon+' '+mc.label+'</td><td>'+pdfSub+'</td><td>'+(n.remark||'—')+'</td><td style="text-align:left;font-weight:700;">'+fmt(n.amount)+' '+currency+'</td></tr>';
    });
  });

  const html='<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"><title>تقرير '+monthLabel+' '+curYear+'</title></head><body>'
    +'<h1>'+monthLabel+' '+curYear+'</h1>'
    +'<table><thead><tr><th>التاريخ</th><th>الفئة</th><th>التفصيل</th><th>ملاحظة</th><th>المبلغ</th></tr></thead><tbody>'
    +rows+'</tbody></table></body></html>';

  const blob=new Blob([html],{type:'text/html;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='تدبير-'+monthLabel+'-'+curYear+'.html';
  a.click();
  URL.revokeObjectURL(url);
  closeModal('backupModal');
  showToast('📄 جاهز للطباعة');
}

function exportExcel(){
  try{
    var mk=ck();
    var t=T();
    var monthLabel=(t.months||[])[curMonth]||('M'+(curMonth+1));
    var md=allData[mk]||{};
    var monthNotes=(md.notes)||[];
    var wb=XLSX.utils.book_new();
    var wsData=[['التاريخ', 'الفئة', 'المشتريات', 'المبلغ', 'العملة']];
    monthNotes.forEach(n=>{
      var mc=getMainCats().find(x=>x.id===n.mainCat)||{label:n.mainCat||''};
      wsData.push([n.date||'', mc.label, n.subCat||n.note||'', Number(n.amount||0), currency]);
    });
    var ws=XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'المصاريف');
    XLSX.writeFile(wb, 'تدبير-'+monthLabel+'-'+curYear+'.xlsx');
    closeModal('backupModal');
    showToast('📊 تم تصدير Excel بنجاح');
  }catch(e){
    showToast('❌ خطأ في التصدير');
  }
}

// ══════════════════════════════════════════════
// CHARTS & THEME INITIALIZATION
// ══════════════════════════════════════════════
let chartDonut,chartBar,chartHero,chartNotes,chartLine;
function initCharts(){
  Chart.defaults.font.family='Tajawal';
  function isDark(){return document.documentElement.getAttribute('data-theme')==='dark';}
  function gridColor(){return isDark()?'rgba(255,255,255,.06)':'rgba(0,0,0,.06)';}
  function tickColor(){return isDark()?'#7d8ba5':'#5A6070';}
  function legendColor(){return isDark()?'#a8b3c8':'#5A6070';}

  chartHero=new Chart($('heroDonut'),{
    type:'doughnut',
    data:{labels:['',''],datasets:[{data:[1,0],backgroundColor:['#2dd4bf','rgba(255,255,255,.08)'],borderWidth:0,borderRadius:4}]},
    options:{cutout:'78%',plugins:{legend:{display:false},tooltip:{enabled:false}},responsive:true,maintainAspectRatio:true}
  });

  const donutColors=['#6366f1','#f97316','#06b6d4','#f43f5e'];
  chartDonut=new Chart($('donutChart'),{
    type:'doughnut',
    data:{labels:['','','',''],datasets:[{data:[0,0,0,0],backgroundColor:donutColors,borderWidth:3,borderColor:isDark()?'#151c2c':'#ffffff'}]},
    options:{cutout:'62%',plugins:{legend:{display:false}},responsive:true,maintainAspectRatio:true}
  });

  chartBar=new Chart($('barChart'),{
    type:'bar',
    data:{labels:['الفواتير', 'المصاريف', 'التوفير', 'الديون'],datasets:[
      {label:'مخطط',data:[0,0,0,0],backgroundColor:'#6164ff',borderRadius:6},
      {label:'تصرفت',data:[0,0,0,0],backgroundColor:'#ff3b69',borderRadius:6}
    ]},
    options:{plugins:{legend:{display:false}},responsive:true,maintainAspectRatio:true}
  });

  chartNotes=new Chart($('notesDonut'),{
    type:'doughnut',
    data:{labels:[''],datasets:[{data:[1],backgroundColor:CAT_COLORS}]},
    options:{cutout:'55%',plugins:{legend:{position:'bottom'}},responsive:true,maintainAspectRatio:true}
  });

  chartLine=new Chart($('monthlyLine'),{
    type:'line',
    data:{labels:T().months,datasets:[
      {label:'Income',data:Array(12).fill(0),borderColor:COLORS.income,fill:true,tension:.4},
      {label:'Expenses',data:Array(12).fill(0),borderColor:COLORS.expenses,fill:true,tension:.4}
    ]},
    options:{plugins:{legend:{position:'bottom'}},responsive:true,maintainAspectRatio:false}
  });
}

function toggleTheme(){
  const currentTheme=document.documentElement.getAttribute('data-theme')||'light';
  const newTheme=currentTheme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',newTheme);
  localStorage.setItem('sf_theme',newTheme);
}

function initTheme(){
  const savedTheme=localStorage.getItem('sf_theme')||'light';
  document.documentElement.setAttribute('data-theme',savedTheme);
}

function getEmergencyFundTotal(){
  let total=0;
  Object.keys(allData).forEach(function(mk){
    const savings=allData[mk].savings||[];
    savings.forEach(function(s){
      const lbl=(s.label||'').trim().toLowerCase();
      if(['طوارئ','الطوارئ','urgences','emergency','emergencias'].includes(lbl)){
        total+=Number(s.act||0);
      }
    });
  });
  return total;
}

function getEmergencyFundTarget(){return Number(localStorage.getItem('sf_emergency_target'))||15000;}

function promptEmergencyTarget(){
  const t=T();
  const current=getEmergencyFundTarget();
  const val=prompt(t.emergency_target_prompt||"أدخل قيمة هدف صندوق الطوارئ الجديد:",current);
  if(val!==null){
    const target=Number(val)||0;
    if(target>0){
      localStorage.setItem('sf_emergency_target',target);
      recalc();
      showToast(t.saved||"محفوظ");
    }
  }
}

function checkBudgetAlerts(){
  const banner=document.getElementById('budget-alerts-banner');
  if(!banner)return;
  banner.innerHTML='';
  const limits=getBudgetLimits();
  getMainCats().forEach(function(mc){
    const lim=limits[mc.id];
    if(!lim)return;
    const spent=getCatSpentThisMonth(mc.id);
    const ratio=spent/lim;
    if(ratio>=0.8){
      const isOver=ratio>=1.0;
      const pct=Math.round(ratio*100);
      const alertDiv=document.createElement('div');
      alertDiv.className='alert-item'+(isOver?'':' warn');
      alertDiv.innerHTML=isOver?`🔴 <strong>تجاوز الميزانية!</strong> صرفت ${fmt(spent)} ${currency} في فئة ${mc.icon} ${mc.label} (${pct}%).`:`⚠️ <strong>انتبه!</strong> اقتربت من السقف المحدد لفئة ${mc.icon} ${mc.label} (${pct}%).`;
      banner.appendChild(alertDiv);
    }
  });
}

function checkDailyReminder(){
  const mk=ck();
  const today=new Date().toISOString().slice(0,10);
  const notes=((allData[mk]||{}).notes)||[];
  const hasTodayEntry=notes.some(function(n){return n.date===today;});
  if(!hasTodayEntry&&_fbUid){
    document.title='💰 تدبير — لم تسجل مصاريف اليوم';
  }else{
    document.title='تدبير';
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  initTheme();
  $('landing-page').style.display='block';
  $('pin-screen').classList.add('hidden');
  ['.header','.nav-tabs','.footer'].forEach(s=>{
    const el=document.querySelector(s);if(el)el.style.display='none';
  });
  document.querySelectorAll('.tab-panel').forEach(p=>p.style.display='none');
  sessionStorage.removeItem('show_landing');
  initCharts();
  setTimeout(initLandingCharts,200);
});