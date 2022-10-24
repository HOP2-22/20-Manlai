import React, { useRef, useState } from "react";

// const styles = {
//   userCardContainer: {};
// }

function App() {
  const [outPut, setOutPut] = useState(users);
  const search = (val) => {
    setOutPut(() => {
      return user.username.toLowerCase().includes(val.toLowerCase());
    });
  };
  return (
    <div styles={styles.container}>
      <div>
        <input
          type="text"
          onchange={(e) => {
            search(e.target.value);
          }}
          style={styles.searchInput}
        />
      </div>
      {output.length === 0 ? (
        <div>No user found.</div>
        ) : (
          output.map((userData, index) => {
            return <UserCard userdata={userData} key={index} />;
        })
        )
        </div>
      }

export default App;
