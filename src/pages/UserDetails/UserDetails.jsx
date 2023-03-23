import React from "react";
import UserInfoAside from "../../components/UserInfoAside/UserInfoAside";
import UserInputContainer from "../../components/UserInputContainer/UserInputContainer";
import HomePageWrapper from "../../UI/HomePageWrapper/HomePageWrapper";

const UserDetails = () => {
  return (
      <HomePageWrapper>
        <UserInfoAside />
        <UserInputContainer />
      </HomePageWrapper>
  );
};

export default UserDetails;
