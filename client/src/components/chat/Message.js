import React from "react";
import "./Message.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

function Message({ received, messageData, senderName, user }) {
  const timeAgo = new TimeAgo("en-US");
  return (
    <div
      className={received ? "message-container received" : "message-container"}
    >
      <div className={received ? "message-top" : "message-top"}>
        <h6 className="sender">{received ? senderName : user.name}</h6>
        <p className="message">{messageData.text}</p>
      </div>
      <div className="message-bottom">
        {timeAgo.format(new Date(messageData.createdAt))}
      </div>
    </div>
  );
}

export default Message;
