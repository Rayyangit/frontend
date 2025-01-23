import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [notifications, setNotifications] = useState({
    restaurants: [
      {
        name: "Bites & Brilliance",
        hasChanges: true,
        id: 1,
        region: "East",
        description: "Updated menu and extended opening hours.",
        type: "Fine Dining",
        date: "2024-01-01",
      },
      {
        name: "Culinary Canopy",
        hasChanges: true,
        id: 2,
        region: "South",
        description: "Introduced new family combo meals.",
        type: "Casual Dining",
        date: "2024-01-05",
      },
      {
        name: "Taste & Tell Bistro",
        hasChanges: true,
        id: 3,
        region: "East",
        description: "Added a weekend brunch menu.",
        type: "Bistro",
        date: "2024-01-08",
      },
    ],
    menuSections: [
      {
        name: "Drinks",
        hasChanges: true,
        restaurantId: 1,
        changes: "Added seasonal cocktails and mocktails.",
        restaurantname: "Chill Bites",
        date: "2024-01-01",
      },
      {
        name: "Appetizers",
        hasChanges: true,
        restaurantId: 2,
        changes: "Included new starters like cheese balls and dips.",
        restaurantname: "Chill Bites",
        date: "2024-01-05",
      },
    ],
    flags: [
      { text: "Complaint: Delayed order delivery.", resolved: false, restaurantId: 1, date: "2024-01-02" },
      { text: "Complaint: Incorrect order received.", resolved: true, restaurantId: 2, date: "2024-01-03" },
      { text: "Customer not happy about service.", resolved: false, restaurantId: 1, date: "2024-01-01" },
    ],
    comments: [
      { text: "Great service!", resolved: true, restaurantId: 1, date: "2024-01-04" },
      { text: "Need more vegetarian options.", resolved: false, restaurantId: 2, date: "2024-01-06" },
    ],
  });

  // Mark an item as read
  const handleItemClick = (item, type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: prev[type].filter((i) => i !== item),
    }));
  };

  return (
    <div className="p-0 m-0 pt-0 mt-0 min-h-screen">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {/* Restaurants Section */}
        <div className="bg-white p-2 rounded shadow-md h-[250px] relative">
          <h2 className="font-bold text-base mb-1">Restaurants</h2>
          <ul className="space-y-1">
            {notifications.restaurants.map((restaurant, index) => (
              <li
                key={index}
                className="p-1 rounded bg-gray-100 relative cursor-pointer flex items-center justify-between"
                onMouseEnter={() => setHoveredItem(restaurant)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(restaurant, "restaurants")}
              >
                <div className="flex items-center">
                  {restaurant.hasChanges && <span className="text-red-500 font-bold mr-2">●</span>}
                  <span>{restaurant.name}</span>
                </div>
                <img src="/info.png" alt="Info Icon" className="w-4 h-4" />
                {hoveredItem === restaurant && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white border rounded shadow-lg p-2 z-10">
                    <p><strong>Changes:</strong> {restaurant.description}</p>
                    <p><strong>Region:</strong> {restaurant.region}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Sections */}
        <div className="bg-white p-2 rounded shadow-md h-[250px] relative">
          <h2 className="font-bold text-base mb-1">Menu Sections</h2>
          <ul className="space-y-1">
            {notifications.menuSections.map((section, index) => (
              <li
                key={index}
                className="p-1 rounded bg-gray-100 relative cursor-pointer flex items-center justify-between"
                onMouseEnter={() => setHoveredItem(section)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(section, "menuSections")}
              >
                <div className="flex items-center">
                  {section.hasChanges && <span className="text-red-500 font-bold mr-2">●</span>}
                  <span>{section.name}</span>
                </div>
                <img src="/info.png" alt="Info Icon" className="w-4 h-4" />
                {hoveredItem === section && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white border rounded shadow-lg p-2 z-10">
                    <p><strong>Changes:</strong> {section.changes}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Flags */}
        <div className="bg-white p-2 rounded shadow-md h-[250px] relative">
          <h2 className="font-bold text-base mb-1">Flags</h2>
          <ul className="space-y-1">
            {notifications.flags.map((flag, index) => (
              <li
                key={index}
                className="p-1 rounded bg-gray-100 relative cursor-pointer"
                onClick={() => handleItemClick(flag, "flags")}
              >
                {flag.text} {flag.resolved && <span className="text-green-500 font-bold">✔</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Comments */}
        <div className="bg-white p-2 rounded shadow-md h-[250px] relative">
          <h2 className="font-bold text-base mb-1">Comments</h2>
          <ul className="space-y-1">
            {notifications.comments.map((comment, index) => (
              <li
                key={index}
                className="p-1 rounded bg-gray-100 relative cursor-pointer"
                onClick={() => handleItemClick(comment, "comments")}
              >
                {comment.text} {comment.resolved && <span className="text-green-500 font-bold">✔</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
