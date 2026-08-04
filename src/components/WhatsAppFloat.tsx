import { MessageCircle } from "lucide-react"

// ← REEMPLAZA CON TU NÚMERO DE WHATSAPP REAL
const WHATSAPP_NUMBER = "584124586537"

export default function WhatsAppFloat() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition-all hover:scale-110 hover:bg-green-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
      title="Escríbenos por WhatsApp"
    >
      <MessageCircle className="size-7 fill-white" />
    </a>
  )
}
