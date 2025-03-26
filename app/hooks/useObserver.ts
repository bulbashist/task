import { useCallback, useRef } from "react";

const useObserver = (callback: () => void) => {
  const observer = useRef<IntersectionObserver>(null);
  const observe = useCallback(
    (elem: HTMLDivElement) => {
      if (!observer.current) {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            callback();
          }
        });
      }
      if (elem) {
        observer.current.observe(elem);
        return () => observer.current?.disconnect();
      }
    },
    [callback]
  );
  return observe;
};

export { useObserver };
