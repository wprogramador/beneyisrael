import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Moedim from './pages/Moedim'
import Calendario from './pages/Calendario'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/moedim" element={<Moedim />} />
      <Route path="/calendario" element={<Calendario />} />
    </Routes>
  )
}
