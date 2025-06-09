import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Input from "@/shared/components/atoms/Input";
import Select from "@/shared/components/atoms/Select";
import Typography from "@/shared/components/atoms/Typography";
import Chart from "@/shared/components/molecules/Chart";
import Chart2 from "@/shared/components/molecules/Chart2";
import { candleData, candleData2, volumeData } from "@/shared/mock/chart.mock";

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
      <Chart2 data={candleData2} volumeData={volumeData} />
    </div>
  );
}

export default App;
