import axios from "axios";
import React, { useState } from "react";

function SearchComponent() {
  const [searchParam, setSearchParam] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const searchForFriend = () => {
    const params = searchParam.includes("@")
      ? { email: searchParam }
      : { username: searchParam };

    axios
      .get("http://localhost:3001/api/user", { params })
      .then((res) => setSearchResult(res.data));
  };
  return (
    <>
      <input
        placeholder="Search for friends..."
        onChange={(e) => setSearchParam(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchForFriend();
          }
        }}
      ></input>
    </>
  );
}

export default SearchComponent;
