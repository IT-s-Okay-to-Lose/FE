import type {
  HoldingRatio,
  UserInvestmentSummary,
} from "@/entities/user/user.entity";

export async function getInvestmentSummary(): Promise<UserInvestmentSummary> {
  const userId = 1;

  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/api/dashboard/summary?userId=${userId}`,
    { method: "GET" }
  );

  return await result.json();
}

export async function getHoldingRatio(): Promise<HoldingRatio[]> {
  const userId = 1;

  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/api/dashboard/holding-ratio?userId=${userId}`,
    { method: "GET" }
  );

  return await result.json();
}
