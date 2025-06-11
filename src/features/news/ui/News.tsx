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
        {mockNewsData.map((news, index) => (
          <NewsRow title={news.title} press={news.press} key={index} />
        ))}
      </div>
    </div>
  );
}

function NewsRow({ title, press }: News) {
  return (
    <div className="flex gap-3 justify-between">
      <div className="w-[165px]">
        <Typography.P1>{title}</Typography.P1>
        <Typography.P2 className="text-otl-gray">{press}</Typography.P2>
      </div>
      <div className="w-[60px] h-[60px] bg-otl-sub rounded-md"></div>
    </div>
  );
}
