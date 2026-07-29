import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Moedim from './pages/Moedim'
import Calendario from './pages/Calendario'
import Faq from './pages/Faq'
import Reflexiones from './pages/Reflexiones'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/moedim" element={<Moedim />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/reflexiones" element={<Reflexiones />} />
    </Routes>
  )
}
