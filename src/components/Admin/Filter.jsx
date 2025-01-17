import React from "react";

const Filter = ({ filter }) => {
  return (
    <div className="flex text-[12px] gap-[2px] cursor-pointer flex-wrap">
      {filter.map((el, idx) => (
        <span key={idx} className="rounded-2xl px-2 py-1 bg-gray-200 border">
          {el}
        </span>
      ))}
    </div>
  );
};

export default Filter;
