export default async function reissue() {
  const result = await fetch(`${import.meta.env.VITE_APP_API_URL}/reissue`, {
    method: "GET",
    credentials: "include",
  });

  return result;
}
