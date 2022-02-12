import React from "react";
import "./Chat.css";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat-container">
      <div className="conversation-container">
        <Message received={true} />
        <Message received={false} />
        <Message received={true} />
        <Message received={false} />
        <Message received={true} />
        <Message received={false} />
        <Message received={true} />
        <Message received={false} />
      </div>
      <div className="message-wrapper">
        <textarea placeholder="write something... " rows="3" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Chat;
