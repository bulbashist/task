import { useCallback, useEffect, useState } from "react";
import { store } from "../store/store";
import { loadMorePhotos } from "../store/photos/photos";

const callbackWrapper = () => {
  let allowLoad = true;

  return (_e, searchQuery) => {
    if (
      window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 150 &&
      allowLoad
    ) {
      allowLoad = false;

      store.dispatch(loadMorePhotos(searchQuery));
      setTimeout(() => {
        allowLoad = true;
      }, 1000);
    }
  };
};

const callback = callbackWrapper();

export const useContinousLoad = (searchQuery = " ") => {
  const cb = useCallback((_e) => callback(_e, searchQuery), [searchQuery]);

  useEffect(() => {
    window.addEventListener("scroll", cb);

    return () => window.removeEventListener("scroll", cb);
  }, [cb]);
};
