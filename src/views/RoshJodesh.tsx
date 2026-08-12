'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, Moon } from 'lucide-react'
import { seccionesRoshJodesh } from '@/data/rosh-jodesh'
import ShareButton from '@/components/ShareButton'
import ScrollToTop from '@/components/ScrollToTop'

export default function RoshJodesh() {
  const [seccionActiva, setSeccionActiva] = useState('')

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

      <div className="mx-auto max-w-6xl px-4 sm:px-5 py-10 flex flex-col lg:flex-row gap-8">
        {/* ===== SIDEBAR NAVEGACIÓN ===== */}
        <aside className="lg:w-64 lg:shrink-0">
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
                      document.getElementById(seccion.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      <ScrollToTop />
    </div>
  )
}