import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import AppliedJob from "./components/AppliedJob/AppliedJob.jsx";
import Blog from "./components/Blog/Blog.jsx";
import SingleJob from "./components/SingleJob/SingleJob.jsx";

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJob />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/jobs/:id",
        element: <SingleJob />,
        loader: () => fetch("/data/jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
