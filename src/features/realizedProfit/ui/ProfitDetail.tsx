import Typography from "@/shared/components/atoms/Typography";
import { mockRealizedProfitDetail } from "@/entities/user/user.mock";
import { formatNumber } from "@/shared/utils/format";

function ProfitDetail() {
  return (
    <div className="flex flex-col gap-[30px]">
      {mockRealizedProfitDetail.map((data, idx) => (
        <div key={idx} className="flex flex-col">
          <Typography.SubTitle1 className="mb-5">
            {data.date}
          </Typography.SubTitle1>
          <div className="flex flex-col gap-[10px]">
            {data.items.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <Typography.P1>{item.stockName}</Typography.P1>
                <div className="w-[40%] flex justify-between">
                  <Typography.P1>{item.type}</Typography.P1>
                  <Typography.P1>{formatNumber(item.amount)}원</Typography.P1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfitDetail;
