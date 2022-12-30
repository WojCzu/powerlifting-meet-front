import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);

  const register = async ({ username, email, password }) => {
    console.log("register", username, email, password);
  };

  const login = async ({ email: identifier, password }) => {
    console.log("login", identifier, password);
  };

  const logout = async () => {
    console.log("logout");
    setUser(false);
  };

  const isUserLoggedIn = async user => {
    console.log(user);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, isUserLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
