import { API_END_POINT } from "@/shared/utils/fetcher";

export async function chargeMoney(amount: number) {
  // 임시 endpoint
  const { url, method } = API_END_POINT.user.postCharge();
  const result = await fetch(url, {
    method: method,
    credentials: "include",
    body: JSON.stringify({
      amount: amount,
    }),
  });

  const res = await result.json();

  return res;
}
