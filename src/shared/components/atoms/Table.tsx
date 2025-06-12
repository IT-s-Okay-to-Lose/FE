import { mockStockData } from "@/entities/stock/stock.mock";
import { formatNumber } from "@/shared/utils/format";
import { RevoGrid } from "@revolist/react-datagrid";

function Table() {
  const columns = [
    {
      prop: "name",
      name: "종목",
    },
    {
      prop: "currentPrice",
      name: "현재가",
    },
    {
      prop: "fluctuationRate",
      name: "등락률",
    },
    {
      prop: "accumulatedVolume",
      name: "누적거래량",
    },
  ];

  const dataWithPriceField = mockStockData.map((stock) => ({
    ...stock,
    currentPrice: `${formatNumber(stock.currentPrice)}원`,
    fluctuationRate: `${stock.fluctuationRate}%`,
  }));

  return (
    <div className="w-full bg-otl-disabled h-[500px]">
      <RevoGrid columns={columns} source={dataWithPriceField} />
    </div>
  );
}

export default Table;
