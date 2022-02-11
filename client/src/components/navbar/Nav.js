import React from "react";
import "./Nav.css";
import { FaUserFriends } from "react-icons/fa";
import UserIcon from "./UserIcon";

function Nav() {
  return (
    <div className="navbar">
      <div className="left-side">
        <h1>React Chat App</h1>
      </div>
      <div className="right-side">
        <span>
          <FaUserFriends onClick={() => console.log("clicked")} />
        </span>
        <span>
          <UserIcon />
        </span>
      </div>
    </div>
  );
}

export default Nav;
