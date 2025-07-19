// // src/pages/CadastroUsuario.js
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CadastroUsuario = () => {
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const navigate = useNavigate();

//   const handleCadastro = (e) => {
//     e.preventDefault();
//     // Aqui simulamos o cadastro salvando no localStorage
//     const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
//     usuarios.push({ email, senha });
//     localStorage.setItem('usuarios', JSON.stringify(usuarios));
//     alert('Usuário cadastrado com sucesso!');
//     navigate('/');
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Criar Conta</h2>
//       <form onSubmit={handleCadastro} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Senha"
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white p-2 rounded">
//           Cadastrar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CadastroUsuario;



import { useState } from 'react';
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
        </form>
      </div>
    </div>
  );
};

export default CadastroUsuario;
