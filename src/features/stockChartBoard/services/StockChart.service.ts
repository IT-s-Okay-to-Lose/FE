import type { CandleData, VolumeData } from "@/entities/stock/stock.entity";

export function openChartSocket(
  candleWsRef: React.RefObject<WebSocket | null>,
  selectedCode: string | null,
  setCandleData: React.Dispatch<React.SetStateAction<CandleData[]>>
) {
  const socket = new WebSocket(`${import.meta.env.VITE_WS_API_URL}/ws/chart`);
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
    const data = JSON.parse(event.data);

    const candles = data.candle;
    if (
      Array.isArray(candles) &&
      candles.length === 5 &&
      typeof candles[0] === "string"
    ) {
      setCandleData((prev) => {
        if (prev.length === 0) return [candles as CandleData];

        const last = prev[prev.length - 1];

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
  const volumeSocket = new WebSocket(
    `${import.meta.env.VITE_WS_API_URL}/ws/volume`
  );
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
          return [volumes as VolumeData];
        }

        const updated = [...prev];
        const lastIndex = updated.length - 1;
        updated[lastIndex] = volumes as VolumeData;

        return updated;
      });
    } else {
      console.warn("⚠️ 잘못된 volume 데이터", volumes);
    }
  };

  return () => volumeSocket.close();
}
