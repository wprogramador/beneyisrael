'use client'

import { useEffect, useState } from 'react'
import { Share2, Copy, Check, MessageCircle } from 'lucide-react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'

interface HorarioShabat {
  fecha: string
  parasha: string
  entrada: string
  salida: string
}

interface Ciudad {
  id: string
  nombre: string
  lat: number
  lng: number
}

const CIUDADES: Ciudad[] = [
  { id: 'los-teques', nombre: 'Los Teques', lat: 10.2514, lng: -67.0409 },
  { id: 'caracas', nombre: 'Caracas', lat: 10.4806, lng: -66.9036 },
  { id: 'valencia', nombre: 'Valencia', lat: 10.162, lng: -68.0077 },
  { id: 'maracaibo', nombre: 'Maracaibo', lat: 10.65, lng: -71.6333 },
]

function formatHora(fechaIso: string): string {
  const d = new Date(fechaIso)
  let h = d.getHours()
  const m = d.getMinutes().toString().padStart(2, '0')
  const ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12
  h = h || 12
  return `${h}:${m} ${ampm}`
}

function formatFecha(fechaIso: string): string {
  const d = new Date(fechaIso)
  return d.toLocaleDateString('es-VE', { day: 'numeric', month: 'short' })
}

function getSemanaLabel(inicio: string): string {
  const d = new Date(inicio)
  return d.toLocaleDateString('es-VE', { day: 'numeric', month: 'short' })
}

