import type { CandleData } from "@/entities/stock/stock.entity";
import { mockVolumeData } from "@/entities/stock/stock.mock";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import Chart2 from "@/shared/components/organisms/Chart2";

import { useEffect, useRef, useState } from "react";

const option = ["실시간", "1분", "5분", "1시간", "1일"];
function StockChart() {
  const [filterTab, setFilterTab] = useState(option[0]);

  const [candleData, setCandleData] = useState<CandleData[]>([]);
  // const [volumeData, setVolumeData] = useState<VolumeData[]>([]);

  const wsRef = useRef<WebSocket | null>(null);
  const selectedCode = "005930";

  useEffect(() => {
    const socket = new WebSocket("ws://10.10.0.142:8080/ws/chart");
    wsRef.current = socket;

    socket.onopen = () => {
      console.log("✅ WebSocket 연결됨");
      sendChartRequest(filterTab);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const candles = data.candle;

      if (
        Array.isArray(candles) &&
        candles.length === 5 &&
        typeof candles[0] === "string" &&
        typeof candles[1] === "number"
      ) {
        setCandleData((prev) => [...prev, candles as CandleData]);
      } else {
        console.warn("⚠️ 잘못된 candle 데이터", candles);
      }
    };

    return () => socket.close();
  }, []);

  function sendChartRequest(interval: string) {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      const payload = {
        codes: [selectedCode], // 원하는 종목코드
        interval: convertInterval(interval),
      };
      wsRef.current.send(JSON.stringify(payload));
    }
  }

  function convertInterval(tab: string): string {
    switch (tab) {
      case "1분":
        return "1m";
      case "5분":
        return "5m";
      case "1시간":
        return "1h";
      case "1일":
        return "1d";
      default:
        return "realtime";
    }
  }

  useEffect(() => {
    sendChartRequest(filterTab);
  }, [filterTab]);

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
          <Chart2 data={candleData} volumeData={mockVolumeData} />
        </div>
      </Card.Content>
    </Card>
  );
}

export default StockChart;
