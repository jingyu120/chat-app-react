import React from "react";
import { useSelector } from "react-redux";
import "./FriendRequestModal.css";
import Request from "./Request";

function FriendRequestModal() {
  const user = useSelector((state) => state.auth.value);

  return (
    <div className="friend-modal-container">
      <h3>Friend Requests</h3>
      {user.followers
        .filter((f) => !user.following.includes(f))
        .map((ff, i) => {
          return (
            <h6 key={i}>
              <Request friendID={ff} />
            </h6>
          );
        })}
    </div>
  );
}

export default FriendRequestModal;
