'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Feather,
  MessageSquareQuote,
  Search,
  X,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import {
  TANAJ_META,
  TANAJ_ORDER,
  TANAJ_SLUG,
} from '@/lib/tanaj'
import type { TanajBookId, TanajChapter } from '@/lib/tanaj'
import TanajBrand, { TanajHomeLink } from '@/components/tanaj/TanajBrand'
import TanajFooter from '@/components/tanaj/TanajFooter'

type Lang = 'es' | 'he' | 'both'

export interface TanajReaderProps {
  book: TanajBookId
  bookIndex: number
  chapter: TanajChapter
  chapterNumbers: number[]
}

interface SearchHit {
  bookIndex: number
  bookName: string
  chapter: number
  verse: number
  es: string
  he: string
}

export default function TanajReader({ book, bookIndex, chapter: ch, chapterNumbers }: TanajReaderProps) {
  const router = useRouter()
  const chNum = ch.n
  const [selected, setSelected] = useState<number | null>(null)
  const [flash, setFlash] = useState<number | null>(null)
  const [lang, setLang] = useState<Lang>('both')
  const [showComments, setShowComments] = useState(true)

  const idx = chapterNumbers.indexOf(chNum)
  const meta = TANAJ_META[book]

  // libro anterior/siguiente para cruzar fronteras de libro
  const prevRef = useMemo(() => {
    if (idx > 0) return { book, chapter: chapterNumbers[idx - 1] }
    if (bookIndex > 0) return { book: TANAJ_ORDER[bookIndex - 1], chapter: null }
    return null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, bookIndex])
  const nextRef = useMemo(() => {
    if (idx >= 0 && idx < chapterNumbers.length - 1) return { book, chapter: chapterNumbers[idx + 1] }
    if (bookIndex < TANAJ_ORDER.length - 1) return { book: TANAJ_ORDER[bookIndex + 1], chapter: null }
    return null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, bookIndex])

  const go = (b: TanajBookId, n: number) => router.push(`/tanaj/${TANAJ_SLUG[b]}/${n}`)
  const goBook = (b: TanajBookId) => router.push(`/tanaj/${TANAJ_SLUG[b]}/1`)
  const selectVerse = (n: number) => {
    setSelected(n)
    window.history.replaceState(null, '', `?v=${n}`)
  }

  // deep-link ?v=N: resalta el versículo SIN abrir el comentario
  useEffect(() => {
    const vParam = parseInt(new URLSearchParams(window.location.search).get('v') ?? '', 10)
    if (Number.isFinite(vParam) && ch.verses.some((v) => v.n === vParam)) {
      setFlash(vParam)
      window.history.replaceState(null, '', window.location.pathname)
      requestAnimationFrame(() => {
        document.getElementById(`v${vParam}`)?.scrollIntoView({ block: 'center' })
      })
      const t = setTimeout(() => setFlash(null), 2400)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [book, chNum, ch])

  // flechas del teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT') return
      if (e.key === 'ArrowLeft' && prevRef) go(prevRef.book, prevRef.chapter ?? 1)
      if (e.key === 'ArrowRight' && nextRef) go(nextRef.book, nextRef.chapter ?? 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  const selectedVerse = selected != null ? ch.verses.find((v) => v.n === selected) : undefined
  const nComments = ch.verses.filter((v) => v.comment).length

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900">
      {/* barra superior */}
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
          <TanajBrand />
          <div className="ml-auto flex items-center gap-2">
            <TanajHomeLink />
            <Link
              href="/biblioteca"
              className="hidden rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-500 shadow-sm transition hover:text-stone-800 hover:shadow sm:block"
            >
              Biblioteca
            </Link>
          </div>
        </div>
        {/* controles */}
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-3 gap-y-2 px-4 pb-3 sm:px-6">
          <Select value={book} onValueChange={(v) => goBook(v as TanajBookId)}>
            <SelectTrigger className="w-[170px] bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TANAJ_ORDER.map((b) => (
                <SelectItem key={b} value={b}>
                  {TANAJ_META[b].spanish}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            onClick={() => prevRef && go(prevRef.book, prevRef.chapter ?? 1)}
            disabled={!prevRef}
            aria-label="Capítulo anterior"
            className="rounded-full p-1.5 text-stone-500 transition hover:bg-stone-100 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <Select value={String(chNum)} onValueChange={(v) => go(book, parseInt(v, 10))}>
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
            onClick={() => nextRef && go(nextRef.book, nextRef.chapter ?? 1)}
            disabled={!nextRef}
            aria-label="Capítulo siguiente"
            className="rounded-full p-1.5 text-stone-500 transition hover:bg-stone-100 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <SearchBox />

          {/* selector de idioma */}
          <div className="flex items-center gap-1 rounded-full border border-stone-200 bg-white p-0.5 shadow-sm">
            <LangBtn active={lang === 'es'} onClick={() => setLang('es')} label="Español" />
            <LangBtn active={lang === 'he'} onClick={() => setLang('he')} label="עברית" hebrew />
            <LangBtn active={lang === 'both'} onClick={() => setLang('both')} label="Ambos" />
          </div>

          {/* interruptor de comentarios */}
          <button
            onClick={() => setShowComments((s) => !s)}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs shadow-sm transition ${
              showComments
                ? 'border-[#d4af37]/60 bg-[#d4af37]/10 text-stone-700'
                : 'border-stone-200 bg-white text-stone-400'
            }`}
            aria-pressed={showComments}
          >
            <MessageSquareQuote className="h-3.5 w-3.5" />
            Comentarios
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6">
        {/* encabezado del capítulo */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: meta.tint }}>
            {meta.section} · {meta.spanish}
          </p>
          <p className="font-hebrew mt-2 text-3xl font-bold text-stone-800" dir="rtl" lang="he">
            {meta.hebreo} {toHebrewNumeral(chNum)}
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-stone-700">
            {meta.spanish} · Capítulo {chNum}
          </h1>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-500">
            <span className="rounded-full border border-stone-200 bg-white px-3 py-1">
              {ch.verses.length} versículos
            </span>
            <span
              className="rounded-full px-3 py-1"
              style={{ backgroundColor: `${meta.tint}18`, color: meta.tint }}
              title="Versículos con comentario"
            >
              {nComments} comentarios
            </span>
          </div>
        </div>

        {/* versículos */}
        <div className="space-y-1">
          {ch.verses.map((v) => (
            <VerseRow
              key={v.n}
              verse={v}
              tint={meta.tint}
              lang={lang}
              dimComments={!showComments}
              hasComment={Boolean(v.comment)}
              selected={selected === v.n}
              flash={flash === v.n}
              onSelect={() => v.comment && showComments && selectVerse(v.n)}
            />
          ))}
        </div>

        {/* navegación inferior */}
        <div className="mt-14 flex items-center justify-between border-t border-stone-200 pt-6">
          {prevRef ? (
            <ChapterLink dir="prev" book={prevRef.book} chapter={prevRef.chapter ?? 1} onClick={() => go(prevRef.book, prevRef.chapter ?? 1)} tint={meta.tint} />
          ) : (
            <span />
          )}
          {nextRef && (
            <ChapterLink dir="next" book={nextRef.book} chapter={nextRef.chapter ?? 1} onClick={() => go(nextRef.book, nextRef.chapter ?? 1)} tint={meta.tint} />
          )}
        </div>
      </main>

      {/* panel de comentario */}
      <Drawer open={selected != null} onOpenChange={(o) => !o && setSelected(null)} direction="right">
        <DrawerContent className="w-full bg-[#fdfcf9] sm:max-w-[480px]">
          {selected != null && selectedVerse && (
            <>
              <div className="flex items-start justify-between gap-2 p-4 pb-0 sm:p-6 sm:pb-0">
                <DrawerHeader className="mb-4 flex-1 p-0 text-left">
                  <DrawerTitle className="text-xl text-left text-stone-900">
                    {meta.spanish} {chNum}:{selected}
                  </DrawerTitle>
                  <p className="mt-1 text-left text-xs text-stone-400">
                    {selectedVerse.comment ? 'Comentario' : 'Este versículo aún no tiene comentario.'}
                  </p>
                </DrawerHeader>
                <DrawerClose
                  aria-label="Cerrar comentario"
                  className="rounded-full p-2 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
                >
                  <X className="h-5 w-5" />
                </DrawerClose>
              </div>
              <div
                data-vaul-no-drag
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-6 [touch-action:pan-y] sm:px-6"
              >
                {selectedVerse.comment ? (
                  <div className="rounded-lg border-l-4 bg-white p-4 shadow-sm" style={{ borderColor: meta.tint }}>
                    <div
                      className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: meta.tint }}
                    >
                      <MessageSquareQuote className="h-3.5 w-3.5" /> Comentario
                    </div>
                    {selectedVerse.comment.quote && (
                      <p className="mb-3 border-r-2 border-stone-200 pr-3 text-sm italic leading-relaxed text-stone-500">
                        “{selectedVerse.comment.quote}”
                      </p>
                    )}
                    <div className="space-y-3 text-[0.95rem] leading-relaxed text-stone-800">
                      {selectedVerse.comment.text.split(/\n\n+/).map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-stone-300 bg-white/60 p-5 text-center">
                    <Feather className="mx-auto mb-2 h-5 w-5 text-stone-300" />
                    <p className="text-sm text-stone-500">Este versículo aún no tiene comentario.</p>
                  </div>
                )}

                {/* texto del versículo para contexto */}
                <div className="mt-5 rounded-lg bg-stone-100/70 p-4">
                  <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-widest text-stone-400">
                    Versículo
                  </p>
                  {selectedVerse.he && (
                    <p dir="rtl" className="font-hebrew mb-2 text-right text-base leading-loose text-stone-800">
                      {selectedVerse.he}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-stone-700">{selectedVerse.es}</p>
                </div>
              </div>
            </>
          )}
        </DrawerContent>
      </Drawer>

      <TanajFooter />
    </div>
  )
}

function toHebrewNumeral(n: number): string {
  const ones = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט']
  const tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ']
  const h = Math.floor(n / 100)
  const t = Math.floor((n % 100) / 10)
  const o = n % 10
  let s = ''
  if (h) s += (h === 2 ? 'ר' : ones[h]) + '׳'
  if (t) s += tens[t]
  if (o) s += ones[o]
  if (t === 1 && o === 5) s = s.replace('יה', 'טו')
  if (t === 1 && o === 6) s = s.replace('יו', 'טז')
  return s || 'א'
}

function LangBtn({
  active,
  onClick,
  label,
  hebrew,
}: {
  active: boolean
  onClick: () => void
  label: string
  hebrew?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs transition ${
        active ? 'bg-stone-900 font-semibold text-white shadow' : 'text-stone-500 hover:text-stone-800'
      }`}
    >
      {hebrew ? <span className="font-hebrew text-sm">{label}</span> : label}
    </button>
  )
}

function VerseRow({
  verse,
  tint,
  lang,
  dimComments,
  hasComment,
  selected,
  flash,
  onSelect,
}: {
  verse: TanajChapter['verses'][number]
  tint: string
  lang: Lang
  dimComments: boolean
  hasComment: boolean
  selected: boolean
  flash?: boolean
  onSelect: () => void
}) {
  return (
    <div id={`v${verse.n}`}>
      <button
        onClick={onSelect}
        disabled={!hasComment || dimComments}
        className={`group flex w-full items-baseline gap-3 rounded-lg px-3 py-2 text-left transition ${
          selected
            ? 'bg-stone-200/60'
            : flash
              ? ''
              : hasComment && !dimComments
                ? 'hover:bg-stone-100/80'
                : ''
        }`}
        style={flash ? { backgroundColor: `${tint}26` } : undefined}
      >
        <span className="flex w-10 shrink-0 items-baseline justify-end gap-1">
          <span
            className={`text-sm tabular-nums ${hasComment && !dimComments ? 'font-semibold' : 'text-stone-400'}`}
            style={hasComment && !dimComments ? { color: tint } : undefined}
          >
            {verse.n}
          </span>
          {hasComment && !dimComments && (
            <MessageSquareQuote
              className="h-3 w-3 translate-y-0.5 opacity-60 transition group-hover:opacity-100"
              style={{ color: tint }}
            />
          )}
        </span>
        <span className="min-w-0 flex-1">
          {verse.he && lang !== 'es' && (
            <span dir="rtl" className="font-hebrew block text-right text-[1.15rem] leading-[1.8] text-stone-900">
              {verse.he}
            </span>
          )}
          {verse.es && lang !== 'he' && (
            <span className={`mt-1 block text-[1.02rem] leading-[1.85] ${lang === 'both' ? 'text-stone-600' : 'text-stone-800'}`}>
              {verse.es}
            </span>
          )}
        </span>
      </button>
    </div>
  )
}

function ChapterLink({
  dir,
  book,
  chapter,
  onClick,
  tint,
}: {
  dir: 'prev' | 'next'
  book: TanajBookId
  chapter: number
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
        {TANAJ_META[book].spanish}{' '}
        <strong style={{ color: tint }}>{chapter}</strong>
      </span>
      {dir === 'next' && <ArrowRight className="h-4 w-4 text-stone-400" />}
    </button>
  )
}

/** Buscador de texto en todo el Tanaj (vía API). */
function SearchBox() {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [hits, setHits] = useState<SearchHit[] | null>(null)
  const [open, setOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    if (q.trim().length < 3) {
      setHits(null)
      return
    }
    timer.current = setTimeout(async () => {
      try {
        const r = await fetch(`/api/tanaj/search?q=${encodeURIComponent(q.trim())}`)
        if (r.ok) setHits(await r.json())
      } catch {
        setHits(null)
      }
    }, 300)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [q])

  return (
    <div ref={boxRef} className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-stone-400" />
      <input
        type="search"
        value={q}
        onChange={(e) => {
          setQ(e.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        placeholder="Buscar en el Tanaj…"
        className="w-[190px] rounded-full border border-stone-200 bg-white py-1.5 pl-8 pr-3 text-xs shadow-sm outline-none transition placeholder:text-stone-400 focus:border-stone-300 focus:ring-2 focus:ring-stone-200 sm:w-[220px]"
      />
      {open && q.trim().length >= 3 && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[340px] overflow-y-auto rounded-xl border border-stone-200 bg-white shadow-lg">
          {hits == null ? (
            <p className="p-3 text-xs text-stone-400">Buscando…</p>
          ) : hits.length === 0 ? (
            <p className="p-3 text-xs text-stone-400">Sin resultados.</p>
          ) : (
            hits.map((h, i) => (
              <button
                key={i}
                onClick={() => {
                  setOpen(false)
                  setQ('')
                  const slug = TANAJ_SLUG[TANAJ_ORDER[h.bookIndex]]
                  router.push(`/tanaj/${slug}/${h.chapter}?v=${h.verse}`)
                }}
                className="block w-full border-b border-stone-100 px-3 py-2 text-left transition last:border-0 hover:bg-stone-50"
              >
                <span className="text-[0.7rem] font-semibold uppercase tracking-wide" style={{ color: '#4a6fa5' }}>
                  {h.bookName} {h.chapter}:{h.verse}
                </span>
                <span className="mt-0.5 block truncate text-xs text-stone-600">{h.es || h.he}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
