import React from 'react'
import { signInWithGoogle } from '../../firebase.js';

const LogInWithGoogle = () => {
  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={() => {}}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
    </div>
  )
}

export default LogInWithGoogle