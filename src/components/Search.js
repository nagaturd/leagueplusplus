import React, { useState } from "react";
import Profile from "./Profile.js";
import { apiKey } from "../config.json";

const Search = () => {
  const [summoner, setSummoner] = useState([]);
  const [search, setSearch] = useState("");

  // Updates when stuff is typed in search box
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // Look up summoner using Riot API
  const getSummoner = async (e) => {
    e.preventDefault();
    let summoner = encodeURI(search);
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apiKey}`;

    // Handles API call
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    setSummoner(data);
  };

  return (
    <div>
      <form className="search-form" onSubmit={getSummoner}>
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Search summoner"
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <Profile summoner={summoner} />
    </div>
  );
};

export default Search;
