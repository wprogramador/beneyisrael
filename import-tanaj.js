// import-tanaj.js — Migración mejorada del Jumash (FrontPage + framesets) a Next.js/Vercel
// Uso:  node import-tanaj.js
//
// MEJORAS v3:
//   · Framesets fusionados (texto + comentario en una página indexable)
//   · Tipografía nueva: Frank Ruhl Libre (hebreo) + Lora (español)
//   · Limpieza de residuos FrontPage/Word (font, MsoNormal, o:p, spans, XML)
//   · AdSense eliminado (configurable)
//   · Navegación anterior/siguiente capítulo automática
//   · Títulos reales extraídos del menú (derecha.htm)
//   · default.htm (frameset índice) → redirección a /tanaj
//   · Decodifica windows-1255, slugifica nombres, reescribe enlaces
//   · Genera manifest.json + tanaj-redirects.htaccess (301s para Ferozo)
const fs = require('fs');
const path = require('path');

// ========== CONFIG ==========
const SOURCE = './Jumash';            // ← carpeta con el HTML descargado de Ferozo
const DEST = './public/tanaj';              // ← destino en el proyecto
const NEW_BASE = 'https://www.beneyisrael.com/tanaj';
const HOME = 'https://www.beneyisrael.com';
const MENU_FILE = 'derecha.htm';            // ← marco con el menú de capítulos
const STRIP_ADS = true;                     // ← false para conservar AdSense
const OLD_DOMAINS = [
  'teques.beneyisrael.com',
  'www.beneyisrael.com',
  'beneyisrael.com',
  // 'midominioferozo.com',                 // ← agrega aquí el dominio de Ferozo
];
const BOOKS = {
  bereshit: 'Bereshit (Génesis)', shemot: 'Shemot (Éxodo)', vayikra: 'Vayikrá (Levítico)',
  bamidbar: 'Bamidbar (Números)', devarim: 'Devarim (Deuteronomio)',
};

// ========== DECODIFICADOR WINDOWS-1255 ==========
const CP1255 = ['\u20ac',null,'\u201a','\u0192','\u201e','\u2026','\u2020','\u2021','\u02c6','\u2030',null,'\u2039',null,null,null,null,null,'\u2018','\u2019','\u201c','\u201d','\u2022','\u2013','\u2014','\u02dc','\u2122',null,'\u203a',null,null,null,null,'\u00a0',null,'\u00a2','\u00a3','\u00a4','\u20aa','\u00a6','\u00a7','\u00a8','\u00a9','\u00d7','\u00ab','\u00ac','\u00ad','\u00ae','\u200f','\u00b0','\u00b1','\u00b2','\u00b3','\u200e','\u00b5','\u00b6','\u00b7','\u2017','\u00b9','\u00f7','\u00bb','\u00bc','\u00bd','\u00be',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'\u05d0','\u05d1','\u05d2','\u05d3','\u05d4','\u05d5','\u05d6','\u05d7','\u05d8','\u05d9','\u05da','\u05db','\u05dc','\u05dd','\u05de','\u05df','\u05e0','\u05e1','\u05e2','\u05e3','\u05e4','\u05e5','\u05e6','\u05e7','\u05e8','\u05e9','\u05ea',null,null,null,null,null];
function decode1255(buf) {
  let out = '';
  for (const b of buf) out += b < 0x80 ? String.fromCharCode(b) : (CP1255[b - 0x80] || String.fromCharCode(b));
  return out;
}
function readHtml(file) {
  const raw = fs.readFileSync(file);
  const head = raw.slice(0, 2000).toString('latin1').toLowerCase();
  if (head.includes('windows-1255') || head.includes('iso-8859-8')) return decode1255(raw);
  return raw.toString('utf8');
}

// ========== HELPERS ==========
function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (/\.html?$/i.test(item)) files.push(full);
  }
  return files;
}
function slug(name) {
  return name.normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'pagina';
}
function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function baseOf(f) { return path.basename(f, path.extname(f)); }

