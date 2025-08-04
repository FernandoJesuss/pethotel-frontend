// // src/pages/Login.js
// import { useState } from 'react';
// import { GiSniffingDog } from "react-icons/gi";
// import { Link } from 'react-router-dom';
// import '../styles/Login.css';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');

//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!email || !senha) {
//     alert('Preencha todos os campos');
//     return;
//   }

//   try {
//     const response = await fetch('http://localhost:3001/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, senha })
//     });

//     const data = await response.json();

//     if (response.ok) {
//       localStorage.setItem('token', data.token);
//       onLogin(); // chama a função passada via props
//     } else {
//       alert(data.message || 'Erro ao fazer login');
//     }
//   } catch (error) {
//     console.error('Erro ao fazer login:', error);
//     alert('Erro de conexão com o servidor');
//   }
// };


//   return (
//     <div className="login-container">
//       <div className="login-left"></div>

// <h1 className="hotel-pet">
//   {/* <span className="hotel-casa">⌂</span> */}
//   <span className="hotel-hotel-casa">Hotel</span>
//   {/* <span className="hotel-pata">🐾</span> */}
//   <span className="hotel-pet-pet">Pet</span>
// </h1>
//       <div className="login-right">

//         <h1 className="login-title"><GiSniffingDog className='dog' />Bem-vindo de volta!</h1>
//         <p className="login-subtitle">Faça login para gerenciar a hospedagem do seu pet</p>
//         <form onSubmit={handleSubmit} className="login-form">



// <label htmlFor="email" className="form-label">Email</label>


//            {/* <label for="email" class="form-label">Email</label> */}
//           <input
//             type="email"
//             placeholder="seu@email.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           {/* <label for="password" class="form-label">Senha</label> */}
//           <label htmlFor="password" className="form-label">Senha</label>
//           <input
//             type="password"
//             placeholder="••••••••"
//             value={senha}
//             onChange={(e) => setSenha(e.target.value)}
//             required
//           />

//           <button type="submit">Login</button>
//           <hr className="linha-links" />
//           <p className="login-links">
//             <Link to="/cadastro-usuario">Criar conta</Link> {' '}
//             <Link to="/esqueci-senha">Esqueci minha senha</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Login;

















import { useState } from 'react';
import { GiSniffingDog } from "react-icons/gi";
import '../styles/Login.css';

const Login360 = ({ onLogin }) => {
  const [view, setView] = useState('login');
  const [rotate, setRotate] = useState(0);

  // Estados compartilhados
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Imagens diferentes para cada tela
  const imagensFundo = {
    login: require('../assets/login.png'),
    cadastro: require('../assets/cdu.png'),
    recuperar: require('../assets/esq.png')
  };

  // --- LOGIN ---
  const handleLogin = async (e) => {
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

  // --- CADASTRO ---
  const handleCadastro = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    alert(`Usuário ${nome} cadastrado com sucesso!`);
    setView('login');
    setRotate(0);
  };

  // --- RECUPERAR ---
  const handleRecuperar = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Digite um e-mail válido.');
      return;
    }
    alert('Link de recuperação enviado para o e-mail informado.');
    setView('login');
    setRotate(0);
  };

  // Alternar faces do cubo
  const goToCadastro = () => { setView('cadastro'); setRotate(-90); };
  const goToRecuperar = () => { setView('recuperar'); setRotate(90); };
  const goToLogin = () => { setView('login'); setRotate(0); };

  return (



    <div
      className="login360-scene"
      style={{ backgroundImage: `url(${imagensFundo[view]})` }}
    >

  <h1 className="hotel-pet">

          <span className="hotel-hotel-casa">Hotel</span>

          <span className="hotel-pet-pet">Pet</span>
        </h1>


      <div className="login360-overlay"></div>
      <div className="login360-cube" style={{ transform: `rotateY(${rotate}deg)` }}>

        {/* FACE LOGIN */}
        <div className="cube-face cube-front">
          <h1><GiSniffingDog className='dog' />Bem-Vindos de Volta!</h1>

          <p>Faça login para gerenciar a hospedagem do seu pet</p>
          <form onSubmit={handleLogin} className="login360-form">
            <label id='login-label'>Email</label>
            <input className='login-principal'
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label id='login-label'>Senha</label>
            <input className='login-principal'
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button id="login-button" type="submit">Login</button>
            <hr />
          </form>

          <p className="login-links">
            <button className="linka" onClick={goToCadastro}>Criar conta</button>
            <button className="linka" onClick={goToRecuperar}>Esqueceu sua senha?</button>
          </p>
        </div>

        {/* FACE CADASTRO */}
        <div className="cube-face cube-right">
          <h1><GiSniffingDog className='dog' />Criar Conta</h1>
          {/* <h2>Criar Conta</h2> */}
          <form onSubmit={handleCadastro} className="login360-form">
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
          </form>
          <p className="login-links">
            <button onClick={goToLogin}>Voltar ao Login</button>
          </p>
        </div>

        {/* FACE RECUPERAR */}
        <div className="cube-face cube-left">
          <h1><GiSniffingDog className='dog' />Recuperar Senha</h1>
          {/* <h2>Recuperar Senha</h2> */}
          <form onSubmit={handleRecuperar} className="login360-form">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Enviar Link</button>
          </form>
          <p className="login-links">
            <button onClick={goToLogin}>Voltar ao Login</button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login360;
