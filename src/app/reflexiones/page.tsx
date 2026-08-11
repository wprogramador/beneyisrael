import type { Metadata } from 'next'
import Reflexiones from '@/views/Reflexiones'

export const metadata: Metadata = {
  title: 'Reflexiones',
  description: 'Reflexiones de Torá, Musar y Cábala del Beit Midrash Bene Israel en Los Teques.',
}

export default function Page() {
  return <Reflexiones />
}
