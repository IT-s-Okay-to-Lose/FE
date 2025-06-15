import { mockStockHoldingData } from "@/entities/user/user.mock";
import ReactECharts from "echarts-for-react";

function PieChart() {
  const chartData = mockStockHoldingData.map((item) => ({
    name: item.stockName,
    value: item.percent,
    itemStyle: {
      color: item.color,
    },
  }));

  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "보유 종목 비율",
        type: "pie",
        radius: ["70%", "30%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "16",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: chartData,
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
  );
}

export default PieChart;
