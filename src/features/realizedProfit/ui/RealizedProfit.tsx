import Typography from "@/shared/components/atoms/Typography";
import Card from "@/shared/components/atoms/Card";
import MonthlyProfit from "./MonthlyProfit";
import ProfitDetail from "./ProfitDetail";

function RealizedProfit() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Typography.Head3>실현 수익</Typography.Head3>
        </Card.Header>
        <Card.Content>
          <MonthlyProfit />
          <div className="border border-grey my-[30px]" />
          <ProfitDetail />
        </Card.Content>
      </Card>
    </div>
  );
}

export default RealizedProfit;
