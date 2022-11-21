import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [searchValue, setSearchValue] = useState("");

  const search = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=rGcbr5Pxhk1jMHMjvGG8rYw9SIbClxaU&q=${searchValue}&limit=25&offset=0&rating=g&lang=en`
    );
    console.log(res);
  };
  // useEffect(() => {
  //   const fetchGifs = async () => {
  //     try {
  //       const res = await instance.get("/");
  //       console.log(res);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  // }, []);
  return (
    <div>
      <input
        placeholder="Search for GiFs"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
export default App;
