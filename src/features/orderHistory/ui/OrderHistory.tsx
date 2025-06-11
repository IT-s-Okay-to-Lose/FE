import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import { useState } from "react";

function OrderHistory() {
  const options = ["대기", "완료"];

  const [filterTab, setFilterTab] = useState<string>(options[0]);

  return (
    <div>
      <Card className="w-[355px]">
        <Card.Header>
          <Typography.Head2>주문 내역</Typography.Head2>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3">
          <RoundTab.Small
            options={options}
            value={filterTab}
            onChange={setFilterTab}
          />
          <div className="max-h-[111px] overflow-scroll flex flex-col gap-2">
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
            <HistoryRow />
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default OrderHistory;

function HistoryRow() {
  return (
    <div className="flex w-full justify-between ">
      <Typography.P1>4월 24일</Typography.P1>
      <div className="flex gap-4">
        <Typography.P1>구매 100주</Typography.P1>
        <Typography.P1>주당 12,000원</Typography.P1>
      </div>
    </div>
  );
}
