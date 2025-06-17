import InvestmentStatus from "@/features/investmentStatus/ui/InvestmentStatus";
import MyAmount from "@/features/myAmount/ui/MyAmount";
import ProfitGraph from "@/features/profitGraph/ui/ProfitGraph";
import UserInfo from "@/features/userInfo/ui/UserInfo";
import Footer from "@/shared/components/molecules/Footer";
import Header from "@/shared/components/molecules/Header";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

function OverviewPage() {
  const isTabletOrAbove = useMediaQuery();

  if (!isTabletOrAbove) return <ScreenTooSmall />;

  return (
    <div className="w-full">
      <div className="mb-8">
        <Header />
      </div>
      <div className="w-full m-auto flex flex-col items-center mt-10 gap-[60px]">
        <div className="w-full max-w-[1100px]">
          <UserInfo />
        </div>
        <div className="w-full max-w-[1100px] flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[60px]">
            <InvestmentStatus />
            <ProfitGraph />
          </div>
          <MyAmount />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OverviewPage;
