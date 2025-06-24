import Header from "@/shared/components/molecules/Header";

import { News } from "@/features/news/ui/News";
import { StockChartBoard } from "@/features/stockChartBoard/ui/StockChartBoard";

import reissue from "@/features/login/service/login.service";
import { MarketIndexSummary } from "@/features/marketIndexSummary/ui/MarketIndexSummary";
import Footer from "@/shared/components/molecules/Footer";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import URL from "@/shared/constants/URL";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import { useEffect } from "react";

function HomePage() {
  const isTabletOrAbove = useMediaQuery();

  function login(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    localStorage.setItem("login", "true");
    window.location.href = URL.LOGIN.KAKAO;
  }

  useEffect(() => {
    if (localStorage.getItem("login") == "true") {
      reissue();
      localStorage.removeItem("login");
    }
  }, []);

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
