import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./SearchResultModal.css";
function SearchResultModal({ searchResult }) {
  const { user } = useContext(UserContext);
  return (
    <div className="search-modal-container">
      <ul>
        {searchResult
          .filter((u) => u._id !== user._id)
          .map((u, indx) => {
            return (
              <li key={indx}>
                {u.name}
                <button className="add-button">follow</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default SearchResultModal;
