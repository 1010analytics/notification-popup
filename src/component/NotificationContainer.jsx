import React, { useState } from "react";
import Notification from "./Notification";
import AddNotificationButton from "./AddNotificationButton";
import "./../styles/notification.css";

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message) => {
    const id = Date.now();
    setNotifications([...notifications, { id, type, message }]);

    // Automatically remove notification after 4 seconds
    if (type !== "generic") {
      setTimeout(() => {
        setNotifications((prev) => prev.filter((notif) => notif.id !== id));
      }, 4000);
    }
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div>
      <div className="notification-container">
        {notifications.map((notif) => (
          <Notification
            key={notif.id}
            id={notif.id}
            type={notif.type}
            message={notif.message}
            onClose={removeNotification}
          />
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {/* Success Notification Button */}
        <AddNotificationButton
          onClick={() => addNotification("success", "This is a success message!")}
          buttonText="Success Notification"
          style={{ backgroundColor: "#4caf50" }}
        />

        {/* Error Notification Button */}
        <AddNotificationButton
          onClick={() => addNotification("error", "This is an error message!")}
          buttonText="Error Notification"
          style={{ backgroundColor: "#f44336" }}
        />

        {/* Generic Notification Button */}
        <AddNotificationButton
          onClick={() =>
            addNotification("generic", "This is a generic notification with close!")
          }
          buttonText="Add Generic Notification"
          style={{ backgroundColor: "#007bff" }}
        />
      </div>
    </div>
  );
};

export default NotificationContainer;
