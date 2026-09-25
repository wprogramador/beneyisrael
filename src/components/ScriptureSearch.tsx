'use client'

// Buscador de texto bíblico reutilizable (Jumash / Tanaj).
// Consulta el endpoint dado y navega al versículo con el deep-link ?v=N.

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Search } from 'lucide-react'

export interface ScriptureSearchHit {
  bookName: string
  chapter: number
  verse: number
  es: string
  he: string
  slug: string
}

export default function ScriptureSearch({
  endpoint,
  placeholder,
  accent = '#4a6fa5',
  buildLink,
}: {
  endpoint: string
  placeholder: string
  accent?: string
  buildLink: (h: ScriptureSearchHit) => string
}) {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [hits, setHits] = useState<ScriptureSearchHit[] | null>(null)
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
        const r = await fetch(`${endpoint}?q=${encodeURIComponent(q.trim())}`)
        if (r.ok) setHits(await r.json())
      } catch {
        setHits(null)
      }
    }, 300)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [q, endpoint])

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
        placeholder={placeholder}
        className="w-[160px] rounded-full border border-stone-200 bg-white py-1.5 pl-8 pr-3 text-base shadow-sm outline-none transition placeholder:text-stone-400 focus:border-stone-300 focus:ring-2 focus:ring-stone-200 sm:w-[220px] sm:text-xs"
      />
      {open && q.trim().length >= 3 && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[340px] overflow-y-auto rounded-xl border border-stone-200 bg-white text-left shadow-lg">
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
                  router.push(buildLink(h))
                }}
                className="block w-full border-b border-stone-100 px-3 py-2 text-left transition last:border-0 hover:bg-stone-50"
              >
                <span
                  className="text-[0.7rem] font-semibold uppercase tracking-wide"
                  style={{ color: accent }}
                >
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
