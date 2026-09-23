'use client'

import { Fragment } from 'react'

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

/** Igual que RichText pero separa los comentarios múltiples (delimitador '—') en párrafos. */
export function CommentText({ text }: { text: string }) {
  const parts = text.split(/\n—\n/)
  return (
    <div className="space-y-3">
      {parts.map((p, i) => (
        <p key={i} className="leading-relaxed">
          <RichText text={p} />
        </p>
      ))}
    </div>
  )
}
