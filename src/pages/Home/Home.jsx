import React from "react";

import MyCalendar from "../../components/Calendar/Calendar";
import TimeSlotContainer from "../../components/TimeSlotContainer/TimeSlotContainer";
import UserInfoAside from "../../components/UserInfoAside/UserInfoAside";

import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="app">
        <UserInfoAside />
        <MyCalendar />
        <TimeSlotContainer />
      </div>
    </div>
  );
};

export default Home;
