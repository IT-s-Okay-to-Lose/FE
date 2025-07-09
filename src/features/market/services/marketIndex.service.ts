import type {
  CombinedMarketIndex,
  ExchangeIndex,
  MarketIndex,
} from "@/entities/market/market.entity";
import { useMarketIndexStore } from "@/entities/market/market.store";

async function getKospiIndex(): Promise<MarketIndex> {
  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/auth/api/market-index/KOSPI`,
    { method: "GET" }
  );

  return await result.json();
}

async function getKosdaqIndex(): Promise<MarketIndex> {
  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/auth/api/market-index/KOSDAQ`,
    { method: "GET" }
  );

  return await result.json();
}

async function getExchangeIndex(): Promise<ExchangeIndex> {
  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/auth/api/exchange`,
    { method: "GET" }
  );

  return await result.json();
}

async function getMarketIndex(): Promise<CombinedMarketIndex> {
  const [kospi, kosdaq, exchange] = await Promise.all([
    getKospiIndex(),
    getKosdaqIndex(),
    getExchangeIndex(),
  ]);

  return {
    marketIndex: [kospi, kosdaq],
    exchangeIndex: exchange,
  };
}

export async function getMarketIndexWithCache(): Promise<CombinedMarketIndex> {
  const { marketIndex, exchangeIndex, lastFetched, setMarketData } =
    useMarketIndexStore.getState();
  const now = new Date();

  if (lastFetched) {
    const last = new Date(lastFetched);
    const diffMs = now.getTime() - last.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);

    if (diffHours < 24 && exchangeIndex) {
      return { marketIndex, exchangeIndex };
    }
  }

  const freshData = await getMarketIndex();
  setMarketData(
    freshData.marketIndex,
    freshData.exchangeIndex,
    now.toISOString()
  );

  return {
    marketIndex: freshData.marketIndex,
    exchangeIndex: freshData.exchangeIndex,
  };
}
