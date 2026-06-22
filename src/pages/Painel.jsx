import { Link } from 'react-router-dom';

function Painel() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Painel de Controle</h1>
      <p>Bem-vindo ao sistema de gestão da Assistência Técnica.</p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
        
        <Link to="/clientes" style={estiloBotao}>
           Gerenciar Clientes
        </Link>
        
        <Link to="/mercadorias" style={estiloBotao}>
           Gerenciar Mercadorias
        </Link>
        
        <Link to="/servicos" style={estiloBotao}>
           Ordens de Serviço
        </Link>

      </div>
    </div>
  );
}

const estiloBotao = {
  padding: '20px',
  backgroundColor: '#0056b3',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  textAlign: 'center',
  flex: '1',
  minWidth: '200px',
  transition: '0.3s'
};

export default Painel;