import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import type {
  DynamicStockData,
  StaticStockMeta,
  Stock,
} from "@/entities/stock/stock.entity";
// import {
//   mockDynamicStockData,
//   mockStaticStockMeta,
// } from "@/entities/stock/stock.mock";
import Typography from "@/shared/components/atoms/Typography";
import URL from "@/shared/constants/URL";
import cn from "@/shared/utils/cn";
import { formatNumber } from "@/shared/utils/format";
import { getMergedStock } from "../services/liveStockTable.service";

const STOCK_PER_PAGE = 9;

function LiveStockTable() {
  const navigation = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [mergedStock, setMergedStock] = useState<Stock[]>([]);

  const staticMap = useRef<Record<string, StaticStockMeta>>({});
  const dynamicMap = useRef<Record<string, DynamicStockData>>({});
  const wsRef = useRef<WebSocket | null>(null);

  // 병합 및 정렬된 초기 데이터 로드 -> 누적거래량을 기준으로 정렬
  async function getMergedStockFunction() {
    const result = await getMergedStock();

    // staticMap, dynamicMap 초기화
    result.forEach((stock) => {
      staticMap.current[stock.code] = {
        code: stock.code,
        name: stock.name,
        imageUrl: stock.imageUrl,
      };
      dynamicMap.current[stock.code] = {
        code: stock.code,
        currentPrice: stock.currentPrice,
        fluctuationRate: stock.fluctuationRate,
        accumulatedVolume: stock.accumulatedVolume,
      };
    });

    setMergedStock(result);
  }

  // WebSocket 수신 시  데이터를 병합해 다시 반영
  function renderStocks() {
    const combined: Stock[] = [];

    for (const code in staticMap.current) {
      combined.push({
        ...staticMap.current[code],
        ...dynamicMap.current[code],
      });
    }

    // 누적 거래량 기준 정렬 후 상태 반영
    setMergedStock(
      combined.sort((a, b) => b.accumulatedVolume - a.accumulatedVolume)
    );
  }

  useEffect(() => {
    // 최초 마운트 시: 초기 데이터 로딩 & 웹소켓 연결
    getMergedStockFunction();

    const socket = new WebSocket(
      `${import.meta.env.VITE_WS_API_URL}/auth/ws/stock`
    );
    wsRef.current = socket;

    socket.onopen = () => {
      console.log("Socket 연결됨");
    };

    // 실시간 데이터 수신 처리
    socket.onmessage = (event) => {
      // console.log("📥 [WebSocket 수신]:", event.data);
      try {
        const result = JSON.parse(event.data);
        const updates: DynamicStockData[] = result.data;

        // 동적 데이터 갱신
        updates.forEach((stock) => {
          dynamicMap.current[stock.code] = stock;
        });
        // 병합 및 상태 갱신
        renderStocks();
      } catch (e) {
        console.error("JSON 파싱 실패:", e);
      }
    };

    return () => socket.close();
  }, []);

  // 테이블 페이지네이션
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * STOCK_PER_PAGE;
    return mergedStock.slice(startIndex, startIndex + STOCK_PER_PAGE);
  }, [currentPage, mergedStock]);

  const totalPages = Math.ceil(mergedStock.length / STOCK_PER_PAGE);

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
      <div className="w-full h-[500px] overflow-auto rounded">
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
