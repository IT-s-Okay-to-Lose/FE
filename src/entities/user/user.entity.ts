// 주문 타입: 구매 or 판매
export type OrderType = "buy" | "sell";

// 주문 상태: 대기 or 완료
export type OrderStatus = "대기" | "완료";

// 주문 엔티티
export interface OrderHistoryItem {
  date: Date; // ISO Date 객체
  type: OrderType;
  quantity: number;
  pricePerStock: number;
  status: OrderStatus;
}
