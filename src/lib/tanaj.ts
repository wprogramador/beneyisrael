// Tipos y metadatos del Tanaj (תנ״ך) hebreo–español con comentarios.
// Módulo puro: seguro para importar tanto en servidor como en cliente.

export interface TanajComment {
  title: string
  quote: string
  text: string
}

export interface TanajVerse {
  n: number
  es: string
  he: string
  comment: TanajComment | null
}

export interface TanajChapter {
  n: number
  verses: TanajVerse[]
}

export interface TanajBookData {
  id: number
  name_es: string
  name_he: string
  chapters: TanajChapter[]
}

export interface TanajData {
  meta: {
    title: string
    source: string
    license_note: string
    books: number
    chapters: number
    verses: number
    comments: number
  }
  books: TanajBookData[]
}

export interface TanajBookMeta {
  name: string
  hebreo: string
  spanish: string
  tint: string
  section: 'Torá' | 'Neviim' | 'Ketuvim'
}

export const TANAJ_ORDER = [
  'BERESHIT', 'SHEMOT', 'VAIKRA', 'BAMIDBAR', 'DEVARIM',
  'YEHOSHUA', 'SHOFTIM', 'SHMUEL_A', 'SHMUEL_B', 'MELAJIM_A', 'MELAJIM_B',
  'YESHAIAHU', 'IRMIAHU', 'YEJEZKEL',
  'HOSHAA', 'YOEL', 'AMOS', 'HOVADIAH', 'IONAH', 'MIJA', 'NAJUM',
  'JAVAKUK', 'TSFANIA', 'JAGAI', 'ZEJARIA', 'MALAJI',
  'TEHILIM', 'MISHLEI', 'IYOV', 'SHIR_HASHIRIM', 'RUT', 'EJAJA',
  'KOHELET', 'ESTER', 'DANIEL', 'EZRA', 'NEJEMIA', 'DIVREI_HAYAMIM_A', 'DIVREI_HAYAMIM_B',
] as const

export type TanajBookId = (typeof TANAJ_ORDER)[number]

export const TANAJ_META: Record<TanajBookId, TanajBookMeta> = {
  BERESHIT: { name: 'Bereshit', hebreo: 'בראשית', spanish: 'Génesis', tint: '#7c5cbf', section: 'Torá' },
  SHEMOT: { name: 'Shemot', hebreo: 'שמות', spanish: 'Éxodo', tint: '#3d7ec2', section: 'Torá' },
  VAIKRA: { name: 'Vaikra', hebreo: 'ויקרא', spanish: 'Levítico', tint: '#c2782d', section: 'Torá' },
  BAMIDBAR: { name: 'Bamidbar', hebreo: 'במדבר', spanish: 'Números', tint: '#3d9e7c', section: 'Torá' },
  DEVARIM: { name: 'Devarim', hebreo: 'דברים', spanish: 'Deuteronomio', tint: '#b04a6a', section: 'Torá' },
  YEHOSHUA: { name: 'Yehoshua', hebreo: 'יהושע', spanish: 'Josué', tint: '#2f6f8f', section: 'Neviim' },
  SHOFTIM: { name: 'Shoftim', hebreo: 'שופטים', spanish: 'Jueces', tint: '#5a8f2f', section: 'Neviim' },
  SHMUEL_A: { name: 'Shmuel A', hebreo: 'שמואל א', spanish: '1 Samuel', tint: '#8f5a2f', section: 'Neviim' },
  SHMUEL_B: { name: 'Shmuel B', hebreo: 'שמואל ב', spanish: '2 Samuel', tint: '#8f2f5a', section: 'Neviim' },
  MELAJIM_A: { name: 'Melajim A', hebreo: 'מלכים א', spanish: '1 Reyes', tint: '#6f2f8f', section: 'Neviim' },
  MELAJIM_B: { name: 'Melajim B', hebreo: 'מלכים ב', spanish: '2 Reyes', tint: '#8f2f2f', section: 'Neviim' },
  YESHAIAHU: { name: 'Yeshaiáhu', hebreo: 'ישעיה', spanish: 'Isaías', tint: '#2f8f6f', section: 'Neviim' },
  IRMIAHU: { name: 'Irmiahu', hebreo: 'ירמיה', spanish: 'Jeremías', tint: '#4a6fa5', section: 'Neviim' },
  YEJEZKEL: { name: 'Yejezkel', hebreo: 'יחזקאל', spanish: 'Ezequiel', tint: '#a54a6f', section: 'Neviim' },
  HOSHAA: { name: 'Hoshéa', hebreo: 'הושע', spanish: 'Oseas', tint: '#7c5cbf', section: 'Neviim' },
  YOEL: { name: 'Yoel', hebreo: 'יואל', spanish: 'Joel', tint: '#3d7ec2', section: 'Neviim' },
  AMOS: { name: 'Amós', hebreo: 'עמוס', spanish: 'Amós', tint: '#c2782d', section: 'Neviim' },
  HOVADIAH: { name: 'Hovadiáh', hebreo: 'עובדיה', spanish: 'Abdías', tint: '#3d9e7c', section: 'Neviim' },
  IONAH: { name: 'Ionáh', hebreo: 'יונה', spanish: 'Jonás', tint: '#b04a6a', section: 'Neviim' },
  MIJA: { name: 'Mijá', hebreo: 'מיכה', spanish: 'Miqueas', tint: '#2f6f8f', section: 'Neviim' },
  NAJUM: { name: 'Najúm', hebreo: 'נחום', spanish: 'Nahúm', tint: '#5a8f2f', section: 'Neviim' },
  JAVAKUK: { name: 'Javakuk', hebreo: 'חבקוק', spanish: 'Habacuc', tint: '#8f5a2f', section: 'Neviim' },
  TSFANIA: { name: 'Tsfanía', hebreo: 'צפניה', spanish: 'Sofonías', tint: '#8f2f5a', section: 'Neviim' },
  JAGAI: { name: 'Jagái', hebreo: 'חגי', spanish: 'Hageo', tint: '#6f2f8f', section: 'Neviim' },
  ZEJARIA: { name: 'Zejariá', hebreo: 'זכריה', spanish: 'Zacarías', tint: '#2f8f6f', section: 'Neviim' },
  MALAJI: { name: 'Malají', hebreo: 'מלאכי', spanish: 'Malaquías', tint: '#4a6fa5', section: 'Neviim' },
  TEHILIM: { name: 'Tehilim', hebreo: 'תהלים', spanish: 'Salmos', tint: '#a54a6f', section: 'Ketuvim' },
  MISHLEI: { name: 'Mishlei', hebreo: 'משלי', spanish: 'Proverbios', tint: '#7c5cbf', section: 'Ketuvim' },
  IYOV: { name: 'Iyov', hebreo: 'איוב', spanish: 'Job', tint: '#3d7ec2', section: 'Ketuvim' },
  SHIR_HASHIRIM: { name: 'Shir Hashirim', hebreo: 'שיר השירים', spanish: 'Cantar de los cantares', tint: '#c2782d', section: 'Ketuvim' },
  RUT: { name: 'Rut', hebreo: 'רות', spanish: 'Rut', tint: '#3d9e7c', section: 'Ketuvim' },
  EJAJA: { name: 'Ejajá', hebreo: 'איכה', spanish: 'Lamentaciones', tint: '#b04a6a', section: 'Ketuvim' },
  KOHELET: { name: 'Kohelet', hebreo: 'קהלת', spanish: 'Eclesiastés', tint: '#2f6f8f', section: 'Ketuvim' },
  ESTER: { name: 'Ester', hebreo: 'אסתר', spanish: 'Ester', tint: '#5a8f2f', section: 'Ketuvim' },
  DANIEL: { name: 'Daniel', hebreo: 'דניאל', spanish: 'Daniel', tint: '#8f5a2f', section: 'Ketuvim' },
  EZRA: { name: 'Ezrá', hebreo: 'עזרא', spanish: 'Esdras', tint: '#8f2f5a', section: 'Ketuvim' },
  NEJEMIA: { name: 'Nejemía', hebreo: 'נחמיה', spanish: 'Nehemías', tint: '#6f2f8f', section: 'Ketuvim' },
  DIVREI_HAYAMIM_A: { name: 'Divrei Hayamim A', hebreo: 'דברי הימים א', spanish: '1 Crónicas', tint: '#2f8f6f', section: 'Ketuvim' },
  DIVREI_HAYAMIM_B: { name: 'Divrei Hayamim B', hebreo: 'דברי הימים ב', spanish: '2 Crónicas', tint: '#4a6fa5', section: 'Ketuvim' },
}

