import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import OverviewPage from "@/pages/OverviewPage";
import StockDetailPage from "@/pages/StockDetailPage";
import TestPage from "@/pages/TestPage";
import URL from "@/shared/constants/URL";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: URL.HOME,
    element: <HomePage />,
  },
  {
    path: URL.DASHBOARD,
    element: <DashboardPage />,
  },
  {
    path: URL.OVERVIEW,
    element: <OverviewPage />,
  },
  {
    path: URL.DETAIL,
    element: <StockDetailPage />,
  },
  {
    path: URL.TEST,
    element: <TestPage />,
  },
]);

export default router;
