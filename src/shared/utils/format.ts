// 숫자 포맷 (3자리 콤마)
export const formatNumber = (value: number) =>
  value.toLocaleString("ko-KR", { maximumFractionDigits: 0 });

// 날짜 포맷 (예: "2025년 6월 12일")
export function formatFullDateToKorean(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}

// 날짜 포맷 (예: "6월 12일")
export function formatDateToKorean(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}월 ${day}일`;
}

// 시간 포맷 (예: "오전 9:00")
export function formatTimeToKorean(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return date.toLocaleTimeString("ko-KR", options);
}

// 전체 포맷 (예: "6월 12일 오전 9:00")
export function formatFullDateTime(date: Date): string {
  return `${formatDateToKorean(date)} ${formatTimeToKorean(date)}`;
}
