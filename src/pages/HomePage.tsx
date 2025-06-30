import Header from "@/shared/components/molecules/Header";

import { News } from "@/features/news/ui/News";
import { StockChartBoard } from "@/features/stockChartBoard/ui/StockChartBoard";

import { MarketIndexSummary } from "@/features/marketIndexSummary/ui/MarketIndexSummary";
import Footer from "@/shared/components/molecules/Footer";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { useEffect } from "react";
import { login, test } from "@/features/login/service/login.service";

function HomePage() {
  const isTabletOrAbove = useMediaQuery();

  useEffect(() => {
    login();
    test();
  }, []);

  if (!isTabletOrAbove) return <ScreenTooSmall />;

  return (
    <div className="w-full">
      <div className="mb-[90px]">
        <Header />
      </div>
      <div className="w-full m-auto flex justify-center mt-10 gap-[60px]">
        <StockChartBoard />
        <div className="hidden laptop:flex laptop:flex-col laptop:gap-[50px]">
          <MarketIndexSummary />
          <News />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
