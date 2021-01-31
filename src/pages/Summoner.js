import { React, useState, useEffect } from "react";
import { getSummoner } from "../api/summoner.js";

const SearchError = (props) => {
  return (
    <div>
      <p>Message: {props.response.status.message}</p>
      <p>Status Code: {props.response.status.status_code}</p>
    </div>
  );
};

const SummonerFound = (props) => {
  return (
    <div>
      <h1>{props.response.name}</h1>
      <p>Summoner Level: {props.response.summonerLevel}</p>
    </div>
  );
};

const Summoner = (props) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    getSummoner(props.location.state.summonerName).then((response) =>
      setResult(response)
    );
  }, [props.location.state.summonerName]);

  return (
    <div>
      {result.status ? (
        <SearchError response={result} />
      ) : (
        <SummonerFound response={result} />
      )}
    </div>
  );
};

export default Summoner;
