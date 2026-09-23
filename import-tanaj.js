// import-tanaj.js — Migración del Jumash (FrontPage + framesets) a Next.js/Vercel — v4
// Uso:  node import-tanaj.js
//
// v4 — codificación corregida según archivos reales:
//   · Español en windows-1252 (acentos reales: Habló, Números) → decodificador CP1252
//   · Hebreo como entidades numéricas (&#1488;) → se preservan intactas
//   · Hebreo en bytes cp1255 con nikud en 0xC0-0xDF (viejos archivos) → mapeo a Unicode
//   · Detección de charset por meta declarado en cada archivo
//   · <font face/color/size> → <span style> (no se pierde el formato)
//   · Elimina target="..." (los frames ya no existen)
//   · Títulos y orden anterior/siguiente desde el menú (derecha.htm)
const fs = require('fs');
const path = require('path');

// ========== CONFIG ==========
const SOURCE = './Jumash';                // ← carpeta con el HTML descargado de Ferozo
const DEST = './public/tanaj';            // ← destino en el proyecto
const NEW_BASE = 'https://www.beneyisrael.com/tanaj';
const HOME = 'https://www.beneyisrael.com';
const MENU_FILE = 'derecha.htm';          // ← menú; si no existe, se autodetecta
const STRIP_ADS = true;
const OLD_DOMAINS = ['teques.beneyisrael.com', 'www.beneyisrael.com', 'beneyisrael.com'];
const BOOKS = {
  bereshit: 'Bereshit (Génesis)', shemot: 'Shemot (Éxodo)', vayikra: 'Vayikrá (Levítico)',
  bamidbar: 'Bamidbar (Números)', devarim: 'Devarim (Deuteronomio)',
  genesis: 'Génesis', exodo: 'Éxodo', levitico: 'Levítico', numeros: 'Números', deuteronomio: 'Deuteronomio',
};

