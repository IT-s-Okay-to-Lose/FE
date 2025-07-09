import type { News } from "@/entities/news/news.entity";
import { useNewsStore } from "@/entities/news/news.store";

export async function getNews(): Promise<News[]> {
  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/auth/api/v1/news/top3`,
    { method: "GET" }
  );

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
