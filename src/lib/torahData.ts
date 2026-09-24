// Cargador de datos de la Jumash. SOLO importar desde Server Components
// (páginas de src/app/torah); usa fs y no debe llegar al bundle del cliente.
import fs from 'node:fs'
import path from 'node:path'
import { BOOK_META, BOOK_ORDER, BOOK_SLUG } from '@/lib/torah'
import type { Chapter, Parasha } from '@/lib/torah'

export interface TorahData {
  chapters: Chapter[]
  parashot: Parasha[]
}

let cached: TorahData | null = null

export function getTorahData(): TorahData {
  if (!cached) {
    const dir = path.join(process.cwd(), 'src', 'data')
    const chapters = JSON.parse(
      fs.readFileSync(path.join(dir, 'torah.json'), 'utf8'),
    ) as Chapter[]
    const parashot = JSON.parse(
      fs.readFileSync(path.join(dir, 'parashot.json'), 'utf8'),
    ) as Parasha[]
    cached = { chapters, parashot }
  }
  return cached
}

export function getChapter(libro: string, capitulo: number): Chapter | null {
  return (
    getTorahData().chapters.find((c) => c.libro === libro && c.capitulo === capitulo) ?? null
  )
}

export function getBookChapters(libro: string): Chapter[] {
  return getTorahData()
    .chapters.filter((c) => c.libro === libro)
    .sort((a, z) => a.capitulo - z.capitulo)
}

export interface TorahSearchHit {
  bookName: string
  slug: string
  chapter: number
  verse: number
  es: string
  he: string
}

const MAX_HITS = 60

/** Búsqueda de texto en toda la Jumash (español o hebreo). */
export function searchTorah(query: string): TorahSearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const hits: TorahSearchHit[] = []
  for (const ch of getTorahData().chapters) {
    for (const v of ch.versiculos) {
      const he = v.hebreo ?? ''
      if (v.texto.toLowerCase().includes(q) || he.includes(query.trim())) {
        const bookId = ch.libro as (typeof BOOK_ORDER)[number]
        hits.push({
          bookName: `${BOOK_META[bookId].spanish} · ${BOOK_META[bookId].hebreo}`,
          slug: BOOK_SLUG[bookId],
          chapter: ch.capitulo,
          verse: v.n,
          es: v.texto,
          he,
        })
        if (hits.length >= MAX_HITS) return hits
      }
    }
  }
  return hits
}
