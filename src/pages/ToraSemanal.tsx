import { useMemo, useState, useCallback } from 'react'
import { getContenidoSemanal } from '@/lib/tora-semanal'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'

const DOMAIN = 'https://teques.beneyisrael.com'
import {
  BookOpen, Heart, Scale, Sparkles, Calendar, Languages, Gavel,
  AlertCircle, Share2, X, MessageCircle, Facebook, Twitter, Link2, Check
} from 'lucide-react'

const CATEGORY_META = {
  parasha:   { label: 'Parashá',   color: '#d4af37', icon: BookOpen },
  musar:     { label: 'Musar',     color: '#2d8a4e', icon: Heart },
  middot:    { label: 'Middot',    color: '#2a6f8f', icon: Scale },
  cabala:    { label: 'Cábala',    color: '#6a4c9c', icon: Sparkles },
  festividad:{ label: 'Festividad',color: '#a83232', icon: Calendar },
  hebreo:    { label: 'Hebreo',    color: '#c97d2b', icon: Languages },
  halaja:    { label: 'Halajá',    color: '#c0392b', icon: Gavel },
}

/* ============================================================
   COMPONENTE: Botón de Compartir
   ============================================================ */
interface ShareData {
  title: string
  text: string
  url: string
}

function ShareMenu({ data, onClose }: { data: ShareData; onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  const shareNative = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share(data)
        onClose()
        return
      } catch {
        // usuario canceló, continuar con fallback
      }
    }
  }, [data, onClose])

  const shareWhatsApp = useCallback(() => {
    const text = encodeURIComponent(`${data.title}\n\n${data.text}\n\n${data.url}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
    onClose()
  }, [data, onClose])

  const shareFacebook = useCallback(() => {
    const url = encodeURIComponent(data.url)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
    onClose()
  }, [data, onClose])

  const shareTwitter = useCallback(() => {
    const text = encodeURIComponent(`${data.title} — ${data.text}`)
    const url = encodeURIComponent(data.url)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
    onClose()
  }, [data, onClose])

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(data.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = data.url
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [data.url])

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={onClose} />

      {/* Menú */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-sm bg-[#1a1510] border border-[#d4af37]/30 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[#f5f0e6] font-bold text-base">Compartir</h3>
          <button onClick={onClose} className="text-[#a89b8c] hover:text-[#d4af37] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-[#a89b8c] mb-5 line-clamp-2">{data.title}</p>

        <div className="grid grid-cols-2 gap-3">
          {/* WhatsApp */}
          <button
            onClick={shareWhatsApp}
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] hover:bg-[#25d366]/20 transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>

          {/* Facebook */}
          <button
            onClick={shareFacebook}
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] hover:bg-[#1877f2]/20 transition-colors text-sm font-medium"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </button>

          {/* Twitter */}
          <button
            onClick={shareTwitter}
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] hover:bg-[#1da1f2]/20 transition-colors text-sm font-medium"
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </button>

          {/* Copiar link */}
          <button
            onClick={copyLink}
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors text-sm font-medium"
          >
            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
            {copied ? 'Copiado' : 'Copiar link'}
          </button>
        </div>

        {/* Compartir nativo (solo si está disponible) */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            onClick={shareNative}
            className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#d4af37] text-[#14100a] hover:bg-[#e9c65a] transition-colors text-sm font-bold"
          >
            <Share2 className="w-4 h-4" />
            Compartir desde el dispositivo
          </button>
        )}
      </div>
    </>
  )
}

function ShareButton({ data, small = false }: { data: ShareData; small?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`
          inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30
          text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors rounded-lg
          ${small ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm font-medium'}
        `}
      >
        <Share2 className={small ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
        Compartir
      </button>
      {open && <ShareMenu data={data} onClose={() => setOpen(false)} />}
    </>
  )
}

/* ============================================================
   COMPONENTE: Tarjeta Vertical
   ============================================================ */
function TarjetaVertical({ tarjeta, tipo }: { tarjeta: NonNullable<ReturnType<typeof getContenidoSemanal>['parasha']>; tipo: keyof typeof CATEGORY_META }) {
  const meta = CATEGORY_META[tipo]
  const Icon = meta.icon

  const shareData: ShareData = {
    title: `${tarjeta.title} — ${meta.label}`,
    text: `${tarjeta.hebrewText}\n${tarjeta.translation}\n\n${tarjeta.conclusion}`,
    url: `${DOMAIN}/tora-semanal`,
  }

  return (
    <article className="relative bg-[#1a1510] border border-[#d4af37]/15 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#d4af37]/10 transition-all duration-300">
      <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: meta.color }} />

      {/* FIX: flex-wrap y z-10 para evitar que se monten */}
      <div className="absolute top-4 right-4 flex items-center gap-2 flex-wrap justify-end z-10 max-w-[70%]">
        <ShareButton data={shareData} small />
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0" style={{ backgroundColor: meta.color + '22', color: meta.color, border: `1px solid ${meta.color}44` }}>
          <Icon className="w-3.5 h-3.5" />
          {meta.label}
        </span>
      </div>

      {/* FIX: pt-14 aumentado a pt-20 para dar más espacio a los botones */}
      <div className="p-6 sm:p-8 pt-20">
        <p className="text-right font-serif text-xl sm:text-2xl text-[#d4af37] mb-1" dir="rtl">
          {tarjeta.hebTitle}
        </p>
        <p className="text-right text-xs text-[#a89b8c] uppercase tracking-widest mb-4">
          {tarjeta.latTitle}
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-[#f5f0e6] mb-1">
          {tarjeta.title}
        </h3>
        <p className="text-xs text-[#8a7e72] italic mb-5">{tarjeta.ref}</p>

        <div className="bg-[#0f0c07] rounded-xl p-4 sm:p-5 mb-5 border-r-4 border-[#d4af37]/40">
          <p className="text-right text-base sm:text-lg text-[#f5f0e6] font-serif leading-relaxed" dir="rtl">
            {tarjeta.hebrewText}
          </p>
          <p className="text-right text-sm text-[#a89b8c] mt-2 italic">
            {tarjeta.translation}
          </p>
        </div>

        <div className="space-y-3 mb-5">
          {tarjeta.analysis.split('\n').filter((p: string) => p.trim()).map((p: string, i: number) => (
            <p key={i} className="text-sm sm:text-base text-[#d5cfc5] leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

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

/* ============================================================
   PÁGINA PRINCIPAL
   ============================================================ */
export default function ToraSemanal() {
  const semana = useMemo(() => getContenidoSemanal(), [])

  const shareSemanaData: ShareData = {
    title: `Torá Semanal — Semana ${semana.semana} · ${semana.anio}`,
    text: semana.parasha
      ? `Parashá ${semana.parasha.title}: "${semana.parasha.conclusion}"`
      : 'Enseñanzas semanales de Torá, Musar, Cábala y más.',
    url: `${DOMAIN}/tora-semanal`,
  }

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
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#d4af37]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#f5f0e6]">Parashá de la Semana</h2>
              </div>
              {semana.parasha && (
                <ShareButton
                  data={{
                    title: `Parashá ${semana.parasha.title} — Torá Semanal`,
                    text: `${semana.parasha.hebrewText}\n${semana.parasha.translation}\n\n${semana.parasha.conclusion}`,
                    url: `${DOMAIN}/tora-semanal`,
                  }}
                />
              )}
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

          {/* ===== COMPARTIR TODA LA SEMANA ===== */}
          <section className="bg-[#1a1510] border border-[#d4af37]/20 rounded-2xl p-6 sm:p-8 text-center">
            <Share2 className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#f5f0e6] mb-2">Compartir esta semana</h3>
            <p className="text-sm text-[#a89b8c] mb-4 max-w-md mx-auto">
              Invita a otros a estudiar la Torá de esta semana. Comparte el enlace con tu comunidad.
            </p>
            <ShareButton data={shareSemanaData} />
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
