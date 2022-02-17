import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../../features/userReducer";
import { useFollowFriendMutation } from "../../features/userApi";
import "./SearchResultModal.css";
function SearchResultModal({ searchResult }) {
  const user = useSelector((state) => state.auth.value);
  const [followFriend] = useFollowFriendMutation();
  const dispatch = useDispatch();

  const followerUser = (userID) => {
    followFriend({ userID, reqID: user._id });
    dispatch(addFriend(userID));
  };
  return (
    <div className="search-modal-container">
      <ul>
        {searchResult
          .filter((u) => u._id !== user._id)
          .map((u, indx) => {
            return (
              <li key={indx}>
                {u.name}
                {user.following.includes(u._id) ? null : (
                  <button
                    onClick={() => followerUser(u._id)}
                    className="add-button"
                  >
                    follow
                  </button>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default SearchResultModal;
