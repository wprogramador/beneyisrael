import type { Metadata } from 'next'
import Moedim from '@/views/Moedim'

export const metadata: Metadata = {
  title: 'Moedim · Festividades y Celebraciones',
  description:
    'Calendario y celebraciones de las festividades judías en la comunidad Bene Israel de Los Teques. Pésaj, Shavuot, Sucot, Rosh Hashaná y Yom Kipur.',
  alternates: { canonical: '/moedim' },
  openGraph: {
    url: '/moedim',
    title: 'Moedim · Festividades Judías · Beit Midrash Bene Israel',
    description:
      'Celebraciones de Pésaj, Shavuot, Sucot, Rosh Hashaná y Yom Kipur en Los Teques, Venezuela.',
  },
}

export default function MoedimPage() {
  return <Moedim />
}