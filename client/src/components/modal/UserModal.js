import React from "react";
import "./UserModal.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../features/userReducer";
function UserModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.auth.value);

  return (
    <div className="user-modal-container">
      <h4>Account Info:</h4>
      <h6>{name}</h6>
      <h6>{email}</h6>
      <button
        onClick={() => {
          dispatch(logoutUser());
          navigate("/login");
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserModal;
