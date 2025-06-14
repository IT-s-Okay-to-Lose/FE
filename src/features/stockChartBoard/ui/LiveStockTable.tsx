import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import type {
  DynamicStockData,
  StaticStockMeta,
  Stock,
} from "@/entities/stock/stock.entity";
import {
  mockDynamicStockData,
  mockStaticStockMeta,
} from "@/entities/stock/stock.mock";
import Typography from "@/shared/components/atoms/Typography";
import URL from "@/shared/constants/URL";
import cn from "@/shared/utils/cn";
import { formatNumber } from "@/shared/utils/format";

const STOCK_PER_PAGE = 5;

function mergeStockData(
  meta: StaticStockMeta[],
  dynamic: DynamicStockData[]
): Stock[] {
  const map = new Map<number, DynamicStockData>(dynamic.map((d) => [d.id, d]));
  return meta
    .filter((m) => map.has(m.id))
    .map((m) => ({
      ...m,
      ...map.get(m.id)!,
    }));
}

function LiveStockTable() {
  const navigation = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // 병합 및 정렬된 데이터 -> 누적거래량을 기준으로 정렬
  const mergedAndSorted = useMemo(() => {
    const merged = mergeStockData(mockStaticStockMeta, mockDynamicStockData);
    return merged.sort((a, b) => b.accumulatedVolume - a.accumulatedVolume);
  }, []);

  // 테이블 페이지네이션
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * STOCK_PER_PAGE;
    return mergedAndSorted.slice(startIndex, startIndex + STOCK_PER_PAGE);
  }, [currentPage, mergedAndSorted]);

  const totalPages = Math.ceil(mergedAndSorted.length / STOCK_PER_PAGE);

  const columns = useMemo<ColumnDef<Stock>[]>(
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
        accessorKey: "currentPrice",
        header: "현재가",
        cell: (info) => (
          <Typography.P1>
            {`${formatNumber(info.getValue() as number)}원`}
          </Typography.P1>
        ),
      },
      {
        accessorKey: "fluctuationRate",
        header: "등락률",
        cell: (info) => {
          const value = info.getValue() as number;
          const isPositive = value > 0;
          const isNegative = value < 0;

          const cellClass = isPositive
            ? "bg-red-100 text-red-600"
            : isNegative
              ? "bg-blue-100 text-blue-600"
              : "bg-gray-100 text-gray-600";

          return (
            <Typography.SubTitle2
              className={`px-2 py-1 rounded ${cellClass} text-right`}
            >
              {value.toFixed(2)}%
            </Typography.SubTitle2>
          );
        },
      },
      {
        accessorKey: "accumulatedVolume",
        header: "누적거래량",
        cell: (info) => (
          <Typography.P1>{`${formatNumber(
            info.getValue() as number
          )}주`}</Typography.P1>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
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
              const code = row.original.code;
              return (
                <tr
                  key={row.id}
                  onClick={() => navigation(`${URL.DETAIL}?stock_id=${code}`)}
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            이전
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

export default LiveStockTable;
