export const getSummoner = async (name) => {
  let summoner = encodeURI(name);
  const url = `http://localhost:5000/api/summoner/${summoner}`;

  // Handles API call
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
