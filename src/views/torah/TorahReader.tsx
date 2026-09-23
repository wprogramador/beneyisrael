'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Feather,
  Info,
  MessageSquareQuote,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import {
  BOOK_META,
  BOOK_ORDER,
  BOOK_SLUG,
  parashaEndsIn,
  parashaStartsIn,
} from '@/lib/torah'
import type { BookId, Chapter, Parasha, Verse } from '@/lib/torah'
import { CommentText } from '@/components/torah/RichText'
import TorahBrand from '@/components/torah/TorahBrand'
import TorahFooter from '@/components/torah/TorahFooter'

export interface TorahReaderProps {
  book: BookId
  chapter: Chapter
  chapterNumbers: number[]
  parashot: Parasha[]
}

export default function TorahReader({ book, chapter: ch, chapterNumbers, parashot }: TorahReaderProps) {
  const router = useRouter()
  const chNum = ch.capitulo
  const [selected, setSelected] = useState<number | null>(null)

  const idx = chapterNumbers.indexOf(chNum)

  // versículo inicial: deep-link ?v=N (abre su comentario); se lee en el
  // cliente para no forzar CSR-bailout y mantener el HTML estático completo
  useEffect(() => {
    const vParam = parseInt(new URLSearchParams(window.location.search).get('v') ?? '', 10)
    setSelected(Number.isFinite(vParam) ? vParam : null)
    window.scrollTo({ top: 0 })
  }, [book, chNum])

  const go = (n: number) => router.push(`/torah/${BOOK_SLUG[book]}/${n}`)
  const goBook = (b: BookId) => router.push(`/torah/${BOOK_SLUG[b]}/1`)
  const selectVerse = (n: number) => {
    setSelected(n)
    window.history.replaceState(null, '', `?v=${n}`)
  }

  // flechas del teclado para cambiar de capítulo
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && idx > 0) go(chapterNumbers[idx - 1])
      if (e.key === 'ArrowRight' && idx >= 0 && idx < chapterNumbers.length - 1)
        go(chapterNumbers[idx + 1])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  const comments = useMemo(() => ch.comentario?.por_versiculo ?? {}, [ch])
  const intro = ch.comentario?.intro ?? null

  const meta = BOOK_META[book]
  const selectedText = selected != null ? comments[String(selected)] : undefined

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900">
      {/* barra superior */}
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
          <TorahBrand />
          <nav className="flex items-center gap-1 overflow-x-auto">
            {BOOK_ORDER.map((b) => (
              <button
                key={b}
                onClick={() => goBook(b)}
                className={`whitespace-nowrap rounded-full px-3 py-1 text-sm transition ${
                  b === book
                    ? 'font-semibold text-white'
                    : 'text-stone-500 hover:bg-stone-100 hover:text-stone-800'
                }`}
                style={b === book ? { backgroundColor: meta.tint } : undefined}
              >
                {BOOK_META[b].name}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => idx > 0 && go(chapterNumbers[idx - 1])}
              disabled={idx <= 0}
              aria-label="Capítulo anterior"
              className="rounded-full p-1.5 text-stone-500 transition hover:bg-stone-100 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <Select value={String(chNum)} onValueChange={(v) => go(parseInt(v, 10))}>
              <SelectTrigger className="w-[130px] bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {chapterNumbers.map((n) => (
                  <SelectItem key={n} value={String(n)}>
                    Capítulo {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <button
              onClick={() => idx >= 0 && idx < chapterNumbers.length - 1 && go(chapterNumbers[idx + 1])}
              disabled={idx < 0 || idx >= chapterNumbers.length - 1}
              aria-label="Capítulo siguiente"
              className="rounded-full p-1.5 text-stone-500 transition hover:bg-stone-100 disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
        {/* encabezado del capítulo */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: meta.tint }}>
            {meta.name} · {meta.spanish}
          </p>
          <h1 className="torah-display mt-2 text-4xl font-semibold tracking-tight">
            Capítulo {ch.capitulo}
          </h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-500">
            {ch.parasha && (
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1">
                Parashá <strong>{ch.parasha}</strong>
              </span>
            )}
            {ch.ref && (
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1">
                {ch.ref[0]} {ch.ref[1]}
              </span>
            )}
            <span className="rounded-full border border-stone-200 bg-white px-3 py-1">
              {ch.versiculos.length} versículos
            </span>
            <span
              className="rounded-full px-3 py-1"
              style={{
                backgroundColor: `${meta.tint}18`,
                color: meta.tint,
              }}
              title="Versículos con comentario"
            >
              {ch.comentario?.n_con_comentario ?? 0} comentarios
            </span>
          </div>
          {ch.comentario_estado === 'FALTANTE_EN_FUENTE' && (
            <p className="mx-auto mt-4 flex max-w-md items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-left text-xs text-amber-800">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              Este capítulo aún no tiene comentarios.
            </p>
          )}
        </div>

        {/* versículos */}
        <div className="space-y-1">
          {(() => {
            const starts = new Map<number, Parasha>()
            const ends = new Map<number, Parasha>()
            for (const p of parashaStartsIn(parashot, book, chNum)) starts.set(p.inicio.versiculo, p)
            for (const p of parashaEndsIn(parashot, book, chNum)) ends.set(p.fin.versiculo, p)
            return ch.versiculos.map((v, i) => {
              const prevAlia = i > 0 ? ch.versiculos[i - 1].alia : null
              const startP = starts.get(v.n)
              const endP = ends.get(v.n)
              return (
                <div key={v.n}>
                  {startP && (
                    <ParashaBand
                      kind="start"
                      nombre={startP.nombre}
                      refLabel={`${meta.name} ${startP.inicio.capitulo}:${startP.inicio.versiculo}`}
                      tint={meta.tint}
                    />
                  )}
                  <VerseRow
                    verse={v}
                    tint={meta.tint}
                    showAlia={Boolean(v.alia && v.alia !== prevAlia)}
                    hasComment={String(v.n) in comments}
                    selected={selected === v.n}
                    onSelect={() => selectVerse(v.n)}
                  />
                  {endP && (
                    <ParashaBand
                      kind="end"
                      nombre={endP.nombre}
                      refLabel={`${meta.name} ${endP.fin.capitulo}:${endP.fin.versiculo}`}
                      tint={meta.tint}
                    />
                  )}
                </div>
              )
            })
          })()}
        </div>

        {ch.notas_pie && (
          <p className="mt-10 border-t border-stone-200 pt-4 text-xs leading-relaxed text-stone-400">
            {ch.notas_pie}
          </p>
        )}

        {/* navegación inferior */}
        <div className="mt-14 flex items-center justify-between border-t border-stone-200 pt-6">
          {idx > 0 ? (
            <ChapterLink
              dir="prev"
              label={chapterNumbers[idx - 1]}
              onClick={() => go(chapterNumbers[idx - 1])}
              tint={meta.tint}
            />
          ) : (
            <span />
          )}
          {idx >= 0 && idx < chapterNumbers.length - 1 && (
            <ChapterLink
              dir="next"
              label={chapterNumbers[idx + 1]}
              onClick={() => go(chapterNumbers[idx + 1])}
              tint={meta.tint}
            />
          )}
        </div>
      </main>

      {/* panel de comentario */}
      <Sheet open={selected != null} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent
          side="right"
          className="w-full overflow-y-auto bg-[#fdfcf9] sm:max-w-[480px]"
        >
          {selected != null && (
            <>
              <SheetHeader className="mb-4">
                <SheetTitle className="torah-display text-xl text-left">
                  {meta.name} {ch.capitulo}:{selected}
                </SheetTitle>
                <p className="text-left text-xs text-stone-400">
                  {String(selected) in comments
                    ? 'Comentario tradicional'
                    : 'Este versículo aún no tiene comentario.'}
                </p>
              </SheetHeader>

              {intro && (
                <details className="mb-5 rounded-lg border border-stone-200 bg-white p-3 text-sm text-stone-600">
                  <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-stone-400">
                    Introducción del capítulo
                  </summary>
                  <div className="mt-2 leading-relaxed">
                    <CommentText text={intro} />
                  </div>
                </details>
              )}

              {selectedText ? (
                <div
                  className="rounded-lg border-l-4 bg-white p-4 shadow-sm"
                  style={{ borderColor: meta.tint }}
                >
                  <div
                    className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide"
                    style={{ color: meta.tint }}
                  >
                    <MessageSquareQuote className="h-3.5 w-3.5" /> Comentario
                  </div>
                  <div className="text-[0.95rem] text-stone-800">
                    <CommentText text={selectedText} />
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-stone-300 bg-white/60 p-5 text-center">
                  <Feather className="mx-auto mb-2 h-5 w-5 text-stone-300" />
                  <p className="text-sm text-stone-500">Este versículo aún no tiene comentario.</p>
                </div>
              )}

              {/* texto del versículo para contexto */}
              {selectedText && (
                <div className="mt-5 rounded-lg bg-stone-100/70 p-4">
                  <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-stone-400">
                    Versículo
                  </p>
                  {(() => {
                    const sv = ch.versiculos.find((v) => v.n === selected)
                    return (
                      <>
                        {sv?.hebreo && (
                          <p
                            dir="rtl"
                            className="font-hebrew mb-2 text-right text-base leading-loose text-stone-800"
                          >
                            {sv.hebreo}
                          </p>
                        )}
                        <p className="torah-display text-sm leading-relaxed text-stone-700">
                          {sv?.texto}
                        </p>
                      </>
                    )
                  })()}
                </div>
              )}
            </>
          )}
        </SheetContent>
      </Sheet>

      <TorahFooter />
    </div>
  )
}

