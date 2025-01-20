import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineGift,
  HiOutlineCog,
  HiOutlineInformationCircle,
  HiViewList,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { MdOutlineDining } from "react-icons/md";
import { dummyData } from "../data/dummy";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Popup from "../utils/Popup";
import { IoRestaurantSharp } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { LuPartyPopper } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { GoShieldLock } from "react-icons/go";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState("");

  // Main container: dark gray background, white text, smooth width transitions
  const sidebarClasses = `
    ${expanded ? "w-64" : "w-12"}
    flex flex-col
    border-r border-gray-800
    bg-gray-900 z-[20] fixed top-0 left-0 h-full
    text-white
    transition-all duration-300 ease-in-out overflow-hidden
  `;

  // Top bar behind the “zomato” text: red accent
  const topBarClasses = `
    w-full py-4 px-4
    bg-red-600
    flex flex-col items-start
  `;

  // “Restaurant dashboard” line fade/slide
  const restaurantDashClasses = `
    transition-all duration-300 ease-in-out overflow-hidden
    ${expanded ? "max-h-10 mt-1 opacity-100" : "max-h-0 mt-0 opacity-0"}
  `;

  // Bottom outlet info: slide/fade in/out
  const bottomInfoClasses = `
    border-t border-gray-800 text-sm leading-tight
    transition-all duration-300 ease-in-out overflow-hidden
    ${expanded ? "max-h-32 p-4 opacity-100" : "max-h-0 p-0 opacity-0"}
  `;

  const { outletInfo } = dummyData;
  const handleHover = (text) => {
    setHovered(text);
  };

  // Nav items helper: icons + label fade
  function navItem(to, Icon, label) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `
            block rounded-md
            ${isActive ? "bg-gray-700 font-semibold" : "font-medium"}
            hover:bg-gray-700
            text-gray-200
            transition-colors duration-200
          `
        }
      >
        <div className="flex items-center gap-2 px-3 py-2">
          <Icon size={20} className="flex-shrink-0" />
          <span
            className={`
              whitespace-nowrap
              transition-all duration-300 ease-in-out
              ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
              overflow-hidden
            `}
          >
            {label}
          </span>
        </div>
      </NavLink>
    );
  }

  const Tab = ({ text, to, icon }) => {
    return (
      <>
        <li
          onMouseOver={() => handleHover(text)}
          onMouseOut={() => handleHover("")}
          className="relative"
        >
          {navItem(to, icon, text)}
          {!expanded && <Popup hovered={hovered} text={text} />}
        </li>
      </>
    );
  };

  return (
    <div className={sidebarClasses}>
      {/* Top bar with brand + toggle, using bg-red-600 */}
      <div className={topBarClasses}>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`text-white focus:outline-none  transition-all self-end duration-200 ${
            expanded ? "self-end" : "self-start"
          }`}
        >
          {expanded ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
        <div className="flex items-center justify-between w-full">
          <div className="font-bold text-2xl">{expanded ? "zomato" : "z"}</div>
        </div>
        <div className={restaurantDashClasses}>
          <div className="text-sm font-medium">Admin Dashboard</div>
        </div>
      </div>

      {/* Navigation links (dark theme) */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {/* <Tab text="Dashboard" to="/" icon={HiOutlineHome} /> */}
          <Tab text="Analytics and Insights" to="/" icon={HiOutlineHome} />
          <Tab text="Upload" to={"/upload"} icon={FiUpload} />
          <Tab
            text="Listed Restaurants"
            to="/restaurants"
            icon={IoRestaurantSharp}
          />
          <Tab text="Events Hub" to="/events" icon={LuPartyPopper} />
          <Tab text="Notifications" to="/notifications" icon={HiViewList} />
          <Tab text="Access Control" to="/control" icon={GoShieldLock} />
          <Tab text="History Log" to="/log" icon={HiViewList} />
          <Tab text="Support and Feedbacks" to="/support" icon={BiSupport} />
          <Tab text="Help" to="/help" icon={HiOutlineQuestionMarkCircle} />
        </ul>
      </nav>

      {/* Bottom outlet info (slide/fade) */}
      <div className={bottomInfoClasses}>
        <div className="font-semibold">{outletInfo.name || "Loading..."}</div>
        <div>{"res_id278364726"}</div>
        <div>{"12 street, New way"}</div>
      </div>
    </div>
  );
}
