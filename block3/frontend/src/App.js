import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Footer />} />
    </Routes>
  );
}

export default App;
