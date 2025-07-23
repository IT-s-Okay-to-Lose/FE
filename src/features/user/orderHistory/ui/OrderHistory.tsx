import { useEffect, useMemo, useState } from "react";

import type { OrderHistoryItem } from "@/entities/user/user.entity";
import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import cn from "@/shared/utils/cn";
import { formatDateToKorean, formatNumber } from "@/shared/utils/format";
import { useSearchParams } from "react-router-dom";
import { getOrderHistory } from "../services/orderHistory.service";

function OrderHistory() {
  const [searchParams] = useSearchParams();
  const selectedCode = searchParams.get("stock_id");

  const options = [
    { label: "대기", value: "PENDING" },
    { label: "완료", value: "DONE" },
  ];

  const [filterTab, setFilterTab] = useState<string>(options[0].value);
  const [orderData, setOrderData] = useState<OrderHistoryItem[]>([]);

  async function getOrderHistoryFunction() {
    const result = await getOrderHistory(selectedCode!);
    setOrderData(result);
  }

  useEffect(() => {
    getOrderHistoryFunction();
  }, []);

  const filteredData = useMemo(() => {
    return orderData.filter((data) => data.status === filterTab);
  }, [orderData, filterTab]);

  return (
    <div>
      <Card className="w-[355px] h-[233px]">
        <Card.Header>
          <Typography.Head2>주문 내역</Typography.Head2>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3">
          <RoundTab.Small
            options={options.map((o) => o.label)}
            value={options.find((o) => o.value === filterTab)?.label || ""}
            onChange={(label) => {
              const selected = options.find((o) => o.label === label);
              if (selected) setFilterTab(selected.value);
            }}
          />
          <div className="max-h-[111px] overflow-scroll flex flex-col gap-2">
            {filteredData.map((data) =>
              filterTab === "PENDING" ? (
                <PendingOrderHistoryRow data={data} key={data.orderId} />
              ) : (
                <CompletedOrderHistoryRow data={data} key={data.orderId} />
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
  const { createdAt, orderType, quantity, price } = data;
  return (
    <div className="flex w-full justify-between ">
      <Typography.P1>{formatDateToKorean(new Date(createdAt))}</Typography.P1>
      <div className="flex gap-2">
        <Typography.P1
          className={cn(
            "font-semibold",
            orderType === "SELL" ? "text-otl-point" : "text-otl-main"
          )}
        >
          {orderType === "BUY" ? "구매" : "판매"}
        </Typography.P1>
        <Typography.P1 className="w-[60px]">{quantity}주</Typography.P1>
        <Typography.P1>주당 {formatNumber(price)}원</Typography.P1>
      </div>
    </div>
  );
}

function PendingOrderHistoryRow({ data }: { data: OrderHistoryItem }) {
  const { orderType, quantity, price } = data;
  return (
    <div className="flex w-full justify-between ">
      <div>
        <div className="flex gap-2">
          <Typography.P1
            className={cn(
              "font-semibold",
              orderType === "BUY" ? "text-otl-point" : "text-otl-main"
            )}
          >
            {orderType === "BUY" ? "구매" : "판매"}
          </Typography.P1>
          <Typography.P1 className="w-[60px]">{quantity}주</Typography.P1>
        </div>
        <Typography.P1 className="text-otl-gray">
          주당 {formatNumber(price)}원
        </Typography.P1>
      </div>
      <Button.Small.Sub>취소하기</Button.Small.Sub>
    </div>
  );
}
