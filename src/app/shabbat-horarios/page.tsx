import type { Metadata } from 'next'
import ShabbatHorarios from '@/views/ShabbatHorarios'

export const metadata: Metadata = {
  title: 'Horarios de Shabat · Los Teques · Venezuela',
  description:
    'Horarios de encendido de velas y Havdalá del Shabat en Los Teques, Caracas, Valencia y Maracaibo. Parashat Hashavúa y tiempos sagrados de la comunidad Bene Israel.',
  alternates: { canonical: '/shabbat-horarios' },
  openGraph: {
    url: '/shabbat-horarios',
    title: 'Horarios de Shabat · Los Teques · Venezuela · Beit Midrash Bene Israel',
    description:
      'Encendido de velas y Havdalá del Shabat en Venezuela. Parashat Hashavúa y tiempos sagrados.',
  },
}

export default function ShabbatHorariosPage() {
  return <ShabbatHorarios />
}