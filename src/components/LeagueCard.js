import React from "react";

export default function LeagueCard() {
  const league = {
    name: "UEFA Champions League",
    country: "Europe",
    type: "Knockout Competition",
    picture:
      "https://sportsrock.co.uk/wp-content/uploads/2022/03/UCL_Keyvisual.jpg.jpg",

    champions: [
      {
        year: 2020,
        champion: "Chelsea FC",
      },
      {
        year: 2020,
        champion: "Chelsea FC",
      },
      {
        year: 2020,
        champion: "Chelsea FC",
      },
      {
        year: 2020,
        champion: "Chelsea FC",
      },
      {
        year: 2020,
        champion: "Chelsea FC",
      },
      {
        year: 2020,
        champion: "Chelsea FC",
      },
      {
        year: 2020,
        champion: "Chelsea FC",
      },
    ],
  };

  return (
    <div className="w-full my-3 mx-1 bg-green-200 rounded-md shadow-md p-4 flex  items-start space-x-2">
      <div
        className="rounded-md my-2"
        style={{
          height: 200,
          width: 200,
          backgroundImage: "url(" + league.picture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col p-1 ">
        <div className="text-2xl font-bold my-1">{league.name}</div>

        <div className="border-2 border-black max-w-fit px-1 rounded-md">
          {" "}
          {league.type}{" "}
        </div>
        <div>📍{league.country}</div>
        {league?.champions?.map((c) => (
          <div>
            🏆
            {c.champion} - {c.year}
          </div>
        ))}
      </div>
    </div>
  );
}
