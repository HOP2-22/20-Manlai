import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [rotated, setRotated] = useState(false);
  return (
    <Box className="wrapper" sx={{ width: "100vw", height: "100vh" }}>
      <Container>
        <div
          onClick={() => setRotated(!rotated)}
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
            transform: `rotateY(${rotated ? "180deg" : "0deg"})`,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s",
          }}
        >
          <div
            style={{
              position: "absolute",
              background: "red",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
            }}
          ></div>
          <div
            style={{
              background: "blue",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          ></div>
        </div>
      </Container>
    </Box>
  );
}
