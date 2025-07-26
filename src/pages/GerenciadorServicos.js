import React, { useState, useEffect } from 'react';
import '../styles/GerenciadorServicos.css';
import { FaBox, FaWrench, FaPlus, FaTrash, FaCalendarAlt, FaPen } from 'react-icons/fa';

const GerenciadorServicos = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('Avulso');
  const [valor, setValor] = useState('');

  // ✅ Carrega serviços direto do localStorage ao iniciar
  const [servicos, setServicos] = useState(() => {
    const dadosSalvos = localStorage.getItem('servicos');
    try {
      return dadosSalvos ? JSON.parse(dadosSalvos) : [];
    } catch {
      return [];
    }
  });

  const [selecionados, setSelecionados] = useState({});
  const [resumo, setResumo] = useState({ total: 0, pacotes: 0, avulsos: 0, valorTotal: 0 });
  const [modoEdicao, setModoEdicao] = useState(false);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  // ✅ Salva sempre que serviços mudam
  useEffect(() => {
    localStorage.setItem('servicos', JSON.stringify(servicos));
  }, [servicos]);

  useEffect(() => {
    const total = servicos.length;
    const pacotes = servicos.filter(s => s.tipo === 'Pacote').length;
    const avulsos = servicos.filter(s => s.tipo === 'Avulso').length;
    const valorTotal = servicos.reduce((acc, s) => acc + parseFloat(s.valor || 0), 0);
    setResumo({ total, pacotes, avulsos, valorTotal });
  }, [servicos]);

  const adicionarServico = () => {
    if (!nome || !valor) return;
    const data = new Date().toLocaleDateString('pt-BR');
    const novoServico = { nome, tipo, valor, data };

    if (modoEdicao && indiceEdicao !== null) {
      const atualizados = [...servicos];
      atualizados[indiceEdicao] = { ...novoServico, data: servicos[indiceEdicao].data };
      setServicos(atualizados);
      setModoEdicao(false);
      setIndiceEdicao(null);
    } else {
      setServicos([...servicos, novoServico]);
    }

    setNome('');
    setTipo('Avulso');
    setValor('');
  };

  const editarServico = (index) => {
    const servico = servicos[index];
    setNome(servico.nome);
    setTipo(servico.tipo);
    setValor(servico.valor);
    setModoEdicao(true);
    setIndiceEdicao(index);
  };

  const cancelarEdicao = () => {
    setNome('');
    setTipo('Avulso');
    setValor('');
    setModoEdicao(false);
    setIndiceEdicao(null);
  };

  const excluirServico = (index) => {
    if (modoEdicao) return;
    if (selecionados[index]) {
      const novaLista = servicos.filter((_, i) => i !== index);
      setServicos(novaLista);
      const novosSelecionados = { ...selecionados };
      delete novosSelecionados[index];
      setSelecionados(novosSelecionados);
    }
  };

  const excluirTodos = () => {
    if (modoEdicao) return;
    const novaLista = servicos.filter((_, index) => !selecionados[index]);
    setServicos(novaLista);
    setSelecionados({});
  };

  const toggleSelecionado = (index) => {
    if (modoEdicao) return;
    setSelecionados(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const formatarMoeda = valor => {
    return parseFloat(valor || 0).toLocaleString('pt-BR', {
      style: 'currency', currency: 'BRL'
    });
  };

  const handleValorChange = (e) => {
    const valorInput = e.target.value.replace(/[^\d]/g, '');
    const valorNumerico = (parseInt(valorInput, 10) / 100).toFixed(2);
    setValor(valorNumerico);
  };

  return (
    <div className="gerenciador-wrapper">
      {/* Lado da imagem */}
      <div className="imagem-servicos" />

      {/* Lado do conteúdo */}
      <div className="container-servicos">
        <h1 className="titulo">
          <FaBox /> Gerenciador de Serviços
          <p className="subtitulo">Cadastre e gerencie seus pacotes e serviços avulsos de forma rápida e intuitiva</p>
        </h1>

        {modoEdicao && (
          <div className="modo-edicao-banner">
            <strong>Modo de Edição Ativo</strong><br />
            Você está editando o serviço "{servicos[indiceEdicao]?.nome}". Salve suas alterações ou cancele para continuar.
            <div className="botoes-edicao">
              <button onClick={cancelarEdicao} className="btn-cancelar">Cancelar</button>
              <button onClick={adicionarServico} className="btn-salvar">Salvar & Continuar</button>
            </div>
          </div>
        )}

        <div className="painel">
          <div className="card formulario-servico">
            <h3><FaPlus /> {modoEdicao ? 'Editar Serviço' : 'Adicionar Serviço'}</h3>

            <label>Nome do Serviço:</label>
            <input
              type="text"
              placeholder="Ex: Consultoria, Manutenção..."
              value={nome}
              onChange={e => setNome(e.target.value)}
            />

            <label>Tipo de Serviço:</label>
            <select value={tipo} onChange={e => setTipo(e.target.value)}>
              <option value="Avulso">Avulso</option>
              <option value="Pacote">Pacote</option>
            </select>

            <label>Valor (R$):</label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="R$ 0,00"
              value={formatarMoeda(valor)}
              onChange={handleValorChange}
            />

            <button className="btn-adicionar" onClick={adicionarServico}>
              <FaPlus /> {modoEdicao ? 'Salvar Alterações' : 'Adicionar'}
            </button>
          </div>

          <div className="card servicos-lista">
            <h3><FaWrench /> Serviços Cadastrados</h3>

            {servicos.length > 0 && (
              <div className="cabecalho-servicos">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const novosSelecionados = {};
                      servicos.forEach((_, i) => {
                        novosSelecionados[i] = checked;
                      });
                      setSelecionados(novosSelecionados);
                    }}
                    disabled={modoEdicao}
                  />
                  Selecionar todos ({servicos.length} serviços)
                </label>
                <button
                  className="btn-excluir-todos"
                  onClick={excluirTodos}
                  disabled={modoEdicao}
                >
                  <FaTrash /> Excluir Selecionados
                </button>
              </div>
            )}

            <ul className="lista-servicos">
              {servicos.map((s, i) => (
                <li key={i} className={`item-servico ${modoEdicao && indiceEdicao === i ? 'em-edicao' : ''}`}>
                  <div className="servico-info">
                    <input
                      type="checkbox"
                      checked={!!selecionados[i]}
                      onChange={() => toggleSelecionado(i)}
                      disabled={modoEdicao}
                    />
                    <span className="servico-nome">{s.nome}</span>
                    <span className={`tipo-badge ${s.tipo.toLowerCase()}`}>{s.tipo}</span>
                    <span className="valor">{formatarMoeda(s.valor)}</span>
                    <span className="data">
                      <FaCalendarAlt /> {s.data}
                    </span>
                  </div>
                  <div className="servico-acoes">
                    <button className="btn-editar" onClick={() => editarServico(i)} title="Editar"><FaPen /></button>
                    <button
                      className="btn-excluir"
                      onClick={() => excluirServico(i)}
                      title="Excluir"
                      disabled={modoEdicao}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {servicos.length === 0 && (
              <p className="nenhum-servico">Nenhum serviço cadastrado ainda.</p>
            )}
          </div>
        </div>

        <div className="resumo">
          <div className="card-resumo">
            <h4>{resumo.total}</h4>
            <p>Total de Serviços</p>
          </div>
          <div className="card-resumo">
            <h4>{resumo.pacotes}</h4>
            <p>Pacotes</p>
          </div>
          <div className="card-resumo">
            <h4>{resumo.avulsos}</h4>
            <p>Avulsos</p>
          </div>
          <div className="card-resumo">
            <h4>{formatarMoeda(resumo.valorTotal)}</h4>
            <p>Valor Total Cadastrado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerenciadorServicos;