function VerseRow({
  verse,
  tint,
  showAlia,
  hasComment,
  selected,
  onSelect,
}: {
  verse: Verse
  tint: string
  showAlia: boolean
  hasComment: boolean
  selected: boolean
  onSelect: () => void
}) {
  return (
    <div id={`v${verse.n}`}>
      {showAlia && verse.alia && (
        <p className="mt-6 mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-400">
          Aliá · {verse.alia}
        </p>
      )}
      <button
        onClick={onSelect}
        className={`group flex w-full items-baseline gap-3 rounded-lg px-3 py-2 text-left transition ${
          selected ? 'bg-stone-200/60' : 'hover:bg-stone-100/80'
        }`}
      >
        <span className="flex w-10 shrink-0 items-baseline justify-end gap-1">
          <span
            className={`torah-display text-sm tabular-nums ${
              hasComment ? 'font-semibold' : 'text-stone-400'
            }`}
            style={hasComment ? { color: tint } : undefined}
          >
            {verse.n}
          </span>
          {hasComment && (
            <MessageSquareQuote
              className="h-3 w-3 translate-y-0.5 opacity-60 transition group-hover:opacity-100"
              style={{ color: tint }}
            />
          )}
        </span>
        <span className="min-w-0 flex-1">
          {verse.hebreo && (
            <span
              dir="rtl"
              className="font-hebrew block text-right text-[1.15rem] leading-[1.8] text-stone-900"
            >
              {verse.hebreo}
            </span>
          )}
          <span className="torah-display mt-1 block text-[1.02rem] leading-[1.85] text-stone-600">
            {verse.texto}
          </span>
        </span>
      </button>
    </div>
  )
}

