import React from "react";
import { RanksData } from "../interfaces/API";

export const fetchNewsData = (
  setRankData: React.Dispatch<React.SetStateAction<RanksData[]>>
) => {
  fetch("https://hltv-api.vercel.app/api/teams.json")
    .then((ranks) => ranks.json())
    .then((ranks) => setRankData(ranks));
};
