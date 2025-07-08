import ReactECharts from "echarts-for-react";
// import type { HoldingRatio } from "@/entities/user/user.entity";
// import { getHoldingRatio } from "../services/myInvestment.service";
// import { useState, useEffect } from "react";
import { mockHoldingRatio } from "@/entities/user/user.mock";

function PieChart() {
  // const [holdingRatio, setHoldingRatio] = useState<HoldingRatio[]>([]);

  // async function getHoldingFunction() {
  //   const result = await getHoldingRatio();
  //   setHoldingRatio(result);
  // }

  // useEffect(() => {
  //   getHoldingFunction();
  // }, []);

  const chartData = mockHoldingRatio.map((item) => ({
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
