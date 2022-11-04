import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
