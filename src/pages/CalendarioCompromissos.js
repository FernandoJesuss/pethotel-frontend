// import React, { useState, useEffect } from 'react';

// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import '../styles/CalendarioCompromissos.css';

// const CalendarioCompromissos = () => {
//   const [dataSelecionada, setDataSelecionada] = useState(new Date());
//   const [compromissos, setCompromissos] = useState({});
//   const [descricao, setDescricao] = useState('');
//   const [hora, setHora] = useState('');

//   useEffect(() => {
//     const dadosSalvos = JSON.parse(localStorage.getItem('compromissos')) || {};
//     setCompromissos(dadosSalvos);
//   }, []);

//   const salvarCompromisso = () => {
//     if (!descricao || !hora) return;

//     const dataStr = dataSelecionada.toISOString().split('T')[0];
//     const novosCompromissos = {
//       ...compromissos,
//       [dataStr]: [...(compromissos[dataStr] || []), { descricao, hora }]
//     };

//     setCompromissos(novosCompromissos);
//     localStorage.setItem('compromissos', JSON.stringify(novosCompromissos));
//     setDescricao('');
//     setHora('');
//   };

//   const compromissosDia = compromissos[dataSelecionada.toISOString().split('T')[0]] || [];

//   return (
//     <div className="calendario-container">
//       <div className="calendario-lado-esquerdo">
//         <Calendar onChange={setDataSelecionada} value={dataSelecionada} />
//       </div>
//       <div className="calendario-lado-direito">
//         <h2>Compromissos em {dataSelecionada.toLocaleDateString()}</h2>

//         <div className="form-compromisso">
//           <input
//             type="time"
//             value={hora}
//             onChange={(e) => setHora(e.target.value)}
//             placeholder="Hora"
//           />
//           <input
//             type="text"
//             value={descricao}
//             onChange={(e) => setDescricao(e.target.value)}
//             placeholder="Descrição"
//           />
//           <button onClick={salvarCompromisso}>Adicionar</button>
//         </div>

//         <ul className="lista-compromissos">
//           {compromissosDia.map((c, idx) => (
//             <li key={idx}>
//               <strong>{c.hora}</strong> - {c.descricao}
//             </li>
//           ))}
//           {compromissosDia.length === 0 && <p>Nenhum compromisso para este dia.</p>}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CalendarioCompromissos;






// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import '../styles/CalendarioCompromissos.css';

// const CalendarioCompromissos = () => {
//   const [dataSelecionada, setDataSelecionada] = useState(new Date());
//   const [compromissos, setCompromissos] = useState({});
//   const [descricao, setDescricao] = useState('');
//   const [hora, setHora] = useState('');

//   useEffect(() => {
//     const dadosSalvos = JSON.parse(localStorage.getItem('compromissos')) || {};
//     setCompromissos(dadosSalvos);
//   }, []);

//   const salvarCompromisso = () => {
//     if (!descricao || !hora) return;

//     const dataStr = dataSelecionada.toISOString().split('T')[0];
//     const novosCompromissos = {
//       ...compromissos,
//       [dataStr]: [...(compromissos[dataStr] || []), { descricao, hora }]
//     };

//     setCompromissos(novosCompromissos);
//     localStorage.setItem('compromissos', JSON.stringify(novosCompromissos));
//     setDescricao('');
//     setHora('');
//   };

//   const compromissosDia = compromissos[dataSelecionada.toISOString().split('T')[0]] || [];

//   return (
//     <div className="agenda-pro-container">
//       {/* Coluna 1 - Calendário */}
//       <div className="agenda-coluna calendario-box">
//         <h3>📅 Calendário</h3>
//         <Calendar onChange={setDataSelecionada} value={dataSelecionada} />
//         <div className="resumo-datas">
//           <div><strong>5</strong><span>Hoje</span></div>
//           <div><strong>23</strong><span>Este mês</span></div>
//         </div>
//       </div>

//       {/* Coluna 2 - Compromissos */}
//       <div className="agenda-coluna compromissos-box">
//         <div className="topo-compromissos">
//           <h3>🗓️ Agenda de Hoje</h3>
//           <button className="botao-novo">+ Novo Compromisso</button>
//         </div>
//         <input
//           type="text"
//           placeholder="Buscar compromissos..."
//           className="input-busca"
//         />

//         <div className="form-compromisso">
//           <input
//             type="time"
//             value={hora}
//             onChange={(e) => setHora(e.target.value)}
//             placeholder="Hora"
//           />
//           <input
//             type="text"
//             value={descricao}
//             onChange={(e) => setDescricao(e.target.value)}
//             placeholder="Descrição"
//           />
//           <button onClick={salvarCompromisso}>Adicionar</button>
//         </div>

