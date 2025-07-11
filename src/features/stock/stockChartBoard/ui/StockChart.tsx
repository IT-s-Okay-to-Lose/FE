import type { CandleData, VolumeData } from "@/entities/stock/stock.entity";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import Chart2 from "@/shared/components/organisms/Chart2";

interface SocketChartProps {
  candleData: CandleData[];
  volumeData: VolumeData[];
}

function StockChart({ candleData, volumeData }: SocketChartProps) {
  return (
    <Card>
      <Card.Header>
        <Typography.Head2>실시간 차트</Typography.Head2>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <div className="border">
          <Chart2 candleData={candleData} volumeData={volumeData} />
        </div>
      </Card.Content>
    </Card>
  );
}

export default StockChart;
