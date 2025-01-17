import React from "react";
import { FiEdit } from "react-icons/fi";

const Cuisines = ({ cuisines, title }) => {
  return (
    <div className="my-4">
      <h1 className="heading">{title}</h1>
      <div className="grid grid-cols-3 gap-4">
        {cuisines.map((el, idx) => (
          <div
            key={idx}
            className="text-gray-700 bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-2 flex items-center hover:shadow-md hover:bg-gray-100 transition-all duration-200"
          >
            <button className="bg-transparent border-0 me-1">
              {" "}
              <FiEdit title="edit" />
            </button>

            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
