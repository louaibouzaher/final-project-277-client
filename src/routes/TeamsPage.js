import React from "react";
import TeamCard from "../components/TeamCard";
import TeamFilter from "../components/TeamFilter";
import { Link } from "react-router-dom";
export default function TeamsPage() {
  const handleSubmit = (filters) => {
    console.log(filters);
  };

  return (
    <div className="w-full p-20">
      <Link
        to={"/teams/create"}
        className="hover:text-amber-400 text-white font-bold  rounded-md bg-green-700 py-2 px-4"
      >
        Add New Team
      </Link>
      <div className="w-full py-10 flex ">
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
    </div>
  );
}
