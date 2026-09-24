'use client'

import Link from 'next/link'
import { ChevronRight, MessageSquareQuote } from 'lucide-react'
import type { TanajBookSummary } from '@/lib/tanaj'
import TanajBrand, { TanajHomeLink } from '@/components/tanaj/TanajBrand'
import TanajFooter from '@/components/tanaj/TanajFooter'
import ScriptureSearch from '@/components/ScriptureSearch'

const SECTIONS: { id: 'Torá' | 'Neviim' | 'Ketuvim'; he: string; desc: string }[] = [
  { id: 'Torá', he: 'תורה', desc: 'La Ley · cinco libros' },
  { id: 'Neviim', he: 'נביאים', desc: 'Los Profetas' },
  { id: 'Ketuvim', he: 'כתובים', desc: 'Los Escritos' },
]

export default function TanajLibrary({ books }: { books: TanajBookSummary[] }) {
  const totals = books.reduce(
    (s, b) => ({
      verses: s.verses + b.verses,
      comments: s.comments + b.withComment,
    }),
    { verses: 0, comments: 0 },
  )

  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f6] text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-5">
          <TanajBrand subtitle="Hebreo, español con comentarios" />
          <div className="ml-auto">
            <TanajHomeLink />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        {/* presentación */}
        <div className="mb-10 text-center">
          <p className="font-hebrew text-3xl font-bold text-stone-800 sm:text-4xl" dir="rtl" lang="he">
            תנ״ך
          </p>
          <p className="font-hebrew mt-2 text-lg text-stone-500" dir="rtl" lang="he">
            תורה נביאים וכתובים
          </p>
          <p className="mt-3 text-sm tracking-wide text-stone-500">
            Tanaj (Biblia) · Hebreo – Español con comentarios
          </p>
          <div className="mt-5 flex justify-center">
            <ScriptureSearch
              endpoint="/api/tanaj/search"
              placeholder="Buscar en el Tanaj…"
              buildLink={(h) => `/tanaj/${h.slug}/${h.chapter}?v=${h.verse}`}
            />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-stone-400">
            Los 24 libros del Tanaj en hebreo (con ta&apos;amim) y español, versículo a versículo,
            con {totals.comments.toLocaleString('es')} comentarios de la fuente.{' '}
            {totals.verses.toLocaleString('es')} versículos.
          </p>
        </div>

        {SECTIONS.map((sec) => {
          const items = books.filter((b) => b.section === sec.id)
          if (!items.length) return null
          return (
            <section key={sec.id} className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-stone-700">
                  {sec.id}{' '}
                  <span className="font-hebrew ml-1 text-base normal-case" dir="rtl" lang="he">
                    {sec.he}
                  </span>
                </h2>
                <p className="text-xs text-stone-400">{sec.desc}</p>
                <div className="h-px flex-1 bg-stone-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((b) => (
                  <Link
                    key={b.id}
                    href={`/tanaj/${b.slug}/1`}
                    className="group rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: b.tint }}
                      />
                      <ChevronRight className="h-4 w-4 text-stone-300 transition group-hover:translate-x-0.5 group-hover:text-stone-500" />
                    </div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-xl font-semibold">{b.spanish}</h3>
                      <span
                        className="font-hebrew shrink-0 text-lg leading-none text-stone-400"
                        dir="rtl"
                        lang="he"
                      >
                        {b.hebreo}
                      </span>
                    </div>
                    <p className="text-sm text-stone-500">{b.name}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
                      <span>{b.chapters} capítulos</span>
                      <span>{b.verses} versículos</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs text-stone-500">
                      <MessageSquareQuote className="h-3 w-3" />
                      {b.withComment} comentarios
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-stone-400">
          Usa el selector de idioma (Español / עברית / Ambos) para leer solo hebreo, solo español o
          ambos, y el interruptor de comentarios para una lectura limpia. El buscador encuentra
          palabras en español y hebreo en todo el Tanaj.
        </p>
      </main>

      <TanajFooter />
    </div>
  )
}
