import { mockStockDetailData } from "@/entities/stock/stock.mock";
import Typography from "@/shared/components/atoms/Typography";
import cn from "@/shared/utils/cn";
import { formatNumber } from "@/shared/utils/format";

function StockDetail() {
  return (
    <div>
      <Typography.Head2>{mockStockDetailData.name}</Typography.Head2>
      <Typography.Head1
        className={cn(
          mockStockDetailData.currentPrice > 0
            ? "text-otl-stock-up"
            : "text-otl-stock-down"
        )}
      >
        {formatNumber(mockStockDetailData.currentPrice)}원
      </Typography.Head1>
      <Typography.P1>
        전일 대비 <i className="bi bi-triangle-fill" />{" "}
        {formatNumber(mockStockDetailData.priceChange)}원 (
        {mockStockDetailData.fluctuationRate}%)
      </Typography.P1>
    </div>
  );
}

export default StockDetail;
