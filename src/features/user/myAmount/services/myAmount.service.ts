export async function chargeMoney(amount: number) {
  // 임시 endpoint
  const result = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/charge`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      amount: amount,
    }),
  });

  const res = await result.json();

  return res;
}
