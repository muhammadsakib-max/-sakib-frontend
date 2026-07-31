import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import router from "./Router.jsx";
import React from "react";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);