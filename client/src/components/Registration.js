import React from "react";
import "./Registration.css";
import Landing from "./landingpage/Landing";

function Registration() {
  return (
    <div className="registration-layout">
      <div>
        <Landing />
      </div>
      <div className="registration-container">
        <input placeholder="Username" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Password Again" />
        <button className="signup">Sign Up</button>
        <button className="login">Log into Account</button>
      </div>
    </div>
  );
}

export default Registration;
