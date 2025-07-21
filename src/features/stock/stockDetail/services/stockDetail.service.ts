import type { MarketStockMeta } from "@/entities/stock/stock.entity";
import { API_END_POINT } from "@/shared/utils/fetcher";

export async function getStockMeta(
  selectedCode: string
): Promise<MarketStockMeta> {
  const { url, method } = API_END_POINT.stock.getStockMeta(selectedCode);
  const result = await fetch(url, { method: method });
  const res = await result.json();
  return res.data;
}
