import type { Metadata } from 'next'
import ToraSemanal from '@/views/ToraSemanal'

export const metadata: Metadata = {
  title: 'Torá Semanal · Parashat Hashavúa',
  description:
    'Estudia la porción semanal de la Torá con la comunidad Bene Israel en Los Teques. Reflexiones, halajá evolutiva y aplicación práctica para la vida diaria.',
  alternates: { canonical: '/tora-semanal' },
  openGraph: {
    url: '/tora-semanal',
    title: 'Torá Semanal · Parashat Hashavúa · Beit Midrash Bene Israel',
    description:
      'Reflexiones y estudio de la Parashat Hashavúa. Halajá evolutiva y aplicación práctica en Los Teques, Venezuela.',
  },
}

export default function ToraSemanalPage() {
  return <ToraSemanal />
}