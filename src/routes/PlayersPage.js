import React, { useState } from "react";
import PlayerCard from "../components/PlayerCard";
import PlayerFilter from "../components/PlayerFilter";

export default function PlayersPage() {
  const handleSubmit = (filters) => {
    console.log(filters);
  };

  return (
    <div className="w-full p-20 px-10 flex">
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
  );
}
