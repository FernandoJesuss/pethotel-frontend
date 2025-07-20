// import { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';

// const GerarNota = () => {
//   const { token } = useAuth();
//   const [dadosNota, setDadosNota] = useState({
//     nomeCliente: '',
//     servico: '',
//     valor: '',
//     data: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDadosNota({ ...dadosNota, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!token) {
//       alert('Você precisa estar logado para gerar a nota.');
//       return;
//     }

//     // Simulando envio
//     console.log('Nota gerada:', dadosNota);
//     alert('Nota fiscal gerada com sucesso!');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Gerar Nota Fiscal</h2>
//       <input
//         type="text"
//         name="nomeCliente"
//         placeholder="Nome do Cliente"
//         value={dadosNota.nomeCliente}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="servico"
//         placeholder="Serviço prestado"
//         value={dadosNota.servico}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="valor"
//         placeholder="Valor (R$)"
//         value={dadosNota.valor}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="data"
//         value={dadosNota.data}
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">Gerar Nota</button>
//     </form>
//   );
// };

// export default GerarNota;








// import { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import '../styles/GerarNota.css';

// const GerarNota = () => {
//   const { token } = useAuth();
//   const [dadosNota, setDadosNota] = useState({
//     nomeCliente: '',
//     servico: '',
//     valor: '',
//     data: ''
//   });
//   const [erros, setErros] = useState({});

//   const validarCampos = () => {
//     const novosErros = {};

//     if (!dadosNota.nomeCliente.trim()) novosErros.nomeCliente = 'Informe o nome do cliente.';
//     if (!dadosNota.servico.trim()) novosErros.servico = 'Informe o serviço prestado.';
//     if (!dadosNota.valor || isNaN(dadosNota.valor) || parseFloat(dadosNota.valor) <= 0) {
//       novosErros.valor = 'Informe um valor válido.';
//     }
//     if (!dadosNota.data) novosErros.data = 'Informe a data.';

//     setErros(novosErros);
//     return Object.keys(novosErros).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDadosNota({ ...dadosNota, [name]: value });

//     // Remover erro ao digitar
//     if (erros[name]) {
//       setErros({ ...erros, [name]: '' });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!token) {
//       alert('Você precisa estar logado para gerar a nota.');
//       return;
//     }

//     if (!validarCampos()) return;

//     // Simulando envio
//     const notasAntigas = JSON.parse(localStorage.getItem('notasGeradas')) || [];
//     const novasNotas = [...notasAntigas, dadosNota];
//     localStorage.setItem('notasGeradas', JSON.stringify(novasNotas));

//     alert('Nota fiscal gerada com sucesso!');
//     setDadosNota({ nomeCliente: '', servico: '', valor: '', data: '' });
//     setErros({});
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Gerar Nota Fiscal</h2>

//       <input
//         type="text"
//         name="nomeCliente"
//         placeholder="Nome do Cliente"
//         value={dadosNota.nomeCliente}
//         onChange={handleChange}
//       />
//       {erros.nomeCliente && <p style={{ color: 'red' }}>{erros.nomeCliente}</p>}

//       <input
//         type="text"
//         name="servico"
//         placeholder="Serviço prestado"
//         value={dadosNota.servico}
//         onChange={handleChange}
//       />
//       {erros.servico && <p style={{ color: 'red' }}>{erros.servico}</p>}

//       <input
//         type="number"
//         name="valor"
//         placeholder="Valor (R$)"
//         value={dadosNota.valor}
//         onChange={handleChange}
//       />
//       {erros.valor && <p style={{ color: 'red' }}>{erros.valor}</p>}

//       <input
//         type="date"
//         name="data"
//         value={dadosNota.data}
//         onChange={handleChange}
//       />
//       {erros.data && <p style={{ color: 'red' }}>{erros.data}</p>}

//       <button type="submit">Gerar Nota</button>
//     </form>
//   );
// };

// export default GerarNota;


import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/GerarNota.css';

const GerarNota = () => {
  const { token } = useAuth();
  const [dadosNota, setDadosNota] = useState({
    nomeCliente: '',
    servico: '',
    valor: '',
    data: ''
  });
  const [erros, setErros] = useState({});

  const validarCampos = () => {
    const novosErros = {};

    if (!dadosNota.nomeCliente.trim()) novosErros.nomeCliente = 'Informe o nome do cliente.';
    if (!dadosNota.servico.trim()) novosErros.servico = 'Informe o serviço prestado.';
    if (!dadosNota.valor || isNaN(dadosNota.valor) || parseFloat(dadosNota.valor) <= 0) {
      novosErros.valor = 'Informe um valor válido.';
    }
    if (!dadosNota.data) novosErros.data = 'Informe a data.';

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosNota({ ...dadosNota, [name]: value });

    if (erros[name]) {
      setErros({ ...erros, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      alert('Você precisa estar logado para gerar a nota.');
      return;
    }

    if (!validarCampos()) return;

    const notasAntigas = JSON.parse(localStorage.getItem('notasGeradas')) || [];
    const novasNotas = [...notasAntigas, dadosNota];
    localStorage.setItem('notasGeradas', JSON.stringify(novasNotas));

    alert('Nota fiscal gerada com sucesso!');
    setDadosNota({ nomeCliente: '', servico: '', valor: '', data: '' });
    setErros({});
  };

  return (
    <form className="gerar-nota-form" onSubmit={handleSubmit}>
      <h2>Gerar Nota Fiscal</h2>

      <div className="form-group">
        <input
          type="text"
          name="nomeCliente"
          placeholder="Nome do Cliente"
          value={dadosNota.nomeCliente}
          onChange={handleChange}
        />
        {erros.nomeCliente && <p className="erro">{erros.nomeCliente}</p>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="servico"
          placeholder="Serviço prestado"
          value={dadosNota.servico}
          onChange={handleChange}
        />
        {erros.servico && <p className="erro">{erros.servico}</p>}
      </div>

      <div className="form-group">
        <input
          type="number"
          name="valor"
          placeholder="Valor (R$)"
          value={dadosNota.valor}
          onChange={handleChange}
        />
        {erros.valor && <p className="erro">{erros.valor}</p>}
      </div>

      <div className="form-group">
        <input
          type="date"
          name="data"
          value={dadosNota.data}
          onChange={handleChange}
        />
        {erros.data && <p className="erro">{erros.data}</p>}
      </div>

      <button className="btn-submit" type="submit">Gerar Nota</button>
    </form>
  );
};

export default GerarNota;
