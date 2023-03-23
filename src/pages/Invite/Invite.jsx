import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillCameraVideoFill, BsGlobeAmericas } from "react-icons/bs";
import { useSelector } from "react-redux";

import HomePageWrapper from "../../UI/HomePageWrapper/HomePageWrapper";
import { getInfoFromLC } from "../../Utils/Utils";

import "./Invite.css";

const Invite = () => {
  const [userInfo, setUserInfo] = React.useState(
    getInfoFromLC({
      name: "name" || "",
      email: "email" || "default name",
      profilePic: "profilePic" || "default name",
    })
  );
  const { eventTime, currentYear, meetingHour } = useSelector((state) => state);


  return (
  <HomePageWrapper>
    <div>
      <img
        src={userInfo && userInfo.profilePic}
        style={{ borderRadius: "50%" }}
        width="65"
        alt="user image"
      />
      <h2>Comfirmed</h2>
      <p>You are scheduled with {userInfo.name}. </p>
      <br />
      <hr />
      <br />
      <div className="circle-container"> <div className="circle"></div> <h2>Let's talk</h2></div>
      
      <p className="time"> <AiOutlineCalendar size={20} /> <span className="min">{meetingHour} {eventTime} {currentYear}</span></p> 
      <p className="time"><BsGlobeAmericas /> <span className="min">{new Date().toString().slice(35, 59)}</span></p>
      <p className="time"><BsFillCameraVideoFill size={20} /> <span className="min">Web conferencing details to follow.</span></p>

        <br />
      <p>A calendar invitation has been sent to your email address.</p>
      <br />
      <hr />
    </div>
  </HomePageWrapper>)
};

export default Invite;
