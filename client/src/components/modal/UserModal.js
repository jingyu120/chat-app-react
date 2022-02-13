import React from "react";
import "./UserModal.css";
import { useNavigate } from "react-router-dom";

function UserModal() {
  const navigate = useNavigate();
  const data = ["Justin Zhang", "jingyu120@gmail.com"];
  return (
    <div className="user-modal-container">
      <h4>Account Info:</h4>
      {data.map((detail, index) => {
        return <h6 key={index}>{detail}</h6>;
      })}
      <button
        onClick={() => {
          navigate("/login");
          localStorage.clear();
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserModal;
