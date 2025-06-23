import Typography from "@/shared/components/atoms/Typography";
import { formatNumber } from "@/shared/utils/format";
import { useState, useEffect } from "react";
import { getInvestmentSummary } from "@/features/myInvestment/services/myInvestment.service";
import type { UserInvestmentSummary } from "@/entities/user/user.entity";

function InvestmentInfo() {
  const [investmentSummary, setInvestmentSummary] =
    useState<UserInvestmentSummary>();

  async function getSummaryFunction() {
    const result = await getInvestmentSummary();
    setInvestmentSummary(result);
  }

  useEffect(() => {
    getSummaryFunction();
  }, []);

  if (!investmentSummary) return;
  
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <Typography.SubTitle1>원금</Typography.SubTitle1>
        <Typography.P1>
          {formatNumber(investmentSummary.totalCash)}원
        </Typography.P1>
      </div>
      <div className="flex justify-between items-center">
        <Typography.SubTitle1>총 수익(ROI)</Typography.SubTitle1>
        <Typography.P1>
          {investmentSummary.roi >= 0 ? "+" : "-"}
          {formatNumber(investmentSummary.totalProfit)}원(
          {investmentSummary.roi}%)
        </Typography.P1>
      </div>
    </div>
  );
}

export default InvestmentInfo;
