import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Gerencie suas operações de forma intuitiva e eficiente</p>
         <span className='search-icon'>🔍</span><input type="text" className="dashboard-search" placeholder="Buscar funcionalidades..." />
         
      </div>

     

      <div className="dashboard-metrics">
       
        <div className="metric-card">
          <span className="metric-number">247</span>
          <span className="metric-label">Tutores Ativos</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">1,284</span>
          <span className="metric-label">Notas Fiscais</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">89</span>
          <span className="metric-label">Serviços Ativos</span>
        </div>
        <div className="metric-card">
          <span className="metric-number">R$ 45.8K</span>
          <span className="metric-label">Vendas do Mês</span>
        </div>
      </div>

<div className='dhd'>
   <h3>Módulos do Sistema</h3>
      <div className="dashboard-section">
        <h2><span className='gs'>📚</span> Gestão Educacional</h2>
        <hr />
        <div className="dashboard-card">
          <Link to="/cadastro">
            <div className="icon purple">👨‍🏫</div>
            <div>
              <h3>Cadastrar Tutor</h3>
              <p>Adicione novos tutores ao sistema com informações completas e credenciais</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="dashboard-section">
          <h2><span className='gs'>💰</span>Gestão Financeira</h2>
          <hr />
        <div className="dashboard-card">
          <Link to="/nota">
            <div className="icon pink">📋</div>
            <div>
              <h3>Gerar Nota Fiscal</h3>
              <p>Emita notas fiscais de forma automatizada com cálculos precisos de impostos</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="dashboard-section">
          <h2><span className='gs'>⚙️</span>Gestão de Serviços</h2>
          <hr />
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <Link to="/relatorio">
              <div className="icon blue">📊</div>
              <div>
                <h3>Relatório de Serviços</h3>
                <p>Visualize relatórios detalhados sobre performance</p>
              </div>
            </Link>
          </div>
          <div className="dashboard-card">
            <Link to="/servicos">
              <div className="icon blue">🔧</div>
              <div>
                <h3>Gerenciar Serviços</h3>
                <p>Administre todos os serviços ativos</p>
              </div>
            </Link>
          </div>
          <div className="dashboard-card">
            <Link to="/calendario">
              <div className="icon blue">📅</div>
              <div>
                <h3>Calendário de Compromissos</h3>
                <p>Organize e visualize todos os compromissos</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
          <h2><span className='gs'>🛒</span>Gestão de Vendas</h2>
          <hr />
        <div className="dashboard-card">
          <Link to="/vendas">
            <div className="icon green">📦</div>
            <div>
              <h3>Vendas de Produtos</h3>
              <p>Gerencie o catálogo de produtos, preços e acompanhe vendas</p>
              
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;







