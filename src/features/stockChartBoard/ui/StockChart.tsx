import { mockCandleData, mockVolumeData } from "@/entities/stock/stock.mock";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import Chart2 from "@/shared/components/organisms/Chart2";

import { useState } from "react";

function StockChart() {
  const option = ["실시간", "1분", "5분", "1시간", "1일"];
  const [filterTab, setFilterTab] = useState(option[0]);

  return (
    <Card>
      <Card.Header>
        <Typography.Head2>차트</Typography.Head2>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <div className="w-full flex justify-end">
          <RoundTab.Small
            options={option}
            value={filterTab}
            onChange={setFilterTab}
          />
        </div>
        <div className="border">
          <Chart2 data={mockCandleData} volumeData={mockVolumeData} />
        </div>
      </Card.Content>
    </Card>
  );
}

export default StockChart;
