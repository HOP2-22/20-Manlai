import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [user, setUser] = useState(null);
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
          Cookies.set("token", e.data.token);
          setUser(e.data.email);
        });
      setUser(response.data.email);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(user);
  return (
    <div>
      <input
        placeholder="email"
        value={loginEmail}
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
        type={"email"}
      />
      <input
        placeholder="password"
        value={loginPass}
        onChange={(event) => {
          setLoginPass(event.target.value);
        }}
        type={"password"}
      />
      <button onClick={login}>Login</button>
      <div>Logged in user: {user}</div>
      <div>Don't have account?</div>
      <div style={{ display: "flex" }}>
        Click
        <div
          style={{ color: "aqua", marginLeft: "5px" }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          here
        </div>
      </div>
    </div>
  );
}

export default Login;
