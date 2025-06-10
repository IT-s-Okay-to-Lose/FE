import Typography from "@/shared/components/atoms/Typography";
import Header from "@/shared/components/molecules/Header";
import useMediaQuery from "@/shared/hooks/useMediaQuery";

function DashboardPage() {
  const isTabletOrAbove = useMediaQuery("(min-width: 850px)");

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
      <div className="w-full m-auto flex justify-center mt-10 gap-[60px]">
        <p>content</p>
      </div>
    </div>
  );
}

export default DashboardPage;
