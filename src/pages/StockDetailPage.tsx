import type { CandleData, VolumeData } from "@/entities/stock/stock.entity";
import {
  openChartSocket,
  openVolumeSocket,
} from "@/features/stock/stockChartBoard/services/liveStockChart.service";

import StockChart from "@/features/stock/stockChartBoard/ui/StockChart";
import StockDetail from "@/features/stock/stockDetail/ui/StockDetail";
import BuyStock from "@/features/stock/stockOrder/ui/BuyStock";
import SellStock from "@/features/stock/stockOrder/ui/SellStock";
import MyOrder from "@/features/user/myOrder/ui/MyOrder";
import OrderHistory from "@/features/user/orderHistory/ui/OrderHistory";
import Footer from "@/shared/components/molecules/Footer";
import Header from "@/shared/components/molecules/Header";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

// export const option = ["일", "주", "월", "년"];

function StockDetailPage() {
  const isTabletOrAbove = useMediaQuery();

  const [searchParams] = useSearchParams();
  const selectedCode = searchParams.get("stock_id");

  // const [filterTab, setFilterTab] = useState(option[0]);

  const [candleData, setCandleData] = useState<CandleData[]>([]);
  const [volumeData, setVolumeData] = useState<VolumeData[]>([]);

  // const [prevCandleData, setPrevCandleData] = useState([]);
  // const [prevVolumeData, setPrevVolumeData] = useState([]);

  const candleWsRef = useRef<WebSocket | null>(null);
  const volumeWsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    openChartSocket(candleWsRef, selectedCode, setCandleData);
    openVolumeSocket(volumeWsRef, selectedCode, setVolumeData);
  }, []);

  if (!isTabletOrAbove) return <ScreenTooSmall />;

  return (
    <div className="w-full">
      <div className="mb-8">
        <Header />
      </div>
      <div className="w-full m-auto flex flex-col items-center justify-center  mt-10 gap-[30px]">
        <div className="w-full max-w-[1100px] flex flex-col gap-4">
          <StockDetail candleData={candleData} />
          <StockChart
            // filterTab={filterTab}
            // setFilterTab={setFilterTab}
            candleData={candleData}
            volumeData={volumeData}
          />
        </div>
        <div className="w-full max-w-[1100px] flex justify-between">
          <BuyStock stockCode={selectedCode!} />
          <SellStock stockCode={selectedCode!} />
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
