import React from "react";

export default function CoachCard() {
  const coach = {
    firstName: "Pep",
    lastName: "Guardiola",
    birthdate: "01/01/1970",
    currentClub: "Manchester City",
    yearsOfExperience: 15,
    nationalTeam: "Spain",
    nationality: "Spanish",
    picture:
      "https://cdn.theathletic.com/app/uploads/2022/04/04095442/PEP-GUARDIOLA-OVERTHINKING-scaled-e1649080514173-1024x683.jpg",
    transferHistory: [
      "Barcelona FC ➡️ Bayern Munich",
      "Bayern Munich ➡️ Manchester City",
    ],
  };

  return (
    <div className="w-1/4 my-3 mx-1 bg-green-200 rounded-md shadow-md py-4 px-2 flex flex-col items-center">
      <div
        className="rounded-full my-2"
        style={{
          height: 100,
          width: 100,
          backgroundImage: "url(" + coach.picture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="font-bold">
        {coach.firstName} {coach.lastName}
      </div>
      <div>{coach.birthdate}</div>
      <div> {coach.currentClub}</div>
      <div>🗺️{coach.nationality}</div>
      <div>📅{coach.yearsOfExperience} Years as Coach</div>
      {Math.random() > 0.5 &&
        coach?.transferHistory?.map((t) => <div>{t}</div>)}
    </div>
  );
}
