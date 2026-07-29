import { useEffect, useState } from 'react'
import { gregorianToHebrew, hebrewToGregorian, jdFromGregorian, gregorianFromJd } from '@/lib/hebrew'

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

// ---- Datos locales de respaldo (parashiot 5786-5787, orden anual estándar) ----
const PARASHIOT: { es: string; he: string; ref: string }[] = [
  { es: 'Bereshit', he: 'בראשית', ref: 'Génesis 1:1–6:8' },
  { es: 'Noaj', he: 'נח', ref: 'Génesis 6:9–11:32' },
  { es: 'Lej Lejá', he: 'לך לך', ref: 'Génesis 12:1–17:27' },
  { es: 'Vaierá', he: 'וירא', ref: 'Génesis 18:1–22:24' },
  { es: 'Jaiei Sará', he: 'חיי שרה', ref: 'Génesis 23:1–25:18' },
  { es: 'Toldot', he: 'תולדות', ref: 'Génesis 25:19–28:9' },
  { es: 'Vaietzé', he: 'ויצא', ref: 'Génesis 28:10–32:3' },
  { es: 'Vaishlaj', he: 'וישלח', ref: 'Génesis 32:4–36:43' },
  { es: 'Vaieshev', he: 'וישב', ref: 'Génesis 37:1–40:23' },
  { es: 'Miketz', he: 'מקץ', ref: 'Génesis 41:1–44:17' },
  { es: 'Vaigash', he: 'ויגש', ref: 'Génesis 44:18–47:27' },
  { es: 'Vaiejí', he: 'ויחי', ref: 'Génesis 47:28–50:26' },
  { es: 'Shemot', he: 'שמות', ref: 'Éxodo 1:1–6:1' },
  { es: 'Vaerá', he: 'וארא', ref: 'Éxodo 6:2–9:35' },
  { es: 'Bo', he: 'בא', ref: 'Éxodo 10:1–13:16' },
  { es: 'Beshalaj', he: 'בשלח', ref: 'Éxodo 13:17–17:16' },
  { es: 'Itro', he: 'יתרו', ref: 'Éxodo 18:1–20:23' },
  { es: 'Mishpatim', he: 'משפטים', ref: 'Éxodo 21:1–24:18' },
  { es: 'Terumá', he: 'תרומה', ref: 'Éxodo 25:1–27:19' },
  { es: 'Tetzavé', he: 'תצוה', ref: 'Éxodo 27:20–30:10' },
  { es: 'Ki Tisá', he: 'כי תשא', ref: 'Éxodo 30:11–34:35' },
  { es: 'Vaiakhel', he: 'ויקהל', ref: 'Éxodo 35:1–38:20' },
  { es: 'Pekudéi', he: 'פקודי', ref: 'Éxodo 38:21–40:38' },
  { es: 'Vaikrá', he: 'ויקרא', ref: 'Levítico 1:1–5:26' },
  { es: 'Tzav', he: 'צו', ref: 'Levítico 6:1–8:36' },
  { es: 'Sheminí', he: 'שמיני', ref: 'Levítico 9:1–11:47' },
  { es: 'Tazría', he: 'תזריע', ref: 'Levítico 12:1–13:59' },
  { es: 'Metzorá', he: 'מצורע', ref: 'Levítico 14:1–15:33' },
  { es: 'Ajaréi Mot', he: 'אחרי מות', ref: 'Levítico 16:1–18:30' },
  { es: 'Kedoshim', he: 'קדושים', ref: 'Levítico 19:1–20:27' },
  { es: 'Emor', he: 'אמור', ref: 'Levítico 21:1–24:23' },
  { es: 'Behar', he: 'בהר', ref: 'Levítico 25:1–26:2' },
  { es: 'Bejukotai', he: 'בחוקתי', ref: 'Levítico 26:3–27:34' },
  { es: 'Bemidbar', he: 'במדבר', ref: 'Números 1:1–4:20' },
  { es: 'Nasó', he: 'נשא', ref: 'Números 4:21–7:89' },
  { es: 'Behaalotejá', he: 'בהעלותך', ref: 'Números 8:1–12:16' },
  { es: 'Shelaj', he: 'שלח לך', ref: 'Números 13:1–15:41' },
  { es: 'Koraj', he: 'קרח', ref: 'Números 16:1–18:32' },
  { es: 'Jukat', he: 'חקת', ref: 'Números 19:1–22:1' },
  { es: 'Balak', he: 'בלק', ref: 'Números 22:2–25:9' },
  { es: 'Pinjás', he: 'פנחס', ref: 'Números 25:10–30:1' },
  { es: 'Matot-Maséi', he: 'מטות־מסעי', ref: 'Números 30:2–36:13' },
  { es: 'Devarim', he: 'דברים', ref: 'Deuteronomio 1:1–3:22' },
  { es: 'Vaetjanán', he: 'ואתחנן', ref: 'Deuteronomio 3:23–7:11' },
  { es: 'Ekev', he: 'עקב', ref: 'Deuteronomio 7:12–11:25' },
  { es: 'Reé', he: 'ראה', ref: 'Deuteronomio 11:26–16:17' },
  { es: 'Shoftim', he: 'שופטים', ref: 'Deuteronomio 16:18–21:9' },
  { es: 'Ki Tetzé', he: 'כי תצא', ref: 'Deuteronomio 21:10–25:19' },
  { es: 'Ki Tavó', he: 'כי תבוא', ref: 'Deuteronomio 26:1–29:8' },
  { es: 'Nitzavim-Vaielej', he: 'נצבים־וילך', ref: 'Deuteronomio 29:9–31:30' },
  { es: 'Haazinu', he: 'האזינו', ref: 'Deuteronomio 32:1–32:52' },
  { es: 'Vezot Haberajá', he: 'וזאת הברכה', ref: 'Deuteronomio 33:1–34:12' },
]