// ========== TABLAS DE CODIFICACIÓN ==========
const CP1252 = ['\u20ac',null,'\u201a','\u0192','\u201e','\u2026','\u2020','\u2021','\u02c6','\u2030','\u0160','\u2039','\u0152',null,'\u017d',null,null,'\u2018','\u2019','\u201c','\u201d','\u2022','\u2013','\u2014','\u02dc','\u2122','\u0161','\u203a','\u0153',null,'\u017e','\u0178','\u00a0','\u00a1','\u00a2','\u00a3','\u00a4','\u00a5','\u00a6','\u00a7','\u00a8','\u00a9','\u00aa','\u00ab','\u00ac','\u00ad','\u00ae','\u00af','\u00b0','\u00b1','\u00b2','\u00b3','\u00b4','\u00b5','\u00b6','\u00b7','\u00b8','\u00b9','\u00ba','\u00bb','\u00bc','\u00bd','\u00be','\u00bf','\u00c0','\u00c1','\u00c2','\u00c3','\u00c4','\u00c5','\u00c6','\u00c7','\u00c8','\u00c9','\u00ca','\u00cb','\u00cc','\u00cd','\u00ce','\u00cf','\u00d0','\u00d1','\u00d2','\u00d3','\u00d4','\u00d5','\u00d6','\u00d7','\u00d8','\u00d9','\u00da','\u00db','\u00dc','\u00dd','\u00de','\u00df','\u00e0','\u00e1','\u00e2','\u00e3','\u00e4','\u00e5','\u00e6','\u00e7','\u00e8','\u00e9','\u00ea','\u00eb','\u00ec','\u00ed','\u00ee','\u00ef','\u00f0','\u00f1','\u00f2','\u00f3','\u00f4','\u00f5','\u00f6','\u00f7','\u00f8','\u00f9','\u00fa','\u00fb','\u00fc','\u00fd','\u00fe','\u00ff'];
const CP1255X = ['\u20ac',null,'\u201a','\u0192','\u201e','\u2026','\u2020','\u2021','\u02c6','\u2030',null,'\u2039',null,null,null,null,null,'\u2018','\u2019','\u201c','\u201d','\u2022','\u2013','\u2014','\u02dc','\u2122',null,'\u203a',null,null,null,null,'\u00a0',null,'\u00a2','\u00a3','\u00a4','\u20aa','\u00a6','\u00a7','\u00a8','\u00a9','\u00d7','\u00ab','\u00ac','\u00ad','\u00ae','\u200f','\u00b0','\u00b1','\u00b2','\u00b3','\u200e','\u00b5','\u00b6','\u00b7','\u2017','\u00b9','\u00f7','\u00bb','\u00bc','\u00bd','\u00be',null,'\u05b0','\u05b1','\u05b2','\u05b3','\u05b4','\u05b5','\u05b6','\u05b7','\u05b8','\u05b9','\u05ba','\u05bb','\u05bc','\u05bd','\u05be','\u05bf','\u05c0','\u05c1','\u05c2','\u05c3','\u05c4','\u05c5','\u05c6','\u05c7','\u05c8','\u05c9','\u05ca','\u05cb','\u05cc','\u05cd','\u05ce','\u05cf','\u05d0','\u05d1','\u05d2','\u05d3','\u05d4','\u05d5','\u05d6','\u05d7','\u05d8','\u05d9','\u05da','\u05db','\u05dc','\u05dd','\u05de','\u05df','\u05e0','\u05e1','\u05e2','\u05e3','\u05e4','\u05e5','\u05e6','\u05e7','\u05e8','\u05e9','\u05ea',null,null,null,null,null];
function decodeWith(buf, table) {
  let out = '';
  for (const b of buf) out += b < 0x80 ? String.fromCharCode(b) : (table[b - 0x80] || String.fromCharCode(b));
  return out;
}
function readHtml(file) {
  const raw = fs.readFileSync(file);
  const head = raw.slice(0, 4096).toString('latin1');
  const m = head.match(/charset\s*=\s*["']?\s*([a-zA-Z0-9_-]+)/i);
  const cs = m ? m[1].toLowerCase() : '';
  if (/utf-?8/.test(cs)) return raw.toString('utf8');
  if (/1252|1250|8859-1|8859-15|latin/.test(cs)) return decodeWith(raw, CP1252);
  if (/1255|8859-8/.test(cs)) return decodeWith(raw, CP1255X);
  const asUtf8 = raw.toString('utf8');
  if (!asUtf8.includes('\ufffd')) return asUtf8;
  return decodeWith(raw, CP1252);
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
function relKeyOf(f) { return path.relative(SOURCE, f).split(path.sep).join('/').toLowerCase(); }

// ========== LIMPIEZA (preserva formato, elimina basura) ==========
const FONT_SIZES = ['', '.63rem', '.8rem', '1rem', '1.13rem', '1.5rem', '2rem', '3rem'];
function cleanJunk(html) {
  return html
    .replace(/<!--\[if[\s\S]*?<!\[endif\]-->/gi, '')
    .replace(/<xml[\s\S]*?<\/xml>/gi, '')
    .replace(/<\/?o:p>/gi, '')
    .replace(/<base[^>]*>/gi, '')
    .replace(/\s+target\s*=\s*["'][^"']*["']/gi, '')
    .replace(/<script[^>]*googlesyndication[^>]*>\s*<\/script>/gi, STRIP_ADS ? '' : '$&')
    .replace(/<script[^>]*adsbygoogle[^>]*>\s*<\/script>/gi, STRIP_ADS ? '' : '$&')
    .replace(/<ins[^>]*adsbygoogle[\s\S]*?<\/ins>/gi, STRIP_ADS ? '' : '$&')
    .replace(/<font\s+([^>]*)>/gi, (mm, attrs) => {
      const st = [];
      const size = attrs.match(/size\s*=\s*["']?(\d)/i);
      if (size && FONT_SIZES[+size[1]]) st.push('font-size:' + FONT_SIZES[+size[1]]);
      const color = attrs.match(/color\s*=\s*["']?([^"'\s>]+)/i);
      if (color) st.push('color:' + color[1]);
      const face = attrs.match(/face\s*=\s*["']?([^"'>]+)/i);
      if (face) st.push("font-family:'" + face[1].trim().split(',')[0].replace(/['"]/g, '') + "',serif");
      return st.length ? `<span style="${st.join(';')}">` : '<span>';
    })
    .replace(/<\/font>/gi, '</span>')
    .replace(/\sstyle="[^"]*mso-[^"]*"/gi, '')
    .replace(/\sclass="?Mso\w*"?"?/gi, '')
    .replace(/<span[^>]*>\s*<\/span>/gi, '')
    .replace(/<meta[^>]*name=["'](GENERATOR|ProgId)["'][^>]*>/gi, '');
}
function extractBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return cleanJunk(m ? m[1] : html).trim();
}
function frameSection(src) {
  if (/txt|texto/i.test(src)) return { title: 'Texto', rtl: false };
  if (/coment|com\b|comment/i.test(src)) return { title: 'Comentario', rtl: false };
  return { title: null, rtl: false };
}
function isMenuFrame(src) { return /derecha|contents|menu|indice|index/i.test(src); }
function decodeEntities(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&aacute;/g, 'á').replace(/&eacute;/g, 'é').replace(/&iacute;/g, 'í')
    .replace(/&oacute;/g, 'ó').replace(/&uacute;/g, 'ú').replace(/&ntilde;/g, 'ñ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
}

// ========== PASADA 1: slugs únicos por ruta, menú, títulos ==========
const files = walk(SOURCE);
const relSlugMap = new Map();   // relKey → slug de salida
const baseCount = new Map();    // basename → cuántos archivos lo usan
for (const f of files) {
  const bk = baseOf(f).toLowerCase();
  baseCount.set(bk, (baseCount.get(bk) || 0) + 1);
}
for (const f of files) {
  const rel = path.relative(SOURCE, f);
  const parent = path.dirname(rel);
  let s = slug(baseOf(f));
  if (baseCount.get(baseOf(f).toLowerCase()) > 1 && parent !== '.') s = slug(parent) + '-' + s;
  relSlugMap.set(relKeyOf(f), s);
}

// Menú: autodetección si no existe MENU_FILE
let menuPath = path.join(SOURCE, MENU_FILE);
if (!fs.existsSync(menuPath)) {
  let best = null, bestLinks = 0;
  for (const f of files.filter(f => path.dirname(f) === SOURCE)) {
    const n = (readHtml(f).match(/<a[^>]+href/gi) || []).length;
    if (n > bestLinks) { best = f; bestLinks = n; }
  }
  if (best && bestLinks >= 5) { menuPath = best; console.log(`📋 Menú autodetectado: ${path.basename(best)} (${bestLinks} enlaces)`); }
}

const menuMap = new Map();   // relKey → título
const menuOrder = [];        // relKeys en orden de lectura
if (menuPath && fs.existsSync(menuPath)) {
  const menuDir = path.dirname(menuPath);
  const menuHtml = readHtml(menuPath);
  for (const m of menuHtml.matchAll(/<a[^>]+href=["']([^"']+\.html?)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const target = path.relative(SOURCE, path.join(menuDir, decodeURIComponent(m[1]))).split(path.sep).join('/').toLowerCase();
    const text = decodeEntities(m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
    if (!menuMap.has(target) && text) menuMap.set(target, text);
    if (!menuOrder.includes(target)) menuOrder.push(target);
  }
  console.log(`📋 Menú: ${menuMap.size} títulos desde ${path.basename(menuPath)}`);
}

function titleFromName(f) {
  const rk = relKeyOf(f);
  const menuTitle = menuMap.get(rk);
  if (menuTitle) return menuTitle;
  const name = baseOf(f);
  const m = name.match(/^([a-záéíóúñ]+)[\s-]*c?(\d+)$/i);
  if (m && BOOKS[m[1].toLowerCase()]) return `${BOOKS[m[1].toLowerCase()]} ${m[2]}`;
  return name.replace(/[_-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
function navFromMenu(f) {
  const rk = relKeyOf(f);
  const i = menuOrder.indexOf(rk);
  if (i === -1) return { prev: null, next: null };
  const slugAt = idx => {
    const key = menuOrder[idx];
    const match = files.find(x => relKeyOf(x) === key);
    return match ? relSlugMap.get(key) + '.html' : null;
  };
  return { prev: i > 0 ? slugAt(i - 1) : null, next: i < menuOrder.length - 1 ? slugAt(i + 1) : null };
}

function rewriteLocalLinks(html, currentDir) {
  for (const [rk, s] of relSlugMap) {
    const noExt = rk.replace(/\.html?$/i, '');
    const variants = new Set([noExt, encodeURIComponent(noExt)]);
    if (baseCount.get(path.basename(noExt)) === 1) variants.add(path.basename(noExt));
    for (const v of variants) {
      html = html.replace(new RegExp(esc(v) + '\\.html?', 'gi'), s + '.html');
    }
  }
  return html;
}

// ========== PLANTILLA ==========
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
  main { max-width:52rem; margin:2.5rem auto; padding:0 1.25rem 3rem; }
  h1 { font-size:1.75rem; color:var(--gold); border-bottom:2px solid #d4af37; padding-bottom:.45rem; margin-bottom:1.5rem; }
  h2.sec { font-size:1.15rem; color:var(--gold); margin:2.25rem 0 .75rem; text-transform:uppercase; letter-spacing:.08em; }
  .heb { font-family:'Frank Ruhl Libre',serif; font-size:1.25rem; line-height:2.05; }
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
function wrapPage({ title, url, bodyHtml, file }) {
  const { prev, next } = navFromMenu(file);
  const nav = prev || next ? `
  <div class="tnav-ch">
    ${prev ? `<a href="${prev}">← Anterior</a>` : '<span></span>'}
    ${next ? `<a href="${next}">Siguiente →</a>` : '<span></span>'}
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
function mergeFrameset(file, html) {
  const dir = path.dirname(file);
  const title = titleFromName(file);
  const srcs = [...html.matchAll(/<frame[^>]*src=["']([^"']+)["']/gi)].map(m => decodeURIComponent(m[1]));
  let bodyHtml = `<h1>${title}</h1>`;
  for (const src of srcs) {
    const partPath = path.join(dir, src);
    if (!fs.existsSync(partPath)) { console.warn(`   ⚠️  Marco no encontrado: ${src}`); continue; }
    consumedParts.add(path.resolve(partPath));
    const sec = frameSection(src);
    const inner = rewriteLocalLinks(extractBody(readHtml(partPath)), dir);
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
  const outName = relSlugMap.get(relKeyOf(file)) + '.html';
  const html = readHtml(file);
  const isFrameset = /<frameset/i.test(html);
  const relDir = path.dirname(rel);
  const dirSlug = relDir === '.' ? '' : relDir.split(path.sep).map(p => slug(p)).join('/');
  const urlPath = [dirSlug, outName].filter(Boolean).join('/');
  const url = `${NEW_BASE}/${urlPath}`;

  let out;
  const allSrcs = isFrameset ? [...html.matchAll(/<frame[^>]*src=["']([^"']+)["']/gi)].map(m => decodeURIComponent(m[1])) : [];
  const menuSrcs = allSrcs.filter(isMenuFrame);

  if (isFrameset && menuSrcs.length > 0) {
    indexes++;
    for (const s of allSrcs) consumedParts.add(path.resolve(path.dirname(file), s));
    out = `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=/tanaj/">
<link rel="canonical" href="${NEW_BASE}/">
<title>Jumash — Torá Hebrea Comentada · Bene Israel</title>
</head><body><p>Redirigiendo al <a href="/tanaj/">índice del Jumash</a>…</p></body></html>`;
    console.log(`🏠 ${rel} → redirección a /tanaj/`);
  } else if (isFrameset) {
    frames++;
    const { title, bodyHtml } = mergeFrameset(file, html);
    out = wrapPage({ title, url, bodyHtml: rewriteLocalLinks(bodyHtml, path.dirname(file)), file });
    console.log(`🖼️  ${rel} → ${outName} (${title})`);
  } else {
    let body = rewriteLocalLinks(extractBody(html), relDir);
    for (const d of OLD_DOMAINS) {
      body = body.split(`https://${d}`).join('https://www.beneyisrael.com')
                 .split(`http://${d}`).join('https://www.beneyisrael.com');
    }
    out = wrapPage({ title: titleFromName(file), url, bodyHtml: body, file });
    console.log(`✅ ${rel} → ${outName}`);
  }

  const destPath = path.join(DEST, relDir === '.' ? '' : relDir, outName);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, out, 'utf8');

  const isIndexPage = isFrameset && menuSrcs.length > 0;
  const isMenuFile = menuPath && path.resolve(file) === path.resolve(menuPath);
  if (!isIndexPage && !isMenuFile && !consumedParts.has(path.resolve(file))) {
    const group = rel.includes(path.sep) ? rel.split(path.sep)[0] : (menuMap.size ? 'Jumash' : (outName.split('-')[0] || 'General'));
    (manifest[group] ||= []).push({ title: titleFromName(file), url: `/tanaj/${urlPath}` });
  }
  count++;
}

fs.writeFileSync(path.join(DEST, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

const htaccess = `# Subir como .htaccess a la RAÍZ de Ferozo\n` +
  files.map(f => {
    const rel = path.relative(SOURCE, f);
    const relDir = path.dirname(rel);
    const dirSlug = relDir === '.' ? '' : relDir.split(path.sep).map(p => slug(p)).join('/');
    const urlPath = [dirSlug, relSlugMap.get(relKeyOf(f)) + '.html'].filter(Boolean).join('/');
    const target = relKeyOf(f) === 'default.htm' ? 'https://www.beneyisrael.com/tanaj/' : `${NEW_BASE}/${urlPath}`;
    return `Redirect 301 "/${rel.split(path.sep).join('/')}" ${target}`;
  }).join('\n') + '\n';
fs.writeFileSync('tanaj-redirects.htaccess', htaccess, 'utf8');

console.log(`\n🎉 ${count} archivos · ${frames} framesets fusionados · ${indexes} portadas redirigidas`);
console.log(`📇 Índice: ${DEST}/manifest.json`);
console.log(`🔀 301s: tanaj-redirects.htaccess → subir a Ferozo como .htaccess`);
