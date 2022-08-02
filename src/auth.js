import { createContext, useState, useContext } from "react";
import * as api from "./api";

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || null
  );

  const signIn = async (username, password) => {
    try {
      const token = await api.getToken(username, password);
      window.localStorage.setItem("token", token);
      setToken(token);
    } catch (e) {
      console.log(e.message);
    }
  };

  const signOut = () => {
    window.localStorage.setItem("token", "");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
