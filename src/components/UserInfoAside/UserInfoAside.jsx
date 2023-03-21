import React from 'react'
import { getInfoFromLC } from '../../Utils/Utils'

const UserInfoAside = () => {
    const userInfoObj = getInfoFromLC({name: 'name', email: "email",  profilePic: 'profilePic'});

  return (
    <div>
        <img src={userInfoObj && userInfoObj.profilePic || ""} style={{borderRadius: "50%"}} width="120" alt="user image" />
        <h2>{userInfoObj && userInfoObj.name || "default name"}</h2>
    </div>
  )
}

export default UserInfoAside