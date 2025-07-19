const TabelaServicos = ({ servicos }) => {
  return (
    <table border="1" cellPadding="8">
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
  );
};

export default TabelaServicos;
