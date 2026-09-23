import Image from 'next/image'
import Link from 'next/link'

/** Marca del sitio dentro de la Jumash: logo Bene Israel + nombre de la sección. */
export default function TorahBrand({ subtitle }: { subtitle?: string }) {
  return (
    <Link href="/torah" className="group flex min-w-0 items-center gap-3">
      <Image
        src="/images/logo-bet-midrash.png"
        alt="Centro de Estudios Hebraicos Bene Israel"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-[#d4af37]/50 transition group-hover:ring-[#d4af37]"
      />
      <div className="leading-tight">
        <h1 className="torah-display text-2xl font-semibold tracking-tight text-stone-900">
          Jumash
        </h1>
        {subtitle && <p className="text-sm text-stone-500">{subtitle}</p>}
      </div>
    </Link>
  )
}
