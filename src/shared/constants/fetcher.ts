import { market } from "@/entities/market/market.api";
import { news } from "@/entities/news/news.api";
import { stock } from "@/entities/stock/stock.api";
import { user } from "@/entities/user/user.api";

enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

type ApiEndpoint = {
  url: string;
  method: Method;
};

const API_END_POINT = {
  market,
  news,
  stock,
  user,
};

export { API_END_POINT, Method };
export type { ApiEndpoint };
