import React from "react";
import Notification from "./Notification";
import "../styles/notification.css";

const NotificationContainer = ({ notifications, onRemove }) => {
  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default NotificationContainer;
