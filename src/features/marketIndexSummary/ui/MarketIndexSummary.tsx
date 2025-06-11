import type { MarketIndex } from "@/entities/market/market.entity";
import { mockMarketIndexData } from "@/entities/market/market.mock";
import Typography from "@/shared/components/atoms/Typography";

export function MarketIndexSummary() {
  return (
    <div className="w-[245px] h-[250px]">
      <Typography.Head2 className="w-full text-right  mb-3">
        지수 · 환율
      </Typography.Head2>
      {mockMarketIndexData.map((data, index) => (
        <IndexRow data={data} key={index} />
      ))}
    </div>
  );
}

function IndexRow({ data }: { data: MarketIndex }) {
  const { name, currentValue, changeValue, changeRate } = data;
  const isUp = changeValue >= 0;

  return (
    <div className="w-full">
      <Typography.SubTitle1 className="text-right">{name}</Typography.SubTitle1>

      <div className="flex gap-2 justify-end items-center">
        <Typography.SubTitle1
          className={`text-right ${isUp ? "text-otl-stock-up" : "text-otl-stock-down"}`}
        >
          {currentValue.toLocaleString()} {isUp ? "+" : ""}
        </Typography.SubTitle1>
        <Typography.SubTitle2
          className={`text-right ${isUp ? "text-otl-stock-up" : "text-otl-stock-down"}`}
        >
          {changeValue.toLocaleString()} ({isUp ? "+" : ""}
          {changeRate.toFixed(2)}%)
        </Typography.SubTitle2>
      </div>
    </div>
  );
}
