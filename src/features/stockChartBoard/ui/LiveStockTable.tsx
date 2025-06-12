import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

import type { MarketStock } from "@/entities/stock/stock.entity";
import { mockStockData } from "@/entities/stock/stock.mock";
import { formatNumber } from "@/shared/utils/format";

const STOCK_PER_PAGE = 8;
function LiveStockTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * STOCK_PER_PAGE;
    return mockStockData.slice(startIndex, startIndex + STOCK_PER_PAGE);
  }, [currentPage]);

  const totalPages = Math.ceil(mockStockData.length / STOCK_PER_PAGE);

  const columns = useMemo<ColumnDef<MarketStock>[]>(
    () => [
      {
        accessorKey: "name",
        header: "종목",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "currentPrice",
        header: "현재가",
        cell: (info) => `${formatNumber(info.getValue() as number)}원`,
      },
      {
        accessorKey: "fluctuationRate",
        header: "등락률",
        cell: (info) => `${(info.getValue() as number).toFixed(2)}%`,
      },
      {
        accessorKey: "accumulatedVolume",
        header: "누적거래량",
        cell: (info) => formatNumber(info.getValue() as number),
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
      <div className="w-full overflow-auto rounded border border-gray-300">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="px-4 py-2 text-left" key={header.id}>
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t">
                {row.getVisibleCells().map((cell) => (
                  <td className="px-4 py-2" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
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
