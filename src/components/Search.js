import React, { useEffect, useState } from "react";
import Profile from "./Profile.js";
import { apiKey } from "../config.json";

const Search = () => {
  const [summoner, setSummoner] = useState([]);
  const [search, setSearch] = useState("");
  const [summonerName, setSummonerName] = useState("");

  useEffect(() => {
    getSummoner();
  }, [summonerName]);

  // Updates when stuff is typed in search box
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // Once search is submitted, set summoner name to be string from search
  const getSearch = (e) => {
    e.preventDefault();
    setSummonerName(search);
  };

  // Look up summoner using Riot API
  const getSummoner = async () => {
    console.log("Using this name:", summonerName);
    let summoner = encodeURI(summonerName);
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apiKey}`;

    // Handles API call
    const response = await fetch(url);
    const data = await response.json();

    console.log("Received from API:", data);
    setSummoner(data);
  };

  return (
    <div>
      <form className="search-form" onSubmit={getSearch}>
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
