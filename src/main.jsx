import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router/Router";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
