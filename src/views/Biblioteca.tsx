'use client'

import { useState } from 'react'
import { ArrowLeft, BookOpen, BookMarked, Languages, Scroll, ExternalLink, Search, Filter, Library, BookText, Flame } from 'lucide-react'
import Link from 'next/link'

interface Recurso {
  id: string
  titulo: string
  categoria: string
  descripcion: string
  url: string
  icono: React.ReactNode
  badge: string
  badgeColor: string
  esInterno?: boolean
}

const recursos: Recurso[] = [
  {
    id: 'kabalat-shabat',
    titulo: 'Kabalat Shabat',
    categoria: 'tefila',
    descripcion: 'Recepción del Shabat completa: Hadlakat Nerot, Leja Dodi, Shalom Alejem, Kidush, Birkat haMazon. Hebreo, fonética y español.',
    url: '/siddur/kabalat-shabat',
    icono: <Flame className="size-6" />,
    badge: 'Siddur',
    badgeColor: '#d4af37',
    esInterno: true,
  },
  {
    id: 'siddur-shabat',
    titulo: 'Siddur Shajarit Shabat',
    categoria: 'tefila',
    descripcion: 'Oraciones de la mañana de Shabat en hebreo, fonética y español. Preparado por Bene Israel.',
    url: '/siddur/shajarit-shabat',
    icono: <BookOpen className="size-6" />,
    badge: 'Siddur',
    badgeColor: '#d4af37',
    esInterno: true,
  },
  {
    id: 'tanaj-he',
    titulo: 'Tanaj en Hebreo',
    categoria: 'tanaj',
    descripcion: 'Texto completo del Tanaj (Torá, Neviim, Ketuvim) en hebreo original.',
    url: 'https://www.beneyisrael.com/tanaj/t0.htm',
    icono: <BookText className="size-6" />,
    badge: 'Hebreo',
    badgeColor: '#c97d2b',
  },
  {
    id: 'tanaj-he-es',
    titulo: 'Tanaj Hebreo-Español',
    categoria: 'tanaj',
    descripcion: 'Tanaj bilingüe: texto hebreo con traducción al español lado a lado.',
    url: 'https://www.beneyisrael.com/tanajHe/',
    icono: <Languages className="size-6" />,
    badge: 'Bilingüe',
    badgeColor: '#2a6f8f',
  },
  {
    id: 'torat-emet',
    titulo: 'Torat Emet Hebreo-Español',
    categoria: 'tora',
    descripcion: 'Torá con traducción literal y comentarios. Ideal para estudio profundo.',
    url: 'https://www.beneyisrael.com/tora-emet/',
    icono: <BookOpen className="size-6" />,
    badge: 'Comentada',
    badgeColor: '#d4af37',
  },
  {
    id: 'onkelos',
    titulo: 'Torá en Arameo (Onkelos)',
    categoria: 'tora',
    descripcion: 'Traducción aramea de Onkelos sobre el texto hebreo de la Torá.',
    url: 'https://www.beneyisrael.com/onkelos/u/u0.htm',
    icono: <Scroll className="size-6" />,
    badge: 'Arameo',
    badgeColor: '#6a4c9c',
  },
  {
    id: 'tikun-qorim',
    titulo: 'Tikun Korim',
    categoria: 'tefila',
    descripcion: 'Texto corregido para lectores de la Toré (leyendo en la sinagoga).',
    url: 'https://www.beneyisrael.com/Tikun-Qorim/cp/cp0.htm',
    icono: <BookMarked className="size-6" />,
    badge: 'Lectura',
    badgeColor: '#2d8a4e',
  },
  {
    id: 'nt-delitzsch',
    titulo: 'NT Hebreo — Delitzsch',
    categoria: 'brit',
    descripcion: 'Nuevo Testamento traducido al hebreo por Franz Delitzsch (edición clásica).',
    url: 'https://beneyisrael.com/Starter/Delitzsch.html',
    icono: <BookText className="size-6" />,
    badge: 'Clásico',
    badgeColor: '#a83232',
  },
  {
    id: 'nt-moderno',
    titulo: 'NT Hebreo Moderno',
    categoria: 'brit',
    descripcion: 'Nuevo Testamento en hebreo moderno (HaBrit HaHadasha).',
    url: 'https://www.beneyisrael.com/Starter/ha-berit/',
    icono: <Languages className="size-6" />,
    badge: 'Moderno',
    badgeColor: '#2a6f8f',
  },
  {
    id: 'biblioteca-online',
    titulo: 'Biblioteca Completa en Hebreo',
    categoria: 'general',
    descripcion: 'Colección completa: Tanaj, Talmud, Cábala, Siddurim y más textos hebreos.',
    url: 'https://www.beneyisrael.com/online/',
    icono: <Library className="size-6" />,
    badge: 'Completa',
    badgeColor: '#d4af37',
  },
]

const categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'tora', label: 'Torá' },
  { id: 'tanaj', label: 'Tanaj' },
  { id: 'tefila', label: 'Tefilá' },
  { id: 'brit', label: 'Brit Hadasha' },
  { id: 'general', label: 'General' },
]

export default function Biblioteca() {
  const [filtro, setFiltro] = useState('todos')
  const [busqueda, setBusqueda] = useState('')

  const filtrados = recursos.filter((r) => {
    const matchCat = filtro === 'todos' || r.categoria === filtro
    const matchBus =
      busqueda === '' ||
      r.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return matchCat && matchBus
  })

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground">
      <header className="border-b border-[#d4af37]/20 bg-[#0c0a07]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#d4af37] hover:text-[#e9c65a] transition-colors text-sm">
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
          <span className="font-hebrew text-[#d4af37] text-sm" dir="rtl" lang="he">בית מדרש בני ישראל</span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] ring-1 ring-[#d4af37]/30">
            <Library className="size-8" />
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#f5f0e6] sm:text-4xl">
            Biblioteca Digital
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#a89b8c]">
            Recursos de estudio en hebreo, arameo y español. Textos sagrados, comentarios y herramientas
            para el estudio de la Torá y la tradición hebrea.
          </p>
        </div>

        <div className="mb-6 max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#d4af37]/50" />
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar recursos..."
            className="w-full rounded-xl border border-[#d4af37]/20 bg-[#141009] pl-10 pr-4 py-3 text-sm text-[#f5f0e6] placeholder:text-[#a89b8c]/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]/50"
          />
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltro(cat.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                filtro === cat.id
                  ? 'bg-[#d4af37] text-[#14100a]'
                  : 'bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 hover:bg-[#d4af37]/20'
              }`}
            >
              {cat.id !== 'todos' && <Filter className="size-3" />}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((recurso) => {
            const CardContent = (
              <div className="group relative overflow-hidden rounded-xl border border-[#d4af37]/15 bg-[#141009] p-6 shadow-lg shadow-black/40 transition-all hover:border-[#d4af37]/30 hover:shadow-xl hover:-translate-y-0.5">
                <span
                  className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: recurso.badgeColor + '22',
                    color: recurso.badgeColor,
                    border: `1px solid ${recurso.badgeColor}44`,
                  }}
                >
                  {recurso.badge}
                </span>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                  {recurso.icono}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#f5f0e6] group-hover:text-[#d4af37] transition-colors">
                  {recurso.titulo}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#a89b8c]">
                   {recurso.descripcion}
                </p>
                <div className="inline-flex items-center gap-2 rounded-md bg-[#d4af37]/10 px-4 py-2 text-sm font-medium text-[#d4af37] border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-colors">
                  {recurso.esInterno ? <BookOpen className="size-4" /> : <ExternalLink className="size-4" />}
                  {recurso.esInterno ? 'Abir Siddur' : 'Abrir recurso'}
                </div>
              </div>
            )

            return recurso.esInterno ? (
              <Link key={recurso.id} href={recurso.url}>
                {CardContent}
              </Link>
            ) : (
              <a key={recurso.id} href={recurso.url} target="_blank" rel="noopener noreferrer">
                {CardContent}
              </a>
            )
          })}
        </div>

        {filtrados.length === 0 && (
          <div className="text-center py-16">
            <Search className="size-10 text-[#d4af37]/30 mx-auto mb-3" />
            <p className="text-[#a89b8c]">No se encontraron recursos con ese criterio.</p>
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
