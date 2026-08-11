import type { Metadata } from 'next'
import ToraSemanal from '@/views/ToraSemanal'

export const metadata: Metadata = {
  title: 'Torá Semanal',
  description: 'Parashá de la semana, comentarios y estudio de Torá del Beit Midrash Bene Israel.',
}

export default function Page() {
  return <ToraSemanal />
}
