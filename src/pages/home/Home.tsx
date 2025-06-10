import Typography from "@/shared/components/atoms/Typography";
import BoxTab from "@/shared/components/molecules/BoxTab";
import Header from "@/shared/components/molecules/Header";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { useState } from "react";
import StockChartBoard from "./ui/StockChartBoard";

function Home() {
  const isTabletOrAbove = useMediaQuery("(min-width: 768px)");

  const categoryList = ["전체", "국내", "해외"];
  const [category, setCategory] = useState<string>("전체");

  if (!isTabletOrAbove) {
    return (
      <div className="w-full flex justify-center items-center">
        <Typography.Head2>더 큰 화면에서 </Typography.Head2>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="mb-8">
        <Header />
      </div>
      <div className="w-full m-auto flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <BoxTab.Large
            options={categoryList}
            value={category}
            onChange={setCategory}
          />
          <StockChartBoard />
        </div>
      </div>
    </div>
  );
}

export default Home;
