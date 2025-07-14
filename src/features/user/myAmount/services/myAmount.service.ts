import { API_END_POINT } from "@/shared/utils/fetcher";

export async function chargeMoney(amount: number) {
  const { url, method } = API_END_POINT.user.postCharge();
  const result = await fetch(url, {
    method: method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: amount,
    }),
  });

  return await result.text();
}
