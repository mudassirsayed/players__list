import React from "react";

function SearchPlayers({ searchTerm, handleSearch }) {
  return (
    <>
      <div className="input-group d-flex justify-content-center">
        <div className="form-outline">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control my-search-input"
          />
        </div>
      </div>
    </>
  );
}

export default SearchPlayers;
