import React from "react";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box
      sx={{
        height: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box style={{ color: "black" }}>Made with ♥️ by Pinecone Academy</Box>
      <Box style={{ color: "black" }}>©boginoo.io 2023</Box>
    </Box>
  );
}

export default Footer;
