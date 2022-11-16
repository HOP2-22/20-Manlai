import React from "react";
import { ColorModeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Box } from "@mui/system";

const Contact = () => {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        marginTop: "60px",
        background: theme === "light" ? "white" : "#121212",
        marginBottom: "-22px",
      }}
    >
      <h1 style={{ color: theme === "light" ? "black" : "white" }}>
        Contact Page
      </h1>
    </Box>
  );
};
export default Contact;
