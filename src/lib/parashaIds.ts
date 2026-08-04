/** Normalización y aliases compartidos para emparejar nombres de parashá con IDs de reflexiones. */

export function normalizarParasha(nombre: string): string[] {
  return nombre
    .replace(/^parashat\s+/i, '')
    .replace(/[־–—]/g, '-')
    // Apóstrofos tipográficos (Hebcal: Re'eh, Beha'alotcha — incluye U+2019)
    .replace(/['\u2018\u2019\u02BC\u05F3`´]/g, '')
    .split('-')
    .map((parte) =>
      parte
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
    )
    .filter(Boolean)
}

/** Transliteraciones (Hebcal EN, locales, variantes) → id canónico de reflexión. */
export const PARASHA_ALIAS: Record<string, string> = {
  // Génesis
  bereshit: 'bereshit',
  bereishit: 'bereshit',
  noaj: 'noaj',
  noach: 'noaj',
  'lej-leja': 'lej-leja',
  'lech-lecha': 'lej-leja',
  vayera: 'vayera',
  vaiera: 'vayera',
  'jaye-sara': 'jaye-sara',
  'chayei-sara': 'jaye-sara',
  'chayei-sarah': 'jaye-sara',
  'chaye-sara': 'jaye-sara',
  'jaiei-sara': 'jaye-sara',
  toldot: 'toldot',
  toldos: 'toldot',
  vayetze: 'vayetze',
  vayetzei: 'vayetze',
  vaietze: 'vayetze',
  vayishlaj: 'vayishlaj',
  vayishlach: 'vayishlaj',
  vaishlaj: 'vayishlaj',
  vayeshev: 'vayeshev',
  vaieshev: 'vayeshev',
  miketz: 'miketz',
  mikeitz: 'miketz',
  mikets: 'miketz',
  vayigash: 'vayigash',
  vaigash: 'vayigash',
  vayeji: 'vayeji',
  vayechi: 'vayeji',
  vaieji: 'vayeji',

  // Éxodo
  shemot: 'shemot',
  shemos: 'shemot',
  vaera: 'vaera',
  bo: 'bo',
  beshalaj: 'beshalaj',
  beshalach: 'beshalaj',
  beshalah: 'beshalaj',
  itro: 'itro',
  yitro: 'itro',
  mishpatim: 'mishpatim',
  teruma: 'teruma',
  terumah: 'teruma',
  tetzave: 'tetzave',
  tetzaveh: 'tetzave',
  'ki-tisa': 'ki-tisa',
  vayakhel: 'vayakhel',
  vaiakhel: 'vayakhel',
  pekudei: 'pekudei',

  // Levítico
  vayikra: 'vayikra',
  vaikra: 'vayikra',
  tzav: 'tzav',
  shemini: 'shemini',
  shmini: 'shemini',
  tazria: 'tazria',
  metzora: 'metzora',
  'ajarei-mot': 'ajarei-mot',
  'acharei-mot': 'ajarei-mot',
  'achrei-mot': 'ajarei-mot',
  acharei: 'ajarei-mot',
  achrei: 'ajarei-mot',
  kedoshim: 'kedoshim',
  emor: 'emor',
  behar: 'behar',
  bejukotai: 'bejukotai',
  bechukotai: 'bejukotai',
  bechukosai: 'bejukotai',

  // Números
  bemidbar: 'bemidbar',
  bamidbar: 'bemidbar',
  naso: 'naso',
  nasso: 'naso',
  behaalotja: 'behaalotja',
  behaalotecha: 'behaalotja',
  behaaloscha: 'behaalotja',
  behaalotcha: 'behaalotja',
  behaaloteja: 'behaalotja',
  shelaj: 'shelaj',
  shlach: 'shelaj',
  shelach: 'shelaj',
  shalach: 'shelaj',
  koraj: 'koraj',
  korach: 'koraj',
  jukat: 'jukat',
  chukat: 'jukat',
  chukas: 'jukat',
  balak: 'balak',
  pinjas: 'pinjas',
  pinchas: 'pinjas',
  pinhas: 'pinjas',
  matot: 'matot',
  matos: 'matot',
  mattos: 'matot',
  masei: 'masei',
  masaei: 'masei',

  // Deuteronomio
  devarim: 'devarim',
  vaetjanan: 'vaetjanan',
  vaetchanan: 'vaetjanan',
  vaeschanan: 'vaetjanan',
  eikev: 'eikev',
  ekev: 'eikev',
  ree: 'ree',
  reeh: 'ree',
  shoftim: 'shoftim',
  'ki-tetze': 'ki-tetze',
  'ki-teitzei': 'ki-tetze',
  'ki-tavo': 'ki-tavo',
  nitzavim: 'nitzavim',
  vayelej: 'vayelej',
  vayelech: 'vayelej',
  vayeilech: 'vayelej',
  vayelekh: 'vayelej',
  vaielej: 'vayelej',
  haazinu: 'haazinu',
  'vezot-haberaja': 'vezot-haberaja',
  'vezot-haberakhah': 'vezot-haberaja',
  'vezot-haberakha': 'vezot-haberaja',
}

/** Devuelve todos los ids canónicos de una parashá (incluye dobles). */
export function resolveParashaIds(nombreParasha: string): string[] {
  const ids: string[] = []
  for (const p of normalizarParasha(nombreParasha)) {
    const id = PARASHA_ALIAS[p] ?? p
    if (!ids.includes(id)) ids.push(id)
  }
  return ids
}

/** Primer id canónico (en dobles, la primera porción). */
export function resolveParashaId(nombreParasha: string): string | undefined {
  return resolveParashaIds(nombreParasha)[0]
}
