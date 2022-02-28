import React from "react";
import { useFindFriendByIDQuery } from "../../features/userApi";

function OnlineFriend({ friendID }) {
  const { data } = useFindFriendByIDQuery(friendID);
  return <div className="friend" style={{ color: "green" }}>{data?.name}</div>;
}

export default OnlineFriend;
