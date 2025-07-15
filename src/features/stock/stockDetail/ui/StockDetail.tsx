import type {
  CandleData,
  MarketStockMeta,
  MarketStockPriceInfo,
} from "@/entities/stock/stock.entity";
import Typography from "@/shared/components/atoms/Typography";
import { formatNumber } from "@/shared/utils/format";

function StockDetail({
  stockMeta,
  candleData,
  marketPriceInfo,
}: {
  stockMeta: MarketStockMeta;
  candleData: CandleData[];
  marketPriceInfo: MarketStockPriceInfo;
}) {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="rounded-full w-[40px] h-[40px] overflow-hidden">
          <img src={stockMeta.imageUrl} />
        </div>
        <Typography.Head2>{stockMeta.name}</Typography.Head2>
      </div>
      <Typography.Head1>
        {candleData.length >= 1
          ? formatNumber(candleData[candleData.length - 1][4])
          : 0}
        원
      </Typography.Head1>
      <Typography.P1>
        전일 대비 <i className="bi bi-triangle-fill" />{" "}
        {formatNumber(marketPriceInfo.priceChange)}원 (
        {marketPriceInfo.fluctuationRate}%)
      </Typography.P1>
    </div>
  );
}

export default StockDetail;
