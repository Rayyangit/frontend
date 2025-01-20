import React from "react";

const Popup = ({ text, hovered }) => {
  return (
    <>
      {hovered === text && (
        <span
          className={`fixed bg-white text-black rounded-md ms-10 border  p-2 z-[999]`}
        >
          {text}
        </span>
      )}
    </>
  );
};

export default Popup;
