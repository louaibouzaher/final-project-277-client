import React from "react";
import { API_BASEURL } from "../appConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TeamCard({ team }) {
  const navigate = useNavigate();

  console.log(team);
  const handleDelete = async () => {
    await axios.delete(`${API_BASEURL}/teams/delete/${team.ID}`).then((res) => {
      console.log(res);
    });
  };

  const handleEdit = () => {
    navigate("/teams/create", { state: team });
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
        src={team.logo}
        className="rounded-full my-2"
        style={{
          height: 100,
        }}
      />
      <div className="font-bold">{team.teamName}</div>
      <div> {team.country || team.continent}</div>
      <div>🏟️{team.stadium}</div>
      <div>🏆{team.numberOfTrophies}</div>
    </div>
  );
}
