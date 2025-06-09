import ReactECharts from "echarts-for-react";

interface CandleChartProps {
  data: [string, number, number, number, number][];
}

export default function Chart2({ data }: CandleChartProps) {
  const option = {
    title: { text: "5분 봉 캔들 차트", left: 0 },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" },
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
      axisLabel: {
        formatter: (value: number) => {
          const date = new Date(value);
          return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
        },
      },
    },
    yAxis: {
      type: "value",
      scale: true,
    },
    dataZoom: [
      { type: "slider", xAxisIndex: 0 },
      { type: "inside", xAxisIndex: 0 },
    ],
    series: [
      {
        type: "candlestick",
        data: data.map(([time, open, close, low, high]) => ({
          name: time,
          value: [time, open, close, low, high],
        })),
        itemStyle: {
          color: "#ef5350", // 하락
          color0: "#26a69a", // 상승
          borderColor: "#ef5350",
          borderColor0: "#26a69a",
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
}
