import type { Metadata } from 'next'
import Biblioteca from '@/views/Biblioteca'

export const metadata: Metadata = {
  title: 'Biblioteca · Recursos de Estudio',
  description:
    'Biblioteca digital del Beit Midrash Bene Israel. Textos, libros y recursos para el estudio de la Torá, la Cábala y la halajá en Los Teques.',
  alternates: { canonical: '/biblioteca' },
  openGraph: {
    url: '/biblioteca',
    title: 'Biblioteca · Recursos de Estudio · Beit Midrash Bene Israel',
    description:
      'Textos, libros y recursos para el estudio de la Torá, la Cábala y la halajá evolutiva.',
  },
}

export default function BibliotecaPage() {
  return <Biblioteca />
}