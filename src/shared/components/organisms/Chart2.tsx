import ReactECharts from "echarts-for-react";
import { useMemo } from "react";

interface CandleChartProps {
  data: [string, number, number, number, number][];
  volumeData: [string, number][];
}

export default function Chart2({ data, volumeData }: CandleChartProps) {
  const [minTime, maxTime] = useMemo(() => {
    if (data.length === 0) {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 1 * 60 * 60 * 1000 * 24);
      return [oneHourAgo.toISOString(), now.toISOString()];
    }

    const lastTime = new Date(data[data.length - 1][0]); // 최신 캔들 시간
    const oneHourAgo = new Date(lastTime.getTime() - 1 * 60 * 60 * 1000 * 24);
    return [oneHourAgo.toISOString(), lastTime.toISOString()];
  }, [data]);

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" },
    },
    axisPointer: {
      link: [{ xAxisIndex: "all" }],
    },
    dataZoom: [
      { type: "inside", xAxisIndex: [0, 1] },
      {
        type: "slider",
        xAxisIndex: [0, 1],
        height: 20,
        bottom: 10,
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
        right: "0",
        height: "50%",
      },
      {
        left: "4%",
        right: "0",
        top: "78%",
        height: "16%",
      },
    ],
    series: [
      {
        type: "candlestick",
        name: "가격",
        data: data.map(([time, open, high, low, close]) => [
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
        barWidth: 5,
      },
      {
        type: "bar",
        name: "거래량",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data.map(([time, open, close], idx) => {
          const volume = volumeData[idx]?.[1] ?? 0;
          return {
            value: [time, volume],
            itemStyle: {
              color: close >= open ? "#ff0000" : "#0000ff",
            },
          };
        }),
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 450 }} />;
}
