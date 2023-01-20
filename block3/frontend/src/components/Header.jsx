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
      }}
    >
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          onClick={() => {
            navigate("/help");
          }}
        >
          Help
        </Box>
        <Box
          onClick={() => {
            navigate("/login");
          }}
          sx={{ padding: "10px" }}
        >
          Login
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
