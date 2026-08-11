'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronDown, BookOpen, Clock, ScrollText, Star } from 'lucide-react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import ShareButton from '@/components/ShareButton'
import { useReveal } from '@/hooks/useReveal'
import { useParasha } from '@/lib/hebcal'
import { LIBROS, type Reflexion } from '@/lib/reflexiones'
import { normalizarParasha, resolveParashaIds } from '@/lib/parashaIds'

function findReflexion(nombreParasha: string): Reflexion | undefined {
  const todas = LIBROS.flatMap((l) => l.reflexiones)
  const ids = resolveParashaIds(nombreParasha)

  for (const id of ids) {
    const porId = todas.find((r) => r.id === id)
    if (porId) return porId
  }

  // Respaldo: comparar contra el nombre mostrado (p. ej. "Reé")
  const claves = new Set(ids)
  for (const p of normalizarParasha(nombreParasha)) claves.add(p)
  return todas.find((r) => {
    const nombreNorm = normalizarParasha(r.nombre)
    return nombreNorm.some((n) => claves.has(n) || claves.has(r.id))
  })
}

/** ~200 palabras/min en español; mínimo 1 minuto. */
function minutosLectura(r: Reflexion): number {
  const texto = [r.titulo, r.citaEspanol, r.citaHebreo, ...r.cuerpo].join(' ')
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(palabras / 200))
}

