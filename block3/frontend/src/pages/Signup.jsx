import React from "react";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const signUp = async () => {
    try {
      const response = await axios.post("http://localhost:3333/register", {
        email: signUpEmail,
        password: signUpPassword,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      style={{
        height: "600px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          color: "#02B589",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "37px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "70px",
        }}
      >
        Sign up
      </div>
      <div style={{ marginBottom: "5px" }}>Email</div>
      <input
        placeholder="name@mail.domain"
        type="email"
        value={signUpEmail}
        onChange={(event) => {
          setSignUpEmail(event.target.value);
        }}
        style={{
          width: "381px",
          height: "44px",
          borderRadius: "100px",
          border: "0",
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.17)",
          marginBottom: "30px",
        }}
      />
      <div style={{ marginBottom: "5px" }}>password</div>
      <input
        placeholder="••••••••••"
        type="password"
        value={signUpPassword}
        onChange={(event) => {
          setSignUpPassword(event.target.value);
        }}
        style={{
          width: "381px",
          height: "44px",
          borderRadius: "100px",
          border: "0",
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.17)",
          marginBottom: "30px",
        }}
      />
      <div style={{ marginBottom: "5px" }}>Enter password again</div>
      <input
        placeholder="••••••••••"
        type="password"
        style={{
          width: "381px",
          height: "44px",
          borderRadius: "100px",
          border: "0",
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.17)",
          marginBottom: "30px",
        }}
      />
      <button
        onClick={signUp}
        style={{
          backgroundColor: "#02B589",
          border: "none",
          textTransform: "uppercase",
          height: "44px",
          width: "381px",
          borderRadius: "100px",
          color: "white",
          fontWeight: "700",
          marginTop: "30px",
        }}
      >
        signup
      </button>
    </div>
  );
}

export default Signup;
