import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// import { Context } from "../context/AuthContext";

function Login() {
  // const { User, setuser } = useContext(Context);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const navigate = useNavigate();

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const login = async () => {
    try {
      const response = await axios
        .post("http://localhost:3333/login", {
          email: loginEmail,
          password: loginPass,
        })
        .then((e) => {
          Cookies.set("token", e.data.email);
          // setuser(e.data.email);
        });
      // setuser(response.data.email);
      console.log(response.data);
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
        Login
      </div>
      <div style={{ marginBottom: "5px" }}>Email</div>
      <input
        placeholder="name@mail.domain"
        value={loginEmail}
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
        type={"email"}
        style={{
          width: "381px",
          height: "44px",
          borderRadius: "100px",
          border: "0",
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.17)",
          marginBottom: "30px",
        }}
      />
      <div style={{ marginBottom: "5px" }}>Password</div>
      <input
        placeholder="••••••••••"
        value={loginPass}
        onChange={(event) => {
          setLoginPass(event.target.value);
        }}
        type={"password"}
        style={{
          width: "381px",
          height: "44px",
          borderRadius: "100px",
          border: "0",
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.17)",
          marginBottom: "30px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <input type={"checkbox"} />
        <div style={{ marginRight: "100px" }}>Remember me</div>
        <a href="/forgotPass">Forgot password</a>
      </div>
      <button
        onClick={login}
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
        Login
      </button>
      <div
        onClick={() => {
          navigate("/signup");
        }}
        style={{ color: "aqua" }}
      >
        Click Here if you are new user!
      </div>
    </div>
  );
}

export default Login;
