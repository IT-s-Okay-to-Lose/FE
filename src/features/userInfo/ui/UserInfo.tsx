import {
  mockUserInfo,
  mockUserPortfolioSummary,
} from "@/entities/user/user.mock";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import cn from "@/shared/utils/cn";
import { formatFullDateToKorean, formatNumber } from "@/shared/utils/format";

function UserInfo() {
  return (
    <Card>
      <div className="flex">
        <div className="flex-shrink-0 w-[90px] h-[90px] rounded-full bg-otl-gray mr-6 overflow-hidden">
          <img src={mockUserInfo.imageUrl} />
        </div>
        <div className="grow flex justify-between items-center">
          <Card.Content>
            <Typography.Head2>{mockUserInfo.name}</Typography.Head2>
            <Typography.SubTitle2 className="text-otl-gray">
              가입일: {formatFullDateToKorean(mockUserInfo.joinDate)}
            </Typography.SubTitle2>
          </Card.Content>
          <Card.Content>
            <Typography.SubTitle1
              className={cn(
                "flex justify-end",
                mockUserPortfolioSummary.returnRate >= 0
                  ? "text-otl-stock-up "
                  : "text-otl-stock-down "
              )}
            >
              {mockUserPortfolioSummary.returnRate >= 0 ? "+" : ""}
              {mockUserPortfolioSummary.returnRate}%
            </Typography.SubTitle1>
            <Typography.Head1>
              {formatNumber(mockUserPortfolioSummary.totalAsset)}원
            </Typography.Head1>
          </Card.Content>
        </div>
      </div>
    </Card>
  );
}

export default UserInfo;
