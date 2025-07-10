import { Method } from "@/shared/utils/fetcher";

export const news = {
  getNews: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/auth/api/v1/news/top3`,
    method: Method.GET,
  }),
};
