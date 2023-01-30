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
    <div
      style={{
        height: "600px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="text"
          placeholder="https://www.web-huudas.mn/"
          value={enteredLink}
          onChange={(event) => setEnteredLink(event.target.value)}
          style={{
            width: "581px",
            height: "44px",
            borderRadius: "100px",
            border: "0",
            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.17)",
          }}
        />
        <button
          onClick={shortenLink}
          style={{
            backgroundColor: "#02B589",
            border: "none",
            textTransform: "uppercase",
            height: "44px",
            width: "192px",
            borderRadius: "100px",
            color: "white",
            fontWeight: "700",
          }}
        >
          Shorten
        </button>
      </div>
      <p>Original Link: {enteredLink}</p>
      <p>Short Link: {shortenedLink}</p>
    </div>
  );
}

export default Home;
