// ------------------------
// src/App.jsx
// ------------------------
import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";

import Help from "./pages/Help";
import RestaurantList from "./pages/RestaurantList";
import Upload from "./pages/Upload";
import EventList from "./pages/EventList";
import ChatPanel from "./pages/ChatPanel";
import UserAccessControl from "./components/Admin/UserAccessControl";
import Notifications from "./pages/Notifications";

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/support" element={<ChatPanel />} />
        <Route path="/help" element={<Help />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/log" element={<Help />} />
        <Route path="/control" element={<UserAccessControl />} />
        {/* If you need more pages, add them here */}
      </Route>
    </Routes>
  );
}
