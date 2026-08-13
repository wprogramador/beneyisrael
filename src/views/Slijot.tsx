'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ChevronUp, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { seccionesSlijot } from '@/data/slijot'

export default function Slijot() {
  const [seccionActiva, setSeccionActiva] = useState('')
  const [mostrarVolverArriba, setMostrarVolverArriba] = useState(false)
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

    seccionesSlijot.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Auto-scroll horizontal de la barra móvil
  useEffect(() => {
    if (navRef.current) {
      const activeBtn = navRef.current.querySelector(`[data-section="${seccionActiva}"]`)
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }
    }
  }, [seccionActiva])

  // Mostrar botón volver arriba
  useEffect(() => {
    const handleScroll = () => {
      setMostrarVolverArriba(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#e7e5e4]">
      {/* ===== HEADER ===== */}
      <header className="border-b border-[#292524] bg-[#0a0908]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#a8a29e] hover:text-[#d4af37] hover:bg-[#1c1917]"
              onClick={() => window.location.href = '/biblioteca'}
            >
              <ArrowLeft className="size-4 mr-2" />
              Volver a Biblioteca
            </Button>
            <div className="flex items-center gap-2">
              <Heart className="size-5 text-[#d4af37]" />
              <span className="text-sm font-medium text-[#d4af37]">בית מדרש בני ישראל</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== BARRA DE NAVEGACIÓN MÓVIL (sticky) ===== */}
      <div className="lg:hidden sticky top-[65px] z-40 bg-[#0a0908]/95 backdrop-blur-sm border-b border-[#292524]">
        <div
          ref={navRef}
          className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-2"
        >
          {seccionesSlijot.map((sec) => (
            <button
              key={sec.id}
              data-section={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                seccionActiva === sec.id
                  ? 'bg-[#d4af37] text-[#0a0908]'
                  : 'bg-[#1c1917] text-[#a8a29e] hover:bg-[#292524] hover:text-[#e7e5e4]'
              }`}
            >
              {sec.titulo}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* ===== SIDEBAR NAVEGACIÓN (solo desktop) ===== */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-lg font-bold text-[#d4af37] mb-4">Secciones</h2>
              <nav className="space-y-1">
                {seccionesSlijot.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      seccionActiva === sec.id
                        ? 'bg-[#d4af37]/10 text-[#d4af37] font-medium'
                        : 'text-[#a8a29e] hover:bg-[#1c1917] hover:text-[#e7e5e4]'
                    }`}
                  >
                    {sec.titulo}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ===== CONTENIDO PRINCIPAL ===== */}
          <main className="flex-1 min-w-0">
            {/* Título principal */}
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-3">
                Seder de Slijot
              </h1>
              <p className="text-[#a8a29e] text-lg">
                Guía completa para el retorno del alma — Tradición Sefardí
              </p>
              <p className="text-[#78716c] text-sm mt-2">
                Elul 5786 · Moré Imanuel Ben Efraim · Centro de Estudios Hebraicos Bene Israel
              </p>
            </div>

            {/* Secciones */}
            <div className="space-y-16">
              {seccionesSlijot.map((seccion) => (
                <section
                  key={seccion.id}
                  id={seccion.id}
                  className="scroll-mt-24"
                >
                  <div className="border-b border-[#d4af37]/20 pb-3 mb-6">
                    <h2 className="text-2xl font-bold text-[#e7e5e4]">
                      {seccion.titulo}
                    </h2>
                    {seccion.subtitulo && (
                      <p className="text-[#a8a29e] mt-1">{seccion.subtitulo}</p>
                    )}
                  </div>

                  <div className="space-y-8">
                    {seccion.bloques.map((bloque, idx) => (
                      <div
                        key={idx}
                        className="bg-[#1c1917] border border-[#292524] rounded-xl p-6 hover:border-[#d4af37]/20 transition-colors"
                      >
                        {/* Hebreo */}
                        <p
                          className="text-[#e7e5e4] text-xl leading-relaxed font-serif mb-3"
                          dir="rtl"
                        >
                          {bloque.hebreo}
                        </p>

                        {/* Fonética */}
                        <p className="text-[#d4af37]/70 text-sm italic mb-3">
                          {bloque.fonetica}
                        </p>

                        {/* Español */}
                        <p className="text-[#e7e5e4]/90 text-base leading-relaxed mb-4">
                          {bloque.espanol}
                        </p>

                        {/* Nota */}
                        {bloque.nota && (
                          <div className="border-t border-[#292524] pt-4 mt-4">
                            <p className="text-[#a8a29e] text-sm leading-relaxed italic">
                              {bloque.nota}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer del contenido */}
            <footer className="mt-20 pt-8 border-t border-[#292524] text-center">
              <p className="text-[#a8a29e] text-sm">
                Seder de Slijot preparado por el Centro de Estudios Hebraicos Bene Israel — Los Teques, Venezuela
              </p>
              <p className="text-[#78716c] text-xs mt-2">
                © {new Date().getFullYear()} — Uso libre para estudio y práctica. No para venta.
              </p>
            </footer>
          </main>
        </div>
      </div>

      {/* ===== BOTÓN VOLVER ARRIBA ===== */}
      {mostrarVolverArriba && (
        <button
          onClick={volverArriba}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#d4af37] text-[#0a0908] shadow-lg hover:bg-[#b8941f] transition-all duration-200"
          aria-label="Volver arriba"
        >
          <ChevronUp className="size-5" />
        </button>
      )}
    </div>
  )
}
