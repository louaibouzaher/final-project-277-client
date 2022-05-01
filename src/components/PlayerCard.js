import React from "react";
import { API_BASEURL } from "../appConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios
      .delete(`${API_BASEURL}/players/delete/${player.id}`)
      .then((res) => {
        console.log(res);
      });
  };
  const date = new Date(player.birthdate);
  const birthdate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const handleEdit = () => {
    navigate("/players/create", { state: player });
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
        src={player.picture}
        className="rounded-full my-2"
        style={{
          height: 100,
        }}
      />
      <div className="font-bold">
        {player.firstName} {player.lastName}
      </div>
      <div>{birthdate}</div>
      <div>
        {" "}
        {player.club} # {player.shirtNumber}
      </div>
      <div>{player.nationality}</div>
      <div>⚽{player.numberOfGoals}</div>
      {Math.random() > 0.5 &&
        player?.transferHistory?.map((t) => <div>{t}</div>)}
    </div>
  );
}
