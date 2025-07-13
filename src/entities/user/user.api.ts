import { Method } from "@/shared/utils/fetcher";

export const user = {
  getUserInfo: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/user/userinfo`,
    method: Method.GET,
  }),
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
  getInvestmentSummary: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/dashboard/summary`,
    method: Method.GET,
  }),
  getHoldingRatio: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/dashboard/holding-ratio`,
    method: Method.GET,
  }),
  getRealizedSummary: (year: number, month: number) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/dashboard/realized-summary?year=${year}&month=${month}`,
    method: Method.GET,
  }),
  getRealizedDetail: (year: number, month: number) => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/dashboard/realized-detail?year=${year}&month=${month}`,
    method: Method.GET,
  }),
  postCharge: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/accounts/deposit`,
    method: Method.POST,
  }),
};
