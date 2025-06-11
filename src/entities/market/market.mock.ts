import type { MarketIndex } from "./market.entity";

export const mockMarketIndexData: MarketIndex[] = [
  {
    name: "코스피",
    currentValue: 2765.14,
    changeValue: 66.17,
    changeRate: 2.5,
  },
  {
    name: "코스닥",
    currentValue: 920.37,
    changeValue: -12.83,
    changeRate: -1.37,
  },
  {
    name: "USD/KRW",
    currentValue: 1375.6,
    changeValue: 5.1,
    changeRate: 0.37,
  },
];
