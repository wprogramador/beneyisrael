import { Link } from 'react-router'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { useParasha } from '@/lib/hebcal'
import { COMENTARIOS_CORTOS } from '@/lib/reflexiones'

function normalizar(nombre: string): string[] {
  return nombre
    .split('-')
    .map((p) =>
      p.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-')
    )
}

const ALIAS: Record<string, string> = {
  bechukotai: 'bejukotai', behaalotecha: 'behaalotja', tetzaveh: 'tetzave',
  terumah: 'teruma', shmini: 'shemini', beshalach: 'beshalaj', yitro: 'itro',
  'acharei-mot': 'ajarei-mot', chukat: 'jukat', pinchas: 'pinjas', matos: 'matot',
  vaetchanan: 'vaetjanan', ekev: 'eikev', reeh: 'ree', 'ki-teitzei': 'ki-tetze',
  vayelech: 'vayelej', 'vezot-haberakhah': 'vezot-haberaja', bereishit: 'bereshit',
  noach: 'noaj', 'lech-lecha': 'lej-leja', 'chayei-sarah': 'jaye-sara',
  vayishlach: 'vayishlaj', mikeitz: 'miketz', vayechi: 'vayeji',
  shemos: 'shemot', korach: 'koraj', shlach: 'shelaj', shelach: 'shelaj',
}

function comentarioDe(nombreParasha: string): string | undefined {
  for (const p of normalizar(nombreParasha)) {
    if (COMENTARIOS_CORTOS[p]) return COMENTARIOS_CORTOS[p]
  }
  for (const p of normalizar(nombreParasha)) {
    const id = ALIAS[p]
    if (id && COMENTARIOS_CORTOS[id]) return COMENTARIOS_CORTOS[id]
  }
  return undefined
}

export default function ParashaSemana() {
  const ref = useReveal<HTMLElement>()
  const parasha = useParasha(new Date())
  const comentario = parasha.nombre ? comentarioDe(parasha.nombre) : undefined

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" ref={ref}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, #d4af37 0, transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5">
        <div className="reveal relative overflow-hidden rounded-3xl border border-[#d4af37]/40 bg-gradient-to-br from-[#1a150d] via-[#141009] to-[#0c0a07] p-8 md:p-12 text-center">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 20%, #d4af37 0, transparent 45%), radial-gradient(circle at 90% 85%, #d4af37 0, transparent 45%)',
            }}
          />
          <div className="relative">
            <p className="flex items-center justify-center gap-2 text-sm tracking-[0.25em] uppercase text-[#d4af37]">
              <BookOpen size={17} /> Parashá de la semana
            </p>
            <p className="mt-4 font-hebrew text-[#d4af37] text-xl" dir="rtl" lang="he">
              {parasha.hebreo || 'פרשת השבוע'}
            </p>
            <h2 className="mt-2 font-hebrew text-3xl md:text-4xl font-bold">
              Parashat <span className="gold-gradient-text">{parasha.nombre || '…'}</span>
            </h2>
            {parasha.lectura && (
              <p className="mt-2 text-sm text-foreground/60">{parasha.lectura}</p>
            )}

            {comentario && (
              <blockquote className="mt-7 mx-auto max-w-2xl">
                <p className="text-foreground/85 leading-relaxed italic md:text-lg">
                  "{comentario}"
                </p>
                <cite className="mt-3 block text-sm font-hebrew font-semibold text-[#d4af37] not-italic">
                  — Moré Imanuel ben Efraim
                </cite>
              </blockquote>
            )}

            <p className="mt-7 text-sm text-foreground/60">
              Shabat: Shajarit y estudio de la Parashá · Los Teques / en línea
            </p>

            <Link
              to="/reflexiones"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 px-6 py-2.5 text-sm font-semibold text-[#d4af37] hover:bg-[#d4af37]/15 transition-colors"
            >
              Leer la reflexión completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
