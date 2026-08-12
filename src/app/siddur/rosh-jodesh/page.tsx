import type { Metadata } from 'next'
import RoshJodesh from '@/views/RoshJodesh'

export const metadata: Metadata = {
  title: 'Seder Rosh Jodesh · Siddur Comunitario',
  description:
    'Seder para la noche de Rosh Jodesh de la comunidad Bene Israel en Los Teques. Liturgia, plegarias, Birkat Halevaná y meditaciones para el inicio del mes nuevo.',
  alternates: { canonical: '/siddur/rosh-jodesh' },
  openGraph: {
    url: '/siddur/rosh-jodesh',
    title: 'Seder Rosh Jodesh · Siddur · Beit Midrash Bene Israel',
    description:
      'Liturgia y plegarias para la noche de Rosh Jodesh en la comunidad Bene Israel. Hebreo, fonética y español.',
  },
}

export default function RoshJodeshPage() {
  return <RoshJodesh />
}