import type { News } from "@/entities/news/news.entity";
import { useNewsStore } from "@/entities/news/news.store";
import Typography from "@/shared/components/atoms/Typography";
import { useEffect, useState } from "react";
import { getNewsWithCache } from "../services/news.service";

export function News() {
  const [news, setNews] = useState<News[]>([]);
  const lastFetched = useNewsStore((state) => state.lastFetched);

  async function getNewsFunction() {
    const result = await getNewsWithCache();
    console.log(result);
    setNews(result);
  }

  const formattedTime = lastFetched
    ? new Date(lastFetched).toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  useEffect(() => {
    getNewsFunction();
  }, []);

  return (
    <div className="w-[245px] h-[250px]">
      <Typography.Head2 className="w-full text-right mb-3">
        주요 뉴스
      </Typography.Head2>
      <div className="flex flex-col gap-3">
        {news.length > 0 ? (
          news.map((news) => (
            <NewsRow
              key={news.id}
              id={news.id}
              title={news.title}
              press={news.press}
            />
          ))
        ) : (
          <Typography.P1 className="text-right">
            현재 제공되는 뉴스가 없습니다!
          </Typography.P1>
        )}
        <Typography.P2 className="text-right text-gray-500">
          {formattedTime && `마지막 업데이트 시간 ${formattedTime}`}
        </Typography.P2>
      </div>
    </div>
  );
}

function NewsRow({ id, title, press }: News) {
  return (
    <div key={id} className="flex gap-3 justify-between">
      <div className="w-full text-right">
        <Typography.P1>{title}</Typography.P1>
        <Typography.P2 className="text-otl-gray">{press}</Typography.P2>
      </div>
    </div>
  );
}