// Primer shabat después de Simjat Torá 5786 ≈ 25 oct 2025 (Bereshit)
const SHABAT_BERESHIT_5786 = new Date(2025, 9, 25)

export function parashaLocal(fecha: Date): ParashaInfo {
  const d = new Date(fecha)
  d.setHours(0, 0, 0, 0)
  // llevar al sábado de ESTA semana (día 6)
  const diff = (6 - d.getDay() + 7) % 7
  const shabat = new Date(d)
  shabat.setDate(d.getDate() + diff)
  const semanas = Math.max(0, Math.round((shabat.getTime() - SHABAT_BERESHIT_5786.getTime()) / (7 * 86400000)))
  const idx = semanas % PARASHIOT.length
  const p = PARASHIOT[idx]
  return { nombre: p.es, hebreo: p.he, lectura: p.ref, fecha: shabat.toISOString().slice(0, 10) }
}

// ---- Fetch a Hebcal con respaldo local ----
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
  genesis: 'Génesis', exodus: 'Éxodo', leviticus: 'Levítico',
  numbers: 'Números', deuteronomy: 'Deuteronomio',
}

function mapParashaItem(par: any): ParashaInfo {
  const leyning = par.leyning || {}
  const libro = leyning.torah ? leyning.torah.split(' ')[0].toLowerCase() : ''
  return {
    nombre: par.title.replace('Parashat ', ''),
    hebreo: par.hebrew || '',
    lectura: leyning.torah
      ? `${LIBROS[libro] || libro} ${leyning.torah.split(' ').slice(1).join(' ')}`
      : '',
    fecha: par.date,
  }
}

const isoFecha = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

// Parashá del shabat de la semana de `fecha` (Hebcal, con respaldo local)
export async function parashaDeSemana(fecha: Date): Promise<ParashaInfo> {
  const fin = new Date(fecha)
  fin.setDate(fin.getDate() + 6)
  try {
    const data = await fetchJSON(
      `https://www.hebcal.com/hebcal?v=1&cfg=json&start=${isoFecha(fecha)}&end=${isoFecha(fin)}&c=off&s=on&leyning=on&locale=he&geo=none`
    )
    const par = (data.items || []).find((it: any) => it.category === 'parashat')
    if (par) return mapParashaItem(par)
  } catch {}
  return parashaLocal(fecha)
}

export function useParasha(fecha: Date) {
  const [parasha, setParasha] = useState<ParashaInfo>(() => parashaLocal(fecha))

  useEffect(() => {
    let vivo = true
    parashaDeSemana(fecha)
      .then((p) => {
        if (vivo) setParasha(p)
      })
      .catch(() => {})
    return () => {
      vivo = false
    }
  }, [fecha.getTime()])

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
          .filter((it: any) => it.date && it.title)
          .map((it: any) => ({ fechaISO: it.date, titulo: it.title, categoria: it.category || '' }))
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
          .filter((it: any) => it.date && it.title)
          .slice(0, 8)
          .map((it: any) => ({ nombre: it.title as string, fecha: it.date as string }))
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
