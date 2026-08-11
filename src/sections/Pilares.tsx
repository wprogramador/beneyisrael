'use client'

import { BookOpen, Sparkles, HeartHandshake, Wifi, Home, Users } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const pilares = [
  {
    icon: BookOpen,
    hebrew: 'תורה',
    titulo: 'Estudio de la Torá',
    texto:
      'Nos dedicamos a la enseñanza y profundización en las Escrituras, buscando la verdad en el texto original y su aplicación práctica para la vida diaria.',
  },
  {
    icon: Sparkles,
    hebrew: 'תרבות',
    titulo: 'Cultura Hebrea',
    texto:
      'Fomentamos el amor por nuestras raíces, enseñando el idioma hebreo, las tradiciones, la música y la danza, para que cada miembro se sienta conectado con su herencia.',
  },
  {
    icon: HeartHandshake,
    hebrew: 'חסד',
    titulo: 'Acción Benéfica',
    texto:
      'Entendemos que la fe sin obras está muerta. Por eso nos esforzamos en ser una luz para nuestro entorno mediante actividades benéficas y de servicio a la comunidad en Los Teques.',
  },
]

export default function Pilares() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="pilares" ref={ref} className="relative py-16 sm:py-24 md:py-32 bg-[#100d08]">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="text-center max-w-3xl mx-auto">
          <p className="reveal font-hebrew text-[#d4af37] text-lg tracking-wide" dir="rtl" lang="he">
            בית מדרש
          </p>
          <h2 className="reveal font-hebrew text-2xl sm:text-3xl md:text-5xl font-bold mt-2">
            Estudia <span className="gold-gradient-text">con Nosotros</span>
          </h2>
          <p className="reveal text-foreground/70 mt-4 leading-relaxed">
            Tres pilares fundamentales para la formación integral y el desarrollo de nuestra comunidad.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pilares.map((p, i) => (
            <article
              key={p.titulo}
              className={`reveal ${i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : ''} group relative rounded-2xl border border-[#d4af37]/20 bg-gradient-to-b from-[#1a150d] to-[#100d08] p-6 sm:p-8 hover:border-[#d4af37]/60 transition-colors duration-500`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#14100a] transition-colors duration-500">
                  <p.icon size={26} strokeWidth={1.6} />
                </div>
                <span className="font-hebrew text-2xl text-[#d4af37]/40 group-hover:text-[#d4af37]/80 transition-colors" dir="rtl" lang="he">
                  {p.hebrew}
                </span>
              </div>
              <h3 className="font-hebrew text-2xl font-bold mt-6 text-foreground">{p.titulo}</h3>
              <p className="mt-4 leading-relaxed text-foreground/75">{p.texto}</p>
              <span className="mt-6 block h-px w-full bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
            </article>
          ))}
        </div>

        {/* Áreas de estudio */}
        <div className="reveal mt-14">
          <p className="text-sm tracking-[0.3em] uppercase text-foreground/60 mb-8 text-center">¿Qué estudiamos?</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { es: 'Idioma Hebreo', he: 'עברית', desc: 'Hebreo bíblico y moderno: la lengua viva de nuestro pueblo.' },
              { es: 'Torá', he: 'תורה', desc: 'Estudio profundo del Texto Sagrado y su aplicación en la vida diaria.' },
              { es: 'Tradiciones', he: 'מסורת', desc: 'Celebra con nosotros nuestras fiestas y costumbres.' },
              { es: 'Kabalá', he: 'קבלה', desc: 'El Sod de la Torá: los misterios ocultos de la Creación.' },
            ].map((a, i) => (
              <article
                key={a.es}
                className={`reveal ${i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : i === 3 ? 'reveal-delay-3' : ''} rounded-2xl border border-[#d4af37]/25 bg-[#0c0a07] p-6 text-center hover:border-[#d4af37]/60 transition-colors duration-500`}
              >
                <p className="font-hebrew text-2xl text-[#d4af37]" dir="rtl" lang="he">{a.he}</p>
                <h4 className="font-hebrew text-lg font-bold mt-2 text-foreground">{a.es}</h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{a.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Franja: estudio a distancia */}
        <div className="reveal mt-16 overflow-hidden rounded-2xl border border-[#d4af37]/20">
          <div className="grid md:grid-cols-2">
            <img
              src="/images/clases-online.jpg"
              alt="Clase en línea de estudios hebraicos"
              className="h-56 sm:h-72 md:h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center px-6 py-8 sm:px-8 md:p-12 bg-[#1a150d]">
              <p className="font-hebrew text-[#d4af37] text-base sm:text-lg" dir="rtl" lang="he">
                לימוד מרחוק
              </p>
              <h3 className="font-hebrew text-xl sm:text-2xl md:text-3xl font-bold mt-2 leading-snug">
                Estudia con nosotros, estés donde estés
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/75">
                Aunque nuestra sede física está en Los Teques, nuestra visión no tiene fronteras: ofrecemos charlas,
                conferencias y cursos a distancia para quienes anhelan formarse con seriedad y calidad, y desean
                «retornar a casa».
              </p>
              <p className="mt-5 text-sm sm:text-base text-[#d4af37] font-medium leading-snug">
                No hace falta estar presencial para estudiar juntos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#d4af37]/20 bg-[#100d08]">
            {[
              { icon: Home, label: 'Desde tu casa', desc: 'Conéctate donde estés' },
              { icon: Wifi, label: 'En vivo o grabado', desc: 'A tu ritmo' },
              { icon: Users, label: 'Misma comunidad', desc: 'Estudio compartido' },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-6 py-5 sm:px-5 sm:py-6 md:px-8 ${
                  i > 0 ? 'border-t sm:border-t-0 sm:border-l border-[#d4af37]/15' : ''
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#d4af37]/35 text-[#d4af37]">
                  <item.icon size={18} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                  <span className="block text-xs text-foreground/55 mt-0.5">{item.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
