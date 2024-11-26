import React from "react";

const AddNotificationButton = ({ onAdd }) => {
  return (
    <button onClick={onAdd} className="add-notification-btn">
      Add Notification
    </button>
  );
};

export default AddNotificationButton;
