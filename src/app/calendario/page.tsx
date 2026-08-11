import type { Metadata } from 'next'
import Calendario from '@/views/Calendario'

export const metadata: Metadata = {
  title: 'Calendario · Eventos y Estudios',
  description:
    'Calendario de eventos, estudios y actividades del Beit Midrash Bene Israel en Los Teques. Horarios de la Bet Midrash y celebraciones comunitarias.',
  alternates: { canonical: '/calendario' },
  openGraph: {
    url: '/calendario',
    title: 'Calendario · Eventos y Estudios · Beit Midrash Bene Israel',
    description:
      'Horarios de estudios, eventos y actividades de la comunidad Bene Israel en Los Teques.',
  },
}

export default function CalendarioPage() {
  return <Calendario />
}