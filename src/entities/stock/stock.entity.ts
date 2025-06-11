// 모의투자 보유 주식 정보
export interface StockPortfolio {
  name: string;
  quantity: number;
  averagePrice: number;
  evaluatedPrice: number;
  fluctuationRate: number;
}

// 실시간 차트에 쓰이는 시세 정보s
export interface MarketStock {
  name: string;
  currentPrice: number;
  fluctuationRate: number;
  accumulatedVolume: number;
}
