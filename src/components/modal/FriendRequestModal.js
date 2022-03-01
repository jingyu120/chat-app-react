import React from "react";
import { useSelector } from "react-redux";
import "./FriendRequestModal.css";
import Request from "./Request";

function FriendRequestModal() {
  const user = useSelector((state) => state.auth.value);
  const friendRequests = user?.followers.filter(
    (f) => !user.following.includes(f)
  );

  return (
    <div className="friend-modal-container">
      {friendRequests.length ? (
        friendRequests.map((ff, i) => {
          return (
            <h6 key={i}>
              <Request friendID={ff} />
            </h6>
          );
        })
      ) : (
        <h3>No Friend Requests</h3>
      )}
    </div>
  );
}

export default FriendRequestModal;
