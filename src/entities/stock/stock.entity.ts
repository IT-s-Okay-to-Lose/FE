// [overview page] 내 모의투자 현황 주식
export interface StockPortfolio {
  imageUrl: string;
  name: string;
  stock_code: string;
  quantity: number;
  averagePrice: number;
  evaluatedPrice: number;
  fluctuationRate: number;
}

// ---------------------------------------------------------------
// [main page] 실시간 차트 주식
export interface Stock {
  stock_code: string; // 주식 종목 코드
  name: string; // 주식 종목 이름
  imageUrl: string; // 종목 사진
  currentPrice: number; // 현재가
  fluctuationRate: number; // 등락률 %
  accumulatedVolume: number; // 누적거래량
}

// [main page] 실시간 차트 주식 변하지 않는 메타데이터
export interface StaticStockMeta {
  stock_code: string; // 주식 종목 코드
  name: string; // 주식 종목 이름
  imageUrl: string; // 종목 사진
}

// [main page] 실시간 차트 주식 실시간으로 갱신되는 동적 데이터
export interface DynamicStockData {
  stock_code: string; // 주식 종목 코드
  currentPrice: number; // 현재가
  fluctuationRate: number; // 등락률 %
  accumulatedVolume: number; // 누적거래량
}

// ---------------------------------------------------------------
// [detail page] 주식 정보
export interface MarketStockInfo {
  stock_code: string; // 주식 종목 코드
  imageUrl: string; // 종목 사진
  name: string; // 주식 종목 이름
}

// [detail page] 주식 가격 정보
export interface MarketStockPriceInfo {
  currentPrice: number; // 현재가
  priceChange: number; // 전일 대비 가격 변화 금액
  fluctuationRate: number; // 전일 대비 등락률
}

// [detail page] 캔들 데이터: [시간, 시가, 고가, 저가, 종가]
export type CandleData = [string, number, number, number, number];

// [detail page] 거래량 데이터: [시간, 거래량]
export type VolumeData = [string, number];
