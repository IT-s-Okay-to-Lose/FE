import { mockStockHoldingData } from "@/entities/user/user.mock";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import PieChart from "./PieChart";

function StockHolding() {
  return (
    <Card>
      <Card.Header>
        <Typography.Head3>보유 종목</Typography.Head3>
      </Card.Header>
      <Card.Content className="flex flex-col items-center">
        <PieChart />
        {mockStockHoldingData.map((data, idx) => (
          <div key={idx} className="w-[70%] flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div
                className="w-[15px] h-[15px] rounded-[2px]"
                style={{ backgroundColor: data.color }}
              />
              <Typography.P1>{data.stockName}</Typography.P1>
            </div>
            <Typography.P1>{data.percent}%</Typography.P1>
          </div>
        ))}
      </Card.Content>
    </Card>
  );
}

export default StockHolding;
