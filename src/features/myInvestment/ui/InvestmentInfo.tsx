import Typography from "@/shared/components/atoms/Typography";
import { mockUserInvestmentSummary } from "@/entities/user/user.mock";
import { formatNumber } from "@/shared/utils/format";

function InvestmentInfo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <Typography.SubTitle1>원금</Typography.SubTitle1>
        <Typography.P1>
          {formatNumber(mockUserInvestmentSummary.totalCash)}원
        </Typography.P1>
      </div>
      <div className="flex justify-between items-center">
        <Typography.SubTitle1>총 수익(ROI)</Typography.SubTitle1>
        <Typography.P1>
          {mockUserInvestmentSummary.roi >= 0 ? "+" : "-"}
          {formatNumber(mockUserInvestmentSummary.totalProfit)}원(
          {mockUserInvestmentSummary.roi}%)
        </Typography.P1>
      </div>
    </div>
  );
}

export default InvestmentInfo;
