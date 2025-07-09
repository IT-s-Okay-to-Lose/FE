import type { News } from "@/entities/news/news.entity";
import { useNewsStore } from "@/entities/news/news.store";
import { API_END_POINT } from "@/shared/constants/fetcher";

export async function getNews(): Promise<News[]> {
  const { url, method } = API_END_POINT.news.getNews();
  const result = await fetch(url, { method: method });

  return await result.json();
}

export async function getNewsWithCache(): Promise<News[]> {
  const { newsList, lastFetched, setNews } = useNewsStore.getState();
  const now = new Date();

  // 이전에 호출된 시간이 있는 경우
  if (lastFetched) {
    const last = new Date(lastFetched);
    const diffMs = now.getTime() - last.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);

    if (diffHours < 1) {
      return newsList;
    }
  }

  const freshNews = await getNews();
  setNews(freshNews, now.toISOString());
  return freshNews;
}
