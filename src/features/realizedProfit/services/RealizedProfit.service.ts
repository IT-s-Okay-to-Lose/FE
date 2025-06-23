import type {
  RealizedDetail,
  RealizedSummary,
} from "@/entities/user/user.entity";

export async function getRealizedSummary(
  year: number,
  month: number
): Promise<RealizedSummary> {
  const userId = 1;

  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/dashboard/realized-summary?userId=${userId}&year=${year}&month=${month}`,
    { method: "GET" }
  );

  return await result.json();
}

export async function getRealizedDetail(
  year: number,
  month: number
): Promise<RealizedDetail[]> {
  const userId = 1;

  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/dashboard/realized-detail?userId=${userId}&year=${year}&month=${month}`,
    { method: "GET" }
  );

  return await result.json();
}
