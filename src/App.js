import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CadastroTutor from './pages/CadastroTutor';
import GerarNota from './pages/GerarNota';
import Relatorio from './pages/Relatorio';
import CadastroUsuario from './pages/CadastroUsuario';
import EsqueciSenha from './pages/EsqueciSenha';
import RequireAuth from './components/RequireAuth'; 
import { AuthProvider } from './contexts/AuthContext';
import GerenciadorServicos from './pages/GerenciadorServicos';
import CalendarioCompromissos from './pages/CalendarioCompromissos';
import ParteVendas from './pages/ParteVendas';


function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={() => navigate('/dashboard')} />} />
      
      {/* Rotas protegidas */}
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="/cadastro" element={<RequireAuth><CadastroTutor /></RequireAuth>} />
      <Route path="/nota" element={<RequireAuth><GerarNota /></RequireAuth>} />
      <Route path="/relatorio" element={<RequireAuth><Relatorio /></RequireAuth>} />
      <Route path="/servicos" element={<GerenciadorServicos />} />
      <Route path="/calendario" element={<CalendarioCompromissos />} />
       <Route path="/vendas" element={<ParteVendas />} />

      {/* Rotas públicas */}
      <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
    </Routes>
  );
}



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
