import type { Metadata } from 'next'
import ShajaritShabat from '@/views/ShajaritShabat'

export const metadata: Metadata = {
  title: 'Shajarit Shabat · Siddur y Liturgia',
  description:
    'Siddur de la Shajarit de Shabat para la comunidad Bene Israel en Los Teques. Plegarias matutinas, musaf y meditaciones para el día de reposo.',
  alternates: { canonical: '/siddur/shajarit-shabat' },
  openGraph: {
    url: '/siddur/shajarit-shabat',
    title: 'Shajarit Shabat · Siddur y Liturgia · Beit Midrash Bene Israel',
    description:
      'Plegarias matutinas, musaf y meditaciones de la Shajarit de Shabat en la comunidad Bene Israel.',
  },
}

export default function ShajaritShabatPage() {
  return <ShajaritShabat />
}