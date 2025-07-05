import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token'); // Check token on init
  });

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token'); // Clear both tokens
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);