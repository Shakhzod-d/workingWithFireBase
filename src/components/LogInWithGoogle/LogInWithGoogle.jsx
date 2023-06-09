import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";
import { getInfoFromLC } from "../../Utils/Utils";
import "./LogInWithGoogle.css";

const LogInWithGoogle = () => {
  const [userInfo, setUserInfo] = React.useState(
    getInfoFromLC({
      name: "name",
      email: "email",
      profilePic: "profilePic",
    })
  );
  const navigate = useNavigate();

  const logInWithGoogle = () => {
    signInWithGoogle(() => navigate("/"));
  };

  return (
    <div className="loginContainer">
      <button className="login-with-google-btn" onClick={logInWithGoogle}>
        Sign in with Google
      </button>
      <br />
      <h1>{userInfo.name && userInfo.name}</h1>
      <br />
      <h1>{userInfo.email && userInfo.email}</h1>
      <br />
      <img width={200} src={userInfo.profilePic && userInfo.profilePic} />
    </div>
  );
};

export default LogInWithGoogle;
