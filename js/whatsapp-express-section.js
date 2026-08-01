// ══════════════════════════════════════════════
// WHATSAPP EXPRESS SMART GROCERY PARSER
// (Bloc final — remplace tout le bloc existant, du commentaire
// "WHATSAPP EXPRESS SMART GROCERY PARSER" jusqu'à la fin de
// saveWaItemsToBudget(), juste avant le DOMContentLoaded)
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

function openWaExpressModal(){
  openModal('waExpressModal');
  const s1=$('wa-step-1'), s2=$('wa-step-2');
  if(s1)s1.style.display='block';
  if(s2)s2.style.display='none';
  const ta=$('wa-raw-input');
  if(ta)ta.value='';
}

function resetWaStep(){
  const s1=$('wa-step-1'), s2=$('wa-step-2');
  if(s1)s1.style.display='block';
  if(s2)s2.style.display='none';
}

// Parser optimisé : gère les discussions WhatsApp collées telles quelles
// (horodatages, numéros de téléphone, lignes "Nom 15" ou "15 Nom", virgules).
function processWaInput(){
  const rawText=($('wa-raw-input')?.value||'').trim();
  if(!rawText){
    showToast(lang==='fr'?'Veuillez coller le texte de la discussion':'الرجاء إدخال النص من الواتساب');
    return;
  }

  let lines = rawText.split('\n');
  _waExtractedItems = [];

  lines.forEach(line => {
    let cleanLine = line.trim();
    if(!cleanLine) return;

    // Ignore les messages système WhatsApp (chiffrement, médias, liens)
    if(cleanLine.includes('chiffrés') || cleanLine.includes('http') || cleanLine.includes('<Médias omis>')) return;

    // Retire l'horodatage + l'expéditeur ("15/08/2024, 12:00 - AB: ...")
    if(cleanLine.includes('-') && cleanLine.includes(':')) {
      const parts = cleanLine.split(':');
      if(parts.length > 2) {
        cleanLine = parts.slice(2).join(':').trim();
      } else {
        cleanLine = parts.pop().trim();
      }
    }

    // Plusieurs articles sur la même ligne, séparés par virgule/point-virgule
    const subItems = cleanLine.split(/[,;]/);

    subItems.forEach(subItem => {
      let itemStr = subItem.trim();
      if(!itemStr) return;

      const priceMatch = itemStr.match(/(\d+[\.,]?\d*)/);
      let extractedPrice = priceMatch ? priceMatch[1] : '';
      let namePart = itemStr.replace(/(\d+[\.,]?\d*)|dh|DH/gi, '').trim().toLowerCase();

      if(!namePart && !extractedPrice) return;

      let match = DARIJA_DICTIONARY.find(entry =>
        entry.keywords.some(kw => namePart.includes(kw) || kw.includes(namePart))
      );

      if(match){
        _waExtractedItems.push({
          raw: itemStr,
          name: lang==='fr' ? match.nameFr : match.nameAr,
          icon: match.icon,
          catId: match.catId,
          price: extractedPrice
        });
      } else if(namePart && namePart.length > 1) {
        _waExtractedItems.push({
          raw: itemStr,
          name: namePart,
          icon: '🛒',
          catId: 'daily',
          price: extractedPrice
        });
      }
    });
  });

  if(_waExtractedItems.length===0){
    showToast(lang==='fr'?'Aucun produit détecté':'لم يتم العثور على أي منتج');
    return;
  }

  renderWaItemsList();
  const s1=$('wa-step-1'), s2=$('wa-step-2');
  if(s1)s1.style.display='none';
  if(s2)s2.style.display='block';
}

function renderWaItemsList(){
  const container=$('wa-items-list');
  if(!container)return;
  container.innerHTML='';

  const countLbl=$('wa-items-count-lbl');
  if(countLbl){
    countLbl.textContent=`${_waExtractedItems.length} ${lang==='fr'?'articles détectés':'منتجات مستخرجة'}`;
  }

  _waExtractedItems.forEach((item,idx)=>{
    const row=document.createElement('div');
    row.className='wa-item-row';
    row.innerHTML=`
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

function updateWaItemPrice(idx,val){
  if(_waExtractedItems[idx]){
    _waExtractedItems[idx].price=val;
  }
  updateWaLiveTotal();
}

function removeWaItem(idx){
  _waExtractedItems.splice(idx,1);
  renderWaItemsList();
}

function updateWaLiveTotal(){
  let total=0;
  _waExtractedItems.forEach(item=>{
    total+=Number(item.price||0);
  });
  const totalEl=$('wa-live-total');
  if(totalEl) totalEl.textContent=`${fmt(total)} ${currency}`;
}

function saveWaItemsToBudget(){
  const validItems=_waExtractedItems.filter(item=>Number(item.price||0)>0);
  if(validItems.length===0){
    showToast(lang==='fr'?'Veuillez saisir au moins un prix':'الرجاء إدخال ثمن منتج واحد على الأقل');
    return;
  }

  const mk=ck();
  if(!allData[mk])allData[mk]=defMonth();
  if(!allData[mk].notes)allData[mk].notes=[];

  const todayStr=new Date().toISOString().slice(0,10);
  let addedCount=0;
  let addedSum=0;

  validItems.forEach(item=>{
    const amount=Number(item.price||0);
    allData[mk].notes.push({
      date:todayStr,
      note:`${item.icon} ${item.name}`,
      subCat:item.name,
      mainCat:item.catId,
      amount:amount,
      currency:currency,
      person:'family'
    });
    addedCount++;
    addedSum+=amount;
  });

  persistData();
  recalc();
  renderNotes();
  closeModal('waExpressModal');
  showToast(`✅ ${addedCount} ${lang==='fr'?'dépenses enregistrées':'مصاريف تضافات'} (+${fmt(addedSum)} ${currency})`);
}
