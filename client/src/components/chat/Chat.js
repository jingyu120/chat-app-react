import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { io } from "socket.io-client";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function Chat({ conversationSelected }) {
  const user = useSelector((state) => state.auth.value);
  const [messageList, setMessageList] = useState();
  const [sender, setSender] = useState("");

  const [arrivalMessage, setArrivalMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:3002");

    socket.current.on("getMessage", (data) => {
      console.log("received a message");
      setArrivalMessage({
        sender: data.senderID,
        text: data.text,
        createdAt: new Date(Date.now()),
      });
    });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.following.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    arrivalMessage &&
      conversationSelected.members.some(
        (e) => e.id === arrivalMessage.sender
      ) &&
      setMessageList((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, conversationSelected]);

  useEffect(() => {
    if (user && conversationSelected) {
      axios
        .get("http://localhost:3001/api/messages/" + conversationSelected._id)
        .then((res) => {
          setMessageList(res.data);
          setSender(
            conversationSelected.members.find((m) => m.id !== user._id)
          );
        });
    }
  }, [conversationSelected, user]);

  return (
    <div className="chat-container">
      <div className="conversation-container">
        <ChatMessages
          messageList={messageList}
          user={user}
          sender={sender}
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </div>
      <div className="message-wrapper">
        <ChatInput
          user={user}
          conversationSelected={conversationSelected}
          socket={socket}
        />
      </div>
    </div>
  );
}

export default Chat;
