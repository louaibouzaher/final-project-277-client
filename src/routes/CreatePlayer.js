import React, { useState } from "react";
import { notify } from "../helpers/notification";
import axios from "axios";
import { API_BASEURL } from "../appConfig";
export default function CreatePlayer() {
  const [player, setPlayer] = useState({});

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post(`${API_BASEURL}/players/create`, player).then((res) => {
      console.log(res);
      notify("Player Created Successfully");
    });
  };
  return (
    <div className="">
      <div className="py-20 px-20 flex flex-col">
        <div className="text-2xl my-2 font-bold">Adding New Player</div>
        <input
          placeholder="First Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="firstName"
          value={player.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="lastName"
          value={player.lastName}
          onChange={handleChange}
        />
        <input
          placeholder="Paste picture link here"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="picture"
          value={player.picture}
          onChange={handleChange}
        />
        <input
          placeholder="Position"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="position"
          value={player.position}
          onChange={handleChange}
        />
        <input
          placeholder=""
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="date"
          name="birthdate"
          value={player.birthdate}
          onChange={handleChange}
        />
        <input
          placeholder="Current Club"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="currentClub"
          value={player.currentClub}
          onChange={handleChange}
        />
        <input
          placeholder="Shirt Number"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="shirtNumber"
          value={player.shirtNumber}
          onChange={handleChange}
        />
        <input
          placeholder="Nationality"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="nationality"
          value={player.nationality}
          onChange={handleChange}
        />
        <input
          placeholder="National Team"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="nationalTeam"
          value={player.nationalTeam}
          onChange={handleChange}
        />
        <input
          placeholder="Number of goals"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="number"
          min={0}
          name="numberOfGoals"
          value={player.numberOfGoals}
          onChange={handleChange}
        />
        <input
          placeholder="Number of trophies"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="number"
          min={0}
          name="numberOfTrophies"
          value={player.numberOfTrophies}
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
