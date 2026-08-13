import { getAllArticulos, getAllCategorias } from '@/lib/articulos'
import { Calendar, User, Tag, ArrowLeft, BookOpen, Filter } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Artículos y Estudios · Bene Israel',
  description:
    'Estudios, artículos y reflexiones de la comunidad Bene Israel sobre Torá, Cábala, festividades y vida espiritual.',
}

export default function EstudiosPage() {
  const articulos = getAllArticulos()
  const categorias = getAllCategorias()

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground">
      <header className="border-b border-[#d4af37]/20 bg-[#0c0a07]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 flex h-14 items-center justify-between">
          <Link
            href="/biblioteca"
            className="flex items-center gap-2 text-[#d4af37] hover:text-[#e9c65a] transition-colors text-sm"
          >
            <ArrowLeft size={18} />
            Volver a Biblioteca
          </Link>
          <span className="font-hebrew text-[#d4af37] text-sm" dir="rtl" lang="he">
            בית מדרש בני ישראל
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-5 py-12">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] ring-1 ring-[#d4af37]/30">
            <BookOpen className="size-8" />
          </div>
          <h1 className="text-3xl font-bold text-[#f5f0e6] sm:text-4xl mb-3">
            Artículos y Estudios
          </h1>
          <p className="mx-auto max-w-2xl text-[#a89b8c]">
            Reflexiones, estudios y enseñanzas de la comunidad Bene Israel sobre
            Torá, Cábala, festividades y vida espiritual.
          </p>
        </div>

        {categorias.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Filter size={14} className="text-[#d4af37]" />
              <span className="text-xs text-[#a89b8c] uppercase tracking-wider">
                Filtrar por categoría
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categorias.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 px-4 py-1.5 text-xs text-[#d4af37] hover:bg-[#d4af37]/20 transition-colors cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articulos.map((art) => (
            <Link key={art.slug} href={`/estudios/${art.slug}`}>
              <article className="group h-full rounded-xl border border-[#d4af37]/15 bg-[#141009] p-6 shadow-lg shadow-black/40 transition-all hover:border-[#d4af37]/30 hover:-translate-y-0.5">
                <div className="mb-3 flex items-center gap-3 text-xs text-[#a89b8c]">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(art.frontmatter.fecha).toLocaleDateString('es-VE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {art.frontmatter.autor}
                  </span>
                </div>

                <h2 className="mb-2 text-lg font-semibold text-[#f5f0e6] group-hover:text-[#d4af37] transition-colors line-clamp-2">
                  {art.frontmatter.titulo}
                </h2>

                <p className="mb-4 text-sm leading-relaxed text-[#a89b8c] line-clamp-3">
                  {art.frontmatter.resumen}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <Tag size={12} className="text-[#d4af37]" />
                  {art.frontmatter.categorias?.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs text-[#d4af37]/80 bg-[#d4af37]/10 px-2 py-0.5 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {articulos.length === 0 && (
          <div className="text-center py-16 text-[#a89b8c]">
            <BookOpen className="size-10 mx-auto mb-3 text-[#d4af37]/30" />
            <p>Aún no hay artículos publicados.</p>
          </div>
        )}

        <div className="mt-16 text-center border-t border-[#d4af37]/10 pt-8">
          <p className="text-xs text-[#8a7e72]">
            © {new Date().getFullYear()} Beit Midrash Bene Israel — Los Teques, Venezuela
          </p>
        </div>
      </div>
    </div>
  )
}