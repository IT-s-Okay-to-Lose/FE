import type {
  CandleData,
  MarketStock,
  VolumeData,
  StockPortfolio,
  StockHoldingData,
} from "@/entities/stock/stock.entity";

// 내 모의투자 현황 주식 목데이터
export const mockPortfolioData: StockPortfolio[] = [
  {
    id: 1,
    name: "삼성전자",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",
    quantity: 13,
    averagePrice: 650000,
    evaluatedPrice: 720000,
    fluctuationRate: 10.77,
  },
  {
    id: 2,
    name: "SK하이닉스",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",
    quantity: 5,
    averagePrice: 500000,
    evaluatedPrice: 530000,
    fluctuationRate: 6.0,
  },
  {
    id: 3,
    name: "LG화학",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    quantity: 8,
    averagePrice: 210000,
    evaluatedPrice: 200000,
    fluctuationRate: -4.76,
  },
];

// 메인페이지 실시간 차트 주식 목데이터
export const mockStockData: MarketStock[] = [
  {
    id: 1,
    name: "삼성전자",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",
    currentPrice: 650000,
    accumulatedVolume: 720000,
    fluctuationRate: 10.77,
  },
  {
    id: 2,
    name: "SK하이닉스",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",
    currentPrice: 500000,
    accumulatedVolume: 530000,
    fluctuationRate: 6.0,
  },
  {
    id: 3,
    name: "LG화학",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 2100000,
    accumulatedVolume: 2000000,
    fluctuationRate: -4.76,
  },
  {
    id: 4,
    name: "NAVER",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 1200000,
    accumulatedVolume: 1300000,
    fluctuationRate: 8.33,
  },
  {
    id: 5,
    name: "카카오",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 600000,
    accumulatedVolume: 550000,
    fluctuationRate: -8.33,
  },
  {
    id: 6,
    name: "현대차",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",
    currentPrice: 400000,
    accumulatedVolume: 450000,
    fluctuationRate: 12.5,
  },
  {
    id: 7,
    name: "기아",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",
    currentPrice: 700000,
    accumulatedVolume: 665000,
    fluctuationRate: -5.0,
  },
  {
    id: 8,
    name: "POSCO홀딩스",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",
    currentPrice: 900000,
    accumulatedVolume: 990000,
    fluctuationRate: 10.0,
  },
  {
    id: 9,
    name: "삼성SDI",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 800000,
    accumulatedVolume: 820000,
    fluctuationRate: 2.5,
  },
  {
    id: 10,
    name: "롯데케미칼",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 950000,
    accumulatedVolume: 910000,
    fluctuationRate: -4.21,
  },
  {
    id: 11,
    name: "한화솔루션",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 1100000,
    accumulatedVolume: 1230000,
    fluctuationRate: 11.82,
  },
  {
    id: 12,
    name: "LG전자",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 720000,
    accumulatedVolume: 690000,
    fluctuationRate: -4.17,
  },
  {
    id: 13,
    name: "KT",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 640000,
    accumulatedVolume: 660000,
    fluctuationRate: 3.12,
  },
  {
    id: 14,
    name: "SK텔레콤",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 1000000,
    accumulatedVolume: 1020000,
    fluctuationRate: 2.0,
  },
  {
    id: 15,
    name: "셀트리온",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 1500000,
    accumulatedVolume: 1450000,
    fluctuationRate: -3.33,
  },
  {
    id: 16,
    name: "하나금융지주",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 400000,
    accumulatedVolume: 420000,
    fluctuationRate: 5.0,
  },
  {
    id: 17,
    name: "신한지주",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 390000,
    accumulatedVolume: 410000,
    fluctuationRate: 5.13,
  },
  {
    id: 18,
    name: "엔씨소프트",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 1800000,
    accumulatedVolume: 1700000,
    fluctuationRate: -5.56,
  },
  {
    id: 19,
    name: "크래프톤",
    code: "0001",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 2100000,
    accumulatedVolume: 2000000,
    fluctuationRate: -4.76,
  },
  {
    id: 20,
    code: "0001",
    name: "두산에너빌리티",
    imageUrl:
      "https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-065350.png",

    currentPrice: 850000,
    accumulatedVolume: 930000,
    fluctuationRate: 9.41,
  },
];

