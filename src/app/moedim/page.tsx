import type { Metadata } from 'next'
import Moedim from '@/views/Moedim'

export const metadata: Metadata = {
  title: 'Las Moedim — Fiestas del Eterno',
  description:
    'Las fiestas del Eterno según Vayikrá 23: Shabat, Pésaj, Shavuot, Rosh Hashaná, Iom Kipur, Sucot, Janucá y Purim. Aprende su significado, fechas y rituales con la comunidad Bene Israel.',
  alternates: {
    canonical: '/moedim',
  },
  openGraph: {
    title: 'Las Moedim — Fiestas del Eterno',
    description:
      'Las fiestas del Eterno según Vayikrá 23: Shabat, Pésaj, Shavuot, Rosh Hashaná, Iom Kipur, Sucot, Janucá y Purim.',
    url: 'https://www.beneyisrael.com/moedim',
    images: [
      {
        url: '/images/moed-sucot.jpg',
        width: 1200,
        height: 630,
        alt: 'Sucot — Fiesta de los Tabernáculos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Moedim — Fiestas del Eterno',
    description:
      'Las fiestas del Eterno según Vayikrá 23: Shabat, Pésaj, Shavuot, Rosh Hashaná, Iom Kipur, Sucot, Janucá y Purim.',
    images: ['/images/moed-sucot.jpg'],
  },
}

export default function Page() {
  return <Moedim />
}
