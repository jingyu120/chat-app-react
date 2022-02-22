import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useFindFriendByIDQuery,
  useFollowFriendMutation,
} from "../../features/userApi";
import { addFriend } from "../../features/userReducer";

function Request({ friendID }) {
  const { data, isSuccess } = useFindFriendByIDQuery(friendID);
  const user = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const [followFriend] = useFollowFriendMutation();
  const followUser = (userID) => {
    followFriend({ userID, reqID: user._id });
    dispatch(addFriend(userID));
  };
  return (
    <div>
      {isSuccess && data.name}{" "}
      <button
        onClick={() => {
          followUser(data._id);
        }}
      >
        Add Friend
      </button>
    </div>
  );
}

export default Request;
