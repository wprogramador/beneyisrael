// update-domain.js — Migración de dominio: teques.beneyisrael.com → www.beneyisrael.com
// Uso: node update-domain.js   (desde la raíz del proyecto)
const fs = require('fs');
const path = require('path');

// ========== CONFIG ==========
const OLD_DOMAIN = 'teques.beneyisrael.com';
const NEW_DOMAIN = 'www.beneyisrael.com';

const EXTENSIONS = ['.mdx', '.md', '.tsx', '.ts', '.jsx', '.js', '.json', '.html', '.xml', '.txt'];
const IGNORE_DIRS = ['node_modules', '.git', '.next', 'dist', 'build', 'out', 'public'];

// ========== HELPERS ==========
function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (IGNORE_DIRS.some(i => full.includes(i))) continue;
      walk(full, files);
    } else if (stat.isFile() && EXTENSIONS.includes(path.extname(full).toLowerCase())) {
      if (path.basename(full) === path.basename(__filename)) continue; // no reescribirse a sí mismo
      files.push(full);
    }
  }
  return files;
}

function extractFrontmatter(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('---', 3);
  if (end === -1) return null;
  return {
    body: content.slice(end + 3),
    text: content.slice(3, end).trim()
  };
}

// ========== FIX MDX (dominio + canonical_url/og_url del frontmatter) ==========
function fixMdx(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  const slug = path.basename(filePath, path.extname(filePath));
  const correctUrl = `https://${NEW_DOMAIN}/estudios/${slug}`;

  const fm = extractFrontmatter(content);
  if (fm) {
    let newFmText = fm.text;
    newFmText = newFmText.replace(/canonical_url:\s*["']?[^"'\n]+["']?/, `canonical_url: "${correctUrl}"`);
    newFmText = newFmText.replace(/og_url:\s*["']?[^"'\n]+["']?/, `og_url: "${correctUrl}"`);
    if (newFmText !== fm.text) {
      content = `---\n${newFmText}\n---${fm.body}`;
      modified = true;
    }
  }

  if (content.includes(OLD_DOMAIN)) {
    content = content.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filePath}`);
    return true;
  }
  return false;
}

// ========== FIX CODE FILES ==========
function fixCodeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes(OLD_DOMAIN)) return false;
  content = content.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`🔧 ${filePath}`);
  return true;
}

// ========== RUN ==========
console.log('🔍 Escaneando archivos...\n');
const allFiles = walk('.');
let count = 0;
for (const file of allFiles) {
  const isMdx = file.endsWith('.mdx') || file.endsWith('.md');
  if (isMdx ? fixMdx(file) : fixCodeFile(file)) count++;
}
console.log(`\n🎉 Listo. ${count} archivos migrados a https://${NEW_DOMAIN}`);
if (count === 0) console.log('ℹ️  No quedaban referencias al dominio viejo.');
