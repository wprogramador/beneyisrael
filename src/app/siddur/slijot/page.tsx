import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seder de Slijot · Siddur Comunitario',
  description:
    'Seder completo de Slijot en tradición sefardí: Ana Bejoaj, Ashamnu, Vidui, las 13 Midot y Tefilá personal. Con hebreo original, fonética sefardí, traducción y guía de uso para el trabajo individual del alma en Elul y los Diez Días de Teshuvá.',
  alternates: { canonical: '/siddur/slijot' },
  openGraph: {
    url: '/siddur/slijot',
    title: 'Seder de Slijot · Siddur · Beit Midrash Bene Israel',
    description:
      'Seder completo de Slijot en tradición sefardí para el retorno del alma en Elul y los Diez Días de Teshuvá.',
    type: 'article',
    locale: 'es_ES',
    siteName: 'Bene Israel',
  },
}

export default function SlijotPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-10 border-b border-amber-500/10 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-100 leading-tight mb-4">
          Seder de Slijot
        </h1>
        <p className="text-amber-200/60 text-lg">
          Guía completa para el retorno del alma — Tradición Sefardí
        </p>
        <p className="text-amber-200/40 text-sm mt-2">
          Elul 5786 · Moré Imanuel Ben Efraim · Centro de Estudios Hebraicos Bene Israel
        </p>
      </header>

      {/* Aquí importa tu componente de vista o mapea las secciones directamente */}
      {/* Ejemplo con mapeo directo: */}
      {/*
      import { seccionesSlijot } from '@/data/slijot'

      {seccionesSlijot.map((seccion) => (
        <section key={seccion.id} className="mb-12">
          <h2 className="text-2xl font-bold text-amber-200 mb-2">{seccion.titulo}</h2>
          {seccion.subtitulo && (
            <p className="text-amber-200/50 mb-6">{seccion.subtitulo}</p>
          )}
          <div className="space-y-6">
            {seccion.bloques.map((bloque, i) => (
              <div key={i} className="border-l-2 border-amber-500/20 pl-4">
                <p className="text-amber-100/90 text-lg leading-relaxed font-serif" dir="rtl">
                  {bloque.hebreo}
                </p>
                <p className="text-amber-300/70 text-sm mt-1 italic">
                  {bloque.fonetica}
                </p>
                <p className="text-amber-200/80 mt-2">
                  {bloque.espanol}
                </p>
                {bloque.nota && (
                  <p className="text-amber-200/40 text-sm mt-2 italic">
                    {bloque.nota}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
      */}
    </div>
  )
}