/** slugs en minúsculas para las URLs: /tanaj/genesis/1 */
export const TANAJ_SLUG: Record<TanajBookId, string> = {
  BERESHIT: 'genesis', SHEMOT: 'exodo', VAIKRA: 'levitico', BAMIDBAR: 'numeros',
  DEVARIM: 'deuteronomio', YEHOSHUA: 'yehoshua', SHOFTIM: 'jueces',
  SHMUEL_A: '1-shmuel', SHMUEL_B: '2-shmuel', MELAJIM_A: '1-reyes',
  MELAJIM_B: '2-reyes', YESHAIAHU: 'yeshaihu', IRMIAHU: 'irmiahu',
  YEJEZKEL: 'yejezkel', HOSHAA: 'hoshea', YOEL: 'yoel', AMOS: 'amos',
  HOVADIAH: 'hovadiah', IONAH: 'ionah', MIJA: 'mija', NAJUM: 'najum',
  JAVAKUK: 'javakuk', TSFANIA: 'tsfania', JAGAI: 'jagai', ZEJARIA: 'zejaria',
  MALAJI: 'malaji', TEHILIM: 'salmos', MISHLEI: 'proverbios', IYOV: 'iyov',
  SHIR_HASHIRIM: 'cantar-de-los-cantares', RUT: 'rut', EJAJA: 'lamentaciones',
  KOHELET: 'kohelet', ESTER: 'ester', DANIEL: 'daniel', EZRA: 'ezra',
  NEJEMIA: 'nejemia', DIVREI_HAYAMIM_A: '1-cronicas', DIVREI_HAYAMIM_B: '2-cronicas',
}

const SLUG_TO_BOOK = Object.fromEntries(
  TANAJ_ORDER.map((b) => [TANAJ_SLUG[b], b]),
) as Record<string, TanajBookId>

export function tanajBookFromSlug(slug: string): TanajBookId | null {
  return SLUG_TO_BOOK[slug.toLowerCase()] ?? null
}

/** Posición (índice 0) del libro en el Tanaj; coincide con books[].id del JSON. */
export function tanajBookIndex(id: TanajBookId): number {
  return TANAJ_ORDER.indexOf(id)
}

export interface TanajBookSummary {
  id: TanajBookId
  slug: string
  index: number
  name: string
  hebreo: string
  spanish: string
  tint: string
  section: TanajBookMeta['section']
  chapters: number
  verses: number
  withComment: number
}
