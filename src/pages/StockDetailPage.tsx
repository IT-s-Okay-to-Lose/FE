import BuyStock from "@/features/myOrder/ui/BuyStock";
import SellStock from "@/features/myOrder/ui/SellStock";
import StockChart from "@/features/stockChartBoard/ui/StockChart";
import StockDetail from "@/features/stockDetail/ui/StockDetail";
import Header from "@/shared/components/molecules/Header";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

function StockDetailPage() {
  const isTabletOrAbove = useMediaQuery();

  if (!isTabletOrAbove) return <ScreenTooSmall />;

  return (
    <div className="w-full">
      <div className="mb-8">
        <Header />
      </div>
      <div className="w-full m-auto flex flex-col items-center justify-center  mt-10 gap-[30px]">
        <div className="w-full max-w-[1100px] flex flex-col gap-4">
          <StockDetail />
          <StockChart />
        </div>
        <div className="w-full max-w-[1100px] flex justify-between">
          <BuyStock />
          <SellStock />
          <BuyStock />
        </div>
      </div>
    </div>
  );
}

export default StockDetailPage;
