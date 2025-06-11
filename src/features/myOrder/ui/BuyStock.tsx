import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Input from "@/shared/components/atoms/Input";
import Typography from "@/shared/components/atoms/Typography";
import BoxTab from "@/shared/components/molecules/BoxTab";
import RoundTab from "@/shared/components/molecules/RoundTab";
import { useFilterTab } from "@/shared/hooks/useFilterTab";

function BuyStock() {
  const priceOptions = ["지정가", "시장가"];
  const quantityOptions = ["10%", "50%", "70%", "최대"];
  const { filterTab: priceFilterTab, setFilterTab: setPriceFilterTab } =
    useFilterTab(priceOptions[0]);
  const { filterTab: quantityFilterTab, setFilterTab: setQuantityFilterTab } =
    useFilterTab(quantityOptions[0]);

  return (
    <div>
      <Card className="w-[355px]">
        <Card.Header>
          <Typography.Head2>구매하기</Typography.Head2>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <Typography.SubTitle2>주문 가격</Typography.SubTitle2>
            <BoxTab.Small
              options={priceOptions}
              value={priceFilterTab}
              onChange={setPriceFilterTab}
            />
          </div>
          <div className="flex justify-end w-full">
            <Input className="w-[240px]" />
          </div>

          <div className="flex justify-between items-center">
            <Typography.SubTitle2>수량</Typography.SubTitle2>
            <Input className="w-[240px]" />
          </div>
          <div className="w-full flex justify-end">
            <RoundTab.Small
              options={quantityOptions}
              value={quantityFilterTab}
              onChange={setQuantityFilterTab}
            />
          </div>
          <div className="w-full border-b-[1px] bg-otl-sub" />
          <div className="flex flex-col gap-3 h-[100px]">
            <div className="w-full flex justify-between">
              <Typography.SubTitle2>구매 가능 금액</Typography.SubTitle2>
              <Typography.SubTitle2>30,000원</Typography.SubTitle2>
            </div>
            <div className="w-full flex justify-between">
              <Typography.SubTitle2>총 구매 금액</Typography.SubTitle2>
              <Typography.SubTitle2>30,000원</Typography.SubTitle2>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Button.Point>구매하기</Button.Point>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default BuyStock;
