import { useState } from 'react'
import { Heart, Wallet, CreditCard, Globe, MessageSquare, Copy, Check, Phone, QrCode, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

// ← NÚMERO DE WHATSAPP DEL MORÉ
const WHATSAPP_NUMBER = "584124586537"
// ← BINANCE ID
const BINANCE_ID = "214702179"

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-md bg-[#d4af37]/10 px-3 py-1.5 text-xs font-medium text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors border border-[#d4af37]/20 shrink-0"
      title="Copiar"
    >
      {copied ? <Check className="size-3.5 text-green-400" /> : <Copy className="size-3.5" />}
      {copied ? 'Copiado' : label}
    </button>
  )
}

function MetodoCard({
  icon,
  title,
  subtitle,
  children,
  accent,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  children: React.ReactNode
  accent: string
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#d4af37]/15 bg-[#141009] p-6 shadow-lg shadow-black/40 transition-all hover:border-[#d4af37]/30 hover:shadow-xl">
      <div className={`absolute top-0 left-0 h-1 w-full ${accent}`} />
      <div className="mb-4 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-[#f5f0e6]">{title}</h3>
          <p className="text-xs text-[#a89b8c]">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-3 text-sm text-[#d5cfc5]">{children}</div>
    </div>
  )
}

export default function Donacion() {
  const [solicitud, setSolicitud] = useState({ nombre: '', email: '', tipo: 'reflexion', mensaje: '' })

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`

  const generarWhatsAppLink = () => {
    const tipoMap: Record<string, string> = {
      reflexion: 'Reflexión sobre parashá',
      cabala: 'Tema de Cábala / Sefirot',
      musar: 'Estudio de Musar / Middot',
      hebreo: 'Clase de Hebreo / Letras',
      halaja: 'Análisis Halájico Evolutivo',
      otro: 'Otro tema',
    }
    const tipoTexto = tipoMap[solicitud.tipo] || solicitud.tipo
    const texto = `Hola, soy ${solicitud.nombre}.%0AEmail: ${solicitud.email}%0ASolicito: ${tipoTexto}%0A%0A${solicitud.mensaje}`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto).replace(/%20/g, '%20')}`
  }

  const handleEnviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!solicitud.nombre || !solicitud.email || !solicitud.mensaje) return
    const link = generarWhatsAppLink()
    window.open(link, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0c0a07]">
      {/* Navbar simple */}
      <header className="border-b border-[#d4af37]/20 bg-[#0c0a07]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#d4af37] hover:text-[#e9c65a] transition-colors text-sm">
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <span className="font-hebrew text-[#d4af37] text-sm" dir="rtl" lang="he">בית מדרש בני ישראל</span>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* ===== ENCABEZADO ===== */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] ring-1 ring-[#d4af37]/30">
            <Heart className="size-8" />
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#f5f0e6] sm:text-4xl">
            Apoya el Proyecto Torah
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#a89b8c]">
            Este espacio de estudio, reflexión y enseñanza de la Torá vive gracias al apoyo de quienes
            creen en la difusión de la sabiduría hebraica. Tu contribución nos permite seguir
            creando contenido semanal, mantener la web y llegar a más almas.
          </p>
        </div>

        {/* ===== MÉTODOS DE DONACIÓN ===== */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* PayPal */}
          <MetodoCard
            icon={<Globe className="size-5" />}
            title="PayPal"
            subtitle="Donación internacional"
            accent="bg-blue-500"
          >
            <p className="text-[#a89b8c]">
              Ideal para apoyos desde cualquier parte del mundo. Seguro, rápido y directo.
            </p>
            <div className="rounded-lg bg-[#0c0a07] border border-[#d4af37]/10 p-3 text-center">
              <img
                src="http://www.beneyisrael.com/paypalqr.PNG"
                alt="QR PayPal"
                className="mx-auto mb-2 h-32 w-32 rounded-md object-contain"
                loading="lazy"
              />
              <p className="text-xs text-[#8a7e72]">Escanea o usa el link</p>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#0c0a07] border border-[#d4af37]/10 p-3 gap-2">
              <span className="font-mono text-xs text-[#d5cfc5] truncate">paypal.me/orisraelca</span>
              <CopyButton text="https://www.paypal.com/paypalme/orisraelca" label="Copiar" />
            </div>
            <a
              href="https://www.paypal.com/paypalme/orisraelca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              <Globe className="size-4" />
              Donar por PayPal
            </a>
          </MetodoCard>

          {/* Binance */}
          <MetodoCard
            icon={<Wallet className="size-5" />}
            title="Binance Pay"
            subtitle="Crypto / QR de pago"
            accent="bg-yellow-500"
          >
            <p className="text-[#a89b8c]">
              Pagos instantáneos con cripto o saldo Binance. Sin comisiones entre usuarios.
            </p>
            <div className="rounded-lg bg-[#0c0a07] border border-[#d4af37]/10 p-3 text-center">
              <img
                src="https://www.beneyisrael.com/binanqr.PNG"
                alt="QR Binance"
                className="mx-auto mb-2 h-32 w-32 rounded-md object-contain"
                loading="lazy"
              />
              <p className="text-xs text-[#8a7e72]">Escanea con la app de Binance</p>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#0c0a07] border border-[#d4af37]/10 p-3 gap-2">
              <div className="min-w-0">
                <p className="text-xs text-[#8a7e72]">Binance ID</p>
                <p className="font-mono text-xs text-[#d5cfc5]">{BINANCE_ID}</p>
              </div>
              <CopyButton text={BINANCE_ID} label="Copiar" />
            </div>
            <a
              href="https://www.beneyisrael.com/binanqr.PNG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-yellow-950 hover:bg-yellow-400 transition-colors"
            >
              <QrCode className="size-4" />
              Ver QR de Binance
            </a>
          </MetodoCard>

          {/* Pago Móvil Venezuela */}
          <MetodoCard
            icon={<CreditCard className="size-5" />}
            title="Pago Móvil Venezuela"
            subtitle="Transferencia nacional BNC"
            accent="bg-green-600"
          >
            <p className="text-[#a89b8c]">
              Para quienes están en Venezuela y prefieren apoyar en bolívares de forma inmediata.
            </p>
            <div className="space-y-3 rounded-lg bg-[#0c0a07] border border-[#d4af37]/10 p-3">
              <div>
                <p className="text-xs text-[#8a7e72]">Banco</p>
                <p className="text-xs font-medium text-[#d5cfc5]">Banco Nacional de Crédito (BNC)</p>
              </div>
              <div className="flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs text-[#8a7e72]">Teléfono</p>
                  <p className="font-mono text-xs text-[#d5cfc5]">0412.458.65.37</p>
                </div>
                <CopyButton text="04124586537" label="Copiar" />
              </div>
              <div className="flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs text-[#8a7e72]">RIF Jurídico</p>
                  <p className="font-mono text-xs text-[#d5cfc5]">J-408904110</p>
                </div>
                <CopyButton text="408904110" label="Copiar" />
              </div>
              <div>
                <p className="text-xs text-[#8a7e72]">Razón social</p>
                <p className="text-xs font-medium text-[#d5cfc5]">OR ISRAEL</p>
              </div>
            </div>
          </MetodoCard>
        </div>

        {/* ===== MENSAJE DE AGRADECIMIENTO ===== */}
        <div className="mb-12 rounded-xl border-l-4 border-[#d4af37] bg-[#d4af37]/5 p-6">
          <p className="text-sm leading-relaxed text-[#d5cfc5] italic">
            "Cada semana dedicamos horas al estudio de la parashá, la cábala, el musar y las middot
            para traer reflexiones que iluminen la vida de nuestra comunidad. Tu apoyo no es solo una
            donación: es una <strong className="text-[#d4af37]">mitzvá de jesed</strong> que permite que la Torá siga siendo
            luz para todos. ¡Todá rabá!"
          </p>
          <p className="mt-2 text-xs font-medium text-[#a89b8c]">— Moré Imanuel ben Efraim</p>
        </div>

        {/* ===== SOLICITUDES ESPECIALES ===== */}
        <div className="rounded-xl border border-[#d4af37]/15 bg-[#141009] p-6 shadow-lg shadow-black/40 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
              <MessageSquare className="size-5" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#f5f0e6]">Solicitudes Especiales</h2>
              <p className="text-sm text-[#a89b8c]">
                ¿Necesitas una reflexión sobre una parashá específica, un tema de cábala, o material
                para tu decena? Escríbenos.
              </p>
            </div>
          </div>

          {/* → WHATSAPP DESTACADO ← */}
          <div className="mb-6 rounded-xl border border-green-500/20 bg-green-950/20 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <h3 className="flex items-center gap-2 text-base font-semibold text-green-400">
                  <Phone className="size-5" />
                  Escríbele directo al Moré por WhatsApp
                </h3>
                <p className="text-sm text-green-300/70">
                  Para solicitudes personales que requieren atención inmediata:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-green-300/70">
                  <li className="flex items-center gap-2">
                    <span className="inline-block size-1.5 rounded-full bg-green-500" />
                    <strong className="text-green-300">Tefilá:</strong> peticiones de oración, bendiciones, salud, shidujim
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block size-1.5 rounded-full bg-green-500" />
                    <strong className="text-green-300">Carta Natal Cabalística:</strong> mapa personal según la Torá y las sefirot
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block size-1.5 rounded-full bg-green-500" />
                    <strong className="text-green-300">Asesoría personalizada:</strong> estudio individual, guía espiritual, acompañamiento de decena
                  </li>
                </ul>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                <MessageSquare className="size-4" />
                Abrir WhatsApp
              </a>
            </div>
            <p className="mt-3 text-xs text-green-500/60">
              Responde lo antes posible. Si no te contesta en 24 horas, reenvía el mensaje.
            </p>
          </div>

          {/* Formulario → ahora envía a WhatsApp */}
          <div className="border-t border-[#d4af37]/10 pt-6">
            <p className="mb-4 text-sm text-[#a89b8c]">
              ¿Prefieres dejar una solicitud por escrito? Llena el formulario y te enviaremos a WhatsApp con todo listo:
            </p>

            <form onSubmit={handleEnviarWhatsApp} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#d5cfc5]">Nombre</label>
                  <input
                    required
                    type="text"
                    value={solicitud.nombre}
                    onChange={(e) => setSolicitud({ ...solicitud, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full rounded-md border border-[#d4af37]/20 bg-[#0c0a07] px-3 py-2 text-sm text-[#f5f0e6] placeholder:text-[#8a7e72] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#d5cfc5]">Correo electrónico</label>
                  <input
                    required
                    type="email"
                    value={solicitud.email}
                    onChange={(e) => setSolicitud({ ...solicitud, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full rounded-md border border-[#d4af37]/20 bg-[#0c0a07] px-3 py-2 text-sm text-[#f5f0e6] placeholder:text-[#8a7e72] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#d5cfc5]">Tipo de solicitud</label>
                <select
                  value={solicitud.tipo}
                  onChange={(e) => setSolicitud({ ...solicitud, tipo: e.target.value })}
                  className="w-full rounded-md border border-[#d4af37]/20 bg-[#0c0a07] px-3 py-2 text-sm text-[#f5f0e6] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]/50"
                >
                  <option value="reflexion">Reflexión sobre una parashá específica</option>
                  <option value="cabala">Tema de Cábala / Sefirot</option>
                  <option value="musar">Estudio de Musar / Middot</option>
                  <option value="hebreo">Clase de Hebreo / Letras</option>
                  <option value="halaja">Análisis Halájico Evolutivo</option>
                  <option value="otro">Otro tema</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#d5cfc5]">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  value={solicitud.mensaje}
                  onChange={(e) => setSolicitud({ ...solicitud, mensaje: e.target.value })}
                  placeholder="Describe tu solicitud: ¿sobre qué tema? ¿para qué fecha? ¿para tu decena, comunidad o estudio personal?"
                  className="w-full rounded-md border border-[#d4af37]/20 bg-[#0c0a07] px-3 py-2 text-sm text-[#f5f0e6] placeholder:text-[#8a7e72] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]/50"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
              >
                <MessageSquare className="size-4" />
                Enviar solicitud por WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Footer simple */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#a89b8c] hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft size={16} />
            Volver a la página principal
          </Link>
          <p className="mt-4 text-xs text-[#8a7e72]">
            © {new Date().getFullYear()} Beit Midrash Bene Israel — Los Teques, Venezuela.
          </p>
        </div>
      </div>
    </div>
  )
}
