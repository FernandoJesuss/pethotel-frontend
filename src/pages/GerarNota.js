import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/GerarNota.css';
import nfTutor from '../assets/nftutor.png';

const GerarNota = () => {
  const { token } = useAuth();
  const [dadosNota, setDadosNota] = useState({
    nomeCliente: '',
    servico: '',
    valor: '',
    valorRaw: '',
    data: ''
  });
  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState('');

  const validarCampos = () => {
    const novosErros = {};
    if (!dadosNota.nomeCliente.trim()) novosErros.nomeCliente = 'Informe o nome do cliente.';
    if (!dadosNota.servico.trim()) novosErros.servico = 'Informe o serviço prestado.';
    if (!dadosNota.valorRaw || isNaN(dadosNota.valorRaw) || parseFloat(dadosNota.valorRaw) <= 0) {
      novosErros.valor = 'Informe um valor válido.';
    }
    if (!dadosNota.data) novosErros.data = 'Informe a data.';
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'valor') {
      const onlyNumbers = value.replace(/\D/g, '');
      const floatValue = (parseInt(onlyNumbers || '0', 10) / 100).toFixed(2);
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(floatValue);

      setDadosNota({
        ...dadosNota,
        valor: formatted,
        valorRaw: floatValue
      });

      if (erros.valor) setErros({ ...erros, valor: '' });
    } else {
      setDadosNota({ ...dadosNota, [name]: value });
      if (erros[name]) setErros({ ...erros, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      alert('Você precisa estar logado para gerar a nota.');
      return;
    }
    if (!validarCampos()) return;

    const novaNota = {
      nomeCliente: dadosNota.nomeCliente,
      servico: dadosNota.servico,
      valor: dadosNota.valorRaw,
      data: dadosNota.data
    };

    const notasAntigas = JSON.parse(localStorage.getItem('notasGeradas')) || [];
    const novasNotas = [...notasAntigas, novaNota];
    localStorage.setItem('notasGeradas', JSON.stringify(novasNotas));

    setMensagem('Nota fiscal gerada com sucesso!');
    setTimeout(() => setMensagem(''), 5000);

    setDadosNota({
      nomeCliente: '',
      servico: '',
      valor: '',
      valorRaw: '',
      data: ''
    });
    setErros({});
  };

  return (
    
    <div className="gerar-nota-container">
      <div className="gerar-nota-imagem" style={{ backgroundImage: `url(${nfTutor})` }}>
        
        <div className="texto-lateral">
          
          <h1>Gerador de Nota Fiscal</h1>
          <p>
            Gere suas notas fiscais de forma rápida, simples e segura. Preencha os dados ao lado e tenha sua nota fiscal pronta em segundos.
          </p>
        </div>
      </div>
      <div className='global'> 
      <form className="gerar-nota-form" onSubmit={handleSubmit}>
        <h2>Dados da Nota Fiscal</h2>
        <p className="descricao-formulario">Preencha as informações abaixo para gerar sua nota</p>

        <div className="form-group-nf">
          <label>Nome do Cliente *</label>
          <input
            type="text"
            name="nomeCliente"
            placeholder="Digite o nome completo do cliente"
            value={dadosNota.nomeCliente}
            onChange={handleChange}
          />
          {erros.nomeCliente && <p className="erro">{erros.nomeCliente}</p>}
        </div>

        <div className="form-group-nf">
          <label>Serviço Prestado *</label>
          <input
            type="text"
            name="servico"
            placeholder="Descreva o serviço realizado"
            value={dadosNota.servico}
            onChange={handleChange}
          />
          <small>Exemplo: Consultoria em Marketing Digital</small>
          {erros.servico && <p className="erro">{erros.servico}</p>}
        </div>

        <div className="form-group-nf">
          <label>Valor (R$) *</label>
          <input
            type="text"
            name="valor"
            placeholder="R$ 0,00"
            value={dadosNota.valor}
            onChange={handleChange}
          />
          {erros.valor && <p className="erro">{erros.valor}</p>}
        </div>

        <div className="form-group-nf">
          <label>Data de Emissão *</label>
          <input
            type="date"
            name="data"
            value={dadosNota.data}
            onChange={handleChange}
          />
          {erros.data && <p className="erro">{erros.data}</p>}
        </div>

        <button className="btn-submit" type="submit">
          📄 Gerar Nota Fiscal
        </button>

        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
      </form>
    </div>
    </div>
  );
};

export default GerarNota;
