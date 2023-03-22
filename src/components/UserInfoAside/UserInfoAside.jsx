import React from "react";
import { useNavigate } from "react-router-dom";

import { getInfoFromLC } from "../../Utils/Utils";

const UserInfoAside = () => {
  const [userInfo, setUserInfo] = React.useState(
    getInfoFromLC({
      name: "name" || "",
      email: "email" || "default name",
      profilePic: "profilePic" || "default name",
    })
  );
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={userInfo && userInfo.profilePic}
        style={{ borderRadius: "50%" }}
        width="120"
        alt="user image"
      />
      <h2>{userInfo && userInfo.name}</h2>
    </div>
  );
};

export default UserInfoAside;
