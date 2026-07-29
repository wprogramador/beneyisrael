import { useState } from 'react'
import { Link } from 'react-router'
import { ChevronLeft, MessageCircleQuestion, Plus, Minus } from 'lucide-react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { useReveal } from '@/hooks/useReveal'

const WHATSAPP_LINK =
  'https://wa.me/584124586537?text=Shalom%2C%20tengo%20una%20pregunta%20sobre%20el%20Beit%20Midrash%20Bene%20Israel.'

const PREGUNTAS: { q: string; a: string }[] = [
  {
    q: '¿Necesito ser judío o saber hebreo para asistir?',
    a: 'Para nada. Nuestras puertas están abiertas a todos los que desean estudiar las Escrituras con sinceridad. El hebreo lo enseñamos desde cero, y muchos de nuestros estudiantes comenzaron sin saber una sola letra. Lo único que pedimos es un corazón dispuesto a aprender.',
  },
  {
    q: '¿Qué es exactamente un Beit Midrash?',
    a: 'Una "Casa de Estudio" (בית מדרש). Es el lugar tradicional donde el pueblo de Israel se reúne a estudiar la Torá, los Profetas y las Escrituras — no como clase magistral, sino en diálogo, pregunta y respuesta, como se ha hecho por siglos.',
  },
  {
    q: '¿Qué significa "Bene Israel"?',
    a: '"Hijos de Israel" (בני ישראל). Somos una comunidad que se identifica con el retorno del pueblo de Israel a sus raíces: la Torá, el Shabat, las moedim (festividades) y la esperanza del Mashiaj.',
  },
  {
    q: '¿Qué quieren decir con "Torá a la luz del Mashiaj"?',
    a: 'Creemos que las Escrituras se entienden plenamente a la luz del Mashiaj (el Mesías). Estudiamos la Torá, los Profetas y los Salmos viendo cómo todo apunta a Él, y vivimos nuestra fe en esa esperanza.',
  },
  {
    q: '¿Qué es una "halajá evolutiva y participativa"?',
    a: 'Que la forma de vivir la Torá no es un museo de reglas congeladas, sino un camino vivo que se construye en comunidad: estudiamos, dialogamos y decidimos juntos cómo aplicar la Torá hoy, sin los dogmas de la ortodoxia rabínica. Cada voz cuenta.',
  },
  {
    q: '¿Cómo son los estudios de los sábados?',
    a: 'Los sábados celebramos el Shajarit (servicio de la mañana) y luego estudiamos juntos la Parashat Hashavúa, la porción semanal de la Torá. Es nuestro momento más especial de la semana: oración, estudio y comunidad.',
  },
  {
    q: '¿Puedo llevar a mis hijos?',
    a: '¡Claro que sí! Creemos que la Torá se hereda en familia. Los niños son bienvenidos y para ellos es una hermosa forma de crecer conociendo sus raíces.',
  },
  {
    q: '¿Tiene costo? ¿Cómo me inscribo?',
    a: 'Sostenemos la casa entre todos: algunos cursos son gratuitos y otros tienen costo, y cada aporte va directo a los gastos operativos de la comunidad. Es la forma en que entre todos mantenemos abierta esta puerta. Para inscribirte, llena el formulario en línea o escríbenos por WhatsApp y te contamos las opciones disponibles.',
  },
  {
    q: '¿Puedo estudiar en línea si no vivo cerca?',
    a: 'Sí. Tenemos modalidad en línea para quienes no están en Los Teques o no pueden asistir presencialmente. Escríbenos y te contamos cómo conectarte.',
  },
]

export default function Faq() {
  const ref = useReveal<HTMLDivElement>()
  const [abierta, setAbierta] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground" ref={ref}>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #d4af37 0, transparent 45%), radial-gradient(circle at 85% 80%, #d4af37 0, transparent 45%)',
            }}
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <p className="hero-anim font-hebrew text-[#d4af37] text-xl md:text-2xl tracking-wide" dir="rtl" lang="he">
              שאלות נפוצות
            </p>
            <h1 className="hero-anim hero-anim-1 font-hebrew text-4xl md:text-6xl font-bold mt-3 leading-tight">
              Preguntas <span className="gold-gradient-text">Frecuentes</span>
            </h1>
            <p className="hero-anim hero-anim-2 mt-4 text-foreground/60 max-w-xl mx-auto">
              ¿Primera vez aquí? Estas son las preguntas que más nos hacen quienes llegan por primera vez al Beit Midrash.
            </p>
          </div>
        </section>

        {/* Acordeón */}
        <section className="mx-auto max-w-3xl px-5 pb-16">
          <div className="reveal space-y-3.5">
            {PREGUNTAS.map((item, i) => {
              const activa = abierta === i
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-colors overflow-hidden ${
                    activa
                      ? 'border-[#d4af37]/60 bg-[#1a150d]'
                      : 'border-[#d4af37]/20 bg-[#141009] hover:border-[#d4af37]/45'
                  }`}
                >
                  <button
                    onClick={() => setAbierta(activa ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-hebrew font-semibold text-base md:text-lg ${activa ? 'text-[#d4af37]' : 'text-foreground'}`}>
                      {item.q}
                    </span>
                    <span className="shrink-0 text-[#d4af37]">
                      {activa ? <Minus size={19} /> : <Plus size={19} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      activa ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-foreground/75 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Otra pregunta */}
        <section className="mx-auto max-w-3xl px-5 pb-24 md:pb-32">
          <div className="reveal relative overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a150d] to-[#0c0a07] p-8 md:p-10 text-center">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 50% 0%, #d4af37 0, transparent 55%)',
              }}
            />
            <div className="relative">
              <p className="flex items-center justify-center gap-2 text-sm tracking-[0.25em] uppercase text-[#d4af37]">
                <MessageCircleQuestion size={17} /> ¿Tienes otra pregunta?
              </p>
              <p className="mt-4 text-foreground/70 max-w-md mx-auto">
                Escríbenos con confianza. Ninguna pregunta es pequeña cuando se busca la verdad de la Torá.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block bg-[#d4af37] text-[#14100a] font-semibold px-8 py-3 rounded-full hover:bg-[#e9c65a] transition-colors"
              >
                Escríbenos por WhatsApp
              </a>
              <div className="mt-6">
                <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-[#d4af37]/80 hover:text-[#d4af37] transition-colors">
                  <ChevronLeft size={16} /> Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
