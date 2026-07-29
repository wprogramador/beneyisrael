import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Comunidad from '@/sections/Comunidad'
import CitaTorah from '@/sections/CitaTorah'
import ParashaSemana from '@/sections/ParashaSemana'
import Pilares from '@/sections/Pilares'
import Contacto from '@/sections/Contacto'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0a07] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Comunidad />
        <CitaTorah />
        <ParashaSemana />
        <Pilares />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
