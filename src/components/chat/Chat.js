import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  retrieveMessages,
  appendMessages,
  setRecipient,
  setConversation,
} from "../../features/conversationReducer";
import "./Chat.css";
import { io } from "socket.io-client";
import ActiveChat from "./ActiveChat";
import ChatBox from "./ChatBox";
import { useGetMessagesMutation } from "../../features/messageApi";

const socket = io.connect(`${process.env.REACT_APP_BASEURL}/`);

function Chat({ setOnlineUsers }) {
  const user = useSelector((state) => state.auth.value);
  const currentConversation = useSelector((state) => state.conversation.value);
  const dispatch = useDispatch();
  const [arrivalMessage, setArrivalMessage] = useState("");
  const [getMessage] = useGetMessagesMutation();

  useEffect(() => {
    socket.emit("addUser", user._id);

    socket.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderID,
        text: data.text,
        createdAt: new Date(Date.now()),
      });
    });

    socket.on("getUsers", async (users) => {
      const onlineUserId = await users.map((u) => u.userId);
      const onlineFriends = await user.following.filter((friendId) =>
        onlineUserId.includes(friendId)
      );
      setOnlineUsers(onlineFriends);
    });

    return function cleanup() {
      socket.disconnect();
      dispatch(setConversation(null));
      dispatch(setRecipient(null));
    };
  }, []);

  useEffect(() => {
    currentConversation.conversation &&
      arrivalMessage &&
      currentConversation.recipient.id === arrivalMessage.sender &&
      dispatch(appendMessages(arrivalMessage));
    // eslint-disable-next-line
  }, [arrivalMessage]);

  useEffect(() => {
    if (user && currentConversation.conversation) {
      getMessage(currentConversation.conversation._id).then((res) =>
        dispatch(retrieveMessages(res.data))
      );
    }
    // eslint-disable-next-line
  }, [user, currentConversation.conversation]);

  return (
    <div className="chat-container">
      <div className="conversation-container">
        {currentConversation.conversation ? (
          <ActiveChat currentConversation={currentConversation} user={user} />
        ) : (
          <h3>Open a chat to start a conversation</h3>
        )}
      </div>
      <div>
        <ChatBox
          user={user}
          currentConversation={currentConversation}
          socket={socket}
        />
      </div>
    </div>
  );
}

export default Chat;
