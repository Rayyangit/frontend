import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import {
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineGift,
  HiOutlineCog,
  HiOutlineInformationCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineBell,
} from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { OutletContext } from "../context/OutletContext";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // State for user management dropdown
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false); // State for admin dashboard dropdown
  const { outletInfo } = useContext(OutletContext);
  const navigate = useNavigate(); // Initialize the navigate function

  const sidebarClasses = `
    ${expanded ? "w-64" : "w-20"}
    flex flex-col
    border-r border-gray-800
    bg-gray-900
    text-white
    transition-all duration-300 ease-in-out overflow-hidden
  `;

  const topBarClasses = `
    w-full py-4 px-4
    bg-red-600
    flex flex-col items-start
  `;

  const restaurantDashClasses = `
    transition-all duration-300 ease-in-out overflow-hidden
    ${expanded ? "max-h-10 mt-1 opacity-100" : "max-h-0 mt-0 opacity-0"}
  `;

  const bottomInfoClasses = `
    border-t border-gray-800 text-sm leading-tight
    transition-all duration-300 ease-in-out overflow-hidden
    ${expanded ? "max-h-32 p-4 opacity-100" : "max-h-0 p-0 opacity-0"}
  `;

  function navItem(to, Icon, label, external = false) {
    if (external) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md text-gray-200 hover:bg-gray-700 transition-colors duration-200"
        >
          <div className="flex items-center gap-2 px-3 py-2">
            <Icon size={20} className="flex-shrink-0" />
            <span
              className={`whitespace-nowrap
                transition-all duration-300 ease-in-out
                ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
                overflow-hidden`}
            >
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
          `block rounded-md
            ${isActive ? "bg-gray-700 font-semibold" : "font-medium"}
            hover:bg-gray-700
            text-gray-200
            transition-colors duration-200`
        }
      >
        <div className="flex items-center gap-2 px-3 py-2">
          <Icon size={20} className="flex-shrink-0" />
          <span
            className={`whitespace-nowrap
              transition-all duration-300 ease-in-out
              ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
              overflow-hidden`}
          >
            {label}
          </span>
        </div>
      </NavLink>
    );
  }

  const handleUserManagementClick = () => {
    setUserDropdownOpen(!userDropdownOpen); // Toggle dropdown
    navigate("/usermanagement"); // Navigate to /usermanagement page
  };

  const handleAdminDashboardClick = () => {
    setAdminDropdownOpen(!adminDropdownOpen); // Toggle dropdown for Admin Dashboard
  };

  return (
    <div className={sidebarClasses}>
      {/* Top bar */}
      <div className={topBarClasses}>
        <div className="flex items-center justify-between w-full">
          <div className="font-bold text-2xl">{expanded ? "zomato" : "z"}</div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-white focus:outline-none ml-2"
          >
            {expanded ? "<" : ">"}
          </button>
        </div>
        <div
          className="text-sm font-medium mt-1 flex items-center gap-2 px-3 py-2 cursor-pointer"
          onClick={handleAdminDashboardClick}
        >
          <div
            className={`whitespace-nowrap
              transition-all duration-300 ease-in-out
              ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
              overflow-hidden`}
          >
            Admin Dashboard
          </div>
          {/* Dropdown Icon */}
          <span
            className={`transition-transform duration-300 ${
              adminDropdownOpen ? "rotate-90" : ""
            }`}
          >
            {expanded ? ">" : ""}
          </span>
        </div>
        {adminDropdownOpen && (
          <ul className="ml-6 mt-1 space-y-1">
            <li>
              {navItem(
                "https://super-piroshki-0e56df.netlify.app/",
                HiOutlineUserGroup,
                "Marketing Dashboard",
                true // External link
              )}
            </li>
            <li>{navItem("https://stellar-lolly-15c5c4.netlify.app/", HiOutlineUserGroup, "Event Dashboard",true)}</li>
            <li>{navItem("https://deft-entremet-2b5784.netlify.app/", HiOutlineTruck, "Moderator Dashboard",true)}</li>
          </ul>
        )}
      </div>

      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          <li>{navItem("/", HiOutlineHome, "Dashboard")}</li>
          <li>{navItem("/analytics", HiOutlineChartBar, "Analytics")}</li>

          {/* User Management Dropdown */}
          <li>
            <div
              className="block rounded-md text-gray-200 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              onClick={handleUserManagementClick}
            >
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <HiOutlineUserGroup size={20} className="flex-shrink-0" />
                  <span
                    className={`whitespace-nowrap
                      transition-all duration-300 ease-in-out
                      ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
                      overflow-hidden`}
                  >
                    User Management
                  </span>
                </div>
                <span
                  className={`transition-transform duration-300 ${
                    userDropdownOpen ? "rotate-90" : ""
                  }`}
                >
                  {expanded ? ">" : ""}
                </span>
              </div>
            </div>
            {userDropdownOpen && (
              <ul className="ml-6 mt-1 space-y-1">
                <li>{navItem("/manage-admins", HiOutlineUserGroup, "Manage Admins")}</li>
                <li>{navItem("/manage-customers", HiOutlineUserGroup, "Manage Customers")}</li>
                <li>{navItem("/manage-drivers", HiOutlineTruck, "Manage Drivers")}</li>
              </ul>
            )}
          </li>

          <li>{navItem("/orders", HiOutlineTruck, "Order Management")}</li>
          <li>{navItem("/offers", HiOutlineGift, "Offers")}</li>
          <li>{navItem("/restaurants", MdOutlineRestaurantMenu, "Restaurants")}</li>
          <li>{navItem("/notifications", HiOutlineBell, "Notifications")}</li>
          <li>{navItem("/settings", HiOutlineCog, "Settings")}</li>
          <li>{navItem("/support", HiOutlineInformationCircle, "Support")}</li>
          <li>{navItem("/historylogs", HiOutlineQuestionMarkCircle, "History Logs")}</li>
          <li>{navItem("/help", HiOutlineQuestionMarkCircle, "Help")}</li>
        </ul>
      </nav>

      {/* Bottom outlet info */}
      <div className={bottomInfoClasses}>
        <div className="font-semibold">{outletInfo.name || "Loading..."}</div>
        <div>{outletInfo.resId ? `RES ID : ${outletInfo.resId}` : ""}</div>
        <div>{outletInfo.address}</div>
      </div>
    </div>
  );
}
