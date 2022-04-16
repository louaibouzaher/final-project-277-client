import React from "react";
import PlayerCard from "../components/PlayerCard";

export default function PlayersPage() {
  return (
    <div className="w-full p-20 px-56 ">
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
  );
}
