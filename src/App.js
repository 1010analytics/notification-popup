// import React, { useState } from "react";
// import NotificationContainer from "./component/NotificationContainer";
// import AddNotificationButton from "./component/AddNotificationButton";

// const App = () => {
//   const [notifications, setNotifications] = useState([]);

//   const addNotification = () => {
//     const newNotification = {
//       id: Date.now(),
//       title: "New Notification",
//       message: "This is a customizable notification.",
//       type: "success", // or 'error', 'info'
//       duration: 5000,
//     };
//     setNotifications((prev) => [...prev, newNotification]);
//   };

//   const removeNotification = (id) => {
//     setNotifications((prev) => prev.filter((notification) => notification.id !== id));
//   };

//   return (
//     <div>
//       <h1>Animated Notification Pop-ups</h1>
//       <AddNotificationButton onAdd={addNotification} />
//       <NotificationContainer
//         notifications={notifications}
//         onRemove={removeNotification}
//       />
//     </div>
//   );
// };

// export default App;

import React from "react";
import NotificationContainer from "./component/NotificationContainer";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Notification System</h1>
      <p>Click the buttons below to trigger notifications:</p>
      <NotificationContainer />
    </div>
  );
}

export default App;
