'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Sunrise, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { seccionesBirkotHashajar } from '@/data/birkot-hashajar'

export default function BirkotHashajar() {
  const [seccionActiva, setSeccionActiva] = useState('mode-ani')
  const [mostrarVolverArriba, setMostrarVolverArriba] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setMostrarVolverArriba(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

    seccionesBirkotHashajar.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

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
    <div className="min-h-screen bg-[#0c0a09] text-[#e7e5e4]">
      {/* Header */}
      <header className="border-b border-[#292524] bg-[#0c0a09]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/biblioteca"
            className="flex items-center gap-2 text-[#a8a29e] hover:text-[#d4af37] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Biblioteca
          </Link>
          <div className="flex items-center gap-2">
            <Sunrise className="w-5 h-5 text-[#d4af37]" />
            <span className="font-semibold text-[#d4af37]">בית מדרש בני ישראל</span>
          </div>
        </div>
      </header>

      {/* Barra de navegación móvil */}
      <div
        ref={navRef}
        className="lg:hidden sticky top-16 z-40 bg-[#1c1917]/95 backdrop-blur border-b border-[#292524] overflow-x-auto"
      >
        <div className="flex gap-1 px-4 py-2 min-w-max">
          {seccionesBirkotHashajar.map((sec) => (
            <button
              key={sec.id}
              data-section={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                seccionActiva === sec.id
                  ? 'bg-[#d4af37] text-[#0c0a09] font-medium'
                  : 'bg-[#292524] text-[#a8a29e] hover:bg-[#44403c]'
              }`}
            >
              {sec.titulo.split('. ')[1] || sec.titulo}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Sidebar navegación desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              <p className="text-xs font-medium text-[#78716c] uppercase tracking-wider mb-3 px-3">
                Secciones
              </p>
              {seccionesBirkotHashajar.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    seccionActiva === sec.id
                      ? 'bg-[#d4af37]/10 text-[#d4af37] font-medium'
                      : 'text-[#a8a29e] hover:bg-[#292524] hover:text-[#e7e5e4]'
                  }`}
                >
                  {sec.titulo}
                </button>
              ))}
            </div>
          </aside>

          {/* Contenido principal */}
          <main className="space-y-16">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#fafaf9] mb-2">
                Birkot Hashajar
              </h1>
              <p className="text-[#a8a29e] text-lg">
                Bendiciones de la Mañana — Hebreo, fonética sefardí y español
              </p>
              <p className="text-[#78716c] text-sm mt-2">
                Sidur preparado por el Centro de Estudios Bene Israel
              </p>
            </div>

            {seccionesBirkotHashajar.map((seccion) => (
              <section key={seccion.id} id={seccion.id} className="scroll-mt-32">
                <div className="mb-6">
                  <h2 className="text-xl lg:text-2xl font-bold text-[#fafaf9]">
                    {seccion.titulo}
                  </h2>
                  {seccion.subtitulo && (
                    <p className="text-[#d4af37] text-sm mt-1">{seccion.subtitulo}</p>
                  )}
                </div>

                <div className="space-y-6">
                  {seccion.bloques.map((bloque, idx) => (
                    <div key={idx} className="space-y-3">
                      {bloque.nota && (
                        <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg px-4 py-3">
                          <p className="text-[#d4af37] text-sm">{bloque.nota}</p>
                        </div>
                      )}
                      {bloque.hebreo && (
                        <div className="bg-[#1c1917] border border-[#292524] rounded-lg p-4">
                          <p className="text-[#78716c] text-xs uppercase tracking-wider mb-2">
                            Hebreo
                          </p>
                          <p className="text-[#fafaf9] text-lg leading-relaxed font-serif" dir="rtl">
                            {bloque.hebreo}
                          </p>
                        </div>
                      )}
                      {bloque.fonetica && (
                        <div className="bg-[#1c1917] border border-[#292524] rounded-lg p-4">
                          <p className="text-[#78716c] text-xs uppercase tracking-wider mb-2">
                            Fonética (Sefardí)
                          </p>
                          <p className="text-[#e7e5e4] leading-relaxed italic">
                            {bloque.fonetica}
                          </p>
                        </div>
                      )}
                      {bloque.espanol && (
                        <div className="bg-[#1c1917] border border-[#292524] rounded-lg p-4">
                          <p className="text-[#78716c] text-xs uppercase tracking-wider mb-2">
                            Español
                          </p>
                          <p className="text-[#d6d3d1] leading-relaxed whitespace-pre-line">
                            {bloque.espanol}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Footer */}
            <footer className="border-t border-[#292524] pt-8 pb-4 text-center">
              <p className="text-[#78716c] text-sm">
                Birkot Hashajar preparado por el Centro de Estudios Hebraicos Bene Israel — Los Teques, Venezuela
              </p>
              <p className="text-[#57534e] text-xs mt-2">
                © {new Date().getFullYear()} — Uso libre para estudio y práctica. No para venta.
              </p>
            </footer>
          </main>
        </div>
      </div>

      {/* Botón volver arriba */}
      {mostrarVolverArriba && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-[#d4af37] text-[#0c0a09] p-3 rounded-full shadow-lg hover:bg-[#c5a030] transition-colors"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
