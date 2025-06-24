import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import { useState } from "react";
import MonthlyProfit from "./MonthlyProfit";
import ProfitDetail from "./ProfitDetail";

function RealizedProfit() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [currentMonth, setCurrentMonth] = useState(month);
  const [currentYear, setCurrentYear] = useState(year);

  const handleMonthChange = (direction: "prev" | "next") => {
    let newMonth = currentMonth + (direction === "prev" ? -1 : 1);
    let newYear = currentYear;

    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    } else if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <Typography.Head3>실현 수익</Typography.Head3>
        </Card.Header>
        <Card.Content>
          <MonthlyProfit
            year={currentYear}
            month={currentMonth}
            handleMonthChange={handleMonthChange}
          />
          <div className="border border-grey my-[30px]" />
          <ProfitDetail />
        </Card.Content>
      </Card>
    </div>
  );
}

export default RealizedProfit;
