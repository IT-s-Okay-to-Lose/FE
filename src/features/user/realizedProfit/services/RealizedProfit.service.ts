import type {
  RealizedDetail,
  RealizedSummary,
} from "@/entities/user/user.entity";
import { API_END_POINT } from "@/shared/constants/fetcher";

export async function getRealizedSummary(
  year: number,
  month: number
): Promise<RealizedSummary> {
  const userId = 1;

  const { url, method } = API_END_POINT.user.getRealizedSummary(
    userId,
    year,
    month
  );
  const result = await fetch(url, { method: method });

  return await result.json();
}

export async function getRealizedDetail(
  year: number,
  month: number
): Promise<RealizedDetail[]> {
  const userId = 1;

  const { url, method } = API_END_POINT.user.getRealizedDetail(
    userId,
    year,
    month
  );
  const result = await fetch(url, { method: method });

  return await result.json();
}
