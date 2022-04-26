import React from "react";

export default function PlayerCard({ player }) {
  // const player = {
  //   firstName: "González López",
  //   lastName: "Pedri",
  //   birthdate: "01/01/2000",
  //   shirtNumber: "16",
  //   numberOfGoals: 10,
  //   currentClub: "Barcelona FC",
  //   position: "AM",
  //   nationalTeam: "Spain",
  //   nationality: "Spanish",
  //   picture:
  //     "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/PEDRI%20-%20RETRAT.jpg",
  //   transferHistory: ["Alavis ➡️ Granade", "Granade ➡️ Barcelona FC"],
  // };

  return (
    <div className="w-1/4 my-3 mx-1 bg-green-200 rounded-md shadow-md py-4 px-2 flex flex-col items-center">
      <div className="w-full flex justify-between px-2">
        <div className="text-red-600 font-bold cursor-pointer">Delete</div>
        <div className="text-blue-600 font-bold cursor-pointer">Edit</div>
      </div>
      <div
        className="rounded-full my-2"
        style={{
          height: 100,
          width: 100,
          backgroundImage: "url(" + player.picture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="font-bold">
        {player.firstName} {player.lastName}
      </div>
      <div>{player.birthdate}</div>
      <div>
        {" "}
        {player.currentClub} # {player.shirtNumber}
      </div>
      <div>{player.nationality}</div>
      <div>⚽{player.numberOfGoals}</div>
      {Math.random() > 0.5 &&
        player?.transferHistory?.map((t) => <div>{t}</div>)}
    </div>
  );
}
