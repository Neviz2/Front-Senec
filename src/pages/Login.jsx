import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    
    // Futuramente, é aqui que entra a chamada para o seu backend Spring Boot.
    // Por enquanto, como o foco da implementação agora é liberar as rotas, 
    // vamos simular o acesso e mandar direto para o Painel:
    navigate('/painel');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>Senac Solutions</h2>
        <p style={{ margin: '0 0 20px 0', color: '#666' }}>Acesso ao Sistema de Gestão</p>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail corporativo</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@senac.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha</label>
            <input 
              type="password" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Entrar no Sistema
          </button>
        </form>
      </div>
    </div>
  );
}

// CSS embutido para garantir que a tela fique apresentável de imediato
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#e9ecef',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    width: '100%',
    maxWidth: '380px',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  label: {
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#444'
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '15px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#0056b3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  }
};

export default Login;