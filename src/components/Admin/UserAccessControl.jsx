import React, { useState } from "react";

const users = [
  {
    id: 1,
    name: "Michael Scott",
    email: "michael.scott@example.com",
    role: "Restaurant Owner",
    lastLogin: "2025-01-12",
    status: "Active",
  },
  {
    id: 2,
    name: "Pam Beesly",
    email: "pam.beesly@example.com",
    role: "Customer",
    lastLogin: "2025-01-10",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Jim Halpert",
    email: "jim.halpert@example.com",
    role: "Event Creator",
    lastLogin: "2025-01-08",
    status: "Active",
  },
  {
    id: 4,
    name: "Angela Martin",
    email: "angela.martin@example.com",
    role: "Moderator",
    lastLogin: "2025-01-11",
    status: "Pending",
  },
  {
    id: 5,
    name: "Dwight Schrute",
    email: "dwight.schrute@example.com",
    role: "Customer",
    lastLogin: "2025-01-09",
    status: "Banned",
  },
];

const UserAccessControl = () => {
  const [filter, setFilter] = useState("All"); // Filter state: "All" by default

  // Filter users based on selected role
  const filteredUsers =
    filter === "All" ? users : users.filter((user) => user.role === filter);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Filter Badges */}
      <div className="flex flex-wrap mb-4 space-x-2">
        {[
          "All",
          "Restaurant Owner",
          "Customer",
          "Event Creator",
          "Moderator",
        ].map((role) => (
          <button
            key={role}
            onClick={() => setFilter(role)}
            className={`px-4 py-2 text-sm rounded-full ${
              filter === role
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">
                <input type="checkbox" />
              </th>
              <th className="p-4 text-gray-600">User ID</th>
              <th className="p-4 text-gray-600">Name</th>
              <th className="p-4 text-gray-600">Email</th>
              <th className="p-4 text-gray-600">Role</th>
              <th className="p-4 text-gray-600">Last Login</th>
              <th className="p-4 text-gray-600">Status</th>
              <th className="p-4 text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-100 border-b last:border-none"
              >
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="p-4">{user.id}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      user.role === "Restaurant Owner"
                        ? "bg-blue-100 text-blue-800"
                        : user.role === "Customer"
                        ? "bg-green-100 text-green-800"
                        : user.role === "Event Creator"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="p-4">{user.lastLogin}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : user.status === "Inactive"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                      Edit
                    </button>
                    <button className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                      Delete
                    </button>
                    <button className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAccessControl;
