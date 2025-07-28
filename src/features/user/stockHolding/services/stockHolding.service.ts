import { API_END_POINT } from "@/shared/utils/fetcher";

export async function getStockHoldings(stockCode: string) {
  const { url, method } = API_END_POINT.stock.getStockHoldings(stockCode);
  const result = await fetch(url, { method: method, credentials: "include" });
  return await result.json();
}
