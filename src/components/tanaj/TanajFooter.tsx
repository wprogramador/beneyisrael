import Link from 'next/link'

export default function TanajFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center">
        <p className="text-base font-semibold text-stone-700">
          <span className="font-hebrew" dir="rtl" lang="he">תנ״ך</span>
          {' · '}Tanaj hebreo–español con comentarios · Centro de Estudios Hebraicos Bene Israel
          Venezuela
        </p>
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-500">
          <Link href="/" className="transition hover:text-stone-800">
            Inicio
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/biblioteca" className="transition hover:text-stone-800">
            Biblioteca
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/torah" className="transition hover:text-stone-800">
            Jumash
          </Link>
          <span className="text-stone-300">·</span>
          <Link href="/tanaj" className="transition hover:text-stone-800">
            Tanaj
          </Link>
        </nav>
      </div>
    </footer>
  )
}
