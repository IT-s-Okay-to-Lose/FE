import type {
  OrderHistoryItem,
  UserBalanceSummary,
  UserInfo,
  UserPortfolioSummary,
} from "./user.entity";

export const mockUserInfo: UserInfo = {
  name: "강민재",
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/blog-2b12b.appspot.com/o/profile_sponge.png?alt=media&token=63e9e64d-3c8f-4ee7-9b75-18095ca6af16",
  joinDate: new Date("2025-04-25T11:30:00"),
};

export const mockUserPortfolioSummary: UserPortfolioSummary = {
  totalAsset: 250234750,
  returnRate: -120.8,
};

export const mockUserBalanceSummary: UserBalanceSummary = {
  availableAmount: 20000000,
  investedAmount: 350000,
};

export const mockPendingOrderData: OrderHistoryItem[] = [
  {
    id: 1,
    date: new Date("2025-04-25T11:30:00"),
    type: "sell",
    quantity: 50,
    pricePerStock: 13000,
    status: "대기",
  },
  {
    id: 2,
    date: new Date("2025-04-27T08:45:00"),
    type: "buy",
    quantity: 30,
    pricePerStock: 15000,
    status: "대기",
  },
];

export const mockCompletedOrderData: OrderHistoryItem[] = [
  {
    id: 3,
    date: new Date("2025-04-24T10:00:00"),
    type: "buy",
    quantity: 100,
    pricePerStock: 12000,
    status: "완료",
  },
  {
    id: 4,
    date: new Date("2025-04-26T09:15:00"),
    type: "buy",
    quantity: 20,
    pricePerStock: 10000,
    status: "완료",
  },
  {
    id: 5,
    date: new Date("2025-04-26T14:50:00"),
    type: "sell",
    quantity: 80,
    pricePerStock: 14000,
    status: "완료",
  },
];
