import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const MenuListing = ({ menu, dropdownIdx, handleDropdown, title }) => {
  return (
    <div className="my-4">
      <h1 className="heading">{title}</h1>
      <div className="h-auto ">
        {menu.map((option, idx) => (
          <div key={idx}>
            <button
              className="rounded-lg border border-gray-200 text-lg font-bold p-1 my-1 w-full flex justify-between hover:bg-gray-100 transition-all "
              onClick={() => handleDropdown(idx)}
            >
              <span className="m-1">{option.category}</span>
              &nbsp;
              <span className="text-sm rounded-full bg-gray-200 p-3">
                {option.items.length}
              </span>
            </button>
            <ul
              className={`w-full  ${dropdownIdx === idx ? "block" : "hidden"}`}
            >
              {option.items.map((el, index) => (
                <li
                  key={index}
                  className="py-2 flex justify-between border-0 border-b-2"
                >
                  <div>
                    {el}{" "}
                    <span className="bg-gray-100 rounded-[20px] text-[12px]   p-1 ms-2">
                      Order: {"12"}
                    </span>
                  </div>

                  <div className="flex gap-2 me-2">
                    <button className="border-0 transparant">
                      <FiEdit />
                    </button>
                    <button className="border-0 transparant">
                      <BsTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuListing;
