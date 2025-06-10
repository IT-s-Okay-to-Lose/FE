import { useEffect, useState } from "react";

export default function useMediaQuery(): boolean {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const query = "(min-width: 850px)";
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    listener(); // 초기 실행
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return matches;
}
