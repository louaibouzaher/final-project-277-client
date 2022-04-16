import React from "react";
import CoachCard from "../components/CoachCard";

export default function CoachesPage() {
  return (
    <div className="w-full p-20 px-56 ">
      <div className="w-full flex justify-center items-stretch flex-wrap">
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
        <CoachCard />
      </div>
    </div>
  );
}
