import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/EsqueciSenha.css';

const EsqueciSenha = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Link de recuperação enviado para o e-mail informado.');
    // Simulação de envio de e-mail
  };

  return (
    <div className="senha-container">
      <div className="senha-left"></div>
      <div className="senha-right">
        <h2>Recuperar Senha</h2>
        <form onSubmit={handleSubmit} className="senha-form">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar Link</button>
           <hr className="linha-links" />
                      <p className="login-links">
                     <Link to="/">Volte a tela de login</Link>
                     </p>
        </form>
      </div>
    </div>
  );
};

export default EsqueciSenha;
