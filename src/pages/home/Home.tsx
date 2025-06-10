import Typography from "@/shared/components/atoms/Typography";
import Header from "@/shared/components/molecules/Header";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import IndexSummary from "./ui/IndexSummary";
import News from "./ui/News";
import StockChartBoard from "./ui/StockChartBoard";

function Home() {
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

export default Home;
