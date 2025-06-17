import MyOrder from "@/features/myOrder/ui/MyOrder";
import OrderHistory from "@/features/orderHistory/ui/OrderHistory";
import StockChart from "@/features/stockChartBoard/ui/StockChart";
import StockDetail from "@/features/stockDetail/ui/StockDetail";
import BuyStock from "@/features/stockOrder/ui/BuyStock";
import SellStock from "@/features/stockOrder/ui/SellStock";
import Footer from "@/shared/components/molecules/Footer";
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
          <div className="flex flex-col gap-2">
            <OrderHistory />
            <MyOrder />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StockDetailPage;
