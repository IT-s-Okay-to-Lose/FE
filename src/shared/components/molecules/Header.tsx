import Typography from "../atoms/Typography";

function Header() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1500px] px-6 py-3 justify-between items-center">
        <Typography.SubTitle1>IT{"'"}s Okay to Lose</Typography.SubTitle1>

        <div className="flex gap-7 items-center ">
          <Typography.SubTitle2>홈</Typography.SubTitle2>
          <Typography.SubTitle2>대시보드</Typography.SubTitle2>
          <Typography.SubTitle2>투자 모아보기</Typography.SubTitle2>
        </div>
        <div className="w-[155px] flex justify-end">
          <div className="border w-[40px] h-[40px] rounded-full bg-otl-gray"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
