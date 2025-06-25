import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import OverviewPage from "@/pages/OverviewPage";
import StockDetailPage from "@/pages/StockDetailPage";
import TestPage from "@/pages/TestPage";
import URL from "@/shared/constants/URL";
import ProtectedRoute from "@/shared/utils/ProtectedRoute";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: URL.PAGE.HOME,
    element: <HomePage />,
  },
  {
    path: URL.PAGE.DASHBOARD,
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: URL.PAGE.OVERVIEW,
    element: (
      <ProtectedRoute>
        <OverviewPage />
      </ProtectedRoute>
    ),
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
