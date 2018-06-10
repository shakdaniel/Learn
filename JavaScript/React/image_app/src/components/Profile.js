import React from "react";

const Profile = props =>
  <div>
    <h2>Name: {props.name}</h2>
    <img src={props.imgURL} alt="John Doe" />
  </div>

export default Profile;