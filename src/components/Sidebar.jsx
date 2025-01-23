<<<<<<< HEAD
import React, { useState, useContext } from "react";
=======
import React, { useState } from "react";
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
import { NavLink, useNavigate } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineGift,
  HiOutlineCog,
  HiOutlineInformationCircle,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineBell,
  HiViewList,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
<<<<<<< HEAD
import { OutletContext } from "../context/OutletContext";
import TopNav from "./TopNav";

export default function Sidebar({ setCurrentPage }) {
  const [expanded, setExpanded] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const { outletInfo } = useContext(OutletContext);
  const navigate = useNavigate();
=======
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
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // State for user management dropdown
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false); // State for admin dashboard dropdown
  const navigate = useNavigate(); // Initialize the navigate function
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1

  // Main container: dark gray background, white text, smooth width transitions
  const sidebarClasses = `
    ${expanded ? "w-64" : "w-12"}
    flex flex-col
    border-r border-gray-800
    bg-gray-900 z-[20] fixed top-0 left-0 h-full
    text-white
    transition-all duration-300 ease-in-out overflow-hidden
  `;

<<<<<<< HEAD
=======
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
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
  function navItem(to, Icon, label, external = false) {
    if (external) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md text-gray-200 hover:bg-gray-700 transition-colors duration-200"
          onClick={() => setCurrentPage(label)}
        >
          <div className="flex items-center gap-2 px-3 py-2">
            <Icon size={20} className="flex-shrink-0" />
            <span className={`${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"} transition-all duration-300 ease-in-out overflow-hidden`}>
              {label}
            </span>
          </div>
        </a>
      );
    }
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
<<<<<<< HEAD
          `block rounded-md ${isActive ? "bg-gray-700 font-semibold" : "font-medium"} hover:bg-gray-700 text-gray-200 transition-colors duration-200`
=======
          `
            block rounded-md
            ${isActive ? "bg-gray-700 font-semibold" : "font-medium"}
            hover:bg-gray-700
            text-gray-200
            transition-colors duration-200
          `
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
        }
        onClick={() => setCurrentPage(label)}
      >
        <div className="flex items-center gap-2 px-3 py-2">
          <Icon size={20} className="flex-shrink-0" />
<<<<<<< HEAD
          <span className={`${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"} transition-all duration-300 ease-in-out overflow-hidden`}>
=======
          <span
            className={`
              whitespace-nowrap
              transition-all duration-300 ease-in-out
              ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
              overflow-hidden
            `}
          >
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
            {label}
          </span>
        </div>
      </NavLink>
    );
  }

  const handleUserManagementClick = () => {
    setUserDropdownOpen(!userDropdownOpen);
    navigate("/usermanagement");
    setCurrentPage("User Management");
  };

  const handleAdminDashboardClick = () => {
    setAdminDropdownOpen(!adminDropdownOpen);
    setCurrentPage("Admin Dashboard");
  };

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
<<<<<<< HEAD
      <div className="w-full py-4 px-4 bg-red-600 flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <div className="font-bold text-2xl">{expanded ? "zomato" : "z"}</div>
          <button onClick={() => setExpanded(!expanded)} className="text-white focus:outline-none ml-2">
            {expanded ? "<" : ">"}
          </button>
