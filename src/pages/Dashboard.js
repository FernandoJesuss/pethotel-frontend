import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/cadastro">Cadastrar Tutor</Link></li>
        <li><Link to="/nota">Gerar Nota Fiscal</Link></li>
        <li><Link to="/relatorio">Relatório de Serviços</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
