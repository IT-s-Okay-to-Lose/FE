import { useUserStore } from "@/entities/user/user.store";
import { API_END_POINT } from "@/shared/constants/fetcher";
import URL from "@/shared/constants/URL";

export async function reissue() {
  const { url, method } = API_END_POINT.user.reissue();
  const result = await fetch(url, {
    method: method,
    credentials: "include",
  });

  return result;
}

export async function test() {
  const { url, method } = API_END_POINT.user.test();
  const result = await fetch(url, {
    method: method,
    credentials: "include",
  });

  return await result.json();
}

export function loginRedirect(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  localStorage.setItem("login", "true");
  window.location.href = URL.LOGIN.KAKAO;
}

export async function login(): Promise<boolean> {
  if (localStorage.getItem("login") === "true") {
    await reissue();
    useUserStore.getState().setLoggedIn(true);
    localStorage.removeItem("login");
    return true;
  }
  return false;
}
