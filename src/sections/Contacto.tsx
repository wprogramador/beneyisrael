'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { Phone, Mail, MapPin, Clock, Send, Instagram, MessageCircle } from 'lucide-react'

export default function Contacto() {
  const ref = useReveal<HTMLElement>()
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <section id="contacto" ref={ref} className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="reveal font-hebrew text-[#d4af37] text-lg tracking-wide" dir="rtl" lang="he">צור קשר</p>
          <h2 className="reveal font-hebrew text-2xl sm:text-3xl md:text-5xl font-bold mt-2">Contáctanos</h2>
          <p className="reveal text-foreground/70 mt-4 leading-relaxed">Estamos aquí para acompañarte en tu camino de retorno. Escríbenos o visítanos en Los Teques.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="reveal space-y-6">
            <div className="rounded-2xl border border-[#d4af37]/20 bg-[#141009] p-6 sm:p-8">
              <h3 className="font-hebrew text-xl font-bold text-foreground mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="shrink-0 text-[#d4af37] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Dirección</p>
                    <p className="text-sm text-foreground/70">Los Teques, Estado Miranda, Venezuela</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="shrink-0 text-[#d4af37] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-sm text-foreground/70">+58 412-4586537</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="shrink-0 text-[#d4af37] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Correo</p>
                    <p className="text-sm text-foreground/70">info@beneyisrael.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="shrink-0 text-[#d4af37] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">Horarios</p>
                    <p className="text-sm text-foreground/70">Shabbat: sexto día atardecer<br/>Estudios: Consulta el calendario</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
                <p className="text-sm text-foreground/60 mb-4">Síguenos en redes</p>
                <div className="flex gap-3">
                  <a href="https://instagram.com/beneisrael_" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#14100a] transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="https://wa.me/584124586537" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#14100a] transition-colors">
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-[#d4af37]/20 bg-[#141009] p-6 sm:p-8 space-y-5">
              <h3 className="font-hebrew text-xl font-bold text-foreground mb-2">Envíanos un mensaje</h3>
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground/80 mb-1.5">Nombre</label>
                <input id="nombre" type="text" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0c0a07] px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-[#d4af37]" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1.5">Correo electrónico</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0c0a07] px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-[#d4af37]" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground/80 mb-1.5">Mensaje</label>
                <textarea id="mensaje" required rows={4} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className="w-full rounded-lg border border-[#d4af37]/30 bg-[#0c0a07] px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-[#d4af37] resize-none" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#d4af37] px-6 py-2.5 text-sm font-semibold text-[#14100a] hover:bg-[#e9c65a] transition-colors">
                <Send size={16} /> Enviar mensaje
              </button>
              {enviado && <p className="text-sm text-[#d4af37]">¡Mensaje enviado! Te responderemos pronto.</p>}
            </form>
          </div>
        </div>

        <div className="reveal mt-16 rounded-2xl border border-[#d4af37]/20 bg-[#141009] p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0">
              <Image
                src="/images/logo-bet-midrash.png"
                alt="Logo Bet Midrash Bene Israel"
                fill
                sizes="80px"
                className="rounded-lg object-cover ring-1 ring-[#d4af37]/40"
              />
            </div>
            <div className="text-left min-w-0">
              <p className="font-hebrew text-[#d4af37] text-lg" dir="rtl" lang="he">בית מדרש בני ישראל</p>
              <p className="text-sm text-foreground/60">Bet Midrash Bene Israel — Los Teques, Venezuela</p>
            </div>
          </div>
          <p className="text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            «No te apartes de ella, para que seas prosperado en todo cuanto hagas.» — Yehoshua 1:8
          </p>
        </div>
      </div>
    </section>
  )
}