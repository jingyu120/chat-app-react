import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import Message from "./Message";
import { io } from "socket.io-client";

function Chat({ conversationSelected }) {
  const user = useSelector((state) => state.auth.value);
  const [messageList, setMessageList] = useState();
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState("");
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:3002");

    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderID,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    user && socket.current.emit("addUser", user._id);
    // socket.current.on("getUsers", (users) = > {
    //   setOnlineUsers()
    // })
  }, [user]);

  useEffect(() => {
    arrivalMessage &&
      conversationSelected.members.some(
        (e) => e.id === arrivalMessage.sender
      ) &&
      setMessage((prev) => [...prev, arrivalMessage]);
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

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const m = {
      conversationID: conversationSelected._id,
      sender: user._id,
      text: message,
    };
    const receiverID = conversationSelected?.members.find(
      (m) => m.id !== user._id
    ).id;
    socket.current.emit("sendMessage", {
      senderID: user._id,
      receiverID,
      text: m,
    });
    try {
      const response = await axios.post(
        "http://localhost:3001/api/messages",
        m
      );
      setMessageList([...messageList, response.data]);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-container">
      <div className="conversation-container">
        {messageList &&
          messageList.map((m, i) => {
            const received = user._id !== m.sender;
            return (
              <div key={i} ref={scrollRef}>
                <Message
                  received={received}
                  messageData={m}
                  senderName={sender.name}
                  user={user}
                />
              </div>
            );
          })}
      </div>
      <div className="message-wrapper">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              if (message.length > 0) {
                handleSubmit(e);
              }
            }
          }}
          placeholder="write something... "
          rows="3"
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
