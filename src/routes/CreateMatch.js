import React, { useEffect, useState } from "react";
import { notify } from "../helpers/notification";
import axios from "axios";
import { API_BASEURL } from "../appConfig";

export default function CreateMatch() {
  const [match, setmatch] = useState({});

  const handleChange = (e) => {
    setmatch({ ...match, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios
      .post(`${API_BASEURL}/leagues/addmatch`, match)
      .then((res) => {
        console.log(res);
        notify("Match Added Successfully");
      })
      .catch((e) => {
        notify(e);
      });
  };

  return (
    <div className="">
      <div className="py-20 px-20 flex flex-col">
        <div className="text-2xl my-2 font-bold">Adding New match</div>
        <input
          placeholder="Host Team Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="hostTeamName"
          value={match.hostTeamName}
          onChange={handleChange}
        />
        <input
          placeholder="Guest Team Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="guestTeamName"
          value={match.guestTeamName}
          onChange={handleChange}
        />
        <input
          placeholder="Stadium"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="stadiumName"
          value={match.stadiumName}
          onChange={handleChange}
        />
        <input
          placeholder=""
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="date"
          name="dateOfMatch"
          value={match.dateOfMatch}
          onChange={handleChange}
        />
        <input
          placeholder="League Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="league_Name"
          value={match.league_Name}
          onChange={handleChange}
        />
        <input
          placeholder="Referee first name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="refereeFirstName"
          value={match.refereeFirstName}
          onChange={handleChange}
        />
        <input
          placeholder="Referee last name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="refereeLastName"
          value={match.refereeLastName}
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
