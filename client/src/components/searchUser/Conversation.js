import React, { useEffect, useState } from "react";
import "./Conversation.css";

function Conversation({ user, conversation }) {
  const [friend, setFriend] = useState();
  useEffect(() => {
    const friend = conversation.members.find((m) => m.id !== user._id);
    setFriend(friend.name);
  }, [conversation.members, user._id]);
  return <div className="conversation-wrapper">{friend && friend}</div>;
}

export default Conversation;
