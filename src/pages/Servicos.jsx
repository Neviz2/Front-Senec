import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Servicos() {
  const navigate = useNavigate();

  // Estados para armazenar os dados do formulário
  const [cliente, setCliente] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [custo, setCusto] = useState('');
  const [status, setStatus] = useState('Aberta');

  const handleSalvarOS = (e) => {
    e.preventDefault();
    
    // O POST REAL FICA AQUI (Descomente quando o Java estiver no ar)
    
    const urlDaSuaAPI = 'https://api-senac-solutions-hospedada.com/api/servicos';
    const dadosOS = { cliente, equipamento, responsavel, observacoes, custo, status };

    fetch(urlDaSuaAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosOS),
    })
    .then(response => {
      if(response.ok) {
        alert("Salvo no banco de dados em produção com sucesso!");
      }
    })
    .catch(error => console.error("Erro ao comunicar com o Java na nuvem:", error));
    

    // Aviso temporário para a apresentação
    alert('Ordem de Serviço salva com sucesso! (Simulação)');
    
    // Só depois de salvar você limpa o formulário:
    setCliente('');
    setEquipamento('');
    setResponsavel('');
    setObservacoes('');
    setCusto('');
    setStatus('Aberta');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={{ margin: 0, color: '#333' }}>Gestão de Ordens de Serviço (OS)</h2>
        <button onClick={() => navigate('/painel')} style={styles.btnVoltar}>
          Voltar ao Painel
        </button>
      </div>

      <div style={styles.card}>
        <h3 style={{ marginTop: 0, color: '#444' }}>Abrir Nova OS</h3>
        
        <form onSubmit={handleSalvarOS} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Cliente</label>
              <input 
                type="text" 
                value={cliente}
                onChange={(e) => setCliente(e.target.value)}
                placeholder="Nome ou ID do Cliente"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Equipamento</label>
              <input 
                type="text" 
                value={equipamento}
                onChange={(e) => setEquipamento(e.target.value)}
                placeholder="Ex: Notebook Dell Inspiron"
                required
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Técnico Responsável</label>
              <input 
                type="text" 
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
                placeholder="Nome do técnico"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Status Inicial</label>
              <select 
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={styles.input}
              >
                <option value="Aberta">Aberta</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Aguardando Peça">Aguardando Peça</option>
                <option value="Finalizada">Finalizada</option>
              </select>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Observações / Defeito Relatado</label>
            <textarea 
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Descreva o problema relatado pelo cliente e detalhes do equipamento..."
              required
              rows="4"
              style={{ ...styles.input, resize: 'vertical' }}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Custo Estimado (R$)</label>
            <input 
              type="number" 
              step="0.01"
              value={custo}
              onChange={(e) => setCusto(e.target.value)}
              placeholder="0.00"
              style={{ ...styles.input, maxWidth: '200px' }}
            />
          </div>

          <button type="submit" style={styles.button}>
            Salvar Ordem de Serviço
          </button>
        </form>
      </div>
    </div>
  );
}

// Estilos padronizados
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px'
  },
  row: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    minWidth: '250px'
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#444'
  },
  input: {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '15px',
    width: '100%',
    boxSizing: 'border-box'
  },
  button: {
    padding: '14px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s',
    alignSelf: 'flex-start'
  }
};

export default Servicos;