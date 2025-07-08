import Typography from "@/shared/components/atoms/Typography";
import RoundTab from "@/shared/components/molecules/RoundTab";
import { mockProfitData } from "@/entities/user/user.mock";

import { useState } from "react";
import ReactECharts from "echarts-for-react";

interface LineGraphProps {
  data: [string, number][]; // date, profit
}

function ProfitGraph() {
  const filteringList = ["1주", "1달", "3달", "1년"];
  const [filterTab, setFilterTab] = useState(filteringList[0]);

  return (
    <div>
      <Typography.Head1>최근 수익 그래프</Typography.Head1>
      <Typography.Head2>40,243,000원</Typography.Head2>
      <div className="flex flex-col gap-[15px]">
        <LineGraph data={mockProfitData} />
        <RoundTab.Small
          options={filteringList}
          value={filterTab}
          onChange={setFilterTab}
        />
      </div>
    </div>
  );
}

export default ProfitGraph;

function LineGraph({ data }: LineGraphProps) {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { link: [{ xAxisIndex: "all" }] },
    },
    xAxis: {
      type: "time",
      scale: true,
      min: "dataMin",
      max: "dataMax",
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: number) => `${value.toLocaleString()}원`,
      },
    },
    series: [
      {
        type: "line",
        name: "수익",
        data: data.map(([time, profit]) => [time, profit]),
        areaStyle: {
          color: "rgba(0, 128, 255, 0.2)",
        },
        lineStyle: {
          color: "#398DEE",
        },
        symbol: "circle",
        symbolSize: 5,
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
  };

  return (
    <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />
  );
}
