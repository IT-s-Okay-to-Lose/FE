import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect } from "react";
import { login } from "@/features/login/service/login.service";

function App() {
  useEffect(() => {
    login(); // 로그인 상태 복구
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
