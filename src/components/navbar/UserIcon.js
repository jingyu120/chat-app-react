import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import UserModal from "../modal/UserModal";

function UserIcon() {
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
      <FaUserCircle onClick={() => setShowModal(!showModal)} />
      {showModal && <UserModal />}
    </div>
  );
}

export default UserIcon;
