import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

export default function DashboardLayout() {
  const location = useLocation(); // Get current route

  // // Conditionally render TopNav based on the current route
  // const showTopNav =
  //   location.pathname !== "/orders" &&
  //   location.pathname !== "/notifications" &&
  //   location.pathname !== "/support" &&
  //   location.pathname !== "/historylogs" &&
  //   location.pathname !== "/manage-admins"; // Exclude specific routes

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Conditionally render TopNav */}
         <TopNav />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Nested routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
