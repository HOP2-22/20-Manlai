import React, { useContext } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container } from "@mui/material";
import "./Comp.css";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../context/ThemeContext";
function Header() {
  const { color, changeColor } = useContext(ThemeContext);
  return (
    <Container maxWidth="md">
      <div className="flex White header-adjusts">
        <div className="flex nav">
          <div className="name">
            <PetsIcon />
            Erdenemunkh Manlai
          </div>
          <div className="fixer">Works</div>
          <div className="fixer">Posts</div>
          <div className="fixer">Uses</div>
          <div className="fixer">
            <GitHubIcon sx={{ fontSize: "medium" }} />
            Source
          </div>
        </div>
        <button className="theme-button" onClick={() => changeColor()}>
          {color === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </Container>
  );
}

export default Header;
