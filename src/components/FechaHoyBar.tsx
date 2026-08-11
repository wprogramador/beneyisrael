'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { gregorianToHebrew, hebrewDayNumeral, formatHebrewDate } from '@/lib/hebrew'

const MESES_ES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]
const MESES_CORTOS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
const DIAS_ES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
const DIAS_CORTOS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb']

function fechaLatina(d: Date, corta: boolean): string {
  if (corta) {
    return `${DIAS_CORTOS[d.getDay()]} ${d.getDate()} ${MESES_CORTOS[d.getMonth()]} ${d.getFullYear()}`
  }
  return `${DIAS_ES[d.getDay()]} ${d.getDate()} de ${MESES_ES[d.getMonth()]} de ${d.getFullYear()}`
}

/** Día hebreo civil: tras ~18:00 ya cuenta el día siguiente. */
function fechaHebreaDeAhora(ahora: Date) {
  const base = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate())
  if (ahora.getHours() >= 18) base.setDate(base.getDate() + 1)
  return gregorianToHebrew(base.getFullYear(), base.getMonth() + 1, base.getDate())
}

export default function FechaHoyBar() {
  const [ahora, setAhora] = useState(() => new Date())

  useEffect(() => {
    const t = window.setInterval(() => setAhora(new Date()), 60_000)
    return () => window.clearInterval(t)
  }, [])

  const hebreo = fechaHebreaDeAhora(ahora)
  const fonetica = formatHebrewDate(hebreo)
  const hebraica = `${hebrewDayNumeral(hebreo.d)} ${hebreo.monthNameHe} ${hebreo.y}`

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 border-b border-[#d4af37]/20 bg-[#0c0a07]/95 backdrop-blur-md">
      <Link
        href="/calendario"
        className="h-full mx-auto max-w-6xl px-3 sm:px-5 flex items-center justify-center gap-2 sm:gap-3 text-center hover:bg-[#d4af37]/5 transition-colors"
        title="Ver calendario hebreo"
      >
        <span className="font-hebrew text-[#d4af37] text-xs sm:text-sm whitespace-nowrap shrink-0" dir="rtl" lang="he">
          {hebraica}
        </span>
        <span className="text-[#d4af37]/35 shrink-0" aria-hidden="true">
          ·
        </span>
        {/* Fonética solo desde sm: en móvil caben hebreo + fecha corta */}
        <span className="hidden sm:inline text-xs text-foreground/75 tracking-wide whitespace-nowrap">
          {fonetica}
        </span>
        <span className="hidden sm:inline text-[#d4af37]/35" aria-hidden="true">
          ·
        </span>
        <span className="sm:hidden text-[10px] text-foreground/55 capitalize tracking-wide whitespace-nowrap truncate">
          {fechaLatina(ahora, true)}
        </span>
        <span className="hidden sm:inline text-xs text-foreground/55 capitalize tracking-wide whitespace-nowrap">
          {fechaLatina(ahora, false)}
        </span>
      </Link>
    </div>
  )
}
