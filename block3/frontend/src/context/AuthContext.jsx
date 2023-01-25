import React from "react";
import { createContext } from "react";

const LoggedUserContext = createContext();

const AuthContext = ({ children }) => {
  return <LoggedUserContext.Provider>{children}</LoggedUserContext.Provider>;
};

export default AuthContext;
