import { useEffect, useState } from "react";

import type { OrderHistoryItem } from "@/entities/user/user.entity";
import {
  mockCompletedOrderData,
  mockPendingOrderData,
} from "@/entities/user/user.mock";
import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import cn from "@/shared/utils/cn";
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
            {orderData.map((data) =>
              filterTab === options[0] ? (
                <PendingOrderHistoryRow data={data} key={data.id} />
              ) : (
                <CompletedOrderHistoryRow data={data} key={data.id} />
              )
            )}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default OrderHistory;

function CompletedOrderHistoryRow({ data }: { data: OrderHistoryItem }) {
  const { date, type, quantity, pricePerStock } = data;
  return (
    <div className="flex w-full justify-between ">
      <Typography.P1>{formatDateToKorean(date)}</Typography.P1>
      <div className="flex gap-2">
        <Typography.P1
          className={cn(
            "font-semibold",
            type === "구매" ? "text-otl-point" : "text-otl-main"
          )}
        >
          {type}
        </Typography.P1>
        <Typography.P1 className="w-[60px]">{quantity}주</Typography.P1>
        <Typography.P1>주당 {formatNumber(pricePerStock)}원</Typography.P1>
      </div>
    </div>
  );
}

function PendingOrderHistoryRow({ data }: { data: OrderHistoryItem }) {
  const { type, quantity, pricePerStock } = data;
  return (
    <div className="flex w-full justify-between ">
      <div>
        <div className="flex gap-2">
          <Typography.P1
            className={cn(
              "font-semibold",
              type === "구매" ? "text-otl-point" : "text-otl-main"
            )}
          >
            {type}
          </Typography.P1>
          <Typography.P1 className="w-[60px]">{quantity}주</Typography.P1>
        </div>
        <Typography.P1 className="text-otl-gray">
          주당 {formatNumber(pricePerStock)}원
        </Typography.P1>
      </div>
      <Button.Small.Sub>취소하기</Button.Small.Sub>
    </div>
  );
}
