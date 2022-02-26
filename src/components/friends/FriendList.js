import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OnlineFriend from "./OnlineFriend";
import "./FriendList.css";
import OfflineFriend from "./OfflineFriend";
import { useGetConversationMutation } from "../../features/conversationApi";
import axios from "axios";
import {
  setConversation,
  setRecipient,
} from "../../features/conversationReducer";

function Friends({ onlineUsers }) {
  const user = useSelector((state) => state.auth.value);
  const [createConversation] = useGetConversationMutation();
  const dispatch = useDispatch();

  const startConversation = async (friendID) => {
    const friend = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/user/${friendID}`
    );

    const data = {
      sender: { id: user._id, name: user.name },
      receiver: { id: friendID, name: friend.data.name },
    };
    const conversation = await createConversation(data);

    dispatch(setConversation(conversation.data));
    dispatch(setRecipient(friend.data));
  };

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
