import React, { useState, useEffect } from "react";
import { fetchSummoner } from "../api/summoner";
import { RouteComponentProps } from "react-router-dom";
import { ISummonerAPI } from "../api/api-interfaces";

const SearchError = (response: ISummonerAPI) => {
  return (
    <div>
      <p>Message: {response.status!.message}</p>
      <p>Status Code: {response.status!.status_code}</p>
    </div>
  );
};

const SummonerFound = (response: ISummonerAPI) => {
  return (
    <div>
      <h1>{response.name}</h1>
      <p>Summoner Level: {response.summonerLevel}</p>
    </div>
  );
};

type TParams = {
  search: string;
};

const Summoner = ({ match }: RouteComponentProps<TParams>) => {
  const [result, setResult] = useState<ISummonerAPI>({});

  useEffect(() => {
    fetchSummoner(match.params.search).then((response) => setResult(response));
  }, [match.params.search]);

  return (
    <div>
      {result?.status ? (
        <SearchError {...result} />
      ) : (
        <SummonerFound {...result} />
      )}
    </div>
  );
};

export default Summoner;
