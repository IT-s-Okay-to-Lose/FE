import type { CandleData, VolumeData } from "@/entities/stock/stock.entity";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import Chart2 from "@/shared/components/organisms/Chart2";

import { option } from "@/pages/StockDetailPage";

interface SocketChartProps {
  filterTab: string;
  setFilterTab: React.Dispatch<React.SetStateAction<string>>;
  candleData: CandleData[];
  volumeData: VolumeData[];
}

function StockChart({
  filterTab,
  setFilterTab,
  candleData,
  volumeData,
}: SocketChartProps) {
  return (
    <Card>
      <Card.Header>
        <Typography.Head2>실시간 차트</Typography.Head2>
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
          <Chart2 data={candleData} volumeData={volumeData} />
        </div>
      </Card.Content>
    </Card>
  );
}

export default StockChart;
