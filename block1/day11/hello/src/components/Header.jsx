import React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <Container maxWidth="sm">
      <AppBar>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>team.</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography>Products</Typography>
            <Typography>Services</Typography>
            <Typography>Contact</Typography>
            <Typography>Log in</Typography>
          </Box>
        </Box>
      </AppBar>
    </Container>
  );
};

export default Header;
