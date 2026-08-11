import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FechaHoyBar from '@/components/FechaHoyBar'

export function scrollToSection(id: string) {
  const go = () => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  if (typeof window !== 'undefined' && window.location.hash.replace('#', '') !== '/') {
    window.location.hash = '/'
    setTimeout(go, 400)
  } else {
    go()
  }
}

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <FechaHoyBar />
      <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-[#0c0a07]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-5 flex items-center justify-between gap-3">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); setOpen(false); scrollToSection('inicio') }} className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <Image
              src="/images/logo-bet-midrash.png"
              alt="Bet Midrash Bene Israel"
              width={44}
              height={44}
              className="h-9 w-9 sm:h-11 sm:w-11 shrink-0 rounded-full object-cover ring-1 ring-[#d4af37]/50 group-hover:ring-[#d4af37] transition"
            />
            <div className="leading-tight min-w-0">
              <span className="font-hebrew block text-[#d4af37] text-sm sm:text-lg truncate" dir="rtl" lang="he">בית מדרש בני ישראל</span>
              <span className="hidden sm:block text-[11px] tracking-[0.22em] uppercase text-foreground/70">Centro de Estudios Bene Israel</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7">{links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(l.id) }} className="text-sm tracking-wide text-foreground/75 hover:text-[#d4af37] transition-colors">{l.label}</a>
          ))}
            <Link href="/reflexiones" className="text-sm tracking-wide text-foreground/75 hover:text-[#d4af37] transition-colors">Reflexiones</Link>
            <Link href="/faq" className="text-sm tracking-wide text-foreground/75 hover:text-[#d4af37] transition-colors">Preguntas Frecuentes</Link>
            <div className="relative" ref={dropRef}>
              <button onClick={(e) => { e.stopPropagation(); setDropOpen(!dropOpen) }} className="flex items-center gap-1.5 text-sm tracking-wide text-foreground/75 hover:text-[#d4af37] transition-colors">Calendario y Fiestas<ChevronDown size={15} className={`transition-transform duration-300 ${dropOpen ? 'rotate-180' : ''}`} /></button>
              {dropOpen && (<div className="absolute top-full right-0 mt-3 w-56 rounded-xl border border-[#d4af37]/30 bg-[#141009]/95 backdrop-blur-md shadow-2xl shadow-black/60 py-2 z-50"><Link href="/moedim" onClick={() => setDropOpen(false)} className="block px-5 py-2.5 text-sm text-foreground/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">Moedim/Fiestas</Link><Link href="/calendario" onClick={() => setDropOpen(false)} className="block px-5 py-2.5 text-sm text-foreground/80 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors">Calendario Hebreo</Link></div>)}
            </div>
            <a href="https://wa.me/584124586537?text=Shalom%2C%20deseo%20informaci%C3%B3n%20sobre%20la%20Bet%20Midrash%20Bene%20Israel%20(Los%20Teques)." target="_blank" rel="noreferrer" className="text-sm font-semibold bg-[#d4af37] text-[#14100a] px-4 py-2 rounded-md hover:bg-[#e9c65a] transition-colors">Contáctanos</a>
          </nav>
          <button className="md:hidden shrink-0 text-foreground p-1.5 -mr-1" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>{open ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {open && (<nav className="md:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto bg-[#0c0a07]/98 backdrop-blur-md border-t border-[#d4af37]/20 px-5 py-5 flex flex-col gap-1">{links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); setOpen(false); scrollToSection(l.id) }} className="py-3 text-base text-foreground/85 hover:text-[#d4af37] transition-colors border-b border-[#d4af37]/10">{l.label}</a>
        ))}<Link href="/reflexiones" onClick={() => setOpen(false)} className="py-3 text-base text-foreground/85 hover:text-[#d4af37] transition-colors border-b border-[#d4af37]/10">Reflexiones</Link><Link href="/faq" onClick={() => setOpen(false)} className="py-3 text-base text-foreground/85 hover:text-[#d4af37] transition-colors border-b border-[#d4af37]/10">Preguntas Frecuentes</Link><div className="mt-2 rounded-xl border border-[#d4af37]/25 bg-[#141009] px-4 py-3 flex flex-col gap-1"><p className="text-xs tracking-[0.2em] uppercase text-[#d4af37]/80 mb-1">Calendario y Fiestas</p><Link href="/moedim" onClick={() => setOpen(false)} className="py-2.5 text-base text-foreground/85 hover:text-[#d4af37] transition-colors">Moedim/Fiestas</Link><Link href="/calendario" onClick={() => setOpen(false)} className="py-2.5 text-base text-foreground/85 hover:text-[#d4af37] transition-colors">Calendario Hebreo</Link></div><a href="https://wa.me/584124586537?text=Shalom%2C%20deseo%20informaci%C3%B3n%20sobre%20la%20Bet%20Midrash%20Bene%20Israel%20(Los%20Teques)." target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-4 text-center font-semibold bg-[#d4af37] text-[#14100a] px-4 py-3 rounded-md">Contáctanos</a></nav>)}
      </header>
    </>
  )
}