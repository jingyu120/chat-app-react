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
  const onlineFriends = user?.following.filter((f) => onlineUsers.includes(f));
  const offlineFriends = user?.following.filter(
    (f) => !onlineUsers.includes(f)
  );

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
    const recipient = { id: friend.data._id, name: friend.data.name };
    dispatch(setRecipient(recipient));
  };

  return (
    <div className="friends-list-container">
      <ul>
        {onlineFriends?.length ? (
          onlineFriends.map((friend, i) => {
            return (
              <li key={i} onClick={() => startConversation(friend)}>
                <OnlineFriend friendID={friend} />
              </li>
            );
          })
        ) : (
          <h3>No online friends</h3>
        )}
      </ul>
      <hr></hr>
      <ul>
        {offlineFriends?.length ? (
          offlineFriends.map((friend, i) => {
            return (
              <li key={i} onClick={() => startConversation(friend)}>
                <OfflineFriend friendID={friend} />
              </li>
            );
          })
        ) : (
          <h3>No offline friends</h3>
        )}
      </ul>
    </div>
  );
}

export default Friends;
