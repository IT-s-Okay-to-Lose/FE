import Typography from "@/shared/components/atoms/Typography";

export function MarketIndexSummary() {
  return (
    <div className="w-[245px] h-[250px]">
      <Typography.Head2 className="w-full text-right  mb-3">
        지수 · 환율
      </Typography.Head2>
      <IndexRow />
      <IndexRow />
      <IndexRow />
    </div>
  );
}

function IndexRow() {
  return (
    <div className="w-full">
      <Typography.SubTitle1 className="text-right">코스피</Typography.SubTitle1>

      <Typography.SubTitle1 className="text-right text-otl-stock-up">
        2,765.14 +66.17 (2.5%)
      </Typography.SubTitle1>
    </div>
  );
}
