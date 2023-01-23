import React from "react";
import { useState } from "react";

function Home() {
  const [givenLink, setGivenLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const ShortenLink = () => {};
  return (
    <div>
      <input placeholder="https://www.web-huudas.mn" value={givenLink} />
      <button onClick={ShortenLink}>Shorten</button>
    </div>
  );
}

export default Home;
