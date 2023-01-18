import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Help from "./components/Help";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
