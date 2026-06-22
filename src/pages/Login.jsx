import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Painel from './pages/Painel'
// As próximas telas você vai descomentando conforme for criando
// import Clientes from './pages/Clientes'
// import Mercadorias from './pages/Mercadorias'
// import Servicos from './pages/Servicos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* A Rota "/" é a primeira coisa que abre, ou seja, o Login */}
        <Route path="/" element={<Login />} />
        
        {/* Se o login der certo, o React manda o usuário para cá */}
        <Route path="/painel" element={<Painel />} />
        
        {/* <Route path="/clientes" element={<Clientes />} /> */}
        {/* <Route path="/mercadorias" element={<Mercadorias />} /> */}
        {/* <Route path="/servicos" element={<Servicos />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App