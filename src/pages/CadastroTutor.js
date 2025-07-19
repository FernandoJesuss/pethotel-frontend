// import { useState } from 'react';
// import api from '../services/api';
// import { useAuth } from '../contexts/AuthContext';

// const CadastroTutor = () => {
//   const { token } = useAuth();
//   const [formData, setFormData] = useState({
//     nome: '',
//     cpf: '',
//     endereco: '',
//     pet: {
//       nome: '',
//       raca: '',
//       alergias: ''
//     },
//     termosAceitos: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (name.startsWith('pet.')) {
//       const field = name.split('.')[1];
//       setFormData({
//         ...formData,
//         pet: { ...formData.pet, [field]: value }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: type === 'checkbox' ? checked : value
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/tutor/cadastro', formData, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert(res.data.message);
//     } catch (err) {
//       alert('Erro ao cadastrar tutor');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Cadastro de Tutor</h2>
//       <input type="text" name="nome" placeholder="Nome do tutor" value={formData.nome} onChange={handleChange} required />
//       <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} required />
//       <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} required />

//       <h3>Informações do Pet</h3>
//       <input type="text" name="pet.nome" placeholder="Nome do pet" value={formData.pet.nome} onChange={handleChange} required />
//       <input type="text" name="pet.raca" placeholder="Raça do pet" value={formData.pet.raca} onChange={handleChange} required />
//       <input type="text" name="pet.alergias" placeholder="Alergias do pet" value={formData.pet.alergias} onChange={handleChange} />

//       <label>
//         <input type="checkbox" name="termosAceitos" checked={formData.termosAceitos} onChange={handleChange} required />
//         Aceito os termos e condições
//       </label>

//       <button type="submit">Cadastrar</button>
//     </form>
//   );
// };

// export default CadastroTutor;







import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const CadastroTutor = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    pet: {
      nome: '',
      raca: '',
      alergias: ''
    },
    termosAceitos: false
  });

  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState(null);
  const [erro, setErro] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('pet.')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        pet: { ...formData.pet, [field]: value }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const validarCampos = () => {
    const { nome, cpf, endereco, termosAceitos } = formData;
    const { nome: petNome, raca } = formData.pet;
    if (!nome || !cpf || !endereco || !petNome || !raca || !termosAceitos) {
      return 'Preencha todos os campos obrigatórios e aceite os termos.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const erroValidacao = validarCampos();
    if (erroValidacao) {
      setErro(erroValidacao);
      setMensagem(null);
      return;
    }

    if (!token) {
      setErro('Você precisa estar logado para cadastrar.');
      return;
    }

    setLoading(true);
    setErro(null);
    setMensagem(null);

    try {
      console.log('Dados enviados:', formData);
      console.log('Token usado:', token);

      // Simulando delay
      setTimeout(() => {
        setMensagem('Cadastro simulado com sucesso!');
        setLoading(false);
        setFormData({
          nome: '',
          cpf: '',
          endereco: '',
          pet: {
            nome: '',
            raca: '',
            alergias: ''
          },
          termosAceitos: false
        });
      }, 800);
    } catch (err) {
      setErro('Erro ao cadastrar tutor');
      setLoading(false);
    }
  };

  if (!token) {
    return <p style={{ color: 'red' }}>Você precisa estar logado para acessar esta página.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Tutor</h2>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {mensagem && <p style={{ color: 'green' }}>{mensagem}</p>}

      <input type="text" name="nome" placeholder="Nome do tutor" value={formData.nome} onChange={handleChange} />
      <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
      <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} />

      <h3>Informações do Pet</h3>
      <input type="text" name="pet.nome" placeholder="Nome do pet" value={formData.pet.nome} onChange={handleChange} />
      <input type="text" name="pet.raca" placeholder="Raça do pet" value={formData.pet.raca} onChange={handleChange} />
      <input type="text" name="pet.alergias" placeholder="Alergias do pet" value={formData.pet.alergias} onChange={handleChange} />

      <label>
        <input type="checkbox" name="termosAceitos" checked={formData.termosAceitos} onChange={handleChange} />
        Aceito os termos e condições
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default CadastroTutor;
