import Typography from "@/shared/components/atoms/Typography";

function News() {
  return (
    <div className="w-[245px] h-[250px]">
      <Typography.Head2 className="w-full text-right mb-3">
        주요 뉴스
      </Typography.Head2>
      <div className="flex flex-col gap-3">
        <NewsRow />
        <NewsRow />
        <NewsRow />
      </div>
    </div>
  );
}

function NewsRow() {
  return (
    <div className="flex gap-3 justify-between">
      <div className="w-[165px]">
        <Typography.P1>
          코스피 블라블라블라블라코스피 블라블라블라블라
        </Typography.P1>
        <Typography.P2 className="text-otl-gray">
          1시간 전 · 이데일리
        </Typography.P2>
      </div>
      <div className="w-[60px] h-[60px] bg-otl-sub rounded-md"></div>
    </div>
  );
}
export default News;
