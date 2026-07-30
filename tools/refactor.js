const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const appJsPath = path.join(root, 'js', 'app.js');
const indexHtmlPath = path.join(root, 'index.html');

let appJs = fs.readFileSync(appJsPath, 'utf8');

const locStart = appJs.indexOf('const loc = {');
const defLabelsEndMarker = 'function setLang(l)';
const setLangStart = appJs.indexOf(defLabelsEndMarker);

if (locStart !== -1 && setLangStart !== -1) {
  const extractedLocales = appJs.substring(locStart, setLangStart);
  appJs = appJs.substring(0, locStart) + appJs.substring(setLangStart);
  fs.writeFileSync(path.join(root, 'js', 'locales.js'), extractedLocales);
  console.log('Extracted locales.js');
}

fs.writeFileSync(appJsPath, appJs);

let html = fs.readFileSync(indexHtmlPath, 'utf8');
if (!html.includes('js/locales.js')) {
  html = html.replace('<script src="js/app.js"></script>', '<script src="js/locales.js"></script>\n<script src="js/app.js"></script>');
  fs.writeFileSync(indexHtmlPath, html);
  console.log('Updated index.html to include locales.js');
}

console.log('Done.');
