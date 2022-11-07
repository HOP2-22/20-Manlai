import React from "react";
import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export const Card = ({ header, name, image, mainText, avatar }) => {
  return (
    <MuiCard sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mainText}
        </Typography>
      </CardContent>
      <CardActions>
        <Avatar alt="Remy Sharp" src={avatar} />
        <Typography>{name}</Typography>
      </CardActions>
    </MuiCard>
  );
};
export default Card;
