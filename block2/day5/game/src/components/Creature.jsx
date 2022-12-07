import React from "react";
import { Box } from "@mui/material";
import over from "../over.png";
import creature from "../creature.png";
import under from "../under.png";
import "../App.css";

export default function Creature({ active }) {
  console.log(active);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "260px",
        width: "128px",
      }}
    >
      <img
        src={over}
        alt=""
        height={"128px"}
        width={"128px"}
        style={{ marginTop: "0px", zIndex: "0", position: "absolute", top: 0 }}
      />
      <img
        className="abc"
        src={creature}
        alt=""
        height={"128px"}
        width={"64px"}
        style={{
          marginLeft: "30px",
          zIndex: "1",
          position: "absolute",
          bottom: "100px",
          transform: `translateY(${active ? 80 : 0}px)`,
          transition: "all 2s",
        }}
        onClick={() => {
          setScore(prev);
        }}
      />
      <img
        src={under}
        alt=""
        height={"144px"}
        width={"128px"}
        style={{
          marginBottom: "10px",
          zIndex: "2",
          position: "absolute",
          bottom: 0,
        }}
      />
    </Box>
  );
}
