import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "react-bootstrap/Button";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
