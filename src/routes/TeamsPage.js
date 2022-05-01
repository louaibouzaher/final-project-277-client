import React, { useState, useEffect } from "react";
import TeamCard from "../components/TeamCard";
import TeamFilter from "../components/TeamFilter";
import { Link } from "react-router-dom";
import { API_BASEURL } from "../appConfig";
import axios from "axios";
import { notify } from "../helpers/notification";

export default function TeamsPage() {
  const [nationalTeams, setNationalTeams] = useState([]);
  const [clubs, setClubs] = useState([]);

  const handleSubmit = async (filters) => {
    await axios
      .post(`${API_BASEURL}/teams/nationalteam/filter`, filters)
      .then((res) => {
        console.log(res);
        setNationalTeams(res.data);
      })
      .catch((e) => {
        setNationalTeams([]);
        notify(JSON.stringify(e));
      });
    await axios
      .post(`${API_BASEURL}/teams/club/filter`, filters)
      .then((res) => {
        console.log(res);
        setClubs(res.data);
      })
      .catch((e) => {
        setClubs([]);
        notify(JSON.stringify(e));
      });
  };
  const getNationalTeams = async () => {
    await axios
      .get(`${API_BASEURL}/teams/nationalteam/all`)
      .then((res) => {
        setNationalTeams(res.data);
      })
      .catch((e) => {
        notify(JSON.stringify(e));
        setNationalTeams([]);
      });
  };
  const getClubs = async () => {
    await axios
      .get(`${API_BASEURL}/teams/club/all`)
      .then((res) => {
        setClubs(res.data);
      })
      .catch((e) => {
        notify(JSON.stringify(e));
        setClubs([]);
      });
  };

  const reset = () => {
    getNationalTeams();
    getClubs();
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="w-full p-20">
      <Link
        to={"/teams/create"}
        className="hover:text-amber-400 text-white font-bold  rounded-md bg-green-700 py-2 px-4"
      >
        Add New Team
      </Link>
      <div className="w-full py-10 flex ">
        <TeamFilter reset={reset} handleSubmit={handleSubmit} />
        <div className="flex flex-col w-full items-center">
          <div className=" text-2xl font-bold">Clubs</div>
          <div className="w-full flex justify-center items-stretch flex-wrap">
            {clubs.map((c) => (
              <TeamCard team={c} />
            ))}
          </div>
          <div className=" text-2xl items-center font-bold">National Teams</div>
          <div className="w-full flex justify-center items-stretch flex-wrap">
            {nationalTeams.map((c) => (
              <TeamCard team={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
