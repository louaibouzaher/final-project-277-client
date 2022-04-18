import React from "react";
import PlayerCard from "../components/PlayerCard";
import PlayerFilter from "../components/PlayerFilter";
import { Link } from "react-router-dom";

export default function PlayersPage() {
  const handleSubmit = (filters) => {
    console.log(filters);
  };

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
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
    </div>
  );
}
