import Typography from "@/shared/components/atoms/Typography";

function StockDetail() {
  return (
    <div>
      <Typography.Head2>삼성전자</Typography.Head2>
      <Typography.Head1 className="text-otl-stock-up">
        56,900원
      </Typography.Head1>
      <Typography.P1>
        전일 대비 <i className="bi bi-triangle-fill" /> 1,200원 (32%)
      </Typography.P1>
    </div>
  );
}

export default StockDetail;