function TarjetaReflexion({ r, destacada = false }: { r: Reflexion; destacada?: boolean }) {
  const mins = minutosLectura(r)

  const shareData = {
    title: `Reflexión de Parashat ${r.nombre} — ${r.titulo}`,
    text: `${r.citaEspanol}\n\n${r.cuerpo[0]?.substring(0, 150) || ''}...`,
    url: `https://teques.beneyisrael.com/reflexiones#${r.id}`,
  }

  return (
    <article
      className={`relative overflow-hidden rounded-3xl border p-8 md:p-12 ${
        destacada
          ? 'border-[#d4af37]/50 bg-gradient-to-br from-[#1a150d] via-[#141009] to-[#0c0a07]'
          : 'border-[#d4af37]/20 bg-[#141009]'
      }`}
    >
      {destacada && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 10%, #d4af37 0, transparent 45%), radial-gradient(circle at 10% 95%, #d4af37 0, transparent 45%)',
          }}
        />
      )}
      <div className="relative">
        <div className="flex items-start justify-between gap-3 mb-3">
          {destacada && (
            <p className="inline-flex items-center gap-1.5 rounded-full bg-[#d4af37] px-4 py-1 text-xs font-bold text-[#14100a]">
              <Star size={13} /> Reflexión de esta semana
            </p>
          )}
          <div className={destacada ? '' : 'ml-auto'}>
            <ShareButton data={shareData} small />
          </div>
        </div>
        <p className={`${destacada ? 'mt-5' : 'mt-0'} font-hebrew text-[#d4af37] text-lg`} dir="rtl" lang="he">
          {r.hebreo}
        </p>
        <h2 className="mt-1 font-hebrew text-3xl md:text-4xl font-bold">
          Parashat <span className="gold-gradient-text">{r.nombre}</span>
        </h2>
        <p className="mt-1 text-sm text-foreground/60">{r.lectura}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-[#d4af37]/90">
          <Clock size={13} aria-hidden="true" />
          {mins} {mins === 1 ? 'minuto' : 'minutos'} de lectura
        </p>

        <h3 className="mt-8 font-hebrew text-xl md:text-2xl font-bold text-[#d4af37]">
          {r.titulo}
        </h3>

        <blockquote className="mt-5 rounded-2xl border border-[#d4af37]/25 bg-[#0c0a07]/60 p-5 md:p-6">
          <p className="font-hebrew text-lg md:text-xl text-foreground/90 leading-relaxed" dir="rtl" lang="he">
            {r.citaHebreo}
          </p>
          <p className="mt-2 text-foreground/75 italic">"{r.citaEspanol}"</p>
          <cite className="mt-1.5 block text-xs tracking-[0.2em] uppercase text-[#d4af37]/80 not-italic">
            {r.fuenteCita}
          </cite>
        </blockquote>

        <div className="mt-6 space-y-5">
          {r.cuerpo.map((p, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed md:text-lg">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#d4af37]/20 pt-5">
          <p className="font-hebrew font-semibold text-[#d4af37]">— Moré Imanuel ben Efraim</p>
          <p className="text-xs text-foreground/50">Fuente: {r.fuente}</p>
        </div>
      </div>
    </article>
  )
}

export default function Reflexiones() {
  const ref = useReveal<HTMLDivElement>()
  const hoy = useMemo(() => new Date(), [])
  const parasha = useParasha(hoy)
  const [abierta, setAbierta] = useState<string | null>(null)
  const [libroAbierto, setLibroAbierto] = useState<string | null>(null)

  const reflexionSemana = useMemo(() => {
    if (!parasha.nombre) return undefined
    return findReflexion(parasha.nombre)
  }, [parasha.nombre])

  const toggleLibro = (nombre: string) =>
    setLibroAbierto((prev) => (prev === nombre ? null : nombre))
  const toggleReflexion = (id: string) =>
    setAbierta((prev) => (prev === id ? null : id))

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground" ref={ref}>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-10 md:pt-48 md:pb-14 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #d4af37 0, transparent 45%), radial-gradient(circle at 85% 80%, #d4af37 0, transparent 45%)',
            }}
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <p className="hero-anim font-hebrew text-[#d4af37] text-xl md:text-2xl tracking-wide" dir="rtl" lang="he">
              הערות על פרשת השבוע
            </p>
            <h1 className="hero-anim hero-anim-1 font-hebrew text-4xl md:text-6xl font-bold mt-3 leading-tight">
              Reflexiones de la <span className="gold-gradient-text">Parashá</span>
            </h1>
            <p className="hero-anim hero-anim-2 mt-4 text-foreground/60 max-w-2xl mx-auto">
              Comentarios semanales sobre la porción de la Torá, con textos en hebreo y fuentes de la tradición — por Moré Imanuel ben Efraim
            </p>
          </div>
        </section>

        {/* Reflexión de la semana */}
        <section className="mx-auto max-w-4xl px-5 pb-16">
          {reflexionSemana ? (
            <TarjetaReflexion r={reflexionSemana} destacada />
          ) : (
            <div className="rounded-3xl border border-[#d4af37]/30 bg-[#141009] p-10 text-center text-foreground/60">
              {parasha.nombre
                ? `Aún no hay una reflexión publicada para Parashat ${parasha.nombre}. Explora el archivo abajo.`
                : 'Cargando la parashá de esta semana…'}
            </div>
          )}
        </section>

        {/* Archivo anual */}
        <section className="mx-auto max-w-4xl px-5 pb-24 md:pb-32">
          <div className="reveal text-center mb-10">
            <p className="flex items-center justify-center gap-2 text-sm tracking-[0.25em] uppercase text-[#d4af37]">
              <ScrollText size={16} /> Archivo del año
            </p>
            <h2 className="mt-3 font-hebrew text-2xl md:text-3xl font-bold">
              Las 54 parashiot <span className="gold-gradient-text">del ciclo anual</span>
            </h2>
            <p className="mt-2 text-sm text-foreground/60">
              Consulta cualquier reflexión del año, organizadas por libro
            </p>
          </div>

          <div className="reveal space-y-6">
            {LIBROS.map((libro) => {
              const expandido = libroAbierto === libro.nombre
              return (
                <div key={libro.nombre} className="rounded-2xl border border-[#d4af37]/25 bg-[#141009] overflow-hidden">
                  <button
                    onClick={() => toggleLibro(libro.nombre)}
                    className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-[#d4af37]/5 transition-colors"
                  >
                    <span className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <BookOpen size={18} className="text-[#d4af37] shrink-0" />
                      <span className="font-hebrew font-bold text-base sm:text-lg truncate">{libro.nombre}</span>
                      <span className="hidden sm:inline font-hebrew text-[#d4af37]/70" dir="rtl" lang="he">{libro.hebreo}</span>
                    </span>
                    <span className="flex items-center gap-2 text-xs sm:text-sm text-foreground/50 shrink-0">
                      {libro.reflexiones.length}
                      <span className="hidden sm:inline">parashiot</span>
                      <ChevronDown size={17} className={`text-[#d4af37] transition-transform ${expandido ? 'rotate-180' : ''}`} />
                    </span>
                  </button>

                  <div className={`grid transition-all duration-500 ${expandido ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-[#d4af37]/15 divide-y divide-[#d4af37]/10">
                        {libro.reflexiones.map((r) => {
                          const esSemana = reflexionSemana?.id === r.id
                          const abiertaR = abierta === r.id
                          return (
                            <div key={r.id}>
                              <button
                                onClick={() => toggleReflexion(r.id)}
                                className="w-full flex items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 py-3.5 sm:py-4 text-left hover:bg-[#d4af37]/5 transition-colors"
                              >
                                <span className="flex items-center gap-2 sm:gap-3 flex-wrap min-w-0">
                                  <span className="font-hebrew font-semibold text-sm sm:text-base">Parashat {r.nombre}</span>
                                  <span className="font-hebrew text-sm text-[#d4af37]/70" dir="rtl" lang="he">{r.hebreo}</span>
                                  {esSemana && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 px-2.5 py-0.5 text-[10px] font-semibold text-[#d4af37]">
                                      <Star size={10} /> Esta semana
                                    </span>
                                  )}
                                </span>
                                <span className="text-[11px] sm:text-xs text-[#d4af37]/80 shrink-0">
                                  {abiertaR ? 'Cerrar' : 'Leer'}
                                </span>
                              </button>
                              <div className={`grid transition-all duration-500 ${abiertaR ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                  <div className="px-5 pb-6 pt-1">
                                    <TarjetaReflexion r={r} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#d4af37]/80 hover:text-[#d4af37] transition-colors">
              <ChevronLeft size={16} /> Volver al inicio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}