export default function ShabbatHorarios() {
  const [ciudadActiva, setCiudadActiva] = useState<string>('los-teques')
  const [horarios, setHorarios] = useState<HorarioShabat[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copiado, setCopiado] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  const ciudad = CIUDADES.find((c) => c.id === ciudadActiva)!

  useEffect(() => {
    async function fetchHorarios() {
      setCargando(true)
      setError(null)
      try {
        const hoy = new Date()
        const inicio = hoy.toISOString().split('T')[0]
        const fin = new Date(hoy.getTime() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

        const url = `https://www.hebcal.com/hebcal?cfg=json&latitude=${ciudad.lat}&longitude=${ciudad.lng}&b=18&m=42&start=${inicio}&end=${fin}&lg=es`
        const res = await fetch(url)
        if (!res.ok) throw new Error('Error al cargar datos')
        const data = await res.json()

        const items = data.items || []

        // Agrupar por semana (viernes/sábado)
        const semanas: Record<string, { entrada?: string; salida?: string; parasha?: string }> = {}

        for (const item of items) {
          const fecha = item.date?.split('T')[0]
          if (!fecha) continue

          if (!semanas[fecha]) semanas[fecha] = {}

          if (item.category === 'candles') {
            semanas[fecha].entrada = item.date
          } else if (item.category === 'havdalah') {
            semanas[fecha].salida = item.date
          } else if (item.category === 'parashat') {
            semanas[fecha].parasha = item.title.replace('Parashat ', '')
          }
        }

        // Construir array ordenado
        const resultado: HorarioShabat[] = []
        const fechas = Object.keys(semanas).sort()

        for (let i = 0; i < fechas.length; i++) {
          const s = semanas[fechas[i]]
          if (s.entrada && s.salida && s.parasha) {
            resultado.push({
              fecha: getSemanaLabel(s.entrada),
              parasha: s.parasha,
              entrada: formatHora(s.entrada),
              salida: formatHora(s.salida),
            })
          }
        }

        setHorarios(resultado.slice(0, 6))
      } catch (e) {
        setError('No se pudieron cargar los horarios. Intenta recargar la página.')
      } finally {
        setCargando(false)
      }
    }

    fetchHorarios()
  }, [ciudadActiva])

  const horarioHoy = horarios[0]
  const url = 'https://teques.beneyisrael.com/shabbat-horarios'

  const compartirWhatsApp = () => {
    if (!horarioHoy) return
    const texto =
      `🕯️ *Horarios de Shabat · ${ciudad.nombre}*\n\n` +
      `📖 *Parashat ${horarioHoy.parasha}*\n` +
      `🌅 Entrada: *${horarioHoy.entrada}*\n` +
      `🌇 Salida: *${horarioHoy.salida}*\n\n` +
      `Via Beit Midrash Bene Israel · Los Teques\n${url}`
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank')
  }

  const copiarLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-5">
          {/* Encabezado */}
          <div className="text-center mb-10">
            <p className="text-[#d4af37] text-xs sm:text-sm tracking-[0.2em] uppercase mb-2" dir="rtl" lang="he">
              זמני השבת
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Horarios de <span className="text-[#d4af37]">Shabat</span>
            </h1>
            <p className="text-[#a89b8c] text-sm sm:text-base mt-3 max-w-lg mx-auto">
              Encendido de velas y Havdalá para esta semana en Venezuela
            </p>
          </div>

          {/* Selector de ciudad */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CIUDADES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCiudadActiva(c.id)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  ciudadActiva === c.id
                    ? 'bg-[#d4af37] text-[#14100a]'
                    : 'border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10'
                }`}
              >
                {c.nombre}
              </button>
            ))}
          </div>

          {cargando && (
            <div className="text-center py-16">
              <div className="inline-block w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-[#a89b8c] text-sm">Cargando horarios desde Hebcal...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-10 bg-[#141009] border border-red-900/50 rounded-2xl mb-8">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {!cargando && !error && horarioHoy && (
            <>
              {/* Card principal */}
              <div className="relative bg-[#141009] border border-[#d4af37] rounded-2xl p-6 sm:p-8 mb-8">
                {/* Botón compartir */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="relative">
                    <button
                      onClick={() => setMenuAbierto(!menuAbierto)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#d4af37] text-[#d4af37] text-xs hover:bg-[#d4af37] hover:text-[#14100a] transition-colors"
                    >
                      <Share2 size={13} />
                      Compartir
                    </button>

                    {menuAbierto && (
                      <div className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-[#d4af37]/30 bg-[#141009] shadow-2xl shadow-black/60 py-2 z-50">
                        <button
                          onClick={() => {
                            compartirWhatsApp()
                            setMenuAbierto(false)
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-left"
                        >
                          <MessageCircle size={15} />
                          WhatsApp
                        </button>
                        <button
                          onClick={() => {
                            copiarLink()
                            setMenuAbierto(false)
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-left"
                        >
                          {copiado ? (
                            <Check size={15} className="text-green-500" />
                          ) : (
                            <Copy size={15} />
                          )}
                          {copiado ? '¡Copiado!' : 'Copiar enlace'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info principal */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6 border-b border-[#d4af37] pb-4 pr-24">
                  <span className="text-lg font-bold">
                    Parashat <span className="text-[#d4af37]">{horarioHoy.parasha}</span>
                  </span>
                  <span className="text-[#a89b8c] text-sm">
                    {horarioHoy.fecha} de {new Date().getFullYear()}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-5 bg-[#0c0a07] rounded-xl border-r-0 sm:border-r-2 border-[#d4af37]">
                    <p className="text-[#a89b8c] text-xs uppercase tracking-wider mb-1">
                      Entrada del Shabat
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-[#d4af37]">
                      {horarioHoy.entrada}
                    </p>
                    <p className="text-xs text-[#8a7e72] mt-1">
                      Viernes · Encendido de velas
                    </p>
                  </div>
                  <div className="text-center p-5 bg-[#0c0a07] rounded-xl border-l-0 sm:border-l-2 border-[#d4af37]">
                    <p className="text-[#a89b8c] text-xs uppercase tracking-wider mb-1">
                      Salida del Shabat
                    </p>
                    <p className="text-3xl sm:text-4xl font-bold text-[#d4af37]">
                      {horarioHoy.salida}
                    </p>
                    <p className="text-xs text-[#8a7e72] mt-1">
                      Sábado · Havdalá
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabla del mes */}
              <div className="bg-[#141009] border border-[#d4af37] rounded-2xl p-5 sm:p-6 mb-6">
                <h3 className="text-[#d4af37] text-base font-semibold mb-4">
                  📅 Próximos horarios de Shabat
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#d4af37]">
                        <th className="text-left py-2 px-2 text-[#a89b8c] font-medium">
                          Fecha
                        </th>
                        <th className="text-left py-2 px-2 text-[#a89b8c] font-medium">
                          Parashá
                        </th>
                        <th className="text-center py-2 px-2 text-[#a89b8c] font-medium">
                          Entrada
                        </th>
                        <th className="text-center py-2 px-2 text-[#a89b8c] font-medium">
                          Salida
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {horarios.map((h, i) => (
                        <tr
                          key={h.fecha + h.parasha}
                          className={`border-b border-[#2a2a2a] last:border-0 ${
                            i === 0 ? 'bg-[#d4af37]/5' : ''
                          }`}
                        >
                          <td className="py-2.5 px-2">{h.fecha}</td>
                          <td className="py-2.5 px-2 font-medium">{h.parasha}</td>
                          <td className="py-2.5 px-2 text-center text-[#d4af37]">
                            {h.entrada}
                          </td>
                          <td className="py-2.5 px-2 text-center text-[#d4af37]">
                            {h.salida}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Nota */}
          <div className="bg-[#141009] rounded-xl border-l-2 border-[#d4af37] p-4">
            <p className="text-xs sm:text-sm text-[#a89b8c] leading-relaxed">
              <strong className="text-[#d4af37]">Nota:</strong> Los horarios se calculan 18
              minutos antes del atardecer (encendido de velas) y 42 minutos después
              (Havdalá). Los tiempos pueden variar ligeramente según la ubicación exacta
              dentro de cada ciudad. Datos proporcionados por{' '}
              <a
                href="https://hebcal.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#d4af37] hover:underline"
              >
                Hebcal
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}