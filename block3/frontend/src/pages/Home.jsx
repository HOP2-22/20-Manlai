import React from "react";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [enteredLink, setEnteredLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const shortenLink = async () => {
    try {
      const response = await axios.post("http://localhost:3333/", {
        shortenedLink: shortenLink,
        email: "test@example.com",
      });
      setShortenedLink(response.data.url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="https://www.web-huudas.mn"
        value={enteredLink}
        onChange={(event) => setEnteredLink(event.target.value)}
      />
      <button onClick={shortenLink}>Shorten</button>
      <p>Short Link: {shortenedLink}</p>
    </div>
  );
}

export default Home;
