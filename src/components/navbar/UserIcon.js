import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import UserModal from "../modal/UserModal";

function UserIcon() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <FaUserCircle onClick={() => setShowModal(!showModal)} />
      {showModal && <UserModal />}
    </div>
  );
}

export default UserIcon;
