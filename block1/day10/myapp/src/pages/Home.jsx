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
      justifyContent: "space-around",
      padding: "20px",
    },
    pageStyle: {
      fontfamily: "Mulish",
      fontsize: "16px",
      fontweight: "700",
      lineheight: "28px",
      letterspacing: "0em",
      textalign: "center",
    },
    team: {
      fontfamily: "Mulish",
      fontstyle: "normal",
      fontweight: "800",
      fontsize: "30px",
      lineheight: "38px",
      display: "flex",
      alignitems: "center",
      textalign: "center",

      color: "#FFFFFF",
    },
  };
  return (
    <div style={styles.bckgrndimg}>
      <div style={styles.header}>
        <Link to={"/Home"} style={styles.team}>
          team.
        </Link>
        <Link to={"/Products"} style={styles.pageStyle}>
          Products
        </Link>
        <Link to={"/Services"} style={styles.pageStyle}>
          Services
        </Link>
        <Link to={"/Contact"} style={styles.pageStyle}>
          Contact
        </Link>
        <Link to={"/Login"} style={styles.pageStyle}>
          Login
        </Link>
      </div>
    </div>
  );
};
export default Home;
