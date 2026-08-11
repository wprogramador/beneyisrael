import type { Metadata } from 'next'
import Donacion from '@/views/Donacion'

export const metadata: Metadata = {
  title: 'Apoyar',
  description: 'Apoya el Beit Midrash Bene Israel en Los Teques. Donaciones para mantener el centro de estudios hebreos.',
}

export default function Page() {
  return <Donacion />
}
