import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

/** Marca del sitio dentro del Tanaj: logo Bene Israel + nombre de la sección. */
export default function TanajBrand({ subtitle }: { subtitle?: string }) {
  return (
    <Link href="/tanaj" className="group flex min-w-0 items-center gap-3">
      <Image
        src="/images/logo-bet-midrash.png"
        alt="Centro de Estudios Hebraicos Bene Israel"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-[#d4af37]/50 transition group-hover:ring-[#d4af37]"
      />
      <div className="leading-tight">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
          <span className="font-hebrew" dir="rtl" lang="he">תנ״ך</span>
          <span className="ml-2 text-xl">Tanaj (Biblia)</span>
        </h1>
        {subtitle && <p className="text-sm text-stone-500">{subtitle}</p>}
      </div>
    </Link>
  )
}

/** Enlace para regresar al sitio principal desde cualquier página del Tanaj. */
export function TanajHomeLink() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-500 shadow-sm transition hover:text-stone-800 hover:shadow"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">beneyisrael.com</span>
      <span className="sm:hidden">Inicio</span>
    </Link>
  )
}
