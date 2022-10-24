import React, { useRef } from "react";

function App() {
  // const [phoneNumber, setPhoneNumber] =
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  const userName = useRef("");
  const email = useRef("");
  const phoneNumber = useRef("");
  function Submit() {
    console.log("Name:", userName);
  }

  function focus() {
    userName.current.focus();
  }
  return (
    <div>
      <div>Email</div>
      <input
        ref={email}
        type="text"
        value={email.current.value}
        onChange={(event) => {
          email.current = event.target.value;
        }}
      />
      <div>SIGN UP</div>
      <div>Name</div>
      <input
        type="text"
        value={userName.current.value}
        onChange={(event) => {
          userName.current = event.target.value;
        }}
      />
      <div>Email</div>
      <input
        ref={email}
        type="text"
        value={email.current.value}
        onChange={(event) => {
          email.current = event.target.value;
        }}
      />
      <div>PhoneNumber</div>
      <input
        ref={phoneNumber}
        type="text"
        value={phoneNumber.current.value}
        onChange={(event) => {
          phoneNumber.current = event.target.value;
        }}
      />
      {/* <div>Email</div> */}
      {/* <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      /> */}
      <button onClick={Submit}>submit</button>
      <button onClick={focus}>focus</button>
    </div>
  );
}
export default App;
