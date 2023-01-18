import React from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3333/login", {
        email: loginEmail,
        password: loginPass,
      });
      setUser(response.data.email);
    } catch (err) {
      console.error(err);
    }
  };

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
    </div>
  );
}

export default Login;
