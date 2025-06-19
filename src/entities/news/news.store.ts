import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { News } from "./news.entity";

type NewsState = {
  newsList: News[];
  lastFetched: string | null;
};

interface NewsStore {
  setNews: (list: News[], fetchedTime: string) => void;
}

export const useNewsStore = create<NewsState & NewsStore>()(
  persist(
    (set) => ({
      newsList: [],
      lastFetched: null,
      setNews: (list, fetchedTime) =>
        set({ newsList: list, lastFetched: fetchedTime }),
    }),
    { name: "news-storage" }
  )
);
