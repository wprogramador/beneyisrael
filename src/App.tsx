import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import Moedim from './pages/Moedim'
import Calendario from './pages/Calendario'
import Faq from './pages/Faq'
import Reflexiones from './pages/Reflexiones'
import ToraSemanal from './pages/ToraSemanal'
import Donacion from './pages/Donacion'
import Biblioteca from './pages/Biblioteca'
import KabalatShabat from './pages/KabalatShabat'
import WhatsAppFloat from './components/WhatsAppFloat'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moedim" element={<Moedim />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/reflexiones" element={<Reflexiones />} />
        <Route path="/tora-semanal" element={<ToraSemanal />} />
        <Route path="/donar" element={<Donacion />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/siddur/kabalat-shabat" element={<KabalatShabat />} />
      </Routes>
      <WhatsAppFloat />
    </>
  )
}
