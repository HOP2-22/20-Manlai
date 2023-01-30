import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
export const Context = createContext({
  user: null,
});
export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [User, setuser] = useState(null);

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.token = token;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://localhost:3333/");
      setUser(res.data.email);
    };
    getUser();
  }, []);
  return (
    <Context.Provider
      value={{
        user,
        User,
        setuser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
