import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: 'VL-78291',
    name: 'Yuvraj Singh',
    email: 'user@velooprewards.in',
    token: 'mock_verified_session_jwt',
    coins: 480,
    level: 3,
  });
  
  const [token, setToken] = useState('mock_verified_session_jwt');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Persist session token for API interceptor
    if (token) {
      localStorage.setItem('veloop_token', token);
    }
  }, [token]);

  const value = {
    user,
    setUser,
    token,
    setToken,
    isAuthenticated,
    setIsAuthenticated,
    isLoading,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
