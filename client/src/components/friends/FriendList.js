import React from "react";
import { useSelector } from "react-redux";
import Friend from "./Friend";
function Friends() {
  const user = useSelector((state) => state.auth.value);
  return (
    <div className="friends-list-container">
      <h4>Friends List:</h4>
      <ul>
        {user?.following.map((friend, i) => {
          return (
            <li key={i}>
              <Friend friendID={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Friends;
