import React from "react";
import Nav from "../navbar/Nav";
import "./Home.css";
import SearchUser from "../searchUser/SearchUser";
import Chat from "../chat/Chat";
import Friends from "../friends/Friends";
function Home() {
  return (
    <div className="home-container">
      <div className="top-container">
        <div className="navbar-container">
          <Nav />
        </div>
      </div>
      <div className="bottom-container">
        <div className="search-container">
          <SearchUser />
        </div>
        <div className="chat-container">
          <Chat />
        </div>
        <div className="friend-container">
          <Friends />
        </div>
      </div>
    </div>
  );
}

export default Home;
