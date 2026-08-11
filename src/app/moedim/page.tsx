import type { Metadata } from 'next'
import Moedim from '@/views/Moedim'

export const metadata: Metadata = {
  title: 'Moedim / Fiestas',
  description: 'Las festividades judías (Moedim): Shabat, Pésaj, Rosh Hashaná, Yom Kipur, Sucot, Janucá, Purim y más.',
}

export default function Page() {
  return <Moedim />
}
