import type { OrderHistoryItem } from "./user.entity";

export const mockPendingOrderData: OrderHistoryItem[] = [
  {
    date: new Date("2025-04-25T11:30:00"),
    type: "sell",
    quantity: 50,
    pricePerStock: 13000,
    status: "대기",
  },
  {
    date: new Date("2025-04-27T08:45:00"),
    type: "buy",
    quantity: 30,
    pricePerStock: 15000,
    status: "대기",
  },
];

export const mockCompletedOrderData: OrderHistoryItem[] = [
  {
    date: new Date("2025-04-24T10:00:00"),
    type: "buy",
    quantity: 100,
    pricePerStock: 12000,
    status: "완료",
  },
  {
    date: new Date("2025-04-26T09:15:00"),
    type: "buy",
    quantity: 20,
    pricePerStock: 10000,
    status: "완료",
  },
  {
    date: new Date("2025-04-26T14:50:00"),
    type: "sell",
    quantity: 80,
    pricePerStock: 14000,
    status: "완료",
  },
];
