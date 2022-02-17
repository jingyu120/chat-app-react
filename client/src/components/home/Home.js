import React, { useState } from "react";
import Nav from "../navbar/Nav";
import "./Home.css";
import SearchUser from "../searchUser/SearchUser";
import Chat from "../chat/Chat";
import Friends from "../friends/FriendList";
function Home() {
  const [conversationSelected, setConversationSelected] = useState(null);
  return (
    <div className="home-container">
      <div className="top-container">
        <div className="navbar-container">
          <Nav />
        </div>
      </div>
      <div className="bottom-container">
        <div className="search-container">
          <SearchUser setConversationSelected={setConversationSelected} />
        </div>
        <div className="chat-container">
          <Chat conversationSelected={conversationSelected} />
        </div>
        <div className="friend-container">
          <Friends />
        </div>
      </div>
    </div>
  );
}

export default Home;
