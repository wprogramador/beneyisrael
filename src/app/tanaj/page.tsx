import type { Metadata } from 'next'
import { getTanajData } from '@/lib/tanajData'
import { TANAJ_META, TANAJ_ORDER, TANAJ_SLUG } from '@/lib/tanaj'
import type { TanajBookSummary } from '@/lib/tanaj'
import TanajLibrary from '@/views/tanaj/TanajLibrary'

export const metadata: Metadata = {
  title: 'תנ״ך Tanaj (Biblia) · Hebreo, español con comentarios',
  description:
    'El Tanaj completo (Torá, Neviim y Ketuvim) en hebreo con ta\'amim y español, versículo a versículo, con comentarios. 39 libros, 929 capítulos y más de 23.000 versículos con buscador.',
  alternates: { canonical: '/tanaj' },
  openGraph: {
    url: '/tanaj',
    title: 'תנ״ך Tanaj (Biblia) hebreo–español con comentarios · Bene Israel',
    description:
      'Torá, Profetas y Escritos en hebreo y español, versículo a versículo, con comentarios y buscador de texto.',
  },
}

export default function TanajIndexPage() {
  const data = getTanajData()
  const books: TanajBookSummary[] = TANAJ_ORDER.map((id, i) => {
    const b = data.books[i]
    const meta = TANAJ_META[id]
    return {
      id,
      slug: TANAJ_SLUG[id],
      index: i,
      name: meta.name,
      hebreo: meta.hebreo,
      spanish: meta.spanish,
      tint: meta.tint,
      section: meta.section,
      chapters: b?.chapters.length ?? 0,
      verses: b?.chapters.reduce((s, c) => s + c.verses.length, 0) ?? 0,
      withComment:
        b?.chapters.reduce(
          (s, c) => s + c.verses.filter((v) => v.comment).length,
          0,
        ) ?? 0,
    }
  })
  return <TanajLibrary books={books} />
}
