import { scrollToSection } from '@/sections/Navbar'
import { Link } from 'react-router'
import { Instagram } from 'lucide-react'

const redes = [
  {
    nombre: 'Instagram',
    usuario: '@beneisrael_',
    url: 'https://www.instagram.com/beneisrael_',
    icono: <Instagram size={20} strokeWidth={1.8} />,
  },
  {
    nombre: 'TikTok',
    usuario: '@beneisrael',
    url: 'https://www.tiktok.com/@beneisrael',
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M9 12a4 4 0 1 0 4 4V4c.6 2.5 2.4 4.5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#d4af37]/20 bg-[#0c0a07] py-14">
      <div className="mx-auto max-w-6xl px-5 flex flex-col items-center text-center gap-6">
        <div className="rounded-xl bg-[#f3ead6] px-6 py-4 shadow-lg shadow-black/40 ring-1 ring-[#d4af37]/30">
          <img
            src="images/logo-horizontal.png"
            alt="Centro de Estudios Hebraicos — Bene Israel"
            className="w-full max-w-[15rem] sm:w-60 md:w-72"
          />
        </div>
        <p className="font-hebrew text-[#d4af37] text-xl" dir="rtl" lang="he">
          בית מדרש בני ישראל — Los Teques
        </p>
        <p className="max-w-xl text-sm text-foreground/60 leading-relaxed">
          Beit Midrash Bene Israel · Centro de Estudios Bene Israel · Un faro de luz en los Altos Mirandinos,
          promoviendo el estudio de las Escrituras y el retorno de las almas a la Torá, bajo la guía del Eterno.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm">
          {[
            { id: 'inicio', label: 'Inicio' },
            { id: 'comunidad', label: 'Nuestra Comunidad' },
            { id: 'pilares', label: 'Estudia con Nosotros' },
            { id: 'contacto', label: 'Contacto' },
          ].map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(l.id)
              }}
              className="text-foreground/70 hover:text-[#d4af37] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link to="/moedim" className="text-foreground/70 hover:text-[#d4af37] transition-colors">
            Moedim
          </Link>
        </nav>

        {/* Redes sociales */}
        <div className="flex items-center gap-4">
          {redes.map((r) => (
            <a
              key={r.nombre}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${r.nombre} ${r.usuario}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#14100a] transition-colors duration-300"
            >
              {r.icono}
            </a>
          ))}
        </div>
        <p className="text-xs text-foreground/50 -mt-3">
          Síguenos: Instagram <span className="text-[#d4af37]">@beneisrael_</span> · TikTok{' '}
          <span className="text-[#d4af37]">@beneisrael</span>
        </p>

        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} Beit Midrash Bene Israel — Los Teques, Venezuela
        </p>
      </div>
    </footer>
  )
}
