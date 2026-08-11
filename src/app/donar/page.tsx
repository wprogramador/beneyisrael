import type { Metadata } from 'next'
import Donar from '@/views/Donar'

export const metadata: Metadata = {
  title: 'Donar · Apoya el Beit Midrash',
  description:
    'Apoya el trabajo del Beit Midrash Bene Israel en Los Teques. Tu contribución permite seguir difundiendo el estudio de la Torá y fortalecer la comunidad.',
  alternates: { canonical: '/donar' },
  openGraph: {
    url: '/donar',
    title: 'Donar · Apoya el Beit Midrash Bene Israel',
    description:
      'Contribuye para que sigamos difundiendo el estudio de la Torá y fortaleciendo la comunidad en Los Teques.',
  },
}

export default function DonarPage() {
  return <Donar />
}