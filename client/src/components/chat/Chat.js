// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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

function Chat({ setOnlineUsers }) {
  const user = useSelector((state) => state.auth.value);
  const currentConversation = useSelector((state) => state.conversation.value);
  const dispatch = useDispatch();
  const [arrivalMessage, setArrivalMessage] = useState("");
  const socket = useRef();
  const [getMessage] = useGetMessagesMutation();

  useEffect(() => {
    socket.current = io("ws://localhost:3002");

    socket.current.emit("addUser", user._id);

    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderID,
        text: data.text,
        createdAt: new Date(Date.now()),
      });
    });

    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.following.filter((f) => users.some((u) => u.userId === f))
      );
    });

    return function cleanup() {
      socket.current.disconnect();
      dispatch(setConversation(null));
      dispatch(setRecipient(null));
    };
    // eslint-disable-next-line
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
