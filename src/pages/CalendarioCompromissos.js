import React, { useState, useEffect } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarioCompromissos.css';

const CalendarioCompromissos = () => {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [compromissos, setCompromissos] = useState({});
  const [descricao, setDescricao] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem('compromissos')) || {};
    setCompromissos(dadosSalvos);
  }, []);

  const salvarCompromisso = () => {
    if (!descricao || !hora) return;

    const dataStr = dataSelecionada.toISOString().split('T')[0];
    const novosCompromissos = {
      ...compromissos,
      [dataStr]: [...(compromissos[dataStr] || []), { descricao, hora }]
    };

    setCompromissos(novosCompromissos);
    localStorage.setItem('compromissos', JSON.stringify(novosCompromissos));
    setDescricao('');
    setHora('');
  };

  const compromissosDia = compromissos[dataSelecionada.toISOString().split('T')[0]] || [];

  return (
    <div className="calendario-container">
      <div className="calendario-lado-esquerdo">
        <Calendar onChange={setDataSelecionada} value={dataSelecionada} />
      </div>
      <div className="calendario-lado-direito">
        <h2>Compromissos em {dataSelecionada.toLocaleDateString()}</h2>

        <div className="form-compromisso">
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            placeholder="Hora"
          />
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          />
          <button onClick={salvarCompromisso}>Adicionar</button>
        </div>

        <ul className="lista-compromissos">
          {compromissosDia.map((c, idx) => (
            <li key={idx}>
              <strong>{c.hora}</strong> - {c.descricao}
            </li>
          ))}
          {compromissosDia.length === 0 && <p>Nenhum compromisso para este dia.</p>}
        </ul>
      </div>
    </div>
  );
};

export default CalendarioCompromissos;








//  import Calendar from 'react-calendar';
//  import 'react-calendar/dist/Calendar.css';


// import { useState, useEffect } from 'react';
// import '../styles/CalendarioCompromissos.css';
// import dogCalendarImg from '../assets/dog-calendar.png'; // imagem mascote

// const CalendarioCompromissos = () => {
//   const [compromissos, setCompromissos] = useState([]);
//   const [novo, setNovo] = useState({ cliente: '', servico: '', data: '' });
//   const [mensagem, setMensagem] = useState('');

//   useEffect(() => {
//     const dadosSalvos = JSON.parse(localStorage.getItem('compromissos')) || [];
//     setCompromissos(dadosSalvos);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNovo({ ...novo, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const atualizados = [...compromissos, novo].sort((a, b) => new Date(a.data) - new Date(b.data));
//     setCompromissos(atualizados);
//     localStorage.setItem('compromissos', JSON.stringify(atualizados));
//     setMensagem('Compromisso adicionado com sucesso!');
//     setTimeout(() => setMensagem(''), 5000);
//     setNovo({ cliente: '', servico: '', data: '' });
//   };

//   return (
//     <div className="calendario-container">
//       <div
//         className="calendario-imagem"
//         style={{ backgroundImage: `url(${dogCalendarImg})` }}
//       />
//       <form className="calendario-form" onSubmit={handleSubmit}>
//         <h2>Calendário de Compromissos</h2>

//         <div className="form-group">
//           <input
//             type="text"
//             name="cliente"
//             placeholder="Nome do Cliente"
//             value={novo.cliente}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="servico"
//             placeholder="Serviço"
//             value={novo.servico}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="date"
//             name="data"
//             value={novo.data}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button className="btn-submit" type="submit">Adicionar</button>
//         {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
//       </form>

//       <div className="lista-compromissos">
//         <h3>Próximos Compromissos</h3>
//         <ul>
//           {compromissos.map((c, index) => (
//             <li key={index}>
//               <strong>{c.data}</strong> - {c.cliente} ({c.servico})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CalendarioCompromissos;

