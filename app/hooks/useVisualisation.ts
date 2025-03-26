import { useEffect, useState } from "react";

const useVisualization = (rowSize: number) => {
  const [topCount, setTopCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(100);

  useEffect(() => {
    const callback = () => {
      const viewport = visualViewport!;
      setTopCount(Math.floor((viewport.pageTop - 100) / rowSize));
      setBottomCount(
        Math.floor((viewport.pageTop + visualViewport!.height + 500) / 39)
      );
    };

    document.addEventListener("scroll", callback);

    return () => document.removeEventListener("scroll", callback);
  }, [rowSize]);

  return [topCount, bottomCount, rowSize];
};

export { useVisualization };
