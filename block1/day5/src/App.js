import React, { useState } from "react";
import users from "./users.json";

const styles = {
  userCardContainer: {
    display: "flex",
    border: "1px solid black",
    borderRadius: "8px",
    margin: "12px",
    width: "400px",
  },
  searchInput: {
    height: "32px",
    width: "400px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const UserCard = ({ userData }) => {
  return (
    <div style={styles.userCardContainer}>
      <img
        src={userData.avatar}
        width={100}
        height={100}
        alt={userData.username}
      />
      <div>
        <p>UserName: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Birth: {userData.date_of_birth}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [output, setOutput] = useState(users);
  const search = (val) => {
    setOutput(
      users.filter((user) => {
        return user.username.toLowerCase().includes(val.toLowerCase());
      })
    );
  };
  return (
    <div style={styles.container}>
      <div>
        <input
          type={"text"}
          onChange={(e) => {
            search(e.target.value);
          }}
          style={styles.searchInput}
        />
      </div>
      {output.length === 0 ? (
        <div>No User Found</div>
      ) : (
        output.map((userData, index) => {
          return <UserCard userData={userData} key={index} />;
        })
      )}
    </div>
  );
};

export default App;
