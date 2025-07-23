import type { StockHoldings } from "@/entities/user/user.entity";
import { mockStockHoldings } from "@/entities/user/user.mock";
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
    totalPrice: 0,
    quantity: 0,
    charge: 0,
    totalProfit: 0,
  });

  async function getStockHoldingsFunction() {
    const result = await getStockHoldings(selectedCode!);
    setStockHoldings(result);
  }

  useEffect(() => {
    getStockHoldingsFunction();
  }, []);

  console.log(stockHoldings);
  return (
    <div>
      <Card className="w-[355px]">
        <Card.Header>
          <Typography.Head2>내 주식</Typography.Head2>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3 mt-6">
          <InfoRow
            title="총 금액"
            contents={`${formatNumber(mockStockHoldings.totalPrice)}원`}
          />
          <InfoRow title="수량" contents={`${mockStockHoldings.quantity}주`} />
          <InfoRow
            title="수수료"
            contents={`${formatNumber(mockStockHoldings.charge)}원 예상`}
          />
          <InfoRow
            title="총 수익"
            contents={`${formatNumber(mockStockHoldings.totalProfit)}원`}
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
