import React, { useState } from "react";
import { FaCheck, FaTimes, FaEdit } from "react-icons/fa";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    restaurants: [
      { name: "Bites & Brilliance", hasChanges: true, id: 1 },
      { name: "Culinary Canopy", hasChanges: true, id: 2 },
      { name: "Taste & Tell Bistro", hasChanges: true, id: 3 },
    ],
    menuSections: [
      { name: "Drinks", hasChanges: true, restaurantId: 1 },
      { name: "Appetizers", hasChanges: true, restaurantId: 2 },
      { name: "Main Course", hasChanges: true, restaurantId: 3 },
    ],
    comments: [
      { text: "Customer not happy about service.", resolved: false, restaurantId: 1 },
      { text: "Suggestion to add more vegan options.", resolved: false, restaurantId: 2 },
    ],
    flags: [
      { text: "Complaint: Delayed order delivery.", resolved: false, restaurantId: 1 },
      { text: "Complaint: Incorrect order received.", resolved: true, restaurantId: 2 },
    ],
  });

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleAction = (section, index, action) => {
    const sectionName =
      section === "restaurant"
        ? "Restaurant"
        : section === "menu"
        ? "Menu"
        : section === "comment"
        ? "Comment"
        : "Flag";
    alert(`${action} action triggered for ${sectionName} at index ${index}`);
  };

  const handleRestaurantClick = (index) => {
    setSelectedRestaurant(index);
    setSelectedMenu(null);
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleEditAction = (section, index) => {
    alert(`Edit action triggered for ${section} at index ${index}`);
  };

  const getRelatedCommentsAndFlags = (restaurantId) => {
    return {
      comments: notifications.comments.filter(
        (comment) => comment.restaurantId === restaurantId
      ),
      flags: notifications.flags.filter(
        (flag) => flag.restaurantId === restaurantId
      ),
    };
  };

  const { comments, flags } =
    selectedRestaurant !== null
      ? getRelatedCommentsAndFlags(
          notifications.restaurants[selectedRestaurant].id
        )
      : { comments: [], flags: [] };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
      {/* Restaurants */}
      <div className="bg-white p-3 rounded shadow-md h-auto sm:h-[400px] overflow-y-auto">
        <h2 className="font-semibold text-sm sm:text-base mb-2">Restaurants</h2>
        <ul className="space-y-2">
          {notifications.restaurants.map((restaurant, index) => (
            <li
              key={index}
              className={`p-2 rounded text-sm sm:text-base ${
                selectedRestaurant === index ? "bg-blue-100" : "bg-gray-50"
              } cursor-pointer`}
              onClick={() => handleRestaurantClick(index)}
            >
              {restaurant.name}{" "}
              {restaurant.hasChanges && (
                <span className="text-red-500 font-bold">●</span>
              )}
              {selectedRestaurant === index && (
                <div className="mt-2 flex gap-2">
                  <FaCheck
                    className="text-green-500 text-sm sm:text-lg cursor-pointer"
                    onClick={() => handleAction("restaurant", index, "accept")}
                  />
                  <FaTimes
                    className="text-red-500 text-sm sm:text-lg cursor-pointer"
                    onClick={() => handleAction("restaurant", index, "reject")}
                  />
                  <FaEdit
                    className="text-blue-500 text-sm sm:text-lg cursor-pointer"
                    onClick={() => handleEditAction("restaurant", index)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Menu */}
      <div className="bg-white p-3 rounded shadow-md h-auto sm:h-[400px] overflow-y-auto">
        <h2 className="font-semibold text-sm sm:text-base mb-2">Menu</h2>
        <ul className="space-y-2">
          {notifications.menuSections
            .filter(
              (menu) =>
                selectedRestaurant === null ||
                menu.restaurantId ===
                  notifications.restaurants[selectedRestaurant].id
            )
            .map((menu, index) => (
              <li
                key={index}
                className={`p-2 rounded text-sm sm:text-base ${
                  selectedMenu === index ? "bg-blue-100" : "bg-gray-50"
                } cursor-pointer`}
                onClick={() => handleMenuClick(index)}
              >
                {menu.name}{" "}
                {menu.hasChanges && (
                  <span className="text-red-500 font-bold">●</span>
                )}
                {selectedMenu === index && (
                  <div className="mt-2 flex gap-2">
                    <FaCheck
                      className="text-green-500 text-sm sm:text-lg cursor-pointer"
                      onClick={() => handleAction("menu", index, "accept")}
                    />
                    <FaTimes
                      className="text-red-500 text-sm sm:text-lg cursor-pointer"
                      onClick={() => handleAction("menu", index, "reject")}
                    />
                    <FaEdit
                      className="text-blue-500 text-sm sm:text-lg cursor-pointer"
                      onClick={() => handleEditAction("menu", index)}
                    />
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>

      {/* Comments */}
      <div className="bg-white p-3 rounded shadow-md h-auto sm:h-[400px] overflow-y-auto">
        <h2 className="font-semibold text-sm sm:text-base mb-2">Comments</h2>
        <ul className="space-y-2">
          {comments.map((comment, index) => (
            <li key={index} className="p-2 rounded bg-gray-50 text-sm sm:text-base">
              {comment.text}{" "}
              {!comment.resolved && (
                <FaCheck
                  className="text-yellow-500 text-sm sm:text-lg cursor-pointer"
                  onClick={() => handleAction("comment", index, "resolve")}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Flags */}
      <div className="bg-white p-3 rounded shadow-md h-auto sm:h-[400px] overflow-y-auto">
        <h2 className="font-semibold text-sm sm:text-base mb-2">Flags</h2>
        <ul className="space-y-2">
          {flags.map((flag, index) => (
            <li key={index} className="p-2 rounded bg-gray-50 text-sm sm:text-base">
              {flag.text}{" "}
              {!flag.resolved && (
                <FaCheck
                  className="text-yellow-500 text-sm sm:text-lg cursor-pointer"
                  onClick={() => handleAction("flag", index, "resolve")}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
