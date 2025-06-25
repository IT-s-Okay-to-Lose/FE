import { useUserStore } from "@/entities/user/user.store";
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { isLoggedIn } = useUserStore();

  if (!isLoggedIn) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
