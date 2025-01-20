// ------------------------
// src/layouts/DashboardLayout.jsx
// ------------------------
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50 ps-12">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNav />
        <main className="flex-1  ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
