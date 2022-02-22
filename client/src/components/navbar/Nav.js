import React from "react";
import FriendRequest from "./FriendRequest";
import "./Nav.css";
import UserIcon from "./UserIcon";

function Nav() {
  return (
    <div className="navbar">
      <div className="left-side">
        <h1>React Chat App</h1>
      </div>
      <div className="right-side">
        <span>
          <FriendRequest />
        </span>
        <span>
          <UserIcon />
        </span>
      </div>
    </div>
  );
}

export default Nav;
