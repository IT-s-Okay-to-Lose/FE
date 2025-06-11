import { useState } from "react";

export function useFilterTab(defaultTab: string = "실시간") {
  const [filterTab, setFilterTab] = useState<string>(defaultTab);

  // 여기서 chartData api 호출

  return { filterTab, setFilterTab };
}
