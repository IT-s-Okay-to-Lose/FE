import { API_END_POINT } from "@/shared/utils/fetcher";

interface PostStockOrderResponse {
  orderId: number;
  stockCode: string;
  orderType: "BUY" | "SELL";
  orderPrice: number;
  quantity: number;
  status: "PENDING" | "COMPLETED" | "CANCELED" | "PARTIAL";
  createdAt: string;
}

interface OrderHistoryResponse {
  orderId: number;
  orderType: "BUY" | "SELL";
  stockCode: string;
  quantity: number;
  price: number;
  status: "PENDING" | "DONE";
  createdAt: string;
}

export async function postStockOrder(
  stockCode: string,
  orderType: "BUY" | "SELL",
  quantity: number,
  price: number
): Promise<PostStockOrderResponse> {
  const { url, method } = API_END_POINT.stock.postStockOrder();
  const result = await fetch(url, {
    method: method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stockCode,
      orderType,
      quantity,
      price,
    }),
  });

  return await result.json();
}

export async function orderHistory(
  stockCode: string
): Promise<OrderHistoryResponse> {
  const { url, method } = API_END_POINT.stock.getOrderHistory(stockCode);
  const result = await fetch(url, { method: method });
  const res = await result.json();
  return res.data;
}
