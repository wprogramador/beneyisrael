export { TARJETAS_PARASHA } from './tarjetas_parasha'
export { TARJETAS_MUSAR } from './tarjetas_musar'
export { TARJETAS_MIDDOT } from './tarjetas_middot'
export { TARJETAS_CABALA } from './tarjetas_cabala'
export { TARJETAS_FESTIVIDADES } from './tarjetas_festividades'
export { TARJETAS_HEBREO } from './tarjetas_hebreo'
export { TARJETAS_HALAJA } from './tarjetas_halaja'

import { TARJETAS_PARASHA } from './tarjetas_parasha'
import { TARJETAS_MUSAR } from './tarjetas_musar'
import { TARJETAS_MIDDOT } from './tarjetas_middot'
import { TARJETAS_CABALA } from './tarjetas_cabala'
import { TARJETAS_FESTIVIDADES } from './tarjetas_festividades'
import { TARJETAS_HEBREO } from './tarjetas_hebreo'
import { TARJETAS_HALAJA } from './tarjetas_halaja'

import type { Tarjeta, CategoriaTarjeta } from './tarjetasTypes'

export type { Tarjeta, CategoriaTarjeta }

export const TODAS_LAS_TARJETAS: Tarjeta[] = [
  ...TARJETAS_PARASHA,
  ...TARJETAS_MUSAR,
  ...TARJETAS_MIDDOT,
  ...TARJETAS_CABALA,
  ...TARJETAS_FESTIVIDADES,
  ...TARJETAS_HEBREO,
  ...TARJETAS_HALAJA,
]

export const TARJETAS_POR_CATEGORIA: Record<CategoriaTarjeta, Tarjeta[]> = {
  'parasha': TARJETAS_PARASHA,
  'musar': TARJETAS_MUSAR,
  'middot': TARJETAS_MIDDOT,
  'cabala': TARJETAS_CABALA,
  'festividad': TARJETAS_FESTIVIDADES,
  'hebreo': TARJETAS_HEBREO,
  'halaja': TARJETAS_HALAJA,
}

export function getTarjetaAleatoria(): Tarjeta {
  const idx = Math.floor(Math.random() * TODAS_LAS_TARJETAS.length)
  return TODAS_LAS_TARJETAS[idx]
}

export function getTarjetaAleatoriaPorCategoria(category: CategoriaTarjeta): Tarjeta {
  const lista = TARJETAS_POR_CATEGORIA[category]
  const idx = Math.floor(Math.random() * lista.length)
  return lista[idx]
}

export const CATEGORIAS: { value: CategoriaTarjeta; label: string }[] = [
  { value: 'parasha', label: 'Parashá' },
  { value: 'musar', label: 'Musar' },
  { value: 'middot', label: 'Middot' },
  { value: 'cabala', label: 'Cábala' },
  { value: 'festividad', label: 'Festividades' },
  { value: 'hebreo', label: 'Hebreo' },
  { value: 'halaja', label: 'Halajá Evolutiva' },
]
