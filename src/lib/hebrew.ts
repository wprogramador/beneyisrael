// Conversión gregoriano ↔ hebreo (algoritmo aritmético clásico, sin dependencias)
// Numeración pública de meses: 1=Tishrei, 2=Jeshván, 3=Kislev, 4=Tevet, 5=Shevat,
// 6=Adar I (años embolismales) o Adar (años comunes), 7=Adar II o Nisán, …, 13=Elul

const HEBREW_MONTHS: [string, string, number][] = [
  // [nombre ES, nombre HE, días habituales]
  ['Tishrei', 'תשרי', 30],
  ['Jeshván', 'חשון', 29],
  ['Kislev', 'כסלו', 30],
  ['Tevet', 'טבת', 29],
  ['Shevat', 'שבט', 30],
  ['Adar I', 'אדר א׳', 30],
  ['Adar', 'אדר', 29],
  ['Nisán', 'ניסן', 30],
  ['Iyar', 'אייר', 29],
  ['Siván', 'סיון', 30],
  ['Tamuz', 'תמוז', 29],
  ['Av', 'אב', 30],
  ['Elul', 'אלול', 29],
]

const HEB_EPOCH = 347997 // JDN del 1 Tishrei del año 1

function isLeapYear(y: number): boolean {
  return ((7 * y + 1) % 19) < 7
}

function monthsInYear(y: number): number {
  return isLeapYear(y) ? 13 : 12
}

// Índices de HEBREW_MONTHS presentes en el año y, en orden (posición = mes público - 1)
function monthsOfYear(y: number): number[] {
  const base = [0, 1, 2, 3, 4] // Tishrei…Shevat
  const adar = isLeapYear(y) ? [5, 6] : [6] // Adar I + Adar II | Adar
  const rest = [7, 8, 9, 10, 11, 12] // Nisán…Elul
  return [...base, ...adar, ...rest]
}

// Días del molad de Tishrei desde la época (primer aplazamiento)
function delay1(y: number): number {
  const months = Math.floor((235 * y - 234) / 19)
  const parts = 12084 + 13753 * months
  let day = months * 29 + Math.floor(parts / 25920)
  if ((3 * (day + 1)) % 7 < 3) day += 1
  return day
}

// Segundo aplazamiento (año de 356 días / año anterior de 382)
function delay2(y: number): number {
  const last = delay1(y - 1)
  const present = delay1(y)
  const next = delay1(y + 1)
  if (next - present === 356) return 2
  if (present - last === 382) return 1
  return 0
}

// Días desde la época hasta Rosh HaShaná del año y
function newYearDays(y: number): number {
  return delay1(y) + delay2(y)
}

function daysInYear(y: number): number {
  return newYearDays(y + 1) - newYearDays(y)
}

function daysInMonth(y: number, m: number): number {
  const idx = monthsOfYear(y)[m - 1]
  if (idx === undefined) return 29
  const largo = daysInYear(y) % 10
  if (idx === 1) return largo === 5 ? 30 : 29 // Jeshván (año completo)
  if (idx === 2) return largo === 3 ? 29 : 30 // Kislev (año deficiente)
  return HEBREW_MONTHS[idx][2]
}

function hebrewToJd(y: number, m: number, d: number): number {
  let days = newYearDays(y) + d
  for (let mm = 1; mm < m; mm++) days += daysInMonth(y, mm)
  return Math.floor(days) + HEB_EPOCH
}

function jdToHebrew(jd: number): { y: number; m: number; d: number } {
  jd = Math.round(jd)
  let year = Math.floor(((jd - HEB_EPOCH) * 98496) / 35975351)
  while (jd >= hebrewToJd(year + 1, 1, 1)) year++
  while (jd < hebrewToJd(year, 1, 1)) year--
  let month = 1
  while (month < monthsInYear(year) && jd > hebrewToJd(year, month, daysInMonth(year, month))) month++
  const day = Math.floor(jd - hebrewToJd(year, month, 1) + 1)
  return { y: year, m: month, d: day }
}

function gregorianToJd(y: number, m: number, d: number): number {
  const a = Math.floor((14 - m) / 12)
  const yy = y + 4800 - a
  const mm = m + 12 * a - 3
  return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045
}

function jdToGregorian(jd: number): { y: number; m: number; d: number } {
  const a = Math.floor(jd + 0.5) + 32044
  const b = Math.floor((4 * a + 3) / 146097)
  const cc = a - Math.floor((146097 * b) / 4)
  const dd = Math.floor((4 * cc + 3) / 1461)
  const e = cc - Math.floor((1461 * dd) / 4)
  const mm = Math.floor((5 * e + 2) / 153)
  const day = e - Math.floor((153 * mm + 2) / 5) + 1
  const month = mm + 3 - 12 * Math.floor(mm / 10)
  const year = 100 * b + dd - 4800 + Math.floor(mm / 10)
  return { y: year, m: month, d: day }
}

export interface HebrewDate {
  y: number
  m: number
  d: number
  monthName: string
  monthNameHe: string
}

export function gregorianToHebrew(gy: number, gm: number, gd: number): HebrewDate {
  const { y, m, d } = jdToHebrew(gregorianToJd(gy, gm, gd))
  const idx = monthsOfYear(y)[m - 1]
  return { y, m, d, monthName: HEBREW_MONTHS[idx][0], monthNameHe: HEBREW_MONTHS[idx][1] }
}

export function hebrewToGregorian(hy: number, hm: number, hd: number): { y: number; m: number; d: number } {
  return jdToGregorian(hebrewToJd(hy, hm, hd))
}

export function hebrewMonthOptions(year: number): { value: number; label: string }[] {
  const opts: { value: number; label: string }[] = []
  for (let m = 1; m <= monthsInYear(year); m++) {
    const idx = monthsOfYear(year)[m - 1]
    opts.push({ value: m, label: HEBREW_MONTHS[idx][0] })
  }
  return opts
}

export function isHebrewLeapYear(y: number): boolean {
  return isLeapYear(y)
}

export function daysInHebrewMonth(y: number, m: number): number {
  return daysInMonth(y, m)
}

// Identidad del mes (índice en HEBREW_MONTHS) para el mes público m del año y
export function hebrewMonthIndex(y: number, m: number): number {
  return monthsOfYear(y)[m - 1]
}

// Número público del mes cuya identidad es idx, en el año y (-1 si no existe)
export function hebrewMonthNumberFromIndex(y: number, idx: number): number {
  const pos = monthsOfYear(y).indexOf(idx)
  return pos >= 0 ? pos + 1 : -1
}

export function monthsInHebrewYear(y: number): number {
  return monthsInYear(y)
}

export function formatHebrewDate(h: HebrewDate): string {
  return `${h.d} de ${h.monthName} de ${h.y}`
}

const HEB_UNITS = ['', 'א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ז׳', 'ח׳', 'ט׳']
export function hebrewDayNumeral(d: number): string {
  if (d <= 0) return ''
  if (d < 10) return HEB_UNITS[d]
  if (d === 10) return 'י׳'
  if (d === 15) return 'טו׳'
  if (d === 16) return 'טז׳'
  if (d < 20) return `י${HEB_UNITS[d - 10].replace('׳', '')}׳`
  if (d === 20) return 'כ׳'
  if (d < 30) return `כ${HEB_UNITS[d - 20].replace('׳', '')}׳`
  return 'ל׳'
}

export function jdFromGregorian(y: number, m: number, d: number): number {
  return gregorianToJd(y, m, d)
}

export function gregorianFromJd(jd: number): { y: number; m: number; d: number } {
  return jdToGregorian(jd)
}
