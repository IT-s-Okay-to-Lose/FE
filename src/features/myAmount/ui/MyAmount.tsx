import Typography from "@/shared/components/atoms/Typography";
import Card from "@/shared/components/atoms/Card";
import Button from "@/shared/components/atoms/Button";

function MyAmount() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <Typography.Head2>나의 금액</Typography.Head2>
        <Button.Main>돈 채우기</Button.Main>
      </div>
      <div className="w-full flex gap-5">
        <Card className="w-full gap-6">
          <Typography.Head3>
            <Card.Header>주문 가능 금액</Card.Header>
          </Typography.Head3>
          <Typography.SubTitle1>
            <Card.Content>100,000,000원</Card.Content>
          </Typography.SubTitle1>
        </Card>
        <Card className="w-full gap-6">
          <Typography.Head3>
            <Card.Header>현재 투자 중인 금액</Card.Header>
          </Typography.Head3>
          <Typography.SubTitle1>
            <Card.Content>50,000,000원</Card.Content>
          </Typography.SubTitle1>
        </Card>
      </div>
    </div>
  );
}

export default MyAmount;
