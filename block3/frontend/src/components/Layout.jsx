import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "./Logo";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Logo />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
