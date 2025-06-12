import { useEffect, useState } from "react";

import type { OrderHistoryItem } from "@/entities/user/user.entity";
import {
  mockCompletedOrderData,
  mockPendingOrderData,
} from "@/entities/user/user.mock";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import { formatDateToKorean, formatNumber } from "@/shared/utils/format";

function OrderHistory() {
  const options = ["대기", "완료"];

  const [filterTab, setFilterTab] = useState<string>(options[0]);
  const [orderData, setOrderData] =
    useState<OrderHistoryItem[]>(mockPendingOrderData);

  useEffect(() => {
    if (filterTab === "대기") setOrderData(mockPendingOrderData);
    else setOrderData(mockCompletedOrderData);
  }, [filterTab]);

  return (
    <div>
      <Card className="w-[355px] h-[233px]">
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
            {orderData.map((data) => (
              <HistoryRow data={data} key={data.id} />
            ))}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default OrderHistory;

function HistoryRow({ data }: { data: OrderHistoryItem }) {
  const { date, quantity, pricePerStock, status } = data;
  return (
    <div className="flex w-full justify-between ">
      <Typography.P1>{formatDateToKorean(date)}</Typography.P1>
      <div className="flex gap-4">
        <Typography.P1>
          {status} {quantity}주
        </Typography.P1>
        <Typography.P1>주당 {formatNumber(pricePerStock)}원</Typography.P1>
      </div>
    </div>
  );
}
