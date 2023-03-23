import React from "react";
import UserInfoAside from "../../components/UserInfoAside/UserInfoAside";
import UserInputContainer from "../../components/UserInputContainer/UserInputContainer";

import "./UserDetails.css";

const UserDetails = () => {
  return (
    <div className="parent">
      <div className="userDetailsContainer">
        <UserInfoAside />
        <UserInputContainer />
      </div>
    </div>
  );
};

export default UserDetails;
