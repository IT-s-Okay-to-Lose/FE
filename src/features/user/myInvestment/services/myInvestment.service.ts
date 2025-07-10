import type {
  HoldingRatio,
  UserInvestmentSummary,
} from "@/entities/user/user.entity";
import { API_END_POINT } from "@/shared/utils/fetcher";

export async function getInvestmentSummary(): Promise<UserInvestmentSummary> {
  const userId = 1;

  const { url, method } = API_END_POINT.user.getInvestmentSummary(userId);
  const result = await fetch(url, { method: method });

  return await result.json();
}

export async function getHoldingRatio(): Promise<HoldingRatio[]> {
  const userId = 1;

  const { url, method } = API_END_POINT.user.getHoldingRatio(userId);
  const result = await fetch(url, { method: method });

  return await result.json();
}
