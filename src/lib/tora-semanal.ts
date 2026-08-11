import {
  TARJETAS_PARASHA,
  TARJETAS_MUSAR,
  TARJETAS_MIDDOT,
  TARJETAS_CABALA,
  TARJETAS_FESTIVIDADES,
  TARJETAS_HEBREO,
  TARJETAS_HALAJA,
} from './tarjetas'
import { parashaLocal } from './hebcal'
import { normalizarParasha, resolveParashaId } from './parashaIds'
import type { Tarjeta } from './tarjetasTypes'

/* ===== Hash de 32 bits para generador con seed ===== */
function seededRandom(seed: number): number {
  let x = seed >>> 0
  x = (x ^ 61) ^ (x >>> 16)
  x = x + (x << 3)
  x = x ^ (x >>> 4)
  x = x * 0x27d4eb2d
  x = x ^ (x >>> 15)
  return (x >>> 0) / 4294967296
}

/* ===== Semana ISO del año ===== */
function getISOWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
}

function getSemanaSeed(fecha = new Date()): number {
  return fecha.getFullYear() * 100 + getISOWeek(fecha)
}

/* ===== Normalizar título de tarjeta para comparar con hebcal ===== */
function normalizarTitulo(title: string): string {
  return normalizarParasha(title).join('-')
}

/* ===== Buscar parashá de la semana en las tarjetas ===== */
function getParashaDeSemana(): Tarjeta | undefined {
  const info = parashaLocal(new Date())
  const idCanonico = resolveParashaId(info.nombre)
  if (!idCanonico) return undefined

  // Buscar por título normalizado
  return TARJETAS_PARASHA.find((t) => normalizarTitulo(t.title) === idCanonico)
}

/* ===== Interface ===== */
export interface ContenidoSemanal {
  semana: number
  anio: number
  seed: number
  parasha: Tarjeta | null
  musar: Tarjeta
  middot: Tarjeta
  cabala: Tarjeta
  festividad: Tarjeta
  hebreo: Tarjeta
  halaja: Tarjeta
}

/* ===== Selector semanal ===== */
export function getContenidoSemanal(fecha = new Date()): ContenidoSemanal {
  const seed = getSemanaSeed(fecha)

  const pick = <T,>(arr: T[], offset: number): T => {
    const idx = Math.floor(seededRandom(seed + offset) * arr.length)
    return arr[idx]
  }

  const parasha = getParashaDeSemana()

  return {
    semana: getISOWeek(fecha),
    anio: fecha.getFullYear(),
    seed,
    parasha: parasha ?? null,
    musar: pick(TARJETAS_MUSAR, 1),
    middot: pick(TARJETAS_MIDDOT, 2),
    cabala: pick(TARJETAS_CABALA, 3),
    festividad: pick(TARJETAS_FESTIVIDADES, 4),
    hebreo: pick(TARJETAS_HEBREO, 5),
    halaja: pick(TARJETAS_HALAJA, 6),
  }
}