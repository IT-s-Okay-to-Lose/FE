import { mockStockData } from "@/shared/mock/chartTable.mock";
import { RevoGrid } from "@revolist/react-datagrid";

function Table() {
  const columns = [
    {
      prop: "name",
      name: "종목",
    },
    {
      prop: "quantity",
      name: "보유수량",
    },
    {
      prop: "price",
      name: "매수금액/평가금액",
    },
    {
      prop: "fluctuationRate",
      name: "등락률",
    },
  ];

  // 숫자를 3자리 단위 콤마 포함 문자열로 포맷팅하는 함수
  const formatNumber = (value: number) =>
    value.toLocaleString("ko-KR", { maximumFractionDigits: 0 });

  // averagePrice, evaluatedPrice를 문자열로 합쳐서 price 필드를 만드는 데이터 가공
  const dataWithPriceField = mockStockData.map((stock) => ({
    ...stock,
    price: `${formatNumber(stock.averagePrice)} / ${formatNumber(stock.evaluatedPrice)}`,
  }));

  return (
    <div className="w-full bg-otl-disabled h-[500px]">
      <RevoGrid columns={columns} source={dataWithPriceField} />
    </div>
  );
}

export default Table;
