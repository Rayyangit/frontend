import React from "react";

const OfferCard = ({ offers, title }) => {
  return (
    <div className="my-4">
      <h1 className="heading">{title}</h1>
      <div className="flex gap-4 flex-wrap">
        {offers.map((el, idx) => (
          <div
            key={idx}
            className="p-4 w-[250px] rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div></div>
            <h2 className="font-semibold text-gray-800 text-lg mb-2">
              {el.title}
            </h2>
            <p className="text-gray-600 text-sm">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
