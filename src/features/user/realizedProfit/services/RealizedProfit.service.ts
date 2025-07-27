import type {
  RealizedDetail,
  RealizedSummary,
} from "@/entities/user/user.entity";
import { API_END_POINT } from "@/shared/utils/fetcher";

export async function getRealizedSummary(
  year: number,
  month: number
): Promise<RealizedSummary> {
  const { url, method } = API_END_POINT.user.getRealizedSummary(year, month);
  const result = await fetch(url, { method: method, credentials: "include" });
  const res = await result.json();
  return res.data;
}

export async function getRealizedDetail(
  year: number,
  month: number
): Promise<RealizedDetail[]> {
  const { url, method } = API_END_POINT.user.getRealizedDetail(year, month);
  const result = await fetch(url, { method: method, credentials: "include" });

  const res = await result.json();
  return res.data;
}
