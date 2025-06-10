import DashboardPage from "@/pages/dashboard/DashboardPage";
import HomePage from "@/pages/home/HomePage";
import OverviewPage from "@/pages/overview/OverviewPage";
import StockDetailPage from "@/pages/stockDetail/StockDetailPage";
import Test from "@/pages/test/Test";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/DashboardPage",
    element: <DashboardPage />,
  },
  {
    path: "/overview",
    element: <OverviewPage />,
  },
  {
    path: "/detail/:stockId",
    element: <StockDetailPage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;
