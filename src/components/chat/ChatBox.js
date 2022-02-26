import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { appendMessages } from "../../features/conversationReducer";
import "./ChatBox.css";

function ChatBox({ user, currentConversation, socket }) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const m = {
      conversationID: currentConversation.conversation._id,
      sender: user._id,
      text: message,
    };

    const receiverID = currentConversation.recipient.id;

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
      dispatch(appendMessages(response.data));
      // setMessageList([...messageList, response.data]);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
}

export default ChatBox;
