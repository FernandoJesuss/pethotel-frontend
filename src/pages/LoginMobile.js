import { useState } from 'react';
import { GiSniffingDog } from "react-icons/gi";
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const LoginMobile = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        onLogin();
      } else {
        alert(data.message || 'Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro de conexão com o servidor');
    }
  };

  return (
    <div className="login-container mobile-version">
      <h1 className="hotel-pet">
        <span className="hotel-hotel-casa">Hotel</span>
        <span className="hotel-pet-pet">Pet</span>
      </h1>

      <div className="login-mobile-box">
        <h2 className="login-title">
          <GiSniffingDog className="dog" /> Bem-Vindo de Volta!
        </h2>
        <p className="login-subtitle">Gerencie a hospedagem do seu pet</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="form-label">Senha</label>
          <input
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <hr className="linha-links" />

          <p className="login-links">
            <Link to="/cadastro-usuario">Criar conta</Link> {' '}
            <Link to="/esqueci-senha">Esqueci minha senha</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginMobile;
