import React, { useState } from "react";

export default function CreateTeam() {
  const [Team, setTeam] = useState({});

  const handleChange = (e) => {
    setTeam({ ...Team, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(Team);
  };
  return (
    <div className="">
      <div className="py-20 px-20 flex flex-col">
        <div className="text-2xl my-2 font-bold">Adding New Team</div>
        <input
          placeholder="Name"
          className="w-1/4 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="name"
          value={Team.name}
          onChange={handleChange}
        />
        <input
          placeholder="Stadium"
          className="w-1/4 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="stadium"
          value={Team.stadium}
          onChange={handleChange}
        />
        <input
          placeholder="Paste logo link here"
          className="w-1/4 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="logo"
          value={Team.logo}
          onChange={handleChange}
        />

        <input
          placeholder="Country"
          className="w-1/4 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="country"
          value={Team.country}
          onChange={handleChange}
        />
        <input
          placeholder="Number of trophies"
          className="w-1/4 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="number"
          min={0}
          name="numberOfTrophies"
          value={Team.numberOfTrophies}
          onChange={handleChange}
        />
        <div
          onClick={handleSubmit}
          className="my-2 px-3 max-w-min cursor-pointer border-2 border-green-600 bg-green-600 text-center text-white py-2 rounded-md  hover:text-green-600 hover:bg-white"
        >
          Submit
        </div>
      </div>
    </div>
  );
}
