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
