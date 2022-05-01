import React, { useEffect, useState } from "react";
import { notify } from "../helpers/notification";
import axios from "axios";
import { API_BASEURL } from "../appConfig";
import { useLocation } from "react-router-dom";

export default function CreateReferee() {
  const [referee, setReferee] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();

  const handleChange = (e) => {
    setReferee({ ...referee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      await axios
        .put(`${API_BASEURL}/referees/update/${referee.people_Id}`, referee)
        .then((res) => {
          console.log(res);
          notify("Referee Updated Successfully");
        })
        .catch((e) => {
          notify(e);
        });
    } else {
      await axios
        .post(`${API_BASEURL}/referees/create`, referee)
        .then((res) => {
          console.log(res);
          notify("Referee Created Successfully");
        })
        .catch((e) => {
          notify(e);
        });
    }
  };

  useEffect(() => {
    setIsEditing(location.state ? true : false);
    setReferee(
      location.state
        ? {
            ...location.state,
            refereeFirstName: location.state.firstName,
            refereeLastName: location.state.lastName,
            birthdate: location.state.birthDate,
            refereePicture: location.state.picture,
            refereeNationality: location.state.nationality,
            refereeYearsOfExp: location.state.yearsOfExpercience,
          }
        : {}
    );
  }, []);
  return (
    <div className="">
      <div className="py-20 px-20 flex flex-col">
        <div className="text-2xl my-2 font-bold">
          {" "}
          {isEditing ? `Editing referee` : `Adding New referee`}
        </div>
        <input
          placeholder="First Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="refereeFirstName"
          value={referee.refereeFirstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="refereeLastName"
          value={referee.refereeLastName}
          onChange={handleChange}
        />
        <input
          placeholder="Paste picture link here"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="refereePicture"
          value={referee.refereePicture}
          onChange={handleChange}
        />

        <input
          placeholder=""
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="date"
          name="birthdate"
          value={referee.birthdate}
          onChange={handleChange}
        />

        <input
          placeholder="Nationality"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="refereeNationality"
          value={referee.refereeNationality}
          onChange={handleChange}
        />
        <input
          placeholder="Years of Experience"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="number"
          name="refereeYearsOfExp"
          value={referee.refereeYearsOfExp}
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
