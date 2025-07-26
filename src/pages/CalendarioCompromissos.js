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

//   const compromissosFuturos = Object.entries(compromissos)
//     .filter(([data]) => new Date(data) > new Date())
//     .flatMap(([data, lista]) =>
//       lista.map((item) => ({
//         ...item,
//         data
//       }))
//     )
//     .sort((a, b) => new Date(`${a.data}T${a.hora}`) - new Date(`${b.data}T${b.hora}`));

//   return (
//     <div className="agenda-pro-container">
//       {/* Coluna 1 - Calendário */}
//       <div className="agenda-coluna calendario-box">
//         <h3>📅 Calendário</h3>
//         <Calendar onChange={setDataSelecionada} value={dataSelecionada} />
//         <div className="resumo-datas">
//           <div><strong>{compromissosDia.length}</strong><span>Hoje</span></div>
//           <div><strong>{Object.keys(compromissos).length}</strong><span>Total</span></div>
//         </div>
//       </div>

//       {/* Coluna 2 - Compromissos */}
//       <div className="agenda-coluna compromissos-box">
//         <div className="topo-compromissos">
//           <h3>🗓️ Agenda de {dataSelecionada.toLocaleDateString()}</h3>
//         </div>

//         <div className="form-compromisso" >
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
//             <p className="vazio">Nenhum compromisso para este dia.</p>
//           ) : (
//             compromissosDia.map((c, idx) => (
//               <div key={idx} className="card-compromisso fade-in">
//                 <span className="hora-compromisso">{c.hora}</span>
//                 <div className="info-compromisso">
//                   <strong>{c.descricao}</strong>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Coluna 3 - Painel Lateral */}
//       <div className="agenda-coluna painel-box">
//         <div className="eventos-box">
//           <h4>📌 Próximos Eventos</h4>
//           <ul>
//             {compromissosFuturos.length === 0 ? (
//               <li>Nenhum evento futuro</li>
//             ) : (
//               compromissosFuturos.map((e, idx) => (
//                 <li key={idx}><strong>{e.data} {e.hora}</strong> {e.descricao}</li>
//               ))
//             )}
//           </ul>
//         </div>

//         <div className="estatisticas-box">
//           <h4>📊 Estatísticas</h4>
//           <div className="estatistica">
//             <div><strong>{Object.keys(compromissos).length}</strong><span>Dias com eventos</span></div>
//             <div><strong>{compromissosFuturos.length}</strong><span>Próximos</span></div>
//           </div>
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
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem('compromissos')) || {};
    setCompromissos(dadosSalvos);
  }, []);

  const salvarCompromisso = () => {
    if (!descricao || !hora) return;
    const dataStr = dataSelecionada.toISOString().split('T')[0];
    const lista = compromissos[dataStr] || [];

    let novosCompromissos;

    if (editando !== null) {
      lista[editando] = { descricao, hora, concluido: lista[editando].concluido || false };
      novosCompromissos = { ...compromissos, [dataStr]: [...lista] };
      setEditando(null);
    } else {
      novosCompromissos = {
        ...compromissos,
        [dataStr]: [...lista, { descricao, hora, concluido: false }]
      };
    }

    setCompromissos(novosCompromissos);
    localStorage.setItem('compromissos', JSON.stringify(novosCompromissos));
    setDescricao('');
    setHora('');
  };

  const excluirCompromisso = (idx) => {
    const dataStr = dataSelecionada.toISOString().split('T')[0];
    const novaLista = [...(compromissos[dataStr] || [])];
    novaLista.splice(idx, 1);
    const novosCompromissos = { ...compromissos, [dataStr]: novaLista };
    setCompromissos(novosCompromissos);
    localStorage.setItem('compromissos', JSON.stringify(novosCompromissos));
  };

  const editarCompromisso = (idx) => {
    const compromisso = compromissosDia[idx];
    setDescricao(compromisso.descricao);
    setHora(compromisso.hora);
    setEditando(idx);
  };

  const toggleConcluido = (idx) => {
    const dataStr = dataSelecionada.toISOString().split('T')[0];
    const novaLista = [...(compromissos[dataStr] || [])];
    novaLista[idx].concluido = !novaLista[idx].concluido;
    const novosCompromissos = { ...compromissos, [dataStr]: novaLista };
    setCompromissos(novosCompromissos);
    localStorage.setItem('compromissos', JSON.stringify(novosCompromissos));
  };

  const compromissosDia = compromissos[dataSelecionada.toISOString().split('T')[0]] || [];

  const compromissosFuturos = Object.entries(compromissos)
    .filter(([data]) => new Date(data) > new Date())
    .flatMap(([data, lista]) =>
      lista.map((item) => ({
        ...item,
        data
      }))
    )
    .sort((a, b) => new Date(`${a.data}T${a.hora}`) - new Date(`${b.data}T${b.hora}`));

  return (
    <div className="agenda-pro-container">
      <div className="agenda-coluna calendario-box">
        <h3>📅 Calendário</h3>
        <Calendar onChange={setDataSelecionada} value={dataSelecionada} />
        <div className="resumo-datas">
          <div><strong>{compromissosDia.length}</strong><span>Hoje</span></div>
          <div><strong>{Object.keys(compromissos).length}</strong><span>Total</span></div>
        </div>
      </div>

      <div className="agenda-coluna compromissos-box">
        <div className="topo-compromissos">
          <h3>🗓️ Agenda de {dataSelecionada.toLocaleDateString()}</h3>
        </div>

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
          <button onClick={salvarCompromisso}>
            {editando !== null ? 'Salvar Edição' : 'Adicionar'}
          </button>
        </div>

        <div className="lista-compromissos">
          {compromissosDia.length === 0 ? (
            <p className="vazio">Nenhum compromisso para este dia.</p>
          ) : (
            compromissosDia.map((c, idx) => (
              <div
                key={idx}
                className={`card-compromisso fade-in ${c.concluido ? 'concluido' : ''}`}
              >
                <span className="hora-compromisso">{c.hora}</span>
                <div className="info-compromisso">
                  <strong>{c.descricao}</strong>
                  <div className="botoes-compromisso">
                    <button onClick={() => toggleConcluido(idx)}>
                      {c.concluido ? '✔️ Concluído' : '✅ Marcar'}
                    </button>
                    <button onClick={() => editarCompromisso(idx)}>✏️ Editar</button>
                    <button onClick={() => excluirCompromisso(idx)}>🗑️ Excluir</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="agenda-coluna painel-box">
        <div className="eventos-box">
          <h4>📌 Próximos Eventos</h4>
          <ul>
            {compromissosFuturos.length === 0 ? (
              <li>Nenhum evento futuro</li>
            ) : (
              compromissosFuturos.map((e, idx) => (
                <li key={idx}><strong>{e.data} {e.hora}</strong> {e.descricao}</li>
              ))
            )}
          </ul>
        </div>

        <div className="estatisticas-box">
          <h4>📊 Estatísticas</h4>
          <div className="estatistica">
            <div><strong>{Object.keys(compromissos).length}</strong><span>Dias com eventos</span></div>
            <div><strong>{compromissosFuturos.length}</strong><span>Próximos</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarioCompromissos;

