import React from "react";
import { Box } from "@mui/material";
import over from "../over.png";
import creature from "../creature.png";
import under from "../under.png";

export default function Creature() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "aboslute",
      }}
    >
      <img
        src={over}
        alt=""
        height={"128px"}
        width={"128px"}
        style={{ marginTop: "0" }}
      />
      <img
        src={creature}
        alt=""
        height={"128px"}
        width={"64px"}
        style={{ position: "aboslute", marginLeft: "50" }}
      />
      <img
        src={under}
        alt=""
        height={"144px"}
        width={"128px"}
        style={{ marginTop: "0" }}
      />
    </Box>
  );
}
