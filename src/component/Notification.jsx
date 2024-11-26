import React, { useEffect } from "react";
import "../styles/notification.css";

const Notification = ({ id, title, message, type, duration, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onRemove]);

  return (
    <div className={`notification ${type}`}>
      <div className="content">
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
      <button className="close-btn" onClick={() => onRemove(id)}>×</button>
    </div>
  );
};

export default Notification;
