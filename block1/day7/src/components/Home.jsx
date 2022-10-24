import React from "react";
import { Link } from "react-router-dom";
import users from "../users (1).json";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {users.map((user) => {
        return (
          <Link key={user.id} to={user.first_name}>
            {user.first_name}
            <img src={user.avatar} alt="" />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
