import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// 👇 IMPORTANTE: importar o CSS global gerado pelo Lovable/Tailwind
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
