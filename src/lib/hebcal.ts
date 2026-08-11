import { useEffect, useState } from 'react'
import { gregorianToHebrew, hebrewToGregorian, jdFromGregorian, gregorianFromJd } from '@/lib/hebrew'
import { resolveParashaIds } from '@/lib/parashaIds'

export interface ParashaInfo {
  nombre: string
  hebreo: string
  lectura: string
  fecha: string // fecha del shabat ISO
}

export interface EventoHebreo {
  fechaISO: string // YYYY-MM-DD
  titulo: string
  categoria: string
}

type ParashaEntry = { es: string; he: string; ref: string }

/** Catálogo de porciones (nombres alineados con reflexiones). */
const CATALOGO: Record<string, ParashaEntry> = {
  bereshit: { es: 'Bereshit', he: 'בראשית', ref: 'Génesis 1:1–6:8' },
  noaj: { es: 'Noaj', he: 'נח', ref: 'Génesis 6:9–11:32' },
  'lej-leja': { es: 'Lej Lejá', he: 'לך לך', ref: 'Génesis 12:1–17:27' },
  vayera: { es: 'Vayerá', he: 'וירא', ref: 'Génesis 18:1–22:24' },
  'jaye-sara': { es: 'Jaié Sará', he: 'חיי שרה', ref: 'Génesis 23:1–25:18' },
  toldot: { es: 'Toldot', he: 'תולדות', ref: 'Génesis 25:19–28:9' },
  vayetze: { es: 'Vayetzé', he: 'ויצא', ref: 'Génesis 28:10–32:3' },
  vayishlaj: { es: 'Vayishlaj', he: 'וישלח', ref: 'Génesis 32:4–36:43' },
  vayeshev: { es: 'Vayéshev', he: 'וישב', ref: 'Génesis 37:1–40:23' },
  miketz: { es: 'Miketz', he: 'מקץ', ref: 'Génesis 41:1–44:17' },
  vayigash: { es: 'Vayigash', he: 'ויגש', ref: 'Génesis 44:18–47:27' },
  vayeji: { es: 'Vayejí', he: 'ויחי', ref: 'Génesis 47:28–50:26' },
  shemot: { es: 'Shemot', he: 'שמות', ref: 'Éxodo 1:1–6:1' },
  vaera: { es: 'Vaerá', he: 'וארא', ref: 'Éxodo 6:2–9:35' },
  bo: { es: 'Bo', he: 'בא', ref: 'Éxodo 10:1–13:16' },
  beshalaj: { es: 'Beshalaj', he: 'בשלח', ref: 'Éxodo 13:17–17:16' },
  itro: { es: 'Itro', he: 'יתרו', ref: 'Éxodo 18:1–20:23' },
  mishpatim: { es: 'Mishpatim', he: 'משפטים', ref: 'Éxodo 21:1–24:18' },
  teruma: { es: 'Terumá', he: 'תרומה', ref: 'Éxodo 25:1–27:19' },
  tetzave: { es: 'Tetzavé', he: 'תצוה', ref: 'Éxodo 27:20–30:10' },
  'ki-tisa': { es: 'Ki Tisá', he: 'כי תשא', ref: 'Éxodo 30:11–34:35' },
  vayakhel: { es: 'Vayakhel', he: 'ויקהל', ref: 'Éxodo 35:1–38:20' },
  pekudei: { es: 'Pekudei', he: 'פקודי', ref: 'Éxodo 38:21–40:38' },
  vayikra: { es: 'Vayikrá', he: 'ויקרא', ref: 'Levítico 1:1–5:26' },
  tzav: { es: 'Tzav', he: 'צו', ref: 'Levítico 6:1–8:36' },
  shemini: { es: 'Sheminí', he: 'שמיני', ref: 'Levítico 9:1–11:47' },
  tazria: { es: 'Tazría', he: 'תזריע', ref: 'Levítico 12:1–13:59' },
  metzora: { es: 'Metzorá', he: 'מצורע', ref: 'Levítico 14:1–15:33' },
  'ajarei-mot': { es: 'Ajarei Mot', he: 'אחרי מות', ref: 'Levítico 16:1–18:30' },
  kedoshim: { es: 'Kedoshim', he: 'קדושים', ref: 'Levítico 19:1–20:27' },
  emor: { es: 'Emor', he: 'אמור', ref: 'Levítico 21:1–24:23' },
  behar: { es: 'Behar', he: 'בהר', ref: 'Levítico 25:1–26:2' },
  bejukotai: { es: 'Bejukotai', he: 'בחוקתי', ref: 'Levítico 26:3–27:34' },
  bemidbar: { es: 'Bemidbar', he: 'במדבר', ref: 'Números 1:1–4:20' },
  naso: { es: 'Nasó', he: 'נשא', ref: 'Números 4:21–7:89' },
  behaalotja: { es: 'Behaalotjá', he: 'בהעלותך', ref: 'Números 8:1–12:16' },
  shelaj: { es: 'Shelaj', he: 'שלח לך', ref: 'Números 13:1–15:41' },
  koraj: { es: 'Kóraj', he: 'קרח', ref: 'Números 16:1–18:32' },
  jukat: { es: 'Jukat', he: 'חקת', ref: 'Números 19:1–22:1' },
  balak: { es: 'Balak', he: 'בלק', ref: 'Números 22:2–25:9' },
  pinjas: { es: 'Pinjás', he: 'פנחס', ref: 'Números 25:10–30:1' },
  matot: { es: 'Matot', he: 'מטות', ref: 'Números 30:2–32:42' },
  masei: { es: 'Maséi', he: 'מסעי', ref: 'Números 33:1–36:13' },
  devarim: { es: 'Devarim', he: 'דברים', ref: 'Deuteronomio 1:1–3:22' },
  vaetjanan: { es: 'Vaetjanán', he: 'ואתחנן', ref: 'Deuteronomio 3:23–7:11' },
  eikev: { es: 'Eikev', he: 'עקב', ref: 'Deuteronomio 7:12–11:25' },
  ree: { es: 'Reé', he: 'ראה', ref: 'Deuteronomio 11:26–16:17' },
  shoftim: { es: 'Shoftim', he: 'שופטים', ref: 'Deuteronomio 16:18–21:9' },
  'ki-tetze': { es: 'Ki Tetzé', he: 'כי תצא', ref: 'Deuteronomio 21:10–25:19' },
  'ki-tavo': { es: 'Ki Tavó', he: 'כי תבוא', ref: 'Deuteronomio 26:1–29:8' },
  nitzavim: { es: 'Nitzavim', he: 'נצבים', ref: 'Deuteronomio 29:9–30:20' },
  vayelej: { es: 'Vayelej', he: 'וילך', ref: 'Deuteronomio 31:1–31:30' },
  haazinu: { es: 'Haazinu', he: 'האזינו', ref: 'Deuteronomio 32:1–32:52' },
  'vezot-haberaja': { es: 'Vezot Haberajá', he: 'וזאת הברכה', ref: 'Deuteronomio 33:1–34:12' },
}

