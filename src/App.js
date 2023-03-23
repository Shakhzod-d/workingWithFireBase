import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserDetails from "./pages/UserDetails/UserDetails";
import Invite from "./pages/Invite/Invite";
import LogIn from "./pages/LogIn/LogIn";

const App = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const profilePic = localStorage.getItem("profilePic");

    if (!name && !email && !profilePic) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/userDetails" element={<UserDetails />} />
      <Route path="/invite" element={<Invite />} />
    </Routes>
  );
};

export default App;
