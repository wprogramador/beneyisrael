import { getAllArticulos, getAllCategorias } from '@/lib/articulos'
import EstudiosClient from './EstudiosClient'

export const metadata = {
  title: 'Artículos y Estudios · Bene Israel',
  description:
    'Estudios, artículos y reflexiones de la comunidad Bene Israel sobre Torá, Cábala, festividades y vida espiritual.',
}

export default function EstudiosPage() {
  const articulos = getAllArticulos()
  const categorias = getAllCategorias()

  return <EstudiosClient articulos={articulos} categorias={categorias} />
}
