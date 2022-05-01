import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { API_BASEURL } from "../appConfig";
import axios from "axios";
import RefereeCard from "../components/RefereeCard";

export default function RefereesPage({}) {
  const [referees, setReferees] = useState([]);

  // const handleSubmit = async (filters) => {
  //   await axios
  //     .post(`${API_BASEURL}/referees/filter`, filters)
  //     .then((res) => {
  //       console.log(res);
  //       setReferees(res.data);
  //     })
  //     .catch((e) => {
  //       setReferees([]);
  //       console.log(e);
  //     });
  // };

  const getReferees = async () => {
    await axios.get(`${API_BASEURL}/referees/all`).then((res) => {
      setReferees(res.data);
    });
  };
  useEffect(() => {
    getReferees();
  }, []);
  return (
    <div className="w-full p-20 px-56 ">
      <Link
        to={"/referees/create"}
        className="hover:text-amber-400 text-white font-bold  rounded-md bg-green-700 py-2 px-4"
      >
        Add New Referee
      </Link>
      <div className="w-full flex justify-center items-stretch flex-wrap">
        {referees.map((r) => (
          <RefereeCard referee={r} />
        ))}
      </div>
    </div>
  );
}
