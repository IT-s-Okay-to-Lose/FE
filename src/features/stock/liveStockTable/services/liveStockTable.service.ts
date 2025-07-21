import type {
  DynamicStockData,
  StaticStockMeta,
} from "@/entities/stock/stock.entity";
import { API_END_POINT } from "@/shared/utils/fetcher";

async function getStaticStocks(): Promise<StaticStockMeta[]> {
  const { url, method } = API_END_POINT.stock.getStaticStocks();
  const result = await fetch(url, { method: method });
  const res = await result.json();
  return res.data;
}

async function getDynamicStocks(query: string): Promise<DynamicStockData[]> {
  const { url, method } = API_END_POINT.stock.getDynamicStocks(query);
  const result = await fetch(url, { method: method });
  const res = await result.json();

  return res.data;
}

// 정적 + 동적 주식 데이터를 병합 & 정렬하여 반환하는 함수
export async function getMergedStock() {
  const staticResult = await getStaticStocks();

  const initialCodes = staticResult.slice(0, 30).map((s) => s.code);
  const query = initialCodes.map((code) => `codes=${code}`).join("&");

  const dynamicResult = await getDynamicStocks(query);

  const dynamicMap = new Map<string, DynamicStockData>(
    dynamicResult.map((d) => [d.code, d])
  );

  const merged = staticResult
    .filter((meta) => dynamicMap.has(meta.code))
    .map((meta) => ({
      ...meta,
      ...dynamicMap.get(meta.code)!,
    }));

  // 누적거래량을 기준으로 내림차순 정렬
  return merged.sort((a, b) => b.accumulatedVolume - a.accumulatedVolume);
}
