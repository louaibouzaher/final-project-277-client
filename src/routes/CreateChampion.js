import React, { useEffect, useState } from "react";
import { notify } from "../helpers/notification";
import axios from "axios";
import { API_BASEURL } from "../appConfig";

export default function CreateChampion() {
  const [Champion, setChampion] = useState({});

  const handleChange = (e) => {
    setChampion({ ...Champion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios
      .post(`${API_BASEURL}/leagues/addchampion`, Champion)
      .then((res) => {
        console.log(res);
        notify("Champion Added Successfully");
      })
      .catch((e) => {
        notify(JSON.stringify(e));
      });
  };
  return (
    <div className="">
      <div className="py-20 px-20 flex flex-col">
        <div className="text-2xl my-2 font-bold">Adding New Champion</div>
        <input
          placeholder="League Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="championLeagueName"
          value={Champion.championLeagueName}
          onChange={handleChange}
        />
        <input
          placeholder="Team Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="championTeamName"
          value={Champion.championTeamName}
          onChange={handleChange}
        />

        <input
          placeholder=""
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="date"
          name="dateOfChampion"
          value={Champion.dateOfChampion}
          onChange={handleChange}
        />
        <input
          placeholder="Prize"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="number"
          name="championPrize"
          value={Champion.championPrize}
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
