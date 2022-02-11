import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat-container">
      <div className="conversation-container">
        <h3>Start of the conversation</h3>
      </div>
      <div className="message-container">
        <textarea placeholder="write something... " rows="3" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Chat;