function entryFromIds(ids: string[]): ParashaEntry {
  const parts = ids.map((id) => CATALOGO[id]).filter(Boolean) as ParashaEntry[]
  if (parts.length === 0) {
    return { es: ids.join('-'), he: '', ref: '' }
  }
  if (parts.length === 1) return parts[0]
  return {
    es: parts.map((p) => p.es).join('-'),
    he: parts.map((p) => p.he).join('־'),
    ref: `${parts[0].ref.split('–')[0]}–${parts[parts.length - 1].ref.split('–').pop()}`,
  }
}

/**
 * Calendario local preciso para 5786 (y Bereshit 5787).
 * Fuente: Hebcal, diaspora, ciclo anual.
 * Cada entrada: fecha ISO del shabat → ids canónicos.
 */
const CALENDARIO_LOCAL: { fecha: string; ids: string[] }[] = [
  { fecha: '2025-10-18', ids: ['bereshit'] },
  { fecha: '2025-10-25', ids: ['noaj'] },
  { fecha: '2025-11-01', ids: ['lej-leja'] },
  { fecha: '2025-11-08', ids: ['vayera'] },
  { fecha: '2025-11-15', ids: ['jaye-sara'] },
  { fecha: '2025-11-22', ids: ['toldot'] },
  { fecha: '2025-11-29', ids: ['vayetze'] },
  { fecha: '2025-12-06', ids: ['vayishlaj'] },
  { fecha: '2025-12-13', ids: ['vayeshev'] },
  { fecha: '2025-12-20', ids: ['miketz'] },
  { fecha: '2025-12-27', ids: ['vayigash'] },
  { fecha: '2026-01-03', ids: ['vayeji'] },
  { fecha: '2026-01-10', ids: ['shemot'] },
  { fecha: '2026-01-17', ids: ['vaera'] },
  { fecha: '2026-01-24', ids: ['bo'] },
  { fecha: '2026-01-31', ids: ['beshalaj'] },
  { fecha: '2026-02-07', ids: ['itro'] },
  { fecha: '2026-02-14', ids: ['mishpatim'] },
  { fecha: '2026-02-21', ids: ['teruma'] },
  { fecha: '2026-02-28', ids: ['tetzave'] },
  { fecha: '2026-03-07', ids: ['ki-tisa'] },
  { fecha: '2026-03-14', ids: ['vayakhel', 'pekudei'] },
  { fecha: '2026-03-21', ids: ['vayikra'] },
  { fecha: '2026-03-28', ids: ['tzav'] },
  { fecha: '2026-04-11', ids: ['shemini'] },
  { fecha: '2026-04-18', ids: ['tazria', 'metzora'] },
  { fecha: '2026-04-25', ids: ['ajarei-mot', 'kedoshim'] },
  { fecha: '2026-05-02', ids: ['emor'] },
  { fecha: '2026-05-09', ids: ['behar', 'bejukotai'] },
  { fecha: '2026-05-16', ids: ['bemidbar'] },
  { fecha: '2026-05-30', ids: ['naso'] },
  { fecha: '2026-06-06', ids: ['behaalotja'] },
  { fecha: '2026-06-13', ids: ['shelaj'] },
  { fecha: '2026-06-20', ids: ['koraj'] },
  { fecha: '2026-06-27', ids: ['jukat', 'balak'] },
  { fecha: '2026-07-04', ids: ['pinjas'] },
  { fecha: '2026-07-11', ids: ['matot', 'masei'] },
  { fecha: '2026-07-18', ids: ['devarim'] },
  { fecha: '2026-07-25', ids: ['vaetjanan'] },
  { fecha: '2026-08-01', ids: ['eikev'] },
  { fecha: '2026-08-08', ids: ['ree'] },
  { fecha: '2026-08-15', ids: ['shoftim'] },
  { fecha: '2026-08-22', ids: ['ki-tetze'] },
  { fecha: '2026-08-29', ids: ['ki-tavo'] },
  { fecha: '2026-09-05', ids: ['nitzavim', 'vayelej'] },
  { fecha: '2026-09-19', ids: ['haazinu'] },
  { fecha: '2026-10-10', ids: ['bereshit'] },
]

