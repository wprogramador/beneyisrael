'use client'

import Link from 'next/link'
import { ChevronRight, LayoutGrid, MessageSquareQuote, Rows3 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BOOK_META, BOOK_ORDER, BOOK_SLUG } from '@/lib/torah'
import type { BookSummary, Parasha } from '@/lib/torah'
import TorahBrand, { TorahHomeLink } from '@/components/torah/TorahBrand'
import TorahFooter from '@/components/torah/TorahFooter'

export interface TorahLibraryProps {
  books: BookSummary[]
  parashot: Parasha[]
}

export default function TorahLibrary({ books, parashot }: TorahLibraryProps) {
  // vista inicial opcional vía ?view=parashot (solo en el cliente; el HTML
  // estático siempre se genera con la vista de libros para buen SEO)
  const [view, setView] = useState<'books' | 'parashot'>('books')
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('view') === 'parashot') {
      setView('parashot')
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f6] text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-5">
          <TorahBrand subtitle="La Torá en español y hebreo, con comentarios por versículo" />
          <div className="ml-auto">
            <TorahHomeLink />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        {/* presentación */}
        <div className="mb-10 text-center">
          <p
            className="font-hebrew text-3xl font-bold text-stone-800 sm:text-4xl"
            dir="rtl"
            lang="he"
          >
            חמישה חומשי תורה
          </p>
          <p className="mt-3 text-sm tracking-wide text-stone-500">
            Torá · Hebreo – Español con comentarios
          </p>
        </div>

        {/* conmutador de vista */}
        <div className="mb-6 flex w-fit items-center gap-1 rounded-full border border-stone-200 bg-white p-1 shadow-sm">
          <ViewTab
            active={view === 'books'}
            onClick={() => setView('books')}
            icon={<LayoutGrid className="h-3.5 w-3.5" />}
            label="Por libro"
          />
          <ViewTab
            active={view === 'parashot'}
            onClick={() => setView('parashot')}
            icon={<Rows3 className="h-3.5 w-3.5" />}
            label="Por parashá"
          />
        </div>

        {view === 'books' ? (
          <>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-stone-400">
              Los cinco libros
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {books.map((b) => {
                const meta = BOOK_META[b.id]
                return (
                  <Link
                    key={b.id}
                    href={`/torah/${b.slug}/1`}
                    className="group rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: meta.tint }}
                      />
                      <ChevronRight className="h-4 w-4 text-stone-300 transition group-hover:translate-x-0.5 group-hover:text-stone-500" />
                    </div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="torah-display text-xl font-semibold">{meta.name}</h3>
                      <span
                        className="font-hebrew shrink-0 text-lg leading-none text-stone-400"
                        dir="rtl"
                        lang="he"
                      >
                        {meta.hebreo}
                      </span>
                    </div>
                    <p className="text-sm text-stone-500">{meta.spanish}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
                      <span>{b.chapters} capítulos</span>
                      <span>{b.verses} versículos</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs text-stone-500">
                      <MessageSquareQuote className="h-3 w-3" />
                      {b.withComment} comentarios
                    </div>
                  </Link>
                )
              })}
            </div>
          </>
        ) : (
          <ParashotView parashot={parashot} />
        )}

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-stone-400">
          El texto se presenta en hebreo y español, versículo a versículo, con los comentarios
          tradicionales de la fuente. Haz click en cualquier versículo para leer su comentario.
        </p>
      </main>

      <TorahFooter />
    </div>
  )
}

function ParashotView({ parashot }: { parashot: Parasha[] }) {
  const byBook = BOOK_ORDER.map((b) => ({
    id: b,
    items: parashot.filter((p) => p.libro === b),
  })).filter((g) => g.items.length)
  return (
    <>
      <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-stone-400">
        Las 54 parashiot
      </h2>
      <p className="mb-6 text-xs text-stone-400">
        Porciones semanales del ciclo anual · click para abrir en su versículo inicial
      </p>
      <div className="space-y-8">
        {byBook.map((g) => {
          const meta = BOOK_META[g.id]
          const slug = BOOK_SLUG[g.id]
          return (
            <section key={g.id}>
              <div className="mb-3 flex items-center gap-3">
                <h3
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: meta.tint }}
                >
                  {meta.name} · {meta.spanish}
                </h3>
                <div className="h-px flex-1 bg-stone-200" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p) => (
                  <Link
                    key={p.orden}
                    href={`/torah/${slug}/${p.inicio.capitulo}?v=${p.inicio.versiculo}`}
                    className="group flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: meta.tint }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="truncate torah-display text-[15px] font-semibold">{p.nombre}</p>
                        <span
                          className="font-hebrew shrink-0 text-sm leading-none text-stone-400"
                          dir="rtl"
                          lang="he"
                        >
                          {p.hebreo}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-stone-500">
                        {meta.name} {p.inicio.capitulo}:{p.inicio.versiculo} –{' '}
                        {p.fin.capitulo === p.inicio.capitulo
                          ? p.fin.versiculo
                          : `${p.fin.capitulo}:${p.fin.versiculo}`}
                      </p>
                    </div>
                    <span className="shrink-0 text-[11px] tabular-nums text-stone-400">
                      {p.n_versiculos} vers.
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}

function ViewTab({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition ${
        active ? 'bg-stone-900 font-semibold text-white shadow' : 'text-stone-500 hover:text-stone-800'
      }`}
    >
      {icon}
      {label}
    </button>
  )
}
