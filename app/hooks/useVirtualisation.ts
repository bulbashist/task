import { useCallback, useState } from "react";

/*
 Возможно, через requestanimationframe лучше, но я не понял доводов почему из статьи 
*/

const useVirtualization = (rowHeight: number) => {
  const [topCount, setTopCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(100);

  const cb = useCallback(
    (ref: HTMLDivElement) => {
      const t = () => {
        const top = Math.floor((ref.scrollTop - 100) / rowHeight);
        const bottom = Math.floor(
          (ref.scrollTop + visualViewport!.height + 500) / rowHeight
        );
        setTopCount((prev) => (Math.abs(top - prev) > 1 ? top : prev));
        setBottomCount((prev) => (Math.abs(bottom - prev) > 1 ? bottom : prev));
      };

      ref?.addEventListener("scroll", t);
      return () => ref?.removeEventListener("scroll", t);
    },
    [rowHeight]
  );

  return { topCount, bottomCount, rowHeight, ref: cb };
};

export { useVirtualization };
