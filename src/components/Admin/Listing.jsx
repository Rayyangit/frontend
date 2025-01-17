import React, { useState } from "react";
import Filter from "./Filter";
import Sorting from "./Sorting";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Listing = ({ categories, filter }) => {
  const [expanded, setExpanded] = useState(true);
  const list = [
    "A-Z",
    "Z-A",
    "Newest",
    "Oldest",
    "Recently Updated",
    "Restaurants delisted ",
  ];

  return (
    <div
      className={`${
        expanded ? "w-[30%] min-w-[300px] p-4" : "w-0 ps-5 pt-4"
      } border-r overflow-y-auto h-[85%] sticky top-0 bg-gray-50 border border-gray-200 transition duration-200 overflow-x-hidden flex flex-col
      `}
    >
      <div
        className={`transition self-end duration-200  ${
          expanded ? "self-end" : "self-start absolute"
        }`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className={`text-black focus:outline-none transition-all justify-self-end duration-200 ${
            expanded && "justify-self-end"
          }`}
        >
          {expanded ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>

      {/* Render categories similarly to screenshot */}
      {expanded && (
        <>
          <div className="flex">
            <Filter filter={filter} />
            <Sorting list={list} />
          </div>

          <ul className="w-full h-[50%] overflow-y-scroll">
            {categories.map((cat, idx) => (
              <li
                key={cat.name}
                className="py-2  border-b text-gray-700 hover:bg-gray-200 "
                onClick={() => handleSwitch(cat.id - 1)}
              >
                <div className="flex  justify-between cursor-pointer ">
                  {/* Category name */}
                  <span>{cat.name}</span>
                  {/* <span className={`text-red-500 text-[8px] `}>
                     <FaCircle className="flex items-center" />
                   </span> */}
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-blue-500 hover:text-blue-600">
            + Add More Restaurants
          </button>
        </>
      )}
    </div>
  );
};

export default Listing;
