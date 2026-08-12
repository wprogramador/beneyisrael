'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, Moon, ChevronUp } from 'lucide-react'
import { seccionesRoshJodesh } from '@/data/rosh-jodesh'
import ShareButton from '@/components/ShareButton'

export default function RoshJodesh() {
  const [seccionActiva, setSeccionActiva] = useState('')
  const navRef = useRef<HTMLDivElement>(null)

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

    seccionesRoshJodesh.forEach((s) => {
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
          <Link
            href="/biblioteca"
            className="flex items-center gap-2 text-[#d4af37] hover:text-[#e9c65a] transition-colors text-sm"
          >
            <ArrowLeft size={18} />
            Volver a Biblioteca
          </Link>
          <span className="font-hebrew text-[#d4af37] text-sm" dir="rtl" lang="he">
            בית מדרש בני ישראל
          </span>
        </div>
      </header>

      {/* ===== BARRA DE NAVEGACIÓN MÓVIL (sticky) ===== */}
      <div className="lg:hidden sticky top-14 z-30 border-b border-[#d4af37]/10 bg-[#0c0a07]/95 backdrop-blur-md">
        <div
          ref={navRef}
          className="mx-auto max-w-6xl px-4 flex gap-2 overflow-x-auto py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {seccionesRoshJodesh.map((sec) => (
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

      <div className="mx-auto max-w-6xl px-4 sm:px-5 py-10 flex flex-col lg:flex-row gap-8">
        {/* ===== SIDEBAR NAVEGACIÓN ===== */}
        <aside className="hidden lg:block lg:w-64 lg:shrink-0">
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-xl border border-[#d4af37]/15 bg-[#141009] p-4 shadow-lg shadow-black/40">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
                Secciones
              </h2>
              <nav className="space-y-1">
                {seccionesRoshJodesh.map((seccion) => (
                  <a
                    key={seccion.id}
                    href={`#${seccion.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(seccion.id)
                    }}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                      seccionActiva === seccion.id
                        ? 'bg-[#d4af37]/15 text-[#d4af37] font-medium'
                        : 'text-[#a89b8c] hover:bg-[#d4af37]/10 hover:text-[#f5f0e6]'
                    }`}
                  >
                    <ChevronRight
                      size={14}
                      className={`shrink-0 transition-transform ${
                        seccionActiva === seccion.id ? 'rotate-90' : ''
                      }`}
                    />
                    <span className="truncate">{seccion.titulo}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-xl border border-[#d4af37]/15 bg-[#141009] p-4 shadow-lg shadow-black/40">
              <ShareButton
                data={{
                  title: 'Seder Rosh Jodesh · Bene Israel',
                  text: 'Seder para la noche de Rosh Jodesh en hebreo, fonética y español.',
                  url: typeof window !== 'undefined' ? window.location.href : 'https://beneyisrael-gc5o.vercel.app/siddur/rosh-jodesh',
                }}
              />
            </div>
          </div>
        </aside>

        {/* ===== CONTENIDO PRINCIPAL ===== */}
        <main className="min-w-0 flex-1">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] ring-1 ring-[#d4af37]/30">
              <Moon className="size-8" />
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#f5f0e6] sm:text-4xl">
              Seder Rosh Jodesh
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#a89b8c]">
              Noche del inicio del mes nuevo. Oraciones, bendiciones y meditaciones
              para la recepción de Rosh Jodesh. Hebreo, fonética y español.
            </p>
          </div>

          <div className="space-y-12">
            {seccionesRoshJodesh.map((seccion) => (
              <section
                key={seccion.id}
                id={seccion.id}
                className="scroll-mt-28 rounded-xl border border-[#d4af37]/15 bg-[#141009] p-6 sm:p-8 shadow-lg shadow-black/40"
              >
                <h2 className="mb-1 text-xl font-semibold text-[#f5f0e6]">
                  {seccion.titulo}
                </h2>
                {seccion.subtitulo && (
                  <p className="mb-6 text-sm text-[#a89b8c]">
                    {seccion.subtitulo}
                  </p>
                )}

                <div className="space-y-6">
                  {seccion.bloques.map((bloque, idx) => (
                    <div
                      key={idx}
                      className="space-y-3 border-l-2 border-[#d4af37]/20 pl-4"
                    >
                      {/* Nota */}
                      {bloque.nota && (
                        <div className="rounded-md bg-[#d4af37]/10 px-3 py-2 text-xs text-[#d4af37] font-medium border border-[#d4af37]/20">
                          {bloque.nota}
                        </div>
                      )}
                      {/* Hebreo */}
                      {bloque.hebreo && (
                        <div className="font-hebrew text-lg leading-relaxed text-[#f5f0e6]" dir="rtl" lang="he">
                          {bloque.hebreo}
                        </div>
                      )}
                      {/* Fonética */}
                      {bloque.fonetica && (
                        <div className="text-sm italic leading-relaxed text-[#a89b8c]">
                          {bloque.fonetica}
                        </div>
                      )}
                      {/* Español */}
                      {bloque.espanol && (
                        <div className="text-sm leading-relaxed text-[#d4c4a8]">
                          {bloque.espanol}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center border-t border-[#d4af37]/10 pt-8">
            <p className="text-xs text-[#8a7e72]">
              Seder Rosh Jodesh preparado por el Centro de Estudios Hebraicos Bene Israel — Los Teques, Venezuela
            </p>
            <p className="mt-2 text-xs text-[#8a7e72]/70">
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