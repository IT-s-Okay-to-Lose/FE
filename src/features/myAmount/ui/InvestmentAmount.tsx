import Typography from "@/shared/components/atoms/Typography";
import Card from "@/shared/components/atoms/Card";

function InvestmentAmount() {
  return (
    <div className="flex flex-col gap-5">
      <Typography.Head2>현재 투자 중인 금액</Typography.Head2>
      <div className="w-full flex gap-5">
        <Card className="w-full gap-6">
          <Typography.Head3>
            <Card.Header>원화</Card.Header>
          </Typography.Head3>
          <Typography.SubTitle1>
            <Card.Content>100,000,000원</Card.Content>
          </Typography.SubTitle1>
        </Card>
        <Card className="w-full gap-6">
          <Typography.Head3>
            <Card.Header>달러</Card.Header>
          </Typography.Head3>
          <Typography.SubTitle1>
            <Card.Content>$100,000,000</Card.Content>
          </Typography.SubTitle1>
        </Card>
      </div>
    </div>
  );
}

export default InvestmentAmount;
