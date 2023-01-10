import React from "react";
import { createRoot } from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store } from "./store";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Root from "./routes/root";
import Error from "./components/Error";
import Home from "./routes/home";
import Ducks from "./routes/ducks";
import Images from "./routes/images";
import Register from "./routes/register";
import Edit from "./routes/edit";

// CSS
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([ // React router routes for navigation through web page
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true, // Default view, it means "/" route
        element: <Home />,
      },
      {
        path: "/images",
        element: <Images />,
      },
      {
        path: "/ducks",
        element: <Ducks />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/edit/:duckId",
        element: <Edit />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
