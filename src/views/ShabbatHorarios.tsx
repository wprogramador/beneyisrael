'use client'

import { useState } from 'react'
import { Share2, Copy, Check, MessageCircle } from 'lucide-react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'

interface HorarioShabat {
  fecha: string
  parasha: string
  entrada: string
  salida: string
}

const CIUDADES = [
  { id: 'los-teques', nombre: 'Los Teques', offsetMin: 0 },
  { id: 'caracas', nombre: 'Caracas', offsetMin: -2 },
  { id: 'valencia', nombre: 'Valencia', offsetMin: 3 },
  { id: 'maracaibo', nombre: 'Maracaibo', offsetMin: -8 },
] as const

// Horarios base para Los Teques (ejemplo estático, puedes reemplazar por cálculo dinámico)
const HORARIOS_BASE: HorarioShabat[] = [
  { fecha: '15 ago', parasha: 'Shoftim', entrada: '6:12 PM', salida: '7:08 PM' },
  { fecha: '22 ago', parasha: 'Ki Tetze', entrada: '6:14 PM', salida: '7:09 PM' },
  { fecha: '29 ago', parasha: 'Ki Tavo', entrada: '6:15 PM', salida: '7:08 PM' },
  { fecha: '5 sep', parasha: 'Nitzavim', entrada: '6:16 PM', salida: '7:05 PM' },
  { fecha: '12 sep', parasha: 'Vayelej', entrada: '6:17 PM', salida: '7:02 PM' },
]

function ajustarHora(hora: string, offsetMin: number): string {
  if (offsetMin === 0) return hora
  const [hStr, rest] = hora.split(':')
  const [mStr, periodo] = rest.split(' ')
  let h = parseInt(hStr)
  let m = parseInt(mStr) + offsetMin
  if (m >= 60) { h += 1; m -= 60 }
  if (m < 0) { h -= 1; m += 60 }
  return `${h}:${m.toString().padStart(2, '0')} ${periodo}`
}

export default function ShabbatHorarios() {
  const [ciudadActiva, setCiudadActiva] = useState<string>('los-teques')
  const [copiado, setCopiado] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  const ciudad = CIUDADES.find((c) => c.id === ciudadActiva)!
  const horarios = HORARIOS_BASE.map((h) => ({
    ...h,
    entrada: ajustarHora(h.entrada, ciudad.offsetMin),
    salida: ajustarHora(h.salida, ciudad.offsetMin),
  }))

  const horarioHoy = horarios[0]
  const url = 'https://teques.beneyisrael.com/shabbat-horarios'

  const compartirWhatsApp = () => {
    const texto = `🕯️ *Horarios de Shabat · ${ciudad.nombre}*\n\n` +
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
                      onClick={() => { compartirWhatsApp(); setMenuAbierto(false) }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-left"
                    >
                      <MessageCircle size={15} />
                      WhatsApp
                    </button>
                    <button
                      onClick={() => { copiarLink(); setMenuAbierto(false) }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-foreground/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-left"
                    >
                      {copiado ? <Check size={15} className="text-green-500" /> : <Copy size={15} />}
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
              <span className="text-[#a89b8c] text-sm">{horarioHoy.fecha} de 2026</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-5 bg-[#0c0a07] rounded-xl border-r-0 sm:border-r-2 border-[#d4af37]">
                <p className="text-[#a89b8c] text-xs uppercase tracking-wider mb-1">Entrada del Shabat</p>
                <p className="text-3xl sm:text-4xl font-bold text-[#d4af37]">{horarioHoy.entrada}</p>
                <p className="text-xs text-[#8a7e72] mt-1">Viernes · Encendido de velas</p>
              </div>
              <div className="text-center p-5 bg-[#0c0a07] rounded-xl border-l-0 sm:border-l-2 border-[#d4af37]">
                <p className="text-[#a89b8c] text-xs uppercase tracking-wider mb-1">Salida del Shabat</p>
                <p className="text-3xl sm:text-4xl font-bold text-[#d4af37]">{horarioHoy.salida}</p>
                <p className="text-xs text-[#8a7e72] mt-1">Sábado · Havdalá</p>
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
                    <th className="text-left py-2 px-2 text-[#a89b8c] font-medium">Fecha</th>
                    <th className="text-left py-2 px-2 text-[#a89b8c] font-medium">Parashá</th>
                    <th className="text-center py-2 px-2 text-[#a89b8c] font-medium">Entrada</th>
                    <th className="text-center py-2 px-2 text-[#a89b8c] font-medium">Salida</th>
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((h, i) => (
                    <tr
                      key={h.fecha}
                      className={`border-b border-[#2a2a2a] last:border-0 ${
                        i === 0 ? 'bg-[#d4af37]/5' : ''
                      }`}
                    >
                      <td className="py-2.5 px-2">{h.fecha}</td>
                      <td className="py-2.5 px-2 font-medium">{h.parasha}</td>
                      <td className="py-2.5 px-2 text-center text-[#d4af37]">{h.entrada}</td>
                      <td className="py-2.5 px-2 text-center text-[#d4af37]">{h.salida}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Nota */}
          <div className="bg-[#141009] rounded-xl border-l-2 border-[#d4af37] p-4">
            <p className="text-xs sm:text-sm text-[#a89b8c] leading-relaxed">
              <strong className="text-[#d4af37]">Nota:</strong> Los horarios se calculan 18 minutos antes del
              atardecer (encendido de velas) y 42 minutos después (Havdalá). Los tiempos pueden variar
              ligeramente según la ubicación exacta dentro de cada ciudad.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}