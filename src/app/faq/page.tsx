import type { Metadata } from 'next'
import Faq from '@/views/Faq'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes · FAQ',
  description:
    'Respuestas a las preguntas más comunes sobre el Beit Midrash Bene Israel, nuestros estudios, la comunidad y cómo unirte en Los Teques.',
  alternates: { canonical: '/faq' },
  openGraph: {
    url: '/faq',
    title: 'Preguntas Frecuentes · Beit Midrash Bene Israel',
    description:
      'Todo lo que necesitas saber sobre nuestros estudios, la comunidad y cómo participar.',
  },
}

export default function FaqPage() {
  return <Faq />
}