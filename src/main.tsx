import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./router/index.tsx";
import Notification from "./components/Notification.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Notification />
    <Router />
  </React.StrictMode>
);
