'use client'

import { useState } from 'react'
import {
  Flame,
  BookOpen,
  Moon,
  Heart,
  BookText,
  ExternalLink,
  Search,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

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
  botonTexto?: string
}

const recursos: Recurso[] = [
  {
    id: 'kabalat-shabat',
    titulo: 'Kabalat Shabat',
    categoria: 'tefila',
    descripcion:
      'Siddur completo para la noche de Shabat con Leja Dodi, Bendiciones, Kidush, Zemirot y más.',
    url: '/siddur/kabalat-shabat',
    icono: <Flame className="size-6" />,
    badge: 'Siddur',
    badgeColor: '#d4af37',
    esInterno: true,
    botonTexto: 'Abrir Siddur',
  },
  {
    id: 'siddur-shajarit',
    titulo: 'Siddur Shajarit Shabat',
    categoria: 'tefila',
    descripcion:
      'Orden de la oración matutina de Shabat con todas las bendiciones, lecturas y plegarias.',
    url: '/siddur/shajarit',
    icono: <BookOpen className="size-6" />,
    badge: 'Siddur',
    badgeColor: '#d4af37',
    esInterno: true,
    botonTexto: 'Abrir Siddur',
  },
  {
    id: 'seder-rosh-jodesh',
    titulo: 'Seder Rosh Jodesh',
    categoria: 'tefila',
    descripcion:
      'Orden de la noche de Rosh Jodesh con bendiciones, plegarias y lecturas especiales.',
    url: '/siddur/rosh-jodesh',
    icono: <Moon className="size-6" />,
    badge: 'Siddur',
    badgeColor: '#d4af37',
    esInterno: true,
    botonTexto: 'Abrir Siddur',
  },
  {
    id: 'seder-slijot',
    titulo: 'Seder de Slijot',
    categoria: 'tefila',
    descripcion:
      'Seder completo de Slijot en tradición sefardí: Ana Bejoaj, Ashamnu, Vidui, las 13 Midot y Tefilá personal. Con hebreo original, fonética sefardí, traducción y guía de uso para Elul y los Diez Días de Teshuvá.',
    url: '/siddur/slijot',
    icono: <Heart className="size-6" />,
    badge: 'Siddur',
    badgeColor: '#d4af37',
    esInterno: true,
    botonTexto: 'Abrir Siddur',
  },
  {
    id: 'articulos-estudios',
    titulo: 'Artículos y Estudios',
    categoria: 'estudio',
    descripcion:
      'Colección de artículos sobre Torá, Cábala, Halajá Evolutiva y espiritualidad judía.',
    url: '/estudios',
    icono: <BookText className="size-6" />,
    badge: 'Estudios',
    badgeColor: '#d4af37',
    esInterno: true,
    botonTexto: 'Ver Artículos',
  },
]

const categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'tefila', label: 'Tefilá' },
  { id: 'estudio', label: 'Estudio' },
  { id: 'halaja', label: 'Halajá' },
]

export default function Biblioteca() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const [recursoSeleccionado, setRecursoSeleccionado] =
    useState<Recurso | null>(null)

  const recursosFiltrados = recursos.filter((recurso) => {
    const coincideCategoria =
      categoriaActiva === 'todos' || recurso.categoria === categoriaActiva
    const coincideBusqueda =
      recurso.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      recurso.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-4">
            Biblioteca
          </h1>
          <p className="text-lg text-[#a8a29e] max-w-2xl mx-auto">
            Recursos de estudio, textos litúrgicos y materiales para profundizar
            en la Torá, la Cábala y la espiritualidad judía.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-[#a8a29e]" />
            <Input
              type="text"
              placeholder="Buscar recursos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="pl-10 bg-[#1c1917] border-[#292524] text-[#e7e5e4] placeholder:text-[#78716c] focus:border-[#d4af37] focus:ring-[#d4af37]/20"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaActiva(categoria.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                categoriaActiva === categoria.id
                  ? 'bg-[#d4af37] text-[#0a0908]'
                  : 'bg-[#1c1917] text-[#a8a29e] hover:bg-[#292524] hover:text-[#e7e5e4]'
              }`}
            >
              {categoria.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursosFiltrados.map((recurso) => (
            <div
              key={recurso.id}
              className="group relative bg-[#1c1917] border border-[#292524] rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-lg bg-[#0a0908] text-[#d4af37]"
                  style={{ color: recurso.badgeColor }}
                >
                  {recurso.icono}
                </div>
                <span
                  className="px-2 py-1 rounded-full text-xs font-medium bg-[#0a0908]"
                  style={{ color: recurso.badgeColor }}
                >
                  {recurso.badge}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#e7e5e4] mb-2 group-hover:text-[#d4af37] transition-colors">
                {recurso.titulo}
              </h3>

              <p className="text-[#a8a29e] text-sm mb-6 leading-relaxed">
                {recurso.descripcion}
              </p>

              <div className="flex gap-2">
                {recurso.esInterno ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/50"
                    onClick={() => setRecursoSeleccionado(recurso)}
                  >
                    {recurso.botonTexto || 'Abrir'}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/50"
                    asChild
                  >
                    <a
                      href={recurso.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-4 mr-2" />
                      {recurso.botonTexto || 'Visitar'}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {recursosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <Search className="size-12 text-[#44403c] mx-auto mb-4" />
            <p className="text-[#a8a29e] text-lg">
              No se encontraron recursos que coincidan con tu búsqueda.
            </p>
            <Button
              variant="outline"
              className="mt-4 border-[#44403c] text-[#a8a29e] hover:bg-[#292524]"
              onClick={() => {
                setBusqueda('')
                setCategoriaActiva('todos')
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>

      <Dialog
        open={!!recursoSeleccionado}
        onOpenChange={() => setRecursoSeleccionado(null)}
      >
        <DialogContent className="bg-[#1c1917] border-[#292524] text-[#e7e5e4] max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#d4af37] flex items-center gap-3">
              {recursoSeleccionado?.icono}
              {recursoSeleccionado?.titulo}
            </DialogTitle>
            <DialogDescription className="text-[#a8a29e]">
              {recursoSeleccionado?.descripcion}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium bg-[#0a0908]"
                style={{ color: recursoSeleccionado?.badgeColor }}
              >
                {recursoSeleccionado?.badge}
              </span>
            </div>

            <div className="bg-[#0a0908] rounded-lg p-4 border border-[#292524]">
              <p className="text-sm text-[#a8a29e] mb-2">Enlace:</p>
              <code className="text-sm text-[#d4af37] break-all">
                {recursoSeleccionado?.url}
              </code>
            </div>

            <div className="flex gap-3">
              <Button
                className="bg-[#d4af37] text-[#0a0908] hover:bg-[#b8941f]"
                onClick={() => {
                  if (recursoSeleccionado) {
                    window.location.href = recursoSeleccionado.url
                  }
                }}
              >
                {recursoSeleccionado?.botonTexto || 'Abrir Recurso'}
              </Button>

              <Button
                variant="outline"
                className="border-[#44403c] text-[#a8a29e] hover:bg-[#292524]"
                onClick={() => setRecursoSeleccionado(null)}
              >
                Cerrar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
