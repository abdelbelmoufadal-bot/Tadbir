import json
import re

with open('d:/ERP/smart-flousi/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make a backup
with open('d:/ERP/smart-flousi/index.html.bak', 'w', encoding='utf-8') as f:
    f.write(html)

# Replacements in index.html to add IDs
reps = [
    ('<div class="lnd-logo-name">تدبير</div>', '<div class="lnd-logo-name" id="t-lnd-logo-name">تدبير</div>'),
    ('<div class="lnd-logo-sub">دبّر ميزانيتك بذكاء</div>', '<div class="lnd-logo-sub" id="t-lnd-logo-sub">دبّر ميزانيتك بذكاء</div>'),
    ('<button class="lnd-cta-nav" onclick="fbSignIn()">🔑 تسجيل الدخول بـ Google</button>', '<button class="lnd-cta-nav" onclick="fbSignIn()" id="t-lnd-nav-btn">🔑 تسجيل الدخول بـ Google</button>'),
    ('<div class="lnd-badge">✦ مجاني 100% • مزامنة سحابية</div>', '<div class="lnd-badge" id="t-lnd-badge">✦ مجاني 100% • مزامنة سحابية</div>'),
    ('<h1 class="lnd-h1">دبّر فلوسك بذكاء<br><span>وفبلاصة وحدة</span></h1>', '<h1 class="lnd-h1"><span id="t-lnd-h1-1">دبّر فلوسك بذكاء</span><br><span id="t-lnd-h1-2">وفبلاصة وحدة</span></h1>'),
    ('<p class="lnd-sub">تطبيق ذكي لتتبع ميزانيتك الشهرية — سجّل مصاريفك، تابع توفيرك، وخلّص من ديونك بشكل منظم</p>', '<p class="lnd-sub" id="t-lnd-sub">تطبيق ذكي لتتبع ميزانيتك الشهرية — سجّل مصاريفك، تابع توفيرك، وخلّص من ديونك بشكل منظم</p>'),
    ('<button class="lnd-cta-hero" onclick="fbSignIn()">🚀 ابدأ مجاناً مع Google</button>', '<button class="lnd-cta-hero" onclick="fbSignIn()" id="t-lnd-start-btn">🚀 ابدأ مجاناً مع Google</button>'),
    ('📲 تثبيت التطبيق', '<span id="t-lnd-install">📲 تثبيت التطبيق</span>'),
    ('<p class="lnd-cta-note">لا حاجة لبطاقة بنكية • مجاني للأبد</p>', '<p class="lnd-cta-note" id="t-lnd-no-card">لا حاجة لبطاقة بنكية • مجاني للأبد</p>'),
    ('<div class="lnd-demo-title">معاينة التطبيق</div>', '<div class="lnd-demo-title" id="t-lnd-demo-title">معاينة التطبيق</div>'),
    ('<div class="demo-kpi-label">💵 الدخل</div>', '<div class="demo-kpi-label" id="t-lnd-demo-inc">💵 الدخل</div>'),
    ('<div class="demo-kpi-label">🛒 المصاريف</div>', '<div class="demo-kpi-label" id="t-lnd-demo-exp">🛒 المصاريف</div>'),
    ('<div class="demo-kpi-label">✅ الباقي</div>', '<div class="demo-kpi-label" id="t-lnd-demo-rem">✅ الباقي</div>'),
    ('<div class="demo-chart-label">فين كتمشي الفلوس</div>', '<div class="demo-chart-label" id="t-lnd-demo-ch1">فين كتمشي الفلوس</div>'),
    ('<div class="demo-chart-label">المخطط / الفعلي</div>', '<div class="demo-chart-label" id="t-lnd-demo-ch2">المخطط / الفعلي</div>'),
    ('<span>البيان</span>', '<span id="t-lnd-demo-l1">البيان</span>'),
    ('>تصرفت</span>', ' id="t-lnd-demo-l2">تصرفت</span>'),
    ('>مخطط</span>', ' id="t-lnd-demo-l3">مخطط</span>'),
    ('مواد غذائية</span>', ' id="t-lnd-demo-food">مواد غذائية</span>'),
    ('>السوق</span>', ' id="t-lnd-demo-market">السوق</span>'),
    ('<h2>كل شيء تحتاجه <span style="color:#7EC8B0;">في مكان واحد</span></h2>', '<h2><span id="t-lnd-feat-h2-1">كل شيء تحتاجه</span> <span style="color:#7EC8B0;" id="t-lnd-feat-h2-2">في مكان واحد</span></h2>'),
    ('<p>تطبيق مصمم خصيصاً لتنظيم ميزانيتك بسهولة وبدون تعقيد</p>', '<p id="t-lnd-feat-p">تطبيق مصمم خصيصاً لتنظيم ميزانيتك بسهولة وبدون تعقيد</p>'),
    ('<div class="feature-title">لوحة الميزانية</div>', '<div class="feature-title" id="t-lnd-f1-t">لوحة الميزانية</div>'),
    ('<div class="feature-desc">تتبع الدخل والفواتير والمصاريف والتوفير والديون في لوحة واحدة واضحة مع رسوم بيانية ذكية</div>', '<div class="feature-desc" id="t-lnd-f1-d">تتبع الدخل والفواتير والمصاريف والتوفير والديون في لوحة واحدة واضحة مع رسوم بيانية ذكية</div>'),
    ('<div class="feature-title">مزامنة تلقائية</div>', '<div class="feature-title" id="t-lnd-f2-t">مزامنة تلقائية</div>'),
    ('<div class="feature-desc">بياناتك محفوظة في السحاب وتتزامن بين الهاتف والكمبيوتر في الوقت الفعلي — لا تفقد أي شيء</div>', '<div class="feature-desc" id="t-lnd-f2-d">بياناتك محفوظة في السحاب وتتزامن بين الهاتف والكمبيوتر في الوقت الفعلي — لا تفقد أي شيء</div>'),
    ('<div class="feature-title">دفتر الملاحظات</div>', '<div class="feature-title" id="t-lnd-f3-t">دفتر الملاحظات</div>'),
    ('<div class="feature-desc">سجّل أي مصروف يومي بفئته ويتجمع تلقائياً مع المصاريف الشهرية بدون إدخال يدوي مكرر</div>', '<div class="feature-desc" id="t-lnd-f3-d">سجّل أي مصروف يومي بفئته ويتجمع تلقائياً مع المصاريف الشهرية بدون إدخال يدوي مكرر</div>'),
    ('<div class="feature-title">مقارنة شهرية</div>', '<div class="feature-title" id="t-lnd-f4-t">مقارنة شهرية</div>'),
    ('<div class="feature-desc">تابع تطور ميزانيتك عبر 12 شهر مع رسم بياني يبين الفرق بين المخطط والفعلي</div>', '<div class="feature-desc" id="t-lnd-f4-d">تابع تطور ميزانيتك عبر 12 شهر مع رسم بياني يبين الفرق بين المخطط والفعلي</div>'),
    ('<div class="feature-title">لغتان مكتملتان</div>', '<div class="feature-title" id="t-lnd-f5-t">لغتان مكتملتان</div>'),
    ('<div class="feature-desc">العربية • Français — تغيير اللغة يغيّر اتجاه الصفحة والمكونات تلقائياً</div>', '<div class="feature-desc" id="t-lnd-f5-d">العربية • Français — تغيير اللغة يغيّر اتجاه الصفحة والمكونات تلقائياً</div>'),
    ('<div class="feature-title">حماية وأمان</div>', '<div class="feature-title" id="t-lnd-f6-t">حماية وأمان</div>'),
    ('<div class="feature-desc">تسجيل دخول آمن بـ Google + رمز PIN لحماية التطبيق على جهازك — بياناتك لك وحدك</div>', '<div class="feature-desc" id="t-lnd-f6-d">تسجيل دخول آمن بـ Google + رمز PIN لحماية التطبيق على جهازك — بياناتك لك وحدك</div>'),
    ('<div class="stat-label">مجاني</div>', '<div class="stat-label" id="t-lnd-stat-1">مجاني</div>'),
    ('<div class="stat-label">لغتان</div>', '<div class="stat-label" id="t-lnd-stat-2">لغتان</div>'),
    ('<div class="stat-label">سحابي</div>', '<div class="stat-label" id="t-lnd-stat-3">سحابي</div>'),
    ('<div class="stat-label">آمن</div>', '<div class="stat-label" id="t-lnd-stat-4">آمن</div>'),
    ('<h2>كيفاش تبدا؟</h2>', '<h2 id="t-lnd-step-h2">كيفاش تبدا؟</h2>'),
    ('<h3>سجّل الدخول</h3>', '<h3 id="t-lnd-s1-t">سجّل الدخول</h3>'),
    ('<p>استخدم حسابك ديال Google بنقرة وحدة، بلا ما تحتاج تصاوب حساب جديد أو تحفظ كلمة سر</p>', '<p id="t-lnd-s1-d">استخدم حسابك ديال Google بنقرة وحدة، بلا ما تحتاج تصاوب حساب جديد أو تحفظ كلمة سر</p>'),
    ('<h3>أدخل ميزانيتك</h3>', '<h3 id="t-lnd-s2-t">أدخل ميزانيتك</h3>'),
    ('<p>عندك بيانات افتراضية جاهزة — فقط أدخل الأرقام الحقيقية ديالك في الخانات المناسبة</p>', '<p id="t-lnd-s2-d">عندك بيانات افتراضية جاهزة — فقط أدخل الأرقام الحقيقية ديالك في الخانات المناسبة</p>'),
    ('<h3>تابع وتحكم في فلوسك</h3>', '<h3 id="t-lnd-s3-t">تابع وتحكم في فلوسك</h3>'),
    ('<p>البيانات تتزامن تلقائياً — افتح التطبيق من الهاتف أو الكمبيوتر وتلقى كل شيء في مكانه</p>', '<p id="t-lnd-s3-d">البيانات تتزامن تلقائياً — افتح التطبيق من الهاتف أو الكمبيوتر وتلقى كل شيء في مكانه</p>'),
    ('<h2>جاهز تنظم فلوسك؟ 💚</h2>', '<h2 id="t-lnd-final-h2">جاهز تنظم فلوسك؟ 💚</h2>'),
    ('<p>ابدأ دابا — مجاني 100% ولا تحتاج لأي إعداد معقد</p>', '<p id="t-lnd-final-p">ابدأ دابا — مجاني 100% ولا تحتاج لأي إعداد معقد</p>'),
    ('<button class="lnd-cta-hero" onclick="fbSignIn()">🚀 ابدأ مجاناً مع Google</button>', '<button class="lnd-cta-hero" onclick="fbSignIn()" id="t-lnd-final-btn">🚀 ابدأ مجاناً مع Google</button>'),
    ('<p style="font-size:11px;color:rgba(255,255,255,.2);margin-top:12px;">لا حاجة لبطاقة بنكية</p>', '<p style="font-size:11px;color:rgba(255,255,255,.2);margin-top:12px;" id="t-lnd-final-note">لا حاجة لبطاقة بنكية</p>'),
    ('<span>إعداد ميزانية الفئات</span>', '<span id="t-bud-h">إعداد ميزانية الفئات</span>'),
    ('<span>تحديد حد أقصى لكل قسم</span>', '<span id="t-bud-s">تحديد حد أقصى لكل قسم</span>')
]

for old, new in reps:
    if old in html:
        # replace only the first occurrence for some, but all is fine
        html = html.replace(old, new)
    else:
        print('NOT FOUND:', old)

with open('d:/ERP/smart-flousi/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('DONE')
