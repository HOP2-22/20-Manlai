import React from "react";
import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";

export const Card = ({ header, name, image, mainText, avatar }) => {
  const { theme, changeTheme } = useContext(ColorModeContext);
  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        maxHeight: 400,
        background: theme === "light" ? "white" : "#212529",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "gray" }}
        >
          {header}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "gray" }}
        >
          {mainText}
        </Typography>
      </CardContent>
      <CardActions>
        <Avatar alt="Remy Sharp" src={avatar} />
        <Typography sx={{ color: "gray" }}>{name}</Typography>
        <Typography sx={{ color: "silver" }}>I</Typography>
        <Typography sx={{ color: "gray" }}>2nd January, 2022</Typography>
      </CardActions>
    </MuiCard>
  );
};
export default Card;
