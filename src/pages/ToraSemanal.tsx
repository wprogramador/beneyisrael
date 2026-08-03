import { useMemo } from 'react'
import { getContenidoSemanal } from '@/lib/tora-semanal'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { BookOpen, Heart, Scale, Sparkles, Calendar, Languages, Gavel, AlertCircle } from 'lucide-react'

const CATEGORY_META = {
  parasha:   { label: 'Parashá',   color: '#d4af37', icon: BookOpen },
  musar:     { label: 'Musar',     color: '#2d8a4e', icon: Heart },
  middot:    { label: 'Middot',    color: '#2a6f8f', icon: Scale },
  cabala:    { label: 'Cábala',    color: '#6a4c9c', icon: Sparkles },
  festividad:{ label: 'Festividad',color: '#a83232', icon: Calendar },
  hebreo:    { label: 'Hebreo',    color: '#c97d2b', icon: Languages },
  halaja:    { label: 'Halajá',    color: '#c0392b', icon: Gavel },
}

function TarjetaVertical({ tarjeta, tipo }: { tarjeta: NonNullable<ReturnType<typeof getContenidoSemanal>['parasha']>; tipo: keyof typeof CATEGORY_META }) {
  const meta = CATEGORY_META[tipo]
  const Icon = meta.icon

  return (
    <article className="relative bg-[#1a1510] border border-[#d4af37]/15 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#d4af37]/10 transition-all duration-300">
      {/* Borde lateral */}
      <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: meta.color }} />

      {/* Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: meta.color + '22', color: meta.color, border: `1px solid ${meta.color}44` }}>
        <Icon className="w-3.5 h-3.5" />
        {meta.label}
      </div>

      <div className="p-6 sm:p-8 pt-12">
        {/* Título hebreo */}
        <p className="text-right font-serif text-xl sm:text-2xl text-[#d4af37] mb-1" dir="rtl">
          {tarjeta.hebTitle}
        </p>
        <p className="text-right text-xs text-[#a89b8c] uppercase tracking-widest mb-4">
          {tarjeta.latTitle}
        </p>

        {/* Título español */}
        <h3 className="text-lg sm:text-xl font-bold text-[#f5f0e6] mb-1">
          {tarjeta.title}
        </h3>
        <p className="text-xs text-[#8a7e72] italic mb-5">{tarjeta.ref}</p>

        {/* Cita hebrea */}
        <div className="bg-[#0f0c07] rounded-xl p-4 sm:p-5 mb-5 border-r-4 border-[#d4af37]/40">
          <p className="text-right text-base sm:text-lg text-[#f5f0e6] font-serif leading-relaxed" dir="rtl">
            {tarjeta.hebrewText}
          </p>
          <p className="text-right text-sm text-[#a89b8c] mt-2 italic">
            {tarjeta.translation}
          </p>
        </div>

        {/* Análisis completo */}
        <div className="space-y-3 mb-5">
          {tarjeta.analysis.split('\n').filter((p: string) => p.trim()).map((p: string, i: number) => (
            <p key={i} className="text-sm sm:text-base text-[#d5cfc5] leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        {/* Conclusión */}
        <div className="bg-[#0f0c07]/60 rounded-xl p-4 sm:p-5 border-l-4 border-[#d4af37]/50">
          <p className="text-sm sm:text-base text-[#f5f0e6] italic font-serif leading-relaxed text-center">
            "{tarjeta.conclusion}"
          </p>
        </div>

        <p className="text-right text-[11px] text-[#8a7e72] mt-4 italic">
          {tarjeta.signature}
        </p>
      </div>
    </article>
  )
}

export default function ToraSemanal() {
  const semana = useMemo(() => getContenidoSemanal(), [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0c0a07] pb-20 pt-24 sm:pt-28">
        {/* Header */}
        <div className="bg-[#14100a] border-b border-[#d4af37]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
            <span className="inline-block text-[#d4af37] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Semana {semana.semana} · {semana.anio}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#f5f0e6] mb-3">
              Torá Semanal
            </h1>
            <p className="text-[#a89b8c] text-base sm:text-lg max-w-2xl mx-auto">
              Cada semana, la parashá correspondiente y una enseñanza de cada camino del estudio hebreo.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
          {/* ===== PARASHÁ DESTACADA ===== */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-[#d4af37]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#f5f0e6]">Parashá de la Semana</h2>
            </div>

            {semana.parasha ? (
              <div className="bg-[#1a1510] border border-[#d4af37]/25 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40" />

                <div className="text-center mb-6">
                  <p className="text-2xl sm:text-3xl font-serif text-[#d4af37] mb-1" dir="rtl">
                    {semana.parasha.hebTitle}
                  </p>
                  <p className="text-sm text-[#a89b8c] uppercase tracking-widest">
                    {semana.parasha.latTitle}
                  </p>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#f5f0e6] text-center mb-2">
                  {semana.parasha.title}
                </h3>
                <p className="text-center text-sm text-[#8a7e72] italic mb-6">{semana.parasha.ref}</p>

                <div className="bg-[#0f0c07] rounded-xl p-5 sm:p-6 mb-6 border-r-4 border-[#d4af37]">
                  <p className="text-right text-lg sm:text-xl text-[#f5f0e6] font-serif leading-relaxed" dir="rtl">
                    {semana.parasha.hebrewText}
                  </p>
                  <p className="text-right text-sm text-[#a89b8c] mt-2 italic">
                    {semana.parasha.translation}
                  </p>
                </div>

                <div className="space-y-4">
                  {semana.parasha.analysis.split('\n').filter((p: string) => p.trim()).map((p: string, i: number) => (
                    <p key={i} className="text-[#d5cfc5] leading-relaxed text-sm sm:text-base text-justify" dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>

                <div className="mt-6 bg-[#0f0c07]/60 rounded-xl p-5 border-l-2 border-[#d4af37]/40">
                  <p className="text-[#f5f0e6] italic font-serif text-base sm:text-lg text-center leading-relaxed">
                    "{semana.parasha.conclusion}"
                  </p>
                </div>

                <p className="text-center text-xs text-[#8a7e72] mt-4 italic">
                  {semana.parasha.signature}
                </p>
              </div>
            ) : (
              <div className="bg-[#1a1510] border border-[#d4af37]/20 rounded-2xl p-8 text-center">
                <AlertCircle className="w-10 h-10 text-[#d4af37] mx-auto mb-3" />
                <p className="text-[#f5f0e6] font-bold mb-1">Parashá no disponible</p>
                <p className="text-sm text-[#a89b8c]">No se encontró la tarjeta correspondiente a esta semana en la base de datos.</p>
              </div>
            )}
          </section>

          {/* ===== ENSEÑANZAS DE LA SEMANA ===== */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#f5f0e6]">Enseñanzas de la Semana</h2>
            </div>

            <div className="space-y-8">
              <TarjetaVertical tarjeta={semana.musar} tipo="musar" />
              <TarjetaVertical tarjeta={semana.middot} tipo="middot" />
              <TarjetaVertical tarjeta={semana.cabala} tipo="cabala" />
              <TarjetaVertical tarjeta={semana.festividad} tipo="festividad" />
              <TarjetaVertical tarjeta={semana.hebreo} tipo="hebreo" />
              <TarjetaVertical tarjeta={semana.halaja} tipo="halaja" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
