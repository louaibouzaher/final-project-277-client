import React from "react";

export default function TeamCard() {
  const team = {
    name: "Barcelona FC",
    numberOfTrophies: 132,
    country: "Spain",
    continent: "Europe",
    stadium: "Camp Nou",
    logo: "https://wallpaperaccess.com/full/777518.jpg",
  };

  return (
    <div className="w-1/4 my-3 mx-1 bg-green-200 rounded-md shadow-md py-4 px-2 flex flex-col items-center">
      <div
        className="rounded-full my-2"
        style={{
          height: 100,
          width: 100,
          backgroundImage: "url(" + team.logo + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="font-bold">{team.firstName}</div>
      <div>
        {" "}
        {team.country} | {team.continent}
      </div>
      <div>🏟️{team.stadium}</div>
      <div>🏆{team.numberOfTrophies}</div>
    </div>
  );
}
