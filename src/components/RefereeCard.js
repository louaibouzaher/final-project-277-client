import React from "react";
import { API_BASEURL } from "../appConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { notify } from "../helpers/notification";
export default function RefereeCard({ referee }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios
      .delete(`${API_BASEURL}/referees/delete/${referee.ID}`)
      .then((res) => {
        notify("Referee Deleted Successfully");
        console.log(res);
      })
      .catch((e) => {
        notify(JSON.stringify(e));
      });
  };
  const date = new Date(referee.birthDate);
  const birthdate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const handleEdit = () => {
    navigate("/referees/create", { state: referee });
  };
  return (
    <div className="w-1/4 my-3 mx-1 bg-green-200 rounded-md shadow-md py-4 px-2 flex flex-col items-center">
      <div className="w-full flex justify-between px-2">
        <div
          className="text-red-600 font-bold cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </div>
        <div
          className="text-blue-600 font-bold cursor-pointer"
          onClick={handleEdit}
        >
          Edit
        </div>
      </div>

      <img
        src={referee.picture}
        className="rounded-full my-2"
        style={{
          height: 100,
        }}
      />
      <div className="font-bold">
        {referee.firstName} {referee.lastName}
      </div>
      <div>{birthdate}</div>
      <div> {referee.teamName}</div>
      <div>🗺️{referee.nationality}</div>
      <div>⌚{referee.yearsOfExpercience}</div>
    </div>
  );
}
