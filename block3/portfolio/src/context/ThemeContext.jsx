import React, { createContext, useState } from "react";
export const ThemeContext = createContext({
  color: "light",
  changeColor: () => {},
});
export const ThemeProvider = ({ children }) => {
  const [webColor, setWebColor] = useState("light");
  const contextHandler = () => {
    setWebColor(webColor === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider
      value={{
        color: webColor,
        changeColor: contextHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
