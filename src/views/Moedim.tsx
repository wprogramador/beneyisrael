'use client'

import { useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { MOEDIM, MOEDIM_POR_ID, type Moed } from '@/lib/moedimData'
import { useReveal } from '@/hooks/useReveal'
import {
  BookOpen, X, Share2, MessageCircle, Facebook, Twitter, Link2, Check,
  Calendar, ChevronRight, Star
} from 'lucide-react'

const DOMAIN = 'https://teques.beneyisrael.com'

/* ============================================================
   COMPARTIR
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
      try { await navigator.share(data); onClose(); return } catch {}
    }
  }, [data, onClose])

  const shareWhatsApp = useCallback(() => {
    const text = encodeURIComponent(`${data.title}\n\n${data.text}\n\n${data.url}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
    onClose()
  }, [data, onClose])

  const shareFacebook = useCallback(() => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`, '_blank')
    onClose()
  }, [data, onClose])

  const shareTwitter = useCallback(() => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${data.title} — ${data.text}`)}&url=${encodeURIComponent(data.url)}`, '_blank')
    onClose()
  }, [data, onClose])

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(data.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
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
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-sm bg-[#1a1510] border border-[#d4af37]/30 rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[#f5f0e6] font-bold text-base">Compartir</h3>
          <button onClick={onClose} className="text-[#a89b8c] hover:text-[#d4af37] transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <p className="text-sm text-[#a89b8c] mb-5 line-clamp-2">{data.title}</p>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={shareWhatsApp} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] hover:bg-[#25d366]/20 transition-colors text-sm font-medium">
            <MessageCircle className="w-4 h-4" />WhatsApp
          </button>
          <button onClick={shareFacebook} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] hover:bg-[#1877f2]/20 transition-colors text-sm font-medium">
            <Facebook className="w-4 h-4" />Facebook
          </button>
          <button onClick={shareTwitter} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#1da1f2]/10 border border-[#1da1f2]/30 text-[#1da1f2] hover:bg-[#1da1f2]/20 transition-colors text-sm font-medium">
            <Twitter className="w-4 h-4" />Twitter
          </button>
          <button onClick={copyLink} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors text-sm font-medium">
            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}{copied ? 'Copiado' : 'Copiar link'}
          </button>
        </div>
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button onClick={shareNative} className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#d4af37] text-[#14100a] hover:bg-[#e9c65a] transition-colors text-sm font-bold">
            <Share2 className="w-4 h-4" />Compartir desde el dispositivo
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
      <button onClick={() => setOpen(true)} className={`inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors rounded-lg ${small ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm font-medium'}`}>
        <Share2 className={small ? 'w-3.5 h-3.5' : 'w-4 h-4'} />Compartir
      </button>
      {open && <ShareMenu data={data} onClose={() => setOpen(false)} />}
    </>
  )
}

/* ============================================================
   MODAL DE FESTIVIDAD
   ============================================================ */
function MoedModal({ moed, onClose }: { moed: Moed; onClose: () => void }) {
  const shareData: ShareData = {
    title: `${moed.es} — ${moed.he}`,
    text: moed.breve,
    url: `${DOMAIN}/moedim#${moed.id}`,
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[50]" onClick={onClose} />
      <div className="fixed inset-4 sm:inset-8 md:inset-12 z-[55] bg-[#141009] border border-[#d4af37]/25 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden">
          <img src={moed.img} alt={moed.es} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141009] via-[#141009]/40 to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#141009]/80 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/20 flex items-center justify-center transition-colors z-10">
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${moed.origen === 'torah' ? 'bg-[#d4af37]/15 border-[#d4af37]/40 text-[#d4af37]' : 'bg-[#2d8a4e]/15 border-[#2d8a4e]/40 text-[#2d8a4e]'}`}>
                {moed.origenLabel}
              </span>
              <span className="text-[10px] text-[#a89b8c] uppercase tracking-wider">{moed.origenRef}</span>
            </div>
            <p className="font-hebrew text-2xl sm:text-3xl text-[#d4af37] mb-1" dir="rtl">{moed.he}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5f0e6]">{moed.es}</h2>
          </div>
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Fecha */}
            <div className="flex items-center gap-2 text-sm text-[#a89b8c]">
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              {moed.fecha}
            </div>

            {/* Explicación */}
            <section>
              <h3 className="text-lg font-bold text-[#f5f0e6] mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#d4af37]" />Explicación
              </h3>
              <p className="text-[#d5cfc5] leading-relaxed text-justify">{moed.explicacion}</p>
            </section>

            {/* Rituales */}
            <section>
              <h3 className="text-lg font-bold text-[#f5f0e6] mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#d4af37]" />Rituales
              </h3>
              <div className="space-y-4">
                {moed.rituales.map((r, i) => (
                  <div key={i} className="bg-[#1a1510] border border-[#d4af37]/10 rounded-xl p-4 sm:p-5">
                    <h4 className="text-sm font-bold text-[#d4af37] mb-2 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />{r.titulo}
                    </h4>
                    <p className="text-sm text-[#d5cfc5] leading-relaxed whitespace-pre-line">{r.contenido}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reflexión */}
            <section className="bg-[#1a1510] border border-[#d4af37]/15 rounded-xl p-5 sm:p-6">
              <h3 className="text-lg font-bold text-[#f5f0e6] mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#d4af37]" />Reflexión
              </h3>
              <p className="text-[#d5cfc5] leading-relaxed italic text-justify">"{moed.reflexion}"</p>
            </section>

            {/* Compartir */}
            <div className="flex justify-center pt-4">
              <ShareButton data={shareData} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ============================================================
   PÁGINA PRINCIPAL
   ============================================================ */
export default function Moedim() {
  const ref = useReveal<HTMLDivElement>()
  const [selectedMoed, setSelectedMoed] = useState<Moed | null>(null)

  const WHATSAPP_LINK =
    'https://wa.me/584124586537?text=' +
    encodeURIComponent('Shalom, deseo celebrar las Moedim con la comunidad Beit Midrash Bene Israel (Los Teques).')

  // Próxima festividad (aproximación por mes)
  const proximaMoed = useMemo(() => {
    const mes = new Date().getMonth() // 0-11
    const mapa: Record<number, string> = {
      0: 'januca', 1: 'purim', 2: 'pesaj', 3: 'pesaj', 4: 'shavuot',
      5: 'shavuot', 6: 'sucot', 7: 'rosh-hashana', 8: 'rosh-hashana',
      9: 'sucot', 10: 'januca', 11: 'januca',
    }
    return MOEDIM_POR_ID[mapa[mes] || 'shabat']
  }, [])

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground" ref={ref}>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #d4af37 0, transparent 45%), radial-gradient(circle at 85% 80%, #d4af37 0, transparent 45%)' }} />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <p className="hero-anim font-hebrew text-[#d4af37] text-xl md:text-2xl tracking-wide" dir="rtl" lang="he">מועדי יהוה</p>
            <h1 className="hero-anim hero-anim-1 font-hebrew text-4xl md:text-6xl font-bold mt-3 leading-tight">
              Las <span className="gold-gradient-text">Moedim</span> del Eterno
            </h1>
            <p className="hero-anim hero-anim-1 mt-3 text-sm tracking-[0.3em] uppercase text-foreground/60">
              Los tiempos señalados de encuentro con el Eterno
            </p>
            <p className="hero-anim hero-anim-2 mx-auto mt-6 max-w-2xl text-foreground/80 leading-relaxed">
              Estas son las fiestas solemnes del Eterno, las santas convocaciones que proclamareis en sus tiempos señalados (Vayikrá 23:4). En la Beit Midrash Bene Israel vivimos cada moed con estudio, tefilá, alegría y comunidad — y tienes un lugar reservado en la mesa.
            </p>
          </div>
        </section>

        {/* Próxima festividad */}
        {proximaMoed && (
          <section className="pb-8 md:pb-12">
            <div className="mx-auto max-w-6xl px-5">
              <div className="bg-[#1a1510] border border-[#d4af37]/25 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <img src={proximaMoed.img} alt={proximaMoed.es} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-[#d4af37]/20" />
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] mb-2">
                      Próxima festividad
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#f5f0e6]">{proximaMoed.es} <span className="text-[#d4af37] font-hebrew" dir="rtl">{proximaMoed.he}</span></h2>
                    <p className="text-sm text-[#a89b8c] mt-1">{proximaMoed.fecha}</p>
                    <p className="text-sm text-[#d5cfc5] mt-2 line-clamp-2">{proximaMoed.breve}</p>
                  </div>
                  <button
                    onClick={() => setSelectedMoed(proximaMoed)}
                    className="shrink-0 bg-[#d4af37] text-[#14100a] font-semibold px-5 py-2.5 rounded-md hover:bg-[#e9c65a] transition-colors text-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tarjetas */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOEDIM.map((m, i) => (
              <article
                key={m.es}
                className={`reveal ${i % 4 === 1 ? 'reveal-delay-1' : i % 4 === 2 ? 'reveal-delay-2' : i % 4 === 3 ? 'reveal-delay-3' : ''} group overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-[#141009] hover:border-[#d4af37]/60 transition-colors duration-500 cursor-pointer`}
                onClick={() => setSelectedMoed(m)}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={m.img} alt={`${m.es} — ${m.he}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141009] via-transparent to-transparent" />
                  <p className="absolute bottom-3 right-4 font-hebrew text-2xl text-[#d4af37] drop-shadow-lg" dir="rtl" lang="he">{m.he}</p>
                  <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${m.origen === 'torah' ? 'bg-[#d4af37]/15 border-[#d4af37]/40 text-[#d4af37]' : 'bg-[#2d8a4e]/15 border-[#2d8a4e]/40 text-[#2d8a4e]'}`}>
                    {m.origen === 'torah' ? 'Torá' : 'Tradicional'}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-hebrew text-xl font-bold text-foreground">{m.es}</h2>
                  <p className="mt-1.5 text-xs tracking-[0.18em] uppercase text-[#d4af37]">{m.fecha}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{m.breve}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Cierre */}
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-4xl px-5">
            <div className="reveal relative overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a150d] via-[#141009] to-[#0c0a07] p-10 md:p-14 text-center">
              <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #d4af37 0, transparent 40%), radial-gradient(circle at 80% 70%, #d4af37 0, transparent 40%)' }} />
              <p className="font-hebrew text-[#d4af37] text-xl" dir="rtl" lang="he">בואו ונחגוג</p>
              <h2 className="font-hebrew text-3xl md:text-4xl font-bold mt-3">Celebra con <span className="gold-gradient-text">nosotros</span></h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/80 leading-relaxed">
                Cada moed se vive mejor en comunidad. Escríbenos y te compartimos los horarios de tefilá, estudio y celebración de la próxima festividad en Los Teques.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#d4af37] text-[#14100a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#e9c65a] transition-colors shadow-lg shadow-[#d4af37]/20">
                  Celebra con nosotros
                </a>
                <Link href="/" className="w-full sm:w-auto border border-[#d4af37]/60 text-[#d4af37] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4af37]/10 transition-colors">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {selectedMoed && <MoedModal moed={selectedMoed} onClose={() => setSelectedMoed(null)} />}
    </div>
  )
}
