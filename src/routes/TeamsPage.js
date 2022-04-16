import React from "react";
import TeamCard from "../components/TeamCard";
export default function TeamsPage() {
  return (
    <div className="w-full p-20 px-56 ">
      <div className="w-full flex justify-center items-center flex-wrap">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}
