import React, { useState, useEffect } from "react";
import PlayerCard from "../components/PlayerCard";
import PlayerFilter from "../components/PlayerFilter";
import { Link } from "react-router-dom";
import { API_BASEURL } from "../appConfig";
import axios from "axios";
import LeagueCard from "../components/LeagueCard";

export default function LeaguesPage() {
  const [Leagues, setLeagues] = useState([]);
  console.log(Leagues);
  const getLeagues = async () => {
    await axios.get(`${API_BASEURL}/leagues/all`).then((res) => {
      setLeagues(res.data);
    });
  };
  useEffect(() => {
    getLeagues();
  }, []);
  return (
    <div className="w-full p-20 px-56 ">
      <Link
        to={"/leagues/champions/create"}
        className="mx-2 hover:text-amber-400 text-white font-bold  rounded-md bg-green-700 py-2 px-4"
      >
        Add New Champion
      </Link>
      <Link
        to={"/leagues/matches/create"}
        className="mx-2 hover:text-amber-400 text-white font-bold  rounded-md bg-green-700 py-2 px-4"
      >
        Add New Match
      </Link>
      <div className="w-full flex justify-center items-stretch flex-wrap">
        {Leagues.map((l) => (
          <LeagueCard league={l} />
        ))}
      </div>
    </div>
  );
}
