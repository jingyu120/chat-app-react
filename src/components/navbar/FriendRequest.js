import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import FriendRequestModal from "../modal/FriendRequestModal";

function FriendRequest() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <FaUserFriends onClick={() => setShowModal((prev) => !prev)} />
      {showModal && <FriendRequestModal />}
    </div>
  );
}

export default FriendRequest;
