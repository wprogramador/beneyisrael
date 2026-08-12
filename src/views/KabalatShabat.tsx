'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ChevronUp, BookOpen, Music } from 'lucide-react'
import Link from 'next/link'
import { seccionesKabalatShabat } from '@/data/kabalat-shabat'

export default function KabalatShabat() {
  const [seccionActiva, setSeccionActiva] = useState(seccionesKabalatShabat[0].id)
  const navRef = useRef<HTMLDivElement>(null)

  // IntersectionObserver: resalta la sección visible al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeccionActiva(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    seccionesKabalatShabat.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Auto-scroll horizontal de la barra móvil para mantener visible la sección activa
  useEffect(() => {
    if (navRef.current) {
      const activeBtn = navRef.current.querySelector(`[data-section="${seccionActiva}"]`)
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [seccionActiva])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground">
      {/* Header */}
      <header className="border-b border-[#d4af37]/20 bg-[#0c0a07]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 flex h-14 items-center justify-between">
          <Link href="/biblioteca" className="flex items-center gap-2 text-[#d4af37] hover:text-[#e9c65a] transition-colors text-sm">
            <ArrowLeft size={18} />
            Volver a Biblioteca
          </Link>
          <span className="font-hebrew text-[#d4af37] text-sm" dir="rtl" lang="he">בית מדרש בני ישראל</span>
        </div>
      </header>

      {/* ===== BARRA DE NAVEGACIÓN MÓVIL (sticky) ===== */}
      <div className="lg:hidden sticky top-14 z-30 border-b border-[#d4af37]/10 bg-[#0c0a07]/95 backdrop-blur-md">
        <div
          ref={navRef}
          className="mx-auto max-w-6xl px-4 flex gap-2 overflow-x-auto py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {seccionesKabalatShabat.map((sec) => (
            <button
              key={sec.id}
              data-section={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                seccionActiva === sec.id
                  ? 'bg-[#d4af37] text-[#14100a]'
                  : 'bg-[#d4af37]/10 text-[#a89b8c] border border-[#d4af37]/20'
              }`}
            >
              {sec.titulo}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 flex flex-col lg:flex-row gap-8">
        {/* ===== SIDEBAR NAVEGACIÓN (solo desktop) ===== */}
        <aside className="hidden lg:block lg:w-64 lg:shrink-0">
          <div className="lg:sticky lg:top-20">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="size-5 text-[#d4af37]" />
                <h1 className="text-lg font-bold text-[#f5f0e6]">Kabalat Shabat</h1>
              </div>
              <p className="text-xs text-[#a89b8c]">Recepción del Shabat — Hebreo · Fonética · Español</p>
            </div>

            <nav className="flex flex-col gap-1">
              {seccionesKabalatShabat.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    seccionActiva === sec.id
                      ? 'bg-[#d4af37]/15 text-[#d4af37] font-medium'
                      : 'text-[#a89b8c] hover:text-[#d4af37] hover:bg-[#d4af37]/5'
                  }`}
                >
                  {sec.titulo}
                </button>
              ))}
            </nav>

            <div className="mt-6 rounded-lg border border-[#d4af37]/15 bg-[#141009] p-4">
              <div className="flex items-center gap-2 text-[#d4af37] mb-2">
                <Music className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Próximamente</span>
              </div>
              <p className="text-xs text-[#a89b8c]">
                Audio con pronunciación guiada de cada oración.
              </p>
            </div>
          </div>
        </aside>

        {/* ===== CONTENIDO PRINCIPAL ===== */}
        <main className="flex-1 min-w-0">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f0e6] mb-2">
              Kabalat Shabat
            </h1>
            <p className="text-[#a89b8c] max-w-xl">
              Oraciones de la recepción del Shabat en hebreo original, transliteración fonética
              y traducción al español. Preparado por el Centro de Estudios Bene Israel.
            </p>
          </div>

          {seccionesKabalatShabat.map((seccion) => (
            <section key={seccion.id} id={seccion.id} className="mb-12 scroll-mt-24">
              <div className="mb-6 border-b border-[#d4af37]/20 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#f5f0e6]">{seccion.titulo}</h2>
                {seccion.subtitulo && (
                  <p className="text-sm text-[#a89b8c]">{seccion.subtitulo}</p>
                )}
              </div>

              <div className="rounded-xl border border-[#d4af37]/10 bg-[#141009] p-4 sm:p-6 space-y-1">
                {seccion.bloques.map((bloque, idx) => (
                  <div key={idx} className="border-b border-[#d4af37]/10 py-5 last:border-b-0">
                    {/* Nota */}
                    {bloque.nota && (
                      <p className="mb-3 text-xs text-[#d4af37]/70 italic bg-[#d4af37]/5 rounded-md px-3 py-2">
                        {bloque.nota}
                      </p>
                    )}
                    {/* Hebreo */}
                    <p className="text-right text-xl sm:text-2xl font-serif text-[#d4af37] leading-relaxed mb-2" dir="rtl" lang="he">
                      {bloque.hebreo}
                    </p>
                    {/* Fonética */}
                    <p className="text-sm sm:text-base text-[#a89b8c] italic mb-1.5">
                      {bloque.fonetica}
                    </p>
                    {/* Español */}
                    <p className="text-sm sm:text-base text-[#d5cfc5] leading-relaxed">
                      {bloque.espanol}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Footer */}
          <div className="mt-12 text-center border-t border-[#d4af37]/10 pt-8">
            <p className="text-xs text-[#8a7e72] mb-2">
              Kabalat Shabat preparado por el Centro de Estudios Hebraicos Bene Israel — Los Teques, Venezuela
            </p>
            <p className="text-xs text-[#8a7e72]/70">
              © {new Date().getFullYear()} — Uso libre para estudio y práctica. No para venta.
            </p>
          </div>
        </main>
      </div>

      {/* Botón volver arriba */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-40 flex size-10 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 hover:bg-[#d4af37]/20 transition-colors"
        title="Volver arriba"
      >
        <ChevronUp className="size-5" />
      </button>
    </div>
  )
}