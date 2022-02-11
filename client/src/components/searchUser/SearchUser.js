import React from "react";
import "./SearchFriend.css";

function SearchFriend() {
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
    </div>
  );
}

export default SearchFriend;
