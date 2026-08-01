# 💰 تدبير | Tadbir — لوحة تسيير الميزانية

<div align="center">

![Version](https://img.shields.io/badge/تدبير-v4.4.2-7EC8B0?style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-Sync-FFCA28?style=for-the-badge&logo=firebase)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-2E75B6?style=for-the-badge&logo=github)
![Languages](https://img.shields.io/badge/Languages-5-A8C5A0?style=for-the-badge)
![Free](https://img.shields.io/badge/100%25-Gratuit-E8A598?style=for-the-badge)

**دبّر ميزانيتك بذكاء — مزامنة سحابية، 5 لغات، مجاني 100%**

[🌐 **فتح التطبيق**](https://abdelbelmoufadal-bot.github.io/smart-flousi/) • [✨ المميزات](#-المميزات) • [🚀 كيف يشتغل](#-كيف-يشتغل)

</div>

---

## 🌍 5 لغات مدعومة

| 🇲🇦 عربية | 🇲🇦 دارجة | 🇫🇷 Français | 🇬🇧 English | 🇪🇸 Español |
|:---:|:---:|:---:|:---:|:---:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

تغيير اللغة يغير اتجاه الصفحة تلقائياً (RTL ↔ LTR) ويترجم كل العناصر

---

## ✨ المميزات

### 🔐 تسجيل الدخول والأمان
- **تسجيل دخول بـ Google** — بكليك واحد، لا كلمة مرور
- **PIN اختياري ومشفّر** — حماية إضافية عند فتح التطبيق
- **حماية ضد المحاولات المتكررة** — قفل مؤقت بعد 5 محاولات خاطئة
- **بياناتك خاصة** — كل مستخدم يرى بياناته فقط
- **صفحة تقديمية** تظهر للزوار غير المسجلين

### ☁️ مزامنة سحابية (Firebase)
- البيانات تتزامن **تلقائياً** بين الهاتف والكمبيوتر
- لا تفقد بياناتك حتى لو مسحت المتصفح
- **Firestore** — قاعدة بيانات Google في الوقت الفعلي

### 📊 لوحة الميزانية
- **6 بطاقات KPI** — الدخل، الفواتير، المصاريف، التوفير، الديون، الباقي
- **رسم بياني دوناط** — توزيع المصاريف مع Legend واضح
- **رسم بياني أعمدة** — مقارنة المخطط بالفعلي
- **بطاقة الباقي** — مع مؤشر دائري وحالة الميزانية
- بيانات افتراضية جاهزة: **8 فواتير** • **10 مصاريف** • **4 توفير** • **3 ديون** • **3 دخل**
- progression des objectifs d'épargne avec échéance
- suivi des dettes avec montant restant, taux d'intérêt et mensualité
- dépense moyenne quotidienne et budget journalier restant
- projection des dépenses à la fin du mois
- taux d'épargne et catégorie principale du mois
- la devise est une unité d'affichage, sans conversion automatique

### 📝 دفتر الملاحظات (فئات هرمية)
- **8 فئات رئيسية** مع خيارات فرعية:

| الفئة | الخيارات |
|---|---|
| 🏠 الضروريات الثابتة | إيجار، كهرباء/ماء، غاز، انترنت، تأمين |
| 🛒 المعيشة اليومية | مواد غذائية، السوق، مطعم، قهوة |
| 🚗 التنقل | Gasoil، نقل عام، صيانة سيارة |
| 🏥 الصحة | دواء، طبيب/عيادة، صيدلية |
| 👕 الملابس والمظهر | ملابس، حلاقة/عناية |
| 📚 التطوير الشخصي | تعليم/دورات، كتب |
| 🎭 الترفيه والاجتماعي | ترفيه، هدايا، سفر |
| 💰 الاستثمار والطوارئ | توفير، طوارئ، سداد ديون |

- **تجميع تلقائي** — ما تضيفه يظهر مباشرة في المصاريف باللون الأحمر
- رسم بياني على الفئة الرئيسية
- recherche instantanée dans les dépenses, remarques et choix
- tri par date ou montant
- duplication rapide d'une dépense

### 📅 مقارنة شهرية
- جدول كامل للـ 12 شهر مع إجمالي سنوي
- رسم بياني خطي لتطور الدخل والمصاريف
- مقارنة immédiate du solde avec le mois précédent
- clôture et réouverture d'un mois pour éviter les modifications accidentelles
- report facultatif du solde ou du déficit vers le mois suivant

### 💾 نسخ احتياطي
- تحميل ملف JSON → رفعه على Google Drive
- استيراد ملف حفظ سابق
- الاحتفاظ تلقائياً بآخر 5 نسخ محلية مع إمكانية الاسترجاع
- إنشاء نسخة أمان قبل الاستيراد، الاسترجاع، الشهر الجديد، وتحميل بيانات السحابة
- التحقق من بنية وحجم وسلامة ملف JSON قبل الاستيراد
- **زر "إضافة البيانات الافتراضية"** — يضيف ما ينقص بدون مسح

---

## 🚀 كيف يشتغل

```
1. افتح الرابط → الصفحة التقديمية
       ↓
2. "ابدأ مجاناً مع Google"
       ↓
3. سجّل بحساب Google
       ↓
4. بياناتك الافتراضية جاهزة
       ↓
5. أي جهاز → نفس البيانات ☁️
```

---

## 📱 التثبيت على الموبايل

**Android:** Chrome → ⋮ → إضافة إلى الشاشة الرئيسية

**iOS:** Safari → ⬆️ → إضافة إلى الشاشة الرئيسية

La version 4.0 fonctionne comme une PWA installable, avec cache hors ligne et notification lorsqu'une nouvelle version est disponible.

---

## 🔧 إعداد Firebase

```
1. firebase.google.com → Create project
2. Firestore → Create → europe-west1 → Production mode
3. Authentication → Google → Enable
4. Auth Settings → Authorized domains → Add: your-username.github.io
5. Project Settings → Web app → Copy firebaseConfig → Paste in index.html
6. Firestore Rules → Copy the contents of `firestore.rules` → Publish
```

---

## 🛠️ التقنيات

```
HTML5 + CSS3 + Vanilla JavaScript   (ملفات منظمة)
Firebase v10   (Auth + Firestore)
Chart.js 4.4   (الرسوم البيانية)
Google Fonts   (Tajawal + DM Mono)
GitHub Pages   (الاستضافة المجانية)
Node.js Test Runner + GitHub Actions
```

---

## 📁 هيكل المشروع

```
tadbir/
├── index.html
├── css/style.css
├── js/
│   ├── app.js          # cœur UI, budget et statistiques
│   ├── storage.js      # stockage local, imports et Firebase
│   ├── fuel.js         # pleins et consommation
│   ├── maintenance.js  # frais et échéances d’entretien
│   ├── vehicle.js      # navigation Voiture et rentabilité
│   ├── ocr.js          # lecture locale des photos carburant
│   └── telegram.js     # notifications Telegram
├── manifest.json
├── service-worker.js
├── offline.html
├── icons/tadbir.svg
├── firestore.rules
├── tests/app.test.js
├── .github/workflows/test.yml
├── tools/split-index.js
└── README.md
```

---

## 📊 إحصائيات

| | |
|---|---|
| 🆓 السعر | مجاني 100% |
| 🌍 اللغات | 5 لغات |
| ☁️ التخزين | Firebase Firestore |
| 📱 الأجهزة | كل الأجهزة |
| 🔒 الأمان | Google Auth + PIN |

---

<div align="center">

**Créé par BELMOUFADAL Abderrahim**

دبّر فلوسك بذكاء 💚 — **تدبير | Tadbir v4.4.2** 🇲🇦

</div>
