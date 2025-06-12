// 모의투자 보유 주식 정보
export interface StockPortfolio {
  id: number;
  name: string;
  quantity: number;
  averagePrice: number;
  evaluatedPrice: number;
  fluctuationRate: number;
}

// 실시간 차트에 쓰이는 시세 정보
export interface MarketStock {
  id: number;
  name: string;
  code: string;
  currentPrice: number;
  fluctuationRate: number;
  accumulatedVolume: number;
}

// 캔들 데이터: [시간, 시가, 고가, 저가, 종가]
export type CandleData = [string, number, number, number, number];

// 거래량 데이터: [시간, 거래량]
export type VolumeData = [string, number];
