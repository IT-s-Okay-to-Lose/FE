import {
  CandlestickSeries,
  createChart,
  CrosshairMode, // 타입도 가져옴
  type CandlestickData,
} from "lightweight-charts";
import { useEffect, useRef } from "react";

interface CandleChartProps {
  data: CandlestickData[];
  width?: number;
  height?: number;
}

export default function Chart({
  data,
  width = 600,
  height = 400,
}: CandleChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = createChart(chartRef.current, {
      width,
      height,
      layout: { background: { color: "#fff" }, textColor: "#000" },
      crosshair: { mode: CrosshairMode.Normal },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      timeScale: {
        borderColor: "#ccc",
      },
    });

    // ✅ addSeries 방식으로 시리즈 생성
    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
      borderVisible: false,
    });

    candleSeries.setData(data);

    return () => chart.remove();
  }, [data, width, height]);

  return <div ref={chartRef} />;
}
