import { mockUserInfo } from "@/entities/user/user.mock";
import { useUserStore } from "@/entities/user/user.store";
import LoginModal from "@/features/login/ui/LoginModal";
import URL from "@/shared/constants/URL";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Typography from "../atoms/Typography";

function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const isActive = (path: string) => pathname === path;

  const { isLoggedIn } = useUserStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="flex w-full max-w-[850px] laptop:max-w-[1150px] px-6 py-3 justify-between items-center">
          <Typography.SubTitle1>IT{"'"}s Okay to Lose</Typography.SubTitle1>

          <div className="flex gap-7 items-center">
            <Link to={URL.PAGE.HOME}>
              <Typography.SubTitle2
                className={
                  isActive(URL.PAGE.HOME) || isActive(URL.PAGE.DETAIL)
                    ? "font-bold"
                    : "font-normal"
                }
              >
                홈
              </Typography.SubTitle2>
            </Link>
            <Link to={URL.PAGE.DASHBOARD}>
              <Typography.SubTitle2
                className={
                  isActive(URL.PAGE.DASHBOARD) ? "font-bold" : "font-normal"
                }
              >
                대시보드
              </Typography.SubTitle2>
            </Link>
            <Link to={URL.PAGE.OVERVIEW}>
              <Typography.SubTitle2
                className={
                  isActive(URL.PAGE.OVERVIEW) ? "font-bold" : "font-normal"
                }
              >
                투자 모아보기
              </Typography.SubTitle2>
            </Link>
          </div>
          <div className="w-[160px] h-[40px] items-center flex justify-end">
            {isLoggedIn ? (
              <div className="w-[155px] flex justify-end">
                <div className="border w-[40px] h-[40px] rounded-full bg-otl-gray overflow-hidden">
                  <img src={mockUserInfo.imageUrl} />
                </div>
              </div>
            ) : (
              <div
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-1 rounded-sm bg-otl-main bg-opacity-20 transition-all hover:bg-opacity-30 "
              >
                <Typography.P1 className="cursor-pointer text-otl-main font-bold">
                  로그인
                </Typography.P1>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Header;
