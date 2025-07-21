import { Method } from "@/shared/utils/fetcher";

export const stock = {
  getStaticStocks: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/stocks/meta`,
    method: Method.GET,
  }),
  getDynamicStocks: (query: string) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/stocks/dynamic?${query}`,
    method: Method.GET,
  }),
  getCandleData: () => ({
    url: `${import.meta.env.VITE_WS_API_URL}/auth/ws/chart`,
  }),
  getVolumeData: () => ({
    url: `${import.meta.env.VITE_WS_API_URL}/auth/ws/volume`,
  }),
  getPrevCandleData: (selectedCode: string) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/stocks/${selectedCode}/candle`,
    method: Method.GET,
  }),
  getPrevVolumeData: (selectedCode: string) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/stocks/${selectedCode}/volume`,
    method: Method.GET,
  }),
  postStockOrder: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/orders`,
    method: Method.POST,
  }),
  getOrderHistory: (stockCode: string) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/orders/history?stockCode=${stockCode}`,
    method: Method.GET,
  }),
  getStockMeta: (selectedCode: string) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/stocks/${selectedCode}/meta`,
    method: Method.GET,
  }),
  getMarketInfo: (selectedCode: string) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/stocks/${selectedCode}/marketinfo`,
    method: Method.GET,
  }),
};
