import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";

function MyOrder() {
  return (
    <div>
      <Card className="w-[355px]">
        <Card.Header>
          <Typography.Head2>내 주식</Typography.Head2>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3 mt-6">
          <InfoRow title="총 금액" contents="538,000원" />
          <InfoRow title="수량" contents="100주" />
          <InfoRow title="수수료" contents="164원 예상" />
          <InfoRow title="총 수익" contents="-19,423원" />
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