=======
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
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
        </div>

        <div className="relative w-full">
          <div className="text-sm font-medium mt-1 flex items-center gap-2 px-3 py-2 cursor-pointer" onClick={handleAdminDashboardClick}>
            <div className={`whitespace-nowrap transition-all duration-300 ease-in-out ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
              Admin Dashboard
            </div>
            <span className={`transition-transform duration-300 ${adminDropdownOpen ? "rotate-90" : ""}`}>{expanded ? ">" : ""}</span>
          </div>

          {adminDropdownOpen && (
            <div className="absolute left-0 top-full bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
              <ul className="ml-0 mt-1 space-y-1 p-2 w-56">
                <li>{navItem("https://super-piroshki-0e56df.netlify.app/", HiOutlineUserGroup, "Marketing Dashboard", true)}</li>
                <li>{navItem("https://stellar-lolly-15c5c4.netlify.app/", HiOutlineUserGroup, "Event Dashboard", true)}</li>
                <li>{navItem("https://deft-entremet-2b5784.netlify.app/", HiOutlineTruck, "Moderator Dashboard", true)}</li>
                <li>{navItem("/setting", MdOutlineRestaurantMenu, "Restaurant Dashboard", true)}</li>
              </ul>
            </div>
          )}
        </div>
      </div>

<<<<<<< HEAD
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          <li>{navItem("/", HiOutlineHome, "Dashboard")}</li>
          <li>{navItem("/analytics", HiOutlineChartBar, "Analytics")}</li>
=======
      {/* Navigation links (dark theme) */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          <Tab text="Dashboard" to="/" icon={HiOutlineHome} />
          <Tab text="Analytics" to="/analytics" icon={HiOutlineChartBar} />

          <Tab
            text="Restaurants"
            to="/restaurants"
            icon={MdOutlineRestaurantMenu}
          />
          <Tab text="Upload" to={"/upload"} icon={FiUpload} />
          <Tab text="Access Control" to="/control" icon={GoShieldLock} />

          {/* User Management Dropdown */}
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
          <li>
            <div
              className="block rounded-md text-gray-200 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              onClick={handleUserManagementClick}
            >
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <HiOutlineUserGroup size={20} className="flex-shrink-0" />
<<<<<<< HEAD
                  <span className={`${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"} transition-all duration-300 ease-in-out`}>
=======
                  <span
                    className={`whitespace-nowrap
                                transition-all duration-300 ease-in-out
                                ${
                                  expanded
                                    ? "opacity-100 w-auto"
                                    : "opacity-0 w-0"
                                }
                                overflow-hidden`}
                  >
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
                    User Management
                  </span>
                </div>
                <span className={`transition-transform duration-300 ${userDropdownOpen ? "rotate-90" : ""}`}>{expanded ? ">" : ""}</span>
              </div>
            </div>
            {userDropdownOpen && (
              <ul className="ml-6 mt-1 space-y-1">
                <li>
                  {navItem(
                    "/manage-admins",
                    HiOutlineUserGroup,
                    "Manage Admins"
                  )}
                </li>
                <li>
                  {navItem(
                    "/manage-customers",
                    HiOutlineUserGroup,
                    "Manage Customers"
                  )}
                </li>
                <li>
                  {navItem("/manage-drivers", HiOutlineTruck, "Manage Drivers")}
                </li>
              </ul>
            )}
          </li>
<<<<<<< HEAD
          <li>{navItem("/restaurants", MdOutlineRestaurantMenu, "Restaurants")}</li>
          <li>{navItem("/orders", HiOutlineTruck, "Order Management")}</li>
          <li>{navItem("/collection-management", HiOutlineTruck, "Collection Management")}</li>
          <li>{navItem("/claim-restaurant", HiOutlineChartBar, "Claim Restaurant")}</li> 
          <li>{navItem("/dine-in-menu", HiOutlineChartBar, "Dine-In Menu")}</li>
          <li>{navItem("/taxes", HiOutlineGift, "Taxes and Charges")}</li>
          <li>{navItem("/offers", HiOutlineGift, "Offers")}</li>
         
      
          {/* <li>{navItem("/notifications", HiOutlineBell, "Notifications")}</li> */}
          <li>{navItem("/settings", HiOutlineCog, "Settings")}</li>
          <li>{navItem("/historylogs", HiOutlineQuestionMarkCircle, "History Logs")}</li>
          <li>{navItem("/help", HiOutlineQuestionMarkCircle, "Help")}</li>
        </ul>
      </nav>

      <div className={`border-t border-gray-800 text-sm leading-tight transition-all duration-300 ease-in-out ${expanded ? "max-h-32 p-4 opacity-100" : "max-h-0 p-0 opacity-0"}`}>
=======

          <Tab text="Order Management" to="/orders" icon={HiOutlineTruck} />
          <Tab text="Offers" to="/offers" icon={HiOutlineGift} />
          <Tab text="Notifications" to="/notifications" icon={HiOutlineBell} />
          <Tab text="Settings" to="/settings" icon={HiOutlineCog} />
          <Tab text="Support" to="/support" icon={HiOutlineInformationCircle} />
          <Tab
            text="History Logs"
            to="/historylogs"
            icon={HiOutlineQuestionMarkCircle}
          />
          <Tab text="Help" to="/help" icon={HiOutlineQuestionMarkCircle} />
        </ul>
      </nav>

      {/* Bottom outlet info (slide/fade) */}
      <div className={bottomInfoClasses}>
>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
        <div className="font-semibold">{outletInfo.name || "Loading..."}</div>
        <div>{"res_id278364726"}</div>
        <div>{"12 street, New way"}</div>
      </div>
    </div>
  );
}
