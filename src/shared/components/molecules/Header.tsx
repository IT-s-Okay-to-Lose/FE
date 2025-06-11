import URL from "@/shared/constants/URL";
import { Link, useLocation } from "react-router-dom";
import Typography from "../atoms/Typography";

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[850px] laptop:max-w-[1150px] px-6 py-3 justify-between items-center">
        <Typography.SubTitle1>IT{"'"}s Okay to Lose</Typography.SubTitle1>

        <div className="flex gap-7 items-center">
          <Link to={URL.HOME}>
            <Typography.SubTitle2
              className={
                isActive(URL.HOME) || isActive(URL.DETAIL)
                  ? "font-bold"
                  : "font-normal"
              }
            >
              홈
            </Typography.SubTitle2>
          </Link>
          <Link to={URL.DASHBOARD}>
            <Typography.SubTitle2
              className={isActive(URL.DASHBOARD) ? "font-bold" : "font-normal"}
            >
              대시보드
            </Typography.SubTitle2>
          </Link>
          <Link to={URL.OVERVIEW}>
            <Typography.SubTitle2
              className={isActive(URL.OVERVIEW) ? "font-bold" : "font-normal"}
            >
              투자 모아보기
            </Typography.SubTitle2>
          </Link>
        </div>

        <div className="w-[155px] flex justify-end">
          <div className="border w-[40px] h-[40px] rounded-full bg-otl-gray"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
