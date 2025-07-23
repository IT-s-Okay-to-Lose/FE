import { API_END_POINT } from "@/shared/utils/fetcher";

export async function getOrderHistory(stockCode: string) {
  const { url, method } = API_END_POINT.stock.getOrderHistory(stockCode);
  const result = await fetch(url, { method: method, credentials: "include" });
  return await result.json();
}
