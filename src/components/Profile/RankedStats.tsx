import React from "react";

const fetchRankedStats = async (summonerId: string) => {
  const url = `http://localhost:5000/api/league/${summonerId}`;

  // Handles API call
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
