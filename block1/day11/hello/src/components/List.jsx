import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";

function List({ value }) {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <Box>
      <ListItem sx={{ color: theme === "light" ? "black" : "white" }}>
        {value}
      </ListItem>
    </Box>
  );
}

export default List;
