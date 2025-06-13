import { mockUserBalanceSummary } from "@/entities/user/user.mock";
import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import { formatNumber } from "@/shared/utils/format";
import ChargeModal from "./ChargeModal";
import { useState } from "react";

function MyAmount() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <Typography.Head2>나의 금액</Typography.Head2>
        <Button.Main onClick={() => setIsModalOpen(true)}>
          돈 채우기
        </Button.Main>
        {isModalOpen && <ChargeModal onClose={() => setIsModalOpen(false)} />}
      </div>
      <div className="w-full flex gap-5">
        <Card className="w-full gap-6">
          <Typography.Head3>
            <Card.Header>주문 가능 금액</Card.Header>
          </Typography.Head3>
          <Typography.SubTitle1>
            <Card.Content>
              {formatNumber(mockUserBalanceSummary.availableAmount)}원
            </Card.Content>
          </Typography.SubTitle1>
        </Card>
        <Card className="w-full gap-6">
          <Typography.Head3>
            <Card.Header>현재 투자 중인 금액</Card.Header>
          </Typography.Head3>
          <Typography.SubTitle1>
            <Card.Content>
              {formatNumber(mockUserBalanceSummary.investedAmount)}원
            </Card.Content>
          </Typography.SubTitle1>
        </Card>
      </div>
    </div>
  );
}

export default MyAmount;
