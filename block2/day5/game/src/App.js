import "./App.css";
import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Creature from "./components/Creature";

function App() {
  const [rats, setRats] = useState(
    new Array(3).fill(null).map(() => new Array(5).fill(false))
  );
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
          {rats.map((ratRow) => (
            <div style={{ display: "flex" }}>
              {ratRow.map((rat) => (
                <Creature active={rat} />
              ))}
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
