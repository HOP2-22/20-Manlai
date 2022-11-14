import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Home from "./pages/Home";
import MoreDetail from "./pages/MoreDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/post/:id" element={<MoreDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
