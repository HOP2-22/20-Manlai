import React from "react";
import { Container, Button } from "@mui/material";
import backgroundImage from "../background.jpg";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        marginTop: "60px",
        backgroundImage: `url(${backgroundImage})`,
        width: "100%",
        height: "100%",
        backgroundSize: "100% 100%",
      }}
    >
      <Container>
        <Box sx={{ height: "800px" }}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontHeight: "400",
              fontSize: "48px",
              lineHeight: "56px",
              display: "flex",
              alignItems: "center",
              color: "#FFFFFF",
            }}
          >
            Instant collaborations
            <br /> for remote teams
          </Typography>
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontStyle: "normal",
              fonteight: "700",
              fontSize: "18px",
              lineHeight: "29px",
              display: "flex",
              alignItems: "center",
              color: "#FFFFFF",
            }}
          >
            All in one for your remote team chats,
            <br /> collaboration and track projects
          </Typography>
          <Box>
            <input placeholder="email" style={{ height: "31px" }} />
            <Button sx={{ background: "#0BBEF2", color: "white" }}>
              Get Early Access
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
