import React from "react";
import LeagueCard from "../components/LeagueCard";

export default function LeaguesPage() {
  return (
    <div className="w-full p-20 px-56 ">
      <div className="w-full flex justify-center items-stretch flex-wrap">
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
      </div>
    </div>
  );
}
