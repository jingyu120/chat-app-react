import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import "./Chat.css";
import Message from "./Message";

function Chat({ conversationSelected }) {
  const { user } = useContext(UserContext);
  const [messageList, setMessageList] = useState();
  const [sender, setSender] = useState();

  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:3001/api/messages/" + conversationSelected._id)
        .then((res) => {
          setMessageList(res.data);
          setSender(
            conversationSelected.members.find((m) => m.id !== user._id)
          );
        });
    }
  }, [conversationSelected]);
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
        <textarea placeholder="write something... " rows="3" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Chat;
