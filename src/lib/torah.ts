// Tipos y metadatos de la Jumash (Torá con comentarios).
// Módulo puro: seguro para importar tanto en servidor como en cliente.

export interface Verse {
  n: number
  alia?: string | null
  texto: string
  hebreo?: string
}

export interface Comentario {
  intro: string | null
  por_versiculo: Record<string, string>
  versiculos_cubiertos: number[]
  n_con_comentario: number
  cobertura_pct: number
  anclas_fuera_de_rango: number[]
}

export interface Parasha {
  orden: number
  nombre: string
  sefaria_ref: string
  wholeRef: string
  libro: string
  inicio: { capitulo: number; versiculo: number }
  fin: { capitulo: number; versiculo: number }
  n_versiculos: number
}

export interface Chapter {
  libro: string
  capitulo: number
  estado: string
  parasha?: string | null
  ref?: [string, string] | null
  aliot?: string[]
  versiculos: Verse[]
  n_versiculos: number
  notas?: string[]
  notas_pie?: string
  comentario?: Comentario
  comentario_estado?: string
  archivo_texto?: string
  archivo_com?: string
}

export const BOOK_ORDER = ['BERESHIT', 'SHEMOT', 'VAIKRA', 'BAMIDBAR', 'DEVARIM'] as const
export type BookId = (typeof BOOK_ORDER)[number]

export const BOOK_META: Record<BookId, { name: string; spanish: string; tint: string }> = {
  BERESHIT: { name: 'Bereshit', spanish: 'Génesis', tint: '#7c5cbf' },
  SHEMOT: { name: 'Shemot', spanish: 'Éxodo', tint: '#3d7ec2' },
  VAIKRA: { name: 'Vaikra', spanish: 'Levítico', tint: '#c2782d' },
  BAMIDBAR: { name: 'Bamidbar', spanish: 'Números', tint: '#3d9e7c' },
  DEVARIM: { name: 'Devarim', spanish: 'Deuteronomio', tint: '#b04a6a' },
}

/** slugs en minúsculas para las URLs: /torah/bereshit/1 */
export const BOOK_SLUG: Record<BookId, string> = {
  BERESHIT: 'bereshit',
  SHEMOT: 'shemot',
  VAIKRA: 'vaikra',
  BAMIDBAR: 'bamidbar',
  DEVARIM: 'devarim',
}

const SLUG_TO_BOOK = Object.fromEntries(
  BOOK_ORDER.map((b) => [BOOK_SLUG[b], b]),
) as Record<string, BookId>

export function bookFromSlug(slug: string): BookId | null {
  return SLUG_TO_BOOK[slug.toLowerCase()] ?? null
}

/** parashot cuyo versículo inicial cae en este capítulo (para las bandas del lector) */
export function parashaStartsIn(parashot: Parasha[], libro: string, capitulo: number) {
  return parashot.filter((p) => p.libro === libro && p.inicio.capitulo === capitulo)
}

/** parashot que terminan dentro de este capítulo (marcador sutil de cierre) */
export function parashaEndsIn(parashot: Parasha[], libro: string, capitulo: number) {
  return parashot.filter((p) => p.libro === libro && p.fin.capitulo === capitulo)
}

export interface BookSummary {
  id: BookId
  slug: string
  chapters: number
  verses: number
  withComment: number
}

export function summarizeBooks(chapters: Chapter[]): BookSummary[] {
  return BOOK_ORDER.map((id) => {
    const list = chapters.filter((c) => c.libro === id)
    return {
      id,
      slug: BOOK_SLUG[id],
      chapters: list.length,
      verses: list.reduce((s, c) => s + c.versiculos.length, 0),
      withComment: list.reduce((s, c) => s + (c.comentario?.n_con_comentario ?? 0), 0),
    }
  }).filter((b) => b.chapters > 0)
}

/** Mapa de nombres de libros en las citas de lectura (español) → slug de la Jumash. */
const LIBRO_SLUG_LECTURA: Record<string, string> = {
  Génesis: 'bereshit',
  Éxodo: 'shemot',
  Levítico: 'vaikra',
  Números: 'bamidbar',
  Deuteronomio: 'devarim',
}

/** Convierte una cita de lectura tipo "Génesis 1:1–6:8" en enlace a la Jumash
 *  (/torah/bereshit/1?v=1). En parashot dobles toma el versículo inicial de la
 *  primera porción. Devuelve null si la cita no se reconoce. */
export function torahLinkFromLectura(lectura: string): string | null {
  const m = /^(Génesis|Éxodo|Levítico|Números|Deuteronomio)\s+(\d+):(\d+)/.exec(lectura.trim())
  if (!m) return null
  const slug = LIBRO_SLUG_LECTURA[m[1]]
  return slug ? `/torah/${slug}/${m[2]}?v=${m[3]}` : null
}
