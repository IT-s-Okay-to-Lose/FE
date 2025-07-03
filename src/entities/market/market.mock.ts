import type { MarketIndex } from "./market.entity";

export const mockMarketIndexData: MarketIndex[] = [
  {
    indexName: "코스피",
    currentValue: 2765.14,
    changeAmount: 66.17,
    changeRate: 2.5,
  },
  {
    indexName: "코스닥",
    currentValue: 920.37,
    changeAmount: -12.83,
    changeRate: -1.37,
  },
];
