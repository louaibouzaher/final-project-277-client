import React, { useState, useEffect } from "react";
import PlayerCard from "../components/PlayerCard";
import PlayerFilter from "../components/PlayerFilter";
import { Link } from "react-router-dom";
import { API_BASEURL } from "../appConfig";
import axios from "axios";
export default function PlayersPage() {
  const [players, setPlayers] = useState([]);

  const handleSubmit = async (filters) => {
    await axios
      .post(`${API_BASEURL}/players/filter`, filters)
      .then((res) => {
        console.log(res);
        setPlayers(res.data);
      })
      .catch((e) => {
        setPlayers([]);
        console.log(e);
      });
  };
  const getPlayers = async () => {
    await axios.get(`${API_BASEURL}/players/all`).then((res) => {
      setPlayers(res.data);
    });
  };
  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className="w-full p-20">
      <Link
        to={"/players/create"}
        className="hover:text-amber-400 text-white font-bold  rounded-md bg-green-700 py-2 px-4"
      >
        Add New Player
      </Link>
      <div className="w-full py-10 flex">
        <PlayerFilter handleSubmit={handleSubmit} />
        <div className="w-full flex justify-center items-stretch flex-wrap">
          {Array.isArray(players) &&
            players.map((p) => <PlayerCard player={p} />)}
        </div>
      </div>
    </div>
  );
}
