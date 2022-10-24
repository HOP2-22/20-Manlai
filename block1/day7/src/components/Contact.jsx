import React from "react";
import { useParams } from "react-router-dom";
import users from "../users (1).json";
const Contact = () => {
  const { username } = useParams();
  const userDetail = users.find((user) => user.first_name === username);
  console.log(userDetail);
  return (
    <div>
      <h1>{userDetail.first_name}</h1>
      <h1>{userDetail.last_name}</h1>
      <h1>{userDetail.email}</h1>
      {/* <h1>{userDetail.address}</h1>
      <h1>{userDetail.date_of_birth}</h1>
      <h1>{userDetail.phone_number}</h1>
      <h1>{userDetail.gender}</h1>
      <h1>{userDetail.id}</h1> */}
    </div>
  );
};
export default Contact;
