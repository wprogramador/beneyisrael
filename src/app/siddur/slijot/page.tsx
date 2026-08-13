import type { Metadata } from 'next'
import Slijot from '@/views/Slijot'

export const metadata: Metadata = {
  title: 'Seder de Slijot · Siddur Comunitario',
  description:
    'Seder completo de Slijot en tradición sefardí: Ana Bejoaj, Ashamnu, Vidui, las 13 Midot y Tefilá personal. Con hebreo original, fonética sefardí, traducción y guía de uso para el trabajo individual del alma en Elul y los Diez Días de Teshuvá.',
  alternates: { canonical: '/siddur/slijot' },
  openGraph: {
    url: '/siddur/slijot',
    title: 'Seder de Slijot · Siddur · Beit Midrash Bene Israel',
    description:
      'Seder completo de Slijot en tradición sefardí para el retorno del alma en Elul y los Diez Días de Teshuvá.',
    type: 'article',
    locale: 'es_ES',
    siteName: 'Bene Israel',
  },
}

export default function SlijotPage() {
  return <Slijot />
}
