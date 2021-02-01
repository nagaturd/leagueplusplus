import React, { useState, useEffect } from "react";
import { getSummoner } from "../api/summoner";
import { RouteComponentProps } from "react-router-dom";

type Response = {
  id?: string;
  accountId?: string;
  puuid?: string;
  name?: string;
  profileIconId?: number;
  revisionDate?: number;
  summonerLevel?: number;
  status?: {
    message?: string;
    status_code?: number;
  };
};

const SearchError = (response: Response) => {
  return (
    <div>
      <p>Message: {response.status!.message}</p>
      <p>Status Code: {response.status!.status_code}</p>
    </div>
  );
};

const SummonerFound = (response: Response) => {
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
  const [result, setResult] = useState<Response | null>(null);

  useEffect(() => {
    getSummoner(match.params.search).then((response) => setResult(response));
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
