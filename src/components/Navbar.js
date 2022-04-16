import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const routes = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Players",
      link: "/players",
    },
    {
      name: "Teams",
      link: "/teams",
    },
    {
      name: "Coaches",
      link: "/coaches",
    },
  ];
  return (
    <nav className="z-10 absolute w-full space-x-4 flex justify-center items-center text-xl font-bold text-white bg-green-600 py-3">
      {routes.map((r) => (
        <Link
          to={r.link}
          className="hover:text-amber-400  rounded-md bg-green-700 py-1 px-3"
        >
          {r.name}
        </Link>
      ))}
    </nav>
  );
}
