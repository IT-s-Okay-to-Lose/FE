import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Input from "@/shared/components/atoms/Input";
import Select from "@/shared/components/atoms/Select";
import Typography from "@/shared/components/atoms/Typography";
import Chart from "@/shared/components/molecules/Chart";
import Chart2 from "@/shared/components/molecules/Chart2";
import type { CandlestickData } from "lightweight-charts";

export const candleData: CandlestickData[] = [
  { time: "2023-10-01", open: 100, high: 110, low: 95, close: 105 },
  { time: "2023-10-02", open: 105, high: 115, low: 100, close: 110 },
  { time: "2023-10-03", open: 110, high: 118, low: 108, close: 115 },
  { time: "2023-10-04", open: 115, high: 120, low: 112, close: 118 },
  { time: "2023-10-05", open: 118, high: 121, low: 110, close: 111 },
  { time: "2023-10-06", open: 111, high: 113, low: 105, close: 107 },
  { time: "2023-10-07", open: 107, high: 115, low: 106, close: 112 },
  { time: "2023-10-08", open: 112, high: 118, low: 110, close: 116 },
  { time: "2023-10-09", open: 116, high: 119, low: 113, close: 115 },
  { time: "2023-10-10", open: 115, high: 117, low: 111, close: 112 },
  { time: "2023-10-11", open: 112, high: 115, low: 108, close: 110 },
  { time: "2023-10-12", open: 110, high: 118, low: 109, close: 117 },
  { time: "2023-10-13", open: 117, high: 120, low: 113, close: 114 },
  { time: "2023-10-14", open: 114, high: 116, low: 110, close: 112 },
  { time: "2023-10-15", open: 112, high: 114, low: 106, close: 108 },
  { time: "2023-10-16", open: 108, high: 110, low: 100, close: 103 },
  { time: "2023-10-17", open: 103, high: 106, low: 99, close: 105 },
  { time: "2023-10-18", open: 105, high: 108, low: 101, close: 107 },
  { time: "2023-10-19", open: 107, high: 112, low: 104, close: 110 },
  { time: "2023-10-20", open: 110, high: 115, low: 109, close: 113 },
  { time: "2023-10-21", open: 113, high: 118, low: 112, close: 117 },
  { time: "2023-10-22", open: 117, high: 120, low: 114, close: 116 },
  { time: "2023-10-23", open: 116, high: 117, low: 110, close: 111 },
  { time: "2023-10-24", open: 111, high: 113, low: 105, close: 108 },
  { time: "2023-10-25", open: 108, high: 110, low: 102, close: 104 },
  { time: "2023-10-26", open: 104, high: 107, low: 99, close: 101 },
  { time: "2023-10-27", open: 101, high: 104, low: 97, close: 100 },
  { time: "2023-10-28", open: 100, high: 105, low: 98, close: 103 },
  { time: "2023-10-29", open: 103, high: 107, low: 100, close: 105 },
  { time: "2023-10-30", open: 105, high: 110, low: 104, close: 109 },
];

