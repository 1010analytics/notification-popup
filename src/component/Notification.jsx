import React from "react";
import "./../styles/notification.css";

const Notification = ({ id, type, message, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      {message}
      {type === "generic" && (
        <button className="close-btn" onClick={() => onClose(id)}>
          ✖
        </button>
      )}
    </div>
  );
};

export default Notification;

