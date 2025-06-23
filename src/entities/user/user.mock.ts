import type {
  HoldingRatio,
  OrderHistoryItem,
  ProfitData,
  RealizedDetail,
  RealizedSummary,
  UserBalanceSummary,
  UserInfo,
  UserInvestmentSummary,
  UserPortfolioSummary,
} from "./user.entity";

// [overview page] 유저 정보
export const mockUserInfo: UserInfo = {
  name: "강민재",
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/blog-2b12b.appspot.com/o/profile_sponge.png?alt=media&token=63e9e64d-3c8f-4ee7-9b75-18095ca6af16",
  joinDate: new Date("2025-04-25T11:30:00"),
};

// [overview page] 유저 프로필 카드 옆 잔액, 수익률 데이터
export const mockUserPortfolioSummary: UserPortfolioSummary = {
  totalAsset: 250234750,
  returnRate: -120.8,
};

// [overview page] 나의 금액
export const mockUserBalanceSummary: UserBalanceSummary = {
  availableAmount: 20000000,
  investedAmount: 350000,
};

// [overview page] 최근 수익 그래프 목데이터
export const mockProfitData: ProfitData[] = [
  ["2023-10-01T09:00:00", 12000],
  ["2023-10-01T09:05:00", 79009],
  ["2023-10-01T09:10:00", 32501],
  ["2023-10-01T09:15:00", 17807],
  ["2023-10-01T09:20:00", 67802],
  ["2023-10-01T09:25:00", -8936],
  ["2023-10-01T09:30:00", 16407],
  ["2023-10-01T09:35:00", -5033],
  ["2023-10-01T09:40:00", 61320],
  ["2023-10-01T09:45:00", 20980],
  ["2023-10-01T09:50:00", 49408],
  ["2023-10-01T09:55:00", 91007],
];

// ---------------------------------------------------------------
// [detail page] 주문 내역: 대기 주문 리스트
export const mockPendingOrderData: OrderHistoryItem[] = [
  {
    id: 1,
    date: new Date("2025-04-25T11:30:00"),
    type: "판매",
    quantity: 50,
    pricePerStock: 13000,
    status: "대기",
  },
  {
    id: 2,
    date: new Date("2025-04-27T08:45:00"),
    type: "구매",
    quantity: 30,
    pricePerStock: 15000,
    status: "대기",
  },
];

// [detail page] 주문 내역: 완료 주문 리스트
export const mockCompletedOrderData: OrderHistoryItem[] = [
  {
    id: 3,
    date: new Date("2025-04-24T10:00:00"),
    type: "구매",
    quantity: 100,
    pricePerStock: 12000,
    status: "완료",
  },
  {
    id: 4,
    date: new Date("2025-04-26T09:15:00"),
    type: "구매",
    quantity: 20,
    pricePerStock: 10000,
    status: "완료",
  },
  {
    id: 5,
    date: new Date("2025-04-26T14:50:00"),
    type: "판매",
    quantity: 80,
    pricePerStock: 14000,
    status: "완료",
  },
];

// [detail page] 내 주식 엔티티
export const mockMyStockData = {
  totalAmount: 538000,
  quantity: 100,
  charge: 164,
  totalProfit: -19243,
};

// ---------------------------------------------------------------
// [dashboard page] 대시보드 상단 원금, 총 수익, ROI
export const mockUserInvestmentSummary: UserInvestmentSummary = {
  totalCash: 10000000000,
  totalProfit: 2000000,
  roi: 7.41,
};

// [dashboard page] 실현 수익 요약 데이터
export const mockRealizedProfitSummary: RealizedSummary = {
  totalIncome: 50000,
  dividendIncome: 25000,
  saleIncome: 25000,
};

// [dashboard page] 실현 수익 상세 데이터
export const mockRealizedProfitDetail: RealizedDetail[] = [
  {
    date: "2025-06-28",
    items: [
      {
        stockName: "삼성전자",
        type: "판매수익",
        amount: 14200,
      },
      {
        stockName: "삼성전자",
        type: "배당금",
        amount: 5000,
      },
    ],
  },
  {
    date: "2025-06-28",
    items: [
      {
        stockName: "하이닉스",
        type: "판매수익",
        amount: 20000,
      },
      {
        stockName: "삼성전자",
        type: "배당금",
        amount: 3000,
      },
    ],
  },
];

// [dashboard page] 보유 종목 파이 차트 데이터
export const mockStockHoldingData: HoldingRatio[] = [
  {
    stockName: "엔비디아",
    percent: 48.8,
    color: "#FF6384",
  },
  {
    stockName: "삼성전자",
    percent: 30.2,
    color: "#36A2EB",
  },
  {
    stockName: "하이닉스",
    percent: 21,
    color: "#FFCE56",
  },
];
