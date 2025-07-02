import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MarketIndex, ExchangeIndex } from "./market.entity";

type CombinedMarketIndex = {
  marketIndex: MarketIndex[];
  exchangeIndex: ExchangeIndex | null;
  lastFetched: string | null;
};

interface CombinedMarketIndexStore {
  setMarketData: (
    marketIndex: MarketIndex[],
    exchangeIndex: ExchangeIndex | null,
    fetchedTime: string
  ) => void;
}

export const useMarketIndexStore = create<
  CombinedMarketIndex & CombinedMarketIndexStore
>()(
  persist(
    (set) => ({
      marketIndex: [],
      exchangeIndex: null,
      lastFetched: null,
      setMarketData: (marketIndex, exchangeIndex, fetchedTime) =>
        set({
          marketIndex,
          exchangeIndex,
          lastFetched: fetchedTime,
        }),
    }),
    { name: "market-storage" }
  )
);
