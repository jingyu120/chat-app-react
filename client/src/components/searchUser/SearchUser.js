import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetConversationQuery } from "../../features/conversationApi";
import Conversation from "./Conversation";
import SearchComponent from "./SearchComponent";
import "./SearchFriend.css";

function SearchFriend({ setConversationSelected }) {
  const user = useSelector((state) => state.auth.value);
  const { data } = useGetConversationQuery(user._id);
  const [conversations, setConversations] = useState();
  useEffect(() => {
    setConversations(data);
  }, [user, data]);

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
