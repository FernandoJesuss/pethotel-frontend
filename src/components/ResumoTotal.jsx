const ResumoTotal = ({ valorTotal }) => (
  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
    Valor Total: R$ {valorTotal.toFixed(2)}
  </p>
);

export default ResumoTotal;
