import React, { createContext } from "react";
import { useState } from "react";

export const ColorModeContext = createContext();

export default function ThemeContext({ children }) {
  const [theme, setTheme] = useState("light");
  const ColorModeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ColorModeContext.Provider
      value={{ theme: theme, changeTheme: ColorModeHandler }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}
