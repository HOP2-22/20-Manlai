import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
function App() {
  useContext(AuthContext);
  return (
    <>
      <AuthContext>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/help" element={<Help />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthContext>
    </>
  );
}

export default App;
