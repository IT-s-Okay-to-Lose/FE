import type { CandleData, VolumeData } from "@/entities/stock/stock.entity";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import Chart2 from "@/shared/components/organisms/Chart2";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  openChartSocket,
  openVolumeSocket,
} from "../services/StockChart.service";

const option = ["일", "주", "월", "년"];

function StockChart() {
  const [searchParams] = useSearchParams();
  const selectedCode = searchParams.get("stock_id");

  const [filterTab, setFilterTab] = useState(option[0]);

  const [candleData, setCandleData] = useState<CandleData[]>([]);
  const [volumeData, setVolumeData] = useState<VolumeData[]>([]);

  const candleWsRef = useRef<WebSocket | null>(null);
  const volumeWsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    openChartSocket(candleWsRef, selectedCode, setCandleData);
    openVolumeSocket(volumeWsRef, selectedCode, setVolumeData);
  }, []);

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
