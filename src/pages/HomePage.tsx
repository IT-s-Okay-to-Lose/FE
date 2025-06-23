import Header from "@/shared/components/molecules/Header";

import { News } from "@/features/news/ui/News";
import { StockChartBoard } from "@/features/stockChartBoard/ui/StockChartBoard";

import { MarketIndexSummary } from "@/features/marketIndexSummary/ui/MarketIndexSummary";
import Footer from "@/shared/components/molecules/Footer";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

function HomePage() {
  const isTabletOrAbove = useMediaQuery();

  async function login() {
    console.log("login");

    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
    // const result = await fetch(
    //   "https://iotl.store/oauth2/authorization/naver",
    //   {
    //     method: "GET",
    //     credentials: "include",
    //   }
    // );

    // const res = await result.json();
    // console.log(res);
  }

  if (!isTabletOrAbove) return <ScreenTooSmall />;

  return (
    <div className="w-full">
      <div className="mb-[90px]">
        <Header />
      </div>
      <div className="w-full m-auto flex justify-center mt-10 gap-[60px]">
        <StockChartBoard />
        <button onClick={login}>로그인</button>

        <div className="hidden laptop:flex laptop:flex-col laptop:gap-[50px]">
          <MarketIndexSummary />
          <News />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
