'use client'

import { useState, useMemo } from 'react'
import { Search, Share2, Copy, Check, MessageCircle, X } from 'lucide-react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { nombresHebreos, categorias } from '@/lib/nombresHebreos'

export default function NombresHebreos() {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [copiadoId, setCopiadoId] = useState<string | null>(null)

  const normalizar = (texto: string) =>
    texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[']/g, '')
      .trim()

  const filtrados = useMemo(() => {
    const termino = normalizar(busqueda)

    return nombresHebreos.filter((n) => {
      const matchCategoria =
        categoriaActiva === 'Todos' || n.categoria === categoriaActiva

      if (!termino) return matchCategoria

      const matchBusqueda =
        normalizar(n.nombre).includes(termino) ||
        normalizar(n.transliteracion).includes(termino) ||
        normalizar(n.hebreo).includes(termino) ||
        n.aliases.some((a) => normalizar(a).includes(termino))

      return matchCategoria && matchBusqueda
    })
  }, [busqueda, categoriaActiva])

  const compartirWhatsApp = (n: (typeof nombresHebreos)[0]) => {
    const texto =
      `📖 *${n.transliteracion}* (${n.nombre})\n` +
      `🔤 Hebreo: ${n.hebreo}\n` +
      `✨ Significado: ${n.significado}\n` +
      `📚 ${n.referencia}\n\n` +
      `Via Beit Midrash Bene Israel\nhttps://teques.beneyisrael.com/nombres-hebreos`
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank')
  }

  const copiarNombre = async (n: (typeof nombresHebreos)[0]) => {
    const texto = `${n.transliteracion} (${n.nombre}) — ${n.hebreo}\nSignificado: ${n.significado}\n${n.referencia}`
    try {
      await navigator.clipboard.writeText(texto)
      setCopiadoId(n.hebreo)
      setTimeout(() => setCopiadoId(null), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          {/* Encabezado */}
          <div className="text-center mb-10">
            <p
              className="text-[#d4af37] text-xs sm:text-sm tracking-[0.2em] uppercase mb-2"
              dir="rtl"
              lang="he"
            >
              שמות עבריים
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Significado de{' '}
              <span className="text-[#d4af37]">Nombres Hebreos</span>
            </h1>
            <p className="text-[#a89b8c] text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Descubre el origen bíblico y el significado espiritual de cada
              nombre. Busca en hebreo, sefardí o castellano.
            </p>
          </div>

          {/* Buscador */}
          <div className="max-w-lg mx-auto mb-6 relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d4af37]/60"
            />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar nombre... (ej: David, Mosheh, Javah, Rajel)"
              className="w-full rounded-full border border-[#d4af37]/30 bg-[#141009] pl-11 pr-10 py-3 text-sm text-foreground placeholder:text-[#a89b8c]/50 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            />
            {busqueda && (
              <button
                onClick={() => setBusqueda('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a89b8c] hover:text-[#d4af37]"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  categoriaActiva === cat
                    ? 'bg-[#d4af37] text-[#14100a]'
                    : 'border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resultados */}
          {filtrados.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#a89b8c] text-lg mb-2">
                No se encontró ningún nombre
              </p>
              <p className="text-[#a89b8c]/60 text-sm">
                Intenta con otra búsqueda o revisa la ortografía
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtrados.map((n) => (
                <article
                  key={n.hebreo}
                  className="group relative bg-[#141009] border border-[#d4af37]/20 rounded-2xl p-5 hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Badge género */}
                  <div className="flex justify-between items-start mb-3">
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${
                        n.genero === 'M'
                          ? 'bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30'
                          : 'bg-[#a83232]/15 text-[#c0392b] border border-[#a83232]/30'
                      }`}
                    >
                      {n.genero === 'M' ? 'Masculino' : 'Femenino'}
                    </span>
                    <span className="text-[11px] text-[#8a7e72]">
                      {n.referencia}
                    </span>
                  </div>

                  {/* Hebreo */}
                  <p
                    className="text-2xl font-bold text-[#d4af37] mb-1"
                    dir="rtl"
                    lang="he"
                  >
                    {n.hebreo}
                  </p>

                  {/* Nombres */}
                  <h3 className="text-lg font-bold text-foreground mb-0.5">
                    {n.transliteracion}
                  </h3>
                  <p className="text-sm text-[#a89b8c] mb-3">{n.nombre}</p>

                  {/* Significado */}
                  <p className="text-sm text-foreground/75 leading-relaxed mb-4">
                    {n.significado}
                  </p>

                  {/* Categoría */}
                  <span className="inline-block text-[10px] uppercase tracking-wider text-[#8a7e72] bg-[#0c0a07] px-2 py-1 rounded-md border border-[#d4af37]/10">
                    {n.categoria}
                  </span>

                  {/* Botones compartir (aparecen en hover) */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1.5">
                    <button
                      onClick={() => compartirWhatsApp(n)}
                      title="Compartir en WhatsApp"
                      className="p-1.5 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#14100a] transition-colors"
                    >
                      <MessageCircle size={14} />
                    </button>
                    <button
                      onClick={() => copiarNombre(n)}
                      title="Copiar"
                      className="p-1.5 rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#14100a] transition-colors"
                    >
                      {copiadoId === n.hebreo ? (
                        <Check size={14} className="text-green-500" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Contador */}
          <p className="text-center text-xs text-[#8a7e72] mt-8">
            Mostrando {filtrados.length} de {nombresHebreos.length} nombres
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}