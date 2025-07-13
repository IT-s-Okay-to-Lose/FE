import type {
  HoldingRatio,
  UserInvestmentSummary,
} from "@/entities/user/user.entity";
import { API_END_POINT } from "@/shared/utils/fetcher";

export async function getInvestmentSummary(): Promise<UserInvestmentSummary> {
  const { url, method } = API_END_POINT.user.getInvestmentSummary();
  const result = await fetch(url, { method: method, credentials: "include" });

  return await result.json();
}

export async function getHoldingRatio(): Promise<HoldingRatio[]> {
  const { url, method } = API_END_POINT.user.getHoldingRatio();
  const result = await fetch(url, { method: method, credentials: "include" });

  return await result.json();
}