function ParashaBand({
  kind,
  nombre,
  refLabel,
  tint,
}: {
  kind: 'start' | 'end'
  nombre: string
  refLabel: string
  tint: string
}) {
  return (
    <div className="flex items-center gap-3 py-3" aria-label={`Parashá ${nombre}`}>
      <div className="h-px flex-1" style={{ backgroundColor: `${tint}44` }} />
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em]" style={{ color: tint }}>
        {kind === 'start' ? '◆' : '◇'}{' '}
        {kind === 'start' ? `Parashá ${nombre}` : `Termina ${nombre}`}
        <span className="ml-2 font-normal normal-case tracking-normal text-stone-400">
          {refLabel}
        </span>
      </p>
      <div className="h-px flex-1" style={{ backgroundColor: `${tint}44` }} />
    </div>
  )
}

function ChapterLink({
  dir,
  label,
  onClick,
  tint,
}: {
  dir: 'prev' | 'next'
  label: number
  onClick: () => void
  tint: string
}) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow"
    >
      {dir === 'prev' && <ArrowLeft className="h-4 w-4 text-stone-400" />}
      <span>
        Capítulo <strong style={{ color: tint }}>{label}</strong>
      </span>
      {dir === 'next' && <ArrowRight className="h-4 w-4 text-stone-400" />}
    </button>
  )
}
