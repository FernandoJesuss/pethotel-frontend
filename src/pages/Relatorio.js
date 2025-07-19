// import { useAuth } from '../contexts/AuthContext';

// const Relatorio = () => {
//   const { token } = useAuth();

//   if (!token) {
//     return <p style={{ color: 'red' }}>Você precisa estar logado para ver o relatório.</p>;
//   }

//   // Dados simulados
//   const servicos = [
//     { id: 1, cliente: 'João Silva', servico: 'Banho', valor: 50, data: '2025-07-15' },
//     { id: 2, cliente: 'Maria Oliveira', servico: 'Consulta', valor: 120, data: '2025-07-16' },
//     { id: 3, cliente: 'Carlos Souza', servico: 'Vacina', valor: 80, data: '2025-07-17' },
//   ];

//   return (
//     <div>
//       <h2>Relatório de Serviços Prestados</h2>
//       <table border="1" cellPadding="8">
//         <thead>
//           <tr>
//             <th>Cliente</th>
//             <th>Serviço</th>
//             <th>Valor (R$)</th>
//             <th>Data</th>
//           </tr>
//         </thead>
//         <tbody>
//           {servicos.map((s) => (
//             <tr key={s.id}>
//               <td>{s.cliente}</td>
//               <td>{s.servico}</td>
//               <td>{s.valor.toFixed(2)}</td>
//               <td>{s.data}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Relatorio;





import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Relatorio.css'; // <-- Import do CSS separado

const Relatorio = () => {
  const { token } = useAuth();
  const [servicos, setServicos] = useState([]);

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

  return (
    <div className="relatorio-container">
      <nav className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/cadastro">Cadastro de Tutor</Link>
        <Link to="/nota">Gerar Nota Fiscal</Link>
      </nav>

      <h2 className="titulo">Relatório de Serviços Prestados</h2>

      {servicos.length === 0 ? (
        <p>Nenhuma nota fiscal gerada até o momento.</p>
      ) : (
        <>
          <table className="tabela">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Serviço</th>
                <th>Valor (R$)</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {servicos.map((s, index) => (
                <tr key={index}>
                  <td>{s.nomeCliente}</td>
                  <td>{s.servico}</td>
                  <td>{parseFloat(s.valor).toFixed(2)}</td>
                  <td>{s.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="total">Valor Total: R$ {valorTotal.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Relatorio;
