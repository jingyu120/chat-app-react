import React from "react";
import { useSelector } from "react-redux";
import OnlineFriend from "./OnlineFriend";
import "./FriendList.css";
import OfflineFriend from "./OfflineFriend";
function Friends({ onlineUsers }) {
  const user = useSelector((state) => state.auth.value);
  return (
    <div className="friends-list-container">
      <h4>Friends List:</h4>
      <ul>
        {user?.following.map((friend, i) => {
          return (
            <li key={i}>
              {onlineUsers.includes(friend) ? (
                <OnlineFriend friendID={friend} />
              ) : (
                <OfflineFriend friendID={friend} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Friends;
