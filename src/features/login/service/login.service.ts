import { useUserStore } from "@/entities/user/user.store";
import URL from "@/shared/constants/URL";

export async function reissue() {
  const result = await fetch(`${import.meta.env.VITE_APP_API_URL}/reissue`, {
    method: "GET",
    credentials: "include",
  });

  return result;
}

export async function test() {
  const result = await fetch(`${import.meta.env.VITE_APP_API_URL}/test`, {
    method: "GET",
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
