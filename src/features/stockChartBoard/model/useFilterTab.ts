import { useState } from "react";

export function useFilterTab(defaultTab: string = "실시간") {
  const [filterTab, setFilterTab] = useState<string>(defaultTab);

  return { filterTab, setFilterTab };
}
