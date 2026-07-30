const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const styleBlocks = [...html.matchAll(/<style>([\s\S]*?)<\/style>/gi)];
if (!styleBlocks.length) throw new Error('No inline styles found');
const css = styleBlocks.map(match => match[1].trim()).join('\n\n');
let firstStyle = true;
html = html.replace(/<style>[\s\S]*?<\/style>/gi, () => {
  if (!firstStyle) return '';
  firstStyle = false;
  return '<link rel="stylesheet" href="css/style.css">';
});

const classicBlocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)];
if (classicBlocks.length !== 1) {
  throw new Error(`Expected exactly one classic inline script, found ${classicBlocks.length}`);
}
const js = classicBlocks[0][1].trim();
html = html.replace(/<script>[\s\S]*?<\/script>/i, '<script src="js/app.js"></script>');

fs.mkdirSync(path.join(root, 'css'), { recursive: true });
fs.mkdirSync(path.join(root, 'js'), { recursive: true });
fs.writeFileSync(path.join(root, 'css', 'style.css'), css + '\n');
fs.writeFileSync(path.join(root, 'js', 'app.js'), js + '\n');
fs.writeFileSync(indexPath, html);

console.log(`Extracted ${styleBlocks.length} style blocks and ${classicBlocks.length} script block.`);
