export async function getNews() {
  const result = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/v1/news/top3`,
    {
      method: "GET",
    }
  );

  return await result.json();
}
