import Typography from "@/shared/components/atoms/Typography";
import Header from "@/shared/components/molecules/Header";

import { News } from "@/features/news";
import { StockChartBoard } from "@/features/stockChartBoard";

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
          <IndexSummary />
          <News />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

function IndexSummary() {
  return (
    <div className="w-[245px] h-[250px]">
      <Typography.Head2 className="w-full text-right  mb-3">
        지수 · 환율
      </Typography.Head2>
      <IndexRow />
      <IndexRow />
      <IndexRow />
    </div>
  );
}

function IndexRow() {
  return (
    <div className="w-full">
      <Typography.SubTitle1 className="text-right">코스피</Typography.SubTitle1>

      <Typography.SubTitle1 className="text-right text-otl-stock-up">
        2,765.14 +66.17 (2.5%)
      </Typography.SubTitle1>
    </div>
  );
}
