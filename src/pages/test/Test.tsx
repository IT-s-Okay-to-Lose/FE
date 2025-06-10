import { useState } from "react";

import Button from "@/shared/components/atoms/Button";
import Card from "@/shared/components/atoms/Card";
import Input from "@/shared/components/atoms/Input";
import Select from "@/shared/components/atoms/Select";
import Typography from "@/shared/components/atoms/Typography";
import BoxTab from "@/shared/components/molecules/BoxTab";
import RoundTab from "@/shared/components/molecules/RoundTab";

function Test() {
  const options = ["실시간", "1일", "1주"];
  const options2 = ["실시간", "1일"];
  const [tab1, setTab1] = useState<string>(options[0]);
  const [tab2, setTab2] = useState<string>(options[0]);

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
          <Button.Sub disabled>Main Disabled</Button.Sub>
        </div>
        <div>
          <Button.Round.Main>Round Main</Button.Round.Main>
          <Button.Round.Point>Round Main</Button.Round.Point>
          <Button.Round.Sub>Round Sub</Button.Round.Sub>
          <Button.Round.Main disabled>Round Disabled</Button.Round.Main>
        </div>
        <div>
          <Button.Small.Main>Small Main</Button.Small.Main>
          <Button.Small.Point>Small Main</Button.Small.Point>
          <Button.Small.Sub>Small Sub</Button.Small.Sub>
          <Button.Small.Main disabled>Small Disabled</Button.Small.Main>
        </div>
      </div>
      <Input placeholder="input" />

      <Select>
        <Select.Option key={1} value={"text"}>
          text
        </Select.Option>
      </Select>
      <div className="flex flex-col gap-4">
        <RoundTab.Default options={options} value={tab1} onChange={setTab1} />
        <RoundTab.Small options={options} value={tab2} onChange={setTab2} />
        <BoxTab.Default options={options} value={tab1} onChange={setTab1} />
        <BoxTab.Small options={options2} value={tab2} onChange={setTab2} />
        <BoxTab.Large options={options} value={tab2} onChange={setTab2} />
      </div>

      {/* <Chart data={candleData} width={700} height={400} />
      <Chart2 data={candleData2} volumeData={volumeData} /> */}
    </div>
  );
}

export default Test;
