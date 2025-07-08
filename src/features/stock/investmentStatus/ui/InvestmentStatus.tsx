import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

import type { StockPortfolio } from "@/entities/stock/stock.entity";
import { mockPortfolioData } from "@/entities/stock/stock.mock";
import Typography from "@/shared/components/atoms/Typography";
import URL from "@/shared/constants/URL";
import cn from "@/shared/utils/cn";
import { formatNumber } from "@/shared/utils/format";
import { useNavigate } from "react-router-dom";

function InvestmentStatus() {
  return (
    <div className="flex flex-col gap-5">
      <Typography.Head1>내 모의투자 현황</Typography.Head1>
      <InvestmentStatusTable />
    </div>
  );
}

export default InvestmentStatus;

function InvestmentStatusTable() {
  const navigation = useNavigate();

  const columns = useMemo<ColumnDef<StockPortfolio>[]>(
    () => [
      {
        accessorKey: "name",
        header: "종목",
        cell: (info) => {
          const { name, imageUrl } = info.row.original;

          return (
            <div className="flex gap-2 items-center">
              <div className="overflow-hidden w-[25px] h-[25px] rounded-full">
                <img src={imageUrl} />
              </div>
              <Typography.SubTitle2>{name}</Typography.SubTitle2>
            </div>
          );
        },
      },
      {
        accessorKey: "quantity",
        header: "보유수량",
        cell: (info) => {
          const quantity = info.getValue() as number;
          return <Typography.P1>{`${quantity}주`}</Typography.P1>;
        },
      },
      {
        accessorKey: "averagePrice",
        header: "매수금액",
        cell: (info) => {
          const averagePrice = info.getValue() as number;
          return (
            <Typography.P1>{`${formatNumber(averagePrice)}원`}</Typography.P1>
          );
        },
      },
      {
        accessorKey: "evaluatedPrice",
        header: "평가금액",
        cell: (info) => {
          const evaluatedPrice = info.getValue() as number;
          return (
            <Typography.P1>{`${formatNumber(evaluatedPrice)}원`}</Typography.P1>
          );
        },
      },
      {
        accessorKey: "fluctuationRate",
        header: "등락률",
        cell: (info) => {
          const fluctuationRate = info.getValue() as number;
          return <Typography.P1>{`${fluctuationRate}%`}</Typography.P1>;
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: mockPortfolioData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-auto rounded">
      <table className="min-w-full text-sm">
        <thead className="text-otl-gray">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, idx) => (
                <th
                  className={
                    idx === 0
                      ? "w-[300px] px-4 py-2 text-left"
                      : "w-[120px] px-4 py-2 text-right"
                  }
                  key={header.id}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => {
            const code = row.original.stock_code;
            return (
              <tr
                key={row.id}
                onClick={() =>
                  navigation(`${URL.PAGE.DETAIL}?stock_id=${code}`)
                }
                className={cn(
                  "border-t border-gray-50 cursor-pointer hover:bg-gray-100",
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                )}
              >
                {row.getVisibleCells().map((cell, idx) => (
                  <td
                    className={cn(
                      idx === 0 ? "px-4 py-2" : "px-4 py-2 text-right"
                    )}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
