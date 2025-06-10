import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import OverviewPage from "@/pages/OverviewPage";
import StockDetailPage from "@/pages/StockDetailPage";
import TestPage from "@/pages/TestPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
  },
  {
    path: "/detail",
    element: <StockDetailPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
