import type { Metadata } from 'next'
import ShajaritShabat from '@/views/ShajaritShabat'

export const metadata: Metadata = {
  title: 'Shajarit Shabat',
  description: 'Sidur de Shajarit de Shabat del Beit Midrash Bene Israel.',
}

export default function Page() {
  return <ShajaritShabat />
}
