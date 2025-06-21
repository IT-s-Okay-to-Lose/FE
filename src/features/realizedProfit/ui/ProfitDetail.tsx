import type { RealizedDetail } from "@/entities/user/user.entity";
import Typography from "@/shared/components/atoms/Typography";
import { formatNumber } from "@/shared/utils/format";
import { getRealizedDetail } from "../services/RealizedProfit.service";
import { useState, useEffect } from "react";

type ProfitDetailProps = {
  year: number;
  month: number;
};

function ProfitDetail({ year, month }: ProfitDetailProps) {
  const [realizedDetail, setRealizedDetail] = useState<RealizedDetail[]>([]);

  async function getRealizedDetailFunction() {
    const result = await getRealizedDetail(year, month);
    setRealizedDetail(result);
  }

  useEffect(() => {
    getRealizedDetailFunction();
  }, [year, month]);

  if (!realizedDetail) return;

  return (
    <div className="flex flex-col gap-[30px]">
      {realizedDetail.map((data, idx) => (
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
