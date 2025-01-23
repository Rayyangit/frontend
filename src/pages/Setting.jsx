import React, { useState } from "react";

const Setting = () => {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState("public");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleNotificationToggle = () => {
    setNotifications((prev) => !prev);
  };

  const handleProfileVisibilityChange = (e) => {
    setProfileVisibility(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Theme
          </label>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Notifications
          </label>
          <button
            onClick={handleNotificationToggle}
            className={`w-full px-4 py-2 rounded-md ${
              notifications ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {notifications ? "Enabled" : "Disabled"}
          </button>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Profile Visibility
          </label>
          <select
            value={profileVisibility}
            onChange={handleProfileVisibilityChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Setting;
