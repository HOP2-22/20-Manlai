import React, { useContext } from "react";
import { AppBar, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { ColorModeContext } from "./context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <AppBar
      sx={{
        background: theme === "light" ? "white" : "#212529",
        boxShadow: "none",
        height: "60px",
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
          <Link to="/" sx={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: theme === "light" ? "#121212" : "white",
                fontFamily: "Mulish",
                fontSize: "40px",
                textAlign: "center",
                textDecoration: "none",
                fontWeight: "800",
              }}
            >
              team.
            </Typography>
          </Link>
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
            <Link to="/Products">Products</Link>
            <Link to="/Services">BlogPosts</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Login">Log in</Link>
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
