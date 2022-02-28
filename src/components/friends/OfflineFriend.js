import React from "react";
import { useFindFriendByIDQuery } from "../../features/userApi";

function OfflineFriend({ friendID }) {
  const { data } = useFindFriendByIDQuery(friendID);
  return <div className="friend" style={{ color: "red" }}>{data?.name}</div>;
}

export default OfflineFriend;
