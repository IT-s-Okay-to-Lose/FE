import type {
  CandleData,
  MarketStockMeta,
  MarketStockPriceInfo,
  VolumeData,
} from "@/entities/stock/stock.entity";
import {
  getPrevCandleData,
  getPrevVolumeData,
  openChartSocket,
  openVolumeSocket,
} from "@/features/stock/stockChartBoard/services/liveStockChart.service";

import StockChart from "@/features/stock/stockChartBoard/ui/StockChart";
import { getStockMeta } from "@/features/stock/stockDetail/services/stockDetail.service";
import StockDetail from "@/features/stock/stockDetail/ui/StockDetail";
import BuyStock from "@/features/stock/stockOrder/ui/BuyStock";
import SellStock from "@/features/stock/stockOrder/ui/SellStock";
import OrderHistory from "@/features/user/orderHistory/ui/OrderHistory";
import StockHoldings from "@/features/user/stockHolding/ui/StockHolding";
import Footer from "@/shared/components/molecules/Footer";
import Header from "@/shared/components/molecules/Header";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

function StockDetailPage() {
  const isTabletOrAbove = useMediaQuery();

  const [searchParams] = useSearchParams();
  const selectedCode = searchParams.get("stock_id");

  const [stockMeta, setStockMeta] = useState<MarketStockMeta>({
    name: "",
    imageUrl: "",
    stock_code: "",
    marketType: "",
  });
  const [marketPriceInfo, setMarketPriceInfo] = useState<MarketStockPriceInfo>({
    currentPrice: 0,
    priceChange: 0,
    fluctuationRate: 0,
  });

  const [candleData, setCandleData] = useState<CandleData[]>([]);
  const [volumeData, setVolumeData] = useState<VolumeData[]>([]);

  const candleWsRef = useRef<WebSocket | null>(null);
  const volumeWsRef = useRef<WebSocket | null>(null);

  async function getPrevCandle() {
    const result = await getPrevCandleData(selectedCode!);
    setCandleData(result);
  }

  async function getPrevVolume() {
    const result = await getPrevVolumeData(selectedCode!);
    setVolumeData(result);
  }

  async function getStockInfo() {
    const result = await getStockMeta(selectedCode!);
    setStockMeta(result);
  }

  useEffect(() => {
    getStockInfo();
    getPrevCandle();
    getPrevVolume();
    openChartSocket(
      candleWsRef,
      selectedCode,
      setCandleData,
      setMarketPriceInfo
    );
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
          <StockDetail
            stockMeta={stockMeta}
            candleData={candleData}
            marketPriceInfo={marketPriceInfo}
          />
          <StockChart candleData={candleData} volumeData={volumeData} />
        </div>
        <div className="w-full max-w-[1100px] flex justify-between">
          <BuyStock
            stockCode={selectedCode!}
            currentPrice={
              candleData.length > 0 ? candleData[candleData.length - 1][4] : 0
            }
          />
          <SellStock
            stockCode={selectedCode!}
            currentPrice={
              candleData.length > 0 ? candleData[candleData.length - 1][4] : 0
            }
          />
          <div className="flex flex-col gap-2">
            <OrderHistory />
            <StockHoldings />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StockDetailPage;
