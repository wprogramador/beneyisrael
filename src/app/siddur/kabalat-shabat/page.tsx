import type { Metadata } from 'next'
import KabalatShabat from '@/views/KabalatShabat'

export const metadata: Metadata = {
  title: 'Kabalat Shabat · Siddur Comunitario',
  description:
    'Siddur para la recepción del Shabat de la comunidad Bene Israel en Los Teques. Liturgia, plegarias y meditaciones para dar la bienvenida al día de reposo.',
  alternates: { canonical: '/siddur/kabalat-shabat' },
  openGraph: {
    url: '/siddur/kabalat-shabat',
    title: 'Kabalat Shabat · Siddur · Beit Midrash Bene Israel',
    description:
      'Liturgia y plegarias para la recepción del Shabat en la comunidad Bene Israel.',
  },
}

export default function KabalatShabatPage() {
  return <KabalatShabat />
}