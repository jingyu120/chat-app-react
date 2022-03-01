import React, { useEffect, useRef, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import FriendRequestModal from "../modal/FriendRequestModal";

function FriendRequest() {
  const [showModal, setShowModal] = useState(false);

  let modalRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={modalRef}>
      <FaUserFriends onClick={() => setShowModal((prev) => !prev)} />
      {showModal && <FriendRequestModal />}
    </div>
  );
}

export default FriendRequest;
