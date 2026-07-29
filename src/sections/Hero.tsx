import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router'
import { scrollToSection } from '@/sections/Navbar'
export default function Hero() {


  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="images/hero-estudio.jpg"
          alt="Reunión de estudio en la Bet Midrash Bene Israel"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a07]/80 via-[#0c0a07]/65 to-[#0c0a07]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-28 pb-16 text-center">
        <p className="hero-anim font-hebrew text-[#d4af37]/90 text-xl md:text-2xl tracking-wide mb-4" dir="rtl" lang="he">
          בית מדרש בני ישראל
        </p>

        <h1 className="hero-anim hero-anim-1 font-hebrew text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Beit Midrash <span className="gold-gradient-text">Bene Israel</span>
        </h1>

        <p className="hero-anim hero-anim-1 mt-3 text-sm md:text-base tracking-[0.35em] uppercase text-foreground/70">
          Centro de Estudios Bene Israel · Los Teques · Venezuela
        </p>

        <div className="hero-anim hero-anim-2 mx-auto my-8 flex items-center justify-center gap-4 text-[#d4af37]">
          <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#d4af37]/70" />
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M12 2 L21 7.5 L21 16.5 L12 22 L3 16.5 L3 7.5 Z" />
            <path d="M12 2 L21 16.5 L3 16.5 Z" fill="currentColor" stroke="none" opacity="0.25" />
            <path d="M12 22 L21 7.5 L3 7.5 Z" fill="currentColor" stroke="none" opacity="0.25" />
          </svg>
          <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#d4af37]/70" />
        </div>

        <p className="hero-anim hero-anim-3 mx-auto max-w-2xl text-base md:text-lg text-foreground/85 leading-relaxed">
          La comunidad de <em className="not-italic text-[#d4af37]">Bene Israel</em> que interpreta y vive la Torá a
          la luz del Mashiaj mediante una halajá evolutiva y participativa, sin los dogmas de la ortodoxia rabínica.
          Nuestra misión es ser un faro de luz en los Altos Mirandinos, fomentando el estudio genuino de las
          Escrituras para todos los que desean <em className="not-italic text-[#d4af37]">retornar a casa</em>.
        </p>

        <div className="hero-anim hero-anim-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#comunidad"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('comunidad')
            }}
            className="w-full sm:w-auto bg-[#d4af37] text-[#14100a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#e9c65a] transition-colors shadow-lg shadow-[#d4af37]/20"
          >
            Conoce nuestra comunidad
          </a>
          <a
            href="https://beneyisrael.com/Teques/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto border border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4af37]/30 transition-colors"
          >
            Inscríbete en nuestros cursos
          </a>
          <Link
            to="/moedim"
            className="w-full sm:w-auto border border-[#d4af37]/60 text-[#d4af37] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4af37]/10 transition-colors"
          >
            Las Moedim del Eterno
          </Link>
          <a
            href="https://wa.me/584124586537?text=Shalom%2C%20deseo%20informaci%C3%B3n%20sobre%20la%20Bet%20Midrash%20Bene%20Israel%20(Los%20Teques)."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto border border-[#d4af37]/60 text-[#d4af37] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4af37]/10 transition-colors"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4af37]/70 hover:text-[#d4af37] transition-colors animate-bounce"
        aria-label="Bajar a la siguiente sección"
      >
        <ChevronDown size={30} />
      </a>
    </section>
  )
}
