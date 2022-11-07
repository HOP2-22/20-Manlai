import React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <AppBar sx={{ background: "white", boxShadow: "none" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "white",
            fontFamily: "Mulish",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontStyle: "Bold",
              fontSize: "40px",
              fontWeight: "800px",
            }}
          >
            team.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              color: "gray",
              textDecoration: "underline",
              alignItems: "center",
            }}
          >
            <Typography>Products</Typography>
            <Typography>Services</Typography>
            <Typography>Contact</Typography>
            <Typography>Log in</Typography>
            <Button variant="outlined" sx={{ textDecoration: "none" }}>
              Get Access
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
