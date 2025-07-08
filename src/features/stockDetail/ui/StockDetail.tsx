import type { CandleData } from "@/entities/stock/stock.entity";
import {
  mockStockCurrentPrice,
  mockStockDetailData,
} from "@/entities/stock/stock.mock";
import Typography from "@/shared/components/atoms/Typography";
import { formatNumber } from "@/shared/utils/format";

function StockDetail({ candleData }: { candleData: CandleData[] }) {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="rounded-full w-[40px] h-[40px] overflow-hidden">
          <img src={mockStockDetailData.imageUrl} />
        </div>
        <Typography.Head2>{mockStockDetailData.name}</Typography.Head2>
      </div>
      <Typography.Head1>
        {candleData.length >= 1
          ? formatNumber(candleData[candleData.length - 1][4])
          : 0}
        원
      </Typography.Head1>
      <Typography.P1>
        전일 대비 <i className="bi bi-triangle-fill" />{" "}
        {formatNumber(mockStockCurrentPrice.priceChange)}원 (
        {mockStockCurrentPrice.fluctuationRate}%)
      </Typography.P1>
    </div>
  );
}

export default StockDetail;
