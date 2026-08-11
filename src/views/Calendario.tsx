'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ChevronLeft, ChevronRight, CalendarDays, ArrowLeftRight, BookOpen, Sparkles,
  Cake, Share2,
} from 'lucide-react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { useReveal } from '@/hooks/useReveal'
import {
  gregorianToHebrew, hebrewToGregorian, jdFromGregorian, gregorianFromJd,
  hebrewDayNumeral, formatHebrewDate, hebrewMonthOptions, daysInHebrewMonth,
  monthsInHebrewYear, isHebrewLeapYear, hebrewMonthIndex, hebrewMonthNumberFromIndex,
  type HebrewDate,
} from '@/lib/hebrew'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  useParasha, useEventosMes, useProximasMoedim, parashaDeSemana,
  type EventoHebreo, type ParashaInfo,
} from '@/lib/hebcal'

const DIAS_SEMANA = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Shab']
const MESES_ES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const DIAS_ES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']

function fmtSecular(y: number, m: number, d: number): string {
  return `${d} de ${MESES_ES[m - 1]} de ${y}`
}

/* ===================== Fases lunares (modelo shabat lunar) ===================== */
const FASES_LUNARES: Record<number, { nombre: string; shabat: string }> = {
  1: { nombre: 'Luna nueva', shabat: 'Inicio de la cuenta' },
  8: { nombre: 'Cuarto creciente', shabat: '1er shabat lunar' },
  15: { nombre: 'Luna llena', shabat: '2do shabat lunar' },
  22: { nombre: 'Cuarto menguante', shabat: '3er shabat lunar' },
  29: { nombre: 'Último filo', shabat: '4to shabat lunar' },
}

function LunaIcon({ dia, size = 13 }: { dia: number; size?: number }) {
  const base = (
    <circle cx="12" cy="12" r="9.5" fill="#0c0a07" stroke="#d4af37" strokeOpacity="0.75" strokeWidth="1.4" />
  )
  let contenido = null
  if (dia === 1) {
    contenido = base
  } else if (dia === 8) {
    contenido = (
      <>
        {base}
        <path d="M12 2.5 A9.5 9.5 0 0 1 12 21.5 Z" fill="#d4af37" />
      </>
    )
  } else if (dia === 15) {
    contenido = <circle cx="12" cy="12" r="9.5" fill="#d4af37" />
  } else if (dia === 22) {
    contenido = (
      <>
        {base}
        <path d="M12 2.5 A9.5 9.5 0 0 0 12 21.5 Z" fill="#d4af37" />
      </>
    )
  } else if (dia === 29) {
    contenido = (
      <>
        {base}
        <path d="M12 2.5 A9.5 9.5 0 0 0 12 21.5 A10.5 10.5 0 0 1 12 2.5 Z" fill="#d4af37" />
      </>
    )
  } else {
    return null
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      {contenido}
    </svg>
  )
}

function fechaCompleta(d: Date): string {
  return `${DIAS_ES[d.getDay()]} ${d.getDate()} de ${MESES_ES[d.getMonth()]} de ${d.getFullYear()}`
}

/* ===================== Tarjeta HOY ===================== */
function TarjetaHoy() {
  const [ahora, setAhora] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setAhora(new Date()), 60000)
    return () => clearInterval(t)
  }, [])

  // El día hebreo comienza al atardecer (18:00): después de esa hora ya "es" el día siguiente
  const esNoche = ahora.getHours() >= 18
  const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate())
  const fechaHebrea = new Date(hoy)
  if (esNoche) fechaHebrea.setDate(fechaHebrea.getDate() + 1)
  const hebreo = gregorianToHebrew(fechaHebrea.getFullYear(), fechaHebrea.getMonth() + 1, fechaHebrea.getDate())
  const parasha = useParasha(hoy)
  const faseHoy = FASES_LUNARES[hebreo.d]

  return (
    <div className="reveal relative overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a150d] via-[#141009] to-[#0c0a07] p-8 md:p-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, #d4af37 0, transparent 45%), radial-gradient(circle at 90% 85%, #d4af37 0, transparent 45%)',
        }}
      />
      <div className="relative grid md:grid-cols-2 gap-10">
        <div>
          <p className="flex items-center gap-2 text-sm tracking-[0.25em] uppercase text-[#d4af37]">
            <CalendarDays size={17} /> Hoy
          </p>
          <p className="mt-4 text-2xl md:text-3xl font-hebrew font-bold text-foreground capitalize">
            {fechaCompleta(hoy)}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <p className="font-hebrew text-3xl md:text-4xl text-[#d4af37]" dir="rtl" lang="he">
              {hebrewDayNumeral(hebreo.d)} {hebreo.monthNameHe} {hebreo.y}
            </p>
            {faseHoy && <LunaIcon dia={hebreo.d} size={30} />}
          </div>
          <p className="mt-1.5 text-foreground/70">{formatHebrewDate(hebreo)}</p>
          {faseHoy && (
            <p className="mt-1 text-sm text-[#d4af37]/90">
              {faseHoy.nombre} · {faseHoy.shabat}
            </p>
          )}
          {esNoche && (
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-xs text-[#d4af37]">
              🌙 El día hebreo comenzó al atardecer
            </p>
          )}
        </div>
        <div className="md:border-l md:border-[#d4af37]/25 md:pl-10 flex flex-col justify-center">
          <p className="flex items-center gap-2 text-sm tracking-[0.25em] uppercase text-[#d4af37]">
            <BookOpen size={17} /> Parashat Hashavúa
          </p>
          <p className="mt-4 font-hebrew text-3xl md:text-4xl font-bold">
            Parashat <span className="gold-gradient-text">{parasha.nombre}</span>
          </p>
          <p className="mt-2 font-hebrew text-2xl text-[#d4af37]/90" dir="rtl" lang="he">
            {parasha.hebreo}
          </p>
          {parasha.lectura && <p className="mt-1.5 text-sm text-foreground/60">{parasha.lectura}</p>}
        </div>
      </div>
    </div>
  )
}

