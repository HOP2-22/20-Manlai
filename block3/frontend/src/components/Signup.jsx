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
    <div>
      <input
        placeholder="email"
        type="email"
        value={signUpEmail}
        onChange={(event) => {
          setSignUpEmail(event.target.value);
        }}
      />
      <input
        placeholder="password"
        type="password"
        value={signUpPassword}
        onChange={(event) => {
          setSignUpPassword(event.target.value);
        }}
      />
      <button onClick={signUp}>signup</button>
    </div>
  );
}

export default Signup;
