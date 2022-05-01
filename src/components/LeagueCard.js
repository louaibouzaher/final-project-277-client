import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASEURL } from "../appConfig";
import { notify } from "../helpers/notification";
import { useNavigate } from "react-router-dom";
export default function LeagueCard({ league }) {
  const [champions, setChampions] = useState([]);
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();
  console.log(league);

  const getMatches = async () => {
    console.log(league.Id);
    await axios
      .get(`${API_BASEURL}/leagues/matches/${league.Id}`, {
        leagueName: league.leagueName,
      })
      .then((res) => {
        setMatches(res.data);
      })
      .catch((e) => {
        notify(JSON.stringify(e));
      });
  };
  const getChampions = async () => {
    await axios
      .get(`${API_BASEURL}/leagues/champions/${league.Id}`, {
        leagueName: league.leagueName,
      })
      .then((res) => {
        setChampions(res.data);
      })
      .catch((e) => {
        notify(JSON.stringify(e));
      });
  };

  const handleDelete = async () => {
    await axios
      .delete(`${API_BASEURL}/leagues/delete/${league.Id}`)
      .then((res) => {
        console.log(res);
        notify("League Deleted Successfully");
      })
      .catch((e) => {
        notify(JSON.stringify(e));
      });
  };

  const handleEdit = () => {
    navigate("/leagues/create", { state: league });
  };

  useEffect(() => {
    getMatches();
    getChampions();
  }, []);
  return (
    <div className="relative w-full my-3 mx-1 bg-green-200 rounded-md shadow-md p-4 flex  items-start space-x-2">
      <div
        className="rounded-md my-2"
        style={{
          height: 200,
          width: 200,
          backgroundImage: "url(" + league.logo + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="text-blue-600 absolute top-6 right-10 font-bold"
        onClick={handleEdit}
      >
        Edit
      </div>
      <div
        className="text-red-600 absolute top-6 right-20 font-bold"
        onClick={handleDelete}
      >
        Delete
      </div>
      <div className="flex flex-col p-1 ">
        <div className="text-2xl font-bold my-1">{league.leagueName}</div>

        <div className="border-2 border-black max-w-max  px-1 rounded-md">
          {" "}
          {league.leagueType}{" "}
        </div>
        <div className="text-xl font-bold my-2">Champions</div>

        {champions.length > 0 &&
          champions?.map((c) => (
            <div>
              🏆
              {c.teamName} - {new Date(c.championDate).getFullYear()}
            </div>
          ))}
        <div className="text-xl font-bold my-2">Matches</div>
        {matches.length > 0 &&
          matches?.map((m) => (
            <div>
              ⚽{m.hostName} - {m.guestName} @ {m.stadium} 📅{" "}
              {new Date(m.matchDate).toDateString()}
            </div>
          ))}
      </div>
    </div>
  );
}
