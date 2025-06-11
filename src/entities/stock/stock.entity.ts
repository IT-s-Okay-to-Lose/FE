export interface StockRow {
  name: string; // 종목 이름
  quantity: number; // 보유 수량
  averagePrice: number; // 매수금액
  evaluatedPrice: number; // 평가금액
  fluctuationRate: number; // 등락률 (예: 5.21)
}
