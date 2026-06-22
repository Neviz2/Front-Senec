import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação das páginas que você já criou
import Login from './pages/Login';
import Painel from './pages/Painel';
import Clientes from './pages/Clientes';

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
        
        {/* Você pode ir descomentando as rotas abaixo conforme for criando os arquivos na pasta pages */}
        {/* <Route path="/mercadorias" element={<Mercadorias />} /> */}
        {/* <Route path="/servicos" element={<Servicos />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;