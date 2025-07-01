import type { CandleData, VolumeData } from "@/entities/stock/stock.entity";
import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import Chart2 from "@/shared/components/organisms/Chart2";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const option = ["실시간", "1분", "5분", "1시간", "1일"];
function StockChart() {
  const [searchParams] = useSearchParams();
  const selectedCode = searchParams.get("stock_id");

  const [filterTab, setFilterTab] = useState(option[0]);

  const [candleData, setCandleData] = useState<CandleData[]>([]);
  const [volumeData, setVolumeData] = useState<VolumeData[]>([]);

  const candleWsRef = useRef<WebSocket | null>(null);
  const volumeWsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(`${import.meta.env.VITE_WS_API_URL}/ws/chart`);
    candleWsRef.current = socket;

    socket.onopen = () => {
      sendCandleChartRequest(filterTab);
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

  useEffect(() => {
    const volumeSocket = new WebSocket(
      `${import.meta.env.VITE_WS_API_URL}/ws/volume`
    );
    volumeWsRef.current = volumeSocket;

    volumeSocket.onopen = () => {
      sendVolumeChartRequest();
    };

    volumeSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const volumes = data.volume;

      if (
        Array.isArray(volumes) &&
        volumes.length === 2 &&
        typeof volumes[0] === "string" &&
        typeof volumes[1] === "number"
      ) {
        setVolumeData((prev) => [...prev, volumes as VolumeData]);
      } else {
        console.warn("⚠️ 잘못된 volume 데이터", volumes);
      }
    };

    return () => volumeSocket.close();
  }, []);

  function sendCandleChartRequest(interval: string) {
    if (candleWsRef.current?.readyState === WebSocket.OPEN) {
      const payload = {
        codes: [selectedCode], // 원하는 종목코드
        interval: convertInterval(interval),
      };
      candleWsRef.current.send(JSON.stringify(payload));
    }
  }

  function sendVolumeChartRequest() {
    if (volumeWsRef.current?.readyState === WebSocket.OPEN) {
      if (selectedCode) {
        volumeWsRef.current.send(selectedCode);
      }
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
    sendCandleChartRequest(filterTab);
    sendVolumeChartRequest();
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
          <Chart2 data={candleData} volumeData={volumeData} />
        </div>
      </Card.Content>
    </Card>
  );
}

export default StockChart;
