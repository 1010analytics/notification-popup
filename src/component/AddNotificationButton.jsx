// import React from "react";

// const AddNotificationButton = ({ onAdd }) => {
//   return (
//     <button onClick={onAdd} className="add-notification-btn">
//       Add Notification
//     </button>
//   );
// };

// export default AddNotificationButton;

import React from "react";

const AddNotificationButton = ({ onClick, buttonText, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 15px",
        backgroundColor: style?.backgroundColor || "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        ...style,
      }}
    >
      {buttonText || "Add Notification"}
    </button>
  );
};

export default AddNotificationButton;

