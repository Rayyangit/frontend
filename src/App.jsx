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
import HistoryLogs from "./pages/HistoryLogs";
import Analytics from "./pages/Analytics";
import OrderManagement from "./pages/OrderManagement";
import UserManagement from "./pages/UserManagement";
import Support from "./pages/Support";
import ManageAdmin from "./pages/ManageAdmin";
import OrderDetails from "./cards/OrderDetails";
import OfferList from "./components/Admin/OfferList";
import Offers from "./pages/Offers";
import DineInMenu from "./pages/DineInMenu";
import Setting from "./pages/Setting";
import TaxesAndCharges from "./pages/TaxesAndCharges";
import CollectionManagement from "./pages/CollectionManagement";
import ClaimRestaurant from "./pages/ClaimRestaurant";

const dummyOrders = [
  {
    id: 1,
    date: "2025-01-01",
    image: "/pizza.png",
    item: "Pizza",
    quantity: 2,
    payment: "Credit Card",
    price: 29.99,
    status: "pending",
    restaurant: "Italian Bistro",
    time: "12:30 PM",
    category: "Main Course", // New field
    subcategory: "Pizza", // New field
  },
  {
    id: 2,
    date: "2025-01-02",
    image: "/burger.jpg",
    item: "Burger",
    quantity: 3,
    payment: "PayPal",
    price: 19.99,
    status: "archived",
    restaurant: "Burger Shack",
    time: "1:45 PM",
    category: "Main Course", // New field
    subcategory: "Burger", // New field
  },
  {
    id: 3,
    date: "2025-01-02",
    image: "/burger.jpg",
    item: "Burger",
    quantity: 3,
    payment: "PayPal",
    price: 19.99,
    status: "archived",
    restaurant: "Burger Shack",
    time: "2:00 PM",
    category: "Main Course", // New field
    subcategory: "Burger", // New field
  },
  {
    id: 4,
    date: "2025-01-03",
    image: "/pasta.avif",
    item: "Pasta",
    quantity: 1,
    payment: "Cash",
    price: 15.99,
    status: "pending",
    restaurant: "Pasta Palace",
    time: "5:30 PM",
    category: "Main Course", // New field
    subcategory: "Pasta", // New field
  },
  {
    id: 5,
    date: "2025-01-01",
    image: "/pizza.png",
    item: "Pizza",
    quantity: 2,
    payment: "Credit Card",
    price: 29.99,
    status: "pending",
    restaurant: "Italian Bistro",
    time: "12:30 PM",
    category: "Main Course", // New field
    subcategory: "Pizza", // New field
  },
  {
    id: 6,
    date: "2025-01-01",
    image: "/pizza.png",
    item: "Pizza",
    quantity: 2,
    payment: "Credit Card",
    price: 29.99,
    status: "pending",
    restaurant: "Italian Bistro",
    time: "12:30 PM",
    category: "Main Course", // New field
    subcategory: "Pizza", // New field
  },
  {
    id: 7,
    date: "2025-01-01",
    image: "/pizza.png",
    item: "Pizza",
    quantity: 2,
    payment: "Credit Card",
    price: 29.99,
    status: "pending",
    restaurant: "Italian Bistro",
    time: "12:30 PM",
    category: "Main Course", // New field
    subcategory: "Pizza", // New field
  },
  {
    id: 8,
    date: "2025-01-01",
    image: "/pizza.png",
    item: "Pizza",
    quantity: 2,
    payment: "Credit Card",
    price: 29.99,
    status: "pending",
    restaurant: "Italian Bistro",
    time: "12:30 PM",
    category: "Main Course", // New field
    subcategory: "Pizza", // New field
  },
];

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/taxes" element={<TaxesAndCharges />} />
        <Route path="/analytics" element={<Analytics />} />
<<<<<<< HEAD
        <Route path="/dine-in-menu" element={<DineInMenu />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/claim-restaurant" element={<ClaimRestaurant />} />
        <Route path="/collection-management" element={<CollectionManagement />} />

        
=======

>>>>>>> 9ec650421af5fc4c8cb8e80b4680fa1b0c3280e1
        {/* Orders route */}
        <Route
          path="/orders"
          element={<OrderManagement orders={dummyOrders} />}
        />

        {/* Dynamic route for OrderDetails with orderId */}

        <Route path="/historylogs" element={<HistoryLogs />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/manage-admins" element={<ManageAdmin />} />
        <Route path="cards/OrderDetails/:orderId" element={<OrderDetails />} />
        <Route path="/offers" element={<Offers />} />

        {/* <Route path="/settings" element={<Settings />} /> */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/support" element={<Support />} />
        <Route path="/help" element={<Help />} />
        <Route path="/log" element={<Help />} />
        <Route path="/control" element={<UserAccessControl />} />
        {/* Add more pages as needed */}
      </Route>
    </Routes>
  );
}
