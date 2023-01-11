import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import Howdoesitwork from "./Howdoesitwork";
import Login from "./Login";
function Header() {
  return (
    <Routes>
      <Route path="/Help" element={<Howdoesitwork />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    // <Box
    //   sx={{
    //     height: "20%",
    //     widht: "100%",
    //     padding: "40px",
    //     display: "flex",
    //     justifyContent: "flex-end",
    //   }}
    // >
    //   <Button sx={{ borderRadius: "50px", color: "#03B589" }}>
    //     How does it work?
    //   </Button>
    //   <Button
    //     sx={{
    //       backgroundColor: "#03B589",
    //       color: "white",
    //       borderRadius: "50px",
    //       width: "150px",
    //     }}
    //   >
    //     Log In
    //   </Button>
    // </Box>
  );
}

export default Header;
