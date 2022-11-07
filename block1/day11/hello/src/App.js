import React from "react";
import Header from "./Header";
import { Box } from "@mui/system";
import Card from "./components/Card";
import { Container, Grid } from "@mui/material";
import cardData from "./cardMedia.json";
const App = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Box sx={{ fontFamily: "Mulish" }}>
          <Box sx={{ marginTop: "70px" }}>
            <h1
              style={{
                fontSize: "50px",
              }}
            >
              Blog posts
            </h1>
            <h5 style={{ color: "gray", fontSize: "20px" }}>
              Our latest updates and blogs about managing your team
            </h5>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {cardData.map((card) => (
                <Grid xs={4}>
                  <Card
                    header={card.CardContentHeader}
                    name={card.CardContentName}
                    image={card.Image}
                    mainText={card.CardContentBody}
                    avatar={""}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
