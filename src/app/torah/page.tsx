import type { Metadata } from 'next'
import { getTorahData } from '@/lib/torahData'
import { summarizeBooks } from '@/lib/torah'
import TorahLibrary from '@/views/torah/TorahLibrary'

export const metadata: Metadata = {
  title: 'Jumash · La Torá completa con comentarios',
  description:
    'La Torá (Jumash) completa en español y hebreo, versículo a versículo, con los comentarios tradicionales. Lectura por libros o por las 54 parashiot del ciclo anual.',
  alternates: { canonical: '/torah' },
  openGraph: {
    url: '/torah',
    title: 'Jumash · La Torá completa con comentarios · Bene Israel',
    description:
      'Los cinco libros de la Torá en español y hebreo, con comentarios por versículo y navegación por parashá.',
  },
}

export default function TorahIndexPage() {
  const { chapters, parashot } = getTorahData()
  const books = summarizeBooks(chapters)
  return <TorahLibrary books={books} parashot={parashot} />
}
