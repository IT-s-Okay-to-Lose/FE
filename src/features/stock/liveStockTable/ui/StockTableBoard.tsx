import Typography from "@/shared/components/atoms/Typography";
// import RoundTab from "@/shared/components/molecules/RoundTab";
// import { useState } from "react";
import LiveStockTable from "./LiveStockTable";

function StockTableBoard() {
  // const filteringList = ["실시간", "1일", "3일"];
  // const [filterTab, setFilterTab] = useState(filteringList[0]);

  return (
    <div className="flex flex-col gap-4 min-w-[500px] w-[800px]">
      <div className="flex gap-3 items-center">
        <Typography.Head1>실시간 차트</Typography.Head1>
        {/* <Typography.P1>오늘 13:30 기준</Typography.P1> */}
      </div>
      {/* <div className="mb-5">
        <RoundTab.Small
          options={filteringList}
          value={filterTab}
          onChange={setFilterTab}
        />
      </div> */}
      <LiveStockTable />
    </div>
  );
}

export default StockTableBoard;
