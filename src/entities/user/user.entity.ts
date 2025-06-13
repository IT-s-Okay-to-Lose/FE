// 기본 유저 정보
export interface UserInfo {
  name: string;
  imageUrl: string;
  joinDate: Date; // ISO Date 객체
}

// 유저 프로필 카드 옆 잔액, 수익률 데이터
export interface UserPortfolioSummary {
  totalAsset: number; //  250234750
  returnRate: number; // 120.8 (%)
}

export interface UserBalanceSummary {
  availableAmount: number; // 주문 가능 금액
  investedAmount: number; // 현재 투자 중인 금액
}

// 주문 타입: 구매 or 판매
export type OrderType = "buy" | "sell";

// 주문 상태: 대기 or 완료
export type OrderStatus = "대기" | "완료";

// 주문 엔티티
export interface OrderHistoryItem {
  id: number;
  date: Date; // ISO Date 객체
  type: OrderType;
  quantity: number;
  pricePerStock: number;
  status: OrderStatus;
}
