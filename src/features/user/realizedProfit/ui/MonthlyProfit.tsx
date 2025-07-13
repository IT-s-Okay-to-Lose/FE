import Typography from "@/shared/components/atoms/Typography";
import { formatNumber } from "@/shared/utils/format";
import { useState, useEffect } from "react";
import type { RealizedSummary } from "@/entities/user/user.entity";
import { getRealizedSummary } from "../services/RealizedProfit.service";
// import { mockRealizedSummary } from "@/entities/user/user.mock";

type MonthlyProfitProps = {
  year: number;
  month: number;
  handleMonthChange: (direction: "prev" | "next") => void;
};

function MonthlyProfit({ year, month, handleMonthChange }: MonthlyProfitProps) {
  const [realizedSummary, setRealizedSummary] = useState<RealizedSummary>();

  async function getRealizedSummaryFunction() {
    const result = await getRealizedSummary(year, month);
    setRealizedSummary(result);
  }

  useEffect(() => {
    getRealizedSummaryFunction();
  }, [year, month]);

  if (!realizedSummary) return;

  return (
    <div className="flex flex-col items-center gap-[50px]">
      <div className="flex justify-center items-center gap-5">
        <i
          className="bi bi-caret-left-fill text-3xl cursor-pointer"
          onClick={() => handleMonthChange("prev")}
        />
        <Typography.Head2>
          {year}년 {month}월
        </Typography.Head2>
        <i
          className="bi bi-caret-right-fill text-3xl cursor-pointer"
          onClick={() => handleMonthChange("next")}
        />
      </div>
      <Typography.Head1>
        {formatNumber(realizedSummary.totalIncome)}원
      </Typography.Head1>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <Typography.SubTitle1>판매수익</Typography.SubTitle1>
          <Typography.P1>
            {formatNumber(realizedSummary.saleIncome)}원
          </Typography.P1>
        </div>
        <div className="flex justify-between items-center">
          <Typography.SubTitle1>배당금</Typography.SubTitle1>
          <Typography.P1>
            {formatNumber(realizedSummary.dividendIncome)}원
          </Typography.P1>
        </div>
      </div>
    </div>
  );
}

export default MonthlyProfit;
