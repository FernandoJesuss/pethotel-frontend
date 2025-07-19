import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CadastroTutor from './pages/CadastroTutor';
import GerarNota from './pages/GerarNota';
import Relatorio from './pages/Relatorio';

import CadastroUsuario from './pages/CadastroUsuario';
import EsqueciSenha from './pages/EsqueciSenha';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastro" element={<CadastroTutor />} />
        <Route path="/nota" element={<GerarNota />} />
        <Route path="/relatorio" element={<Relatorio />} />

        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
