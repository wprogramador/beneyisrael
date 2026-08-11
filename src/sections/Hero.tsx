'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { scrollToSection } from '@/sections/Navbar'

const TITULO_COMPLETO = 'Beit Midrash Bene Israel'
const CORTE_DORADO = 'Beit Midrash '.length // a partir de aquí va el span dorado

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setTyped(TITULO_COMPLETO)
      setDone(true)
      return
    }

    let i = 0
    let intervalId: number | undefined
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1
        setTyped(TITULO_COMPLETO.slice(0, i))
        if (i >= TITULO_COMPLETO.length) {
          if (intervalId !== undefined) window.clearInterval(intervalId)
          setDone(true)
        }
      }, 55)
    }, 400)

    return () => {
      window.clearTimeout(startId)
      if (intervalId !== undefined) window.clearInterval(intervalId)
    }
  }, [])

  const parteClara = typed.slice(0, Math.min(typed.length, CORTE_DORADO))
  const parteDorada = typed.length > CORTE_DORADO ? typed.slice(CORTE_DORADO) : ''

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-estudio.jpg"
          alt="Reunión de estudio en la Bet Midrash Bene Israel"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a07]/85 via-[#0c0a07]/70 to-[#0c0a07]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-5 pt-32 sm:pt-36 pb-20 sm:pb-16 text-center">
        <p className="hero-anim font-hebrew text-[#d4af37]/90 text-lg sm:text-xl md:text-2xl tracking-wide mb-3 sm:mb-4" dir="rtl" lang="he">
          בית מדרש בני ישראל
        </p>

        <h1
          className="hero-anim hero-anim-1 font-hebrew text-[1.75rem] leading-snug sm:text-4xl md:text-6xl lg:text-7xl font-bold sm:leading-tight min-h-[2.4em] sm:min-h-[1.2em]"
          aria-label={TITULO_COMPLETO}
        >
          <span aria-hidden="true">
            {parteClara}
            {parteDorada && <span className="gold-gradient-text">{parteDorada}</span>}
            <span
              className={`hero-type-cursor inline-block w-[0.08em] ml-0.5 align-baseline bg-[#d4af37] ${
                done ? 'hero-type-cursor-done' : ''
              }`}
              style={{ height: '0.85em' }}
            />
          </span>
        </h1>

        <p className="hero-anim hero-anim-1 mt-3 text-[11px] sm:text-sm md:text-base tracking-[0.12em] sm:tracking-[0.35em] uppercase text-foreground/70 px-1">
          Centro de Estudios Bene Israel · Los Teques · Venezuela
        </p>

        <div className="hero-anim hero-anim-2 mx-auto my-6 sm:my-8 flex items-center justify-center gap-3 sm:gap-4 text-[#d4af37]">
          <span className="h-px w-10 sm:w-16 md:w-24 bg-gradient-to-r from-transparent to-[#d4af37]/70" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" className="sm:w-[26px] sm:h-[26px]">
            <path d="M12 2 L21 7.5 L21 16.5 L12 22 L3 16.5 L3 7.5 Z" />
            <path d="M12 2 L21 16.5 L3 16.5 Z" fill="currentColor" stroke="none" opacity="0.25" />
            <path d="M12 22 L21 7.5 L3 7.5 Z" fill="currentColor" stroke="none" opacity="0.25" />
          </svg>
          <span className="h-px w-10 sm:w-16 md:w-24 bg-gradient-to-l from-transparent to-[#d4af37]/70" />
        </div>

        <p className="hero-anim hero-anim-3 mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-foreground/85 leading-relaxed">
          La comunidad de <em className="not-italic text-[#d4af37]">Bene Israel</em> que interpreta y vive la Torá a
          la luz del Mashiaj mediante una halajá evolutiva y participativa, sin los dogmas de la ortodoxia rabínica.
          Nuestra misión es ser un faro de luz en los Altos Mirandinos, fomentando el estudio genuino de las
          Escrituras para todos los que desean <em className="not-italic text-[#d4af37]">retornar a casa</em>.
        </p>

        <div className="hero-anim hero-anim-4 mt-8 sm:mt-10 flex flex-col items-stretch sm:items-center gap-3 sm:gap-5 w-full">
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full max-w-3xl mx-auto">
            <a
              href="#comunidad"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('comunidad')
              }}
              className="inline-flex items-center justify-center bg-[#d4af37] text-[#14100a] font-semibold px-5 sm:px-7 py-3.5 rounded-md hover:bg-[#e9c65a] transition-colors text-sm sm:text-base"
            >
              Conoce nuestra comunidad
            </a>
            <a
              href="https://beneyisrael.com/Teques/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-[#d4af37]/70 bg-[#0c0a07]/75 backdrop-blur-sm text-[#f3d98b] font-semibold px-5 sm:px-7 py-3.5 rounded-md hover:bg-[#0c0a07]/90 hover:border-[#d4af37] transition-colors text-sm sm:text-base"
            >
              Inscríbete en nuestros cursos
            </a>
            <Link
              href="/moedim"
              className="inline-flex items-center justify-center border border-[#d4af37]/70 bg-[#0c0a07]/75 backdrop-blur-sm text-[#f3d98b] font-semibold px-5 sm:px-7 py-3.5 rounded-md hover:bg-[#0c0a07]/90 hover:border-[#d4af37] transition-colors text-sm sm:text-base"
            >
              Las Moedim del Eterno
            </Link>
          </div>
          <a
            href="https://wa.me/584124586537?text=Shalom%2C%20deseo%20informaci%C3%B3n%20sobre%20la%20Bet%20Midrash%20Bene%20Israel%20(Los%20Teques)."
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-wide text-foreground/65 hover:text-[#d4af37] transition-colors underline-offset-4 hover:underline text-center py-1"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <a
        href="#comunidad"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('comunidad')
        }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4af37]/70 hover:text-[#d4af37] transition-colors animate-bounce"
        aria-label="Bajar a la siguiente sección"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  )
}
