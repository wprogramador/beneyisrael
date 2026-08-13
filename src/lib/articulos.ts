import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articulosDir = path.join(process.cwd(), 'src/content/articulos')

export interface ArticuloFrontmatter {
  titulo: string
  fecha: string
  autor: string
  categorias: string[]
  resumen: string
  imagen?: string
  tags?: string[]
}

export interface Articulo {
  slug: string
  frontmatter: ArticuloFrontmatter
  content: string
}

export function getAllArticulos(): Articulo[] {
  if (!fs.existsSync(articulosDir)) return []

  const files = fs.readdirSync(articulosDir).filter((f) => f.endsWith('.mdx'))

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(articulosDir, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        frontmatter: data as ArticuloFrontmatter,
        content,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.fecha).getTime() -
        new Date(a.frontmatter.fecha).getTime()
    )
}

export function getArticuloBySlug(slug: string): Articulo | null {
  const fullPath = path.join(articulosDir, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data as ArticuloFrontmatter,
    content,
  }
}

export function getAllCategorias(): string[] {
  const articulos = getAllArticulos()
  const cats = new Set<string>()
  articulos.forEach((a) => {
    a.frontmatter.categorias?.forEach((c) => cats.add(c))
  })
  return Array.from(cats).sort()
}

export function getArticulosByCategoria(categoria: string): Articulo[] {
  return getAllArticulos().filter((a) =>
    a.frontmatter.categorias?.includes(categoria)
  )
}