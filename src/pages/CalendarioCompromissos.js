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
  const [showForm, setShowForm] = useState(false); 

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
    setShowForm(false); 
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
    setShowForm(true); 
  };

  const toggleConcluido = (idx) => {
    const dataStr = dataSelecionada.toISOString().split('T')[0];
    const novaLista = [...(compromissos[dataStr] || [])];
    novaLista[idx].concluido = !novaLista[idx].concluido;
    const novosCompromissos = { ...compromissos, [dataStr]: novaLista };
    setCompromissos(novosCompromissos);
    localStorage.setItem('compromissos', JSON.stringify(novosCompromissos));
  };
  
  const getPriorityLevel = (hora) => {
    const hour = parseInt(hora.split(':')[0]);
    if (hour < 12) return 'high';
    if (hour < 17) return 'medium';
    return 'low';
  };

  const compromissosDia = compromissos[dataSelecionada.toISOString().split('T')[0]] || [];

  const compromissosFuturos = Object.entries(compromissos)
    .filter(([data]) => new Date(data) >= new Date().setHours(0,0,0,0))
    .flatMap(([data, lista]) =>
      lista.map((item) => ({
        ...item,
        data
      }))
    )
    .sort((a, b) => new Date(`${a.data}T${a.hora}`) - new Date(`${b.data}T${b.hora}`))
    .slice(0, 5); 

  return (
    <div className="agenda-pro-container">
      {/* SEÇÃO DO CALENDÁRIO */}
      <div className="agenda-coluna calendario-box">
        <h3>📅 Calendário</h3>
        <Calendar 
          onChange={setDataSelecionada} 
          value={dataSelecionada}
          locale="pt-BR"
        />
        <div className="resumo-datas">
          <div>
            <strong>{compromissosDia.length}</strong>
            <span>Hoje</span>
          </div>
          <div>
            <strong>{Object.keys(compromissos).length}</strong>
            <span>Dias com eventos</span>
          </div>
        </div>
      </div>

      {/* SEÇÃO DOS COMPROMISSOS */}
      <div className="agenda-coluna compromissos-box">
        <div className="topo-compromissos">
          <h3>🗓️ Agenda de {dataSelecionada.toLocaleDateString('pt-BR')}</h3>
          <button 
            className="btn-add"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? '✕' : '＋ Novo'}
          </button>
        </div>

        {/* FORMULÁRIO CONDICIONAL */}
        {showForm && (
          <div className="form-compromisso">
            <div className="form-grid">
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
                placeholder="Descrição do compromisso"
              />
            </div>
            <button onClick={salvarCompromisso}>
              {editando !== null ? '💾 Salvar Edição' : '➕ Adicionar Compromisso'}
            </button>
          </div>
        )}

        {/* LISTA DE COMPROMISSOS */}
        <div className="lista-compromissos">
          {compromissosDia.length === 0 ? (
            <p className="vazio">📅 Nenhum compromisso para este dia</p>
          ) : (
            compromissosDia.map((c, idx) => (
              <div
                key={idx}
                className={`card-compromisso fade-in ${c.concluido ? 'concluido' : ''}`}
                data-priority={getPriorityLevel(c.hora)}
              >
                <span className="hora-compromisso">{c.hora}</span>
                <div className="info-compromisso">
                  <strong>{c.descricao}</strong>
                  <div className="botoes-compromisso">
                    <button 
                      className="compromisso-button-concluir" 
                      onClick={() => toggleConcluido(idx)}
                    >
                      {c.concluido ? '✔️ Concluído' : '✅ Marcar'}
                    </button>
                    <button 
                      className="compromisso-button-edt"  
                      onClick={() => editarCompromisso(idx)}
                    >
                      ✏️ Editar
                    </button>
                    <button 
                      className="compromisso-button-excluir"  
                      onClick={() => excluirCompromisso(idx)}
                    >
                      🗑️ Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* PAINEL LATERAL */}
      <div className="agenda-coluna painel-box">
        {/* PRÓXIMOS EVENTOS */}
        <div className="eventos-box">
          <h4>📌 Próximos Eventos</h4>
          <ul>
            {compromissosFuturos.length === 0 ? (
              <li>🕐 Nenhum evento futuro</li>
            ) : (
              compromissosFuturos.map((evento, idx) => (
                <li key={idx}>
                  <strong>📅 {new Date(evento.data).toLocaleDateString('pt-BR')} • {evento.hora}</strong>
                  📝 {evento.descricao}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* ESTATÍSTICAS */}
        <div className="estatisticas-box">
          <h4>📊 Estatísticas</h4>
          <div className="estatistica">
            <div>
              <strong>{Object.keys(compromissos).length}</strong>
              <span>Dias com eventos</span>
            </div>
            <div>
              <strong>{compromissosFuturos.length}</strong>
              <span>Próximos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarioCompromissos;









