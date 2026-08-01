const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const appFiles = ['storage.js', 'fuel.js', 'maintenance.js', 'vehicle.js', 'ocr.js', 'telegram.js', 'app.js'];
const appSources = Object.fromEntries(appFiles.map(file => [file, fs.readFileSync(`js/${file}`, 'utf8')]));
const app = appFiles.map(file => appSources[file]).join('\n');
const css = fs.readFileSync('css/style.css', 'utf8');
const readme = fs.readFileSync('README.md', 'utf8');
const rules = fs.readFileSync('firestore.rules', 'utf8');
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
const serviceWorker = fs.readFileSync('service-worker.js', 'utf8');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

test('application JavaScript parses successfully', () => {
  for (const file of appFiles) assert.doesNotThrow(() => new vm.Script(appSources[file], { filename: `js/${file}` }));
  assert.doesNotThrow(() => new vm.Script(app, { filename: 'js/browser-bundle.js' }));
});

test('external assets are linked and non-empty', () => {
  assert.match(html, /href="css\/style\.css"/);
  assert.match(html, /src="js\/app\.js"/);
  for (const file of appFiles) assert.match(html, new RegExp(`src="js/${file.replace('.', '\\.')}"`));
  assert.ok(css.length > 10000);
  assert.ok(app.length > 10000);
});

test('release version is consistent', () => {
  const version = packageJson.version.replaceAll('.', '\\.');
  assert.match(html, new RegExp(`Tadbir v${version}`));
  assert.match(app, new RegExp(`CURRENT_VER\\s*=\\s*'${version}'`));
  assert.match(app, new RegExp(`version\\s*:\\s*'${version}'`));
  assert.match(serviceWorker, new RegExp(`CACHE_NAME\\s*=\\s*'tadbir-v${version}'`));
  assert.match(readme, new RegExp(`v${version}`));
});

test('Firestore rules isolate each user document', () => {
  assert.match(rules, /request\.auth != null/);
  assert.match(rules, /request\.auth\.uid == userId/);
  assert.match(rules, /allow read, write: if false/);
});

