import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetConversationQuery } from "../../features/conversationApi";
import Conversation from "./Conversation";
import SearchComponent from "./SearchComponent";
import "./SearchFriend.css";
import { useDispatch } from "react-redux";
import {
  setConversation,
  setRecipient,
} from "../../features/conversationReducer";

function SearchFriend() {
  const user = useSelector((state) => state.auth.value);
  const { data } = useGetConversationQuery(user._id);
  const [conversations, setConversations] = useState();
  const dispatch = useDispatch();

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
                    const friend = c.members.find((m) => m.id !== user._id);
                    dispatch(setConversation(c));
                    dispatch(setRecipient(friend));
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
