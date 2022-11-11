import React, { useContext } from "react";
import { AppBar, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { ColorModeContext } from "./context/ThemeContext";

const Header = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <AppBar
      sx={{
        background: theme === "light" ? "white" : "#212529",
        boxShadow: "none",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Mulish",
          }}
        >
          <Typography
            sx={{
              color: theme === "light" ? "black" : "white",
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
            <Switch
              checked={theme === "dark"}
              onChange={() => changeTheme()}
              inputProps={{ "aria-label": "controlled" }}
            />
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