export const candleData2: [string, number, number, number, number][] = [
  ["2023-10-01T09:00:00", 101.55, 99.83, 99.29, 103.04],
  ["2023-10-01T09:05:00", 100.8, 98.24, 96.47, 101.65],
  ["2023-10-01T09:10:00", 100.04, 98.0, 96.37, 100.66],
  ["2023-10-01T09:15:00", 98.16, 97.16, 96.79, 99.62],
  ["2023-10-01T09:20:00", 96.62, 96.31, 96.04, 97.7],
  ["2023-10-01T09:25:00", 94.57, 96.53, 93.64, 97.1],
  ["2023-10-01T09:30:00", 94.99, 93.24, 92.39, 96.23],
  ["2023-10-01T09:35:00", 93.04, 95.19, 91.66, 95.23],
  ["2023-10-01T09:40:00", 96.51, 93.57, 92.89, 97.27],
  ["2023-10-01T09:45:00", 93.31, 90.4, 89.47, 94.56],
  ["2023-10-01T09:50:00", 89.82, 90.76, 88.28, 92.01],
  ["2023-10-01T09:55:00", 91.15, 89.64, 89.61, 92.66],
  ["2023-10-01T10:00:00", 88.08, 87.86, 86.36, 89.27],
  ["2023-10-01T10:05:00", 87.89, 90.41, 86.13, 92.41],
  ["2023-10-01T10:10:00", 91.94, 94.23, 90.32, 95.07],
  ["2023-10-01T10:15:00", 93.41, 92.71, 91.3, 95.2],
  ["2023-10-01T10:20:00", 92.07, 92.95, 91.48, 94.75],
  ["2023-10-01T10:25:00", 91.81, 94.22, 91.72, 95.34],
  ["2023-10-01T10:30:00", 94.87, 92.14, 90.16, 95.08],
  ["2023-10-01T10:35:00", 92.33, 94.17, 91.76, 94.28],
  ["2023-10-01T10:40:00", 94.53, 93.54, 93.02, 96.48],
  ["2023-10-01T10:45:00", 94.17, 96.61, 93.3, 96.97],
  ["2023-10-01T10:50:00", 97.81, 99.82, 96.34, 100.56],
  ["2023-10-01T10:55:00", 100.16, 100.19, 99.72, 100.36],
  ["2023-10-01T11:00:00", 99.68, 97.42, 97.39, 101.59],
  ["2023-10-01T11:05:00", 97.14, 95.82, 95.67, 99.04],
  ["2023-10-01T11:10:00", 97.43, 99.27, 96.53, 100.31],
  ["2023-10-01T11:15:00", 98.38, 98.73, 97.88, 100.23],
  ["2023-10-01T11:20:00", 99.15, 99.8, 97.2, 100.88],
  ["2023-10-01T11:25:00", 101.42, 100.1, 98.62, 103.25],
  ["2023-10-01T11:30:00", 101.63, 103.65, 99.85, 105.14],
  ["2023-10-01T11:35:00", 103.33, 105.74, 101.74, 106.09],
  ["2023-10-01T11:40:00", 105.22, 103.42, 102.78, 105.53],
  ["2023-10-01T11:45:00", 102.56, 101.23, 99.47, 103.49],
  ["2023-10-01T11:50:00", 100.76, 101.85, 99.21, 103.18],
  ["2023-10-01T11:55:00", 100.49, 100.12, 98.92, 102.35],
  ["2023-10-01T12:00:00", 101.46, 102.3, 99.87, 104.06],
  ["2023-10-01T12:05:00", 103.55, 103.81, 103.2, 104.87],
  ["2023-10-01T12:10:00", 102.72, 103.01, 102.42, 104.05],
  ["2023-10-01T12:15:00", 102.67, 100.61, 99.69, 102.68],
  ["2023-10-01T12:20:00", 101.81, 102.49, 101.05, 102.77],
  ["2023-10-01T12:25:00", 104.26, 105.45, 103.24, 106.24],
  ["2023-10-01T12:30:00", 104.41, 107.27, 102.7, 107.73],
  ["2023-10-01T12:35:00", 105.86, 107.63, 105.27, 108.56],
  ["2023-10-01T12:40:00", 107.16, 106.69, 105.3, 107.38],
  ["2023-10-01T12:45:00", 107.28, 105.87, 105.01, 108.79],
  ["2023-10-01T12:50:00", 103.93, 103.44, 101.89, 105.11],
  ["2023-10-01T12:55:00", 102.83, 102.89, 100.84, 103.13],
  ["2023-10-01T13:00:00", 104.01, 101.49, 100.64, 104.3],
  ["2023-10-01T13:05:00", 102.39, 104.55, 102.32, 105.42],
];

function App() {
  return (
    <div>
      <p>hello world!</p>
      <div className="flex flex-col gap-4">
        <Typography.Head1>Typography.Head1</Typography.Head1>
        <Typography.Head2>Typography.Head2</Typography.Head2>
        <Typography.Head3>Typography.Head3</Typography.Head3>
        <Typography.SubTitle1>Typography.SubTitle1</Typography.SubTitle1>
        <Typography.SubTitle2>Typography.SubTitle2</Typography.SubTitle2>
        <Typography.P1>Typography.P1</Typography.P1>
        <Typography.P2>Typography.P2</Typography.P2>
        <Typography.Caption>Typography.Caption</Typography.Caption>
        <Typography.Success>Typography.Success</Typography.Success>
        <Typography.Error>Typography.Error</Typography.Error>
      </div>
      <Card className="max-w-[400px]">
        <Card.Header className="mb-3">
          <Typography.Head3>Typography.Head3</Typography.Head3>
        </Card.Header>
        <Card.Content>
          <Typography.P1>Typography.P1</Typography.P1>
          <Typography.P1>Typography.P1</Typography.P1>
          <Typography.P1>Typography.P1</Typography.P1>
          <Typography.P1>Typography.P1</Typography.P1>
          <Typography.P1>Typography.P1</Typography.P1>
          <Typography.P1>Typography.P1</Typography.P1>
          <Typography.P1>Typography.P1</Typography.P1>
          <Typography.P1>Typography.P1</Typography.P1>
        </Card.Content>
      </Card>

      <div className="flex flex-col gap-3">
        <div>
          <Button.Main>Main</Button.Main>
          <Button.Point>Main Point</Button.Point>
          <Button.Sub>Sub</Button.Sub>
          <Button.Disabled>Main Disabled</Button.Disabled>
        </div>
        <div>
          <Button.Round.Main>Round Main</Button.Round.Main>
          <Button.Round.Point>Round Main</Button.Round.Point>
          <Button.Round.Sub>Round Sub</Button.Round.Sub>
          <Button.Round.Disabled>Round Disabled</Button.Round.Disabled>
        </div>
        <div>
          <Button.Small.Main>Small Main</Button.Small.Main>
          <Button.Small.Point>Small Main</Button.Small.Point>
          <Button.Small.Sub>Small Sub</Button.Small.Sub>
          <Button.Small.Disabled>Small Disabled</Button.Small.Disabled>
        </div>
      </div>
      <Input placeholder="input" />
      <Select>
        <Select.Option key={1} value={"text"}>
          text
        </Select.Option>
      </Select>
      <Chart data={candleData} width={700} height={400} />
      <Chart2 data={candleData2} />
    </div>
  );
}

export default App;