/* ===================== Vista MES ===================== */
function VistaMes({ year, month, eventos }: { year: number; month: number; eventos: EventoHebreo[] }) {
  const hoy = new Date()
  const primerDia = new Date(year, month - 1, 1)
  const inicioJd = jdFromGregorian(year, month, 1) - primerDia.getDay()

  const eventosPorFecha = useMemo(() => {
    const map: Record<string, EventoHebreo[]> = {}
    for (const e of eventos) {
      ;(map[e.fechaISO] = map[e.fechaISO] || []).push(e)
    }
    return map
  }, [eventos])

  const celdas = []
  for (let i = 0; i < 42; i++) {
    const g = gregorianFromJd(inicioJd + i)
    const esHoy = g.y === hoy.getFullYear() && g.m === hoy.getMonth() + 1 && g.d === hoy.getDate()
    const enMes = g.m === month
    const heb = gregorianToHebrew(g.y, g.m, g.d)
    const iso = `${g.y}-${String(g.m).padStart(2, '0')}-${String(g.d).padStart(2, '0')}`
    const evs = eventosPorFecha[iso] || []
    const esRoshJodesh = heb.d === 1
    const fase = FASES_LUNARES[heb.d]

    // Lo que comienza ESTA NOCHE al atardecer (día hebreo siguiente)
    const gSig = gregorianFromJd(inicioJd + i + 1)
    const hebSig = gregorianToHebrew(gSig.y, gSig.m, gSig.d)
    const isoSig = `${gSig.y}-${String(gSig.m).padStart(2, '0')}-${String(gSig.d).padStart(2, '0')}`
    const evsSig = (eventosPorFecha[isoSig] || []).filter((e) => e.categoria !== 'parashat')
    const faseSig = FASES_LUNARES[hebSig.d]
    const nocheEspecial = faseSig || evsSig.length > 0

    celdas.push(
      <div
        key={i}
        className={`group relative min-h-[64px] sm:min-h-[86px] md:min-h-[108px] rounded-md sm:rounded-lg border p-1 sm:p-1.5 md:p-2 transition-colors ${
          esHoy
            ? 'border-[#d4af37] bg-[#d4af37]/15 shadow-lg shadow-[#d4af37]/10'
            : enMes
              ? 'border-[#d4af37]/15 bg-[#141009] hover:border-[#d4af37]/50'
              : 'border-transparent bg-transparent opacity-35'
        }`}
        title={[
          fase ? `${fase.nombre} · ${fase.shabat}` : '',
          ...evs.map((e) => e.titulo),
          `Al atardecer comienza ${formatHebrewDate(hebSig)}${faseSig ? ` · ${faseSig.nombre} (${faseSig.shabat})` : ''}${evsSig.length ? ` · ${evsSig.map((e) => e.titulo).join(', ')}` : ''}`,
        ]
          .filter(Boolean)
          .join(' · ')}
      >
        <div className="flex items-start justify-between gap-0.5">
          <span className={`text-xs sm:text-sm md:text-base font-semibold ${esHoy ? 'text-[#d4af37]' : 'text-foreground'}`}>
            {g.d}
          </span>
          <span className="flex items-center gap-0.5 sm:gap-1">
            <span className="hidden sm:inline-flex">
              <LunaIcon dia={heb.d} size={13} />
            </span>
            <span className="font-hebrew text-[10px] sm:text-xs md:text-sm text-[#d4af37]/70" dir="rtl" lang="he">
              {hebrewDayNumeral(heb.d)}
            </span>
          </span>
        </div>
        {(evs.length > 0 || esRoshJodesh) && (
          <div className="mt-0.5 sm:mt-1 space-y-0.5">
            {esRoshJodesh && (
              <p className="hidden sm:block text-[10px] md:text-[11px] leading-tight text-[#d4af37] font-medium">
                Rosh Jodesh {heb.monthName}
              </p>
            )}
            {/* Móvil: puntos; desktop: títulos */}
            <div className="sm:hidden flex gap-0.5 mt-0.5" aria-hidden="true">
              {esRoshJodesh && <span className="h-1 w-1 rounded-full bg-[#d4af37]" />}
              {evs.slice(0, 2).map((_, j) => (
                <span key={j} className="h-1 w-1 rounded-full bg-[#d4af37]/70" />
              ))}
            </div>
            <div className="hidden sm:block space-y-0.5">
              {evs.slice(0, 2).map((e, j) => (
                <p key={j} className="text-[10px] md:text-[11px] leading-tight text-foreground/70 truncate">
                  {e.titulo}
                </p>
              ))}
            </div>
          </div>
        )}
        {enMes && (
          <div
            className={`mt-1 sm:mt-1.5 rounded px-0.5 sm:px-1 py-0.5 ${
              nocheEspecial ? 'bg-[#d4af37]/15 border border-[#d4af37]/30' : 'border-t border-[#d4af37]/10 max-sm:hidden'
            }`}
          >
            <p className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[9px] md:text-[10px] leading-tight text-[#d4af37]/90">
              <span aria-hidden="true">🕯️</span>
              <span className="hidden md:inline">esta noche:</span>
              <span className="font-hebrew" dir="rtl" lang="he">{hebrewDayNumeral(hebSig.d)}</span>
              {faseSig && (
                <span className="hidden sm:inline-flex">
                  <LunaIcon dia={hebSig.d} size={10} />
                </span>
              )}
            </p>
            {nocheEspecial && (
              <p className="hidden sm:block text-[9px] md:text-[10px] leading-tight text-foreground/70 truncate">
                {faseSig ? faseSig.nombre : evsSig[0].titulo}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1.5 md:gap-2 mb-2">
        {DIAS_SEMANA.map((d, i) => (
          <p key={d} className={`text-center text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase ${i === 6 ? 'text-[#d4af37]' : 'text-foreground/60'}`}>
            <span className="sm:hidden">{d.charAt(0)}</span>
            <span className="hidden sm:inline">{d}</span>
          </p>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5 sm:gap-1.5 md:gap-2">{celdas}</div>
    </div>
  )
}

/* ===================== Vista SEMANA ===================== */
function VistaSemana({ fechaBase, eventos }: { fechaBase: Date; eventos: EventoHebreo[] }) {
  const inicio = new Date(fechaBase)
  inicio.setDate(inicio.getDate() - inicio.getDay())
  const hoy = new Date()

  const eventosPorFecha = useMemo(() => {
    const map: Record<string, EventoHebreo[]> = {}
    for (const e of eventos) {
      ;(map[e.fechaISO] = map[e.fechaISO] || []).push(e)
    }
    return map
  }, [eventos])

  const dias = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(inicio)
    d.setDate(inicio.getDate() + i)
    const heb = gregorianToHebrew(d.getFullYear(), d.getMonth() + 1, d.getDate())
    const esHoy = d.toDateString() === hoy.toDateString()
    const esShabat = i === 6
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    const evs = eventosPorFecha[iso] || []

    dias.push(
      <div
        key={i}
        className={`rounded-2xl border p-4 md:p-5 text-center transition-colors ${
          esHoy
            ? 'border-[#d4af37] bg-[#d4af37]/15 shadow-lg shadow-[#d4af37]/10'
            : esShabat
              ? 'border-[#d4af37]/40 bg-[#1a150d]'
              : 'border-[#d4af37]/15 bg-[#141009]'
        }`}
      >
        <p className={`text-xs tracking-[0.2em] uppercase font-semibold ${esShabat ? 'text-[#d4af37]' : 'text-foreground/60'}`}>
          {DIAS_SEMANA[i]}
        </p>
        <p className={`mt-2 text-2xl md:text-3xl font-bold font-hebrew ${esHoy ? 'text-[#d4af37]' : 'text-foreground'}`}>
          {d.getDate()}
        </p>
        <p className="text-xs text-foreground/50">{MESES_ES[d.getMonth()]}</p>
        <p className="mt-2 font-hebrew text-lg text-[#d4af37]" dir="rtl" lang="he">
          {hebrewDayNumeral(heb.d)}
        </p>
        <p className="text-[11px] text-foreground/50">{heb.monthName}</p>
        {FASES_LUNARES[heb.d] && (
          <div className="mt-2 flex flex-col items-center gap-1">
            <LunaIcon dia={heb.d} size={22} />
            <p className="text-[11px] font-medium text-[#d4af37]">{FASES_LUNARES[heb.d].nombre}</p>
            <p className="text-[10px] text-foreground/50">{FASES_LUNARES[heb.d].shabat}</p>
          </div>
        )}
        {heb.d === 1 && <p className="mt-1.5 text-[11px] font-medium text-[#d4af37]">Rosh Jodesh</p>}
        {evs.map((e, j) => (
          <p key={j} className="mt-1.5 text-[11px] leading-snug text-foreground/70">{e.titulo}</p>
        ))}
        {esShabat && <ParashaDelShabat fecha={d} />}
        {(() => {
          const dSig = new Date(d)
          dSig.setDate(d.getDate() + 1)
          const hebSig = gregorianToHebrew(dSig.getFullYear(), dSig.getMonth() + 1, dSig.getDate())
          const faseSig = FASES_LUNARES[hebSig.d]
          return (
            <div className="mt-3 border-t border-[#d4af37]/15 pt-2">
              <p className="flex items-center justify-center gap-1 text-[10px] text-[#d4af37]/80">
                <span aria-hidden="true">🕯️</span> atardecer →
                <span className="font-hebrew" dir="rtl" lang="he">{hebrewDayNumeral(hebSig.d)}</span>
                {faseSig && <LunaIcon dia={hebSig.d} size={11} />}
              </p>
              {faseSig && (
                <p className="text-[10px] text-foreground/50 mt-0.5">{faseSig.nombre}</p>
              )}
            </div>
          )
        })()}
      </div>
    )
  }

  return <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">{dias}</div>
}

function ParashaDelShabat({ fecha }: { fecha: Date }) {
  const p = useParasha(fecha)
  return (
    <div className="mt-3 rounded-lg border border-[#d4af37]/30 bg-[#0c0a07] px-2 py-2">
      <p className="text-[10px] uppercase tracking-wider text-[#d4af37]">Parashá</p>
      <p className="text-xs font-semibold text-foreground mt-0.5">{p.nombre}</p>
      <p className="font-hebrew text-sm text-[#d4af37]/90" dir="rtl" lang="he">{p.hebreo}</p>
    </div>
  )
}

/* ===================== Fecha de nacimiento hebrea ===================== */
interface ResultadoNacimiento {
  hebreo: HebrewDate
  parasha: ParashaInfo
  proximoCumple: Date
  anioProximo: number
}

// Próxima fecha secular en que cae el cumpleaños hebreo
function proximoCumpleHebreo(nac: HebrewDate): { fecha: Date; anio: number } {
  const hoy = new Date()
  const hoyDia = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())
  const hyHoy = gregorianToHebrew(hoy.getFullYear(), hoy.getMonth() + 1, hoy.getDate()).y

  const calcular = (hy: number): Date => {
    let idx = hebrewMonthIndex(nac.y, nac.m)
    // Nacido en Adar I pero el año actual no es embolismal → se celebra en Adar
    if (idx === 5 && !isHebrewLeapYear(hy)) idx = 6
    let m = hebrewMonthNumberFromIndex(hy, idx)
    if (m < 1) m = monthsInHebrewYear(hy)
    const d = Math.min(nac.d, daysInHebrewMonth(hy, m))
    const g = hebrewToGregorian(hy, m, d)
    return new Date(g.y, g.m - 1, g.d)
  }

  let fecha = calcular(hyHoy)
  let anio = hyHoy
  if (fecha < hoyDia) {
    anio = hyHoy + 1
    fecha = calcular(anio)
  }
  return { fecha, anio }
}

const triggerCls =
  'w-full h-11 rounded-lg border border-[#d4af37]/25 bg-[#0c0a07] px-3 text-foreground hover:border-[#d4af37]/60 focus:border-[#d4af37] focus:ring-[#d4af37]/25 data-[placeholder]:text-foreground/45'

const contentCls =
  'max-h-56 border-[#d4af37]/30 bg-[#141009] text-foreground shadow-xl'

function CampoSelect({
  label,
  value,
  placeholder,
  onChange,
  options,
}: {
  label: string
  value: string
  placeholder: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <label className="flex flex-col gap-1.5 text-left min-w-0">
      <span className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37]/80">{label}</span>
      <Select value={value || undefined} onValueChange={onChange}>
        <SelectTrigger className={triggerCls}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper" className={contentCls}>
          {options.map((o) => (
            <SelectItem
              key={o.value}
              value={o.value}
              className="focus:bg-[#d4af37]/20 focus:text-foreground"
            >
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  )
}

function diasDelMesSecular(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

function SelectoresFechaSecular({
  dia,
  mes,
  anio,
  onDia,
  onMes,
  onAnio,
  anioMin,
  anioMax,
}: {
  dia: string
  mes: string
  anio: string
  onDia: (v: string) => void
  onMes: (v: string) => void
  onAnio: (v: string) => void
  anioMin: number
  anioMax: number
}) {
  const y = parseInt(anio, 10) || anioMax
  const m = parseInt(mes, 10) || 1
  const maxDia = diasDelMesSecular(y, m)
  const anios = useMemo(() => {
    const lista: { value: string; label: string }[] = []
    for (let a = anioMax; a >= anioMin; a--) lista.push({ value: String(a), label: String(a) })
    return lista
  }, [anioMin, anioMax])

  const dias = useMemo(
    () => Array.from({ length: maxDia }, (_, i) => ({ value: String(i + 1), label: String(i + 1) })),
    [maxDia]
  )

  const meses = useMemo(
    () =>
      MESES_ES.map((nombre, i) => ({
        value: String(i + 1),
        label: nombre.charAt(0).toUpperCase() + nombre.slice(1),
      })),
    []
  )

  useEffect(() => {
    const d = parseInt(dia, 10)
    if (d > maxDia) onDia(String(maxDia))
  }, [maxDia, dia, onDia])

  return (
    <div className="grid grid-cols-3 gap-2.5 flex-1 min-w-0">
      <CampoSelect label="Día" value={dia} placeholder="—" onChange={onDia} options={dias} />
      <CampoSelect label="Mes" value={mes} placeholder="—" onChange={onMes} options={meses} />
      <CampoSelect label="Año" value={anio} placeholder="—" onChange={onAnio} options={anios} />
    </div>
  )
}

function NacimientoHebreo() {
  const hoy = useMemo(() => new Date(), [])
  const [dia, setDia] = useState('')
  const [mes, setMes] = useState('')
  const [anio, setAnio] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [res, setRes] = useState<ResultadoNacimiento | null>(null)

  const buscar = async () => {
    const d = parseInt(dia, 10)
    const m = parseInt(mes, 10)
    const y = parseInt(anio, 10)
    if (!d || !m || !y) {
      setError('Elige día, mes y año de nacimiento.')
      setRes(null)
      return
    }
    const candidata = new Date(y, m - 1, d)
    if (
      candidata.getFullYear() !== y ||
      candidata.getMonth() !== m - 1 ||
      candidata.getDate() !== d ||
      y < 1900 ||
      candidata > hoy
    ) {
      setError('Esa fecha no es válida. Revisa día, mes y año.')
      setRes(null)
      return
    }
    setError('')
    setCargando(true)
    try {
      const hebreo = gregorianToHebrew(y, m, d)
      const parasha = await parashaDeSemana(candidata)
      const { fecha, anio: anioProximo } = proximoCumpleHebreo(hebreo)
      setRes({ hebreo, parasha, proximoCumple: fecha, anioProximo })
    } finally {
      setCargando(false)
    }
  }

  const compartir = () => {
    if (!res) return
    const texto = `Mi cumpleaños hebreo es ${formatHebrewDate(res.hebreo)} (${hebrewDayNumeral(res.hebreo.d)} ${res.hebreo.monthNameHe} ${res.hebreo.y}) y nací en la semana de Parashat ${res.parasha.nombre}. Calculado en el Calendario Hebreo de Beit Midrash Bene Israel, Los Teques.`
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <div className="reveal relative overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a150d] via-[#141009] to-[#0c0a07] p-8 md:p-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 15%, #d4af37 0, transparent 45%), radial-gradient(circle at 10% 90%, #d4af37 0, transparent 45%)',
        }}
      />
      <div className="relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-2 text-sm tracking-[0.25em] uppercase text-[#d4af37]">
            <Cake size={17} /> Tu fecha de nacimiento hebrea
          </p>
          <h2 className="mt-3 font-hebrew text-2xl md:text-3xl font-bold">
            ¿En qué fecha hebrea <span className="gold-gradient-text">naciste?</span>
          </h2>
          <p className="mt-2 text-sm text-foreground/60">
            Descubre tu cumpleaños hebreo y la parashá de la semana en que llegaste al mundo
          </p>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-end justify-center gap-3 max-w-xl mx-auto">
          <SelectoresFechaSecular
            dia={dia}
            mes={mes}
            anio={anio}
            onDia={setDia}
            onMes={setMes}
            onAnio={setAnio}
            anioMin={1900}
            anioMax={hoy.getFullYear()}
          />
          <button
            onClick={buscar}
            disabled={cargando}
            className="w-full sm:w-auto bg-[#d4af37] text-[#14100a] font-semibold px-7 py-2.5 rounded-md hover:bg-[#e9c65a] transition-colors text-sm disabled:opacity-60"
          >
            {cargando ? 'Buscando…' : 'Descubrir'}
          </button>
        </div>
        {error && <p className="mt-3 text-center text-sm text-[#e08080]">{error}</p>}

        {res && (
          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/10 p-6 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-[#d4af37]">Tu cumpleaños hebreo</p>
              <p className="mt-3 font-hebrew text-2xl text-[#d4af37]" dir="rtl" lang="he">
                {hebrewDayNumeral(res.hebreo.d)} {res.hebreo.monthNameHe} {res.hebreo.y}
              </p>
              <p className="mt-1.5 text-sm text-foreground/80">{formatHebrewDate(res.hebreo)}</p>
            </div>
            <div className="rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/10 p-6 text-center">
              <p className="text-xs tracking-[0.2em] uppercase text-[#d4af37]">Parashá de tu semana</p>
              <p className="mt-3 font-hebrew text-2xl font-bold">
                Parashat <span className="gold-gradient-text">{res.parasha.nombre}</span>
              </p>
              <p className="mt-1 font-hebrew text-lg text-[#d4af37]/90" dir="rtl" lang="he">
                {res.parasha.hebreo}
              </p>
              {res.parasha.lectura && <p className="mt-1 text-xs text-foreground/60">{res.parasha.lectura}</p>}
            </div>
            <div className="rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/10 p-6 text-center flex flex-col">
              <p className="text-xs tracking-[0.2em] uppercase text-[#d4af37]">Este año cae el</p>
              <p className="mt-3 font-hebrew text-xl font-bold capitalize">
                {fechaCompleta(res.proximoCumple)}
              </p>
              <p className="mt-1.5 text-xs text-foreground/60">año hebreo {res.anioProximo}</p>
              <button
                onClick={compartir}
                className="mt-4 inline-flex items-center justify-center gap-2 self-center rounded-full border border-[#d4af37]/50 px-5 py-2 text-xs font-semibold text-[#d4af37] hover:bg-[#d4af37]/15 transition-colors"
              >
                <Share2 size={14} /> Compartir por WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ===================== Conversor ===================== */
function Conversor() {
  const hoy = useMemo(() => new Date(), [])
  const hebreoHoy = useMemo(
    () => gregorianToHebrew(hoy.getFullYear(), hoy.getMonth() + 1, hoy.getDate()),
    [hoy]
  )

  const [gDia, setGDia] = useState(String(hoy.getDate()))
  const [gMes, setGMes] = useState(String(hoy.getMonth() + 1))
  const [gAnio, setGAnio] = useState(String(hoy.getFullYear()))
  const [resG, setResG] = useState<HebrewDate | null>(null)

  const [hDia, setHDia] = useState(String(hebreoHoy.d))
  const [hMes, setHMes] = useState(String(hebreoHoy.m))
  const [hAnio, setHAnio] = useState(String(hebreoHoy.y))
  const [resH, setResH] = useState<string>('')

  const anioHeb = parseInt(hAnio, 10) || hebreoHoy.y
  const mesesHeb = hebrewMonthOptions(anioHeb)
  const diasEnMes = daysInHebrewMonth(anioHeb, parseInt(hMes, 10) || 1)

  useEffect(() => {
    const d = parseInt(hDia, 10)
    if (d > diasEnMes) setHDia(String(diasEnMes))
  }, [diasEnMes, hDia])

  useEffect(() => {
    const m = parseInt(hMes, 10)
    if (!mesesHeb.some((o) => o.value === m)) {
      setHMes(String(mesesHeb[Math.min(5, mesesHeb.length - 1)]?.value ?? 1))
    }
  }, [anioHeb]) // eslint-disable-line react-hooks/exhaustive-deps

  const aniosHeb = useMemo(() => {
    const lista: number[] = []
    for (let y = hebreoHoy.y - 120; y <= hebreoHoy.y + 5; y++) lista.push(y)
    return lista
  }, [hebreoHoy.y])

  const convertirAHebreo = () => {
    const d = parseInt(gDia, 10)
    const m = parseInt(gMes, 10)
    const y = parseInt(gAnio, 10)
    if (!d || !m || !y) return
    const candidata = new Date(y, m - 1, d)
    if (
      candidata.getFullYear() !== y ||
      candidata.getMonth() !== m - 1 ||
      candidata.getDate() !== d
    ) {
      setResG(null)
      return
    }
    setResG(gregorianToHebrew(y, m, d))
  }

  const convertirASecular = () => {
    const d = parseInt(hDia, 10)
    const m = parseInt(hMes, 10)
    const y = parseInt(hAnio, 10)
    if (!d || !m || !y) return
    if (m < 1 || m > monthsInHebrewYear(y)) {
      setResH(`El año ${y} no tiene ese mes.`)
      return
    }
    const max = daysInHebrewMonth(y, m)
    if (d > max) {
      setResH(`Ese mes solo tiene ${max} días en el año ${y}.`)
      return
    }
    const g = hebrewToGregorian(y, m, d)
    const fecha = new Date(g.y, g.m - 1, g.d)
    setResH(`${DIAS_ES[fecha.getDay()]} ${fmtSecular(g.y, g.m, g.d)}`)
  }

  return (
    <div className="reveal rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a150d] to-[#100d08] p-8 md:p-10">
      <div className="text-center">
        <p className="flex items-center justify-center gap-2 text-sm tracking-[0.25em] uppercase text-[#d4af37]">
          <ArrowLeftRight size={16} /> Conversor de fechas
        </p>
        <p className="mt-2 text-sm text-foreground/60">
          Cumpleaños hebreos, aniversarios, planificación de festividades
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-[#d4af37]/20 bg-[#0c0a07] p-6">
          <h3 className="font-hebrew text-lg font-bold text-foreground">Fecha secular → hebrea</h3>
          <div className="mt-4">
            <SelectoresFechaSecular
              dia={gDia}
              mes={gMes}
              anio={gAnio}
              onDia={setGDia}
              onMes={setGMes}
              onAnio={setGAnio}
              anioMin={1900}
              anioMax={hoy.getFullYear() + 5}
            />
          </div>
          <button
            onClick={convertirAHebreo}
            className="mt-4 w-full bg-[#d4af37] text-[#14100a] font-semibold py-2.5 rounded-md hover:bg-[#e9c65a] transition-colors text-sm"
          >
            Convertir
          </button>
          {resG && (
            <div className="mt-4 rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-3 text-center">
              <p className="font-hebrew text-xl text-[#d4af37]" dir="rtl" lang="he">
                {hebrewDayNumeral(resG.d)} {resG.monthNameHe} {resG.y}
              </p>
              <p className="text-sm text-foreground/80 mt-1">{formatHebrewDate(resG)}</p>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-[#d4af37]/20 bg-[#0c0a07] p-6">
          <h3 className="font-hebrew text-lg font-bold text-foreground">Fecha hebrea → secular</h3>
          <div className="mt-4 grid grid-cols-3 gap-2.5 min-w-0">
            <CampoSelect
              label="Día"
              value={hDia}
              placeholder="—"
              onChange={setHDia}
              options={Array.from({ length: diasEnMes }, (_, i) => ({
                value: String(i + 1),
                label: `${i + 1} · ${hebrewDayNumeral(i + 1)}`,
              }))}
            />
            <CampoSelect
              label="Mes"
              value={hMes}
              placeholder="—"
              onChange={setHMes}
              options={mesesHeb.map((o) => ({ value: String(o.value), label: o.label }))}
            />
            <CampoSelect
              label="Año"
              value={hAnio}
              placeholder="—"
              onChange={setHAnio}
              options={aniosHeb.map((y) => ({ value: String(y), label: String(y) }))}
            />
          </div>
          <button
            onClick={convertirASecular}
            className="mt-4 w-full bg-[#d4af37] text-[#14100a] font-semibold py-2.5 rounded-md hover:bg-[#e9c65a] transition-colors text-sm"
          >
            Convertir
          </button>
          {resH && (
            <div className="mt-4 rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-3 text-center">
              <p className="text-foreground font-medium capitalize">{resH}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ===================== Página ===================== */
export default function Calendario() {
  const ref = useReveal<HTMLDivElement>()
  const hoy = new Date()
  const [vista, setVista] = useState<'mes' | 'semana'>('mes')
  const [mesActual, setMesActual] = useState({ y: hoy.getFullYear(), m: hoy.getMonth() + 1 })
  const [semanaBase, setSemanaBase] = useState<Date>(hoy)

  const eventosMes = useEventosMes(mesActual.y, mesActual.m)
  const proximas = useProximasMoedim()

  const moverMes = (delta: number) => {
    setMesActual(({ y, m }) => {
      let nm = m + delta, ny = y
      if (nm > 12) { nm = 1; ny++ }
      if (nm < 1) { nm = 12; ny-- }
      return { y: ny, m: nm }
    })
  }

  const moverSemana = (delta: number) => {
    const d = new Date(semanaBase)
    d.setDate(d.getDate() + delta * 7)
    setSemanaBase(d)
  }

  const mesHebreoRef = gregorianToHebrew(mesActual.y, mesActual.m, 15)

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground" ref={ref}>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-12 md:pt-48 md:pb-16 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #d4af37 0, transparent 45%), radial-gradient(circle at 85% 80%, #d4af37 0, transparent 45%)',
            }}
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <p className="hero-anim font-hebrew text-[#d4af37] text-xl md:text-2xl tracking-wide" dir="rtl" lang="he">
              לוח השנה העברי
            </p>
            <h1 className="hero-anim hero-anim-1 font-hebrew text-4xl md:text-6xl font-bold mt-3 leading-tight">
              Calendario <span className="gold-gradient-text">Hebreo</span>
            </h1>
            <p className="hero-anim hero-anim-1 mt-3 text-sm tracking-[0.3em] uppercase text-foreground/60">
              Fecha secular y hebrea · Parashat Hashavúa · Conversor
            </p>
          </div>
        </section>

        {/* Tarjeta HOY */}
        <section className="mx-auto max-w-6xl px-5 pb-12">
          <TarjetaHoy />
        </section>

        {/* Fecha de nacimiento hebrea */}
        <section className="mx-auto max-w-6xl px-5 pb-14">
          <NacimientoHebreo />
        </section>

        {/* Calendario */}
        <section className="mx-auto max-w-6xl px-5 pb-14">
          <div className="reveal rounded-3xl border border-[#d4af37]/25 bg-[#100d08] p-5 md:p-8">
            {/* Controles */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => (vista === 'mes' ? moverMes(-1) : moverSemana(-1))}
                  aria-label="Anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/15 transition-colors"
                >
                  <ChevronLeft size={19} />
                </button>
                <div className="text-center min-w-0 sm:min-w-[220px]">
                  <p className="font-hebrew text-base sm:text-xl md:text-2xl font-bold capitalize leading-snug">
                    {vista === 'mes'
                      ? `${MESES_ES[mesActual.m - 1]} ${mesActual.y}`
                      : `Semana del ${semanaBase.getDate()} de ${MESES_ES[semanaBase.getMonth()]}`}
                  </p>
                  <p className="text-xs text-[#d4af37]/80 tracking-wide">
                    {vista === 'mes' && `${mesHebreoRef.monthName} ${mesHebreoRef.y} · ${mesHebreoRef.monthNameHe}`}
                  </p>
                </div>
                <button
                  onClick={() => (vista === 'mes' ? moverMes(1) : moverSemana(1))}
                  aria-label="Siguiente"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/15 transition-colors"
                >
                  <ChevronRight size={19} />
                </button>
              </div>

              <div className="flex rounded-full border border-[#d4af37]/40 overflow-hidden">
                {(['mes', 'semana'] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVista(v)}
                    className={`px-6 py-2 text-sm font-semibold capitalize transition-colors ${
                      vista === v ? 'bg-[#d4af37] text-[#14100a]' : 'text-[#d4af37] hover:bg-[#d4af37]/10'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {vista === 'mes' ? (
              <VistaMes year={mesActual.y} month={mesActual.m} eventos={eventosMes} />
            ) : (
              <VistaSemana fechaBase={semanaBase} eventos={eventosMes} />
            )}
          </div>
        </section>

        {/* Próximas moedim + conversor */}
        <section className="mx-auto max-w-6xl px-5 pb-24 md:pb-32 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 reveal rounded-2xl sm:rounded-3xl border border-[#d4af37]/25 bg-[#100d08] p-5 sm:p-8">
            <p className="flex items-center gap-2 text-sm tracking-[0.25em] uppercase text-[#d4af37]">
              <Sparkles size={16} /> Próximas festividades
            </p>
            <ul className="mt-6 space-y-4">
              {proximas.length === 0 && (
                <li className="text-sm text-foreground/50">Cargando festividades…</li>
              )}
              {proximas.map((p, i) => {
                const [y, m, d] = p.fecha.split('-').map(Number)
                const heb = gregorianToHebrew(y, m, d)
                return (
                  <li key={i} className="flex items-start justify-between gap-3 border-b border-[#d4af37]/10 pb-3.5 last:border-0">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{p.nombre}</p>
                      <p className="text-xs text-[#d4af37]/80 mt-0.5">
                        {formatHebrewDate(heb)}
                      </p>
                    </div>
                    <p className="text-xs text-foreground/60 whitespace-nowrap mt-0.5">
                      {d} {MESES_ES[m - 1].slice(0, 3)} {y}
                    </p>
                  </li>
                )
              })}
            </ul>
            <Link
              href="/moedim"
              className="mt-6 inline-block text-sm text-[#d4af37] hover:text-[#e9c65a] transition-colors"
            >
              Conoce el significado de cada moed →
            </Link>
          </div>

          <div className="lg:col-span-3">
            <Conversor />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
