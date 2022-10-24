import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      Login
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Login;
