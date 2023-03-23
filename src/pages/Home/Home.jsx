import React from "react";

import MyCalendar from "../../components/Calendar/Calendar";
import TimeSlotContainer from "../../components/TimeSlotContainer/TimeSlotContainer";
import UserInfoAside from "../../components/UserInfoAside/UserInfoAside";
import HomePageWrapper from "../../UI/HomePageWrapper/HomePageWrapper";

const Home = () => {
  return (
      <HomePageWrapper>
        <UserInfoAside />
        <MyCalendar />
        <TimeSlotContainer />
      </HomePageWrapper>
  );
};

export default Home;
