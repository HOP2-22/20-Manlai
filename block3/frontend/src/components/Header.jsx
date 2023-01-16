import React from "react";
import { Route, Routes } from "react-router-dom";

function Header() {
  return (
    <Routes>
      <Route path="/Help" />
      <Route path="/Login" />
    </Routes>
  );
}

export default Header;
