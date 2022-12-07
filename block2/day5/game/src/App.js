import "./App.css";
import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import Creature from "./components/Creature";

function App() {
  const [running, setRunning] = useState(false);
  const [rats, setRats] = useState(
    new Array(3).fill(null).map(() => new Array(5).fill(false))
  );
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        const temp = [...rats];
        for (let i = 0; i < 3; i++) {
          for (var j = 0; j < 5; j++) {
            temp[i][j] = Math.random() < 0.5;
          }
        }
        setRats(temp);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [rats, running]);
  // console.log(rats);

  return (
    <Box
      sx={{
        backgroundColor: "#b80404",
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => setRunning(true)}>start</button>
      <Container>
        <Box>
          {rats.map((ratRow, indexe) => (
            <div key={indexe} style={{ display: "flex" }}>
              {ratRow.map((rat, index) => (
                <div key={index}>
                  <Creature active={rat} />
                </div>
              ))}
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
