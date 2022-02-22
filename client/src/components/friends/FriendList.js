import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OnlineFriend from "./OnlineFriend";
import "./FriendList.css";
import OfflineFriend from "./OfflineFriend";
import { useGetConversationMutation } from "../../features/conversationApi";
import { useFindFriendByIDQuery } from "../../features/userApi";
import axios from "axios";
import {
  setConversation,
  setRecipient,
} from "../../features/conversationReducer";

function Friends({ onlineUsers }) {
  const user = useSelector((state) => state.auth.value);
  const [createConversation] = useGetConversationMutation();
  const { data } = useFindFriendByIDQuery();
  const dispatch = useDispatch();

  const startConversation = async (friendID) => {
    const friend = await axios.get(
      `http://localhost:3001/api/user/${friendID}`
    );
    console.log(friend);
    const data = {
      sender: { id: user._id, name: user.name },
      receiver: { id: friendID, name: friend.data.name },
    };
    const conversation = await createConversation(data);
    console.log(conversation.data);
    dispatch(setConversation(conversation.data));
    dispatch(setRecipient(friend.data));
  };

  console.log(data);
  return (
    <div className="friends-list-container">
      <h4>Friends List:</h4>
      <ul>
        {user?.following
          .filter((f) => onlineUsers.includes(f))
          .map((friend, i) => {
            return (
              <li key={i} onClick={() => startConversation(friend)}>
                <OnlineFriend friendID={friend} />
              </li>
            );
          })}
      </ul>
      <hr></hr>
      <ul>
        {user?.following
          .filter((f) => !onlineUsers.includes(f))
          .map((friend, i) => {
            return (
              <li key={i} onClick={() => startConversation(friend)}>
                <OfflineFriend friendID={friend} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Friends;
