import { mockMyStockData } from "@/entities/user/user.mock";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import { formatNumber } from "@/shared/utils/format";

function MyOrder() {
  return (
    <div>
      <Card className="w-[355px]">
        <Card.Header>
          <Typography.Head2>내 주식</Typography.Head2>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3 mt-6">
          <InfoRow
            title="총 금액"
            contents={`${formatNumber(mockMyStockData.totalAmount)}원`}
          />
          <InfoRow title="수량" contents={`${mockMyStockData.quantity}주`} />
          <InfoRow
            title="수수료"
            contents={`${formatNumber(mockMyStockData.charge)}원 예상`}
          />
          <InfoRow
            title="총 수익"
            contents={`${formatNumber(mockMyStockData.totalProfit)}원`}
          />
        </Card.Content>
      </Card>
    </div>
  );
}

export default MyOrder;

function InfoRow({ title, contents }: { title: string; contents: string }) {
  return (
    <div className="flex justify-between">
      <Typography.P1>{title}</Typography.P1>
      <Typography.P1>{contents}</Typography.P1>
    </div>
  );
}
