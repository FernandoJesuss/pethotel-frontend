import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CadastroTutor from './pages/CadastroTutor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/cadastro" element={<CadastroTutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
