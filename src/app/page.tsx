import type { Metadata } from 'next'
import Home from '@/views/Home'

export const metadata: Metadata = {
  title: 'Centro de Estudios Hebreos · Los Teques',
  description:
    'Beit Midrash Bene Israel: comunidad de estudios hebreos en Los Teques, Venezuela. Torá, Musar, Cábala, Halajá Evolutiva y Hebreo.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Beit Midrash Bene Israel · Centro de Estudios Hebreos',
    description:
      'Comunidad de estudios hebreos en Los Teques. Torá, Musar, Cábala, Halajá Evolutiva y Hebreo.',
  },
}

export default function Page() {
  return <Home />
}