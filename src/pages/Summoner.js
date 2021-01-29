import { React, useState, useEffect } from "react";
import { apiKey } from "../config.json";

const Summoner = (props) => {
  const [summoner, setSummoner] = useState("");

  const getSummoner = async () => {
    let summoner = encodeURI(props.location.state.summonerName);
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apiKey}`;

    // Handles API call
    const response = await fetch(url);
    const data = await response.json();

    setSummoner(data);
  };

  useEffect(() => {
    getSummoner();
  }, []);

  return (
    <div>
      <h1>{summoner.name}</h1>
      <p>Summoner Level: {summoner.summonerLevel}</p>
    </div>
  );
};

export default Summoner;
