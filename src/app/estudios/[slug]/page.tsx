import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllArticulos, getArticuloBySlug } from '@/lib/articulos'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  const articulos = getAllArticulos()
  return articulos.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const articulo = getArticuloBySlug(slug)
  if (!articulo) return { title: 'No encontrado' }
  return {
    title: `${articulo.frontmatter.titulo} · Bene Israel`,
    description: articulo.frontmatter.resumen,
  }
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const articulo = getArticuloBySlug(slug)
  if (!articulo) notFound()

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground">
      <header className="border-b border-[#d4af37]/20 bg-[#0c0a07]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 flex h-14 items-center justify-between">
          <Link
            href="/estudios"
            className="flex items-center gap-2 text-[#d4af37] hover:text-[#e9c65a] transition-colors text-sm"
          >
            <ArrowLeft size={18} />
            Volver a Estudios
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

      <article className="mx-auto max-w-3xl px-4 sm:px-5 py-12">
        <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-[#a89b8c]">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(articulo.frontmatter.fecha).toLocaleDateString('es-VE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} />
            {articulo.frontmatter.autor}
          </span>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {articulo.frontmatter.categorias?.map((cat) => (
            <span
              key={cat}
              className="flex items-center gap-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 px-3 py-1 text-xs text-[#d4af37]"
            >
              <Tag size={10} />
              {cat}
            </span>
          ))}
        </div>

        <h1 className="mb-8 text-3xl sm:text-4xl font-bold text-[#f5f0e6] leading-tight">
          {articulo.frontmatter.titulo}
        </h1>

        <div className="prose prose-invert prose-gold max-w-none">
          <MDXRemote source={articulo.content} />
        </div>

        <div className="mt-16 border-t border-[#d4af37]/10 pt-8 text-center">
          <p className="text-xs text-[#8a7e72]">
            © {new Date().getFullYear()} Centro de Estudios Hebraicos Bene
            Israel — Los Teques, Venezuela
          </p>
          <p className="mt-1 text-xs text-[#8a7e72]/70">
            Uso libre para estudio y difusión. No para venta.
          </p>
        </div>
      </article>
    </div>
  )
}