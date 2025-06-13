import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import { useState } from "react";

function ProfitGraph() {
  const filteringList = ["1주", "1달", "3달", "1년"];
  const [filterTab, setFilterTab] = useState(filteringList[0]);

  return (
    <div>
      <Typography.Head1>최근 수익 그래프</Typography.Head1>
      <Typography.Head1>40,243,000원</Typography.Head1>
      <RoundTab.Small
        options={filteringList}
        value={filterTab}
        onChange={setFilterTab}
      />
    </div>
  );
}

export default ProfitGraph;
