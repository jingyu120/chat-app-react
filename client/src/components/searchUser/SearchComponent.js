import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SearchResultModal from "../modal/SearchResultModal";

function SearchComponent() {
  const [searchParam, setSearchParam] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  let modalRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

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
      <div>
        <input
          placeholder="Search for friends..."
          onChange={(e) => setSearchParam(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchForFriend();
              setOpenModal(true);
            }
          }}
        ></input>
      </div>
      <div>
        {openModal && (
          <div ref={modalRef}>
            <SearchResultModal searchResult={searchResult} />{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchComponent;
