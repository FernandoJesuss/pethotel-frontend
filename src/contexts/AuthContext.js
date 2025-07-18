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










import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function login(username, password) {
    // Simulando login bem-sucedido e geração de token
    const fakeToken = 'fake-jwt-token-123';
    setUser({ username });
    setToken(fakeToken);
    console.log('Usuário logado:', username);
    console.log('Token simulado:', fakeToken);
  }

  function logout() {
    setUser(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

