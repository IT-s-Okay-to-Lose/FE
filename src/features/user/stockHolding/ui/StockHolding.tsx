import type { StockHoldings } from "@/entities/user/user.entity";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import { formatNumber } from "@/shared/utils/format";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getStockHoldings } from "../services/stockHolding.service";

function StockHolding() {
  const [searchParams] = useSearchParams();
  const selectedCode = searchParams.get("stock_id");

  const [stockHoldings, setStockHoldings] = useState<StockHoldings>({
    totalAmount: 0,
    quantity: 0,
    expectedFee: 0,
    totalProfit: 0,
  });

  async function getStockHoldingsFunction() {
    const result = await getStockHoldings(selectedCode!);
    setStockHoldings(result.data);
  }

  useEffect(() => {
    getStockHoldingsFunction();
  }, []);

  return (
    <div>
      <Card className="w-[355px]">
        <Card.Header>
          <Typography.Head2>내 주식</Typography.Head2>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3 mt-6">
          <InfoRow
            title="총 금액"
            contents={`${formatNumber(stockHoldings.totalAmount)} 원`}
          />
          <InfoRow title="수량" contents={`${stockHoldings.quantity} 주`} />
          <InfoRow
            title="수수료"
            contents={`${formatNumber(stockHoldings.expectedFee)} 원 예상`}
          />
          <InfoRow
            title="총 수익"
            contents={`${formatNumber(stockHoldings.totalProfit)} 원`}
          />
        </Card.Content>
      </Card>
    </div>
  );
}

export default StockHolding;

function InfoRow({ title, contents }: { title: string; contents: string }) {
  return (
    <div className="flex justify-between">
      <Typography.P1>{title}</Typography.P1>
      <Typography.P1>{contents}</Typography.P1>
    </div>
  );
}
