import React, { useState } from "react";

export default function TeamFilter({ handleSubmit }) {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setState({});
    handleSubmit({});
  };

  return (
    <div>
      <div className="font-bold text-xl">Filters</div>
      <div className="flex flex-col">
        <label for="numberOfTrophies">Number of trophies</label>
        <input
          type="number"
          name="numberOfTrophies"
          onChange={handleChange}
          className="border-2 border-green-600 rounded-md h-10 p-1"
          min={0}
        />
        <label for="country">Country</label>
        <input
          type="text"
          name="country"
          onChange={handleChange}
          className="border-2 border-green-600 rounded-md h-10 p-1"
        />
        <label for="stadium">Stadium Name</label>
        <input
          type="text"
          name="stadium"
          onChange={handleChange}
          className="border-2 border-green-600 rounded-md h-10 p-1"
          min={0}
        />
      </div>
      <div className="my-3">
        <div
          onClick={() => handleSubmit(state)}
          className="my-1 cursor-pointer border-2 border-green-600 bg-green-600 text-center text-white py-2 rounded-md  hover:text-green-600 hover:bg-white"
        >
          Apply
        </div>
        <div
          onClick={handleReset}
          className="my-1 cursor-pointer border-2 border-green-600 hover:bg-green-200 text-center  py-2 rounded-md  text-green-600 bg-white"
        >
          Reset
        </div>
      </div>
    </div>
  );
}
