import React from "react";
import "./Nav.css";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";

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
          <FaUserCircle />
        </span>
      </div>
    </div>
  );
}

export default Nav;