function shabatDe(fecha: Date): Date {
  const d = new Date(fecha)
  d.setHours(0, 0, 0, 0)
  const diff = (6 - d.getDay() + 7) % 7
  d.setDate(d.getDate() + diff)
  return d
}

const isoFecha = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

function infoFromIds(ids: string[], fechaISO: string): ParashaInfo {
  const e = entryFromIds(ids)
  return { nombre: e.es, hebreo: e.he, lectura: e.ref, fecha: fechaISO }
}

/** Respaldo local: usa el calendario 5786; fuera de rango, la entrada más cercana. */
export function parashaLocal(fecha: Date): ParashaInfo {
  const shabat = shabatDe(fecha)
  const iso = isoFecha(shabat)
  const exacta = CALENDARIO_LOCAL.find((c) => c.fecha === iso)
  if (exacta) return infoFromIds(exacta.ids, iso)

  // Fuera del calendario embebido: tomar la última ≤ shabat, o la primera
  let elegida = CALENDARIO_LOCAL[0]
  for (const c of CALENDARIO_LOCAL) {
    if (c.fecha <= iso) elegida = c
    else break
  }
  return infoFromIds(elegida.ids, iso)
}

async function fetchJSON(url: string, timeoutMs = 9000) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const r = await fetch(url, { signal: ctrl.signal })
    if (!r.ok) throw new Error('http')
    return await r.json()
  } finally {
    clearTimeout(t)
  }
}

const LIBROS: Record<string, string> = {
  genesis: 'Génesis',
  exodus: 'Éxodo',
  leviticus: 'Levítico',
  numbers: 'Números',
  deuteronomy: 'Deuteronomio',
}

interface HebcalParasha {
  title?: string
  hebrew?: string
  date?: string
  category?: string
  leyning?: { torah?: string }
}

