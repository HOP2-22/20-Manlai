import React from "react";
import backgroundImage from "./backgroundimage.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  const styles = {
    bckgrndimg: {
      backgroundImage: `url(${backgroundImage})`,
      height: "100vh",
      width: "100vw",
      backgroundRepeat: "no-repeat",
      margin: 0,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
  return (
    <div style={styles.bckgrndimg}>
      <div style={styles.header}>
        <Link to={"/Home"}>team.</Link>
        <Link to={"/Products"}>Products</Link>
        <Link to={"/Services"}>Services</Link>
        <Link to={"/Login"}>Login</Link>
        <Link to={"/Contact"}>Contact</Link>
      </div>
    </div>
  );
};
export default Home;
