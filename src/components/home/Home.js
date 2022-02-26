import React, { useState } from "react";
import Nav from "../navbar/Nav";
import "./Home.css";
import ConversationComponent from "../conversations/ConversationComponent";
import Chat from "../chat/Chat";
import FriendList from "../friends/FriendList";
function Home() {
  const [onlineUsers, setOnlineUsers] = useState([]);

  return (
    <div className="home-container">
      <div className="top-container">
        <div className="navbar-container">
          <Nav />
        </div>
      </div>
      <div className="bottom-container">
        <div className="search-container">
          <ConversationComponent />
        </div>
        <div className="chat-container">
          <Chat setOnlineUsers={setOnlineUsers} />
        </div>
        <div className="friend-container">
          <FriendList onlineUsers={onlineUsers} />
        </div>
      </div>
    </div>
  );
}

export default Home;
