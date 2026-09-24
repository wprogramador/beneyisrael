// Cargador de datos del Tanaj (תנ״ך). SOLO importar desde Server Components
// (páginas de src/app/tanaj o la API de búsqueda); usa fs y no debe llegar
// al bundle del cliente.
import fs from 'node:fs'
import path from 'node:path'
import type { TanajBookData, TanajChapter, TanajData } from '@/lib/tanaj'
import { normalizeForSearch } from '@/lib/searchNorm'

let cached: TanajData | null = null

export function getTanajData(): TanajData {
  if (!cached) {
    const dir = path.join(process.cwd(), 'src', 'data')
    cached = JSON.parse(
      fs.readFileSync(path.join(dir, 'tanaj.json'), 'utf8'),
    ) as TanajData
  }
  return cached
}

/** Libro por su índice canónico (0 = Génesis … 38 = 2 Crónicas). */
export function getTanajBook(index: number): TanajBookData | null {
  return getTanajData().books.find((b) => b.id === index) ?? null
}

export function getTanajChapter(index: number, chapter: number): TanajChapter | null {
  const book = getTanajBook(index)
  return book?.chapters.find((c) => c.n === chapter) ?? null
}

export interface TanajSearchHit {
  bookIndex: number
  bookName: string
  chapter: number
  verse: number
  es: string
  he: string
}

const MAX_HITS = 60

/** Búsqueda de texto en todo el Tanaj (español o hebreo), con normalización:
 *  sin tildes, sin vocales/cantillación hebrea y finales unificadas. */
export function searchTanaj(query: string): TanajSearchHit[] {
  const raw = query.trim()
  const q = normalizeForSearch(raw)
  if (q.length < 2) return []
  const hits: TanajSearchHit[] = []
  for (const book of getTanajData().books) {
    for (const ch of book.chapters) {
      for (const v of ch.verses) {
        if (normalizeForSearch(v.es).includes(q) || normalizeForSearch(v.he).includes(q)) {
          hits.push({
            bookIndex: book.id,
            bookName: book.name_es,
            chapter: ch.n,
            verse: v.n,
            es: v.es,
            he: v.he,
          })
          if (hits.length >= MAX_HITS) return hits
        }
      }
    }
  }
  return hits
}
