import React, { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";

export function Home() {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return <div>home theme: {theme}</div>;
}
export default Home;
