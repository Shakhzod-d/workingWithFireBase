import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsFillCameraVideoFill, BsGlobeAmericas } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrLinkPrevious } from "react-icons/gr";

import { getInfoFromLC } from "../../Utils/Utils";
import "./UserInfoAside.css";

const UserInfoAside = () => {
  const [userInfo, setUserInfo] = React.useState(
    getInfoFromLC({
      name: "name" || "",
      email: "email" || "default name",
      profilePic: "profilePic" || "default name",
    })
  );
  const navigate = useNavigate();
  const location = useLocation();
  const { eventTime, currentYear, meetingHour } = useSelector((state) => state);

  return (
    <div className="userInfoAsideContainer">
      {location.pathname === "/userDetails" && <div onClick={() => navigate("/")} className="prevBtn"><GrLinkPrevious size={16}/></div>}
      <img
        src={userInfo && userInfo.profilePic}
        style={{ borderRadius: "50%" }}
        width="65"
        alt="user image"
      />
      <h3 className="userName">{userInfo && userInfo.name}</h3>
      <h2>Let's Talk</h2>

      <div>
        <p className="time"><MdOutlineAccessTimeFilled size={20} /> <span className="min">30 min</span> </p>
        <p className="time"><BsFillCameraVideoFill size={20} /> <span className="min">Web conferencing details provided upon confirmation.</span> </p>
        <br />
        
        {location.pathname !== "/userDetails" && <p>We will briefly discuss your project/idea, or if we have already met, we will go over more details of your project and the next steps.</p>}
        {location.pathname === "/userDetails" &&  <p className="time"> <AiOutlineCalendar size={20} /> <span className="min">{meetingHour} {eventTime} {currentYear}</span></p> }
        {location.pathname === "/userDetails" && <p className="time"><BsGlobeAmericas /> <span className="min">{new Date().toString().slice(35, 59)}</span></p> }

      </div>
    </div>
  );
};

export default UserInfoAside;
