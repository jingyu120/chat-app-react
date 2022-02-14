import React, { useEffect, useState } from "react";
import "./Message.css";
function Message({ received, messageData, senderName }) {
  const [time, setTime] = useState();
  useEffect(() => {
    const d = new Date(messageData.createdAt);
    const ampm = d.getHours() > 12 ? "PM" : "AM";
    const hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    const minutes =
      d.getMinutes.length < 2 ? "0" + d.getMinutes() : d.getMinutes();
    console.log(minutes);
    const timeCalc = hours + ":" + minutes + " " + ampm;
    setTime(timeCalc);
  }, []);
  return (
    <div
      className={received ? "message-container received" : "message-container"}
    >
      <div className={received ? "message-top" : "message-top"}>
        <h6 className="sender">{received ? senderName : "Justin Zhang"}</h6>
        <p className="message">{messageData.text}</p>
      </div>
      <div className="message-bottom">{time}</div>
    </div>
  );
}

export default Message;
