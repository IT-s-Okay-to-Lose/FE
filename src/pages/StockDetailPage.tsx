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
      <div className="w-full m-auto flex justify-center mt-10 gap-[60px]]">
        <div className="w-full max-w-[1100px] flex flex-col gap-4">
          <StockDetail />
          <StockChart />
        </div>
      </div>
    </div>
  );
}

export default StockDetailPage;
