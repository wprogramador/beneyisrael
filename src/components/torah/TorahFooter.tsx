import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function TorahFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center">
        <p className="torah-display text-base font-semibold text-stone-700">
          Torá con comentarios · Centro de Estudios Hebraicos Bene Israel Venezuela
        </p>
        <p className="mt-2 text-xs leading-relaxed text-stone-400">
          Texto en español y comentarios: fuente Jumash original · Texto hebreo: Miqra according to
          the Masorah, vía Sefaria (CC-BY-SA) · Rangos de parashá validados contra Sefaria
        </p>
        <Link
          href="/donar"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-[#14100a] transition-colors hover:bg-[#e9c65a]"
        >
          <Heart size={16} /> Donar / Solicitar
        </Link>
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-500">
          <Link href="/" className="transition hover:text-stone-800">
            Inicio
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/biblioteca" className="transition hover:text-stone-800">
            Biblioteca
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/tora-semanal" className="transition hover:text-stone-800">
            Torá Semanal
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/torah" className="transition hover:text-stone-800">
            Jumash
          </Link>
        </nav>
      </div>
    </footer>
  )
}
