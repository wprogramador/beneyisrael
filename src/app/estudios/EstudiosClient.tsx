'use client'

import { useState, useMemo } from 'react'
import {
  Calendar,
  User,
  Tag,
  ArrowLeft,
  BookOpen,
  Filter,
  Search,
  X,
} from 'lucide-react'
import Link from 'next/link'

interface Articulo {
  slug: string
  frontmatter: {
    titulo: string
    resumen: string
    fecha: string
    autor: string
    categorias?: string[]
  }
}

interface EstudiosClientProps {
  articulos: Articulo[]
  categorias: string[]
}

export default function EstudiosClient({
  articulos,
  categorias,
}: EstudiosClientProps) {
  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null)
  const [busqueda, setBusqueda] = useState('')

  const articulosFiltrados = useMemo(() => {
    return articulos.filter((art) => {
      const coincideCategoria =
        !categoriaActiva ||
        art.frontmatter.categorias?.includes(categoriaActiva)

      const termino = busqueda.toLowerCase().trim()
      const coincideBusqueda =
        !termino ||
        art.frontmatter.titulo.toLowerCase().includes(termino) ||
        art.frontmatter.resumen.toLowerCase().includes(termino) ||
        art.frontmatter.autor.toLowerCase().includes(termino) ||
        art.frontmatter.categorias?.some((c) =>
          c.toLowerCase().includes(termino)
        )

      return coincideCategoria && coincideBusqueda
    })
  }, [articulos, categoriaActiva, busqueda])

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
          <span
            className="font-hebrew text-[#d4af37] text-sm"
            dir="rtl"
            lang="he"
          >
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

        {/* Búsqueda */}
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a89b8c]"
            />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full rounded-full border border-[#d4af37]/20 bg-[#141009] py-2.5 pl-10 pr-10 text-sm text-[#f5f0e6] placeholder:text-[#a89b8c]/60 focus:border-[#d4af37]/50 focus:outline-none focus:ring-1 focus:ring-[#d4af37]/20 transition-colors"
            />
            {busqueda && (
              <button
                onClick={() => setBusqueda('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89b8c] hover:text-[#f5f0e6] transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filtros por categoría */}
        {categorias.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Filter size={14} className="text-[#d4af37]" />
              <span className="text-xs text-[#a89b8c] uppercase tracking-wider">
                Filtrar por categoría
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setCategoriaActiva(null)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  !categoriaActiva
                    ? 'bg-[#d4af37]/20 border-[#d4af37]/40 text-[#d4af37]'
                    : 'bg-[#d4af37]/10 border-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/20'
                }`}
              >
                Todos
              </button>
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setCategoriaActiva(
                      categoriaActiva === cat ? null : cat
                    )
                  }
                  className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                    categoriaActiva === cat
                      ? 'bg-[#d4af37]/20 border-[#d4af37]/40 text-[#d4af37]'
                      : 'bg-[#d4af37]/10 border-[#d4af37]/20 text-[#d4af37] hover:bg-[#d4af37]/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Resultados */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articulosFiltrados.map((art) => (
            <Link key={art.slug} href={`/estudios/${art.slug}`}>
              <article className="group h-full rounded-xl border border-[#d4af37]/15 bg-[#141009] p-6 shadow-lg shadow-black/40 transition-all hover:border-[#d4af37]/30 hover:-translate-y-0.5">
                <div className="mb-3 flex items-center gap-3 text-xs text-[#a89b8c]">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(art.frontmatter.fecha).toLocaleDateString(
                      'es-VE',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
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

        {articulosFiltrados.length === 0 && (
          <div className="text-center py-16 text-[#a89b8c]">
            <BookOpen className="size-10 mx-auto mb-3 text-[#d4af37]/30" />
            <p>
              {articulos.length === 0
                ? 'Aún no hay artículos publicados.'
                : 'No se encontraron artículos que coincidan con tu búsqueda.'}
            </p>
            {(busqueda || categoriaActiva) && (
              <button
                onClick={() => {
                  setBusqueda('')
                  setCategoriaActiva(null)
                }}
                className="mt-4 text-sm text-[#d4af37] hover:text-[#e9c65a] transition-colors underline underline-offset-4"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        )}

        <div className="mt-16 text-center border-t border-[#d4af37]/10 pt-8">
          <p className="text-xs text-[#8a7e72]">
            © {new Date().getFullYear()} Beit Midrash Bene Israel — Los Teques,
            Venezuela
          </p>
        </div>
      </div>
    </div>
  )
}