// ========== LIMPIEZA DE RESIDUOS FRONTPAGE/WORD ==========
function cleanJunk(html) {
  return html
    .replace(/<!--\[if[\s\S]*?<!\[endif\]-->/gi, '')          // comentarios condicionales Office
    .replace(/<xml[\s\S]*?<\/xml>/gi, '')                       // bloques XML de Word
    .replace(/<\/?o:p>/gi, '')                                  // párrafos Office
    .replace(/<script[^>]*googlesyndication[^>]*>\s*<\/script>/gi, STRIP_ADS ? '' : '$&')
    .replace(/<script[^>]*adsbygoogle[^>]*>\s*<\/script>/gi, STRIP_ADS ? '' : '$&')
    .replace(/<ins[^>]*adsbygoogle[\s\S]*?<\/ins>/gi, STRIP_ADS ? '' : '$&')
    .replace(/<style[\s\S]*?mso-[\s\S]*?<\/style>/gi, '')       // estilos Word
    .replace(/\sstyle="[^"]*mso-[^"]*"/gi, '')                  // estilos mso- inline
    .replace(/\sclass="?Mso\w*"?"?/gi, '')                      // clases Mso
    .replace(/<\/?font[^>]*>/gi, '')                            // etiquetas font (la CSS manda)
    .replace(/<span[^>]*>\s*<\/span>/gi, '')                    // spans vacíos
    .replace(/<\/?span[^>]*>/gi, '')                            // spans restantes
    .replace(/<meta[^>]*name=["'](GENERATOR|ProgId)["'][^>]*>/gi, '');
}

function extractBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return cleanJunk(m ? m[1] : html).trim();
}
function frameSection(src) {
  if (/txt|texto/i.test(src)) return { title: 'Texto', rtl: true };
  if (/coment|comment/i.test(src)) return { title: 'Comentario', rtl: false };
  return { title: null, rtl: false };
}
function isMenuFrame(src) { return /derecha|contents|menu|indice|index/i.test(src); }

// ========== TÍTULOS ==========
function decodeEntities(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&aacute;/g, '\u00e1').replace(/&eacute;/g, '\u00e9').replace(/&iacute;/g, '\u00ed')
    .replace(/&oacute;/g, '\u00f3').replace(/&uacute;/g, '\u00fa').replace(/&ntilde;/g, '\u00f1')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
}
function chapterOf(name) {
  const m = name.match(/^([a-z]+)[\s-]*c(\d+)$/i);
  return m && BOOKS[m[1].toLowerCase()] ? { book: m[1].toLowerCase(), num: parseInt(m[2], 10) } : null;
}
function titleFromName(name, menuMap) {
  const menuTitle = menuMap.get(name.toLowerCase());
  if (menuTitle) return menuTitle;
  const ch = chapterOf(name);
  if (ch) return `${BOOKS[ch.book]} ${ch.num}`;
  return name.replace(/[_-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ========== PASADA 1: nombres, menú, capítulos ==========
const files = walk(SOURCE);
const nameMap = new Map();
for (const f of files) nameMap.set(baseOf(f).toLowerCase(), slug(baseOf(f)));

// Títulos reales desde el archivo del menú
const menuMap = new Map();
const menuPath = path.join(SOURCE, MENU_FILE);
if (fs.existsSync(menuPath)) {
  const menuHtml = readHtml(menuPath);
  for (const m of menuHtml.matchAll(/<a[^>]+href=["']([^"']+\.html?)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const key = baseOf(decodeURIComponent(m[1])).toLowerCase();
    const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (text) menuMap.set(key, decodeEntities(text));
  }
  console.log(`📋 Menú leído: ${menuMap.size} títulos extraídos de ${MENU_FILE}`);
}

// Mapa de capítulos por libro (para navegación anterior/siguiente)
const chapters = new Map();
for (const f of files) {
  const ch = chapterOf(baseOf(f));
  if (ch) {
    if (!chapters.has(ch.book)) chapters.set(ch.book, new Set());
    chapters.get(ch.book).add(ch.num);
  }
}

function navChapters(name) {
  const ch = chapterOf(name);
  if (!ch) return { prev: null, next: null };
  const nums = chapters.get(ch.book);
  const mk = n => nums.has(n) ? `${slug(ch.book)}-c${n}.html` : null;
  return { prev: mk(ch.num - 1), next: mk(ch.num + 1) };
}

function rewriteLocalLinks(html) {
  for (const [orig, newSlug] of nameMap) {
    for (const v of [orig, encodeURIComponent(orig)]) {
      html = html.replace(new RegExp(esc(v) + '\\.html?', 'gi'), newSlug + '.html');
    }
  }
  return html;
}

// ========== PLANTILLA v3 — tipografía nueva, tema lectura ==========
const NAV = (title) => `
<nav class="tnav">
  <a class="tbrand" href="${HOME}">בית מדרש בני ישראל</a>
  <a href="${HOME}/tanaj">← Índice del Jumash</a>
  <span class="tcrumb">${title}</span>
</nav>`;
const FOOTER = `
<footer class="tfoot">
  Beit Midrash Bene Israel — Los Teques, Venezuela · <a href="${HOME}">beneyisrael.com</a>
</footer>`;
const STYLES = `
  :root { --gold:#8a6d1f; --ink:#2a2419; --bg:#faf7ef; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--ink); font-family:'Lora',Georgia,serif; font-size:1.05rem; line-height:1.75; }
  .tnav { background:#0c0a07; border-bottom:1px solid rgba(212,175,55,.35); padding:.7rem 1rem; font-family:system-ui,sans-serif; display:flex; gap:1.25rem; align-items:center; flex-wrap:wrap; }
  .tnav a { color:#d4af37; text-decoration:none; font-size:.92rem; }
  .tnav a:hover { color:#e9c65a; }
  .tnav .tbrand { font-weight:700; }
  .tcrumb { color:#a89b8c; font-size:.8rem; }
  main { max-width:46rem; margin:2.5rem auto; padding:0 1.25rem 3rem; }
  h1 { font-size:1.75rem; color:var(--gold); border-bottom:2px solid #d4af37; padding-bottom:.45rem; margin-bottom:1.5rem; }
  h2.sec { font-size:1.15rem; color:var(--gold); margin:2.25rem 0 .75rem; text-transform:uppercase; letter-spacing:.08em; }
  .heb { font-family:'Frank Ruhl Libre',serif; font-size:1.3rem; line-height:2.05; }
  .com { font-size:1.02rem; }
  .com p, .heb p { margin:.6rem 0; }
  .tnav-ch { display:flex; justify-content:space-between; gap:1rem; margin-top:3rem; padding-top:1.25rem; border-top:1px solid rgba(138,109,31,.3); font-family:system-ui,sans-serif; }
  .tnav-ch a { color:var(--gold); text-decoration:none; font-weight:600; padding:.5rem 1rem; border:1px solid rgba(138,109,31,.4); border-radius:.5rem; }
  .tnav-ch a:hover { background:rgba(212,175,55,.12); }
  .tfoot { background:#0c0a07; border-top:1px solid rgba(212,175,55,.2); padding:1rem; text-align:center; font-family:system-ui,sans-serif; color:#a89b8c; font-size:.8rem; }
  .tfoot a { color:#d4af37; }
  table { border-collapse:collapse; }
  @media print { .tnav, .tfoot, .tnav-ch { display:none; } body { background:#fff; } }
`;
function wrapPage({ title, url, bodyHtml, name }) {
  const { prev, next } = navChapters(name);
  const nav = prev || next ? `
  <div class="tnav-ch">
    ${prev ? `<a href="${prev}">← Capítulo anterior</a>` : '<span></span>'}
    ${next ? `<a href="${next}">Capítulo siguiente →</a>` : '<span></span>'}
  </div>` : '';
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} — Jumash · Bene Israel</title>
<meta name="description" content="${title}: texto hebreo y comentario. El Jumash (Torá) comentada en español, gratis y en línea — Beit Midrash Bene Israel, Venezuela.">
<link rel="canonical" href="${url}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>${STYLES}</style>
</head>
<body>
${NAV(title)}
<main>
${bodyHtml}
${nav}
</main>
${FOOTER}
</body>
</html>`;
}

// ========== FUSIÓN DE FRAMESETS ==========
const consumedParts = new Set();
function mergeFrameset(file, html, menuMap) {
  const dir = path.dirname(file);
  const base = baseOf(file);
  const title = titleFromName(base, menuMap);
  const srcs = [...html.matchAll(/<frame[^>]*src=["']([^"']+)["']/gi)].map(m => decodeURIComponent(m[1]));
  let bodyHtml = `<h1>${title}</h1>`;
  for (const src of srcs) {
    const partPath = path.join(dir, src);
    if (!fs.existsSync(partPath)) { console.warn(`   ⚠️  Marco no encontrado: ${src}`); continue; }
    consumedParts.add(path.resolve(partPath));
    const sec = frameSection(src);
    const inner = rewriteLocalLinks(extractBody(readHtml(partPath)));
    bodyHtml += `\n<h2 class="sec">${sec.title || 'Contenido'}</h2>`;
    bodyHtml += sec.rtl
      ? `<div class="heb" dir="rtl" lang="he">${inner}</div>`
      : `<div class="com">${inner}</div>`;
  }
  return { title, bodyHtml };
}

// ========== PASADA 2 ==========
console.log('🔍 Escaneando', SOURCE, '...');
if (files.length === 0) { console.error(`❌ No encontré .html en "${SOURCE}"`); process.exit(1); }

const manifest = {};
let count = 0, frames = 0, indexes = 0;
for (const file of files) {
  const rel = path.relative(SOURCE, file);
  const base = baseOf(file);
  const outName = nameMap.get(base.toLowerCase()) + '.html';
  const html = readHtml(file);
  const isFrameset = /<frameset/i.test(html);
  const relDir = path.dirname(rel);
  const dirSlug = relDir === '.' ? '' : relDir.split(path.sep).map(p => slug(p)).join('/');
  const urlPath = [dirSlug, outName].filter(Boolean).join('/');
  const url = `${NEW_BASE}/${urlPath}`;

  let out;
  const menuSrcs = isFrameset
    ? [...html.matchAll(/<frame[^>]*src=["']([^"']+)["']/gi)].map(m => decodeURIComponent(m[1])).filter(isMenuFrame)
    : [];

  if (isFrameset && menuSrcs.length > 0) {
    // Portada (default.htm): redirigir al índice moderno
    indexes++;
    for (const m of html.matchAll(/<frame[^>]*src=["']([^"']+)["']/gi))
      consumedParts.add(path.resolve(path.dirname(file), decodeURIComponent(m[1])));
    out = `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=/tanaj/">
<link rel="canonical" href="${NEW_BASE}/">
<title>Jumash — Torá Hebrea Comentada · Bene Israel</title>
</head><body><p>Redirigiendo al <a href="/tanaj/">índice del Jumash</a>…</p></body></html>`;
    console.log(`🏠 ${rel} → redirección a /tanaj/`);
  } else if (isFrameset) {
    frames++;
    const { title, bodyHtml } = mergeFrameset(file, html, menuMap);
    out = wrapPage({ title, url, bodyHtml: rewriteLocalLinks(bodyHtml), name: base });
    console.log(`🖼️  ${rel} → ${outName} (${title})`);
  } else {
    let body = rewriteLocalLinks(extractBody(html));
    for (const d of OLD_DOMAINS) {
      body = body.split(`https://${d}`).join('https://www.beneyisrael.com')
                 .split(`http://${d}`).join('https://www.beneyisrael.com');
    }
    out = wrapPage({ title: titleFromName(base, menuMap), url, bodyHtml: body, name: base });
    console.log(`✅ ${rel} → ${outName}`);
  }

  const destPath = path.join(DEST, relDir === '.' ? '' : relDir, outName);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, out, 'utf8');

  const isIndexPage = isFrameset && menuSrcs.length > 0;
  if (!isIndexPage && !consumedParts.has(path.resolve(file))) {
    const group = rel.includes(path.sep) ? rel.split(path.sep)[0] : (outName.split('-')[0] || 'General');
    (manifest[group] ||= []).push({ title: titleFromName(base, menuMap), url: `/tanaj/${urlPath}` });
  }
  count++;
}

fs.writeFileSync(path.join(DEST, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

// .htaccess con 301s
const htaccess = `# Subir como .htaccess a la RAÍZ de Ferozo\n` +
  files.map(f => {
    const rel = path.relative(SOURCE, f);
    const relDir = path.dirname(rel);
    const dirSlug = relDir === '.' ? '' : relDir.split(path.sep).map(p => slug(p)).join('/');
    const urlPath = [dirSlug, nameMap.get(baseOf(f).toLowerCase()) + '.html'].filter(Boolean).join('/');
    const target = baseOf(f).toLowerCase() === 'default' ? 'https://www.beneyisrael.com/tanaj/' : `${NEW_BASE}/${urlPath}`;
    return `Redirect 301 "/${rel.split(path.sep).join('/')}" ${target}`;
  }).join('\n') + '\n';
fs.writeFileSync('tanaj-redirects.htaccess', htaccess, 'utf8');

console.log(`\n🎉 ${count} archivos · ${frames} framesets fusionados · ${indexes} portadas redirigidas`);
console.log(`📇 Índice: ${DEST}/manifest.json`);
console.log(`🔀 301s: tanaj-redirects.htaccess → subir a Ferozo como .htaccess`);