function mapParashaItem(par: HebcalParasha): ParashaInfo {
  const title = (par.title || '').replace(/^Parashat\s+/i, '')
  // resolveParashaIds ya parte dobles y limpia apóstrofos (Re'eh → ree)
  const ids = resolveParashaIds(title).filter((id) => Boolean(CATALOGO[id]))

  if (ids.length > 0) {
    return infoFromIds(ids, par.date || '')
  }

  const leyning = par.leyning || {}
  const libro = leyning.torah ? leyning.torah.split(' ')[0].toLowerCase() : ''
  return {
    nombre: title,
    hebreo: par.hebrew || '',
    lectura: leyning.torah
      ? `${LIBROS[libro] || libro} ${leyning.torah.split(' ').slice(1).join(' ')}`
      : '',
    fecha: par.date || '',
  }
}

/** Parashá del shabat de la semana de `fecha` (Hebcal, con respaldo local). */
export async function parashaDeSemana(fecha: Date): Promise<ParashaInfo> {
  const shabat = shabatDe(fecha)
  // Pedimos un rango corto centrado en el shabat para no capturar la porción anterior
  const inicio = new Date(shabat)
  inicio.setDate(shabat.getDate() - 1)
  const fin = new Date(shabat)
  fin.setDate(shabat.getDate() + 1)
  try {
    const data = await fetchJSON(
      `https://www.hebcal.com/hebcal?v=1&cfg=json&start=${isoFecha(inicio)}&end=${isoFecha(fin)}&c=off&s=on&leyning=on&locale=en&geo=none`
    )
    const par = (data.items || []).find((it: HebcalParasha) => it.category === 'parashat')
    if (par) return mapParashaItem(par)
  } catch {
    /* respaldo local */
  }
  return parashaLocal(fecha)
}

function diaClave(fecha: Date): string {
  return isoFecha(new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()))
}

export function useParasha(fecha: Date) {
  const clave = diaClave(fecha)
  const [parasha, setParasha] = useState<ParashaInfo>(() => parashaLocal(fecha))

  useEffect(() => {
    let vivo = true
    const [y, m, d] = clave.split('-').map(Number)
    const ref = new Date(y, m - 1, d)
    setParasha(parashaLocal(ref))
    parashaDeSemana(ref)
      .then((p) => {
        if (vivo) setParasha(p)
      })
      .catch(() => {})
    return () => {
      vivo = false
    }
  }, [clave])

  return parasha
}

export function useEventosMes(year: number, month: number) {
  const [eventos, setEventos] = useState<EventoHebreo[]>([])

  useEffect(() => {
    let vivo = true
    fetchJSON(
      `https://www.hebcal.com/hebcal?v=1&cfg=json&year=${year}&month=${month}&maj=on&min=on&nx=on&ss=on&mf=on&c=off&s=off&locale=es&geo=none`
    )
      .then((data) => {
        if (!vivo) return
        const items: EventoHebreo[] = (data.items || [])
          .filter((it: { date?: string; title?: string }) => it.date && it.title)
          .map((it: { date: string; title: string; category?: string }) => ({
            fechaISO: it.date,
            titulo: it.title,
            categoria: it.category || '',
          }))
        setEventos(items)
      })
      .catch(() => {})
    return () => {
      vivo = false
    }
  }, [year, month])

  return eventos
}

export function useProximasMoedim() {
  const [proximas, setProximas] = useState<{ nombre: string; fecha: string }[]>([])

  useEffect(() => {
    let vivo = true
    const hoy = new Date()
    const y = hoy.getFullYear()
    fetchJSON(
      `https://www.hebcal.com/hebcal?v=1&cfg=json&start=${y}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}&end=${y + 1}-12-31&maj=on&min=on&nx=on&c=off&s=off&locale=es&geo=none`
    )
      .then((data) => {
        if (!vivo) return
        const items = (data.items || [])
          .filter((it: { date?: string; title?: string }) => it.date && it.title)
          .slice(0, 8)
          .map((it: { title: string; date: string }) => ({
            nombre: it.title,
            fecha: it.date,
          }))
        setProximas(items)
      })
      .catch(() => {})
    return () => {
      vivo = false
    }
  }, [])

  return proximas
}

export { gregorianToHebrew, hebrewToGregorian, jdFromGregorian, gregorianFromJd }
