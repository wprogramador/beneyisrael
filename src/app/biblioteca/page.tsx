import type { Metadata } from 'next'
import Biblioteca from '@/views/Biblioteca'

export const metadata: Metadata = {
  title: 'Biblioteca',
  description: 'Biblioteca digital del Beit Midrash Bene Israel: sidur, textos y recursos de estudio.',
}

export default function Page() {
  return <Biblioteca />
}
