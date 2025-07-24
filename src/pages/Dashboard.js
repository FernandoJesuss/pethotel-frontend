// import { Link } from 'react-router-dom';
// import '../styles/Dashboard.css';

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <h1 className="dashboard-title">Dashboard</h1>
//       <ul className="dashboard-menu">
//         <li><Link to="/cadastro">Cadastrar Tutor</Link></li>
//         <li><Link to="/nota">Gerar Nota Fiscal</Link></li>
//         <li><Link to="/relatorio">Relatório de Serviços</Link></li>
//         <li><Link to="/servicos">Gerenciar Serviços</Link></li>
//          <li><Link to="/calendario">Calendario de Compromissos</Link></li>
//           <li><Link to="/Vendas">Vendas de Produtos</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;






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
                <p>Visualize relatórios detalhados sobre performance e métricas dos serviços</p>
              </div>
            </Link>
          </div>
          <div className="dashboard-card">
            <Link to="/servicos">
              <div className="icon blue">🔧</div>
              <div>
                <h3>Gerenciar Serviços</h3>
                <p>Administre todos os serviços ativos, edite informações e status</p>
              </div>
            </Link>
          </div>
          <div className="dashboard-card">
            <Link to="/calendario">
              <div className="icon blue">📅</div>
              <div>
                <h3>Calendário de Compromissos</h3>
                <p>Organize e visualize todos os compromissos e agendamentos</p>
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









// import React from 'react';
// import '../styles/Dashboard.css';

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Cabeçalho com título e campo de busca */}
//       <div className="dashboard-header">
//         <h1>Bem-vindo ao Painel</h1>
//         <p>Gerencie todos os módulos do sistema por aqui.</p>
//         <input type="text" placeholder="Pesquisar módulo..." />
//       </div>

//       {/* Métricas principais */}
//       <div className="dashboard-metrics">
//         <div className="metric-card">
//           <h2>38</h2>
//           <p>Tutores Cadastrados</p>
//         </div>
//         <div className="metric-card">
//           <h2>62</h2>
//           <p>Animais Ativos</p>
//         </div>
//         <div className="metric-card">
//           <h2>124</h2>
//           <p>Serviços Realizados</p>
//         </div>
//         <div className="metric-card">
//           <h2>R$ 8.950</h2>
//           <p>Receita Total</p>
//         </div>
//       </div>

//       {/* Seção: Módulos Principais */}
//       <div className="dashboard-section">
//         <h2 className="section-title">Módulos Principais</h2>
//         <div className="submodule">
//           <div className="module-card">
//             <div className="module-card-icon" />
//             <div className="module-card-content">
//               <h4>Cadastro de Tutor</h4>
//               <p>Registrar novos responsáveis</p>
//             </div>
//           </div>

//           <div className="module-card">
//             <div className="module-card-icon" />
//             <div className="module-card-content">
//               <h4>Cadastro de Animal</h4>
//               <p>Adicionar pets ao sistema</p>
//             </div>
//           </div>

//           <div className="module-card">
//             <div className="module-card-icon" />
//             <div className="module-card-content">
//               <h4>Agenda</h4>
//               <p>Gerenciar compromissos</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Seção: Relatórios e Vendas */}
//       <div className="dashboard-section">
//         <h2 className="section-title">Relatórios & Vendas</h2>
//         <div className="submodule">
//           <div className="module-card">
//             <div className="module-card-icon" />
//             <div className="module-card-content">
//               <h4>Relatório de Serviços</h4>
//               <p>Detalhes e histórico</p>
//             </div>
//           </div>

//           <div className="module-card">
//             <div className="module-card-icon" />
//             <div className="module-card-content">
//               <h4>Venda de Produtos</h4>
//               <p>Emitir nota fiscal</p>
//             </div>
//           </div>

//           <div className="module-card">
//             <div className="module-card-icon" />
//             <div className="module-card-content">
//               <h4>Venda de Serviços</h4>
//               <p>Emitir nota fiscal</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
