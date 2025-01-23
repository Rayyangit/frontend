import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import TopNav from "./TopNav";

export default function Sidebar({ setCurrentPage }) {
  const [expanded, setExpanded] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const { outletInfo } = useContext(OutletContext);
  const navigate = useNavigate();

  const sidebarClasses = `
    ${expanded ? "w-64" : "w-20"}
    flex flex-col
    border-r border-gray-800
    bg-gray-900
    text-white
    transition-all duration-300 ease-in-out overflow-hidden
  `;

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
          `block rounded-md ${isActive ? "bg-gray-700 font-semibold" : "font-medium"} hover:bg-gray-700 text-gray-200 transition-colors duration-200`
        }
        onClick={() => setCurrentPage(label)}
      >
        <div className="flex items-center gap-2 px-3 py-2">
          <Icon size={20} className="flex-shrink-0" />
          <span className={`${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"} transition-all duration-300 ease-in-out overflow-hidden`}>
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

  return (
    <div className={sidebarClasses}>
      <div className="w-full py-4 px-4 bg-red-600 flex flex-col items-start">
        <div className="flex items-center justify-between w-full">
          <div className="font-bold text-2xl">{expanded ? "zomato" : "z"}</div>
          <button onClick={() => setExpanded(!expanded)} className="text-white focus:outline-none ml-2">
            {expanded ? "<" : ">"}
          </button>
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

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          <li>{navItem("/", HiOutlineHome, "Dashboard")}</li>
          <li>{navItem("/analytics", HiOutlineChartBar, "Analytics")}</li>
          <li>
            <div
              className="block rounded-md text-gray-200 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              onClick={handleUserManagementClick}
            >
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <HiOutlineUserGroup size={20} className="flex-shrink-0" />
                  <span className={`${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"} transition-all duration-300 ease-in-out`}>
                    User Management
                  </span>
                </div>
                <span className={`transition-transform duration-300 ${userDropdownOpen ? "rotate-90" : ""}`}>{expanded ? ">" : ""}</span>
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
        <div className="font-semibold">{outletInfo.name || "Loading..."}</div>
        <div>{outletInfo.resId ? `RES ID : ${outletInfo.resId}` : ""}</div>
        <div>{outletInfo.address}</div>
      </div>
    </div>
  );
}
