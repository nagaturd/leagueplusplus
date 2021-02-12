import React from "react";
import { ISummoner } from "./interfaces";

const Summoner = (response: ISummoner) => {
  const patch = "11.3.1";
  const profileIconId = response.profileIconId;
  const profileIcon = `http://ddragon.leagueoflegends.com/cdn/${patch}/img/profileicon/${profileIconId}.png`;

  return (
    <div>
      <img src={profileIcon} alt="" />
      <h1>{response.name}</h1>
      <p>Summoner Level: {response.summonerLevel}</p>
    </div>
  );
};

export default Summoner;
