import Header from "@/shared/components/molecules/Header";
import ScreenTooSmall from "@/shared/components/organisms/ScreenTooSmall";
import useMediaQuery from "@/shared/hooks/useMediaQuery";
import Typography from "@/shared/components/atoms/Typography";
import InvestmentInfo from "@/features/myInvestment/ui/InvestmentInfo";
import StockHolding from "@/features/myInvestment/ui/StockHolding";
import RealizedProfit from "@/features/realizedProfit/ui/RealizedProfit";
import Footer from "@/shared/components/molecules/Footer";

function DashboardPage() {
  const isTabletOrAbove = useMediaQuery();

  if (!isTabletOrAbove) return <ScreenTooSmall />;

  return (
    <div className="w-full">
      <div className="mb-8">
        <Header />
      </div>
      <div className="w-full flex flex-col items-center mt-10 gap-10">
        <Typography.Head1 className="w-full max-w-[1100px]">
          내 투자
        </Typography.Head1>
        <div className="w-full max-w-[1100px] flex gap-5">
          <div className="w-1/2 flex flex-col gap-10">
            <InvestmentInfo />
            <StockHolding />
          </div>
          <div className="w-1/2">
            <RealizedProfit />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
