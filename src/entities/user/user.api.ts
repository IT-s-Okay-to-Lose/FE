import { Method } from "@/shared/utils/fetcher";

export const user = {
  reissue: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/reissue`,
    method: Method.GET,
  }),
  test: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/test`,
    method: Method.GET,
  }),
  getMyAmount: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/charge`,
    method: Method.GET,
  }),
  getInvestmentSummary: (userId: number) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/dashboard/summary?userId=${userId}`,
    method: Method.GET,
  }),
  getHoldingRatio: (userId: number) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/dashboard/holding-ratio?userId=${userId}`,
    method: Method.GET,
  }),
  getRealizedSummary: (userId: number, year: number, month: number) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/dashboard/realized-summary?userId=${userId}&year=${year}&month=${month}`,
    method: Method.GET,
  }),
  getRealizedDetail: (userId: number, year: number, month: number) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/dashboard/realized-detail?userId=${userId}&year=${year}&month=${month}`,
    method: Method.GET,
  }),
  postCharge: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/charge`, // 임시 url
    method: Method.POST,
  }),
};
