import { useNavigate } from 'react-router-dom';

function Clientes() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={{ margin: 0, color: '#333' }}>Gestão de Clientes</h2>
        <button onClick={() => navigate('/painel')} style={styles.btnVoltar}>
          Voltar ao Painel
        </button>
      </div>

      <div style={styles.card}>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Módulo de cadastro e listagem de clientes.
        </p>
        
        {/* Futuramente você pode colocar o seu formulário de cadastro aqui */}
        <div style={styles.placeholderBox}>
          <p>Tabela de clientes em desenvolvimento...</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#e9ecef',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  btnVoltar: {
    padding: '10px 16px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  placeholderBox: {
    border: '2px dashed #ccc',
    padding: '40px',
    textAlign: 'center',
    color: '#999',
    borderRadius: '4px',
    backgroundColor: '#fafafa'
  }
};

// O EXPORT DEFAULT QUE A VERCEL ESTAVA PEDINDO:
export default Clientes;