// 차트 상세 페이지 그래프 캔들 목데이터
export const mockCandleData: CandleData[] = [
  ["2023-10-01T09:00:00", 101.55, 99.83, 99.29, 103.04],
  ["2023-10-01T09:05:00", 100.8, 98.24, 96.47, 101.65],
  ["2023-10-01T09:10:00", 100.04, 98.0, 96.37, 100.66],
  ["2023-10-01T09:15:00", 98.16, 97.16, 96.79, 99.62],
  ["2023-10-01T09:20:00", 96.62, 96.31, 96.04, 97.7],
  ["2023-10-01T09:25:00", 94.57, 96.53, 93.64, 97.1],
  ["2023-10-01T09:30:00", 94.99, 93.24, 92.39, 96.23],
  ["2023-10-01T09:35:00", 93.04, 95.19, 91.66, 95.23],
  ["2023-10-01T09:40:00", 96.51, 93.57, 92.89, 97.27],
  ["2023-10-01T09:45:00", 93.31, 90.4, 89.47, 94.56],
  ["2023-10-01T09:50:00", 89.82, 90.76, 88.28, 92.01],
  ["2023-10-01T09:55:00", 91.15, 89.64, 89.61, 92.66],
  ["2023-10-01T10:00:00", 88.08, 87.86, 86.36, 89.27],
  ["2023-10-01T10:05:00", 87.89, 90.41, 86.13, 92.41],
  ["2023-10-01T10:10:00", 91.94, 94.23, 90.32, 95.07],
  ["2023-10-01T10:15:00", 93.41, 92.71, 91.3, 95.2],
  ["2023-10-01T10:20:00", 92.07, 92.95, 91.48, 94.75],
  ["2023-10-01T10:25:00", 91.81, 94.22, 91.72, 95.34],
  ["2023-10-01T10:30:00", 94.87, 92.14, 90.16, 95.08],
  ["2023-10-01T10:35:00", 92.33, 94.17, 91.76, 94.28],
  ["2023-10-01T10:40:00", 94.53, 93.54, 93.02, 96.48],
  ["2023-10-01T10:45:00", 94.17, 96.61, 93.3, 96.97],
  ["2023-10-01T10:50:00", 97.81, 99.82, 96.34, 100.56],
  ["2023-10-01T10:55:00", 100.16, 100.19, 99.72, 100.36],
  ["2023-10-01T11:00:00", 99.68, 97.42, 97.39, 101.59],
  ["2023-10-01T11:05:00", 97.14, 95.82, 95.67, 99.04],
  ["2023-10-01T11:10:00", 97.43, 99.27, 96.53, 100.31],
  ["2023-10-01T11:15:00", 98.38, 98.73, 97.88, 100.23],
  ["2023-10-01T11:20:00", 99.15, 99.8, 97.2, 100.88],
  ["2023-10-01T11:25:00", 101.42, 100.1, 98.62, 103.25],
  ["2023-10-01T11:30:00", 101.63, 103.65, 99.85, 105.14],
  ["2023-10-01T11:35:00", 103.33, 105.74, 101.74, 106.09],
  ["2023-10-01T11:40:00", 105.22, 103.42, 102.78, 105.53],
  ["2023-10-01T11:45:00", 102.56, 101.23, 99.47, 103.49],
  ["2023-10-01T11:50:00", 100.76, 101.85, 99.21, 103.18],
  ["2023-10-01T11:55:00", 100.49, 100.12, 98.92, 102.35],
  ["2023-10-01T12:00:00", 101.46, 102.3, 99.87, 104.06],
  ["2023-10-01T12:05:00", 103.55, 103.81, 103.2, 104.87],
  ["2023-10-01T12:10:00", 102.72, 103.01, 102.42, 104.05],
  ["2023-10-01T12:15:00", 102.67, 100.61, 99.69, 102.68],
  ["2023-10-01T12:20:00", 101.81, 102.49, 101.05, 102.77],
  ["2023-10-01T12:25:00", 104.26, 105.45, 103.24, 106.24],
  ["2023-10-01T12:30:00", 104.41, 107.27, 102.7, 107.73],
  ["2023-10-01T12:35:00", 105.86, 107.63, 105.27, 108.56],
  ["2023-10-01T12:40:00", 107.16, 106.69, 105.3, 107.38],
  ["2023-10-01T12:45:00", 107.28, 105.87, 105.01, 108.79],
  ["2023-10-01T12:50:00", 103.93, 103.44, 101.89, 105.11],
  ["2023-10-01T12:55:00", 102.83, 102.89, 100.84, 103.13],
  ["2023-10-01T13:00:00", 104.01, 101.49, 100.64, 104.3],
  ["2023-10-01T13:05:00", 102.39, 104.55, 102.32, 105.42],
];

