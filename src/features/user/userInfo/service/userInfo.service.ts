import type { UserInfo } from "@/entities/user/user.entity";
import { API_END_POINT } from "@/shared/utils/fetcher";

export async function getUserInfo(): Promise<UserInfo> {
  const { url, method } = API_END_POINT.user.getUserInfo();
  const result = await fetch(url, {
    method: method,
    credentials: "include",
  });

  return await result.json();
}
