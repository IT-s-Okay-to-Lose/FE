import type {
  CandleData,
  MarketStockPriceInfo,
  VolumeData,
} from "@/entities/stock/stock.entity";
import { API_END_POINT } from "@/shared/utils/fetcher";
import { formatDateToNoon } from "@/shared/utils/format";

export async function getPrevCandleData(
  selectedCode: string
): Promise<CandleData[]> {
  const { url, method } = API_END_POINT.stock.getPrevCandleData(selectedCode);
  const result = await fetch(url, { method: method });
  const res = await result.json();
  const data = res.data;

  const normalized = data.map(
    ([date, open, high, low, close]: CandleData) =>
      [formatDateToNoon(date), open, high, low, close] as const
  );

  return normalized;
}

export async function getPrevVolumeData(
  selectedCode: string
): Promise<VolumeData[]> {
  const { url, method } = API_END_POINT.stock.getPrevVolumeData(selectedCode);
  const result = await fetch(url, { method: method });

  const res = await result.json();
  const data = res.data;

  const normalized = data.map(
    ([date, volume]: VolumeData) => [formatDateToNoon(date), volume] as const
  );

  return await normalized;
}

export function openChartSocket(
  candleWsRef: React.RefObject<WebSocket | null>,
  selectedCode: string | null,
  setCandleData: React.Dispatch<React.SetStateAction<CandleData[]>>,
  setMarketPriceInfo: React.Dispatch<React.SetStateAction<MarketStockPriceInfo>>
) {
  const { url } = API_END_POINT.stock.getCandleData();
  const socket = new WebSocket(url);
  candleWsRef.current = socket;

  socket.onopen = () => {
    if (candleWsRef.current?.readyState === WebSocket.OPEN) {
      const payload = {
        codes: [selectedCode],
        interval: "realtime",
      };
      candleWsRef.current.send(JSON.stringify(payload));
    }
  };

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    const data: {
      candle: CandleData;
      marketInfo: MarketStockPriceInfo;
    } = message.data;
    const candles = data.candle;
    const marketInfo = data.marketInfo;

    if (
      Array.isArray(candles) &&
      candles.length === 5 &&
      typeof candles[0] === "string"
    ) {
      setMarketPriceInfo(marketInfo);
      setCandleData((prev) => {
        if (prev.length === 0)
          return [
            [
              formatDateToNoon(candles[0]),
              candles[1],
              candles[2],
              candles[3],
              candles[4],
            ] as CandleData,
          ];

        const last = prev[prev.length - 1];

        if (last[0] !== formatDateToNoon(candles[0])) {
          const updatedCandle: CandleData = [
            formatDateToNoon(candles[0]),

            last[1],
            candles[2],
            Math.min(last[3], candles[3]),
            Math.max(last[4], candles[4]),
          ];

          const updated = [...prev];
          updated[updated.length] = updatedCandle;

          return updated;
        }

        const updatedCandle: CandleData = [
          last[0],
          last[1],
          candles[2],
          Math.min(last[3], candles[3]),
          Math.max(last[4], candles[4]),
        ];

        const updated = [...prev];
        updated[updated.length - 1] = updatedCandle;
        return updated;
      });
    } else {
      console.warn("⚠️ 잘못된 candle 데이터", candles);
    }
  };

  return () => socket.close();
}

export function openVolumeSocket(
  volumeWsRef: React.RefObject<WebSocket | null>,
  selectedCode: string | null,
  setVolumeData: React.Dispatch<React.SetStateAction<VolumeData[]>>
) {
  const { url } = API_END_POINT.stock.getVolumeData();
  const volumeSocket = new WebSocket(url);
  volumeWsRef.current = volumeSocket;

  volumeSocket.onopen = () => {
    if (volumeWsRef.current?.readyState === WebSocket.OPEN) {
      if (selectedCode) {
        volumeWsRef.current.send(selectedCode);
      }
    }
  };

  volumeSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const volumes = data.volume;

    if (
      Array.isArray(volumes) &&
      volumes.length === 2 &&
      typeof volumes[0] === "string" &&
      typeof volumes[1] === "number"
    ) {
      setVolumeData((prev) => {
        if (prev.length === 0) {
          return [[formatDateToNoon(volumes[0]), volumes[1]] as VolumeData];
        }

        const last = prev[prev.length - 1];

        if (last[0] !== formatDateToNoon(volumes[0])) {
          const updatedVolume: VolumeData = [
            formatDateToNoon(volumes[0]),
            volumes[1],
          ];

          const updated = [...prev];
          updated[updated.length] = updatedVolume;

          return updated;
        }

        const updatedVolume: VolumeData = [last[0], volumes[1]];

        const updated = [...prev];
        updated[updated.length - 1] = updatedVolume;

        return updated;
      });
    } else {
      console.warn("⚠️ 잘못된 volume 데이터", volumes);
    }
  };

  return () => volumeSocket.close();
}