// 차트 상세 페이지 그래프 거래량 목데이터
export const mockVolumeData: VolumeData[] = [
  ["2023-10-01T09:00:00", 4238],
  ["2023-10-01T09:05:00", 7909],
  ["2023-10-01T09:10:00", 3251],
  ["2023-10-01T09:15:00", 1787],
  ["2023-10-01T09:20:00", 6782],
  ["2023-10-01T09:25:00", 8936],
  ["2023-10-01T09:30:00", 1647],
  ["2023-10-01T09:35:00", 5033],
  ["2023-10-01T09:40:00", 6132],
  ["2023-10-01T09:45:00", 2098],
  ["2023-10-01T09:50:00", 4948],
  ["2023-10-01T09:55:00", 9107],
  ["2023-10-01T10:00:00", 5265],
  ["2023-10-01T10:05:00", 9646],
  ["2023-10-01T10:10:00", 4721],
  ["2023-10-01T10:15:00", 3067],
  ["2023-10-01T10:20:00", 9283],
  ["2023-10-01T10:25:00", 1053],
  ["2023-10-01T10:30:00", 9287],
  ["2023-10-01T10:35:00", 3970],
  ["2023-10-01T10:40:00", 6229],
  ["2023-10-01T10:45:00", 5975],
  ["2023-10-01T10:50:00", 4888],
  ["2023-10-01T10:55:00", 8596],
  ["2023-10-01T11:00:00", 6128],
  ["2023-10-01T11:05:00", 4832],
  ["2023-10-01T11:10:00", 4286],
  ["2023-10-01T11:15:00", 5917],
  ["2023-10-01T11:20:00", 1785],
  ["2023-10-01T11:25:00", 4734],
  ["2023-10-01T11:30:00", 8140],
  ["2023-10-01T11:35:00", 5904],
  ["2023-10-01T11:40:00", 1900],
  ["2023-10-01T11:45:00", 2834],
  ["2023-10-01T11:50:00", 8917],
  ["2023-10-01T11:55:00", 2437],
  ["2023-10-01T12:00:00", 7881],
  ["2023-10-01T12:05:00", 5551],
  ["2023-10-01T12:10:00", 2129],
  ["2023-10-01T12:15:00", 3813],
  ["2023-10-01T12:20:00", 5810],
  ["2023-10-01T12:25:00", 7549],
  ["2023-10-01T12:30:00", 3639],
  ["2023-10-01T12:35:00", 3250],
  ["2023-10-01T12:40:00", 9352],
  ["2023-10-01T12:45:00", 3226],
  ["2023-10-01T12:50:00", 5403],
  ["2023-10-01T12:55:00", 6757],
  ["2023-10-01T13:00:00", 2859],
  ["2023-10-01T13:05:00", 9251],
];

export const mockStockHoldingData: StockHoldingData[] = [
  {
    stockName: "엔비디아",
    percent: 48.8,
    color: "#FF6384",
  },
  {
    stockName: "삼성전자",
    percent: 30.2,
    color: "#36A2EB",
  },
  {
    stockName: "하이닉스",
    percent: 21,
    color: "#FFCE56",
  },
];
