import { Method } from "@/shared/constants/fetcher";

export const market = {
  getKospi: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/market-index/KOSPI`,
    method: Method.GET,
  }),
  getKosdaq: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/market-index/KOSDAQ`,
    method: Method.GET,
  }),
  getExchange: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/exchange`,
    method: Method.GET,
  }),
};
