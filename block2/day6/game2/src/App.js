import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
// import "./App.css";
// import React from "react";
// import { chunk } from "lodash";

export default function App() {
  const characters = ["ironman", "spiderman", "hulk", "batman", "flash"];
  const [cards, setCards] = useState([]);
  const [first, setFirst] = useState(null);
  const [flips, setFlips] = useState(
    new Array(characters.length * 2).fill(false)
  );
  const generate = () => {
    let newCharacters = [...characters, ...characters].sort(
      () => 0.5 - Math.random()
    );
    setCards(newCharacters);
  };
  const flip = (index) => {
    setFlips(flips.map((flip, ind) => (index === ind ? !flip : flip)));
    if (first == null) {
      setFirst(index);
      return;
    }
    if (cards[index] === cards[first] && cards[index] !== cards[first]) {
      setTimeout(() => {
        setCards(
          cards.map((card, ind) => (index == ind || first == ind ? null : card))
        );
        setFirst(null);
      }, 500);
    } else {
      setTimeout(() => {
        setFlips(flips.map((flip, idx) => false));
        setFirst(null);
      }, 500);
    }
  };
  useEffect(() => {
    generate();
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cards.map((character, index) => {
            if (!character)
              return <div style={{ width: "200px", height: "200px" }} />;
            return (
              <Card
                key={index}
                character={character}
                rotated={flips[index]}
                flip={() => {
                  flip(index);
                }}
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
const Card = ({ character, rotated, flip }) => {
  return (
    <div
      onClick={() => flip()}
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        transform: `rotateY(${rotated ? "180deg" : "0deg"})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.5s",
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
      >
        <img
          src={`${character}.png`}
          style={{
            width: "100%",
            height: "100%",
          }}
          alt={""}
        />
      </div>
    </div>
  );
};
