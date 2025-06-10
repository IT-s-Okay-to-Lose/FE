import ReactECharts from "echarts-for-react";

interface CandleChartProps {
  data: [string, number, number, number, number][]; // time, open, close, low, high
  volumeData: [string, number][]; // time, volume
}

export default function Chart2({ data, volumeData }: CandleChartProps) {
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
      { type: "slider", xAxisIndex: [0, 1] },
    ],
    xAxis: [
      {
        type: "time",
        scale: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: "dataMin",
        max: "dataMax",
      },
      {
        type: "time",
        gridIndex: 1,
        scale: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: "dataMin",
        max: "dataMax",
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
        left: "10%",
        right: "8%",
        height: "60%",
      },
      {
        left: "10%",
        right: "8%",
        top: "72%",
        height: "16%",
      },
    ],
    series: [
      {
        type: "candlestick",
        name: "가격",
        data: data.map(([time, open, close, low, high]) => [
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
      },
      {
        type: "bar",
        name: "거래량",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data.map(([time, open, close], idx) => ({
          value: [time, volumeData[idx][1]],
          itemStyle: {
            color: close >= open ? "#ff0000" : "#0000ff",
          },
        })),
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 500, width: 400 }} />;
}
