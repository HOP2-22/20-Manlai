import React, { useContext } from "react";
import { Box } from "@mui/system";
import Card from "../components/Card";
import { Container, Grid, Button } from "@mui/material";
import cardData from "../cardMedia.json";
import { ColorModeContext } from "../context/ThemeContext";

export default function Home() {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        background: theme === "light" ? "white" : "#121212",
      }}
    >
      <Container>
        <Box sx={{ fontFamily: "Mulish" }}>
          <Box sx={{ marginTop: "60px" }}>
            <h1
              style={{
                fontSize: "50px",
                color: theme === "light" ? "#121212" : "white",
              }}
            >
              Blog posts
            </h1>
            <h5 style={{ color: "gray", fontSize: "20px" }}>
              Our latest updates and blogs about managing your team
            </h5>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {cardData.map((card) => (
                <Grid xs={4} spacing={1}>
                  <Box sx={{ marginBottom: 1 }}>
                    <Card
                      header={card.CardContentHeader}
                      name={card.CardContentName}
                      image={card.Image}
                      mainText={card.CardContentBody}
                      avatar={""}
                      date={""}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "gray",
                  marginTop: "40px",
                  marginBottom: "150px",
                }}
              >
                Next {">"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
