import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  // Updates when stuff is typed in search box
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Search summoner"
          onChange={updateSearch}
        />
        <Link
          to={{
            pathname: `/summoner/name=${search}`,
            state: { summonerName: search },
          }}
        >
          <button className="search-button" type="submit">
            Search
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
