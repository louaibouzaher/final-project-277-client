import React from "react";
import TeamCard from "../components/TeamCard";
import TeamFilter from "../components/TeamFilter";

export default function TeamsPage() {
  const handleSubmit = (filters) => {
    console.log(filters);
  };

  return (
    <div className="w-full p-20 px-10 flex ">
      <TeamFilter handleSubmit={handleSubmit} />

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
