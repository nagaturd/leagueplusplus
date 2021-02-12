import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Summoner from "../components/Profile/Summoner";
import SummonerNotFound from "../components/Profile/SummonerNotFound";
import { ISummoner } from "../components/Profile/interfaces";

const fetchSummoner = async (name: string) => {
  let summoner = encodeURI(name);
  const url = `http://localhost:5000/api/summoner/${summoner}`;

  // Handles API call
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

type TParams = {
  search: string;
};

const Profile = ({ match }: RouteComponentProps<TParams>) => {
  // Load "Profile" components if summoner is found
  // Else load "SummonerNotFound" component
  const [summoner, setSummoner] = useState<ISummoner>({});

  useEffect(() => {
    fetchSummoner(match.params.search).then((response) =>
      setSummoner(response)
    );
  }, [match.params.search]);

  return (
    <div>
      {summoner?.status ? (
        <SummonerNotFound {...summoner} />
      ) : (
        <Summoner {...summoner} />
      )}
    </div>
  );
};

export default Profile;
