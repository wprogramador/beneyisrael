import type { Metadata } from 'next'
import NombresHebreos from '@/views/NombresHebreos'

export const metadata: Metadata = {
  title: 'Significado de Nombres Hebreos · Bíblicos y Sefardíes',
  description:
    'Descubre el significado de nombres hebreos bíblicos: David, Mosheh, Sarah, Javah, Eliyahu y más. Origen, transliteración sefardí y referencias bíblicas.',
  alternates: { canonical: '/nombres-hebreos' },
  openGraph: {
    url: '/nombres-hebreos',
    title: 'Significado de Nombres Hebreos · Beit Midrash Bene Israel',
    description:
      'Origen y significado espiritual de nombres hebreos bíblicos. Búsqueda en hebreo, sefardí o castellano.',
  },
}

export default function NombresHebreosPage() {
  return <NombresHebreos />
}