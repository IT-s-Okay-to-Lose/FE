import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import OverviewPage from "@/pages/OverviewPage";
import StockDetailPage from "@/pages/StockDetailPage";
import TestPage from "@/pages/TestPage";
import URL from "@/shared/constants/URL";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: URL.PAGE.HOME,
    element: <HomePage />,
  },
  {
    path: URL.PAGE.DASHBOARD,
    element: <DashboardPage />,
  },
  {
    path: URL.PAGE.OVERVIEW,
    element: <OverviewPage />,
  },
  {
    path: URL.PAGE.DETAIL,
    element: <StockDetailPage />,
  },
  {
    path: URL.PAGE.TEST,
    element: <TestPage />,
  },
]);

export default router;
