import type { Metadata } from 'next'
import Faq from '@/views/Faq'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description: 'Preguntas frecuentes sobre el Beit Midrash Bene Israel, clases, Torá y comunidad en Los Teques.',
}

export default function Page() {
  return <Faq />
}
