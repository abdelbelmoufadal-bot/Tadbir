import re

with open('d:/ERP/smart-flousi/js/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Make backup
with open('d:/ERP/smart-flousi/js/app.js.bak', 'w', encoding='utf-8') as f:
    f.write(js)

ar_ext = """,bud_h:'إعداد ميزانية الفئات',bud_s:'تحديد حد أقصى لكل قسم',
    lnd_logo_name:'تدبير',lnd_logo_sub:'دبّر ميزانيتك بذكاء',lnd_nav_btn:'🔑 تسجيل الدخول بـ Google',
    lnd_badge:'✦ مجاني 100% • مزامنة سحابية',lnd_h1_1:'دبّر فلوسك بذكاء',lnd_h1_2:'وفبلاصة وحدة',
    lnd_sub:'تطبيق ذكي لتتبع ميزانيتك الشهرية — سجّل مصاريفك، تابع توفيرك، وخلّص من ديونك بشكل منظم',
    lnd_start_btn:'🚀 ابدأ مجاناً مع Google',lnd_install:'📲 تثبيت التطبيق',lnd_no_card:'لا حاجة لبطاقة بنكية • مجاني للأبد',
    lnd_demo_title:'معاينة التطبيق',lnd_demo_inc:'💵 الدخل',lnd_demo_exp:'🛒 المصاريف',lnd_demo_rem:'✅ الباقي',
    lnd_demo_ch1:'فين كتمشي الفلوس',lnd_demo_ch2:'المخطط / الفعلي',lnd_demo_l1:'البيان',lnd_demo_l2:'تصرفت',
    lnd_demo_l3:'مخطط',lnd_demo_food:'مواد غذائية',lnd_demo_market:'السوق',lnd_feat_h2_1:'كل شيء تحتاجه',
    lnd_feat_h2_2:'في مكان واحد',lnd_feat_p:'تطبيق مصمم خصيصاً لتنظيم ميزانيتك بسهولة وبدون تعقيد',
    lnd_f1_t:'لوحة الميزانية',lnd_f1_d:'تتبع الدخل والفواتير والمصاريف والتوفير والديون في لوحة واحدة واضحة مع رسوم بيانية ذكية',
    lnd_f2_t:'مزامنة تلقائية',lnd_f2_d:'بياناتك محفوظة في السحاب وتتزامن بين الهاتف والكمبيوتر في الوقت الفعلي — لا تفقد أي شيء',
    lnd_f3_t:'دفتر الملاحظات',lnd_f3_d:'سجّل أي مصروف يومي بفئته ويتجمع تلقائياً مع المصاريف الشهرية بدون إدخال يدوي مكرر',
    lnd_f4_t:'مقارنة شهرية',lnd_f4_d:'تابع تطور ميزانيتك عبر 12 شهر مع رسم بياني يبين الفرق بين المخطط والفعلي',
    lnd_f5_t:'لغتان مكتملتان',lnd_f5_d:'العربية • Français — تغيير اللغة يغيّر اتجاه الصفحة والمكونات تلقائياً',
    lnd_f6_t:'حماية وأمان',lnd_f6_d:'تسجيل دخول آمن بـ Google + رمز PIN لحماية التطبيق على جهازك — بياناتك لك وحدك',
    lnd_stat_1:'مجاني',lnd_stat_2:'لغتان',lnd_stat_3:'سحاب آمن',lnd_stat_4:'كل الأجهزة',
    lnd_step_h2:'كيف يشتغل؟',lnd_step_p:'3 خطوات بسيطة تنظم فيها ميزانيتك',
    lnd_s1_t:'سجّل دخولك بـ Google',lnd_s1_d:'اضغط على "ابدأ مجاناً" وسجّل بحساب Google ديالك — لا تسجيل، لا كلمة مرور',
    lnd_s2_t:'أدخل ميزانيتك',lnd_s2_d:'عندك بيانات افتراضية جاهزة — فقط أدخل الأرقام الحقيقية ديالك في الخانات المناسبة',
    lnd_s3_t:'تابع وتحكم في فلوسك',lnd_s3_d:'البيانات تتزامن تلقائياً — افتح التطبيق من الهاتف أو الكمبيوتر وتلقى كل شيء في مكانه',
    lnd_final_h2:'جاهز تنظم فلوسك؟ 💚',lnd_final_p:'ابدأ دابا — مجاني 100% ولا تحتاج لأي إعداد معقد',
    lnd_final_note:'لا حاجة لبطاقة بنكية',lnd_footer_c:'دبّر فلوسك بذكاء 💚 — جميع الحقوق محفوظة'"""

fr_ext = """,bud_h:'Configurer le budget',bud_s:'Définir un plafond par catégorie',
    lnd_logo_name:'Tadbir',lnd_logo_sub:'Gérez votre budget intelligemment',lnd_nav_btn:'🔑 Connexion Google',
    lnd_badge:'✦ 100% Gratuit • Synchro Cloud',lnd_h1_1:'Gérez votre argent',lnd_h1_2:'en un seul endroit',
    lnd_sub:'Application intelligente pour suivre votre budget mensuel — notez vos dépenses, suivez vos économies et remboursez vos dettes',
    lnd_start_btn:'🚀 Commencer avec Google',lnd_install:"📲 Installer l'app",lnd_no_card:'Aucune carte bancaire requise • Gratuit à vie',
    lnd_demo_title:"Aperçu de l'app",lnd_demo_inc:'💵 Revenus',lnd_demo_exp:'🛒 Dépenses',lnd_demo_rem:'✅ Reste',
    lnd_demo_ch1:'Répartition',lnd_demo_ch2:'Prévu / Réalisé',lnd_demo_l1:'Désignation',lnd_demo_l2:'Réalisé',
    lnd_demo_l3:'Prévu',lnd_demo_food:'Alimentation',lnd_demo_market:'Marché',lnd_feat_h2_1:'Tout ce dont vous avez besoin',
    lnd_feat_h2_2:'au même endroit',lnd_feat_p:'Conçue spécialement pour organiser votre budget facilement et sans complexité',
    lnd_f1_t:'Tableau de bord',lnd_f1_d:'Suivez revenus, factures, dépenses, épargne et dettes sur un tableau clair avec graphiques',
    lnd_f2_t:'Synchro automatique',lnd_f2_d:'Vos données sont dans le cloud et synchronisées en temps réel entre appareils',
    lnd_f3_t:'Carnet de notes',lnd_f3_d:'Notez vos dépenses quotidiennes et elles se cumulent automatiquement sans saisie',
    lnd_f4_t:'Comparaison',lnd_f4_d:"Suivez l'évolution sur 12 mois avec un graphique prévu vs réalisé",
    lnd_f5_t:'Bilingue',lnd_f5_d:"Arabe • Français — le changement de langue adapte automatiquement l'interface (RTL/LTR)",
    lnd_f6_t:'Sécurité',lnd_f6_d:'Connexion Google + code PIN local pour protéger vos données privées',
    lnd_stat_1:'Gratuit',lnd_stat_2:'Langues',lnd_stat_3:'Cloud Sécurisé',lnd_stat_4:'Multi-appareils',
    lnd_step_h2:'Comment ça marche ?',lnd_step_p:'3 étapes simples pour organiser votre budget',
    lnd_s1_t:'Connectez-vous via Google',lnd_s1_d:"Cliquez sur Commencer et utilisez Google — pas de mot de passe",
    lnd_s2_t:'Entrez votre budget',lnd_s2_d:'Des données démo sont prêtes — remplacez-les par vos montants réels',
    lnd_s3_t:'Suivez et contrôlez',lnd_s3_d:'Tout se synchronise automatiquement. Ouvrez depuis n\\'importe où',
    lnd_final_h2:'Prêt à organiser votre argent ? 💚',lnd_final_p:'Commencez maintenant — 100% gratuit, aucune configuration',
    lnd_final_note:'Pas de carte bancaire requise',lnd_footer_c:'Gérez intelligemment 💚 — Tous droits réservés'"""

js = js.replace('family_stats:\\'👨‍👩‍👦‍👦 استهلاك العائلة\\'', 'family_stats:\\'👨‍👩‍👦‍👦 استهلاك العائلة\\'' + ar_ext)
js = js.replace('family_stats:\\'👨‍👩‍👦‍👦 Consommation familiale\\'', 'family_stats:\\'👨‍👩‍👦‍👦 Consommation familiale\\'' + fr_ext)

set_lang_updates = """
  ['t-bud-h','t-bud-s',
   't-lnd-logo-name','t-lnd-logo-sub','t-lnd-nav-btn','t-lnd-badge','t-lnd-h1-1','t-lnd-h1-2',
   't-lnd-sub','t-lnd-start-btn','t-lnd-install','t-lnd-no-card','t-lnd-demo-title','t-lnd-demo-inc',
   't-lnd-demo-exp','t-lnd-demo-rem','t-lnd-demo-ch1','t-lnd-demo-ch2','t-lnd-demo-l1','t-lnd-demo-l2',
   't-lnd-demo-l3','t-lnd-demo-food','t-lnd-demo-market','t-lnd-feat-h2-1','t-lnd-feat-h2-2','t-lnd-feat-p',
   't-lnd-f1-t','t-lnd-f1-d','t-lnd-f2-t','t-lnd-f2-d','t-lnd-f3-t','t-lnd-f3-d','t-lnd-f4-t','t-lnd-f4-d',
   't-lnd-f5-t','t-lnd-f5-d','t-lnd-f6-t','t-lnd-f6-d','t-lnd-stat-1','t-lnd-stat-2','t-lnd-stat-3','t-lnd-stat-4',
   't-lnd-step-h2','t-lnd-step-p','t-lnd-s1-t','t-lnd-s1-d','t-lnd-s2-t','t-lnd-s2-d','t-lnd-s3-t','t-lnd-s3-d',
   't-lnd-final-h2','t-lnd-final-p','t-lnd-final-note','t-lnd-footer-c'].forEach(k => {
     let key = k.replace('t-', '').replace(/-/g, '_');
     set(k, t[key]);
  });
  set('t-lnd-final-btn', t.lnd_start_btn);
  set('t-pin-title', t.lnd_logo_name);
  set('t-carry-balance', t.carry_balance);
"""

js = js.replace('  // Calendar legend & labels', set_lang_updates + '\\n  // Calendar legend & labels')

with open('d:/ERP/smart-flousi/js/app.js', 'w', encoding='utf-8') as f:
    f.write(js)
print('DONE JS')
