import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../store/photos";
import { useEffect } from "react";

export const usePhotos = (searchQuery = " ") => {
  const lib = useSelector((state) =>
    state.photos.find((lib) => lib.category === searchQuery)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!lib || lib?.photos.length === 0) {
      dispatch(setPhotos(searchQuery));
    }
  }, [searchQuery, dispatch, lib]);

  return lib ? lib.photos : [];
};
