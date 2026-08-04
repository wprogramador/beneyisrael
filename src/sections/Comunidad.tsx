import { useReveal } from '@/hooks/useReveal'

export default function Comunidad() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="comunidad" ref={ref} className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="reveal font-hebrew text-[#d4af37] text-lg tracking-wide" dir="rtl" lang="he">
            קהילתנו
          </p>
          <h2 className="reveal font-hebrew text-2xl sm:text-3xl md:text-5xl font-bold mt-2">
            Nuestra <span className="gold-gradient-text">Comunidad</span>
          </h2>
          <p className="reveal text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-foreground/60 mt-3">
            Quiénes somos
          </p>
        </div>

        {/* Identidad y compromiso */}
        <div className="mt-10 sm:mt-16 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="reveal order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-[#d4af37]/30" />
              <img
                src="images/salon-estudio.jpg"
                alt="Salón de estudio de la Bet Midrash Bene Israel"
                className="relative rounded-xl shadow-2xl shadow-black/60 w-full object-cover aspect-[3/2]"
              />
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <p className="reveal text-lg md:text-xl leading-relaxed text-foreground/90">
              Nos encontramos en un tiempo crucial de <span className="text-[#d4af37]">restauración</span>, donde la
              responsabilidad de vivir conforme a la identidad hebrea es más hermosa y exigente que nunca.
            </p>
            <p className="reveal reveal-delay-1 leading-relaxed text-foreground/80">
              En nuestra sede en Los Teques nos dedicamos a cultivar un espacio de aprendizaje y comunión, donde cada
              integrante puede crecer espiritualmente y asumir su rol dentro del pueblo.
            </p>
            <p className="reveal reveal-delay-2 leading-relaxed text-foreground/80">
              Creemos firmemente en la formación integral, y por ello nuestro centro de estudios, la{' '}
              <strong className="text-[#d4af37] font-semibold">Bet Midrash Bene Israel</strong>, se enfoca en tres
              pilares fundamentales para el desarrollo de nuestra comunidad.
            </p>
            <div className="reveal reveal-delay-3 flex items-center gap-3 sm:gap-4 pt-2">
              <img
                src="images/logo-bet-midrash.png"
                alt="Logo Bet Midrash Bene Israel"
                className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-lg object-cover ring-1 ring-[#d4af37]/40"
              />
              <div className="min-w-0">
                <p className="font-hebrew text-lg sm:text-xl text-[#d4af37]" dir="rtl" lang="he">בית מדרש בני ישראל</p>
                <p className="text-xs sm:text-sm text-foreground/60">Bet Midrash Bene Israel — Centro de Estudios Hebraicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
