// [overview page] 유저 정보
export interface UserInfo {
  name: string;
  profileImage: string;
  createdAt: Date; // ISO Date 객체
}

// [overview page] 유저 프로필 카드 옆 잔액, 수익률 데이터
export interface UserPortfolioSummary {
  totalAsset: number; //  250234750
  returnRate: number; // 120.8 (%)
}

// [overview page] 나의 금액
export interface UserBalanceSummary {
  availableAmount: number; // 주문 가능 금액
  investedAmount: number; // 현재 투자 중인 금액
}

// // [overview page] 최근 수익 그래프 데이터: [시간, 수익]
export type ProfitData = [string, number];

// ---------------------------------------------------------------

// 주문 타입: 구매 or 판매
export type OrderType = "BUY" | "SELL";

// 주문 상태: 대기 or 완료
export type OrderStatus = "PENDING" | "DONE";

// [detail page] 주문 엔티티
export interface OrderHistoryItem {
  orderId: number;
  createdAt: Date; // ISO Date 객체
  orderType: OrderType;
  quantity: number;
  price: number;
  status: OrderStatus;
  stockCode: string;
}

// [detail page] 내 주식 엔티티
export interface StockHoldings {
  totalPrice: number; // 총 금액
  quantity: number; // 수량
  charge: number; // 수수료
  totalProfit: number; // 총 수익
}

// ---------------------------------------------------------------
// [dashboard page] 대시보드 상단 원금, 총 수익, ROI
export interface UserInvestmentSummary {
  totalCash: number;
  totalProfit: number;
  roi: number;
}

// [dashboard page] 실현 수익 요약 데이터
export interface RealizedSummary {
  totalIncome: number;
  saleIncome: number;
  dividendIncome: number;
}

// [dashboard page] 실현 수익 상세 데이터
export interface RealizedItem {
  stockName: string;
  type: "판매수익" | "배당금";
  amount: number;
}

export interface RealizedDetail {
  date: string;
  items: RealizedItem[];
}

// [dashboard page] 보유 종목 파이 차트 데이터
export interface HoldingRatio {
  stockName: string;
  percent: number;
  color: string;
}
