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
        <button>Sign Up</button>
        <button>Log into Account</button>
      </div>
    </div>
  );
}

export default Registration;
