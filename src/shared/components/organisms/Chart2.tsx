import type { CandleData, VolumeData } from "@/entities/stock/stock.entity";
import ReactECharts from "echarts-for-react";
import { useMemo } from "react";

interface CandleChartProps {
  candleData: CandleData[];
  volumeData: VolumeData[];
}

export default function Chart2({ candleData, volumeData }: CandleChartProps) {
  const [minTime, maxTime] = useMemo(() => {
    if (candleData.length === 0) {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000 * 24 * 60 * 7);
      return [oneHourAgo.toISOString(), now.toISOString()];
    }

    const lastTime = new Date(candleData[candleData.length - 1][0]); // 최신 캔들 시간
    const oneHourAgo = new Date(
      lastTime.getTime() - 60 * 60 * 1000 * 24 * 60 * 7
    );
    return [oneHourAgo.toISOString(), lastTime.toISOString()];
  }, [candleData]);

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" },
    },
    axisPointer: {
      link: [{ xAxisIndex: "all" }],
    },
    dataZoom: [
      {
        type: "inside",
        xAxisIndex: [0, 1],
        zoomLock: true,
        start: 80,
        end: 100,
      },
      {
        type: "slider",
        xAxisIndex: [0, 1],
        height: 20,
        bottom: 10,
        zoomLock: true,
        start: 80,
        end: 100,
      },
    ],
    xAxis: [
      {
        type: "time",
        scale: true,
        min: minTime,
        max: maxTime,
        axisLine: { onZero: false },
        splitLine: { show: false },
      },
      {
        type: "time",
        gridIndex: 1,
        scale: true,
        min: minTime,
        max: maxTime,
        axisLine: { onZero: false },
        splitLine: { show: false },
      },
    ],
    yAxis: [
      {
        scale: true,
        splitArea: { show: true },
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 3,
        axisLabel: {
          formatter: (val: number) => `${val}`,
        },
      },
    ],
    grid: [
      {
        left: "4%",
        right: "1%",
        height: "50%",
      },
      {
        left: "4%",
        right: "1%",
        top: "78%",
        height: "16%",
      },
    ],
    series: [
      {
        type: "candlestick",
        name: "가격",
        data: candleData.map(([time, open, high, low, close]) => [
          time,
          open,
          close,
          low,
          high,
        ]),
        itemStyle: {
          color: "#ff0000",
          color0: "#0000ff",
          borderColor: "#ff0000",
          borderColor0: "#0000ff",
        },
        barWidth: 8,
      },
      {
        type: "bar",
        name: "거래량",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: volumeData.map(([time, volume]) => [time, volume]),
        itemStyle: {
          color: "#808080",
        },
        barWidth: 8,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 450 }} />;
}
