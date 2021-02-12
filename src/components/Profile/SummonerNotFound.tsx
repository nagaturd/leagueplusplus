import React from "react";
import { ISummoner } from "./interfaces";

const SummonerNotFound = (response: ISummoner) => {
  return (
    <div>
      <p>Message: {response.status!.message}</p>
      <p>Status Code: {response.status!.status_code}</p>
    </div>
  );
};

export default SummonerNotFound;
