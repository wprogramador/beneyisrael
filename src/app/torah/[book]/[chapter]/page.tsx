import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBookChapters, getChapter, getTorahData } from '@/lib/torahData'
import { BOOK_META, BOOK_SLUG, bookFromSlug } from '@/lib/torah'
import type { BookId } from '@/lib/torah'
import TorahReader from '@/views/torah/TorahReader'

export const dynamicParams = false

type Params = { book: string; chapter: string }

export function generateStaticParams() {
  const { chapters } = getTorahData()
  return chapters.map((c) => ({
    book: BOOK_SLUG[c.libro as BookId],
    chapter: String(c.capitulo),
  }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { book, chapter } = await params
  const id = bookFromSlug(book)
  if (!id) return {}
  const meta = BOOK_META[id]
  return {
    title: `${meta.name} ${chapter} · Jumash`,
    description: `${meta.name} (${meta.spanish}) capítulo ${chapter} en español y hebreo, con los comentarios tradicionales versículo a versículo.`,
    alternates: { canonical: `/torah/${book}/${chapter}` },
  }
}

export default async function TorahChapterPage({ params }: { params: Promise<Params> }) {
  const { book, chapter } = await params
  const id = bookFromSlug(book)
  const chNum = parseInt(chapter, 10)
  const ch = id ? getChapter(id, chNum) : null
  if (!id || !ch || !Number.isFinite(chNum)) notFound()

  const bookChapters = getBookChapters(id)
  const { parashot } = getTorahData()

  return (
    <TorahReader
      book={id}
      chapter={ch}
      chapterNumbers={bookChapters.map((c) => c.capitulo)}
      parashot={parashot.filter((p) => p.libro === id)}
    />
  )
}
