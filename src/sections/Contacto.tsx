'use client'

import { useState } from 'react'
import { MapPin, Globe2, Clock, Send, Copy, Check, Phone } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { scrollToSection } from '@/sections/Navbar'

/* ============================================================
   DATOS DE CONTACTO — completa estos valores para activar
   los enlaces directos (WhatsApp en formato internacional,
   p. ej. "584121234567"; correo; usuario de Instagram).
   ============================================================ */
const WHATSAPP = '584124586537'
const EMAIL = '' // ej. "contacto@beneisrael.org"
const URL_CURSOS = 'https://beneyisrael.com/Teques/'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  'Shalom, deseo información sobre la Bet Midrash Bene Israel (Los Teques).'
)}`

export default function Contacto() {
  const ref = useReveal<HTMLElement>()
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [copiado, setCopiado] = useState(false)

  const textoMensaje = () =>
    `Shalom, soy ${nombre || 'un visitante'} y deseo información sobre la Bet Midrash Bene Israel (Los Teques).\n\n${mensaje}`

  const enviar = (e: React.FormEvent) => {
    e.preventDefault()
    if (WHATSAPP) {
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(textoMensaje())}`, '_blank')
    } else if (EMAIL) {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        'Consulta — Bet Midrash Bene Israel'
      )}&body=${encodeURIComponent(textoMensaje())}`
    } else {
      navigator.clipboard?.writeText(textoMensaje()).catch(() => {})
      setCopiado(true)
      setTimeout(() => setCopiado(false), 3000)
    }
  }

  return (
    <section id="contacto" ref={ref} className="relative py-16 sm:py-24 md:py-32 bg-[#100d08]">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        {/* Llamado a la acción */}
        <div className="reveal relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a150d] via-[#141009] to-[#0c0a07] p-6 sm:p-10 md:p-16 text-center">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, #d4af37 0, transparent 40%), radial-gradient(circle at 80% 70%, #d4af37 0, transparent 40%)',
            }}
          />
          <p className="font-hebrew text-[#d4af37] text-xl" dir="rtl" lang="he">בואו ונלמדה</p>
          <h2 className="font-hebrew text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Hay un lugar para ti en la <span className="gold-gradient-text">Bet Midrash Bene Israel</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-foreground/80 leading-relaxed">
            Te invitamos a unirte a nosotros en este viaje de descubrimiento y crecimiento. Ya sea de forma presencial
            en Los Teques o a través de nuestros recursos online, eres bienvenido.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#d4af37] text-[#14100a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#e9c65a] transition-colors shadow-lg shadow-[#d4af37]/20"
            >
              Contáctanos por WhatsApp
            </a>
            <a
              href={URL_CURSOS}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4af37]/30 transition-colors"
            >
              Inscríbete en nuestros cursos
            </a>
            <a
              href="#horarios"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('horarios')
              }}
              className="w-full sm:w-auto border border-[#d4af37]/60 text-[#d4af37] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4af37]/10 transition-colors"
            >
              Ver horarios de estudio
            </a>
          </div>
        </div>

        {/* Horarios de estudio */}
        <div id="horarios" className="reveal mt-14 rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a150d] to-[#100d08] p-5 sm:p-8 md:p-12 scroll-mt-32">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 text-[#d4af37]">
              <Clock size={30} strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-hebrew text-[#d4af37] text-lg" dir="rtl" lang="he">שעות הלימוד</p>
              <h3 className="font-hebrew text-2xl md:text-3xl font-bold mt-1">Horarios de Estudio</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#d4af37]/20 bg-[#0c0a07] px-6 py-5">
                  <p className="text-xs tracking-[0.25em] uppercase text-[#d4af37]">Lunes a Jueves</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">9:00 am – 6:00 pm</p>
                  <p className="mt-1 text-sm text-foreground/60">Estudio continuo en la Bet Midrash</p>
                </div>
                <div className="rounded-xl border border-[#d4af37]/20 bg-[#0c0a07] px-6 py-5">
                  <p className="text-xs tracking-[0.25em] uppercase text-[#d4af37]">Sábados</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Shajarit y estudio de la Parashat Hashavúa</p>
                  <p className="mt-1 text-sm text-foreground/60">Tefilá de la mañana y estudio de la porción semanal de la Torá</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información + formulario */}
        <div id="formulario-contacto" className="mt-16 grid md:grid-cols-2 gap-12 scroll-mt-32">
          <div className="space-y-8">
            <h3 className="reveal font-hebrew text-2xl md:text-3xl font-bold">
              Visítanos o <span className="gold-gradient-text">escríbenos</span>
            </h3>
            <ul className="space-y-6">
              <li className="reveal flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37]">
                  <MapPin size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <h4 className="font-semibold">Nuestra sede</h4>
                  <p className="text-foreground/70 text-sm mt-1">
                    Centro de Estudios Hebraicos Bene Israel
                    <br />
                    C.C. Vasconia, local L235, Planta Baja
                    <br />
                    Los Teques 1201, Estado Miranda — Venezuela
                  </p>
                </div>
              </li>
              <li className="reveal reveal-delay-1 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37]">
                  <Phone size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <h4 className="font-semibold">Teléfono / WhatsApp</h4>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/70 text-sm mt-1 hover:text-[#d4af37] transition-colors"
                  >
                    0412-4586537
                  </a>
                </div>
              </li>
              <li className="reveal reveal-delay-1 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37]">
                  <Clock size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <h4 className="font-semibold">Horarios de estudio</h4>
                  <p className="text-foreground/70 text-sm mt-1">
                    Lunes a Jueves: 9:00 am – 6:00 pm
                    <br />
                    Sábados: Shajarit y estudio de la Parashat Hashavúa
                  </p>
                </div>
              </li>
              <li className="reveal reveal-delay-2 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37]">
                  <Globe2 size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <h4 className="font-semibold">Modalidad en línea</h4>
                  <p className="text-foreground/70 text-sm mt-1">
                    Cursos y formación a distancia para hermanos en otros países y sin centro físico cercano.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={enviar} className="reveal reveal-delay-1 rounded-2xl border border-[#d4af37]/25 bg-[#141009] p-5 sm:p-7 md:p-9 space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground/80 mb-2">
                Tu nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="¿Cómo te llamas?"
                className="w-full rounded-lg border border-[#d4af37]/25 bg-[#0c0a07] px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-foreground/80 mb-2">
                Tu mensaje
              </label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={5}
                placeholder="Cuéntanos: ¿deseas estudiar presencialmente en Los Teques o en línea?"
                className="w-full rounded-lg border border-[#d4af37]/25 bg-[#0c0a07] px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#d4af37] text-[#14100a] font-semibold px-6 py-3.5 rounded-full hover:bg-[#e9c65a] transition-colors"
            >
              {copiado ? (
                <>
                  <Check size={18} /> Mensaje copiado — compártelo con nosotros
                </>
              ) : (
                <>
                  {WHATSAPP || EMAIL ? <Send size={18} /> : <Copy size={18} />}
                  {WHATSAPP ? 'Enviar por WhatsApp' : EMAIL ? 'Enviar mensaje' : 'Copiar mensaje de contacto'}
                </>
              )}
            </button>
            <p className="text-xs text-center text-foreground/50">
              {WHATSAPP || EMAIL
                ? 'Te responderemos a la brevedad, si el Eterno quiere.'
                : 'Al enviar, el mensaje se copiará para que puedas compartirlo con nosotros por tu canal preferido.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
