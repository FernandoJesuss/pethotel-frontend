import React, { useState, useEffect } from 'react';
import '../styles/GerenciadorServicos.css';
import { FaBox, FaWrench, FaPlus } from 'react-icons/fa';

const GerenciadorServicos = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('Avulso');
  const [valor, setValor] = useState('');
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem('servicos')) || [];
    setServicos(salvos);
  }, []);

  const adicionarServico = () => {
    if (!nome || !valor) return;

    const valorNumerico = parseFloat(valor.replace(/[^\d,]/g, '').replace(',', '.'));

    const novoServico = {
      nome,
      tipo,
      valor: valorNumerico,
      data: new Date().toLocaleDateString(),
    };

    const atualizados = [...servicos, novoServico];
    localStorage.setItem('servicos', JSON.stringify(atualizados));
    setServicos(atualizados);
    setNome('');
    setTipo('Avulso');
    setValor('');
  };

  const handleValorChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '');
    const valorNumerico = (parseInt(raw || '0', 10) / 100).toFixed(2);
    const formatado = parseFloat(valorNumerico).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    setValor(formatado);
  };

  const total = servicos.reduce((acc, s) => acc + s.valor, 0);
  const avulsos = servicos.filter(s => s.tipo === 'Avulso').length;
  const pacotes = servicos.filter(s => s.tipo === 'Pacote').length;

  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="servicos-container">
      <h1 className="titulo">
        <FaBox className="icone" /> Gerenciador de Serviços
      </h1>
      <p className="subtitulo">Cadastre serviços de forma rápida e organizada</p>

      <div className="painel">
        <div className="card formulario">
          <h2><FaPlus /> Adicionar Serviço</h2>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Ex: Consultoria, Manutenção..."
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <label>Tipo:</label>
          <select value={tipo} onChange={e => setTipo(e.target.value)}>
            <option value="Avulso">Avulso</option>
            <option value="Pacote">Pacote</option>
          </select>
          <label>Valor (R$):</label>
          <input
            type="text"
            inputMode="numeric"
            value={valor}
            onChange={handleValorChange}
            placeholder="R$ 0,00"
          />
          <button onClick={adicionarServico}><FaPlus /> Adicionar</button>
        </div>

        <div className="card lista">
          <h2><FaWrench /> Serviços Cadastrados</h2>
          {servicos.length === 0 ? (
            <p>Nenhum serviço cadastrado ainda.</p>
          ) : (
            <ul>
              {servicos.map((s, i) => (
                <li key={i}>
                  <strong>{s.nome}</strong> – {s.tipo} – {formatarMoeda(s.valor)} – {s.data}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="resumo">
        <div className="resumo-card">
          <p>Total de Serviços</p>
          <strong>{servicos.length}</strong>
        </div>
        <div className="resumo-card">
          <p>Pacotes</p>
          <strong>{pacotes}</strong>
        </div>
        <div className="resumo-card">
          <p>Avulsos</p>
          <strong>{avulsos}</strong>
        </div>
        <div className="resumo-card total">
          <p>Valor Total</p>
          <strong>{formatarMoeda(total)}</strong>
        </div>
      </div>
    </div>
  );
};

export default GerenciadorServicos;
