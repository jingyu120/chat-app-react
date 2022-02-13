import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import Conversation from "./Conversation";
import "./SearchFriend.css";

function SearchFriend() {
  const { user } = useContext(UserContext);
  const [conversations, setConversations] = useState();
  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:3001/api/conversations/" + user._id)
        .then((res) => {
          setConversations(res.data);
        });
    }
  }, [user]);

  return (
    <div>
      <div className="searchbar-user">
        <input
          placeholder="Search for friends..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              console.log("enter pressed");
            }
          }}
        ></input>
      </div>
      <div className="conversations">
        {conversations &&
          conversations.map((c, indx) => {
            return <Conversation key={indx} user={user} conversation={c} />;
          })}
      </div>
    </div>
  );
}

export default SearchFriend;
