import type { Metadata } from 'next'
import KabalatShabat from '@/views/KabalatShabat'

export const metadata: Metadata = {
  title: 'Kabalat Shabat',
  description: 'Sidur de Kabalat Shabat del Beit Midrash Bene Israel.',
}

export default function Page() {
  return <KabalatShabat />
}
