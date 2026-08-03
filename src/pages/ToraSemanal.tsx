import { useMemo } from 'react'
import { getContenidoSemanal } from '@/lib/tora-semanal'
import { BookOpen, Heart, Scale, Sparkles, Calendar, Languages, Gavel } from 'lucide-react'

const CATEGORY_META = {
  parasha:   { label: 'Parashá',   color: '#d4af37', icon: BookOpen },
  musar:     { label: 'Musar',     color: '#2d8a4e', icon: Heart },
  middot:    { label: 'Middot',    color: '#2a6f8f', icon: Scale },
  cabala:    { label: 'Cábala',    color: '#6a4c9c', icon: Sparkles },
  festividad:{ label: 'Festividad',color: '#a83232', icon: Calendar },
  hebreo:    { label: 'Hebreo',    color: '#c97d2b', icon: Languages },
  halaja:    { label: 'Halajá',    color: '#c0392b', icon: Gavel },
}

function TarjetaSemanal({ tarjeta, tipo }: { tarjeta: ReturnType<typeof getContenidoSemanal>['parasha']; tipo: keyof typeof CATEGORY_META }) {
  const meta = CATEGORY_META[tipo]
  const Icon = meta.icon

  return (
    <article className="relative bg-[#1a1510] border border-[#d4af37]/15 rounded-xl overflow-hidden shadow-lg hover:shadow-[#d4af37]/10 hover:-translate-y-1 transition-all duration-300">
      {/* Borde lateral */}
      <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: meta.color }} />

      {/* Badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: meta.color + '22', color: meta.color, border: `1px solid ${meta.color}44` }}>
        <Icon className="w-3 h-3" />
        {meta.label}
      </div>

      <div className="p-5 sm:p-6 pt-10">
        {/* Título hebreo */}
        <p className="text-right font-serif text-lg text-[#d4af37] mb-1" dir="rtl">
          {tarjeta.hebTitle}
        </p>
        <p className="text-right text-xs text-[#a89b8c] uppercase tracking-widest mb-3">
          {tarjeta.latTitle}
        </p>

        {/* Título español */}
        <h3 className="text-base sm:text-lg font-bold text-[#f5f0e6] mb-1 leading-snug">
          {tarjeta.title}
        </h3>
        <p className="text-xs text-[#8a7e72] italic mb-4">{tarjeta.ref}</p>

        {/* Cita hebrea */}
        <div className="bg-[#0f0c07] rounded-lg p-3 mb-4 border-r-2 border-[#d4af37]/30">
          <p className="text-right text-sm text-[#f5f0e6] font-serif leading-relaxed" dir="rtl">
            {tarjeta.hebrewText}
          </p>
          <p className="text-right text-xs text-[#a89b8c] mt-1 italic">
            {tarjeta.translation}
          </p>
        </div>

        {/* Análisis (primer párrafo) */}
        <p className="text-sm text-[#d5cfc5] leading-relaxed line-clamp-4 mb-3">
          {tarjeta.analysis.replace(/<[^>]+>/g, '').split('\n')[0]}
        </p>

        {/* Conclusión */}
        <div className="bg-[#0f0c07]/60 rounded-lg p-3 border-l-2 border-[#d4af37]/40">
          <p className="text-sm text-[#f5f0e6] italic font-serif leading-relaxed">
            "{tarjeta.conclusion}"
          </p>
        </div>

        <p className="text-right text-[10px] text-[#8a7e72] mt-3 italic">
          {tarjeta.signature}
        </p>
      </div>
    </article>
  )
}

export default function ToraSemanal() {
  const semana = useMemo(() => getContenidoSemanal(), [])

  return (
    <div className="min-h-screen bg-[#0c0a07] pb-20">
      {/* Header */}
      <div className="bg-[#14100a] border-b border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <span className="inline-block text-[#d4af37] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Semana {semana.semana} · {semana.anio}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#f5f0e6] mb-3">
            Torá Semanal
          </h1>
          <p className="text-[#a89b8c] text-base sm:text-lg max-w-2xl mx-auto">
            Cada semana, una parashá y una enseñanza de cada camino del estudio hebreo.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
        {/* ===== PARASHÁ DESTACADA ===== */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5 text-[#d4af37]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#f5f0e6]">Parashá de la Semana</h2>
          </div>

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

            <div className="max-w-3xl mx-auto bg-[#0f0c07] rounded-xl p-5 sm:p-6 mb-6 border-r-3 border-[#d4af37]">
              <p className="text-right text-lg sm:text-xl text-[#f5f0e6] font-serif leading-relaxed" dir="rtl">
                {semana.parasha.hebrewText}
              </p>
              <p className="text-right text-sm text-[#a89b8c] mt-2 italic">
                {semana.parasha.translation}
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {semana.parasha.analysis.split('\n').filter((p: string) => p.trim()).slice(0, 3).map((p: string, i: number) => (
                <p key={i} className="text-[#d5cfc5] leading-relaxed text-sm sm:text-base text-justify" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-6 bg-[#0f0c07]/60 rounded-xl p-5 border-l-2 border-[#d4af37]/40">
              <p className="text-[#f5f0e6] italic font-serif text-base sm:text-lg text-center leading-relaxed">
                "{semana.parasha.conclusion}"
              </p>
            </div>

            <p className="text-center text-xs text-[#8a7e72] mt-4 italic">
              {semana.parasha.signature}
            </p>
          </div>
        </section>

        {/* ===== ENSEÑANZAS DE LA SEMANA ===== */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#f5f0e6]">Enseñanzas de la Semana</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <TarjetaSemanal tarjeta={semana.musar} tipo="musar" />
            <TarjetaSemanal tarjeta={semana.middot} tipo="middot" />
            <TarjetaSemanal tarjeta={semana.cabala} tipo="cabala" />
            <TarjetaSemanal tarjeta={semana.festividad} tipo="festividad" />
            <TarjetaSemanal tarjeta={semana.hebreo} tipo="hebreo" />
            <TarjetaSemanal tarjeta={semana.halaja} tipo="halaja" />
          </div>
        </section>
      </div>
    </div>
  )
}
