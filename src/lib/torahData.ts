// Cargador de datos de la Jumash. SOLO importar desde Server Components
// (páginas de src/app/torah); usa fs y no debe llegar al bundle del cliente.
import fs from 'node:fs'
import path from 'node:path'
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
