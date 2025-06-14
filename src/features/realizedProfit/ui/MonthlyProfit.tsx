import Typography from "@/shared/components/atoms/Typography";
import { mockRealizedProfitSummary } from "@/entities/user/user.mock";
import { formatNumber } from "@/shared/utils/format";
import { useState } from "react";

function MonthlyProfit() {
  const [currentMonth, setCurrentMonth] = useState("06");

  const handleMonthChange = (direction: "prev" | "next") => {
    let monthNum = parseInt(currentMonth, 10);

    monthNum += direction === "prev" ? -1 : 1;

    // 1 ~ 12 범위 유지
    if (monthNum < 1) monthNum = 12;
    if (monthNum > 12) monthNum = 1;

    setCurrentMonth(monthNum.toString().padStart(2, "0"));
  };

  return (
    <div className="flex flex-col items-center gap-[50px]">
      <div className="flex justify-center items-center gap-5">
        <i
          className="bi bi-caret-left-fill text-3xl cursor-pointer"
          onClick={() => handleMonthChange("prev")}
        />
        <Typography.Head2>{parseInt(currentMonth)}월 수익</Typography.Head2>
        <i
          className="bi bi-caret-right-fill text-3xl cursor-pointer"
          onClick={() => handleMonthChange("next")}
        />
      </div>
      <Typography.Head1>
        {formatNumber(mockRealizedProfitSummary.totalIncome)}원
      </Typography.Head1>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <Typography.SubTitle1>판매수익</Typography.SubTitle1>
          <Typography.P1>
            {formatNumber(mockRealizedProfitSummary.saleIncome)}원
          </Typography.P1>
        </div>
        <div className="flex justify-between items-center">
          <Typography.SubTitle1>배당금</Typography.SubTitle1>
          <Typography.P1>
            {formatNumber(mockRealizedProfitSummary.dividendIncome)}원
          </Typography.P1>
        </div>
      </div>
    </div>
  );
}

export default MonthlyProfit;
