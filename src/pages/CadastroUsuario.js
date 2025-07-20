import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CadastroUsuario.css';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    alert(`Usuário ${nome} cadastrado com sucesso!`);
    // Aqui você pode salvar no backend ou localStorage
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-left"></div>
      <div className="cadastro-right">
        <h2>Cadastro de Usuário</h2>
        <form onSubmit={handleSubmit} className="cadastro-form">
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
            <hr className="linha-links" />
            <p className="login-links">
           <Link to="/">Volte a tela de login</Link>
           </p>
        </form>
      </div>
    </div>
  );
};

export default CadastroUsuario;
