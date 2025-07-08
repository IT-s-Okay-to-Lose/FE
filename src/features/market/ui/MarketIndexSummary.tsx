import type {
  MarketIndex,
  ExchangeIndex,
} from "@/entities/market/market.entity";
// import { mockMarketIndexData } from "@/entities/market/market.mock";
import Typography from "@/shared/components/atoms/Typography";
import { useEffect, useState } from "react";
import { getMarketIndexWithCache } from "../services/marketIndex.service";

export function MarketIndexSummary() {
  const [marketIndices, setMarketIndices] = useState<MarketIndex[]>([]);
  const [exchange, setExchange] = useState<ExchangeIndex | null>(null);

  async function getMarketDataFunction() {
    const result = await getMarketIndexWithCache();
    setMarketIndices(result.marketIndex);
    setExchange(result.exchangeIndex);
  }

  useEffect(() => {
    getMarketDataFunction();
  }, []);

  return (
    <div className="w-[245px] h-[250px]">
      <Typography.Head2 className="w-full text-right mb-3">
        지수 · 환율
      </Typography.Head2>
      {marketIndices.map((data, index) => (
        <IndexRow data={data} key={index} />
      ))}
      {exchange && <ExchangeRow data={exchange} />}
    </div>
  );
}

function IndexRow({ data }: { data: MarketIndex }) {
  const { indexName, currentValue, changeAmount, changeRate } = data;
  const isUp = changeAmount >= 0;

  return (
    <div className="w-full">
      <Typography.SubTitle1 className="text-right">
        {indexName}
      </Typography.SubTitle1>

      <div className="flex gap-2 justify-end items-center">
        <Typography.SubTitle1
          className={`text-right ${isUp ? "text-otl-stock-up" : "text-otl-stock-down"}`}
        >
          {currentValue.toLocaleString()} {isUp ? "+" : ""}
        </Typography.SubTitle1>
        <Typography.SubTitle2
          className={`text-right ${isUp ? "text-otl-stock-up" : "text-otl-stock-down"}`}
        >
          {changeAmount.toLocaleString()} ({isUp ? "+" : ""}
          {changeRate.toFixed(2)}%)
        </Typography.SubTitle2>
      </div>
    </div>
  );
}

function ExchangeRow({ data }: { data: ExchangeIndex }) {
  const { rate, difference, percent } = data;
  const isUp = difference >= 0;

  return (
    <div className="w-full">
      <Typography.SubTitle1 className="text-right">
        USD/KRW
      </Typography.SubTitle1>

      <div className="flex gap-2 justify-end items-center">
        <Typography.SubTitle1
          className={`text-right ${isUp ? "text-otl-stock-up" : "text-otl-stock-down"}`}
        >
          {rate.toLocaleString()} {isUp ? "+" : ""}
        </Typography.SubTitle1>
        <Typography.SubTitle2
          className={`text-right ${isUp ? "text-otl-stock-up" : "text-otl-stock-down"}`}
        >
          {difference.toLocaleString()} ({isUp ? "+" : ""}
          {percent.toFixed(2)}%)
        </Typography.SubTitle2>
      </div>
    </div>
  );
}
