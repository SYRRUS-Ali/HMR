import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Create and render the root element of the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
