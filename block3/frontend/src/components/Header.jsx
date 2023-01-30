import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AuthContext";

function Header() {
  const { User } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      <Box
        onClick={() => {
          navigate("/help");
        }}
        sx={{
          color: "#02B589",
          padding: "30px",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "23px",
        }}
      >
        Help
      </Box>
      {User ? (
        <Box
          sx={{
            fontamily: "Ubuntu",
            fontStyle: "normal",
            fontHeight: "700",
            fontSize: "20px",
            lineHeight: "23px",
            textlign: "right",
          }}
        >
          {User}
        </Box>
      ) : (
        <Box
          onClick={() => {
            navigate("/login");
          }}
          sx={{
            color: "white",
            backgroundColor: "#02B589",
            borderRadius: "30px",
            width: "183px",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "23px",
          }}
        >
          Login
        </Box>
      )}
    </Box>
  );
}

export default Header;
