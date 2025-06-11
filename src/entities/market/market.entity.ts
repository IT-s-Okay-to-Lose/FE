export interface MarketIndex {
  name: string; // 지수 이름 (예: 코스피, 나스닥, 환율)
  currentValue: number; // 현재 지수 값
  changeValue: number; // 전일 대비 상승/하락한 값
  changeRate: number; // 전일 대비 등락률 (%)
}
