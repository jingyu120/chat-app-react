import React, { useState } from "react";
import axios from "axios";

function ChatInput({
  conversationSelected,
  user,
  socket,
  messageList,
  setMessageList,
}) {
  const [message, setMessage] = useState("");
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
      text: message,
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
    <div>
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
  );
}

export default ChatInput;
