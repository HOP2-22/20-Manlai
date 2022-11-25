import "./App.css";
import React from "react";
import { Box, Container } from "@mui/material";
import Creature from "./components/Creature";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#b80404",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Container>
        <Box>
          <Creature />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
