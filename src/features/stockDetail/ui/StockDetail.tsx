import {
  mockStockCurrentPrice,
  mockStockDetailData,
} from "@/entities/stock/stock.mock";
import Typography from "@/shared/components/atoms/Typography";
import cn from "@/shared/utils/cn";
import { formatNumber } from "@/shared/utils/format";

function StockDetail() {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="rounded-full w-[40px] h-[40px] overflow-hidden">
          <img src={mockStockDetailData.imageUrl} />
        </div>
        <Typography.Head2>{mockStockDetailData.name}</Typography.Head2>
      </div>
      <Typography.Head1
        className={cn(
          mockStockCurrentPrice.currentPrice > 0
            ? "text-otl-stock-up"
            : "text-otl-stock-down"
        )}
      >
        {formatNumber(mockStockCurrentPrice.currentPrice)}원
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
