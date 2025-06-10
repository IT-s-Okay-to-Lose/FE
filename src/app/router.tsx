import Dashboard from "@/pages/dashboard/Dashboard";
import Home from "@/pages/home/Home";
import Overview from "@/pages/overview/Overview";
import Test from "@/pages/test/Test";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
