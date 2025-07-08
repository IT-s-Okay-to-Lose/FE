import type {
  StaticStockMeta,
  DynamicStockData,
} from "@/entities/stock/stock.entity";

async function getStaticStocks(): Promise<StaticStockMeta[]> {
  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/api/stocks/meta`,
    { method: "GET" }
  );

  return await result.json();
}

async function getDynamicStocks(query: string): Promise<DynamicStockData[]> {
  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/api/stocks/dynamic?${query}`,
    { method: "GET" }
  );

  return await result.json();
}

// 정적 + 동적 주식 데이터를 병합 & 정렬하여 반환하는 함수
export async function getMergedStock() {
  const staticResult = await getStaticStocks();

  const initialCodes = staticResult.slice(0, 30).map((s) => s.code);
  const query = initialCodes.map((code) => `codes=${code}`).join("&");

  const dynamicResult = await getDynamicStocks(query);
  console.log("dynamicResult", dynamicResult);

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
