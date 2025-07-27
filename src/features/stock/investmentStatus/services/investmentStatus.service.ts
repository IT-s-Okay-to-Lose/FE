import type { StockPortfolio } from "@/entities/stock/stock.entity";
import { API_END_POINT } from "@/shared/utils/fetcher";

export async function getStockPortfolio(): Promise<StockPortfolio[]> {
  const { url, method } = API_END_POINT.user.getStockPortfolio();
  const result = await fetch(url, { method: method, credentials: "include" });
  const res = await result.json();

  return res.data;
}
