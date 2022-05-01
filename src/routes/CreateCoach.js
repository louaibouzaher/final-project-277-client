import React, { useEffect, useState } from "react";
import { notify } from "../helpers/notification";
import axios from "axios";
import { API_BASEURL } from "../appConfig";
import { useLocation } from "react-router-dom";

export default function CreateCoach() {
  const [coach, setCoach] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();

  const handleChange = (e) => {
    setCoach({ ...coach, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (isEditing) {
      await axios
        .put(`${API_BASEURL}/coaches/update/${coach.people_Id}`, coach)
        .then((res) => {
          console.log(res);
          notify("Coach Updated Successfully");
        });
    } else {
      await axios.post(`${API_BASEURL}/coaches/create`, coach).then((res) => {
        console.log(res);
        notify("Coach Created Successfully");
      });
    }
  };

  useEffect(() => {
    setIsEditing(location.state ? true : false);
    setCoach(location.state ? location.state : {});
  }, []);
  return (
    <div className="">
      <div className="py-20 px-20 flex flex-col">
        <div className="text-2xl my-2 font-bold">
          {" "}
          {isEditing ? `Editing Coach` : `Adding New Coach`}
        </div>
        <input
          placeholder="First Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="firstName"
          value={coach.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="lastName"
          value={coach.lastName}
          onChange={handleChange}
        />
        <input
          placeholder="Paste picture link here"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="picture"
          value={coach.picture}
          onChange={handleChange}
        />

        <input
          placeholder=""
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="date"
          name="birthdate"
          value={coach.birthdate}
          onChange={handleChange}
        />
        <input
          placeholder="Current Team"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="teamName"
          value={coach.teamName}
          onChange={handleChange}
        />

        <input
          placeholder="Nationality"
          className="w-1/2 border-2 border-green-600 rounded-md h-10 p-1 my-1"
          type="text"
          name="nationality"
          value={coach.nationality}
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
