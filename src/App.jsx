import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Painel from './pages/Painel';
import Clientes from './pages/Clientes';
import Servicos from './pages/Servicos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota inicial de acesso */}
        <Route path="/" element={<Login />} />
        
        {/* Rota do painel principal após logar */}
        <Route path="/painel" element={<Painel />} />
        
        {/* Rota para o cadastro e gestão de clientes */}
        <Route path="/clientes" element={<Clientes />} />
        
        {/* Rota para a gestão de ordens de serviço (AGORA LIBERADA) */}
        <Route path="/servicos" element={<Servicos />} />
        
        {/* Deixe comentado apenas o que ainda não foi criado */}
        {/* <Route path="/mercadorias" element={<Mercadorias />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;