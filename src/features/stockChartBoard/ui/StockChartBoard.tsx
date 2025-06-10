import Table from "@/shared/components/atoms/Table";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import { useState } from "react";

export function StockChartBoard() {
  const filteringList = ["실시간", "1일", "3일"];
  const [filterTab, setFilterTab] = useState<string>("실시간");

  return (
    <div className="flex flex-col gap-2 min-w-[500px] w-[800px]">
      <div className="flex gap-3 items-center">
        <Typography.Head1>실시간 차트</Typography.Head1>
        <Typography.P1>오늘 13:30 기준</Typography.P1>
      </div>
      <div className="mb-5">
        <RoundTab.Small
          options={filteringList}
          value={filterTab}
          onChange={setFilterTab}
        />
      </div>
      <Table />
    </div>
  );
}
