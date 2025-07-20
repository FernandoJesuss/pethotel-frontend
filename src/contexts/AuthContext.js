// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   function login(username, password) {
//     setUser({ username });
//   }

//   function logout() {
//     setUser(null);
//   }

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }










// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   function login(username, password) {
//     // Simulando login bem-sucedido e geração de token
//     const fakeToken = 'fake-jwt-token-123';
//     setUser({ username });
//     setToken(fakeToken);
//     console.log('Usuário logado:', username);
//     console.log('Token simulado:', fakeToken);
//   }

//   function logout() {
//     setUser(null);
//     setToken(null);
//   }

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }






// import React, { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     // Recupera dados do localStorage quando o app inicia
//     const storedAuth = localStorage.getItem('authData');
//     if (storedAuth) {
//       try {
//         const parsed = JSON.parse(storedAuth);
//         setUser(parsed.user);
//         setToken(parsed.token);
//       } catch (err) {
//         console.error('Erro ao recuperar dados de autenticação:', err);
//       }
//     }
//   }, []);

//   function login(username, password) {
//     // Simula login
//     const fakeToken = 'fake-jwt-token-123';
//     const userData = { username };

//     // Salva no state e localStorage
//     setUser(userData);
//     setToken(fakeToken);
//     localStorage.setItem('authData', JSON.stringify({ user: userData, token: fakeToken }));

//     console.log('Usuário logado:', username);
//     console.log('Token simulado:', fakeToken);
//   }

//   function logout() {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem('authData');
//   }

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }








// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
