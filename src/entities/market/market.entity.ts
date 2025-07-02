export interface MarketIndex {
  indexName: string; // 지수 이름 (예: 코스피, 코스닥)
  currentValue: number; // 현재 지수 값
  changeAmount: number; // 전일 대비 상승/하락한 값
  changeRate: number; // 전일 대비 등락률 (%)
}

export interface ExchangeIndex {
  rate: number; // 현재 지수 값
  difference: number; // 전일 대비 상승/하락한 값
  percent: number; // 전일 대비 등락률 (%)
}

// 코스피, 코스닥, 환율 병합
export interface CombinedMarketIndex {
  marketIndex: MarketIndex[];
  exchangeIndex: ExchangeIndex;
}
