import { Link } from 'react-router'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { useReveal } from '@/hooks/useReveal'

const WHATSAPP_LINK =
  'https://wa.me/584124586537?text=' +
  encodeURIComponent('Shalom, deseo celebrar las Moedim con la comunidad Beit Midrash Bene Israel (Los Teques).')

const moedim = [
  {
    he: 'שבת',
    es: 'Shabat',
    fecha: 'Cada semana · viernes al atardecer hasta sábado al anochecer',
    desc: 'El día de reposo: deleite, santidad y descanso. Encendido de velas, kidush, tefilá y estudio de la Parashat Hashavúa en comunidad.',
    img: 'images/moed-shabat.jpg',
  },
  {
    he: 'פסח',
    es: 'Pésaj',
    fecha: '14–21 de Nisán',
    desc: 'La libertad de la redención de Mitsráim. El Séder, la matzá y el relato de la salida de Egipto de generación en generación.',
    img: 'images/moed-pesaj.jpg',
  },
  {
    he: 'שבועות',
    es: 'Shavuot',
    fecha: '6 de Siván',
    desc: 'La entrega de la Torá en el Sinaí. Noche de estudio (Tikún Leil Shavuot) y celebración de la alianza del Eterno con su pueblo.',
    img: 'images/hero-estudio.jpg',
  },
  {
    he: 'ראש השנה',
    es: 'Rosh HaShaná',
    fecha: '1–2 de Tishrei',
    desc: 'El inicio del año hebreo. El sonido del shofar nos llama al despertar, la teshuvá y la coronación del Eterno como Rey.',
    img: 'images/moed-shofar.jpg',
  },
  {
    he: 'יום כיפור',
    es: 'Iom Kipur',
    fecha: '10 de Tishrei',
    desc: 'El día del perdón y la expiación. Ayuno, tefilá y reconciliación: el día más sagrado del año para el retorno del alma.',
    img: 'images/moed-kipur.jpg',
  },
  {
    he: 'סוכות',
    es: 'Sucot',
    fecha: '15–21 de Tishrei',
    desc: 'La alegría de las cabañas. Moramos en la sucá bajo el cielo, agitamos el lulav y el etrog, y celebramos la provisión del Eterno.',
    img: 'images/moed-sucot.jpg',
  },
  {
    he: 'חנוכה',
    es: 'Janucá',
    fecha: '25 de Kislev – 2 de Tevet',
    desc: 'La fiesta de las luminarias. Ocho noches encendiendo la janukiá: la luz que vence a la oscuridad y la rededicación del Templo.',
    img: 'images/moed-januca.jpg',
  },
  {
    he: 'פורים',
    es: 'Purim',
    fecha: '14 de Adar',
    desc: 'La redención oculta de Ester. Lectura de la Meguilá, alegría, regalos de alimentos (mishloaj manot) y caridad a los necesitados.',
    img: 'images/moed-purim.jpg',
  },
]

export default function Moedim() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground" ref={ref}>
      <Navbar />
      <main>
        {/* Hero de la página */}
        <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #d4af37 0, transparent 45%), radial-gradient(circle at 85% 80%, #d4af37 0, transparent 45%)',
            }}
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <p className="hero-anim font-hebrew text-[#d4af37] text-xl md:text-2xl tracking-wide" dir="rtl" lang="he">
              מועדי יהוה
            </p>
            <h1 className="hero-anim hero-anim-1 font-hebrew text-4xl md:text-6xl font-bold mt-3 leading-tight">
              Las <span className="gold-gradient-text">Moedim</span> del Eterno
            </h1>
            <p className="hero-anim hero-anim-1 mt-3 text-sm tracking-[0.3em] uppercase text-foreground/60">
              Los tiempos señalados de encuentro con el Eterno
            </p>
            <p className="hero-anim hero-anim-2 mx-auto mt-6 max-w-2xl text-foreground/80 leading-relaxed">
              «Estas son las fiestas solemnes del Eterno, las santas convocaciones que proclamaréis en sus
              tiempos señalados» (Vaikrá 23:4). En la Beit Midrash Bene Israel vivimos cada moed con estudio,
              tefilá, alegría y comunidad — y tienes un lugar reservado en la mesa.
            </p>
          </div>
        </section>

        {/* Tarjetas de festividades */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moedim.map((m, i) => (
              <article
                key={m.es}
                className={`reveal ${i % 4 === 1 ? 'reveal-delay-1' : i % 4 === 2 ? 'reveal-delay-2' : i % 4 === 3 ? 'reveal-delay-3' : ''} group overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-[#141009] hover:border-[#d4af37]/60 transition-colors duration-500`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={m.img}
                    alt={`${m.es} — ${m.he}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141009] via-transparent to-transparent" />
                  <p className="absolute bottom-3 right-4 font-hebrew text-2xl text-[#d4af37] drop-shadow-lg" dir="rtl" lang="he">
                    {m.he}
                  </p>
                </div>
                <div className="p-6">
                  <h2 className="font-hebrew text-xl font-bold text-foreground">{m.es}</h2>
                  <p className="mt-1.5 text-xs tracking-[0.18em] uppercase text-[#d4af37]">{m.fecha}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Llamado a celebrar */}
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-4xl px-5">
            <div className="reveal relative overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a150d] via-[#141009] to-[#0c0a07] p-10 md:p-14 text-center">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 30%, #d4af37 0, transparent 40%), radial-gradient(circle at 80% 70%, #d4af37 0, transparent 40%)',
                }}
              />
              <p className="font-hebrew text-[#d4af37] text-xl" dir="rtl" lang="he">חג שמח</p>
              <h2 className="font-hebrew text-3xl md:text-4xl font-bold mt-3">
                Celebra con <span className="gold-gradient-text">nosotros</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/80 leading-relaxed">
                Cada moed se vive mejor en comunidad. Escríbenos y te compartimos los horarios de tefilá,
                estudio y celebración de la próxima festividad en Los Teques.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#d4af37] text-[#14100a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#e9c65a] transition-colors shadow-lg shadow-[#d4af37]/20"
                >
                  Celebra con nosotros
                </a>
                <Link
                  to="/"
                  className="w-full sm:w-auto border border-[#d4af37]/60 text-[#d4af37] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4af37]/10 transition-colors"
                >
                  Volver al inicio
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
