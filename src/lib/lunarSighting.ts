export interface SightingRecord {
  year: number
  month: number
  day: number
  photoUrl?: string
  confirmedBy?: string
  notes?: string
}

export interface LunarCycle {
  cycleNum: number
  dayStart: number
  dayEnd: number
  shabatDay: number
  secularStart: Date
  secularEnd: Date
  shabatStart: Date
  shabatEnd: Date
  phaseName: string
  shabatName: string
}

const PHASE_NAMES = [
  'Luna nueva → Cuarto creciente',
  'Cuarto creciente → Luna llena',
  'Luna llena → Cuarto menguante',
  'Cuarto menguante → Último filo',
]

const SHABAT_NAMES = [
  '1er Shabat Lunar',
  '2do Shabat Lunar',
  '3er Shabat Lunar',
  '4to Shabat Lunar',
]

export function calculateLunarCycles(sighting: SightingRecord): LunarCycle[] {
  const sightingDate = new Date(sighting.year, sighting.month - 1, sighting.day, 12, 0, 0)
  const cycles: LunarCycle[] = []

  for (let i = 0; i < 4; i++) {
    const dayStart = i * 7 + 1
    const dayEnd = i * 7 + 7
    const shabatDay = dayEnd

    const secularStart = new Date(sightingDate)
    secularStart.setDate(secularStart.getDate() + (dayStart - 1))

    const secularEnd = new Date(sightingDate)
    secularEnd.setDate(secularEnd.getDate() + (dayEnd - 1))

    const shabatStart = new Date(secularEnd)
    shabatStart.setDate(shabatStart.getDate() - 1)
    shabatStart.setHours(18, 0, 0, 0)

    const shabatEnd = new Date(secularEnd)
    shabatEnd.setHours(18, 0, 0, 0)

    cycles.push({
      cycleNum: i + 1,
      dayStart,
      dayEnd,
      shabatDay,
      secularStart,
      secularEnd,
      shabatStart,
      shabatEnd,
      phaseName: PHASE_NAMES[i],
      shabatName: SHABAT_NAMES[i],
    })
  }

  return cycles
}

export function getLunarPhase(dayLunar: number): { name: string; shabat?: string; icon: string } | null {
  if (dayLunar === 1)  return { name: 'Luna nueva (avistamiento)', shabat: 'Inicio de la cuenta', icon: '🌑' }
  if (dayLunar === 8)  return { name: 'Cuarto creciente', shabat: '1er Shabat Lunar', icon: '🌓' }
  if (dayLunar === 15) return { name: 'Luna llena', shabat: '2do Shabat Lunar', icon: '🌕' }
  if (dayLunar === 22) return { name: 'Cuarto menguante', shabat: '3er Shabat Lunar', icon: '🌗' }
  if (dayLunar >= 29)  return { name: 'Último filo', shabat: '4to Shabat Lunar', icon: '🌒' }
  return null
}

export function saveSighting(sighting: SightingRecord): void {
  if (typeof window === 'undefined') return
  const key = `sighting-${sighting.year}-${String(sighting.month).padStart(2, '0')}`
  const all = getAllSightings()
  all[key] = sighting
  localStorage.setItem('lunarSightings', JSON.stringify(all))
}

export function getSighting(year: number, month: number): SightingRecord | null {
  if (typeof window === 'undefined') return null
  const key = `sighting-${year}-${String(month).padStart(2, '0')}`
  const all = getAllSightings()
  return all[key] || null
}

function getAllSightings(): Record<string, SightingRecord> {
  if (typeof window === 'undefined') return {}
  const raw = localStorage.getItem('lunarSightings')
  return raw ? JSON.parse(raw) : {}
}

export function fmtShort(date: Date): string {
  const dias = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb']
  const meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
  return `${dias[date.getDay()]} ${date.getDate()} ${meses[date.getMonth()]}`
}

export function fmtFull(date: Date): string {
  const dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
  const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  return `${dias[date.getDay()]} ${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`
}
