import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
function Header() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100px",
        width: "100%",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {/* <Container> */}
      <Box
        onClick={() => {
          navigate("/help");
        }}
        sx={{
          color: "#02B589",
          padding: "30px",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "23px",
        }}
      >
        Help
      </Box>
      <Box
        onClick={() => {
          navigate("/login");
        }}
        sx={{
          color: "white",
          backgroundColor: "#02B589",
          borderRadius: "30px",
          width: "183px",
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "23px",
        }}
      >
        Login
      </Box>
      {/* </Container> */}
    </Box>
  );
}

export default Header;
