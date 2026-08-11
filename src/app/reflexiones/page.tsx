import type { Metadata } from 'next'
import Reflexiones from '@/views/Reflexiones'

export const metadata: Metadata = {
  title: 'Reflexiones · Estudios y Enseñanzas',
  description:
    'Reflexiones espirituales y enseñanzas de la comunidad Bene Israel. Meditaciones sobre la Torá, el carácter y la vida comunitaria en Los Teques.',
  alternates: { canonical: '/reflexiones' },
  openGraph: {
    url: '/reflexiones',
    title: 'Reflexiones · Estudios y Enseñanzas · Beit Midrash Bene Israel',
    description:
      'Reflexiones espirituales y enseñanzas sobre la Torá, el carácter y la vida comunitaria.',
  },
}

export default function ReflexionesPage() {
  return <Reflexiones />
}