import Typography from "@/shared/components/atoms/Typography";
import Card from "@/shared/components/atoms/Card";
import MonthlyProfit from "./MonthlyProfit";
import ProfitDetail from "./ProfitDetail";
import { useState } from "react";

function RealizedProfit() {
  const [currentMonth, setCurrentMonth] = useState(6);
  const [currentYear, setCurrentYear] = useState(2025);

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
          <ProfitDetail year={currentYear} month={currentMonth} />
        </Card.Content>
      </Card>
    </div>
  );
}

export default RealizedProfit;
