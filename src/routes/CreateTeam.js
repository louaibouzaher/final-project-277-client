import React, { useEffect, useState } from "react";
import { notify } from "../helpers/notification";
import axios from "axios";
import { API_BASEURL } from "../appConfig";
import { useLocation } from "react-router-dom";
export default function CreateTeam() {
  const [Team, setTeam] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const handleChange = (e) => {
    setTeam({ ...Team, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      await axios
        .put(`${API_BASEURL}/teams/update/${Team.ID}`, Team)
        .then((res) => {
          console.log(res);
          notify("Team Updated Successfully");
        });
    } else {
      if (Team.isNationalTeam) {
        await axios
          .post(`${API_BASEURL}/teams/nationalteam/create`, Team)
          .then((res) => {
            console.log(res);
            notify("International Team Created Successfully");
          })
          .catch((e) => {
            notify(e);
          });
      } else {
        await axios
          .post(`${API_BASEURL}/teams/club/create`, Team)
          .then((res) => {
            console.log(res);
            notify("Club Created Successfully");
          })
          .catch((e) => {
            notify(e);
          });
      }
    }
  };
  useEffect(() => {
    setIsEditing(location.state ? true : false);
    setTeam(location.state ? location.state : {});
  }, []);
  return (
    <div className="">
      <div className="py-20 px-20 flex flex-col">
        <div className="text-2xl my-2 font-bold">Adding New Team</div>
        <div className="mt-2">Is it a national team?</div>
        <div className="flex items-center space-x-2">
          <input
            className="mb-2"
            type="radio"
            name="isNationalTeam"
            id="isNationalTeam"
            value={true}
            onChange={(e) => {
              setTeam({ ...Team, isNationalTeam: true });
            }}
          />
          <label for="isNationalTeam">Yes</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            className="mb-2"
            type="radio"
            name="isNationalTeam"
            id="isNationalTeam"
            value={false}
            onChange={(e) => {
              setTeam({ ...Team, isNationalTeam: false });
            }}
          />
          <label for="isNationalTeam">No</label>
        </div>

        <input
          placeholder="Name"
          className="w-1/4 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="teamName"
          value={Team.teamName}
          onChange={handleChange}
        />
        <input
          placeholder="Stadium (Not required for national team)"
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
          placeholder="Country/Continent"
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
