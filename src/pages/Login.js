// import React, { useState } from 'react';
// import { useAuth } from '../contexts/AuthContext';

// function Login() {
//   const { login } = useAuth(); // agora está seguro
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     login(username, password);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Usuário"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Senha"
//       />
//       <button type="submit">Entrar</button>
//     </form>
//   );
// }

// export default Login;


// src/pages/Login.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && senha) {
      onLogin();
    } else {
      alert('Preencha todos os campos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left"></div>

      <div className="login-right">
        <h1 className="login-title">Bem-vindo de volta!</h1>
        <p class="login-subtitle">Faça login para gerenciar a hospedagem do seu pet</p>
        <form onSubmit={handleSubmit} className="login-form">





           <label for="email" class="form-label">Email</label>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label for="password" class="form-label">Senha</label>
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

export default Login;
