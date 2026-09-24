import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTanajBook } from '@/lib/tanajData'
import { TANAJ_META, TANAJ_ORDER, TANAJ_SLUG, tanajBookFromSlug } from '@/lib/tanaj'
import type { TanajBookId } from '@/lib/tanaj'
import TanajReader from '@/views/tanaj/TanajReader'

export const dynamicParams = false

type Params = { book: string; chapter: string }

export function generateStaticParams() {
  const out: { book: string; chapter: string }[] = []
  for (const id of Object.keys(TANAJ_SLUG) as TanajBookId[]) {
    const data = getTanajBook(TANAJ_ORDER.indexOf(id))
    for (const ch of data?.chapters ?? []) {
      out.push({ book: TANAJ_SLUG[id], chapter: String(ch.n) })
    }
  }
  return out
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { book, chapter } = await params
  const id = tanajBookFromSlug(book)
  if (!id) return {}
  const meta = TANAJ_META[id]
  return {
    title: `${meta.spanish} ${chapter} · תנ״ך Tanaj`,
    description: `${meta.spanish} (${meta.name}) capítulo ${chapter} del Tanaj en hebreo y español, con comentarios versículo a versículo.`,
    alternates: { canonical: `/tanaj/${book}/${chapter}` },
  }
}

export default async function TanajChapterPage({ params }: { params: Promise<Params> }) {
  const { book, chapter } = await params
  const id = tanajBookFromSlug(book)
  const chNum = parseInt(chapter, 10)
  const bookIndex = id ? TANAJ_ORDER.indexOf(id) : -1
  const data = bookIndex >= 0 ? getTanajBook(bookIndex) : null
  const ch = data?.chapters.find((c) => c.n === chNum) ?? null
  if (!id || !ch || !Number.isFinite(chNum)) notFound()

  return (
    <TanajReader
      book={id}
      bookIndex={bookIndex}
      chapter={ch}
      chapterNumbers={(data?.chapters ?? []).map((c) => c.n)}
    />
  )
}