test('PIN is hashed and forgotten PIN does not clear all data', () => {
  assert.match(app, /crypto\.subtle\.digest\('SHA-256'/);
  assert.match(app, /stored\.startsWith\('sha256:'\)/);
  assert.doesNotMatch(app, /localStorage\.clear\(\)/);
  assert.doesNotMatch(app, /setItem\(PIN_KEY,\s*pinBuffer\)/);
});

test('import validator accepts safe data and rejects unsafe data', () => {
  const start = app.indexOf('function validateSafeImportTree');
  const end = app.indexOf('function importJSON', start);
  const context = { currency: 'MAD', curYear: 2026, curMonth: 6, lang: 'fr', LANGS: { fr: {} } };
  vm.createContext(context);
  vm.runInContext(app.slice(start, end), context);
  const row = { label: 'Test', act: 10, pln: 20 };
  const month = { bills: [row], expenses: [row], savings: [row], debts: [row], income: [row], notes: [] };
  const safe = { allData: { '2026-07': month }, currency: 'MAD', curYear: 2026, curMonth: 6, lang: 'fr' };
  assert.doesNotThrow(() => vm.runInContext(`validateImportData(${JSON.stringify(safe)})`, context));
  const unsafe = { ...safe, allData: { '2026-07': { ...month, bills: [{ label: '<script>', act: 1, pln: 2 }] } } };
  assert.throws(() => vm.runInContext(`validateImportData(${JSON.stringify(unsafe)})`, context));
});

test('monthly balance includes income, bills, notes, savings and debts', () => {
  const start = app.indexOf('function getMonthBalanceByKey');
  const end = app.indexOf('function previousMonthKey', start);
  const context = {
    allData: {
      '2026-07': {
        income: [{ act: 1000 }],
        bills: [{ act: 200 }],
        savings: [{ act: 100 }],
        debts: [{ act: 50 }],
        notes: [{ date: '2026-07-10', amount: 150 }]
      }
    }
  };
  vm.createContext(context);
  vm.runInContext(app.slice(start, end), context);
  assert.equal(context.getMonthBalanceByKey('2026-07'), 500);
});

test('critical mutations respect month closure', () => {
  const guarded = ['onInput', 'deleteRow', 'addRow', 'addNoteNew', 'deleteNoteNew', 'addDriveEntry', 'deleteDriveEntry', 'addFuelEntry', 'deleteFuelEntry', 'addCarExpense', 'deleteCarExpense', 'saveRowDetails'];
  for (const name of guarded) {
    const start = app.indexOf(`function ${name}(`);
    assert.notEqual(start, -1, `${name} is missing`);
    assert.match(app.slice(start, start + 220), /ensureMonthEditable\(/, `${name} is not guarded`);
  }
});

test('local history keeps a maximum of five snapshots', () => {
  assert.match(app, /MAX_LOCAL_SNAPSHOTS\s*=\s*5/);
  assert.match(app, /before_import/);
  assert.match(app, /before_cloud_load/);
});

test('PWA manifest and offline cache are complete', () => {
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.start_url, './');
  assert.ok(manifest.icons.some(icon => icon.purpose.includes('maskable')));
  assert.match(html, /rel="manifest" href="manifest\.json"/);
  assert.match(app, /navigator\.serviceWorker\.register/);
  for (const asset of ['./index.html', './css/style.css', ...appFiles.map(file => `./js/${file}`), './offline.html', './icons/tadbir.svg']) {
    assert.ok(serviceWorker.includes(`'${asset}'`), `service worker does not cache ${asset}`);
  }
});

test('Telegram floating action has desktop blue logo and preserves mobile button', () => {
  assert.match(html, /id="fab-tg-btn"/);
  assert.match(html, /fill="#229ED9"/);
  assert.match(css, /\.fab-tg-btn\s*\{[\s\S]*?background:\s*#ffffff/);
  assert.match(css, /@media\s*\(max-width:\s*600px\)[\s\S]*?\.fab-tg-btn\s*\{[\s\S]*?display:\s*inline-flex\s*!important;[\s\S]*?background:\s*linear-gradient\(135deg,\s*#0088cc/);
  assert.match(css, /\.fab-tg-btn svg path\s*\{\s*fill:\s*#ffffff\s*!important;/);
});

test('statistics page supports month filtering and leak analysis', () => {
  assert.match(html, /id="stats-month-filter"/);
  assert.match(app, /function populateStatsMonthFilter/);
  assert.match(app, /function normalizedProductName/);
  assert.match(app, /productCounts\[p\]\s*>=\s*6/);
});

test('French catalog includes newly identified products', () => {
  for (const label of ['Raisins', 'Graines de tournesol', 'Olives', 'Pastilla', 'Serviettes hygiéniques', 'Vinaigre']) {
    assert.ok(app.includes(label), `${label} is missing`);
  }
});

test('expenses can be attributed and filtered by family member', () => {
  for (const id of ['self', 'noufissa', 'iyad', 'owayss', 'family']) {
    assert.match(app, new RegExp(`id\\s*:\\s*'${id}'`));
  }
  assert.match(html, /id="nf-person"/);
  assert.match(html, /id="nf-person-filter"/);
  assert.match(html, /id="stats-person-filter"/);
  assert.match(app, /person\s*:\s*\(personEl\s*&&\s*personEl\.value\)\s*\|\|\s*'self'/);
  assert.match(app, /familyTotals/);
});

test('Telegram credentials are not embedded in public source', () => {
  assert.doesNotMatch(html, /7178837190:AAH/);
  assert.doesNotMatch(app, /7178837190:AAH/);
  assert.doesNotMatch(html, /value="7069247925"/);
  assert.match(html, /type="password"[^>]*id="tg-bot-token"/);
});

test('fuel history crosses empty months and deletion relinks following entries', () => {
  const start = app.indexOf('function roundDown');
  const end = app.indexOf('function addFuelEntry', start);
  const context = {
    allData: {
      '2026-05': { fuelEntries: [{ date: '2026-05-20', prevKm: 900, currKm: 1020 }] },
      '2026-08': { fuelEntries: [{ date: '2026-08-01', prevKm: 1020, currKm: 1139 }, { date: '2026-08-15', prevKm: 1139, currKm: 1500 }] }
    },
    ck: () => '2026-08'
  };
  vm.createContext(context);
  vm.runInContext(app.slice(start, end), context);
  assert.equal(context.getLatestFuelBefore('2026-08').currKm, 1020);
  context.allData['2026-08'].fuelEntries.splice(0, 1);
  context.relinkFuelEntriesAfterDelete('2026-08', 0);
  assert.equal(context.allData['2026-08'].fuelEntries[0].prevKm, 1020);
});

test('fuel initial entry and editing controls are available', () => {
  assert.match(html, /id="fuel-initial-btn"/);
  assert.match(html, /id="fuel-cancel-edit-btn"/);
  for (const fn of ['hasFuelInitialEver', 'relinkAllFuelEntries', 'startInitialFuelEntry', 'editFuelEntry', 'cancelFuelEdit']) {
    assert.match(app, new RegExp(`function ${fn}\\(`), `${fn} is missing`);
  }
  assert.match(app, /isInitial:\s*fuelInitialMode/);
  assert.match(app, /_fuelInitialEver\s*=\s*true/);
  assert.match(app, /aucune consommation calculée/);
});

test('fuel entries are filed by their own date and initial refill is excluded from monthly limit', () => {
  const start = app.indexOf('function getFuelData');
  const end = app.indexOf('function getLatestFuelBefore', start);
  const context = {
    allData: { '2026-08': { fuelEntries: [
      { date: '2026-05-21', isInitial: true },
      { date: '2026-06-30', currKm: 474 },
      { date: '2026-07-31', currKm: 1139 }
    ] } },
    ck: () => '2026-08',
    defMonth: () => ({ fuelEntries: [] }),
    relinkAllFuelEntries: () => {},
    syncCarCostsToBudget: () => {},
    persistData: () => {}
  };
  vm.createContext(context);
  vm.runInContext(app.slice(start, end), context);
  assert.equal(context.migrateFuelEntriesToDateMonths(), true);
  assert.equal(context.allData['2026-08'].fuelEntries.length, 0);
  assert.equal(context.allData['2026-05'].fuelEntries[0].isInitial, true);
  assert.equal(context.allData['2026-06'].fuelEntries[0].currKm, 474);
  assert.equal(context.allData['2026-07'].fuelEntries[0].currKm, 1139);
  assert.match(app, /filter\(function \(entry\) \{ return !entry\.isInitial; \}\)\.length/);
});

test('fuel OCR validates pump arithmetic', () => {
  const start = app.indexOf('function normalizePumpCandidate');
  const end = app.indexOf('async function processFuelImagesOCR', start);
  const context = {};
  vm.createContext(context);
  vm.runInContext(app.slice(start, end), context);
  const parsed = context.parsePumpNumbers('600.05 DIRHAMS 44.78 LITRES 13.40 DIRHAMS/LITRE');
  assert.equal(parsed.price, 13.4);
  assert.equal(parsed.litres, 44.78);
  assert.equal(parsed.total, 600.05);
  assert.equal(parsed.consistent, true);
  assert.equal(context.parseDashNumber('ODO 1808.4 km'), 1808.4);
  assert.equal(context.parseDashNumber('Autonomie 120 km Distance 1808 km Trip 1808.4 km'), 1808.4);
  assert.equal(context.parseDashNumber('Autonomie 120 km'), 120);
  assert.match(app, /const OCR_CROPS\s*=\s*\{/);
  assert.match(app, /createOCRCanvas/);
  assert.equal(context.normalizePumpCandidate(1340, 'price'), 13.4);
  assert.equal(context.normalizePumpCandidate(4478, 'litres'), 44.78);
  assert.equal(context.normalizePumpCandidate(60005, 'total'), 600.05);
  const rows = context.parsePumpRows({ price: [14, 13.4], litres: [34, 44.78], total: [600.05] });
  assert.equal(rows.price, 13.4);
  assert.equal(rows.litres, 44.78);
  assert.equal(rows.total, 600.05);
  const secondPump = context.parsePumpRows({ price: [12.75], litres: [47.06], total: [600.02] });
  assert.equal(secondPump.price, 12.75);
  assert.equal(secondPump.litres, 47.06);
  assert.equal(secondPump.total, 600.02);
  assert.equal(context.parseDashNumber('139 1139 1139.8'), 1139.8);
  const draft = context.parsePumpRows({ price: [14], litres: [34], total: [1] });
  assert.equal(draft.price, 14);
  assert.equal(draft.litres, 34);
  assert.equal(draft.consistent, false);
  assert.match(app, /Pompe partielle/);
  assert.match(html, /id="fuel-litres"/);
  assert.match(app, /function updateFuelDraftCheck/);
});

test('car costs sync to budget idempotently', () => {
  const start = app.indexOf('function syncCarCostsToBudget');
  const end = app.indexOf('function addCarExpense', start);
  const context = {
    allData: { '2026-08': { notes: [{ amount: 10 }], fuelEntries: [{ date: '2026-08-01', totalAmount: 600, currKm: 1808 }], carExpenses: [{ id: 1, date: '2026-08-02', type: 'vidange', label: 'Vidange', amount: 450 }] } },
    ck: () => '2026-08',
    defMonth: () => ({ notes: [], fuelEntries: [], carExpenses: [] }),
    roundDown: value => Math.floor(Number(value) || 0)
  };
  vm.createContext(context);
  vm.runInContext(app.slice(start, end), context);
  context.syncCarCostsToBudget();
  context.syncCarCostsToBudget();
  const auto = context.allData['2026-08'].notes.filter(note => note.source === 'car-auto');
  assert.equal(auto.length, 2);
  assert.equal(auto.reduce((sum, note) => sum + note.amount, 0), 1050);
});
