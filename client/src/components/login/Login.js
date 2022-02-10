import React from "react";
import Landing from "../landingpage/Landing";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-layout">
      <div>
        <Landing />
      </div>
      <div className="login-container">
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button className="login">Log In</button>
        <Link to={"/registration"}>Forgot Password?</Link>
        <button className="create-account">Create a New Account</button>
      </div>
    </div>
  );
}

export default Login;
