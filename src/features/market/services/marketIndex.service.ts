import type {
  CombinedMarketIndex,
  ExchangeIndex,
  MarketIndex,
} from "@/entities/market/market.entity";
import { useMarketIndexStore } from "@/entities/market/market.store";
import { API_END_POINT } from "@/shared/constants/fetcher";

async function getKospiIndex(): Promise<MarketIndex> {
  const { url, method } = API_END_POINT.market.getKospi();
  const result = await fetch(url, { method: method });

  return await result.json();
}

async function getKosdaqIndex(): Promise<MarketIndex> {
  const { url, method } = API_END_POINT.market.getKosdaq();
  const result = await fetch(url, { method: method });

  return await result.json();
}

async function getExchangeIndex(): Promise<ExchangeIndex> {
  const { url, method } = API_END_POINT.market.getExchange();
  const result = await fetch(url, { method: method });

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
