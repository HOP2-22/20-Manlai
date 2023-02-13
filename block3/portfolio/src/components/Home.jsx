import React from "react";
// import { Routes, Route } from "react-router-dom";
import Dog from "./Dog";
import Info from "./Info";
function Home() {
  return (
    <div className="flex home">
      <Dog />
      <div className="flex intro">
        Hello, I'm Learning Programmer from Mongolia!
      </div>
      <Info />
    </div>
  );
}

export default Home;
