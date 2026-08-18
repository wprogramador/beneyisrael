import type { Metadata } from 'next'
import BirkotHashajar from '@/views/BirkotHashajar'

export const metadata: Metadata = {
  title: 'Birkot Hashajar · Bendiciones de la Mañana',
  description:
    'Birkot Hashajar completas: Modé Ani, Elohai Neshama, Asher Yatzar, Netilat Yadayim y todas las bendiciones matutinas. Texto hebreo, fonética sefardí y traducción al español con explicaciones.',
  alternates: { canonical: '/siddur/birkot-hashajar' },
  openGraph: {
    url: '/siddur/birkot-hashajar',
    title: 'Birkot Hashajar · Bendiciones de la Mañana · Beit Midrash Bene Israel',
    description:
      'Texto hebreo, fonética sefardí y español de las bendiciones matutinas del judaísmo. Modé Ani, Elohai Neshama, Asher Yatzar y más.',
  },
}

export default function BirkotHashajarPage() {
  return <BirkotHashajar />
}
