import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BASEURL } from "../appConfig";
import axios from "axios";
import CoachCard from "../components/CoachCard";
import { notify } from "../helpers/notification";

export default function CoachesPage({}) {
  const [coaches, setCoaches] = useState([]);
  console.log(coaches);
  const handleSubmit = async (filters) => {
    await axios
      .post(`${API_BASEURL}/coaches/filter`, filters)
      .then((res) => {
        setCoaches(res.data);
      })
      .catch((e) => {
        notify(JSON.stringify(e));
        setCoaches([]);
        console.log(e);
      });
  };

  const getCoaches = async () => {
    await axios
      .get(`${API_BASEURL}/coaches/all`)
      .then((res) => {
        setCoaches(res.data);
      })
      .catch((e) => {
        setCoaches([]);
        notify(JSON.stringify(e));
      });
  };
  useEffect(() => {
    getCoaches();
  }, []);
  return (
    <div className="w-full p-20 px-56 ">
      <Link
        to={"/coaches/create"}
        className="hover:text-amber-400 text-white font-bold  rounded-md bg-green-700 py-2 px-4"
      >
        Add New Coach
      </Link>
      <div className="w-full flex justify-center items-stretch flex-wrap">
        {coaches.map((c) => (
          <CoachCard coach={c} />
        ))}
      </div>
    </div>
  );
}
