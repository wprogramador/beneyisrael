'use client'

import { Fragment } from 'react'
import { MessageSquareQuote } from 'lucide-react'

const HEB_RE = /([\u0590-\u05FF\uFB1D-\uFB4F\u05F3\u05F4][\u0590-\u05FF\uFB1D-\uFB4F\u05F3\u05F4\s]*)+/g

/** Renderiza un texto que puede contener citas en hebreo.
 *  Las citas hebreas se muestran con fuente hebrea y dirección RTL. */
export function RichText({ text, className }: { text: string; className?: string }) {
  const segments = text.split(HEB_RE)
  return (
    <span className={className}>
      {segments.map((seg, i) =>
        i % 2 === 1 ? (
          <span key={i} dir="rtl" className="font-hebrew">
            {seg}
          </span>
        ) : (
          <Fragment key={i}>{seg}</Fragment>
        ),
      )}
    </span>
  )
}

/** Lemas del versículo comentado: “...PALABRA...” (o PALABRA...” al inicio del texto).
 *  Marcan las secciones "sobre tal palabra del verso". */
const LEMA_RE = /“\.\.\.([^”]{2,80}?)\.\.\.”|^([A-ZÁÉÍÓÚÑÜ][A-ZÁÉÍÓÚÑÜ ,.'’-]{3,60}?)\.\.\.”/g

/** Conjunciones que quedan en minúscula al titulizar un lema. */
const CONJUNCIONES = new Set(['y', 'e', 'o', 'u', 'de', 'del', 'la', 'el', 'los', 'las', 'a', 'en', 'con', 'por', 'al'])

function tituloLema(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((w, i) => (CONJUNCIONES.has(w) && i > 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ')
}

/** Cortes de párrafo seguros: tras puntuación de cierre, antes de marcadores
 *  discursivos o de citas a exégetas; y antes de incisos A) B) C). */
const PARRAFO_RE =
  /(?<=[.!?:)”]\s)(?=(?:Sin embargo|Por eso|Por último|Por otra parte|En cuanto a|De aquí deriva|Cabe destacar|Según|Con estas palabras|Esta variedad|Así como|Los sabios|El exégeta|El autor de|El comentarista|El mismo criterio|La forma plural|El verbo|El tiempo|Nos hemos abstenido|Abarbanel|Onkelos|Seforno|Rashí|Rambán|Maimónides|Radak|Ibn|Rambam|Karné))/g

const LISTA_RE = /(?=\s[A-E]\)\s)/g

/** Divide una sección de comentario en párrafos legibles. */
export function splitParrafos(texto: string): string[] {
  return texto
    .split(PARRAFO_RE)
    .flatMap((p) => p.split(LISTA_RE))
    .map((p) => p.trim())
    .filter(Boolean)
}

interface Seccion {
  lema: string | null
  texto: string
}

/** Divide un comentario en secciones por lema (“...CREÓ...” → lema «Creó»). */
export function splitSecciones(texto: string): Seccion[] {
  const out: Seccion[] = []
  let ultimo = 0
  let lemaPendiente: string | null = null
  for (const m of texto.matchAll(LEMA_RE)) {
    const idx = m.index ?? 0
    const anterior = texto.slice(ultimo, idx).trim()
    if (anterior) out.push({ lema: lemaPendiente, texto: anterior })
    else if (lemaPendiente && out.length === 0 && !anterior) {
      /* lema al inicio: nada antes */
    }
    lemaPendiente = tituloLema(m[1] ?? m[2] ?? '')
    ultimo = idx + m[0].length
  }
  const resto = texto.slice(ultimo).trim()
  if (resto) out.push({ lema: lemaPendiente, texto: resto })
  else if (lemaPendiente && out.length) {
    /* lema sin texto posterior: ignorar */
  }
  return out.length ? out : [{ lema: null, texto: texto.trim() }]
}

/** Renderiza comentarios: separa comentarios múltiples (delimitador '—'),
 *  cada uno en secciones por lema y párrafos legibles. */
export function CommentText({ text, tint }: { text: string; tint?: string }) {
  const bloques = text.split(/\n—\n/)
  return (
    <div className="space-y-5">
      {bloques.map((bloque, i) => (
        <div key={i}>
          {i > 0 && <div className="mb-5 border-t border-stone-200" />}
          <div className="space-y-4">
            {splitSecciones(bloque).map((sec, j) => (
              <section key={j}>
                {sec.lema && (
                  <p
                    className="mb-1.5 flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em]"
                    style={{ color: tint ?? '#4a6fa5' }}
                  >
                    <MessageSquareQuote className="h-3 w-3" />
                    sobre «{sec.lema}»
                  </p>
                )}
                {splitParrafos(sec.texto).map((p, k) => (
                  <p key={k} className="mb-2.5 leading-relaxed last:mb-0">
                    <RichText text={p} />
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
