import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EYFS from "./Pages/EYFS.jsx";
import Grade from "./Pages/Grade.jsx";
import HighSchool from "./Pages/HighSchool.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/eyfs",
        element: <EYFS />,
      },
      {
        path: "/primary",
        element: <Grade />,
      },
      {
        path: "/highschool",
        element: <HighSchool />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
