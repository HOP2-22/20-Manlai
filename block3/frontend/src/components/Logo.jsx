import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        color: "#02B589",
        fontFamily: "Lobster",
        fontWeight: "400",
        fontSize: "56px",
        lineHeight: "76px",
        display: "flex",
        justifyContent: "center",
      }}
      onClick={() => navigate("/")}
    >
      Boginoo
    </div>
  );
};

export default Logo;
