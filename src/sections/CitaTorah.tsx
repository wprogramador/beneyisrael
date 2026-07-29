import { useEffect, useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const citas = [
  {
    he: 'אין לך מצוה בכל המצוות כולן שהיא שקולה כנגד תלמוד תורה אלא תלמוד תורה כנגד כל המצוות כולן, שהתלמוד מביא לידי מעשה',
    es: '«No existe otra mitzvá que se iguale al estudio de la Torá. Más bien, ésta equivale al resto de las mitzvot juntas, debido a que el estudio lleva a la práctica».',
    fuente: 'Rambam · רמב״ם',
    ref: 'Mishné Torá, Hiljot Talmud Torá',
  },
  {
    he: 'הֱוֵי זָהִיר בַּמִּצְוָה קַלָּה כְבַחֲמוּרָה... וְעִסְקוֹ בַתּוֹרָה, הֱוֵי מַעֲמִיד עֲמִידַת קָבָע לְתוֹרָתֶךָ',
    es: '«Fija un tiempo regular para el estudio de la Torá; di poco y haz mucho; y recibe a cada persona con un semblante alegre».',
    fuente: 'Shammai · Pirké Avot',
    ref: 'Pirké Avot 1:15',
  },
  {
    he: 'הֲפֹךְ בָּהּ וַהֲפֹךְ בָּהּ דְּכֹלָּא בָהּ. וּבָהּ תֶּחֱזֵי, וְסִיב וּבְלֵה בָהּ, וּמִינַּהּ לָא תָּזוּעַ, שֶׁאֵין לְךָ מִדָּה טוֹבָה הֵימֶנָּה',
    es: '«Revuélvela y revuélvela, porque todo está en ella. Contémplala y envejece en ella, y no te apartes de ella, pues no hay mejor medida que ella».',
    fuente: 'Ben Bag Bag · Pirké Avot',
    ref: 'Pirké Avot 5:22',
  },
  {
    he: 'נֵר־לְרַגְלִי דְבָרֶךָ וְאוֹר לִנְתִיבָתִי',
    es: '«Lámpara es a mis pies Tu palabra, y luz para mi camino».',
    fuente: 'Tehilim · תהלים',
    ref: 'Salmo 119:105',
  },
  {
    he: 'כִּי בְּשֵׁנִים הַיּוֹשְׁבִים וְעוֹסְקִים בְּדִבְרֵי תוֹרָה, שְׁכִינָה שְׁרוּיָה בֵינֵיהֶם',
    es: '«Cuando dos personas se sientan y se ocupan en palabras de Torá, la Shejiná mora entre ellas».',
    fuente: 'Rabí Janaia ben Teradión · Pirké Avot',
    ref: 'Pirké Avot 3:2',
  },
  {
    he: 'לֹא־יָמוּשׁ סֵפֶר הַתּוֹרָה הַזֶּה מִפִּיךָ וְהָגִיתָ בּוֹ יוֹמָם וָלַיְלָה',
    es: '«No se apartará este libro de la Torá de tu boca; meditarás en él de día y de noche, para que cuides de hacer todo lo que en él está escrito».',
    fuente: 'Iehoshúa · יהושע',
    ref: 'Iehoshúa 1:8',
  },
]

export default function CitaTorah() {
  const ref = useReveal<HTMLElement>()
  const [actual, setActual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (pausado) return
    timer.current = setInterval(() => {
      setActual((a) => (a + 1) % citas.length)
    }, 8000)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [pausado])

  const ir = (i: number) => {
    setActual(((i % citas.length) + citas.length) % citas.length)
    setPausado(true)
    setTimeout(() => setPausado(false), 15000)
  }


  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #d4af37 0, transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <div className="reveal mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 text-[#d4af37]">
          <Quote size={24} strokeWidth={1.6} />
        </div>

        <div className="relative mt-8 min-h-[260px] md:min-h-[230px]">
          {citas.map((cita, i) => (
            <blockquote
              key={i}
              aria-hidden={i !== actual}
              className={`absolute inset-0 flex flex-col justify-start transition-all duration-700 ease-in-out ${
                i === actual
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-3 pointer-events-none'
              }`}
            >
              <p className="font-hebrew text-2xl md:text-3xl leading-relaxed text-[#d4af37]" dir="rtl" lang="he">
                {cita.he}
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground/85">
                {cita.es}
              </p>
              <div className="mx-auto mt-8 flex items-center justify-center gap-4 text-[#d4af37]">
                <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#d4af37]/70" />
                <p className="text-sm tracking-[0.3em] uppercase">{cita.fuente}</p>
                <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#d4af37]/70" />
              </div>
              <p className="mt-2 text-xs text-foreground/50 tracking-wide">{cita.ref}</p>
            </blockquote>
          ))}
        </div>

        {/* Controles */}
        <div className="reveal reveal-delay-2 mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() => ir(actual - 1)}
            aria-label="Cita anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/15 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2.5">
            {citas.map((_, i) => (
              <button
                key={i}
                onClick={() => ir(i)}
                aria-label={`Ir a la cita ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-400 ${
                  i === actual ? 'w-8 bg-[#d4af37]' : 'w-2.5 bg-[#d4af37]/30 hover:bg-[#d4af37]/60'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => ir(actual + 1)}
            aria-label="Siguiente cita"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/15 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
