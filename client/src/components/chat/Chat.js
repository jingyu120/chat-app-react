import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import "./Chat.css";
import Message from "./Message";

function Chat({ conversationSelected }) {
  const { user } = useContext(UserContext);
  const [messageList, setMessageList] = useState();
  const [sender, setSender] = useState();
  const [message, setMessage] = useState();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const m = {
      conversationID: conversationSelected._id,
      sender: user._id,
      text: message,
    };
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
        {sender &&
          messageList &&
          messageList.map((m, i) => {
            const received = user._id !== m.sender;
            return (
              <Message
                key={i}
                received={received}
                messageData={m}
                senderName={sender.name}
              />
            );
          })}
      </div>
      <div className="message-wrapper">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          placeholder="write something... "
          rows="3"
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
