import axios from "axios";
import React, { useEffect, useState } from "react";

function Conversation({ user, conversation }) {
  const [friend, setFriend] = useState();
  useEffect(() => {
    const friendID = conversation.members.find((mID) => mID !== user._id);
    axios.get("http://localhost:3001/api/auth/user/" + friendID).then((res) => {
      setFriend(res.data);
    });
  }, [conversation.members, user._id]);
  console.log(friend);
  return <div>{friend && friend.name}</div>;
}

export default Conversation;
