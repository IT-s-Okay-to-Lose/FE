import type { JSX } from "react";
import cn from "@/shared/utils/cn";
import Icons from "@/asset/Icons";
import Typography from "@/shared/components/atoms/Typography";
import Card from "@/shared/components/atoms/Card";
import { loginRedirect } from "../service/login.service";

interface LoginModalProps {
  onClose: () => void;
}

interface SnsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  platform: "Kakao" | "Google" | "NAVER";
  icon: JSX.Element;
  bgColor: string;
  textColor: string;
}

function LoginModal({ onClose }: LoginModalProps) {
  function handleBackgroundClick(e: React.MouseEvent<HTMLDivElement>) {
    // 모달 바깥쪽 (배경) 클릭 시 닫기
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const onClickNaverLoginButton = async () => {
    window.location.href = "/";
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/50"
      onClick={handleBackgroundClick}
    >
      <Card className="w-[335px] h-[320px] bg-white gap-12 shadow-none">
        <Card.Header className="flex justify-between items-center">
          <Typography.Head3>로그인 하기</Typography.Head3>
          <button onClick={onClose}>
            <i className="bi bi-x-lg text-xl" />
          </button>
        </Card.Header>
        <Card.Content className="gap-[10px]">
          <SnsLoginButton
            platform="Kakao"
            icon={<Icons.Kakao />}
            bgColor="bg-kakao"
            textColor="text-black"
            onClick={loginRedirect}
          />
          <SnsLoginButton
            platform="NAVER"
            icon={<Icons.Naver />}
            bgColor="bg-naver"
            textColor="text-white"
            onClick={onClickNaverLoginButton}
          />
          {/* <SnsLoginButton
            platform="Google"
            icon={<Icons.Google />}
            bgColor="bg-white"
            textColor="text-black"
            onClick={onClickGoogleLoginButton}
          /> */}
        </Card.Content>
      </Card>
    </div>
  );
}

const SnsLoginButton = ({
  platform,
  icon,
  bgColor,
  textColor,
  onClick,
}: SnsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        bgColor,
        "flex w-full items-center justify-center gap-[10px] rounded-lg py-[10px]",
        platform === "Google" && "border border-gray-300"
      )}
    >
      {icon}
      <Typography.P2 className={`font-semibold ${textColor}`}>
        {platform} 로그인
      </Typography.P2>
    </button>
  );
};

export default LoginModal;
