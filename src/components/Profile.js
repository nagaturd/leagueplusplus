import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>Summoner Name: {props.summoner.name}</p>
      <p>Summoner Level: {props.summoner.summonerLevel}</p>
    </div>
  );
};

export default Profile;
