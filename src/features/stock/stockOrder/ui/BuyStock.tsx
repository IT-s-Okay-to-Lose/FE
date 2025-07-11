import { useState } from "react";

import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import UnitInput from "@/shared/components/atoms/UnitInput";
import { formatNumber } from "@/shared/utils/format";
import { postStockOrder } from "../services/stockOrder.service";

function BuyStock({ stockCode }: { stockCode: string }) {
  const current_price = 300000;
  const [quantity, setQuantity] = useState<number>(1);

  const handleClickBuyButton = async () => {
    const result = await postStockOrder(
      stockCode,
      "BUY",
      quantity,
      current_price
    );

    console.log(result);
  };

  return (
    <div>
      <Card className="w-[355px]">
        <Card.Header className="mb-6">
          <Typography.Head2>구매하기</Typography.Head2>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3">
          <div className="flex justify-between items-center h-9">
            <Typography.SubTitle2>주문 가격</Typography.SubTitle2>
            <Typography.SubTitle2>
              {formatNumber(current_price)} 원
            </Typography.SubTitle2>
          </div>

          <div className="flex justify-between items-center">
            <Typography.SubTitle2>수량</Typography.SubTitle2>
            <UnitInput
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              unit="주"
              className="w-[200px]"
            />
          </div>

          <div className="w-full border-b-[1px] bg-otl-sub my-11" />
          <div className="flex flex-col gap-4 h-[100px]">
            <div className="w-full flex justify-between">
              <Typography.SubTitle2>구매 가능 금액</Typography.SubTitle2>
              <Typography.SubTitle2>
                {formatNumber(quantity * current_price)}원
              </Typography.SubTitle2>
            </div>
            <div className="w-full flex justify-between">
              <Typography.SubTitle2>총 구매 금액</Typography.SubTitle2>
              <Typography.SubTitle2>
                {formatNumber(quantity * current_price)}원
              </Typography.SubTitle2>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Button.Point onClick={handleClickBuyButton}>구매하기</Button.Point>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default BuyStock;
