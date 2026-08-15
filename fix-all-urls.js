// fix-all-urls.js
const fs = require('fs');
const path = require('path');

// ========== CONFIG ==========
const OLD_DOMAIN = 'teques.beneyisrael.com';
const NEW_DOMAIN = 'teques.beneyisrael.com';
const OLD_PATH = '/estudios/';
const NEW_PATH = '/estudios/';

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
    raw: content.slice(0, end + 3),
    body: content.slice(end + 3),
    text: content.slice(3, end).trim()
  };
}

// ========== FIX MDX ==========
function fixMdx(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // El slug correcto = nombre del archivo sin extensión
  const slug = path.basename(filePath, path.extname(filePath));
  const correctUrl = `https://${NEW_DOMAIN}${NEW_PATH}${slug}`;

  // 1. Corregir frontmatter: canonical_url y og_url
  const fm = extractFrontmatter(content);
  if (fm) {
    let newFmText = fm.text;

    // Reemplazar canonical_url
    newFmText = newFmText.replace(
      /canonical_url:\s*["']?[^"'\n]+["']?/,
      `canonical_url: "${correctUrl}"`
    );

    // Reemplazar og_url
    newFmText = newFmText.replace(
      /og_url:\s*["']?[^"'\n]+["']?/,
      `og_url: "${correctUrl}"`
    );

    if (newFmText !== fm.text) {
      content = `---\n${newFmText}\n---${fm.body}`;
      modified = true;
    }
  }

  // 2. Reemplazar dominio y ruta sueltos en todo el archivo
  if (content.includes(OLD_DOMAIN)) {
    content = content.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
    modified = true;
  }
  if (content.includes(OLD_PATH)) {
    content = content.replaceAll(OLD_PATH, NEW_PATH);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filePath}`);
    console.log(`   → ${correctUrl}`);
    return true;
  }
  return false;
}

// ========== FIX CODE FILES ==========
function fixCodeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  if (content.includes(OLD_DOMAIN)) {
    content = content.replaceAll(OLD_DOMAIN, NEW_DOMAIN);
    modified = true;
  }
  if (content.includes(OLD_PATH)) {
    content = content.replaceAll(OLD_PATH, NEW_PATH);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`🔧 ${filePath}`);
    return true;
  }
  return false;
}

// ========== RUN ==========
console.log('🔍 Escaneando archivos...\n');

const allFiles = walk('.');
let count = 0;

for (const file of allFiles) {
  const isMdx = file.endsWith('.mdx') || file.endsWith('.md');
  if (isMdx) {
    if (fixMdx(file)) count++;
  } else {
    if (fixCodeFile(file)) count++;
  }
}

console.log(`\n🎉 Listo. ${count} archivos modificados.`);
console.log(`\n📋 Resumen de slugs correctos (según nombre de archivo):`);
const mdxFiles = allFiles.filter(f => f.endsWith('.mdx'));
for (const f of mdxFiles) {
  const slug = path.basename(f, '.mdx');
  console.log(`   /estudios/${slug}`);
}