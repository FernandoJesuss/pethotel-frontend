import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/CadastroTutor.css';
import cadastro from '../assets/cadastro.png'; // imagem gerada

const CadastroTutor = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    endereco: '',
    pet: {
      nome: '',
      especie: '',
      raca: '',
      idade: '',
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
      setFormData({ ...formData, pet: { ...formData.pet, [field]: value } });
    } else {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposObrigatorios = [
      { nome: 'nome', label: 'Nome completo' },
      { nome: 'cpf', label: 'CPF' },
      { nome: 'telefone', label: 'Telefone' },
      { nome: 'pet.nome', label: 'Nome do Pet' },
      { nome: 'pet.especie', label: 'Espécie' },
    ];

    for (const campo of camposObrigatorios) {
      const valor = campo.nome.startsWith('pet.')
        ? formData.pet[campo.nome.split('.')[1]]
        : formData[campo.nome];
      if (!valor.trim()) {
        setErro(`O campo "${campo.label}" é obrigatório.`);
        return;
      }
    }

    if (!formData.termosAceitos) {
      setErro('Você precisa aceitar os termos.');
      return;
    }

    setErro(null);
    setLoading(true);
    setMensagem(null);

    setTimeout(() => {
      setMensagem('Cadastro realizado com sucesso!');
      setLoading(false);

      // Limpa os campos após cadastro
      setFormData({
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        endereco: '',
        pet: {
          nome: '',
          especie: '',
          raca: '',
          idade: '',
          alergias: ''
        },
        termosAceitos: false
      });

      // Remove a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setMensagem(null);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="cadastro-split-container">
      <div className="imagem-lateral">
        <img src={cadastro} alt="Tutor com cachorro" />
      </div>
      <div className="cadastro-container">
        <div className="form-box">
          <h1 className="logo">🐾 <span>PetCare</span> 🐾</h1>
          <p className="slogan">Cadastre seu pet com carinho e atenção aos detalhes</p>
          <div className="linha-roxa"></div>

          <form onSubmit={handleSubmit}>
            <h3 className="section-title">📘 Informações do Tutor</h3>
            <div className="grid-2">
              <div className="form-group">
                <label>Nome completo *</label>
                <input type="text" name="nome" placeholder="Digite seu nome completo" value={formData.nome} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Telefone *</label>
                <input type="text" name="telefone" placeholder="(11) 99999-9999" value={formData.telefone} onChange={handleChange} required />
              </div>
            </div>
            <div className="grid-2">
              <div className="form-group">
                <label>CPF *</label>
                <input type="text" name="cpf" placeholder="000.000.000-00" value={formData.cpf} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" name="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Endereço completo</label>
              <input type="text" name="endereco" placeholder="Rua, número, bairro, cidade - CEP" value={formData.endereco} onChange={handleChange} />
            </div>

            <h3 className="section-title">📘 Informações do Pet</h3>
            <div className="grid-2">
              <div className="form-group">
                <label>Nome do pet *</label>
                <input type="text" name="pet.nome" placeholder="Nome do seu amiguinho" value={formData.pet.nome} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Espécie *</label>
                <select name="pet.especie" value={formData.pet.especie} onChange={handleChange} required>
                  <option value="">Selecione a espécie</option>
                  <option value="Cão">Cão</option>
                  <option value="Gato">Gato</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
            <div className="grid-2">
              <div className="form-group">
                <label>Raça</label>
                <input type="text" name="pet.raca" placeholder="Raça do pet (se souber)" value={formData.pet.raca} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Idade aproximada</label>
                <select name="pet.idade" value={formData.pet.idade} onChange={handleChange}>
                  <option value="">Selecione a idade</option>
                  <option value="Filhote">Filhote</option>
                  <option value="Adulto">Adulto</option>
                  <option value="Idoso">Idoso</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Informações especiais</label>
              <textarea
                name="pet.alergias"
                placeholder="Alergias, medicamentos, cuidados especiais, temperamento..."
                value={formData.pet.alergias}
                onChange={handleChange}
              ></textarea>
            </div>

            <label className="checkbox">
              <input type="checkbox" name="termosAceitos" checked={formData.termosAceitos} onChange={handleChange} />
              <span>
                Aceito os <a href="#">termos e condições de uso</a> e autorizo o tratamento dos dados pessoais conforme a <a href="#">política de privacidade</a>.
              </span>
            </label>

            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : '📦 CADASTRAR PET COM AMOR'}
            </button>

            {mensagem && <p className="success">{mensagem}</p>}
            {erro && <p className="error">{erro}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroTutor;
