// // src/pages/EsqueciSenha.js
// import { useState } from 'react';

// const EsqueciSenha = () => {
//   const [email, setEmail] = useState('');

//   const handleRecuperar = (e) => {
//     e.preventDefault();
//     // Apenas simulação
//     alert(`Instruções de recuperação enviadas para: ${email}`);
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Recuperar Senha</h2>
//       <form onSubmit={handleRecuperar} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Digite seu email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="border p-2 rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white p-2 rounded">
//           Enviar Instruções
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EsqueciSenha;






import { useState } from 'react';
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
        </form>
      </div>
    </div>
  );
};

export default EsqueciSenha;
