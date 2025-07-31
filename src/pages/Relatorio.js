import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Relatorio.css';

const Relatorio = () => {
  const { token } = useAuth();
  const [servicos, setServicos] = useState([]);
  const [filtroCliente, setFiltroCliente] = useState('Todos os clientes');
  const [filtroServico, setFiltroServico] = useState('Todos os serviços');
  const [dataInicial, setDataInicial] = useState('2025-07-01');
  const [dataFinal, setDataFinal] = useState('2025-07-31');

  useEffect(() => {
    if (token) {
      const notasSalvas = JSON.parse(localStorage.getItem('notasGeradas')) || [];
      setServicos(notasSalvas);
    }
  }, [token]);

  if (!token) {
    return <p className="alerta">Você precisa estar logado para ver o relatório.</p>;
  }

  const valorTotal = servicos.reduce((total, s) => total + parseFloat(s.valor), 0);
  const totalServicos = servicos.length;
  const clientesAtendidos = new Set(servicos.map(s => s.nomeCliente)).size;
  const ticketMedio = totalServicos > 0 ? valorTotal / totalServicos : 0;

  return (
    <div className="relatorio-container">
      {/* Navbar */}
      <div className='header'>
      <nav className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/cadastro">Cadastro de Tutor</Link>
        <Link to="/nota">Gerar Nota Fiscal</Link>
        <Link to="/relatorio" className="active">Relatório de Serviços</Link>
      </nav>

      <h2 className='rts'>Relatório de Serviços Prestados</h2>
</div>
      {/* Cards resumo */}
      <div className="cards-resumo-resumo">
        <div className="card-cad"> <span>Total de Serviços</span> <strong>{totalServicos}</strong> </div>
        <div className="card-cad"> <span>Receita Total</span> <strong>R$ {valorTotal.toLocaleString()}</strong> </div>
        <div className="card-cad"> <span>Clientes Atendidos</span> <strong>{clientesAtendidos}</strong> </div>
        <div className="card-cad"> <span>Ticket Médio</span> <strong>R$ {ticketMedio.toLocaleString(undefined, {minimumFractionDigits: 2})}</strong> </div>
      </div>

{/* Filtros */}
<div className="filtros">
  <div className="filter-group">
    <label className="client-filter">Cliente</label>
    <select 
      id="client-filter"
      value={filtroCliente} 
      onChange={e => setFiltroCliente(e.target.value)}
    >
      <option>Todos os clientes</option>
      {[...new Set(servicos.map(s => s.nomeCliente))].map((c, i) => (
        <option key={i}>{c}</option>
      ))}
    </select>

    <label className="service-filter">Serviços</label>
    <select 
      id="service-filter"
      value={filtroServico} 
      onChange={e => setFiltroServico(e.target.value)}
    >
      <option>Todos os serviços</option>
      {[...new Set(servicos.map(s => s.servico))].map((s, i) => (
        <option key={i}>{s}</option>
      ))}
    </select>

    <label className="data-inicial-filter">Data Inicial</label>
    <input 
      id="data-inicial-filter"
      type="date" 
      value={dataInicial} 
      onChange={e => setDataInicial(e.target.value)} 
    />

    <label className="data-final-filter">Data Final</label>
    <input 
      id="data-final-filter"
      type="date" 
      value={dataFinal} 
      onChange={e => setDataFinal(e.target.value)} 
    />

    <button className="btn-filtrar">Filtrar</button>
  </div>
</div>


      {/* Botões de exportação */}
      <div className="export-buttons">
        <button>Exportar PDF</button>
        <button>Exportar Excel</button>
      </div>

      {/* Tabela */}
      <table className="tabela">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Serviço</th>
            <th>Valor (R$)</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((s, index) => (
            <tr key={index}>
              <td>{s.nomeCliente}</td>
              <td><span className="tag-servico">{s.servico}</span></td>
              <td>R$ {parseFloat(s.valor).toLocaleString()}</td>
              <td>{s.data}</td>
              <td className="status">✔ Concluído</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginação */}
      <div className="paginacao">
        <button>← Anterior</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>Próximo →</button>
      </div>
    </div>
  );
};

export default Relatorio;
