import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Container, Button } from "@mui/material";
import "./Comp.css";
function Header() {
  return (
    <Container maxWidth="md">
      <div className="flex White header-height">
        <div className="name">
          <PetsIcon />
          Erdenemunkh Manlai
        </div>
        <div className="flex">
          <div>Works</div>
          <div>Posts</div>
          <div>Uses</div>
          <div>
            <GitHubIcon />
            Source
          </div>
        </div>
        <Button className="theme-button">
          <LightModeIcon />
        </Button>
      </div>
    </Container>
  );
}

export default Header;
