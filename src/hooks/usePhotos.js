import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../store/photos";

export const usePhotos = (searchQuery = " ") => {
  const lib = useSelector((state) =>
    state.photos.find((lib) => lib.category === searchQuery)
  );

  const dispatch = useDispatch();
  if (!lib || lib?.photos.length === 0) {
    dispatch(setPhotos(searchQuery));
    return [];
  }

  return lib.photos;
};
