import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import Conversation from "./Conversation";
import SearchComponent from "./SearchComponent";
import "./SearchFriend.css";

function SearchFriend({ setConversationSelected }) {
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
        <SearchComponent />
      </div>

      <div className="conversations">
        <ul>
          {conversations &&
            conversations.map((c, indx) => {
              return (
                <li
                  key={indx}
                  onClick={() => {
                    setConversationSelected(c);
                  }}
                >
                  <Conversation user={user} conversation={c} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default SearchFriend;
