import React from "react";
import { createRoot } from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store } from "./app/store";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Root from "./routes/root";

// CSS
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
