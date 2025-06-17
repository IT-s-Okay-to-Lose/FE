import type { News } from "@/entities/news/news.entity";
import { mockNewsData } from "@/entities/news/news.mock";
import Typography from "@/shared/components/atoms/Typography";

export function News() {
  return (
    <div className="w-[245px] h-[250px]">
      <Typography.Head2 className="w-full text-right mb-3">
        주요 뉴스
      </Typography.Head2>
      <div className="flex flex-col gap-3">
        {mockNewsData.map((news) => (
          <NewsRow
            key={news.id}
            id={news.id}
            title={news.title}
            press={news.press}
            imageUrl={news.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

function NewsRow({ id, title, press, imageUrl }: News) {
  return (
    <div key={id} className="flex gap-3 justify-between">
      <div className="w-[165px]">
        <Typography.P1>{title}</Typography.P1>
        <Typography.P2 className="text-otl-gray">{press}</Typography.P2>
      </div>
      <div className="w-[60px] h-[60px] rounded-md overflow-hidden size-fit">
        <img src={imageUrl} className="w-[60px] h-[60px]" />
      </div>
    </div>
  );
}
