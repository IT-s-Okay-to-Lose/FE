import Typography from "@/shared/components/atoms/Typography";
import Header from "@/shared/components/molecules/Header";

import { News } from "@/features/news";
import { StockChartBoard } from "@/features/stockChartBoard";

import { MarketIndexSummary } from "@/features/marketIndexSummary";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

function HomePage() {
  const isTabletOrAbove = useMediaQuery("(min-width: 850px)");

  if (!isTabletOrAbove) {
    return (
      <div className="w-full flex justify-center items-center">
        <Typography.Head2>더 큰 화면에서 </Typography.Head2>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <Header />
      </div>
      <div className="w-full m-auto flex justify-center mt-10 gap-[60px]">
        <StockChartBoard />

        <div className="hidden laptop:flex laptop:flex-col laptop:gap-[50px]">
          <MarketIndexSummary />
          <News />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
