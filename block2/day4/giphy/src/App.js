import React from "react";
import { useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [gifs, setGifs] = useState([]);
  const search = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=rGcbr5Pxhk1jMHMjvGG8rYw9SIbClxaU&q=${searchValue}&limit=25&offset=0&rating=g&lang=en`
    );
    setGifs(res.data.data);
  };
  return (
    <Container>
      <input
        placeholder="Search for GiFs"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button onClick={search}>Search</button>
      {gifs.map((gif) => {
        console.log(gif);
        return (
          <Grid item md={2}>
            <img src={gif.images.fixed_height.url} alt="" />
          </Grid>
        );
      })}
    </Container>
  );
}
export default App;
