// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <ul>
//         <li><Link to="/cadastro">Cadastrar Tutor</Link></li>
//         <li><Link to="/nota">Gerar Nota Fiscal</Link></li>
//         <li><Link to="/relatorio">Relatório de Serviços</Link></li>
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
      <h1 className="dashboard-title">Dashboard</h1>
      <ul className="dashboard-menu">
        <li><Link to="/cadastro">Cadastrar Tutor</Link></li>
        <li><Link to="/nota">Gerar Nota Fiscal</Link></li>
        <li><Link to="/relatorio">Relatório de Serviços</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
