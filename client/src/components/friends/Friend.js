import React from "react";
import { useFindFriendByIDQuery } from "../../features/userApi";

function Friend({ friendID }) {
  const { data } = useFindFriendByIDQuery(friendID);
  return <div>{data?.name}</div>;
}

export default Friend;
