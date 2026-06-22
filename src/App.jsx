import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Painel from './pages/Painel'
import Clientes from './pages/Clientes' // 1. O arquivo precisa estar importado aqui!

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
        
        {/* 2. A rota precisa estar liberada (sem as barras de comentário) */}
        <Route path="/clientes" element={<Clientes />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App