import type { MetadataRoute } from 'next'
import { getAllArticulos } from '@/lib/articulos'
import { getTorahData } from '@/lib/torahData'
import { BOOK_SLUG } from '@/lib/torah'
import type { BookId } from '@/lib/torah'

const BASE_URL = 'https://www.beneyisrael.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const articulos = getAllArticulos()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/tora-semanal`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reflexiones`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/biblioteca`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/estudios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/siddur/kabalat-shabat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/siddur/shajarit-shabat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/donar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/moedim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/calendario`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/shabbat-horarios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nombres-hebreos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const dynamicRoutes: MetadataRoute.Sitemap = articulos.map((articulo) => ({
    url: `${BASE_URL}/estudios/${articulo.slug}`,
    lastModified: new Date(articulo.frontmatter.fecha),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const torahIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/torah`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
  const torahChapters: MetadataRoute.Sitemap = getTorahData().chapters.map((c) => ({
    url: `${BASE_URL}/torah/${BOOK_SLUG[c.libro as BookId]}/${c.capitulo}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...dynamicRoutes, ...torahIndex, ...torahChapters]
}
