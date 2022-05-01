import React, { useState, useEffect } from "react";
import { notify } from "../helpers/notification";
import axios from "axios";
import { API_BASEURL } from "../appConfig";
import { useLocation } from "react-router-dom";

export default function CreateLeague() {
  const [league, setLeague] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();

  const handleChange = (e) => {
    setLeague({ ...league, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      await axios
        .put(`${API_BASEURL}/leagues/update/${league.Id}`, league)
        .then((res) => {
          console.log(res);
          notify("League Updated Successfully");
        })
        .catch((e) => {
          notify(JSON.stringify(e));
        });
    } else {
      await axios
        .post(`${API_BASEURL}/leagues/create`, league)
        .then((res) => {
          console.log(res);
          notify("League Created Successfully");
        })
        .catch((e) => {
          notify(JSON.stringify(e));
        });
    }
  };
  useEffect(() => {
    setIsEditing(location.state ? true : false);
    setLeague(location.state ? location.state : {});
  }, []);

  return (
    <div className="">
      <div className="py-20 px-20 flex flex-col">
        <div className="text-2xl my-2 font-bold">
          {isEditing ? "Editing League" : "Adding New League"}
        </div>
        <input
          placeholder="League Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="leagueName"
          value={league.leagueName}
          onChange={handleChange}
        />
        <input
          placeholder="League Type"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="leagueType"
          value={league.leagueType}
          onChange={handleChange}
        />
        <input
          placeholder="Logo"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="logo"
          value={league.logo}
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