//         <div className="lista-compromissos">
//           {compromissosDia.length === 0 ? (
//             <p>Nenhum compromisso para este dia.</p>
//           ) : (
//             compromissosDia.map((c, idx) => (
//               <div key={idx} className="card-compromisso">
//                 <span className="hora-compromisso">{c.hora}</span>
//                 <div className="info-compromisso">
//                   <strong>{c.descricao}</strong>
//                   <p className="tag-compromisso">Pessoal</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Coluna 3 - Painel Lateral */}
//       <div className="agenda-coluna painel-box">
//         <div className="clima-box">
//           <span className="emoji-clima">📱</span>
//           <h2>24°C</h2>
//           <p>São Paulo, SP</p>
//         </div>

//         <div className="eventos-box">
//           <h4>📌 Próximos Eventos</h4>
//           <ul>
//             <li><strong>Amanhã 09:00</strong> Apresentação para cliente</li>
//             <li><strong>Amanhã 15:30</strong> Code review semanal</li>
//             <li><strong>Sáb 10:00</strong> Consulta médica</li>
//           </ul>
//         </div>

//         <div className="estatisticas-box">
//           <h4>📊 Estatísticas</h4>
//           <div className="estatistica">
//             <div><strong>85%</strong><span>Concluído</span></div>
//             <div><strong>12</strong><span>Pendentes</span></div>
//           </div>
//         </div>

//         <div className="lembretes-box">
//           <h4>⏰ Lembretes</h4>
//           <ul>
//             <li><span className="urgente"></span> Relatório mensal vence hoje</li>
//             <li><span className="normal"></span> Renovar assinatura software</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalendarioCompromissos;







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

  const compromissosDoMes = Object.entries(compromissos).reduce((total, [key, items]) => {
    const mesAtual = new Date().getMonth();
    const anoAtual = new Date().getFullYear();
    const [ano, mes] = key.split('-');
    if (parseInt(ano) === anoAtual && parseInt(mes) - 1 === mesAtual) {
      return total + items.length;
    }
    return total;
  }, 0);

  return (
    <>
      {/* Cabeçalho */}
      <div className="cabecalho">
        <div className="logo">
          <span className="icone-logo">🟦</span>
          <strong>AgendaPro</strong>
        </div>
        <div className="perfil-usuario">
          <div className="avatar">JD</div>
          <div>
            <p className="nome-usuario">João da Silva</p>
            <p className="cargo-usuario">Gerente de Projetos</p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="agenda-pro-container">
        {/* Coluna 1 - Calendário */}
        <div className="agenda-coluna calendario-box">
          <h3>📅 Calendário</h3>
          <Calendar onChange={setDataSelecionada} value={dataSelecionada} />
          <div className="resumo-datas">
            <div className="resumo-card">
              <strong>{compromissosDia.length}</strong>
              <span>Hoje</span>
            </div>
            <div className="resumo-card">
              <strong>{compromissosDoMes}</strong>
              <span>Este mês</span>
            </div>
          </div>
        </div>

        {/* Coluna 2 - Compromissos */}
        <div className="agenda-coluna compromissos-box">
          <div className="topo-compromissos">
            <h3>🗓️ Agenda de Hoje</h3>
            <button className="botao-novo">+ Novo Compromisso</button>
          </div>
          <input
            type="text"
            placeholder="Buscar compromissos..."
            className="input-busca"
          />

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

          <div className="lista-compromissos">
            {compromissosDia.length === 0 ? (
              <p>Nenhum compromisso para este dia.</p>
            ) : (
              compromissosDia.map((c, idx) => (
                <div key={idx} className="card-compromisso">
                  <span className="hora-compromisso">{c.hora}</span>
                  <div className="info-compromisso">
                    <strong>{c.descricao}</strong>
                    <p className="tag-compromisso">Pessoal</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Coluna 3 - Painel Lateral */}
        <div className="agenda-coluna painel-box">
          <div className="clima-box">
            <span className="emoji-clima">📱</span>
            <h2>24°C</h2>
            <p>São Paulo, SP</p>
          </div>

          <div className="eventos-box">
            <h4>📌 Próximos Eventos</h4>
            <ul>
              <li><strong>Amanhã 09:00</strong> Apresentação para cliente</li>
              <li><strong>Amanhã 15:30</strong> Code review semanal</li>
              <li><strong>Sáb 10:00</strong> Consulta médica</li>
            </ul>
          </div>

          <div className="estatisticas-box">
            <h4>📊 Estatísticas</h4>
            <div className="estatistica">
              <div><strong>85%</strong><span>Concluído</span></div>
              <div><strong>12</strong><span>Pendentes</span></div>
            </div>
          </div>

          <div className="lembretes-box">
            <h4>⏰ Lembretes</h4>
            <ul>
              <li><span className="urgente"></span> Relatório mensal vence hoje</li>
              <li><span className="normal"></span> Renovar assinatura software</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarioCompromissos;
