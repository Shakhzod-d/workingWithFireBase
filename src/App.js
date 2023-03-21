import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogInWithGoogle from "./components/LogInWithGoogle/LogInWithGoogle";

const App = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const profilePic = localStorage.getItem('profilePic');

    if(!name && !email && !profilePic){
      navigate('/login');
      return;
    }

  }, []);


  return (
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogInWithGoogle />} />
      </Routes>
  );
};

export default App;