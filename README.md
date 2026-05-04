# 💰 Smart Flousi — لوحة تتبع الميزانية

<div align="center">

![Smart Flousi](https://img.shields.io/badge/Smart%20Flousi-v3.1-7EC8B0?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyek0xMSAxN0g5VjdoMnYxMHptNCAwaC0yVjdoMnYxMHoiLz48L3N2Zz4=)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-2E75B6?style=for-the-badge&logo=github)
![Languages](https://img.shields.io/badge/Languages-5-A8C5A0?style=for-the-badge)
![No Backend](https://img.shields.io/badge/No%20Backend-100%25%20HTML-E8A598?style=for-the-badge)

**تطبيق ويب مجاني لتتبع ميزانيتك الشهرية — بدون خادم، بدون تسجيل، بياناتك عندك**

[🌐 **فتح التطبيق**](https://abdelbelmoufadal-bot.github.io/smart-flousi/) • [📸 لقطات الشاشة](#-لقطات-الشاشة) • [✨ المميزات](#-المميزات)

</div>

---

## 🌍 متعدد اللغات

| 🇲🇦 عربية | 🇲🇦 دارجة | 🇫🇷 Français | 🇬🇧 English | 🇪🇸 Español |
|:---:|:---:|:---:|:---:|:---:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

تغيير اللغة يغير اتجاه الصفحة تلقائياً (RTL / LTR)

---

## ✨ المميزات

### 📊 لوحة الميزانية
- **6 بطاقات KPI** — الدخل، الفواتير، المصاريف، التوفير، الديون، الباقي
- **3 رسوم بيانية** — دوناط توزيع الفلوس، أعمدة مخطط/فعلي، بطاقة الباقي
- **جداول قابلة للتعديل** — الفواتير، المصاريف، التوفير، الديون، الدخل
- بيانات افتراضية جاهزة عند كل شهر جديد

### 📝 دفتر الملاحظات
- سجل أي مصروف مع التاريخ والفئة والمبلغ
- **التجميع التلقائي** — كل ما تكتبه يضاف للمصاريف حسب الفئة:

| فئة الملاحظة | تُجمع في المصاريف |
|---|---|
| مواد غذائية | مواد غذائية |
| السوق | السوق |
| قهوة | قهوة |
| النقل | Gasoil |
| أخرى | أخرى |

- رسم بياني توزيع + ملخص تفصيلي

### 📅 مقارنة شهرية
- جدول كامل للـ 12 شهر
- رسم بياني خطي لتطور الدخل والمصاريف
- الشهر الحالي مميز تلقائياً

### 🗓️ نظام الأشهر
- تنقل سريع بين الأشهر ← →
- تقويم لاختيار أي شهر وأي سنة
- **3 خيارات لشهر جديد:**
  - 📋 كوبياو المخطط فقط (الأكثر استخداماً)
  - ✨ شهر فارغ
  - 🔄 كوبياو كل شي

### 🔐 حماية بـ PIN
- رمز PIN من 4 أرقام عند فتح التطبيق
- تفعيل/تعطيل من الإعدادات
- تغيير الرمز وقت ما بغيتي

### 💾 نسخ احتياطي
- **تحميل ملف JSON** — كل بياناتك في ملف واحد
- **استيراد** — ترجع بياناتك من أي ملف سابق
- **تعليمات Google Drive** مضمنة في التطبيق
- حفظ تلقائي في متصفحك

---

## 🚀 كيفاش تستعمله

### على الموبايل (Android / iOS)
1. افتح الرابط في **Chrome** أو **Safari**
2. اضغط على قائمة المتصفح ⋮
3. اختر **"إضافة إلى الشاشة الرئيسية"**
4. يظهر كأيقونة تطبيق حقيقي 📱

### على الكمبيوتر
افتح مباشرة: `https://abdelbelmoufadal-bot.github.io/smart-flousi/`

---

## 💾 أين تُحفظ بياناتي؟

> البيانات تُحفظ في **localStorage** في متصفحك — لا ترسل لأي خادم

| الحالة | النتيجة |
|---|---|
| تغلق المتصفح وترجع | ✅ البيانات موجودة |
| تعيد تشغيل الجهاز | ✅ البيانات موجودة |
| تمسح Cache المتصفح | ❌ تُفقد البيانات |
| تغير الجهاز | ❌ البيانات غير موجودة |

**الحل:** استخدم زر 💾 واحفظ ملف JSON بانتظام، ثم ارفعه على Google Drive

---

## 🛠️ التقنيات المستخدمة

```
HTML5 + CSS3 + Vanilla JavaScript
Chart.js 4.4.1
Google Fonts (Tajawal + DM Mono)
localStorage API
```

لا يحتاج:
- ❌ Node.js
- ❌ npm
- ❌ Framework
- ❌ Server
- ❌ Database

---

## 📁 هيكل الملفات

```
smart-flousi/
│
└── index.html        ← التطبيق كاملاً في ملف واحد
```

---

## 🔄 تحديث التطبيق

1. حمّل ملف `index.html` الجديد
2. افتح الـ repo على GitHub
3. اضغط على `index.html` → ✏️ Edit
4. احذف كل شي والصق الكود الجديد
5. اضغط **Commit changes**
6. انتظر دقيقة واحدة ← التطبيق يتحدث تلقائياً

---

## 📸 لقطات الشاشة

| لوحة الميزانية | دفتر الملاحظات | مقارنة شهرية |
|:---:|:---:|:---:|
| ![Dashboard](https://via.placeholder.com/280x180/7EC8B0/FFFFFF?text=لوحة+الميزانية) | ![Notes](https://via.placeholder.com/280x180/B5A8D4/FFFFFF?text=دفتر+الملاحظات) | ![Monthly](https://via.placeholder.com/280x180/8DB4CF/FFFFFF?text=مقارنة+شهرية) |

---

## 👨‍💻 المطوّر

<div align="center">

**BELMOUFADAL Abderrahim**

[![GitHub](https://img.shields.io/badge/GitHub-abdelbelmoufadal--bot-2D3142?style=flat-square&logo=github)](https://github.com/abdelbelmoufadal-bot)

</div>

---

<div align="center">

كل فلوسك قدامك 💚

**Smart Flousi v3.1** — Made with ❤️ in Morocco 🇲🇦

</div>
