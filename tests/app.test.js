const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const app = fs.readFileSync('js/app.js', 'utf8');
const css = fs.readFileSync('css/style.css', 'utf8');
const readme = fs.readFileSync('README.md', 'utf8');
const rules = fs.readFileSync('firestore.rules', 'utf8');

test('application JavaScript parses successfully', () => {
  assert.doesNotThrow(() => new vm.Script(app, { filename: 'js/app.js' }));
});

test('external assets are linked and non-empty', () => {
  assert.match(html, /href="css\/style\.css"/);
  assert.match(html, /src="js\/app\.js"/);
  assert.ok(css.length > 10000);
  assert.ok(app.length > 10000);
});

test('release version is consistent', () => {
  assert.match(html, /Tadbir v3\.9\.0/);
  assert.match(app, /CURRENT_VER='3\.9\.0'/);
  assert.match(app, /version:'3\.9\.0'/);
  assert.match(readme, /v3\.9\.0/);
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
  const guarded = ['onInput', 'deleteRow', 'addRow', 'addNoteNew', 'deleteNoteNew', 'addDriveEntry', 'deleteDriveEntry', 'saveRowDetails'];
  for (const name of guarded) {
    const start = app.indexOf(`function ${name}(`);
    assert.notEqual(start, -1, `${name} is missing`);
    assert.match(app.slice(start, start + 220), /ensureMonthEditable\(/, `${name} is not guarded`);
  }
});

test('local history keeps a maximum of five snapshots', () => {
  assert.match(app, /MAX_LOCAL_SNAPSHOTS=5/);
  assert.match(app, /before_import/);
  assert.match(app, /before_cloud_load/);
});
