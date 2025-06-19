import type { News } from "@/entities/news/news.entity";
import Typography from "@/shared/components/atoms/Typography";
import { useEffect, useState } from "react";
import { getNews } from "../services/news.service";

export function News() {
  const [news, setNews] = useState<News[]>([]);

  async function getNewsFunction() {
    const result = await getNews();
    setNews(result);
  }

  useEffect(() => {
    getNewsFunction();
  }, []);

  return (
    <div className="w-[245px] h-[250px]">
      <Typography.Head2 className="w-full text-right mb-3">
        주요 뉴스
      </Typography.Head2>
      <div className="flex flex-col gap-3">
        {news.map((news) => (
          <NewsRow
            key={news.id}
            id={news.id}
            title={news.title}
            press={news.press}
          />
        ))}
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
