import type { Metadata } from 'next'
import Calendario from '@/views/Calendario'

export const metadata: Metadata = {
  title: 'Calendario Hebreo',
  description: 'Calendario hebreo con parashá semanal, fechas de festividades y eventos del Beit Midrash Bene Israel.',
}

export default function Page() {
  return <Calendario />
}
