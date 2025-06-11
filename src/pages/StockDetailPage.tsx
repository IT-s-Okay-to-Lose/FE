import Card from "@/shared/components/atoms/Card";
import Typography from "@/shared/components/atoms/Typography";
import Header from "@/shared/components/molecules/Header";
import RoundTab from "@/shared/components/molecules/RoundTab";
import Chart2 from "@/shared/components/organisms/Chart2";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { mockCandleData2, mockVolumeData } from "@/shared/mock/chart.mock";
import { useState } from "react";

function StockDetailPage() {
  const isTabletOrAbove = useMediaQuery();
  const option = ["실시간", "1분", "5분", "1시간", "1일"];
  const [filter, setFilter] = useState<string>("실시간");

  if (!isTabletOrAbove) return <ScreenTooSmall />;

  return (
    <div className="w-full">
      <div className="mb-8">
        <Header />
      </div>
      <div className="w-full m-auto flex justify-center mt-10 gap-[60px]]">
        <div className="w-full max-w-[1100px] flex flex-col gap-4">
          <div>
            <Typography.Head2>삼성전자</Typography.Head2>
            <Typography.Head1 className="text-otl-stock-up">
              56,900원
            </Typography.Head1>
            <Typography.P1>
              전일 대비 <i className="bi bi-triangle-fill" /> 1,200원 (32%)
            </Typography.P1>
          </div>
          <Card>
            <Card.Header>
              <Typography.Head2>차트</Typography.Head2>
            </Card.Header>
            <Card.Content className="flex flex-col gap-4">
              <div className="w-full flex justify-end">
                <RoundTab.Small
                  options={option}
                  value={filter}
                  onChange={setFilter}
                />
              </div>
              <div className="border">
                <Chart2 data={mockCandleData2} volumeData={mockVolumeData} />
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default StockDetailPage;
