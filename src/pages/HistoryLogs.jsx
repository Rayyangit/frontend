import React, { useState } from "react";

const HistoryLogs = () => {
  const [logs, setLogs] = useState([
    {
      id: 1,
      time: "10 mins ago",
      message: "Gourmet Paradise added a new dish 'Truffle Pasta' to the menu.",
      type: "menu-update",
      details: "The dish is priced at $15 and includes black truffle shavings.",
    },
    {
      id: 2,
      time: "30 mins ago",
      message: "La Fiesta updated restaurant timings to 10:00 AM - 11:00 PM.",
      type: "restaurant-update",
      details: "La Fiesta extended evening hours by 1 hour to accommodate late diners.",
    },
    {
      id: 3,
      time: "1 hour ago",
      message: "Cafe Delight received a 5-star review for 'Hazelnut Cappuccino'.",
      type: "review",
      details: "The review mentioned exceptional taste and excellent customer service.",
    },
    {
      id: 4,
      time: "2 hours ago",
      message: "Bistro Heaven added a promotional offer: '20% off on all desserts'.",
      type: "promotion",
      details: "The offer is valid from Jan 4th to Jan 10th and applies to dine-in orders.",
    },
    {
      id: 5,
      time: "3 hours ago",
      message: "Pasta House updated pricing for 'Spaghetti Bolognese'.",
      type: "menu-update",
      details: "The new price is $12, reduced from $14.",
    },
  ]);

  const [restaurantChanges, setRestaurantChanges] = useState([
    {
      changeId: 1,
      description: "Updated seating capacity to accommodate 50 more guests.",
      restaurant: "Bistro Bliss",
      timestamp: "01/04/2025, 12:45 PM",
      status: "Approved",
    },
    {
      changeId: 2,
      description: "Revised kitchen guidelines to improve order preparation time.",
      restaurant: "Urban Eatery",
      timestamp: "01/03/2025, 5:30 PM",
      status: "Pending",
    },
    {
      changeId: 3,
      description: "Added a new category 'Vegan Specials' to the menu.",
      restaurant: "Green Gourmet",
      timestamp: "01/03/2025, 10:00 AM",
      status: "Completed",
    },
    {
      changeId: 4,
      description: "Requested permission to add outdoor seating arrangements.",
      restaurant: "Terrace Treats",
      timestamp: "12/31/2024, 3:15 PM",
      status: "Rejected",
    },
  ]);

  const [expandedLog, setExpandedLog] = useState(null);

  const toggleDetails = (id) => {
    setExpandedLog(expandedLog === id ? null : id);
  };

  return (
    <div className="main-content">
     

      <div className="content">
        <div className="overview">
          <h2>Recent Activity</h2>
          <div className="logs">
            {logs.map((log) => (
              <div key={log.id} className={`log-item ${log.type}`}>
                <div onClick={() => toggleDetails(log.id)}>
                  <span className="time">{log.time}</span>
                  <p>{log.message}</p>
                </div>
                {expandedLog === log.id && (
                  <div className="log-details">
                    <p>{log.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="restaurant-changes">
          <h2>Restaurant Changes</h2>
          <div className="changes">
            {restaurantChanges.map((change) => (
              <div key={change.changeId} className="change-item">
                <p>
                  <strong>Change:</strong> {change.description}
                </p>
                <p>
                  <strong>Restaurant:</strong> {change.restaurant}
                </p>
                <p>
                  <strong>Timestamp:</strong> {change.timestamp}
                </p>
                <p>
                  <strong>Status:</strong> {change.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryLogs;
